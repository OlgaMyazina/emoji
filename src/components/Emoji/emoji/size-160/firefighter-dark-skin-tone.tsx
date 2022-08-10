import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FirefighterDarkSkinTone = forwardRef(
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

FirefighterDarkSkinTone.displayName = 'FirefighterDarkSkinTone'
FirefighterDarkSkinTone.defaultProps = {}

export default FirefighterDarkSkinTone
