import React, { useState } from 'react'

/**
 * Input (Text) component following OCI Design System.
 * Props:
 * - label: string (required)
 * - labelPosition: 'inside'|'top'|'start' (default: 'inside')
 * - value: string
 * - placeholder: string
 * - prefix: string
 * - suffix: string
 * - helperText: string
 * - errorMessage: string
 * - state: 'enabled'|'disabled'|'readOnly'|'readMixed'|'error'
 * - showIcon: boolean (shows search icon)
 * - required: boolean
 * - onChange, onFocus, onBlur, className
 */
export default function Input({
  label = 'Label',
  labelPosition = 'inside',
  value = '',
  placeholder = 'Hint',
  prefix = '',
  suffix = '',
  helperText = '',
  errorMessage = '',
  state = 'enabled',
  showIcon = true,
  required = false,
  onChange,
  onFocus,
  onBlur,
  className = '',
  ...rest
}) {
  const [isFocused, setIsFocused] = useState(false)
  
  const isDisabled = state === 'disabled'
  const isReadOnly = state === 'readOnly'
  const isReadMixed = state === 'readMixed'
  const hasError = state === 'error' || !!errorMessage
  
  const isEmpty = !value && !placeholder
  const hasValue = !!value
  
  const handleFocus = (e) => {
    setIsFocused(true)
    onFocus?.(e)
  }
  
  const handleBlur = (e) => {
    setIsFocused(false)
    onBlur?.(e)
  }
  
  const containerClasses = [
    'input-text',
    `input-text--label-${labelPosition}`,
    `input-text--state-${state}`,
    hasError ? 'input-text--error' : '',
    isFocused ? 'input-text--focused' : '',
    className
  ]
  
  // Render the input field
  const renderInputField = () => (
    <div className={`input-text__field ${isFocused ? 'input-text__field--focused' : ''} ${hasError ? 'input-text__field--error' : ''}`}>
      {showIcon && (
        <div className="input-text__icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18.5 19l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      
      <div className="input-text__content">
        {labelPosition === 'inside' && (hasValue || isFocused) && (
          <label className="input-text__label-inside">
            {label}
          </label>
        )}
        
        <div className="input-text__input-wrapper">
          {prefix && <span className="input-text__prefix">{prefix}</span>}
          
          <input
            type="text"
            className="input-text__input"
            value={value}
            placeholder={labelPosition === 'inside' ? (hasValue || isFocused ? placeholder : label) : placeholder}
            disabled={isDisabled}
            readOnly={isReadOnly || isReadMixed}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
          
          {suffix && <span className="input-text__suffix">{suffix}</span>}
        </div>
      </div>
    </div>
  )
  
  return (
    <div className={containerClasses.filter(Boolean).join(' ')}>
      {(labelPosition === 'top' || labelPosition === 'start') && (
        <label className="input-text__label-external">
          {label}
        </label>
      )}
      
      {renderInputField()}
      
      {/* Helper text or error message */}
      {hasError && errorMessage ? (
        <div className="input-text__error-message">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" fill="#B3311F"/>
            <path d="M8 4.5v4M8 11h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>{errorMessage}</span>
        </div>
      ) : helperText ? (
        <div className="input-text__helper">
          {helperText}
          {helperText.includes('Learn more') && (
            <a href="#" className="input-text__link">Learn more</a>
          )}
        </div>
      ) : required ? (
        <div className="input-text__required">Required</div>
      ) : null}
    </div>
  )
}
