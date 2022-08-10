import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagIceland = forwardRef(
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

FlagIceland.displayName = 'FlagIceland'
FlagIceland.defaultProps = {}

export default FlagIceland
