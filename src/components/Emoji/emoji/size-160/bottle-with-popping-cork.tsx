import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const BottleWithPoppingCork = forwardRef(
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

BottleWithPoppingCork.displayName = 'BottleWithPoppingCork'
BottleWithPoppingCork.defaultProps = {}

export default BottleWithPoppingCork
