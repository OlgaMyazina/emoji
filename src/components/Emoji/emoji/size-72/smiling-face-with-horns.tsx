import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const SmilingFaceWithHorns = forwardRef(
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

SmilingFaceWithHorns.displayName = 'SmilingFaceWithHorns'
SmilingFaceWithHorns.defaultProps = {}

export default SmilingFaceWithHorns
