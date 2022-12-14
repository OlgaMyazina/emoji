import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWavyDash = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-wavy-dash"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQcFCgTp96KrgAAAAJiS0dEAP+Hj8y/AAAEE0lEQVRo3u2Wa0yTZxTHTy1gZMQBMxqzySZTP7gsMbpl0cxkH9Z/KdAbFCjQliEBZtLBnJK0CVQyBsQBQbuZCcgl1m1ewnBzGrfMzQmExMuHbcy5uJkwkyVoRHepFNby7mkVeN/SlsI3k+d/vrTpe37v/5ye50LExcXFxcXFxcXFxcXFxcX1WAtPYwNWIhaExWQTliARa7ERL+B5JEOOxbkgxGAF1is3EJoxgstwoQQpkGEhCMJyKNGC7/ArbrG4gQF8hGxmixbIWQUjOjCEm9mXCZ0QAjGBKyhlr4i+otfQi3uPsmfDja+RgbioOU8gHxcx7s9VCvkjs4b88QA9WDd/feyJJNjx5xwz03EH7/r7FEVvUtGGv6fz5hoSMIV+bI1k6RHGxToqRIhJHGWTNR9nG+uNbzYrYEjRqRAUUtjPUISbpgBmE84z4zPPK2YiqLSv2KATwi8GNa6LM/wE4wgZnfkPNL6g+n6HniWEtvMqrkoxGqFgvGjMcjfPnTEVxBnES6EsBSbQzJaBiAJBP2V2v/kj1a5zoGxv9m9pUtQtmFhSMEYG4JoYoxKK7zuONBuatjVutauLD+ruKKWcq9gebIl9X4qduC3mqIWdf9Q1t2Q0bGEPvEU1S8wv68+ppH26jd1ImIUFMCbclPbm7eEDxtPxB2mQWqmIdsUV6LQ/BJV2nXU7FuIePwkH7os5Bp/tm0Pbz8d8Nu3ZRFrKWaPrVk0GLeBOvOjf6gK9SUEjxsSYrCnbt4e2CHRspnYjJZNhs/ZCkKVR1OIZPDQjZxP4MTxiToGn9nDPGjtdkP6vesp+SrNf5QkazBs4gHLsQB1rvleMyfHWnDyc+h4JEkoeaUi/Xv1lmnSa/sMlRihBGZxsPiW/Wdz1DUeT2kJNvp6ylmvq091zlrBPbOWhHePk3q7u1R9QaI7uWc0JlXcOxwuflAJhx1+NtpPLOsLtDVrSxuttmfeUEXYYP8bsrmt1rfiQzoak6FjoV+s6MjyIyEkTykabrL1LuyPtnrlkjMu16NiaU4TBpAvlo/uqjid0RqC8TwbKTcxxaO6GK+11tiAqf9lvOBfjmu90sdAbMtMreV9oPUrJZuf/rBRyvVVDzswzsfNiyExFcYVZOZcyvZAUp2BmVIJ5vLq3bfOYrC+aA6+cyqg8uaTUNGj4V82S05gRlX/7m6j4qbG6O8VO16I6OOtpE5U+V+woHM6ayGQEJSOlCzrB8s+e/paST5Kc9Hn09xMbOahq1TuaygZrn/VixcDuMzXOpsKutd/LTy/onmOnavme1F2mCqf1rHWgsr+qr7ahVe1aOUynFnNt+pSOyTri2xO7ko4nXJE7F30J3Ecn5O0J7Uk9ib3LhmSDxMXFxcXFxcXFxcXFxcX1+Op/tIkLTqUetboAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjA6NDA6MTQrMDA6MDA8oZP6AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIwOjQwOjE0KzAwOjAwTfwrRgAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWavyDash.displayName = 'EmojiWavyDash'
EmojiWavyDash.defaultProps = {}

export default EmojiWavyDash
