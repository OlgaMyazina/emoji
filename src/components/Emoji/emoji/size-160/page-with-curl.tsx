import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPageWithCurl = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-page-with-curl"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPageWithCurl.displayName = 'EmojiPageWithCurl'
EmojiPageWithCurl.defaultProps = {}

export default EmojiPageWithCurl
