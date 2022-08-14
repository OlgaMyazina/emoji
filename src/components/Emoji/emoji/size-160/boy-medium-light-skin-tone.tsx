import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiBoyMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-boy-medium-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiBoyMediumLightSkinTone.displayName = 'EmojiBoyMediumLightSkinTone'
EmojiBoyMediumLightSkinTone.defaultProps = {}

export default EmojiBoyMediumLightSkinTone
