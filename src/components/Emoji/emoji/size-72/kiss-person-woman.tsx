import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissPersonWoman = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-person-woman"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiKissPersonWoman.displayName = 'EmojiKissPersonWoman'
EmojiKissPersonWoman.defaultProps = {}

export default EmojiKissPersonWoman
