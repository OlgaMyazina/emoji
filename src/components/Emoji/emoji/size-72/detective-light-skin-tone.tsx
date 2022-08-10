import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const DetectiveLightSkinTone = forwardRef(
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

DetectiveLightSkinTone.displayName = 'DetectiveLightSkinTone'
DetectiveLightSkinTone.defaultProps = {}

export default DetectiveLightSkinTone
