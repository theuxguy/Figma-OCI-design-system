import React, { useState } from 'react';

function LineNumbers({ count = 6 }) {
  const lines = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <div className="code-line-index" aria-hidden>
      {lines.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  );
}

export default function InputCode({
  label = 'Label',
  description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  learnMoreText = 'Learn more',
  copyAction = true,
  lines = 6,
  codeText = 'Allow group <group-name> to read buckets in compartment <compartment-name>'
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="input-code">
      <div className="label-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p className="label">{label}</p>
          <p className="description">
            {description}
            <span style={{ color: 'var(--dvt-3)', marginLeft: 6 }}>{learnMoreText}</span>
          </p>
        </div>
        {copyAction && (
          <div>
            <button className="copy-button" onClick={handleCopy} aria-label="Copy code">
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        )}
      </div>

      <div className="code-container" role="region" aria-label="Code sample">
        <div className="code-index">
          <LineNumbers count={lines} />
        </div>
        <div className="code-content">
          <pre style={{ margin: 0, fontFamily: 'Courier, monospace', fontSize: 13 }}>{codeText}</pre>
        </div>
      </div>
    </div>
  );
}
