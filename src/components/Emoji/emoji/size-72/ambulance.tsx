import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Ambulance = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Ambulance.displayName = 'Ambulance'
Ambulance.defaultProps = {}

export default Ambulance
