import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Handshake = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

Handshake.displayName = 'Handshake'
Handshake.defaultProps = {}

export default Handshake
