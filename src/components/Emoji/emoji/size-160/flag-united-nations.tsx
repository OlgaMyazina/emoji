import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagUnitedNations = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-united-nations"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiFlagUnitedNations.displayName = 'EmojiFlagUnitedNations'
EmojiFlagUnitedNations.defaultProps = {}

export default EmojiFlagUnitedNations
