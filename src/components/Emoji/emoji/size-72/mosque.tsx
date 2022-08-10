import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Mosque = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Mosque.displayName = 'Mosque'
Mosque.defaultProps = {}

export default Mosque
