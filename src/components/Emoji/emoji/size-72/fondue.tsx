import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFondue = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-fondue"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiFondue.displayName = 'EmojiFondue'
EmojiFondue.defaultProps = {}

export default EmojiFondue
