import { useState } from "react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import VoiceSelector from "./components/VoiceSelector";
import SpeechControls from "./components/SpeechControls";
import SpeedSlider from "./components/SpeedSlider";
import ThemeToggle from "./components/ThemeToggle";

import { useSpeech } from "./hooks/useSpeech";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(1);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  const { darkMode, toggleTheme } = useTheme();
  const { speak, pause, resume, stop, isSpeaking } = useSpeech();

  const wordCount =
    text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-100
        via-blue-50
        to-indigo-100
        py-10
        px-4
        transition-colors
        duration-300
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-800
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-3xl
          bg-white
          p-8
          shadow-2xl
          transition-colors
          duration-300
          dark:bg-slate-900
        "
      >
        {/* Theme Toggle */}
        <div className="mb-6 flex justify-end">
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>

        {/* Header */}
        <Header />

        {/* Dashboard Layout */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Left Panel */}
          <div
            className="
              lg:col-span-2
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-6
              shadow-sm
              transition-colors
              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            <h2 className="mb-5 text-xl font-semibold text-slate-800 dark:text-slate-100">
              Text Editor
            </h2>

            <TextInput text={text} setText={setText} />

            <div className="mt-5 flex justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>{wordCount} Words</span>
              <span>{text.length} Characters</span>
            </div>
          </div>

          {/* Right Panel */}
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-6
              shadow-sm
              space-y-6
              transition-colors
              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Controls
            </h2>

            <VoiceSelector
              selectedVoice={selectedVoice}
              setSelectedVoice={setSelectedVoice}
            />

            <SpeedSlider rate={rate} setRate={setRate} />

            <SpeechControls
              onSpeak={() => speak(text, selectedVoice, rate)}
              onPause={pause}
              onResume={resume}
              onStop={stop}
              disabled={!text.trim()}
            />

            <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-slate-900">
              <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                Status
              </h3>

              <p
                className={`font-medium ${
                  isSpeaking
                    ? "text-green-500"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {isSpeaking ? "🔊 Speaking..." : "Ready"}
              </p>
            </div>

            <button
              onClick={() => setText("")}
              className="
                w-full
                rounded-xl
                bg-red-500
                py-3
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-200
                hover:scale-[1.02]
                hover:bg-red-600
              "
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
