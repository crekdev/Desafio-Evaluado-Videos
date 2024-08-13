let IIFE = (()=> {
  let setVideo = (url, id) => {
    document.getElementById(id).setAttribute("src", url)
  }

  return {setVideo}
})()

class Media {
  #url
  constructor(url) {
    this.#url = url
  }

  get url() {
    return this.#url
  }

  setStart() {
    return 'Este método es para realizar un cambio en la URL del video'
  }
}

class Player extends Media {
  #id
  constructor(url, id) {
    super(url)
    this.#id = id
  }

  playMedia() {
    IIFE.setVideo(this.url ,this.#id)
  }

  setStart(seg) {
    // &amp;start=${tiempo}
    let newURL = `${this.url}&amp;start=${seg}`
    IIFE.setVideo(newURL, this.#id);
  }
}

const serie = new Player("https://www.youtube.com/embed/NcgfoRpWLTs?si=mKYTCmw9-2nnMZqV", "series")
const movie = new Player("https://www.youtube.com/embed/hKa8U-8vsfU?si=v-E87EktNVJL8trV", "movies")
const music = new Player("https://www.youtube.com/embed/VdLRpagzAik?si=BhH6tsrqs2UexKEf", "music")

music.playMedia()
movie.playMedia()
serie.playMedia()

movie.setStart(40)