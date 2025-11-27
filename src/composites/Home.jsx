import React from 'react'

export default function Home() {
  return (
    <div style={{padding: 32}}>
      <h1>Welcome to the OCI Design System</h1>

      <br/><br/>
      <h3>Components</h3>
      <ul style={{fontSize: 18, marginTop: 24}}>
        <li><a href="/button-demo">Buttons</a></li>
        <li><a href="/data-visualization-rule-builder">Data Visualization Rule Builder</a></li>
        <li><a href="/input-code">Input Code</a></li>
        <li><a href="/file-picker">File Picker</a></li>
      </ul>
    <br/><br/>
      <h3>Templates</h3>
      <ul style={{fontSize: 18, marginTop: 24}}>
                <li><a href="/create-template">Create Template (Single Page)</a>
                </li>
      </ul>
    </div>
  )
}
