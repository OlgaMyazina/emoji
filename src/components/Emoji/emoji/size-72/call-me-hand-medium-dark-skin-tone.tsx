import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CallMeHandMediumDarkSkinTone = forwardRef(
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

CallMeHandMediumDarkSkinTone.displayName = 'CallMeHandMediumDarkSkinTone'
CallMeHandMediumDarkSkinTone.defaultProps = {}

export default CallMeHandMediumDarkSkinTone
