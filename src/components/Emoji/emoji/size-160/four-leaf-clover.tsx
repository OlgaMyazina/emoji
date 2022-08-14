import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFourLeafClover = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-four-leaf-clover"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFourLeafClover.displayName = 'EmojiFourLeafClover'
EmojiFourLeafClover.defaultProps = {}

export default EmojiFourLeafClover
