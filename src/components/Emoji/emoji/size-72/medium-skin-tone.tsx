import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-medium-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAWlBMVEUAAAD///8AAAAAAAAAAAAAAACjo6PY2NjZ2dn+/v7////////////9/Pz8+/r8+/rOrp/Bl4HCmYPCmYPOrp/8+/q5hmG8i2S8i2TCmYO8i2S/j2i/j2i/j2gIoucaAAAACnRSTlMAAAABAAEpYGD+QqKlRAAAAAFiS0dEAf8CLd4AAAAHdElNRQflBBwVJTCx1e+mAAAAjElEQVRYhe3YQQ7DIBBD0TGBRsr9zxopZYq7pVuw1I19gCfEbj5CNEQBchOp5EA0AJsQyY7Aq2xD400ETgH0yCGsfhRJzlA51iTyeMYMXdkWoV7vGarX6ot45w9UW12CsqchQ4YMGTJkyJAhQ4YMGTL0V0h1HMvO9XJ+NAFBljT2poZUIUqWxmSxTrQvCSRBZ4D5O5gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjE6Mzc6NDMrMDA6MDCnl3RvAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIxOjM3OjQzKzAwOjAw1srM0wAAAABJRU5ErkJggg&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiMediumSkinTone.displayName = 'EmojiMediumSkinTone'
EmojiMediumSkinTone.defaultProps = {}

export default EmojiMediumSkinTone
