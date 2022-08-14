import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSoonArrow = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-soon-arrow"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQcFykgA1NkoAAAAAJiS0dEAP+Hj8y/AAAJoElEQVRo3u2Za3RU1RXH9ySERx5CjC6QrCJYgvVRg0WxCNWCc/73ZjJ5zEweEzIkIeYJQcxMSCAhapBIRAhULK8EQZREBBVoxUeKYuXRhSBgtchDQB5aJIpgmpCEZPfDmUzukERdXbQzq8t7vt3Zd9/fPefs/95nD9HPl0cuEHTwBcGLgPyRh1FegwSCPzbh74iAD7wIiHEGWegHLwJiXEIFQjy+dBogRitqMNzDSG5AjHZ8gHHQwWuAGIyjSIQfvAiIcR5FCIIXATGasAyh8BBQP7zeBYhxBW8g/CdscBCCYEMepl6z8SgOdgPEYByACl/8KNAQfApG2zUc7T0AMU4jG33xo0D/6NHBtR+XMA8h8CIgRgtqEdbjbvIAEKMdO3B/D3LpESAG4wis3cqlx4AY9SjsRi49CMRownJ9qIV+4TVALNoMbyXdFkcTvQNIsJntu0ruLqPp3gAk2Nry2MurwjLoHc8vmWCF074vr1h7wwpv2NSCDZx7ZkHuK31f8IawFxzN+QefjXjPt8YbhFFw3JXirStGEr36Q6lD8LUcPwRkaypbvjp0IXHPyVUMiTwUw9HXbMRwRA9zo3JG/dOz1gcto7aes30cxfSf9kjxnFll12g8MbPcdEh0g2PkaccWWbf4rf3flrCCRDclrGBT+4wdS393QbfeG4p8wdbW0tpVYRY64vlTh2CF0y6VP/1SyGLa6/ljkGAD555dkLOh32pvOCgKjub8A0sM23zWecNRWnB8W/HWlSOZtnlHs8HWWLZiTeg891zuCSDFX2xSOfObipk111V7vmGlp3H+UZvzTixO2uL3oje09BQaF5BbvPj3X+te846mZwrZfEoCNupW/dwh/y+Hqi+CEIIQBHbfLgFBh74YgGAEwa+nczkIfrgOweiPvv9hXxEEQjBisQTv4G/YjbdQCQWBuPo1ozALG/A+dqAOVUhBqPsLQdBhCNKxCn/BTmzHehQgHL3Q8Wsg0lGEmYjtuOfSrFQUociQE3d9B84ovI4Gt+z8HdZghJwFEAgDUY7Tbj2fZuyGqdM1CH2QhL1o0di04QRmIxjSRyg+BoNxCmM75xeEG/EhGGw+nnmrNLwb+6XMC1ZY6Sw/6zAMHTjrcEXa6LUF6jmkyz8PQPDDI/i2w4/GphUrMQAEwmBXV20j+rsB7QGDLZ9njyAQAlAr3Vjasr/I25G1M+msoc3ZMKkUfiD4YZ7EAZvbUi6m1Mc1uQrUU3jQCR2Bc9JPFNsa085bLxnbXL2gYvi4ATUio2OOugKNxXmw4ISWsqrqu164/tkQ+73mdUorGIzj6u0K4X58CQarnHmuvGLRQxX32ROsf1Jbnc43IBCEYGyVOEnNpRsrzQtGF4u0RcZvnDYnEO4GxPgYv+oJKA/tYIWzdi8fXEEfUiIJUkOVnQY2cHRLfFIe4Rn5qpTvnkk/4ruRGugBir9RrZWulfPKOIWg4qIsUkurX7l+Mb1HE2lKb8O0jp2plF4FxFiCPugW6DH59dZau99kIiJSiXQpyflrHWsK1uTrx4dgFxgcyfk1Nf6VzlylEO7FGTBYYWOhQnhKvib96II75tAnHd9+HbbI+4Y6UxBucgOqh9G52FcBFTu/4RBGCee6/pW26/b5fuS705cII/ElWLC5uSA5lx7XdqJflUCxL8UMwGYw2MC5L6zu/YRWTnLl7os6Zr1FDJJAKqsSaRsGdQc0yRmo7TiAAozFIPR2C0rgElhwwvn80dPctespCWR51/JL7AILjmrPmRFDDq3VeFwAg6O/tY15aCAOggVbL1pOCxl/M6HrCjQCn2k67fXYhxfxKMYiyDmhJjSCwfHH88Jy3YHs8qn4XQl3if1gwdGtGWkplKG1+g3+CRYc05AuJBA4/kisA3K7H8e9XYDG+yj5auNVZ6g2nMereBA+IJglUNzh3GFZ7kBT0AYGJ+xODBcHwODo5nTbJHftvksueGxDBiY4geKOp4VjpfNNNQjADRogokiKCIgrtnwV6ZQ0DdZJmLRAOUMzfxRoclegs12ATuQO19+Jw2AwGmBDiBsQUSZl+OWMy3528odJ9abWSK1WH8DNiJVAlsNZwx52B5oqU0knUFRLms3mDhTezQydyB4xhfAomsFg7MU9Mo5dQERE82hhr7kDi+93ZE1dmfJRTJMz8q4YshAtgUwnJ9+a6g5UIK2su6y/FvvB4MjW5PREmqy1ugfnwIJNDdl6LZCVcCPedG6PauzrAiQvJqK1vUpCbdMjzskAtSxVgItgsPGb+LFx7pn9GRllKXWThokdYHAEm0uiyKSFFlIw4+qnjx6vAUqX8XvOmUgaOzd1bwzFcAzHULW36nRkoMheeE4CTdxgvAenwGC11ZBp1MpBkPxCA2c+nxrUoUmGDUpfVQvkkMua/FnJzRMGdQI9TCDhh4XaUJJAQ7ENn+OY8pF6n9qZ7gizJVBqTfxAvOt85A0EQ/vt9WDBse35j1gJpU6bsxjjVrS8L/1k/XmJv/4mLRARCGGyztAC3YDtzhvVrrqFMAhvy7w9dS4RHnf13Etd6nS7xBScerZsVBrhAdS7sG9x2gxABVrAgs1tRflRrlzWCaQS0vAvdyBnLgPjMl6BGSMxEia8Jh0lfzdbTSeE43OnTQM2IAMJKMZ+tIMFx/CMqqo+NkIAXnZp2B4UIh7Z2IwmuZA5n8wPy+oC5Fz49VcD3aZ84pq2RnyFr+QW03MMF9b+MWgWCR/FrjShs+BqlvojOILzPq0cWUGLSCH8VjmmEdbLaO1oNqQ0lGcRRXQPRBiDL9yAiCIsxlOqRhRlvWdpL3z/uTsW0FICicCo+cZGxWUjWLCeo3ja0UrDrbSciASF64zx0Sfd/ehZ5cnfl89Z67+MQBgsDgrWs+VE1oiHOze+D0pxRbCezTLszRTpm6xPfjP+YnR7JBvYwFGccCXn9JwlVWEzaB0RpZGVrAGTsibuM182soENbGRze/q3szcuHXNG19EtTCSTj+1B2+b4C9JPJMdwcqN9T2Vqrf9qIlJIDDbtTWxOvJx2OHdEtkZA9KHG9xKaEy+nHpoidchBZeQItquO+fbNjrrCt0trKuzL7t7UR9sJLKRinWOII8VebX+zoK54c/lTSyasD3rMrbFbRGnk6O+Afb59i6OuaGvZioUT14Tu0W0hIiITRfcr0M81P2kui5gVWOJ6agIR5dxZZnnSPEctCdK4W0yrfav8nw98MfD1Ph/otndzXNpEW6i6d3XAmsD1/tt9E+nrbg9Vf6Dnfav8VwfWBGz1a6ULPx94/9+vfwPnVUEs7IFbkAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOFQyMzo0MToyNiswMDowMHe5gsAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjhUMjM6NDE6MjYrMDA6MDAG5Dp8AAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiSoonArrow.displayName = 'EmojiSoonArrow'
EmojiSoonArrow.defaultProps = {}

export default EmojiSoonArrow
