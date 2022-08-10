import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Cow = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Cow.displayName = 'Cow'
Cow.defaultProps = {}

export default Cow
