import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
  isLoading: true,
  isError: '',
  post: {}
}

const dataFetchReducer = (dataState, action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return {
        isLoading: true,
        isError: '',
        post: {}
      }
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        isError: '',
        post: action.payload,
      }
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        isError: '読み込みに失敗しました',
        post: {}
      }
    default:
      return dataState
  }
}

const useReducerAxios = () => {
  const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      console.log(res.data)
      dispatch({type: 'FETCH_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_ERROR'})
    })
  })
  return (
    <div>
      <h3>{dataState.isLoading ? 'Loading...' : dataState.post.title}</h3>
      <p>{dataState.isError ? dataState.isError : null}</p>
    </div>
  )
}

export default useReducerAxios
