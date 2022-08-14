import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiUmbrellaWithRainDrops = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-umbrella-with-rain-drops"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiUmbrellaWithRainDrops.displayName = 'EmojiUmbrellaWithRainDrops'
EmojiUmbrellaWithRainDrops.defaultProps = {}

export default EmojiUmbrellaWithRainDrops
