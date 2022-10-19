
export async function musicImport() {
    const music = fetch("../../public/music.json");
    return music;
  }