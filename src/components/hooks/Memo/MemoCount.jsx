import { useRef, memo } from "react";

export const MemoCounts = memo(() => {
  const renderCount = useRef(0);
  console.log(renderCount.current);

  return (
    <div className="mt-3 font-display text-center">
      <p>
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
      </p>
    </div>
  );
});
