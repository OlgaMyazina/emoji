import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanGesturingOkDarkSkinTone = forwardRef(
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

WomanGesturingOkDarkSkinTone.displayName = 'WomanGesturingOkDarkSkinTone'
WomanGesturingOkDarkSkinTone.defaultProps = {}

export default WomanGesturingOkDarkSkinTone
