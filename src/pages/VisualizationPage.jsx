import React, { useState } from 'react'
import InputRow from '../components/InputRow'
import DataVisualizationCard from '../components/DataVisualizationCard'

const sampleSeries = [
  { name: 'Series 1', color: 'var(--dvt-1)', values: [45, 46, 47, 46] },
  { name: 'Series 2', color: 'var(--dvt-2)', values: [30, 31, 30, 31] },
  { name: 'Series 3', color: 'var(--dvt-3)', values: [20, 20, 20, 20] },
  { name: 'Series 4', color: 'var(--dvt-4)', values: [40, 41, 40, 41] }
]

const labels = ['Label', 'Label', 'Label', 'Label']

function makeCard(id) {
  return {
    id,
    title: 'Data visualization card title (horizontally grouped Bar)',
    series: sampleSeries,
    labels,
    filters: [{ label: 'Interval', value: 'Auto' }, { label: 'Statistic', value: 'Mean' }]
  }
}

export default function VisualizationPage() {
  const [cards, setCards] = useState([makeCard(Date.now())])

  function addCard() {
    const id = Date.now() + Math.floor(Math.random()*1000)
    setCards(prev => [...prev, makeCard(id)])
  }

  function removeCard(id) {
    setCards(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div>
      <InputRow />

      <div className="card-list">
        {cards.map(card => (
          <DataVisualizationCard
            key={card.id}
            title={card.title}
            series={card.series}
            labels={card.labels}
            filters={card.filters}
            onRemove={() => removeCard(card.id)}
          />
        ))}
      </div>

      <div style={{marginTop:16}}>
        <button className="add-button" onClick={addCard} aria-label="Add visualization card">+ Add</button>
      </div>
    </div>
  )
}
