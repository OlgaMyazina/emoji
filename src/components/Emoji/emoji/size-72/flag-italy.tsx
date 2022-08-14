import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagItaly = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-italy"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiFlagItaly.displayName = 'EmojiFlagItaly'
EmojiFlagItaly.defaultProps = {}

export default EmojiFlagItaly
