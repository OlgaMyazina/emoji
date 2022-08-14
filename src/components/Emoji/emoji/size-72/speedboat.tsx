import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSpeedboat = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-speedboat"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiSpeedboat.displayName = 'EmojiSpeedboat'
EmojiSpeedboat.defaultProps = {}

export default EmojiSpeedboat
