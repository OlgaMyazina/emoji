import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSuspensionRailway = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-suspension-railway"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSuspensionRailway.displayName = 'EmojiSuspensionRailway'
EmojiSuspensionRailway.defaultProps = {}

export default EmojiSuspensionRailway
