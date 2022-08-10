import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagComoros = forwardRef(
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

FlagComoros.displayName = 'FlagComoros'
FlagComoros.defaultProps = {}

export default FlagComoros
