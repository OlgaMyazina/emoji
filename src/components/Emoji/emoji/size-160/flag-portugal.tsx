import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagPortugal = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-portugal"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagPortugal.displayName = 'EmojiFlagPortugal'
EmojiFlagPortugal.defaultProps = {}

export default EmojiFlagPortugal
