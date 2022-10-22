import { Howl } from "howler";
const url = "https://cdn.pixabay.com/download/audio/2022/05/17/audio_581ce59413.mp3?filename=metal-dark-matter-111451.mp3";

class Song {
  constructor(title, img, url) {
    this.title = title;
    this.img = img;
    this.url = url;
    this.music = new Howl({
      src: [this.url]
    });
  }
}
const cancion = new Howl({
  src: [url]
});
const music1 = new Song("hola", "hola", url);
let musicController = 1;
export function playPause() {
  if (musicController === 1) {
    music1.music.play();
    musicController = ++musicController;
  } else if (musicController === 2) {
    music1.music.pause();
    musicController = 1;
  }
}
