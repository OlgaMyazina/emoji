import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PlayButton = forwardRef(
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

PlayButton.displayName = 'PlayButton'
PlayButton.defaultProps = {}

export default PlayButton
