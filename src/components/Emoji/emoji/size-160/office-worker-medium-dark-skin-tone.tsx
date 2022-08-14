import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiOfficeWorkerMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-office-worker-medium-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiOfficeWorkerMediumDarkSkinTone.displayName = 'EmojiOfficeWorkerMediumDarkSkinTone'
EmojiOfficeWorkerMediumDarkSkinTone.defaultProps = {}

export default EmojiOfficeWorkerMediumDarkSkinTone
