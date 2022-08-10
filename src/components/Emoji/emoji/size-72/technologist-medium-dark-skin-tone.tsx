import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const TechnologistMediumDarkSkinTone = forwardRef(
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

TechnologistMediumDarkSkinTone.displayName = 'TechnologistMediumDarkSkinTone'
TechnologistMediumDarkSkinTone.defaultProps = {}

export default TechnologistMediumDarkSkinTone
