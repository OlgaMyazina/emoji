import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagNiue = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-niue"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlagNiue.displayName = 'EmojiFlagNiue'
EmojiFlagNiue.defaultProps = {}

export default EmojiFlagNiue
