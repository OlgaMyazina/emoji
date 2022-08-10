import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanSuperheroMediumDarkSkinTone = forwardRef(
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

WomanSuperheroMediumDarkSkinTone.displayName =
  'WomanSuperheroMediumDarkSkinTone'
WomanSuperheroMediumDarkSkinTone.defaultProps = {}

export default WomanSuperheroMediumDarkSkinTone
