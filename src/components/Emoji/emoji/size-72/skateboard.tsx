import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Skateboard = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

Skateboard.displayName = 'Skateboard'
Skateboard.defaultProps = {}

export default Skateboard
