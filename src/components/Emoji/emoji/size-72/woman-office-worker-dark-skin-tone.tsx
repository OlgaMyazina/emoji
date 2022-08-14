import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanOfficeWorkerDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-office-worker-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiWomanOfficeWorkerDarkSkinTone.displayName = 'EmojiWomanOfficeWorkerDarkSkinTone'
EmojiWomanOfficeWorkerDarkSkinTone.defaultProps = {}

export default EmojiWomanOfficeWorkerDarkSkinTone
