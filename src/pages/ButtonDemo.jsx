import React from 'react'
import Button from '../components/button'
import IconPlus from '../components/icons/Plus'
import IconCheck from '../components/icons/Check'
import IconTrash from '../components/icons/Trash'
import IconDownload from '../components/icons/Download'

// Grouping by style as requested
const GROUPS = ['Interactive - CTA', 'Interactive - Outline', 'Interactive - Borderless', 'Interactive - Solid']
const SIZES = ['sm', 'md', 'lg']

function propsForGroup(group) {
  switch (group) {
    case 'CTA':
    case 'Interactive - CTA':
      return { theme: 'primary', appearance: 'solid' }
    case 'Outline':
    case 'Interactive - Outline':
      return { theme: 'default', appearance: 'outline' }
    case 'Borderless':
    case 'Interactive - Borderless':
      return { theme: 'default', appearance: 'ghost' }
    case 'Solid':
    case 'Interactive - Solid':
    default:
      return { theme: 'default', appearance: 'solid' }
  }
}

function StateButton({ theme, appearance, size, state, type = 'text' }) {
  const className = state === 'hover' ? 'btn--hover' : state === 'active' ? 'btn--active' : ''
  const disabled = state === 'disabled'
  const loading = state === 'loading'

  const common = { theme, appearance, size, className }

  if (type === 'icon') {
    return (
      <Button {...common} iconLeft={<IconPlus />} iconOnly size={size} disabled={disabled} loading={loading} aria-label={`${theme} ${appearance} icon`} />
    )
  }

  if (type === 'icon-text') {
    return (
      <Button {...common} iconLeft={<IconDownload />} disabled={disabled} loading={loading}>
        {'button'}
      </Button>
    )
  }

  return (
    <Button {...common} disabled={disabled} loading={loading}>
      {'button'}
    </Button>
  )
}

export default function ButtonDemo() {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>Button Variants (grouped by Style)</h2>
      <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12, padding: '8px 12px', background: 'rgba(22,21,19,0.04)', borderRadius: 4 }}>
        Groups: CTA (primary solid), Outline, Borderless (ghost), Solid (default solid). States ordered top-to-bottom: enabled, active, hover, disabled.
      </div>

      {GROUPS.map((group) => {
        const { theme, appearance } = propsForGroup(group)
        
        return (
          <section key={group} style={{ marginBottom: 28 }}>
            <h3 style={{ margin: '8px 0' }}>{group}</h3>

            {/* All groups now show only interactive buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {SIZES.map((size) => (
                <div key={size} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13, marginBottom: 8 }}>Text — {size}</div>
                    <Button theme={theme} appearance={appearance} size={size}>
                      button
                    </Button>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, marginBottom: 8 }}>Icon + Text — {size}</div>
                    <Button theme={theme} appearance={appearance} size={size} iconLeft={<IconDownload />}>
                      button
                    </Button>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, marginBottom: 8 }}>Icon — {size}</div>
                    <Button theme={theme} appearance={appearance} size={size} iconLeft={<IconPlus />} iconOnly aria-label="interactive icon" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
