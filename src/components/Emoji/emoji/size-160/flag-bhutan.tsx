import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagBhutan = forwardRef(
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

FlagBhutan.displayName = 'FlagBhutan'
FlagBhutan.defaultProps = {}

export default FlagBhutan
