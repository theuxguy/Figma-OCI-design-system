import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './composites/Home'
import ButtonDemo from './pages/ButtonDemo'
import DataVisualizationRuleBuilder from './pages/DataVisualizationRuleBuilder'
import InputCodePage from './composites/InputCode'
import FilePickerPage from './pages/FilePickerPage'
import CreateTemplateSinglePage from './Templates/CreateTemplateSinglePage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav style={{marginBottom: 24, display: 'flex', gap: 18, fontSize: 16}}>
          <Link to="/">Home</Link>
          <Link to="/button-demo">Button Demo</Link>
          <Link to="/data-visualization-rule-builder">Data Visualization Rule Builder</Link>
          <Link to="/input-code">Input Code Demo</Link>
          <Link to="/file-picker">File Picker Demo</Link>
          <Link to="/create-template">Create Template</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button-demo" element={<ButtonDemo />} />
          <Route path="/data-visualization-rule-builder" element={<DataVisualizationRuleBuilder />} />
          <Route path="/input-code" element={<InputCodePage />} />
          <Route path="/file-picker" element={<FilePickerPage />} />
          <Route path="/create-template" element={<CreateTemplateSinglePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
