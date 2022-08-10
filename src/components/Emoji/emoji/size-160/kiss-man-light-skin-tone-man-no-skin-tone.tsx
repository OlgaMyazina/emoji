import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissManLightSkinToneManNoSkinTone = forwardRef(
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

KissManLightSkinToneManNoSkinTone.displayName =
  'KissManLightSkinToneManNoSkinTone'
KissManLightSkinToneManNoSkinTone.defaultProps = {}

export default KissManLightSkinToneManNoSkinTone
