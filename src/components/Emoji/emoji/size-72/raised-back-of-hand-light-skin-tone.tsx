import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const RaisedBackOfHandLightSkinTone = forwardRef(
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

RaisedBackOfHandLightSkinTone.displayName = 'RaisedBackOfHandLightSkinTone'
RaisedBackOfHandLightSkinTone.defaultProps = {}

export default RaisedBackOfHandLightSkinTone
