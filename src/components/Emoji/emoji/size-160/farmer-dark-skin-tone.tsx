import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFarmerDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-farmer-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFarmerDarkSkinTone.displayName = 'EmojiFarmerDarkSkinTone'
EmojiFarmerDarkSkinTone.defaultProps = {}

export default EmojiFarmerDarkSkinTone
