import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagZimbabwe = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-zimbabwe"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiFlagZimbabwe.displayName = 'EmojiFlagZimbabwe'
EmojiFlagZimbabwe.defaultProps = {}

export default EmojiFlagZimbabwe
