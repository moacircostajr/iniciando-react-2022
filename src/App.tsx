import { useState } from 'react'
import { Tweet } from './components/Tweet'

import './App.css'

function App() {

  const [tweets, setTweets] = useState<string[]>(['1', '2', '3', '4'])

  function createTweet() {
    let nextTweet: number = Number(tweets[tweets.length -1])
    setTweets([...tweets, String(++nextTweet)])
  }

  return (
    <>
    {
      tweets.map(tweet => {
        return <Tweet key={tweet} text={tweet} />
      })
    }
    <button onClick={createTweet} style={{
      backgroundColor: '#8257e6',
      border: 0,
      padding: '6px 12px',
      color: '#FFF'
    }}
    >Adicionar tweet</button>
    </>
  )
}

export default App
