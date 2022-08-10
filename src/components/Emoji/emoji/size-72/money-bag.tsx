import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const MoneyBag = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

MoneyBag.displayName = 'MoneyBag'
MoneyBag.defaultProps = {}

export default MoneyBag
