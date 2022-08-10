import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanDarkSkinToneWhiteHair = forwardRef(
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

WomanDarkSkinToneWhiteHair.displayName = 'WomanDarkSkinToneWhiteHair'
WomanDarkSkinToneWhiteHair.defaultProps = {}

export default WomanDarkSkinToneWhiteHair
