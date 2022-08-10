import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonGolfingMediumLightSkinTone = forwardRef(
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

PersonGolfingMediumLightSkinTone.displayName =
  'PersonGolfingMediumLightSkinTone'
PersonGolfingMediumLightSkinTone.defaultProps = {}

export default PersonGolfingMediumLightSkinTone
