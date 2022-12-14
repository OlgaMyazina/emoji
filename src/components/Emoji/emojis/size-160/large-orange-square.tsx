import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiLargeOrangeSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-large-orange-square"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFyMBtdWcdAAAAXpQTFRF/4oE/4oE/4oE/4oE/4oE/4oE/4oE/4oE/4kD/4oD/4oE/4oF/4oG/4sF/4sG/4sH/4wG/4wH/4wI/4wJ/40J/40K/40L/40M/44L/44M/44N/48N/48O/48P/5AP/5AR/5ER/5ES/5IS/5IT/5IU/5IV/5MV/5MX/5MY/5QY/5Ua/5Ub/5Yc/5Yd/5cd/5ce/5gg/5ki/5kj/5oj/5ol/5sm/5so/5wo/50q/50r/54t/54u/58u/58v/6Ax/6Ay/6E0/6I0/6I1/6I3/6M3/6M4/6M5/6Q6/6Q7/6Q9/6U8/6U9/6U+/6Y9/6Y+/6ZA/6dA/6dB/6dC/6dD/6hC/6hD/6hE/6hF/6lF/6lG/6pH/6pI/6pJ/6tJ/6tK/6tL/6xK/6xL/6xO/61N/61O/61P/61Q/65R/65S/69S/69T/69U/69V/7BT/7BU/7BV/7FW/7FX/7FY/7Ja/7Jb/7Jc/7Re/7Zj/7Zk/7lo/7lp/7xv/71x////H2EdGgAAAAh0Uk5TGRqQkePr7PmxaoQNAAAAAWJLR0R9prEQyQAAAoZJREFUWMPtmE2O2zAMhT/SnkU3c5GiQPe9fG9QoBcp0EUWicnXhX4szyTpjJ1lFESRZOFZfCQfhZiZuzjWLFOzzxPHWyxuj8BhstkAkGwnhMwAbAZgfrXdh9HfBWAG8B/fbS/hpt8/VYH0+m3abRr+9dcfqyfidCAC7EQ3LU5f0pAhA1kfVBJoK3VWtkB5uZ+iAylCbctdB639ulOhDkSkytu4a6KGvu+0WE1DEhDAFKB5sUlhTG1tCll9OC1zlJU5NIfnrAEoL9liXWY6F4DSQawDCM515QxnAiVvOKp2f9Z/IxBLHHD/huxQAp5OgpN4ekIZAw4JnnWAk046pNtlOFEsOZARAy8DOxDjvE7CR6/l1rSr0SQT9h+OtCwf4ij9GkeLBq91999QAVPt+mBN2pVso7r/+ivLauHZh8U6UWJrZJ8PuH/kKA/EEbmJo9yNc8/9u1NEGU26BrVZFce6bhR/NV2SgXw0LeMARWPS5n6KSu6tQI9xfyqQFZWXdbE3lfxSI6V8UInx9lvYrilihUuhItxNvdXW6U/bvH9HPUrpqtbb1fFWJWzD0XJTQmoNuy0vjAEZ9rbmjHPdfDYsvgf6dFvGKuIPEn+1pN3qln2kNvnGtI29ukvJO64Hssfkf+/nfg8Zbg/jrtH9UeLIBHgKJhKEZ7W1WWvCLA18YQoMTUQOcdQyBFMacCkaEe2yJFm5KAmDNBIWSGNho0fZGG5ZNHBt6vWjnK9ftlQOq7dk1yKdrVC3so3risw40XUWsJcXwKagXITYCsqUq+vMo/ZTjDEiAZcCRNMOdoS4AC5zn2gQjD3FhAe1J9AT6An0BHoCPYEOAOkxOHLFI3BChj/m78N/CMuyUh2vABgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjM6MzQ6NTYrMDA6MDCyblUeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIzOjM0OjU2KzAwOjAwwzPtogAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiLargeOrangeSquare.displayName = 'EmojiLargeOrangeSquare'
EmojiLargeOrangeSquare.defaultProps = {}

export default EmojiLargeOrangeSquare
