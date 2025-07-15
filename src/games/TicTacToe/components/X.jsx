export default function X({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox='0 0 100 100'>
      <line
        x1='20'
        y1='20'
        x2='80'
        y2='80'
        stroke='#545454'
        strokeWidth='12'
        strokeDasharray='84'
        strokeDashoffset='84'
      >
        <animate
          attributeName='stroke-dashoffset'
          from='84'
          to='0'
          dur='0.15s'
          fill='freeze'
          keySplines='0.4 0 0.2 1'
          calcMode='spline'
        />
      </line>
      <line
        x1='80'
        y1='20'
        x2='20'
        y2='80'
        stroke='#545454'
        strokeWidth='12'
        strokeDasharray='84'
        strokeDashoffset='84'
      >
        <animate
          attributeName='stroke-dashoffset'
          from='84'
          to='0'
          begin='0.15s'
          dur='0.15s'
          fill='freeze'
          keySplines='0.4 0 0.2 1'
          calcMode='spline'
        />
      </line>
    </svg>
  );
}
