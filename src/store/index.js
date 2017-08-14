import { Subject, Observable, isObservable } from 'rxjs'

const initState = {
  query: 'poop song',
  songs: [],
  queue: []
}

const action$ = new Subject()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        query: action.payload
      }
      break;
    case 'MUSIC_LOADING':
      return {
        ...state,
        isLoading: true
      }
      break;
    case 'MUSIC_LOADED':
      return {
        ...state,
        isLoading: false,
        songs: action.payload,
      };
      break;
    case 'ADD_TO_QUEUE':
      return {
        ...state,
        queue: [action.payload]
      }
      break;
    default:
      return state
  }
}

const actionCreator = (func) => (...args) => {
  const action = func.call(null, ...args);
  action$.next(action);
  if (action.payload instanceof Observable) {
    action.payload.subscribe((next) => {
      return action$.next(next);
    })
  }
};

const search = actionCreator((payload) => {
  return {
    type: 'MUSIC_LOADING',
    payload: Observable.ajax(`http://localhost:9393/song/${payload}`)
      .map(({response}) => {
        return response
      })
      .map((music) => {
        return {
          type: 'MUSIC_LOADED',
          payload: music
        }
      })
  };
});

const addToQueue = actionCreator((payload) => ({
  type: 'ADD_TO_QUEUE',
  payload
}))

const store$ = action$
  .startWith(initState)
  .scan(reducer);

export {
  store$,
  search,
  addToQueue
}
