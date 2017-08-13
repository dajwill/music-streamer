import { Subject, Observable, isObservable } from 'rxjs'

const initState = {
  query: 'poop song',
  songs: [],
  queue: []
}

const action$ = new Subject()

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        query: action.payload
      }
      break;
    case 'MUSIC_LOADING':
      console.log('yeee 1');
      return {
        ...state,
        isLoading: true
      }
      break;
    case 'MUSIC_LOADED':
      console.log('yeee 2');
      return {
        ...state,
        isLoading: false,
        songs: action.payload,
      };
      break;
    default:
      return state
  }
}

const actionCreator = (func) => (...args) => {
  // console.log(payload);
  console.log(func.call(null, ...args));
  const action = func.call(null, ...args);
  action$.next(action);
  console.log('!!!', action.payload instanceof Observable, '!!!');
  console.log(isObservable);
  if (action.payload instanceof Observable) {
    console.log('is observable');
    console.log(action.payload);
    action.payload.subscribe((next) => {
      return action$.next(next);
    })
  }
  // return action$;
};

const search = actionCreator((payload) => {
  console.log('searching');
  return {
    type: 'MUSIC_LOADING',
    payload: Observable.ajax(`http://localhost:9393/song/${payload}`)
      .map(({response}) => {
        console.log('response');
        console.log(response);
        return response
      })
      .map((music) => {
        console.log('music', music);
        return {
          type: 'MUSIC_LOADED',
          payload: music
        }
      })
  };
});

// const ensureObservable = (action) => {
//   console.log(action, '~~~~');
//   (action.payload instanceof Observable)
//     ? action.payload
//     : Observable.from([action]);
// }

// Using flatMap to squash async streams

const store$ = action$
  // .flatMap(ensureObservable)
  .startWith(initState)
  .scan(reducer);

export {
  store$,
  search
}
