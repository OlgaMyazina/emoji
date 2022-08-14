import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagEritrea = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-eritrea"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiFlagEritrea.displayName = 'EmojiFlagEritrea'
EmojiFlagEritrea.defaultProps = {}

export default EmojiFlagEritrea
