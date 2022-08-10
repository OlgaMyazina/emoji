import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FootLightSkinTone = forwardRef(
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

FootLightSkinTone.displayName = 'FootLightSkinTone'
FootLightSkinTone.defaultProps = {}

export default FootLightSkinTone
