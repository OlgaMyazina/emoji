import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-medium-light-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAZlBMVEUAAAD///8AAAAAAAAAAAAAAACjo6PY2NjZ2dn+/v7////////////+/fz+/Pv+/Pv+/fzlxq/et5neuJveuJv+/Pvet5ncs4zet5Det5Det5n+/PveuJvgu5Xgu5Xgu5XeuJvlxq/JDDvQAAAACnRSTlMAAAABAAEpYGD+QqKlRAAAAAFiS0dEAf8CLd4AAAAHdElNRQflBBwULBRd1toJAAAAkklEQVRYw+3YMQ7DMAxDUTG1EqBZev9LplOBRkaY1bOsogt5gDdo04cVDbYAfRJp5AVzAJMQyYBhXaah6yQMWwH0LYeQPRRJjpAnJZKMEXqmoUd8RuiF7ikoGt8j1NyT0HZ0QYIECRIkSJAgQYIECRIk6I9Q2XNc9q47fG0JqJ/7ET9JGnOrhqpCVFkaK4t1RbsBt78LZyBo3nsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjA6NDQ6MTUrMDA6MDCTPTg0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIwOjQ0OjE1KzAwOjAw4mCAiAAAAABJRU5ErkJggg&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiMediumLightSkinTone.displayName = 'EmojiMediumLightSkinTone'
EmojiMediumLightSkinTone.defaultProps = {}

export default EmojiMediumLightSkinTone
