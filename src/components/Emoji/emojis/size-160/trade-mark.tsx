import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiTradeMark = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-trade-mark"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQdBR8sJOephQAAAAJiS0dEAP+Hj8y/AAADyElEQVQYGe3BzW8UdRjA8e/zm9llW3a3pQSw+BJ5UZuAUURICGiaINNSz0bPHEw8yJGbRFON/gEkXkw8mJAYDySYBSwSUIIRkmoMkfAWMYANL7FiW6S73fk9Tmdf+sLs1JLdi5nPh0QikUgkEolEIpYQ8GATr6P8dyZzvetLf/ILPAI76EWZIZyRk8oQD/NgNW+yFKVGltzpPOhPHGSaS8UWBlkEIfND++HSJBW9DDKHHNVhxniIR6CPT0gzS9v57NflCUKGCssiGWsQqizzvSzPC5HaGCDNLIJYo0KF4ZEoShxdgXcfj7k8Aj1s4yFKjeGRCAvqW7pKiLCL1cQwBBQVRVEURVGU+RRFURRFURBFaUw3sBU85uliN0IMl8AydCx3xbFKjfDnY+MdQoWSm1p+U0vUiZO+iXWJkWXAHpUyc23iRWK5BJ7BHllxzlXqSs7Jj+UNqgTn7qq3uy/7hhopTv41LsTqlae5Sp0Hhn46ieUS+AjGGaduF9Z17jOL798euXX9MxZD1/KqXPUYom41r7EAQwTBYS5BRFiktAxoO1Uege30sABD0yl126SHGWkGyBBSGjE0maGzbJSQduM5eFStZwchYVnZtUQyNJWSsh0FvU6FaL/fRcAj0MtTBJQ2v/uw/YNIhiZTUzxnv6fmBTYLoRwDuIRyt4pflYtEMjSZ4pTlGEUqOtltjUdgI1sIpeg4O3pRHCIZmk6F01yhSnbKE0zrYyUBpX0qd2R0QoRIhuYzcpNvqdJn2S6wkj5CQu5a5ylLI4YWUKXAPSoyMqAuW9hIKE3+1L5rjqEBQ2v8xM/U7GAD/WQJKNmJXGGPFRoxtIQzylEsIX2cd9hJyJD/NX+2TGOGlrBwnBEqUuzhOQJKhvw3+27fpTFDSzhwiTPUpDCEcneyx/ZjaczQEsvhAQWKzOGSP9d53iWOoSUyBE5zhVmU9nKuMDwhxDG0zg1OMIuQ/z13cg3vEcfQIkPgU+AeVUqa/HdrfksRz9BKw/xC3dL72cLwlBLP0EqjHEEJGfIX8j/m2U88Q2sdlxGDwdBOfmjfLZeFuDSVMGOIfsYurvt8+VasSvqf7KH39QMW4hJJsMxQlMZ8DDWKolgq1nPgwVsf5lKK4NvyJLMoNYoKdS4RhNusLbeXxKfCLCm6qkRRXuKyny0aS0BxTcb2UGLaAWBvkSLzGKCjlC5imWYyJcGhwiVCmkv+K592F0QJCeXJsRtKFGEvg4eevJRSJSSTFzZzgjg5dGTdu/k2ZZowNf73PUMikUgkEolEIpH4X/oX+AQ3OdNGpTEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDU6MzE6MzkrMDA6MDCLg23VAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA1OjMxOjM5KzAwOjAw+t7VaQAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiTradeMark.displayName = 'EmojiTradeMark'
EmojiTradeMark.defaultProps = {}

export default EmojiTradeMark
