import { describe, it, expect } from "vitest";
import { musicImport } from "../module/musicImport";
const musiclist = await fetch("https://lenguajejs.com/retos/nivel-medio/mp3-player/songs.json.txt");
const music = await JSON.parse(musiclist);
console.log(music);
// describe("", () => {
//   it("the music imports fine", () => {
//     expect(musicImport()).toEqual("https://cdn.pixabay.com/download/audio/2022/05/17/audio_581ce59413.mp3?filename=metal-dark-matter-111451.mp3");
//   });
// });
