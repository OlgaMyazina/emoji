import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Ewe = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Ewe.displayName = 'Ewe'
Ewe.defaultProps = {}

export default Ewe
