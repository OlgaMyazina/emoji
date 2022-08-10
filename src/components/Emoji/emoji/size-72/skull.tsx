import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Skull = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Skull.displayName = 'Skull'
Skull.defaultProps = {}

export default Skull
