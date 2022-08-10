import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManFirefighterMediumSkinTone = forwardRef(
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

ManFirefighterMediumSkinTone.displayName = 'ManFirefighterMediumSkinTone'
ManFirefighterMediumSkinTone.defaultProps = {}

export default ManFirefighterMediumSkinTone
