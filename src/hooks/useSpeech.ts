import { useState } from "react";

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (
    text: string,
    voice: SpeechSynthesisVoice | null,
    rate: number,
  ) => {
    if (!text.trim()) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = rate;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const pause = () => speechSynthesis.pause();

  const resume = () => speechSynthesis.resume();

  const stop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return {
    speak,
    pause,
    resume,
    stop,
    isSpeaking,
  };
}
