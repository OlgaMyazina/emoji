import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KeycapDigitOne = forwardRef(
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

KeycapDigitOne.displayName = 'KeycapDigitOne'
KeycapDigitOne.defaultProps = {}

export default KeycapDigitOne
