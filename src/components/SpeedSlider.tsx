import { Gauge } from "lucide-react";

type Props = {
  rate: number;
  setRate: (rate: number) => void;
};

function SpeedSlider({ rate, setRate }: Props) {
  return (
    <div className="mt-8">
      <div className="mb-3 flex items-center justify-between">
        <label className="flex items-center gap-2 text-lg font-semibold text-slate-500 dark:text-slate-100">
          <Gauge size={20} className="text-blue-600" />
          Speech Speed
        </label>

        <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-100">
          {rate.toFixed(1)}x
        </span>
      </div>

      <input
        type="range"
        min={0.5}
        max={2}
        step={0.1}
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        className="
          h-2
          w-full
          cursor-pointer
          appearance-none
          rounded-full
          bg-slate-200
          accent-blue-600
          dark:bg-slate-700
        "
      />

      <div className="mt-2 flex justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>Slow</span>
        <span>Normal</span>
        <span>Fast</span>
      </div>
    </div>
  );
}

export default SpeedSlider;
