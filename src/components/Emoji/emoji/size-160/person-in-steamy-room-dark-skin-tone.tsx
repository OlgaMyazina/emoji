import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonInSteamyRoomDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-in-steamy-room-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonInSteamyRoomDarkSkinTone.displayName =
  'EmojiPersonInSteamyRoomDarkSkinTone'
EmojiPersonInSteamyRoomDarkSkinTone.defaultProps = {}

export default EmojiPersonInSteamyRoomDarkSkinTone
