import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagGuernsey = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-guernsey"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagGuernsey.displayName = 'EmojiFlagGuernsey'
EmojiFlagGuernsey.defaultProps = {}

export default EmojiFlagGuernsey
