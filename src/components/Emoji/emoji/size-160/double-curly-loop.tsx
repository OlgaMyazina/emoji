import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const DoubleCurlyLoop = forwardRef(
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

DoubleCurlyLoop.displayName = 'DoubleCurlyLoop'
DoubleCurlyLoop.defaultProps = {}

export default DoubleCurlyLoop
