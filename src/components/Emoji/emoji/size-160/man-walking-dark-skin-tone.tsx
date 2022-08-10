import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManWalkingDarkSkinTone = forwardRef(
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

ManWalkingDarkSkinTone.displayName = 'ManWalkingDarkSkinTone'
ManWalkingDarkSkinTone.defaultProps = {}

export default ManWalkingDarkSkinTone
