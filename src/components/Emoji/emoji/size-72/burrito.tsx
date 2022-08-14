import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBurrito = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-burrito"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBurrito.displayName = 'EmojiBurrito'
EmojiBurrito.defaultProps = {}

export default EmojiBurrito
