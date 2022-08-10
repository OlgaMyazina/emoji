import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagGuyana = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

FlagGuyana.displayName = 'FlagGuyana'
FlagGuyana.defaultProps = {}

export default FlagGuyana
