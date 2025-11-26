import React from 'react'

/**
 * Button component supporting theme, appearance, size and states.
 * Props:
 * - theme: 'default'|'primary'|'secondary'|'danger' (controls color)
 * - appearance: 'solid'|'outline'|'ghost'|'link'
 * - size: 'sm'|'md'|'lg'
 * - loading: boolean
 * - disabled: boolean
 * - iconLeft / iconRight: React node
 * - onClick, children, className
 */
export default function Button({
  theme = 'default',
  appearance = 'solid',
  size = 'md',
  loading = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn--theme-${theme}`,
    `btn--${appearance}`,
    `btn--size-${size}`,
    loading ? 'btn--loading' : '',
    disabled ? 'btn--disabled' : '',
    className
  ]

  return (
    <button
      className={classes.filter(Boolean).join(' ')}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <span className="btn__spinner" aria-hidden />}
      {iconLeft && <span className="btn__icon btn__icon--left">{iconLeft}</span>}
      <span className="btn__content">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </button>
  )
}
