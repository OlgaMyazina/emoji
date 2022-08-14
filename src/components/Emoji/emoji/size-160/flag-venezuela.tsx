import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagVenezuela = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-venezuela"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiFlagVenezuela.displayName = 'EmojiFlagVenezuela'
EmojiFlagVenezuela.defaultProps = {}

export default EmojiFlagVenezuela
