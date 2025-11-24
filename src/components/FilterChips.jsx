import React from 'react'

export default function FilterChips({ filters = [] }) {
  return (
    <div className="filters">
      <div style={{fontWeight:600}}>Applied filters</div>
      <div className="chips">
        {filters.map((f, i) => (
          <div className="chip" key={i}>
            <span style={{fontSize:13.75}}>{f.label}</span>
            {f.value && <b>{f.value}</b>}
          </div>
        ))}
      </div>
    </div>
  )
}
