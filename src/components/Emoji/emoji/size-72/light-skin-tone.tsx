import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const LightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEUAAAD///8AAAAAAAAAAAAAAACjo6PY2NjZ2dn+/v7////////////+/v3+/fz+/fzz2cXx0bXx0rfx0rf+/fzx0bX31LL42Lf42Lf63L363Lz63LwweZDMAAAACnRSTlMAAAABAAEpYGD+QqKlRAAAAAFiS0dEAf8CLd4AAAAHdElNRQflBB0CBhp1EoOBAAAAhklEQVRYw+3YMQ7DMAxDUdF2EvT+hw2aOGZXZ5UJdCEP8AZt+gjREAXoi0gjB2IDsAiRvBHYyzI0LiJwCKCvHEL2UCQ5Q6XmJJLPmKEP0hDPGWp1S12K4376C2ppqBsyZMiQIUOGDBkyZMiQIUN/hVTPsexdlwUEWdJYmxpShShZGpPFOtF+jzNCZw+vmhUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDI6MDY6MjArMDA6MDDU/FO4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDAyOjA2OjIwKzAwOjAwpaHrBAAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

LightSkinTone.displayName = 'LightSkinTone'
LightSkinTone.defaultProps = {}

export default LightSkinTone
