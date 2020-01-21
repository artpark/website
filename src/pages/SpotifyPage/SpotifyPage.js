import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SpotifyPage = () => {
  const [songCovers, setSongCovers] = useState([])

  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/playlists/1bcLTiVH5kKW8dCZyxYl7w', {
        headers: {
          Authorization: '',
        },
      })
      .then(res => {
        const songs = res.data.tracks.items
        let images = []
        Object.values(songs).forEach(val => {
          images.push(val.track.album.images[1].url)
        })

        var tmp = []
        images = images.filter(function(v) {
          if (tmp.indexOf(v.toString()) < 0) {
            tmp.push(v.toString())
            return v
          }
        })

        var imagesHTML = []
        images.map(val => {
          imagesHTML.push(<img src={val} />)
        })

        setSongCovers(imagesHTML)
      })
  })

  return <div>{songCovers}</div>
}

export default SpotifyPage
