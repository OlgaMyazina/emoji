import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const JudgeMediumDarkSkinTone = forwardRef(
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

JudgeMediumDarkSkinTone.displayName = 'JudgeMediumDarkSkinTone'
JudgeMediumDarkSkinTone.defaultProps = {}

export default JudgeMediumDarkSkinTone
