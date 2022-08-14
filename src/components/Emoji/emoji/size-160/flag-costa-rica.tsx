import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagCostaRica = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-costa-rica"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiFlagCostaRica.displayName = 'EmojiFlagCostaRica'
EmojiFlagCostaRica.defaultProps = {}

export default EmojiFlagCostaRica
