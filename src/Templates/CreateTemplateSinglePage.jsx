import React from 'react'
import Button from '../components/button'

// Simplified implementation of Figma node 2011:48089 adapted to existing design system
// Uses existing Button component and new template-specific CSS classes (see appended styles in index.css)

function Fieldset({ title, description, inputs = 3 }) {
  return (
    <section className="template-fieldset" aria-labelledby={title.replace(/\s+/g,'-').toLowerCase()}>
      <header className="template-fieldset__header">
        <h2 id={title.replace(/\s+/g,'-').toLowerCase()} className="template-fieldset__title">{title}</h2>
        {description && <p className="template-fieldset__description">{description}</p>}
      </header>
      <div className="template-fieldset__body">
        {Array.from({ length: inputs }).map((_, i) => (
          <div key={i} className="template-input-group">
            <label className="template-input-label">Label {i+1}</label>
            <input className="template-input" defaultValue="Value" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default function CreateTemplateSinglePage() {
  return (
    <div className="template-page" data-node-id="2011:48089">
      <div className="template-header">
        <div className="template-color-strip" />
        <div className="template-header__content">
          <h1 className="template-heading-xl">Create template (Single page)</h1>
          <p className="template-heading-description">Text here</p>
        </div>
      </div>

      <div className="template-section-intro">
        <h2 className="template-section-title">Create template (Single page) (1440+)</h2>
      </div>

      <main className="template-main">
        <div className="template-wizard-header">
          <h2 className="template-heading-wizard">This is wizard heading</h2>
          <p className="template-wizard-description">Lorem ipsum dolor sit amet consectetur. Pharetra ipsum congue neque magna neque. Nibh hac ut scelerisque sapien elit eget vestibulum gravida.</p>
        </div>
        <div className="template-prose">
          <p>
            Lorem ipsum is a placeholder text used in graphic design and publishing. It's a short paragraph that contains all the letters of the alphabet, spread out evenly so that the reader's attention is focused on the layout of the text instead of its content. <a href="#" className="template-link">Learn more</a>.
          </p>
        </div>
        <Fieldset title="Fieldset-1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Learn more" />
        <Fieldset title="Fieldset-2" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Learn more" />
      </main>

      <footer className="template-footer" aria-label="Actions">
        <div className="template-footer__actions">
          <Button appearance="borderless">Cancel</Button>
          <Button appearance="outline">Secondary</Button>
          <Button appearance="cta" theme="primary">Primary</Button>
        </div>
      </footer>
    </div>
  )
}
