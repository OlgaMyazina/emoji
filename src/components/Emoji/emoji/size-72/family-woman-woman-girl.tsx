import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFamilyWomanWomanGirl = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-family-woman-woman-girl"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiFamilyWomanWomanGirl.displayName = 'EmojiFamilyWomanWomanGirl'
EmojiFamilyWomanWomanGirl.defaultProps = {}

export default EmojiFamilyWomanWomanGirl
