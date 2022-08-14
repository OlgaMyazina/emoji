import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagGreece = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-greece"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlagGreece.displayName = 'EmojiFlagGreece'
EmojiFlagGreece.defaultProps = {}

export default EmojiFlagGreece
