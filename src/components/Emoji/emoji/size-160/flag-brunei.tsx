import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagBrunei = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-brunei"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagBrunei.displayName = 'EmojiFlagBrunei'
EmojiFlagBrunei.defaultProps = {}

export default EmojiFlagBrunei
