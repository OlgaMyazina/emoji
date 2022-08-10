import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Shower = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Shower.displayName = 'Shower'
Shower.defaultProps = {}

export default Shower
