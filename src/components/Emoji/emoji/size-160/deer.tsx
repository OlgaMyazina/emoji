import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Deer = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Deer.displayName = 'Deer'
Deer.defaultProps = {}

export default Deer
