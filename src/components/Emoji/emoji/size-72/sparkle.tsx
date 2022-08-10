import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Sparkle = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

Sparkle.displayName = 'Sparkle'
Sparkle.defaultProps = {}

export default Sparkle
