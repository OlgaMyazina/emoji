import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManLightSkinToneCurlyHair = forwardRef(
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

ManLightSkinToneCurlyHair.displayName = 'ManLightSkinToneCurlyHair'
ManLightSkinToneCurlyHair.defaultProps = {}

export default ManLightSkinToneCurlyHair
