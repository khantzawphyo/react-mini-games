export default function O({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox='0 0 100 100'>
      <circle
        cx='50'
        cy='50'
        r='30'
        stroke='#F2EBD3'
        strokeWidth='12'
        fill='none'
        strokeDasharray='188.5'
        strokeDashoffset='188.5'
      >
        <animate
          attributeName='stroke-dashoffset'
          from='188.5'
          to='0'
          dur='0.3s'
          fill='freeze'
          keySplines='0.4 0 0.2 1'
          calcMode='spline'
        />
      </circle>
    </svg>
  );
}
