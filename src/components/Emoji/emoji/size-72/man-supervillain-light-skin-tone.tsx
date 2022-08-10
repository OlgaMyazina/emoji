import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManSupervillainLightSkinTone = forwardRef(
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

ManSupervillainLightSkinTone.displayName = 'ManSupervillainLightSkinTone'
ManSupervillainLightSkinTone.defaultProps = {}

export default ManSupervillainLightSkinTone
