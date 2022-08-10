import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const BlackLargeSquare = forwardRef(
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

BlackLargeSquare.displayName = 'BlackLargeSquare'
BlackLargeSquare.defaultProps = {}

export default BlackLargeSquare
