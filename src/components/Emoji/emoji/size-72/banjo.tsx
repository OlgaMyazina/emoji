import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBanjo = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-banjo"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBanjo.displayName = 'EmojiBanjo'
EmojiBanjo.defaultProps = {}

export default EmojiBanjo
