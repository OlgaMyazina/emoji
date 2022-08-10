import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const OlderPersonLightSkinTone = forwardRef(
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

OlderPersonLightSkinTone.displayName = 'OlderPersonLightSkinTone'
OlderPersonLightSkinTone.defaultProps = {}

export default OlderPersonLightSkinTone
