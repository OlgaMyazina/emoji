import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Magnet = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Magnet.displayName = 'Magnet'
Magnet.defaultProps = {}

export default Magnet
