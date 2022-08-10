import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Peanuts = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Peanuts.displayName = 'Peanuts'
Peanuts.defaultProps = {}

export default Peanuts
