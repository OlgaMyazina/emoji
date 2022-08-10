import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const TokyoTower = forwardRef(
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

TokyoTower.displayName = 'TokyoTower'
TokyoTower.defaultProps = {}

export default TokyoTower
