import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissWomanNoSkinToneWomanMediumSkinTone = forwardRef(
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

KissWomanNoSkinToneWomanMediumSkinTone.displayName =
  'KissWomanNoSkinToneWomanMediumSkinTone'
KissWomanNoSkinToneWomanMediumSkinTone.defaultProps = {}

export default KissWomanNoSkinToneWomanMediumSkinTone
