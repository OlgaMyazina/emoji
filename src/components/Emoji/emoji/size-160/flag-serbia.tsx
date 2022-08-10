import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagSerbia = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

FlagSerbia.displayName = 'FlagSerbia'
FlagSerbia.defaultProps = {}

export default FlagSerbia
