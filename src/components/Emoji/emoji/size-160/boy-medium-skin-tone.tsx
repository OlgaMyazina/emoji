import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBoyMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-boy-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBoyMediumSkinTone.displayName = 'EmojiBoyMediumSkinTone'
EmojiBoyMediumSkinTone.defaultProps = {}

export default EmojiBoyMediumSkinTone
