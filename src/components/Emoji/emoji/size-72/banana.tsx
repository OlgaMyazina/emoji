import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBanana = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-banana"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBanana.displayName = 'EmojiBanana'
EmojiBanana.defaultProps = {}

export default EmojiBanana
