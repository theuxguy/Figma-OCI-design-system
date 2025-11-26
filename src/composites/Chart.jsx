import React from 'react'

function GroupedBarChart({ series = [], labels = [], width = 760, height = 250, xAxisLabel = 'X-axis', yAxisLabel = 'Y-axis' }) {
  const padding = { top: 10, right: 10, bottom: 40, left: 50 }
  const svgWidth = typeof width === 'number' ? width : 760
  const innerWidth = svgWidth - padding.left - padding.right
  const innerHeight = height - padding.top - padding.bottom

  const maxValue = Math.max(...series.flatMap(s => s.values), 50)
  const groupCount = Math.max(1, labels.length)
  const groupWidth = innerWidth / groupCount
  const barGroupPadding = 8

  return (
    <svg viewBox={`0 0 ${svgWidth} ${height}`} width="100%" height={height} role="img" aria-label="Grouped bar chart">
      <g transform={`translate(${padding.left},${padding.top})`}>
        {[0, 10, 20, 30, 40, 50].map((val, i) => {
          const y = innerHeight - (val / maxValue) * innerHeight
          return (
            <g key={i}>
              <line x1={0} y1={y} x2={innerWidth} y2={y} stroke="var(--border-divider)" strokeWidth={1} />
              <text x={-10} y={y + 4} textAnchor="end" fontSize={12} fill="var(--text-secondary)">{val}</text>
            </g>
          )
        })}

        {labels.map((label, gi) => {
          const groupX = gi * groupWidth
          const seriesCount = series.length || 1
          const barWidth = (groupWidth - barGroupPadding * 2) / seriesCount
          return (
            <g key={gi} transform={`translate(${groupX + barGroupPadding},0)` }>
              {series.map((s, si) => {
                const val = s.values[gi] || 0
                const h = (val / maxValue) * innerHeight
                const x = si * barWidth
                const y = innerHeight - h
                return (
                  <rect key={si} x={x} y={y} width={Math.max(0, barWidth - 2)} height={h} fill={s.color} rx={2} />
                )
              })}
              <text x={groupWidth / 2} y={innerHeight + 18} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">{label}</text>
            </g>
          )
        })}

        <text x={innerWidth / 2} y={innerHeight + 36} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">{xAxisLabel}</text>
        <g transform={`translate(-40,${innerHeight / 2}) rotate(-90)`}>
          <text textAnchor="middle" fontSize={12} fill="var(--text-secondary)">{yAxisLabel}</text>
        </g>
      </g>
    </svg>
  )
}

export default GroupedBarChart
