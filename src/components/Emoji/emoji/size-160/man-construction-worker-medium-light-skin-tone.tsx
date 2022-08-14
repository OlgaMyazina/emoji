import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManConstructionWorkerMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-construction-worker-medium-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiManConstructionWorkerMediumLightSkinTone.displayName = 'EmojiManConstructionWorkerMediumLightSkinTone'
EmojiManConstructionWorkerMediumLightSkinTone.defaultProps = {}

export default EmojiManConstructionWorkerMediumLightSkinTone
