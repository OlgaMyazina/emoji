import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagSwitzerland = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-switzerland"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiFlagSwitzerland.displayName = 'EmojiFlagSwitzerland'
EmojiFlagSwitzerland.defaultProps = {}

export default EmojiFlagSwitzerland
