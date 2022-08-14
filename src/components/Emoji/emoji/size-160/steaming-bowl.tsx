import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSteamingBowl = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-steaming-bowl"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiSteamingBowl.displayName = 'EmojiSteamingBowl'
EmojiSteamingBowl.defaultProps = {}

export default EmojiSteamingBowl
