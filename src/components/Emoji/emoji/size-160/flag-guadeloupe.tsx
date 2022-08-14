import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagGuadeloupe = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-guadeloupe"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlagGuadeloupe.displayName = 'EmojiFlagGuadeloupe'
EmojiFlagGuadeloupe.defaultProps = {}

export default EmojiFlagGuadeloupe
