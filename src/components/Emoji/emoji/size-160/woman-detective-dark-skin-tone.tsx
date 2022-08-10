import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanDetectiveDarkSkinTone = forwardRef(
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

WomanDetectiveDarkSkinTone.displayName = 'WomanDetectiveDarkSkinTone'
WomanDetectiveDarkSkinTone.defaultProps = {}

export default WomanDetectiveDarkSkinTone
