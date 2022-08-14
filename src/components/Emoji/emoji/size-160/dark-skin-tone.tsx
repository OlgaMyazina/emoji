import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-dark-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEUAAAD///8AAAAAAAAAAAAAAACjo6PY2NjZ2dn+/v7////////////7+/v6+fn6+fn7+/uRhoNvYFtxY15xY15vYFtPOjBUPzRUPzRUPzRZRTlZRTlZRTlxY15vYFtxY16RhoMvxofWAAAACnRSTlMAAAABAAEpYGD+QqKlRAAAAAFiS0dEAf8CLd4AAAAHdElNRQflBB0ACRAR26I+AAAAj0lEQVRYhe3YMRKFIBCDYYKg1bv/Nd/YqUhssV0yY5Mc4Cu22x9JNKQMtEmkkB2pApiESF5IWPM01E8iYRNAhxxC9FAkOUI1KJHkNULLFoaOe4RKWYPQ2doLqmUJQXfdDRkyZMiQIUOGDBkyZMiQoU8h1XMse9crfugBKDP/XwFBljTmpoZUIUqWxmSxTrQHp0wNZ3A66HcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDA6MDk6MTArMDA6MDDLJLqdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDAwOjA5OjEwKzAwOjAwunkCIQAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiDarkSkinTone.displayName = 'EmojiDarkSkinTone'
EmojiDarkSkinTone.defaultProps = {}

export default EmojiDarkSkinTone
