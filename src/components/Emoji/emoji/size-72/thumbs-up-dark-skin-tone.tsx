import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ThumbsUpDarkSkinTone = forwardRef(
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

ThumbsUpDarkSkinTone.displayName = 'ThumbsUpDarkSkinTone'
ThumbsUpDarkSkinTone.defaultProps = {}

export default ThumbsUpDarkSkinTone
