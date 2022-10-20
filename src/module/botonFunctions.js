import { Howl } from "howler";
const url = "https://cdn.pixabay.com/download/audio/2022/05/17/audio_581ce59413.mp3?filename=metal-dark-matter-111451.mp3";
class Song {
  constructor(title, img, url) {
    this.title = title;
    this.img = img;
    this.url = url;
    const music = new Howl({
      src: [metal.url]
    });
    function play() {
      return music.play();
    }
  }
}

export const metal = new Song("Hola", "hey", url);
export
const music = new Howl({
  src: [metal.url]
});
export function play() {
  return music.play();
}
export function pause() {
  music.pause();
}
