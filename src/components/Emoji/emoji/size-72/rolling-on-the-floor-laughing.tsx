import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiRollingOnTheFloorLaughing = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-rolling-on-the-floor-laughing"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiRollingOnTheFloorLaughing.displayName = 'EmojiRollingOnTheFloorLaughing'
EmojiRollingOnTheFloorLaughing.defaultProps = {}

export default EmojiRollingOnTheFloorLaughing
