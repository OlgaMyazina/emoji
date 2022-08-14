import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSpiralNotepad = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-spiral-notepad"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiSpiralNotepad.displayName = 'EmojiSpiralNotepad'
EmojiSpiralNotepad.defaultProps = {}

export default EmojiSpiralNotepad
