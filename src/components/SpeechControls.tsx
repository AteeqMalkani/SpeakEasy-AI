import { Volume2, Pause, Play, Square } from "lucide-react";

type Props = {
  onSpeak: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  disabled: boolean;
};

function SpeechControls({
  onSpeak,
  onPause,
  onResume,
  onStop,
  disabled,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={onSpeak}
        disabled={disabled}
        className="
          flex items-center gap-2
          rounded-xl
          bg-blue-600
          px-5 py-3
          font-medium
          text-white
          shadow-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <Volume2 size={20} />
        Speak
      </button>

      <button
        onClick={onPause}
        className="
          flex items-center gap-2
          rounded-xl
          bg-amber-500
          px-5 py-3
          font-medium
          text-white
          shadow-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-amber-600
        "
      >
        <Pause size={20} />
        Pause
      </button>

      <button
        onClick={onResume}
        className="
          flex items-center gap-2
          rounded-xl
          bg-emerald-600
          px-5 py-3
          font-medium
          text-white
          shadow-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-emerald-700
        "
      >
        <Play size={20} />
        Resume
      </button>

      <button
        onClick={onStop}
        className="
          flex items-center gap-2
          rounded-xl
          bg-red-600
          px-5 py-3
          font-medium
          text-white
          shadow-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-red-700
        "
      >
        <Square size={20} />
        Stop
      </button>
    </div>
  );
}

export default SpeechControls;
