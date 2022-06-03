import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SpotifyPage = () => {
  const [songCovers, setSongCovers] = useState([])

  useEffect(() => {
    const client_id = 'be30a1ed57db437d910240e2f2685bc1'
    var key = ''
    axios
      .get(`https://accounts.spotify.com/authorize?client_id=${client_id}`)
      .then((res) => console.log(res))

    axios
      .get('https://api.spotify.com/v1/playlists/1bcLTiVH5kKW8dCZyxYl7w', {
        headers: {
          Authorization:
            'Bearer BQChwLm7Q-3rcxfhmz-P0t1sewlviMIJMx0h4wTQvXKyqv4wYVK2tdisOZzItvv5c3263sJBU2kT0boROhmRk3S-_uQKfBrhqI4_JIe1lVeOOs6zyz7oh5zsV-MGuo5XOjsFuzWv0hT2_fE',
        },
      })
      .then((res) => {
        const songs = res.data.tracks.items
        let images = []
        Object.values(songs).forEach((val) => {
          images.push(val.track.album.images[1].url)
        })

        var tmp = []
        images = images.filter(function (v) {
          if (tmp.indexOf(v.toString()) < 0) {
            tmp.push(v.toString())
            return v
          }
        })

        var imagesHTML = []
        images.map((val) => {
          imagesHTML.push(<img src={val} />)
        })

        setSongCovers(imagesHTML)
      })
  })

  return <div>{songCovers}</div>
}

export default SpotifyPage
