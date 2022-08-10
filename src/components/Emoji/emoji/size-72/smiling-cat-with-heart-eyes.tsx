import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const SmilingCatWithHeartEyes = forwardRef(
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

SmilingCatWithHeartEyes.displayName = 'SmilingCatWithHeartEyes'
SmilingCatWithHeartEyes.defaultProps = {}

export default SmilingCatWithHeartEyes
