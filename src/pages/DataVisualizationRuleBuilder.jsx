import React, { useState } from 'react'
import DataVisualizationRuleBuilderRow from '../composites/DataVisualizationRuleBuilderRow'
import Button from '../components/button'
import IconPlus from '../components/icons/Plus'

const sampleSeries = [
  { name: 'Series 1', color: 'var(--dvt-1)', values: [45, 46, 47, 46] },
  { name: 'Series 2', color: 'var(--dvt-2)', values: [30, 31, 30, 31] },
  { name: 'Series 3', color: 'var(--dvt-3)', values: [20, 20, 20, 20] },
  { name: 'Series 4', color: 'var(--dvt-4)', values: [40, 41, 40, 41] }
]

const labels = ['Label', 'Label', 'Label', 'Label']

function makeRow(id, order) {
  return { id, order, fieldLabel: 'Label', fieldValue: 'Value', series: sampleSeries, labels }
}

export default function DataVisualizationRuleBuilder() {
  const [rows, setRows] = useState([makeRow(Date.now(), 1)])

  function addRow() {
    const id = Date.now() + Math.floor(Math.random() * 1000)
    setRows(prev => [...prev, makeRow(id, prev.length + 1)])
  }

  function removeRow(id) {
    setRows(prev => prev.filter(r => r.id !== id))
  }

  return (
    <div>
      <div style={{padding: 16}}>
        {rows.map(r => (
          <DataVisualizationRuleBuilderRow
            key={r.id}
            order={r.order}
            fieldLabel={r.fieldLabel}
            fieldValue={r.fieldValue}
            series={r.series}
            labels={r.labels}
            onRemove={() => removeRow(r.id)}
          />
        ))}

        <div style={{marginTop: 12}}>
          <Button
            theme="default"
            appearance="solid"
            size="md"
            iconLeft={<IconPlus />}
            onClick={addRow}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
