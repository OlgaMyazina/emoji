import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonWearingTurbanMediumDarkSkinTone = forwardRef(
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

PersonWearingTurbanMediumDarkSkinTone.displayName =
  'PersonWearingTurbanMediumDarkSkinTone'
PersonWearingTurbanMediumDarkSkinTone.defaultProps = {}

export default PersonWearingTurbanMediumDarkSkinTone
