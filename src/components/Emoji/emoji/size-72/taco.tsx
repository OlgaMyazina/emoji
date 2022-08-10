import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Taco = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Taco.displayName = 'Taco'
Taco.defaultProps = {}

export default Taco
