import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManAstronautMediumSkinTone = forwardRef(
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

ManAstronautMediumSkinTone.displayName = 'ManAstronautMediumSkinTone'
ManAstronautMediumSkinTone.defaultProps = {}

export default ManAstronautMediumSkinTone
