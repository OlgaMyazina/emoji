import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagCongoKinshasa = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-congo-kinshasa"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlagCongoKinshasa.displayName = 'EmojiFlagCongoKinshasa'
EmojiFlagCongoKinshasa.defaultProps = {}

export default EmojiFlagCongoKinshasa
