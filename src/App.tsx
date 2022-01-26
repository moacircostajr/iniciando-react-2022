import { useState } from 'react'
import { Tweet } from './components/Tweet'

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
    <button onClick={createTweet}>Adicionar tweet</button>
    </>
  )
}

export default App
