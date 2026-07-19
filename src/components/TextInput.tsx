type TextInputProps = {
  text: string;
  setText: (value: string) => void;
};

function TextInput({ text, setText }: TextInputProps) {
  return (
    <div className="mt-8">
      <div className="mb-3 flex items-center justify-between">
        <label className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          Enter Text
        </label>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          {text.length} Characters
        </span>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder="Type or paste your text here..."
        className="
w-full
resize-none
rounded-2xl
border
border-slate-300
bg-slate-50
p-5
text-lg
text-slate-700
placeholder:text-slate-400
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
dark:placeholder:text-slate-500
dark:focus:bg-slate-900
dark:focus:ring-blue-900
"
      />

      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Supports long paragraphs, articles, and documents.
      </p>
    </div>
  );
}

export default TextInput;