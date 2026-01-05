export const playSound = (soundFile: string) => {
  try {
    const audio = new Audio(`/assets/audio/${soundFile}`);
    audio.volume = 0.5; // Set volume to 100%
    audio.play().catch((error) => {
      console.warn("Could not play sound:", error);
    });
  } catch (error) {
    console.warn("Audio not supported:", error);
  }
};