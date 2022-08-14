import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagUnitedArabEmirates = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-united-arab-emirates"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagUnitedArabEmirates.displayName = 'EmojiFlagUnitedArabEmirates'
EmojiFlagUnitedArabEmirates.defaultProps = {}

export default EmojiFlagUnitedArabEmirates
