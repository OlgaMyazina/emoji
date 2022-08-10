import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const LegDarkSkinTone = forwardRef(
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

LegDarkSkinTone.displayName = 'LegDarkSkinTone'
LegDarkSkinTone.defaultProps = {}

export default LegDarkSkinTone
