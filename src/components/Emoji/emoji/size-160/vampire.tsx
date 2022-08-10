import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Vampire = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Vampire.displayName = 'Vampire'
Vampire.defaultProps = {}

export default Vampire
