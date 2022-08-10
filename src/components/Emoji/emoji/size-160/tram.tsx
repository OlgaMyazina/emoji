import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Tram = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Tram.displayName = 'Tram'
Tram.defaultProps = {}

export default Tram
