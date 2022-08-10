import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonDarkSkinToneBlondHair = forwardRef(
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

PersonDarkSkinToneBlondHair.displayName = 'PersonDarkSkinToneBlondHair'
PersonDarkSkinToneBlondHair.defaultProps = {}

export default PersonDarkSkinToneBlondHair
