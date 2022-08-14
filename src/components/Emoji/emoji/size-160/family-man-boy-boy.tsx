import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFamilyManBoyBoy = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-family-man-boy-boy"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFamilyManBoyBoy.displayName = 'EmojiFamilyManBoyBoy'
EmojiFamilyManBoyBoy.defaultProps = {}

export default EmojiFamilyManBoyBoy
