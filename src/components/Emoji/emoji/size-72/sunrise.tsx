import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Sunrise = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

Sunrise.displayName = 'Sunrise'
Sunrise.defaultProps = {}

export default Sunrise
