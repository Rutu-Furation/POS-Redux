const playSoundEffect2
 = () => {
    const scriptURL = new URL(import.meta.url);
    const soundURL = new URL(
      "../assets/stop-13692.mp3",
      scriptURL
    ).toString();
    const audio = new Audio(soundURL);
    audio.play();
  };

  export default playSoundEffect2
