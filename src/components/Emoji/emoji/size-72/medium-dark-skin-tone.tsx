import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-medium-dark-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAbFBMVEUAAAD///8AAAAAAAAAAAAAAACjo6PY2NjZ2dn+/v7////////////8+/v7+vn7+vn8+/u0loafd1+geWKgeWL7+vmfd1+SWjOWXziWXziWXzibZD2bZD2bZD2WXzigeWKSWjOWXzi0loageWInoa23AAAACnRSTlMAAAABAAEpYGD+QqKlRAAAAAFiS0dEAf8CLd4AAAAHdElNRQflBBwTLBvIJtEdAAAAm0lEQVRYw+3YMQ7CMBBEUY9jE8kKDfc/I0ICRQp2MrROu16UZuYAr9huP4LTECLQBpFEHggZwCBEsiLgFoeh40sEzA7Q5g7BeiiS7KFslEiy9lAZgNYeSmk2QltrJyjnyQRFvAQJEiRIkCBBggQJEiRIkKBLIa/nuKBgN0AT1/O7nh+fuyX+pPfyrH9JGmPzhrxClFsac4t1TvsB0OHaWNDkEYMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMTk6NDQ6MjIrMDA6MDAj4S5qAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDE5OjQ0OjIyKzAwOjAwUryW1gAAAABJRU5ErkJggg&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiMediumDarkSkinTone.displayName = 'EmojiMediumDarkSkinTone'
EmojiMediumDarkSkinTone.defaultProps = {}

export default EmojiMediumDarkSkinTone
