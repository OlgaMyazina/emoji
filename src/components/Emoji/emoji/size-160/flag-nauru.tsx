import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagNauru = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-nauru"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagNauru.displayName = 'EmojiFlagNauru'
EmojiFlagNauru.defaultProps = {}

export default EmojiFlagNauru
