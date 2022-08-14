import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManOfficeWorkerMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-office-worker-medium-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiManOfficeWorkerMediumDarkSkinTone.displayName = 'EmojiManOfficeWorkerMediumDarkSkinTone'
EmojiManOfficeWorkerMediumDarkSkinTone.defaultProps = {}

export default EmojiManOfficeWorkerMediumDarkSkinTone
