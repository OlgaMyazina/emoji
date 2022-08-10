import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonWomanMediumLightSkinTone = forwardRef(
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

KissPersonWomanMediumLightSkinTone.displayName =
  'KissPersonWomanMediumLightSkinTone'
KissPersonWomanMediumLightSkinTone.defaultProps = {}

export default KissPersonWomanMediumLightSkinTone
