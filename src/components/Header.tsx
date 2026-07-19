import { Volume2 } from "lucide-react";

function Header() {
  return (
    <header
      className="
        mb-8
        rounded-3xl
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-purple-600
        p-8
        text-white
        shadow-xl
      "
    >
      <div className="flex items-center gap-5">
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-white/20
            backdrop-blur-sm
          "
        >
          <Volume2 size={34} />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight">SpeakEasy AI</h1>

          <p className="mt-2 text-blue-100 dark:text-blue-200">
            Convert text into natural, human-like speech directly in your
            browser.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
