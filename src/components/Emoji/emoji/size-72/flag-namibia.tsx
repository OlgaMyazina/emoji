import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagNamibia = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-namibia"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagNamibia.displayName = 'EmojiFlagNamibia'
EmojiFlagNamibia.defaultProps = {}

export default EmojiFlagNamibia
