import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBaggageClaim = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-baggage-claim"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBaggageClaim.displayName = 'EmojiBaggageClaim'
EmojiBaggageClaim.defaultProps = {}

export default EmojiBaggageClaim
