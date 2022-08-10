import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Headphone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Headphone.displayName = 'Headphone'
Headphone.defaultProps = {}

export default Headphone
