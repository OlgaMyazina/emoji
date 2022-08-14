import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiTramCar = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-tram-car"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiTramCar.displayName = 'EmojiTramCar'
EmojiTramCar.defaultProps = {}

export default EmojiTramCar
