interface Props {
  percentage: number;
}

const CountDown: React.FC<Props> = ({ percentage }): React.ReactElement => {
  const sqSize = 35;
  const strokeWidth = 3;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="flex space-s-2 items-center my-3">
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className=" stroke-gray-400 fill-transparent"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className=" stroke-primary fill-transparent"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <span>{percentage + " ثانیه"}</span>
    </div>
  );
};

export default CountDown;
