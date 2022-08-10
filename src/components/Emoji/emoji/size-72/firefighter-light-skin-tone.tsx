import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FirefighterLightSkinTone = forwardRef(
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

FirefighterLightSkinTone.displayName = 'FirefighterLightSkinTone'
FirefighterLightSkinTone.defaultProps = {}

export default FirefighterLightSkinTone
