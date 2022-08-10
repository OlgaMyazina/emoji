import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagTimorLeste = forwardRef(
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

FlagTimorLeste.displayName = 'FlagTimorLeste'
FlagTimorLeste.defaultProps = {}

export default FlagTimorLeste
