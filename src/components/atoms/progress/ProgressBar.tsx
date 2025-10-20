

const ProgressBar = ({
  value = 0,
  max = 100,
  height = "12px",
  color = "bg-blue-500",
  backgroundColor = "bg-gray-200",
  showLabel = true,
  animated = false,
  striped = false,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="w-full">
      <div
        className={`w-full rounded-full overflow-hidden ${backgroundColor}`}
        style={{ height }}
      >
        <div
          className={`h-full rounded-full transition-all duration-300 ease-out ${color} ${
            striped
              ? "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:40px_100%]"
              : ""
          } ${animated ? "animate-pulse" : ""}`}
          style={{
            width: `${percentage}%`,
            backgroundSize: striped ? "40px 100%" : undefined,
            animation:
              striped && animated ? "slide 1s linear infinite" : undefined,
          }}
        />
      </div>
      {showLabel && (
        <div className="text-sm text-gray-600 mt-1 text-right">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
}; 

export default ProgressBar
