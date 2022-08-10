import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KeycapDigitThree = forwardRef(
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

KeycapDigitThree.displayName = 'KeycapDigitThree'
KeycapDigitThree.defaultProps = {}

export default KeycapDigitThree
