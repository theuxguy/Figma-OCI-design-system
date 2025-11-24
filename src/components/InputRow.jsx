import React from 'react'

export default function InputRow() {
  return (
    <div className="top-row">
      <div className="order-box">
        <div style={{fontSize:12,color:'var(--text-secondary)'}}>Order</div>
        <div style={{fontSize:16,fontWeight:600}}>1</div>
      </div>
      <div className="field-select">
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{fontSize:12,color:'var(--text-secondary)',fontWeight:600}}>Label</div>
          <div style={{fontSize:16,color:'var(--text-primary)'}}>Value</div>
        </div>
        <div style={{marginLeft:'auto'}}>▾</div>
      </div>
      <div style={{marginLeft:'auto',cursor:'pointer'}}>✕</div>
    </div>
  )
}
