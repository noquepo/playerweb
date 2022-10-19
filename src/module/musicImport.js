
export async function musicImport() {
  const music = await JSON.parse('{"language":"JavaScript","IDE":"Visual Studio Code","theme":"dark"}');
  return music;
}
//const musiclist = await fetch();
//console.log(musiclist);
console.log(musicImport());
