import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const JudgeLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

JudgeLightSkinTone.displayName = 'JudgeLightSkinTone'
JudgeLightSkinTone.defaultProps = {}

export default JudgeLightSkinTone
