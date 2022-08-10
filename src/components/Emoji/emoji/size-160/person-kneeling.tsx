import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonKneeling = forwardRef(
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

PersonKneeling.displayName = 'PersonKneeling'
PersonKneeling.defaultProps = {}

export default PersonKneeling
