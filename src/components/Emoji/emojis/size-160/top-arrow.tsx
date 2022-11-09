import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiTopArrow = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-top-arrow"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQcFBQtFUzu+gAAAAJiS0dEAP+Hj8y/AAAGYElEQVRo3u2ae1BUVRzHD8uiBZRFagKZRWGjKVPiWDY1Nsr97bLsA3bZF7C7wrKgIKLLY0BJBVZBe/iCsnyUg9lrpj8SayadBkadHuOjZpoJe2hZjjzMxnhD7Omce9d9wAIrLItTe79zZ5hzzj33s+ee3+93fueA0H/vAqrpEAZ3EFAY1MHrEAp3CM5dsBX6oQsKgQ93AA4PMuEmYKJWUNLPN9mzRwi/szhUF2HpJCKxOAvhvB2HqgGiYBJxwuGYCw7VkUmyN4ITCrUwMASoDyxkmk8CDp9YVdcQHKqbZJrzwOefSwVtbnGoroDAh5ObxVlKLAqPoHOwwEdILM5j0DgiDtUxiPAVUBixJDyqBqDGB8GE4EwlgaLPAyDsg2DCBgoT/O0RzsQHE3b2CIgF4dtQEzw7QUhuA4UnaiQm4H0kFifCTaDwRBMRTIYNFJ6oj5iBd4MJGyiKoHtMON4PJuznUhKLwePQFQAvzSQBYhA8N0qg8ETnYSGDROPFiSFdLI9mTjHYVaMDMENVvzxSOF4gBZIFp1qMFzNdZGpSXR8ZR4TTW0xNrk9lNhmK04IM4wPKRIagsjm7onY/6qx9c6S7RgYSD+RufvNh16d2RW2ZvS6wyPsu8gUybkz5yEAJA4Y1Gp+uhypGGyFDnoaMrx/ID+QH8gP5gSYHiBkFiKGhI0/tOyA5EloS8EhKtKavTfUd0DGkTzIfKjo4vIoPFMWVoBzfAOUgjI7zGvkNw6qRf4Jfz/sE+S//5aFPmgLT4H5yT5m4LD6CpIVlsNGtykRmZbji1l5INKyGOvgCzpD7XciDJxwJIamPhEKnfuhfBZAC8yAIbhNoMdwY3uklthpj02mrYFgF30O/U+0/0ESg7oFb/TwDg7MTK/TCzyS1Dr+N0SRNY5k/B2dgjvwqqdm0SE9POMqh07nGvk1VDSHA9bOE2xgdks8NwIcwy2MkARIsFt+QYSmRjGRYtuiEuRIp1rRmxeoQ6LiNKwbLrLqOlW3q9gSr7XUdYAJudtmAJFZ1r6pH1ZPcJ7bakbZ5vLumRakPrd9cWl1aRaW8QH9XPM75cuM2tqS69KXS8BUR8DXXta5jyzuviXcsKRHp9ovaba/7Fh5xADFY27Ilv1JZodqoN9VIm21tfoUYD4GwTYgE0RU85i1ggXTbI+11QMenl75K2V+xvT60Fl1ASmQIji+npUT9ApPAaYQUl7KijeRpI6riJ6zkzo4EA+K851HSGPYUbUBpOyIdpUFwiO0UZ5/dM7vaUT6LWBtbnnBUPlXgALqcNZcLtAxipsHntEyIFUf1IdrxAEU4bwyfpuMjxmt24IByZ59ky2ilZzUPit0AsT3WckDaM1kzMrwEFAU/stO5L1eXibKcgZK5ba3Ey/q5ie6BAmEfB2Q4nT89x0tAC+EP1iN1ZkkyXNvH0RlCXYPxaYV7oAe4UwARzj686W6zl4Bi4CoL1GEUrHRtvwz+YoFaTIuS7UDJl1ZFm7j6YO4MicHy/gJTBirx2gixQLL2DIHBAyDJdZEF1kI+lMJHt7bdTU1Vcy1j2rkfYYRkHelCvWv7F90BDVYcTukpL/wm4BWvAS2gc4j88i6dNMW1PUNHgMGKa6ueUrkJHVTx2NBZvvPgtNoxnm24A5pDgiidmP0KoxzJnK1My7lG9S/rH9fYPbXEqu3Wdmm7NF0pnRkthQ2vZhwNPcC6Xm8B3QcNnAMU1cQFChzlAfAyV67/qmyGyg6kbt2Uu1VikVlkVQl7Fh8Jw+jcOE5/3AEFcs6N6AeyukHgONj7jjPpnEM1QRL7J5P/ZpqX4aWlmnsgBHJu6UHWN3X05JDVTDhADx8YrOrekGp2jmVXsuZnThwQ4v4b5qRtjPrJ51sHSrIwO8kd7MXjvFM7Z233LRAJnCJBs9NKsYfcrD0BNrZVywvQ3okBEvKY/dRUhQRopkvNMr44W9osdFoHMsS/iLDpenX+B0H7bCtGpo2Wyr0FJEBP8qRvqHvVXdrezCrXYwE1Sg5KS0g9mdwusYoICM3n9R3FjbvlH085zLaIR/FLFFc13eoew0+r52d7A4gsnwJyYysUlUmVis0x7w+qNaP1qGC6WWreba4vPFFyvGLvTnndzGvoM1u9DqWFbZBY5JXyivjSe0t9k5fR9eNB/v6Qt0PfC/mUj9EZf6r6/7v+BXBBJKtWlAZEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI4VDIwOjIwOjQwKzAwOjAwaLtzzgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOFQyMDoyMDo0MCswMDowMBnmy3IAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiTopArrow.displayName = 'EmojiTopArrow'
EmojiTopArrow.defaultProps = {}

export default EmojiTopArrow