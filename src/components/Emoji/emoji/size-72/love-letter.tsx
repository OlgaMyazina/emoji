import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiLoveLetter = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-love-letter"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBAUwgQllJgAAAAZiS0dEAP8A/wD/oL2nkwAAEFFJREFUeNrtW0tzG9eZ/fqBN0lQfIiUKD5EUySVWLHjiT1lx4mnaqZqZjXZJ5uspiY/IKv8mJlFssjMxrssktiyXHFVIscKLUWR9SIlMnyKpEgBIIBGd+eci75gs9VogHSUFa7qqhtA39vfPfd8z24a0muxzW8e0j0keq3Xeq3Xeq3Xeq3Xeq3Xeu0VNIP/VaplnBiG+L7tub461b/F5im+r7phGCe+05/1OY+vNF+KzG+a5kuyhc+1TOHfolNamAMXOL7v+fl8QYynaxuSsu3Jhuf/OJOy5jNp2wqDlyRcFKBuFvFKdzsGlFOO96s1x6vWG49sy/jfWt1dticnxo0nT1f/yxf7Z6SOZXlimcaZdjDuu38UQFHGRu8bZU9cazRcqdZdqdcdqbn1gStzsz+1q9VqAXh8+7B0aOQLA0jzfclnbVFUO4W6dLouSfhOjOiWNWfdVDbX86R8VAc4DTl4vifnin3XSqVSv12r1exUKpVNWabs7z2T4uCQeK4r+VzqBEjd3FDrf5y9OiurkkAK25ZOY5Lu6Xm+lACO47jybGdT+vIZyeVy6UqlYtl6wkIhL7VaVfae7cjQyKiUK2BSLn1C3bplSbtjnLDh+eLYcBqAzmKDNDiNhifbW+tim76cO3eu9bsdvhl/2NraAopbMjw6BsrVpJBNwzsYHVWlEzjtwDqLEQ5/jgLcDqQ4wDyoVakCcADS1ua6uM6RTM7MKG8YCxD7yMiIrK9vyM72poyOjiu91OqWxIQwANHzqJqd1stEGRaWNw6UdioW/l6Bg7XBmoAU61IuPZcrc3Ni2faJcXZYeE5gWZaMj4/J6uqabAOk8+fHmiBlU2Im6HYUCAqgP7fOjwd13N22Rp0ABGO40+Fjpw3Q33vKIDuKOdtbm7K/uy2LCwuSTr9cgrbjhLCB4sTERVl58gQgiQKpgglz8G5RkOIYowFxsT0NHBv47Dl18eE+CY6PTTBSTVZaEdXQKqO7G4yHkVDdIBgYa2IxNs7tACANkgYsjnXKW7keAmOoletDS7Zke2NNrl5dlGw2G8teu52ew7PJ5KVLsry8oj6PEqSqI/mM/dJuhTvBYXdcxhN1MdbXJXf/vuSfrkrq4IDUkkYuJxVswCF27Qj3SAVghVWFbrfuOGJj/ADGF9b+Kna5rOJXZ6BfKpOTcrQwL3WMT2cykgLoGijeP87g85RrcMGcnZ1tWVtdkauLC3BQhZdUVR/tOBuhgcrgxtPTk/Lo0bL6bmT0vLpBNtNkUpxKkTV17HRja1uK16/L0NKXkimVm8wzraaU+N1fui21jz+RzX96S7Y++L5Yg4OKESpgI4iHh3L+d5/JhS9uSbZypJijUqCATd7nX0gdnnfvzTfk+b/9q7gXL0oGzKcMYTYdL1rkqEa1EtmFp155/EAW5q9IsVhMtId2J6+RzeYA0pQ8evyY+ZoMw4gfEaS0reQ9oQ4Apwbh3eVlufjL/5ci7BiiT5GBAYFxw4QEwGdUJgbYlS2VZOo3H0kKLHn4g/8UE16UoroAZ/ZXv5KJv3wlZqFfhG6XAHGVtKqIeE2wK1utygWAXHj0SNZ/9EOpzc9L2rJO5GV68Ue1hgJnf29XHt7/Cwzya8ohJYGjGNSNayUFZ6anFUhcwfDwiLphJnVMSa1Wzs6OTPzy/2TwyZpge0Ro+OgZuEAdLgAglRuD6gbOL4BNFVxz7z/+XXx8P//xxzJx+89iFM+J31dQNifYDQWOmI3mZ8UQU4rLT8X/+S9k7Sf/LcaFCy2ZlLrhiJwK4BgqQv7q7h2ZnZ2BIxqPVauo3TLbuehoANbf3w+QpmTt6bLs7e6qNTJvcQObo9gDVvTfuCHFh49E8vkmaxQw6JbZVDH9mWpA4GAcjWxepqBK6c//KNaf/iQzt5bAvL7mb4xlOU7NFToqleO8nCMvxQePpfjb3yoZKEtTJk+qAXMOn+/L3TtLcunSRTigiY7M0TiYURuUBFKxOCjTU5PyZPmh7O/vqc2s1T0FkvJUz57J0B9uQna7WQzgPLrr+kCw86pzkWQHwExjEZdu3pRLACnDC2HIFfPUtcHg1nmkEWwANfT7m+JvbjZlQa8hdaCMh3AOd27fkvGx8zAX061A0GjjkcPdPE0epaPtyckJefzwnhwcPAeFDXgbqBcESq2sSA7GWS3cc4OOlfvonn8SMMpGlWN1Bc7AL/TJ5PaOzEBF/b7+pmpagWFuStMcx3k4p+6+SxehmJXZeSZp2CNHeUBPgVMqvZDbS3+UkeEhqNasivOS1ty1kW43kCANDw/DkTRg7O7KlYVvSh8WxF3L/XVdzFoNrMDiGk4TgBO7bh7bEgUSbAAE9jM4QoXzXCjVqq9PMcvQY/X1CnDYHzfontM6h4sQD+plIZw4QoxDr1eplOTLW5/L4OCAzCFKZjjRaa1hm5To5tshrAOx0dFRZL+O3L93R+YXX5dc/4Ck4Y49fEcP0zTIfrDzAYv8kCfzA5UzA9tUQAyTh1qlU4Fqmces0ePpwTg3wW/Ug6MDEjnAjS4cgWS5AhlTCGwrsgRwCvmszNO7BVFyJ8McDjBbXqxdjpVEP4JET0CQ7t29LQuvvyFDWHEDghr1mlhGaGHceaqCZwfu3ggACow1jn7KbsY6gVoZWp30eHZG0wQIUTmiUHXO6FyBg14HkxoAsQpwbgOcdMqSxcVFFc+1y+s6VSjsOCOdxKTwDQjSRQRojJjv/vlL6cdiBmgXmFbgn8WIlgtzgwWS4qnAKykjHRhtsM0wA6MtAXhapZQqvQyOj6MHcFzGXfjeAUA13P8Q97r1xU2xsCGLi99kXadj8ppUvrG/bk2ZIF2C26w4K3IPrnSUY7AAwAQhmyCZqrvHhpUqZJmt5LPJLgl91oa4EQSGgVqRNWCnAsZxAmAAEEBk9H6EsQ8On+Oyqrz1rW+1UohO1c/ESDrJ/nQqlWp9ZolgEiDtIzd68dln4r94IR6/J0DYVYKku9myRyH/wM+Gd2zQtd1pJalNcBTw6A0Cg96gSjVcdWQEf5jKSBU549xrr6m4Lc6Nt7M1cfXrRAZ1U4MOg5QGSJnLl2Ufdsna3xcPKoPMSAGiwMExxVAAR5OpRjpw/ZYX2KXGSZdOcFxtmJvgNOp1BUxd2RxX2Rt2B+dHOO6NFMVFEjwALxguerUDppt1JnqxTjWfE6pGxkCwLbAo/dU96cOOpkEHU7GIqtbM0JlJp1QPQGpFxkboSVMYoIZSKQcgMUqmSjkBMCpApVFGh++SdWT2JpPeUKzTbZm3nQra3T4BSAJR38TCcRf0ToNFgkQ1L2SRBYCIASOVZn3H9ZuRLkEy7cB7hQEKVMxnysDqAFhTC5hDtjSC1IbHOo4lMuj8eVlGHjaDOMqKsKfdo6Gkkm5HFetUf452Cuxgh0evXJHn778vqQ8/FA/Zdo7BMgFqgdPsXpDg2hjH6FYHhcdxYRMEMob2pa6Yw+4FTGT07soLlk7gxjeuXZN+3DsDT+mGqplhNpzmia8Gq6OKdbJN/MyougowaBhZvHryzjuyzfLIzc8RODYkR6fFhEABI63yKz+nqH4EScVDx3Pyt0ZQPqkHauUoYFxVKiU4JcztIoYqQa23FhZkHjZwsFiUGqJ5BobRR9FxanUqG9TtI51w9ZDgVCoV5Jt55VYZl4yC6g8/+EB292CsHzyAt25IVhi2W8qbEx4vTGMwyG1VFP1WRVHlVARI2RwmxIFasaZM0CjT9JTcf+NNOQe1JjiDsEFHR0eqEyCmF5QzbLTb1cLjNt8Og3JacKgCBIf1XLJHgQxBCgjOxhHeP/mXD8TA7+7qqgzgt6wtyrOp8ceJSCtm0uUiL6hDExh2J7A3YXBqACyDIPXOd74jNjZkHDaIm0QgtIunbNw0O6g0Jj2qbmes7U5PPuOea2mbUy6XVRivwQk/GRlG1l9+/XXZKpXF+M2vxd/cQmyEXBTKRjVLBc5KH1RpIRCSRpzsqYXAUTVuDQ4T45ERuff221KD57oM9rB0mgoSXM7Vx4SXb64EIMU9FOj06KkFUKeAMAqOVisKNDAw8NJOaGpzV6tvviEbtaqMf/Sx+LvPlAEmkzRzxNU4EaCgJu17LeZo26PBYbyTPzckD9/5ZzmYnpZJ3GNoaEilFFE14saFQeLGhdUtKVg8Ue7o5vl5mDm8IWnLXWvXKAyFvgQ1cN56SzbhpsevXxcfQSRtULZ55xO1MDNIw2hr6t4xMDwv05Wj53HPFTiBZ7OzchHgsKqg1SiOEQTp8PCwZSc1SO2y+thIuhsvpm0OjR9vQua0s1utuAjXUfgpPj7C2E0wYOyTGyzxKVR86xgd/rOChx6OUqkmi6hOFQBTwdh8cVBW331XtuDOLwCcsbExBQDVPOn1FsoaBamT7Wm5+W6jZwJEcDiQN0xyla16bqBqqp49NSWPMccmFj326aciyNdaZVi3GYnznGrnBB5MgYPYh+Bkcc81gLMBcMYBDEstlIMOIloljHPpvPbg4OAESNFH1XHP9RPdfBgcTsymnyO1q2HHsUnbqsuwGXzCtonrx258Kka51MpPzaBOjRBPqRUNNO1NBbFOqq9f1t99Tzbm5uRCBBzbtrvKBPSDBzKJGx1ns+JMit3p7QzNnDA43RbV9LWaSQqkmRnhs9otjgNIZqUcFBZNVRZhOuIE+VUZdssq9MkGmLONsOEi3PkYVIvzcIFRu9Mpr9LsJ5MY2BLgTiDZccWwMDiciEetVp0Ka+28AgVhdFvEPLOIeJfxeZNe68YnYFK59diY1eWq1wTHJDjvvSe7V6/KBIw9wSELNHOi4ETBaMckbZPCILXzZG2NtHpsgpCdhpkTmjGvvySF61E7oIXmwrhIgrRCkFhhhHczDl+oe7AW+YIFMajV5ne/K4cAh7WmMXorxDY0yJ3UKilb179rdeMaOWf0DZETkXTci0UcyHiHE7WjYTeFtqiwnEuBhMUSpKc43wCzvI8+ksbenji4ro50YQMJ79HiokwDHO3KyUBtkLt9v6gdUJRDMykJJDvOKLPGTHAYjVqR2spZSrNR76AF6cOiZ2GTVrHwbdzrCN7NRpi9987b4iHOuQxwRoaHldehDYtuVNJ72klpRRgkrrFUKqk1h4v7LwGkwXGCcqaOPLt51fc0z9TCC+H8XPzlyUnJwRZswAjTLuTAoAmc8yFlO3uT9NJVUhIatVWUQYOkKqPYrPB4O5pCEEkKHdbzswLSDpxw/MHzbBBx9+G+h4iPqH6qdBJSqbOoVdLrwuFryCQSgrmlDktaAOmBbvDCk3aff88XwrtRPwrFJ7YMJShwq4iWUHTv5uXwbmXQqREZrO1ky0jDKPtUK+0h/h5/VnAWQHUocJoysH7n8LQsi4Ys2sMSAxIFsvjqO1C5trOzc0AEeUH4Zq+qfd1XgZOKe2d9415/1hhAoyrApg5crMa1a9eG8Nv30DNNGYxXvuCz/EXQWf5ApduxITaROSUw6H/m5uauG0tLS/QUBVjx9wHWN/Bj5iyCxNmCf+Rf+nRy/d1uMo5IBb17wORTpFgvpNd6rdd6rdd6rdd6rdd6rdd67VVk1iJpvwdD2/Y3KCi7oYpET4YAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDQ6MDU6NDMrMDA6MDBoqSR8AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA0OjA1OjQzKzAwOjAwGfScwAAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiLoveLetter.displayName = 'EmojiLoveLetter'
EmojiLoveLetter.defaultProps = {}

export default EmojiLoveLetter