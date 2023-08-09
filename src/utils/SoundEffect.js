const playSoundEffect = () => {
    const scriptURL = new URL(import.meta.url);
    const soundURL = new URL(
      "../assets/interface-124464.mp3",
      scriptURL
    ).toString();
    const audio = new Audio(soundURL);
    audio.play();
  };

  export default playSoundEffect