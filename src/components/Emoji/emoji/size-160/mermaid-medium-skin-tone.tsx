import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const MermaidMediumSkinTone = forwardRef(
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

MermaidMediumSkinTone.displayName = 'MermaidMediumSkinTone'
MermaidMediumSkinTone.defaultProps = {}

export default MermaidMediumSkinTone
