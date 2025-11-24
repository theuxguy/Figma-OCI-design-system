import React from 'react'

function GroupedBarChart({ series = [], labels = [], width = 760, height = 250, xAxisLabel = 'X-axis label', yAxisLabel = 'Y-axis label' }) {
  const padding = { top: 10, right: 10, bottom: 40, left: 50 }
  const innerWidth = width - padding.left - padding.right
  const innerHeight = height - padding.top - padding.bottom

  // compute max
  const maxValue = Math.max(...series.flatMap(s => s.values)) || 0

  const groupCount = labels.length
  const groupWidth = innerWidth / Math.max(1, groupCount)
  const barGroupPadding = 8

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${padding.left},${padding.top})`}>
        {/* Y axis labels and grid lines */}
        {[0, 10, 20, 30, 40, 50].map((val, i) => {
          const y = innerHeight - (val / (maxValue || 50)) * innerHeight
          return (
            <g key={i}>
              <line x1={0} y1={y} x2={innerWidth} y2={y} stroke="var(--border-divider)" strokeWidth={1} />
              <text x={-10} y={y + 4} textAnchor="end" fontSize={12} fill="var(--text-secondary)">{val}</text>
            </g>
          )
        })}

        {/* bars */}
        {labels.map((label, gi) => {
          const groupX = gi * groupWidth
          const seriesCount = series.length
          const barWidth = (groupWidth - barGroupPadding * 2) / seriesCount
          return (
            <g key={gi} transform={`translate(${groupX + barGroupPadding},0)` }>
              {series.map((s, si) => {
                const val = s.values[gi] || 0
                const h = (val / (maxValue || 1)) * innerHeight
                const x = si * barWidth
                const y = innerHeight - h
                return (
                  <rect key={si} x={x} y={y} width={barWidth - 2} height={h} fill={s.color} rx={2} />
                )
              })}
              {/* group label */}
              <text x={groupWidth / 2} y={innerHeight + 18} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">{label}</text>
            </g>
          )
        })}

        {/* x-axis label */}
        <text x={innerWidth / 2} y={innerHeight + 36} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">{xAxisLabel}</text>

        {/* y-axis label vertical */}
        <g transform={`translate(-40,${innerHeight / 2}) rotate(-90)`}>
          <text textAnchor="middle" fontSize={12} fill="var(--text-secondary)">{yAxisLabel}</text>
        </g>
      </g>
    </svg>
  )
}

export default GroupedBarChart
