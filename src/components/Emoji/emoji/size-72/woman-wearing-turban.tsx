import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanWearingTurban = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-wearing-turban"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanWearingTurban.displayName = 'EmojiWomanWearingTurban'
EmojiWomanWearingTurban.defaultProps = {}

export default EmojiWomanWearingTurban
