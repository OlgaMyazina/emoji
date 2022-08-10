import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagHongKongSarChina = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

FlagHongKongSarChina.displayName = 'FlagHongKongSarChina'
FlagHongKongSarChina.defaultProps = {}

export default FlagHongKongSarChina
