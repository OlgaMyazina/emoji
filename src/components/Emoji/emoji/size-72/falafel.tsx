import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFalafel = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-falafel"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFalafel.displayName = 'EmojiFalafel'
EmojiFalafel.defaultProps = {}

export default EmojiFalafel
