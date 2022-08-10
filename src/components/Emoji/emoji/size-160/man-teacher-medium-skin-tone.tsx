import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManTeacherMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

ManTeacherMediumSkinTone.displayName = 'ManTeacherMediumSkinTone'
ManTeacherMediumSkinTone.defaultProps = {}

export default ManTeacherMediumSkinTone
