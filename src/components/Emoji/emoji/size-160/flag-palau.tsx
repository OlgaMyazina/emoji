import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagPalau = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-palau"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiFlagPalau.displayName = 'EmojiFlagPalau'
EmojiFlagPalau.defaultProps = {}

export default EmojiFlagPalau
