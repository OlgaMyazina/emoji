import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagGreenland = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-greenland"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiFlagGreenland.displayName = 'EmojiFlagGreenland'
EmojiFlagGreenland.defaultProps = {}

export default EmojiFlagGreenland
