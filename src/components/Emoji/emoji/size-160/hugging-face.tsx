import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const HuggingFace = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

HuggingFace.displayName = 'HuggingFace'
HuggingFace.defaultProps = {}

export default HuggingFace
