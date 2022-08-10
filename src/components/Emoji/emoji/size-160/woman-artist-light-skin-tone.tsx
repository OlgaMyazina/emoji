import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanArtistLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

WomanArtistLightSkinTone.displayName = 'WomanArtistLightSkinTone'
WomanArtistLightSkinTone.defaultProps = {}

export default WomanArtistLightSkinTone
