import React from 'react'
import Button from '../components/button'

const THEMES = ['default', 'primary', 'secondary', 'danger']
const APPEARANCES = ['solid', 'outline', 'ghost', 'link']
const SIZES = ['sm', 'md', 'lg']

function Row({ theme, appearance }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
          <Button theme={theme} appearance={appearance} size={size}>
            {`${theme}/${appearance}/${size}`}
          </Button>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{size}</div>
        </div>
      ))}
      <div style={{ width: 24 }} />
      <Button theme={theme} appearance={appearance} size="md" loading>
        Loading
      </Button>
      <Button theme={theme} appearance={appearance} size="md" disabled>
        Disabled
      </Button>
    </div>
  )
}

export default function ButtonDemo() {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>Button Variants Demo</h2>
      {THEMES.map((theme) => (
        <div key={theme} style={{ marginBottom: 20 }}>
          <h3 style={{ margin: '8px 0' }}>{theme}</h3>
          {APPEARANCES.map((appearance) => (
            <div key={appearance} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 13.5, color: 'var(--text-secondary)', marginBottom: 6 }}>{appearance}</div>
              <Row theme={theme} appearance={appearance} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
