import React from 'react'
import GroupedBarChart from './Chart'
import FilterChips from './FilterChips'

export default function DataVisualizationCard({ title, series, labels, filters }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-actions">…</div>
      </div>

      <FilterChips filters={filters} />

      <div className="chart-wrapper">
        <div style={{flex:1}}>
          <GroupedBarChart series={series} labels={labels} width={760} height={250} />
        </div>
        <aside className="legend">
          {series.map((s, i) => (
            <div className="legend-item" key={i}>
              <div className="legend-swatch" style={{background:s.color}} />
              <div style={{fontSize:12,color:'var(--text-primary)'}}>{s.name}</div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
