import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const BrokenHeart = forwardRef(
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

BrokenHeart.displayName = 'BrokenHeart'
BrokenHeart.defaultProps = {}

export default BrokenHeart
