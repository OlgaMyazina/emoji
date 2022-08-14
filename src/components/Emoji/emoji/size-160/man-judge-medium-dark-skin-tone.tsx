import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManJudgeMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-judge-medium-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiManJudgeMediumDarkSkinTone.displayName = 'EmojiManJudgeMediumDarkSkinTone'
EmojiManJudgeMediumDarkSkinTone.defaultProps = {}

export default EmojiManJudgeMediumDarkSkinTone
