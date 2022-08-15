import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWaningGibbousMoon = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-waning-gibbous-moon"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWaningGibbousMoon.displayName = 'EmojiWaningGibbousMoon'
EmojiWaningGibbousMoon.defaultProps = {}

export default EmojiWaningGibbousMoon