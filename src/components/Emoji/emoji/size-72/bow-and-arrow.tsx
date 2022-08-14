import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBowAndArrow = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-bow-and-arrow"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiBowAndArrow.displayName = 'EmojiBowAndArrow'
EmojiBowAndArrow.defaultProps = {}

export default EmojiBowAndArrow
