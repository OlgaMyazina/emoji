import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanScientistDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

WomanScientistDarkSkinTone.displayName = 'WomanScientistDarkSkinTone'
WomanScientistDarkSkinTone.defaultProps = {}

export default WomanScientistDarkSkinTone
