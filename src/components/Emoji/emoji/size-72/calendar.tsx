import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCalendar = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-calendar"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCalendar.displayName = 'EmojiCalendar'
EmojiCalendar.defaultProps = {}

export default EmojiCalendar
