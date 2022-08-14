import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagMaldives = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-maldives"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiFlagMaldives.displayName = 'EmojiFlagMaldives'
EmojiFlagMaldives.defaultProps = {}

export default EmojiFlagMaldives
