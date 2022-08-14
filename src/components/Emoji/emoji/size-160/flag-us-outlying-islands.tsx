import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagUsOutlyingIslands = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-us-outlying-islands"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiFlagUsOutlyingIslands.displayName = 'EmojiFlagUsOutlyingIslands'
EmojiFlagUsOutlyingIslands.defaultProps = {}

export default EmojiFlagUsOutlyingIslands
