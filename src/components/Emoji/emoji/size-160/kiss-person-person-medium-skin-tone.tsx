import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonPersonMediumSkinTone = forwardRef(
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

KissPersonPersonMediumSkinTone.displayName = 'KissPersonPersonMediumSkinTone'
KissPersonPersonMediumSkinTone.defaultProps = {}

export default KissPersonPersonMediumSkinTone
