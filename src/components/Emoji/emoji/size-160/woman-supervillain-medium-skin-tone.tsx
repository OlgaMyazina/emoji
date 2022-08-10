import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanSupervillainMediumSkinTone = forwardRef(
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

WomanSupervillainMediumSkinTone.displayName = 'WomanSupervillainMediumSkinTone'
WomanSupervillainMediumSkinTone.defaultProps = {}

export default WomanSupervillainMediumSkinTone
