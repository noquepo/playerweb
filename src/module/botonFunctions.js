import { Howl } from "howler";
export function play() {
  const music = new Howl({
    src: ["https://cdn.pixabay.com/download/audio/2022/05/17/audio_581ce59413.mp3?filename=metal-dark-matter-111451.mp3"]
  });
  return music.play();
}
