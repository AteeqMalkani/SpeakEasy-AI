import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

type Props = {
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: (voice: SpeechSynthesisVoice) => void;
};

function VoiceSelector({ selectedVoice, setSelectedVoice }: Props) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();

      setVoices(availableVoices);

      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    loadVoices();

    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, [selectedVoice, setSelectedVoice]);

  return (
    <div className="mt-8">
      <label className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-100">
        <Globe size={20} className="text-blue-600" />
        Select Voice
      </label>

      <select
        value={selectedVoice?.name ?? ""}
        onChange={(e) => {
          const voice = voices.find((v) => v.name === e.target.value);

          if (voice) {
            setSelectedVoice(voice);
          }
        }}
        className="
          w-full
          rounded-2xl
          border
          border-slate-300
          bg-slate-50
          px-5
          py-4
          text-slate-700
          shadow-sm
          outline-none
          transition-all
          duration-200
          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-200
          dark:border-slate-700
          dark:bg-slate-800
          dark:text-slate-100
          dark:focus:bg-slate-900
        "
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} • {voice.lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VoiceSelector;
