import React from 'react'
import GroupedBarChart from '../composites/Chart'

export default function DataVisualizationRuleBuilderRow({
  order = 1,
  fieldLabel = 'Label',
  fieldValue = 'Value',
  series = [],
  labels = [],
  onRemove = null
}) {
  return (
    <div
      className="dv-rule-row"
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '12px 0',
        borderBottom: '1px solid var(--border-divider)'
      }}
    >
      {/* Order box */}
      <div style={{ width: 65, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 60, minHeight: 70 }}>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-enabled)',
              height: 52,
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Order</div>
              <div style={{ fontSize: 16, color: 'var(--text-primary)', fontWeight: 400 }}>{order}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Field selector */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: 52,
                background: 'var(--surface)',
                border: '1px solid var(--border-enabled)',
                padding: '0 8px 0 16px',
                borderRadius: '4px'
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: 36, justifyContent: 'center' }}>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>{fieldLabel}</div>
                <div style={{ fontSize: 16, color: 'var(--text-primary)' }}>{fieldValue}</div>
              </div>
              <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>▾</div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border-divider)', borderRadius: 8, padding: 24 }}>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 20, lineHeight: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>
              Data visualization card title (horizontally grouped Bar)
            </h4>
            <div>
              {/* placeholder for action icon */}
              <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }} aria-label="Card action">⋯</button>
            </div>
          </div>

          <div style={{ marginBottom: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ fontWeight: 600 }}>Applied filters</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div className="chip">Interval <b>Auto</b></div>
              <div className="chip">Statistic <b>Mean</b></div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
              <GroupedBarChart series={series} labels={labels} height={220} xAxisLabel="X-axis label" yAxisLabel="Y-axis label" />
            </div>
            <aside style={{ width: 100 }}>
              {(series || []).map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                  <div style={{ width: 10, height: 10, background: s.color, borderRadius: 2 }} />
                  <div style={{ fontSize: 12, color: 'var(--text-primary)' }}>{s.name}</div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>

      {/* Remove button */}
      <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: onRemove ? 'pointer' : 'default' }}>
        {onRemove ? (
          <button onClick={onRemove} aria-label="Remove rule" style={{ background: 'transparent', border: 'none', fontSize: 18, cursor: 'pointer' }}>✕</button>
        ) : (
          <div style={{ opacity: 0.6 }}>✕</div>
        )}
      </div>
    </div>
  )
}
