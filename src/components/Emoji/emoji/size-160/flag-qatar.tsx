import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagQatar = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-qatar"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiFlagQatar.displayName = 'EmojiFlagQatar'
EmojiFlagQatar.defaultProps = {}

export default EmojiFlagQatar
