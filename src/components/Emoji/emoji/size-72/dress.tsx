import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Dress = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Dress.displayName = 'Dress'
Dress.defaultProps = {}

export default Dress
