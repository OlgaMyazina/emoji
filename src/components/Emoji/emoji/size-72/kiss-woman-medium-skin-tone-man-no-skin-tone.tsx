import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissWomanMediumSkinToneManNoSkinTone = forwardRef(
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

KissWomanMediumSkinToneManNoSkinTone.displayName =
  'KissWomanMediumSkinToneManNoSkinTone'
KissWomanMediumSkinToneManNoSkinTone.defaultProps = {}

export default KissWomanMediumSkinToneManNoSkinTone
