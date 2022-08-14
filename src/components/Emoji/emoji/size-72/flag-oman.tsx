import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagOman = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-oman"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlagOman.displayName = 'EmojiFlagOman'
EmojiFlagOman.defaultProps = {}

export default EmojiFlagOman
