import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Croissant = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Croissant.displayName = 'Croissant'
Croissant.defaultProps = {}

export default Croissant
