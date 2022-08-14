import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagJapan = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-japan"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagJapan.displayName = 'EmojiFlagJapan'
EmojiFlagJapan.defaultProps = {}

export default EmojiFlagJapan
