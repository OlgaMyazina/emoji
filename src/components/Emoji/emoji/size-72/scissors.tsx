import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Scissors = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

Scissors.displayName = 'Scissors'
Scissors.defaultProps = {}

export default Scissors
