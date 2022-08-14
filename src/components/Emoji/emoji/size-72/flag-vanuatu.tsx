import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagVanuatu = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-vanuatu"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlagVanuatu.displayName = 'EmojiFlagVanuatu'
EmojiFlagVanuatu.defaultProps = {}

export default EmojiFlagVanuatu
