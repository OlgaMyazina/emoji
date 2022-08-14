import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagZambia = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-zambia"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlagZambia.displayName = 'EmojiFlagZambia'
EmojiFlagZambia.defaultProps = {}

export default EmojiFlagZambia
