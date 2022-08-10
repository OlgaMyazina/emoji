import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagNicaragua = forwardRef(
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

FlagNicaragua.displayName = 'FlagNicaragua'
FlagNicaragua.defaultProps = {}

export default FlagNicaragua
