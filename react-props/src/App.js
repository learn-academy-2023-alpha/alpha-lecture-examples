import React, { useState } from "react"
import Episode from "./components/Episode"
import Player from "./components/Player"
import "./App.css"

const App = () => {
  // logic component
  const episodes = [
    "When and Why to Adopt New Technologies",
    "Supastarter - The Ultimate Tool For Indie Hackers",
    "Making the Web Weird Again With Astro",
    "Making a Strong Case for Accessibility",
    "An Average Developer Does Above Average Things",
    "Breaking into Tech with just a Portfolio"
  ]
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])

  const triggerNextEpisode = () => {
    let nextEpisode = episodes.indexOf(currentEpisode) + 1
    setCurrentEpisode(episodes[nextEpisode])
  }

  return (
    <>
      <h1>Compressed.fm Clone</h1>
      <div className="episode-cards">
        {episodes.map((episode) => {
          return <Episode title={episode} />
        })}
      </div>
      <Player
        currentEpisode={currentEpisode}
        triggerNextEpisode={triggerNextEpisode}
      />
    </>
  )
}

export default App
