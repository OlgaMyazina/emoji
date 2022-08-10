import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Selfie = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

Selfie.displayName = 'Selfie'
Selfie.defaultProps = {}

export default Selfie
