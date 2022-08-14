import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagCongoBrazzaville = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-congo-brazzaville"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlagCongoBrazzaville.displayName = 'EmojiFlagCongoBrazzaville'
EmojiFlagCongoBrazzaville.defaultProps = {}

export default EmojiFlagCongoBrazzaville
