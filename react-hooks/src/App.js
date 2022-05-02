//import logo from './logo.svg';
import React, {createContext, useState} from 'react'
import './App.css';
import Context from './components/ContextSample/ContextA'

export const UserContext = createContext()
export const HobbyContext = createContext()

function App() {

  const [user, setUser] = useState({
    name: 'セイラ',
    age: '17',
  })

  const [hobby, setHobby] = useState('キャンプ')
  return(
    <div clasName='App'>
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <Context/>
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
