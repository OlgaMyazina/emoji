import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonMediumLightSkinToneCurlyHair = forwardRef(
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

PersonMediumLightSkinToneCurlyHair.displayName =
  'PersonMediumLightSkinToneCurlyHair'
PersonMediumLightSkinToneCurlyHair.defaultProps = {}

export default PersonMediumLightSkinToneCurlyHair
