import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonWithWhiteCaneMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

PersonWithWhiteCaneMediumDarkSkinTone.displayName =
  'PersonWithWhiteCaneMediumDarkSkinTone'
PersonWithWhiteCaneMediumDarkSkinTone.defaultProps = {}

export default PersonWithWhiteCaneMediumDarkSkinTone
