export default {
  namespace: 'app',
  state: {
    posts: [{id: '111'}, {id: '222'}],
    isFetching: false,
    selectedSubreddit: 'reactjs'
  },
  subscriptions: {},
  effects: {
    * fetchPosts ({payload:subreddit}, {put, select, call}) {
      yield put({type: 'requestPosts'})
      const data = yield fetch(`http://www.reddit.com/r/${subreddit}.json`)
      const json = yield data.json()
      yield put({type: 'recievedPosts', payload: json})
    }
  },
  reducers: {
    select_subreddit (state, {payload: subreddit}) {
      return {...state, selectedSubreddit: subreddit}
    },
    requestPosts (state) {
      return {
        ...state,
        isFetching: true
      }
    },
    recievedPosts (state, {payload: json}) {
      return {
        ...state,
        isFetching: false,
        posts: json.data.children.map((child)=>child.data)
      }
    }
  }
}
