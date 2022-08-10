import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ClappingHandsMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

ClappingHandsMediumSkinTone.displayName = 'ClappingHandsMediumSkinTone'
ClappingHandsMediumSkinTone.defaultProps = {}

export default ClappingHandsMediumSkinTone
