import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiForkAndKnife = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-fork-and-knife"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiForkAndKnife.displayName = 'EmojiForkAndKnife'
EmojiForkAndKnife.defaultProps = {}

export default EmojiForkAndKnife
