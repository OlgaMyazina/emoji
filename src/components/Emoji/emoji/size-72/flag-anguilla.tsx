import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagAnguilla = forwardRef(
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

FlagAnguilla.displayName = 'FlagAnguilla'
FlagAnguilla.defaultProps = {}

export default FlagAnguilla
