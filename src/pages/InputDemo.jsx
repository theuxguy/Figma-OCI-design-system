import React, { useState } from 'react'
import Input from '../components/Input'

export default function InputDemo() {
  const [values, setValues] = useState({
    basic: '',
    withValue: 'Value',
    withPrefix: 'Value',
    withSuffix: 'Value',
    focused: 'Value',
    error: '',
    disabled: '',
    disabledValue: 'Value',
    readOnly: 'Value',
    readMixed: 'Value',
    topLabel: '',
    topLabelValue: 'Value',
    startLabel: '',
    startLabelValue: 'Value'
  })
  
  const handleChange = (key) => (e) => {
    setValues(prev => ({ ...prev, [key]: e.target.value }))
  }
  
  return (
    <div style={{ padding: 32, background: 'var(--page-neutral-10)', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32 }}>Input - Text Component Demo</h1>
      
      {/* Interactive Example */}
      <section style={{ marginBottom: 48, padding: 24, background: '#fff', borderRadius: 8, border: '1px solid var(--border-divider)' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Interactive Example</h2>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24 }}>
          <strong>Empty State:</strong> When unfocused and empty, shows only the label (no placeholder).<br/>
          <strong>Hint/Value State:</strong> When focused or has value, the label stays on top and hint/value appears below it.
        </p>
        <Input
          label="Label"
          placeholder="Hint"
          value={values.basic}
          onChange={handleChange('basic')}
          required
        />
      </section>
      
      {/* Label Position: Inside */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Label Position: Inside</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 32 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - Empty (No Placeholder)</h3>
            <Input
              label="Label"
              value={values.basic}
              onChange={handleChange('basic')}
              required
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - Hint (With Placeholder on Focus)</h3>
            <Input
              label="Label"
              placeholder="Hint"
              value=""
              required
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - With Value</h3>
            <Input
              label="Label"
              value={values.withValue}
              onChange={handleChange('withValue')}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - With Prefix</h3>
            <Input
              label="Label"
              prefix="Prefix"
              value={values.withPrefix}
              onChange={handleChange('withPrefix')}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - With Suffix</h3>
            <Input
              label="Label"
              suffix="Suffix"
              value={values.withSuffix}
              onChange={handleChange('withSuffix')}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Focus State</h3>
            <Input
              label="Label"
              value={values.focused}
              onChange={handleChange('focused')}
              helperText="Assistive text. "
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Error State</h3>
            <Input
              label="Label"
              value={values.error}
              onChange={handleChange('error')}
              state="error"
              errorMessage="Error message"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Disabled - Empty</h3>
            <Input
              label="Label"
              placeholder="Hint"
              value={values.disabled}
              onChange={handleChange('disabled')}
              state="disabled"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Disabled - With Value</h3>
            <Input
              label="Label"
              value={values.disabledValue}
              onChange={handleChange('disabledValue')}
              state="disabled"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Read Mixed</h3>
            <Input
              label="Label"
              value={values.readMixed}
              onChange={handleChange('readMixed')}
              state="readMixed"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Read-only</h3>
            <Input
              label="Label"
              value={values.readOnly}
              onChange={handleChange('readOnly')}
              state="readOnly"
              showIcon={false}
            />
          </div>
        </div>
      </section>
      
      {/* Label Position: Top */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Label Position: Top</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 32 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - Empty</h3>
            <Input
              label="Label"
              labelPosition="top"
              placeholder="Hint"
              value={values.topLabel}
              onChange={handleChange('topLabel')}
              required
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - With Value</h3>
            <Input
              label="Label"
              labelPosition="top"
              value={values.topLabelValue}
              onChange={handleChange('topLabelValue')}
              helperText="Assistive text. "
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>With Prefix</h3>
            <Input
              label="Label"
              labelPosition="top"
              prefix="Prefix"
              placeholder="Hint"
              value={values.topLabel}
              onChange={handleChange('topLabel')}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>With Suffix</h3>
            <Input
              label="Label"
              labelPosition="top"
              suffix="Suffix"
              value={values.topLabelValue}
              onChange={handleChange('topLabelValue')}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Error State</h3>
            <Input
              label="Label"
              labelPosition="top"
              value=""
              state="error"
              errorMessage="Error message"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Disabled</h3>
            <Input
              label="Label"
              labelPosition="top"
              value="Value"
              state="disabled"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Read Mixed</h3>
            <Input
              label="Label"
              labelPosition="top"
              value="Value"
              state="readMixed"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Read-only</h3>
            <Input
              label="Label"
              labelPosition="top"
              value="Value"
              state="readOnly"
              showIcon={false}
            />
          </div>
        </div>
      </section>
      
      {/* Label Position: Start */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Label Position: Start</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: 32 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - Empty</h3>
            <Input
              label="Label"
              labelPosition="start"
              placeholder="Hint"
              value={values.startLabel}
              onChange={handleChange('startLabel')}
              required
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Enabled - With Value</h3>
            <Input
              label="Label"
              labelPosition="start"
              value={values.startLabelValue}
              onChange={handleChange('startLabelValue')}
              helperText="Assistive text. "
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>With Prefix</h3>
            <Input
              label="Label"
              labelPosition="start"
              prefix="Prefix"
              value="Value"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>With Suffix</h3>
            <Input
              label="Label"
              labelPosition="start"
              suffix="Suffix"
              value="Value"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Error State</h3>
            <Input
              label="Label"
              labelPosition="start"
              value=""
              state="error"
              errorMessage="Error message"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Disabled</h3>
            <Input
              label="Label"
              labelPosition="start"
              value="Value"
              state="disabled"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Read Mixed</h3>
            <Input
              label="Label"
              labelPosition="start"
              value="Value"
              state="readMixed"
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Read-only</h3>
            <Input
              label="Label"
              labelPosition="start"
              value="Value"
              state="readOnly"
              showIcon={false}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
