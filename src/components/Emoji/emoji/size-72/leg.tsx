import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Leg = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Leg.displayName = 'Leg'
Leg.defaultProps = {}

export default Leg
