import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const SpeechBalloon = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

SpeechBalloon.displayName = 'SpeechBalloon'
SpeechBalloon.defaultProps = {}

export default SpeechBalloon
