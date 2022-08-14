import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBridgeAtNight = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-bridge-at-night"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBridgeAtNight.displayName = 'EmojiBridgeAtNight'
EmojiBridgeAtNight.defaultProps = {}

export default EmojiBridgeAtNight
