import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonPlayingHandball = forwardRef(
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

PersonPlayingHandball.displayName = 'PersonPlayingHandball'
PersonPlayingHandball.defaultProps = {}

export default PersonPlayingHandball
