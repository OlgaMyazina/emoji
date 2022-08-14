import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlagMonaco = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flag-monaco"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBBIXIYBU2wAAAAZiS0dEAP8A/wD/oL2nkwAADD1JREFUeNrtmn+IHVcVx8+9c9+8tz/ee5vd7KZJk6ZJIfVHQQtWUf8qoihiFUSwf5UKBpGK7T9FJERCBTUggopKBVH8RxT/UCgVpRWRqu0fggR/NK2NpuTnNrvp7r7fM/f6PXfmvp2ZN+9XNqarzA0nd959M3fO+dxzzp05+4iKVrSiFa1oRSta0YpWtKIVrWi3uon/dQN+ffLLpHxfdDY2SzoIfW20Z7QRWhtJRpMhYwxRgD6EuYHn+z0e+tg3vvr/A+jZE09YXU0QzsHQOQCoa633GQj6/egP6lAfMEav4DO+1yUAUvgswaILQg1ct2lIbMLi80KKl6X0/iU979/KU5ce+Nbp5h+/+X16z+eP735Avzv1NYIBotdozsLQvTDyDqz4myBvgTvcbSIge02oqxSGZUDzTRhK0wvIBAHpMISvhARQkYAOPIi0EGQkzPU8IuUFslRqQV7zlHcG8z0XNtvPdTY2/vb0Uz9bf//7HqCHn/llGtD3PvzxlKKfeern/3UYz5x8gjy/LMJGcwYGr2C1D8EqCwPHb8bxYch+Eep5GYaeDDWCBJECEYBBDMVKjzR6HaDHeBiDYkChNmQDLQZkGJBfIlkuk5ypkKiUqUdkuu3WRnez8Z3m9fWT/uxccPwPv7E6Kqfs5oVLPLlfnp//aKVe6/z4wU/9eaZeuxy0OsEnf/TdHYF4/oc/oHc+9DA9e+orUrc6FazwMoYPh432sWCr9VYRwTiCxLEPFlVlEEoAIfTkwVjunQj2EOctPUAAHAZCgMPjxMdhYL0I0JGGtM1CDhIBklQABDCqUiEPkABObLZb9Xa7cyjotOGNYV/3PqBuo0lBu+MJKR9UlfKHgm7nZYy94JVKL/z00597BfF6HvKa9GTLU6WeX6sGH/jSF8zvv/5trEKFygsL1Hj1VdFeW2eXx13NPKZdgkr71v7y0r5fPfbFgxg7CBhHIXcByDKA1LzYM7wUjG0oIoZCVthgY72DYjH9Y4YWxmDiMLPnh/YaBqVtsMFdZIdEu0OmjL7Z4pAG3y61dWCTeojrBgA119Yp6HZN2Osa6vYqFW3uMfXgHj1TeUiUVJOUum6kd0F78kooO1tBo7H1i88+toH16JGksiBRxuxl3L4GKLcJQyuQRdxvVhhdEdqUAIQ8hhGGEZD42MIIB2EAIqaDUToyzB4bztaRZ/BnYcficZvJWUQk/RxibC+j06J5deSJNjd5MgrHOF+JGGTag0CQv243m+QHiPUelN9qkzdb8cj3qywAdUgoxUkOqyBxR2ldVsRqRAoakjoSj48Zgv2s+8JgkFfsMUNjGGx0CgY5a+LdRCQz5rbxYuAf5YpJ7UqiP0dquzKD6aEPSJuYM+vISW9jE9QQz75PyPZWAIgYkAQgAeoSgASLkNYAGa+idJBMJMIeR/AcRGHy91IhBsfFwGZr7JiM1zoFQ2Rhbo8bk/gcH2RnFpkxNSyx2pjtIEYBi6RnvQX5B2C8aKt0cHgcswoI96y0u4k1LNbYxOPscc4CBsvHIgFGDHnyEEM+Z+GkDBUJaCYNKe1NCSfKeJIa+UBkItdC2rI7gd0ROBHKyDAtIy8yIgo17u2zBnuU/SwsQHJ9MhSE2F5tSuaLCZ9mRSritr3NzWu2vcRZLVJemfaYYfdWox6x81Zp+3+xnRRjhShlbAxhIE/EYZgYz3rEyJZNKCKt4XaCFgmPNANhFEEb39Qk+mRvJ3JWXAyV4YnT7kAix3tG6W6ofw3lzJ+EIQaCaPpXBzXKc7IRKoZ8LzKu2s8nJjOevV5kHGDkQokspaH5apB1dK5JwaMU5LGAxFBQQ5KmyOwa2eM4H+TE6CDVoSDGGZ6/qIPnmkR0mtx7iCFhLnP8d+B2YogSSfsGAol3LpGzlea4TDpD3TiY8Y6YD2bURWpc9sn1HJF94BoOVAwgGHzIm3jnSizhdBhoSNJITGry76BGXShGeM/osEzH/2Qbwc1t4oavSu948kamFVPkCsqJ7XHgd1OTw9xXTLnSYoQQTfGcs2PXyXvyu/G7quluvlvWNZH5bf6I385tuSNIlDzicod9CY6LHdl3kpsK6I3iZOLSu4766H3K2PdCb6Zsi1+l+TkS1XnSXLrA9yFiI+RqfbNJPbx4B40mhXx8/XUyjVYMFJYoHb0f7giQuMUwXB2In5iVIg/Gq6VF8m+/jdTKXvIWFkgu1knuWSCxUAOYOTJcGSwpCm2ZNZIAXhT2Agq7HQo7XQrbHeqtX6fepasUQvTFy9Q7d5566E2jS/yHD/swaXJ2MeuSffeVtwBEFBomhmJLoVxagbElwCgduI3Kdx6i8uGDVtQywNSqOKdkX4K5GG+LXNA7iOvQUek1iB5Q49d2LssIrj9zuWZulrylPTRz7C7y4H2Kz9tq0Prfz1LruT9R+M9z1L5wgUoAT6+cSQOaf8fbiOZmSF+9RmptAxe2ImgWFsQzU7uSdQJX5tQ67smWS7hormBwaWWZynccoMrROwHkILxkP6m9S+RBFwFgufNqvS1cfXQeN0oR55nueh4DNG+hTrP33kMLi1Uyq9cQhg2rG/326TSgpU98xJYeRbdHNQBZbnTIe+kc9SD62jpcsBn9FYFvIDUvDc7nN3bTDwdb+7XfRUAF//WAC+NYuVK9Ds/YQ2WEycyRwxZGGV5SYs+Yn7Wh9IY01t2Wd431Ng95TCQiKKUV12glFFWLi1Q/coRqD3yQqNkmg8QWXFml4MJlCkHZwmq1idptmwk9hWTJVceyT6paJX9liXwY7i8vWSkt7qESvIVziVeJ3T31Rr6Lmun/NwiIlTbOHcPoTx+qNo+EuECzx45aspzwbdXQxGVUXONx+ZXDhsWWZxVJieO4Xu0qjtF7j4jmjt9ZRPIN96Y5hblpc6mJbmYriWycjqqJnme3WFuXFnHplT87Q+M/z7jKo0lVFW9V5JibAmtnGptMLL+RkWFMX27U0/KuVbTLW57SSRh5UEZB4u9EIqTHAd0VgJzSNzN3JMGNm3eU56lbEcfjVmsaOEmdRskwG6a1SU1rTF68Jz87Y5NGu15MuFtNsuLjvGCS0JskZ6nsyUJM+7Q8GNNJSDuJ/3GGTeJBeedn5xx2zE1OsjKTuuawFctb2VEKTpKAR4XUJEBGfT82xMZBGbZqznOSIZWXgMd9njS8J8k/eanAefEkiz7Zg+KQEJwmB2XHs0pOm2tGwZn0nLzdLntPNYr2JFtm1nPyEnMW3rCcNM6D8gC43yJy2SMrbly7X5lpPdFGM1GIDdsqs2GUF16jdrKdJuVkDYil1+tRt9u1PYsbT4JJLhb/2ELhhbzE74z2pztiZ89BeR6SF8t5bsoKyvj9axJAwzzDGe4gMJBOp5MrDo4DlATDRTIGUy6XaWZmhubm5qhSqfSvyVtMNU3yG5ec3Tx5YMbtRnyNW30G4CC0220rrVbL9kkY7rxe1Dq4tgNDQx01E7cS9OPKm4JOPryn5Pu+BVStVq0wuK2tLTsXA0yGYh8QK+YUZUWazaYlzaLiYtYwTxq1M/DKMCx306R3JEPEwWAQWcF3Guc1MNc6ZA2yCrmCOa5CLsXyGmQN0okBMShWYhb3rLLgeAF6HoUcg013AdRBeNAKegZHflzBZJ0GALGCuFBgUsGKs1GssHNDBsV0eSIm7kTGP6JyHpMF1f9BdyJcGIjzjKR3xB4S4pzXocNVnH8e87yIa/+B/iXIq5BrGG9irIvrglqtZk6dOjVRbjt+/LjVC/aUcP085jmAe90LMPdj7L34rgU7RC4ghgKDAyh/Bt7zrkajsbK6uqoYEMvs7KwFxZRZGBSLg5ME47zDJVOXQ5K5A8cG0sU4e8UFXHMO8iKuZxgvQy6yV8D1W/fdd585ceIEnT17lnbSnnzySXfIBNYff/zxddj2V4D+CT7fjnvOQJcg9YzmDk6ePEmbm5scm7Mw6AhOfDeMvh8Q3g7ZD++ZY1dkL8oD5FrqLw1Rouyh76JvQ9YhF6HAKwwCp78I4WMOl/V6vd599NFHaTe13BevRx55xHoLQJVh/DJAHeLYxfHdkDtwXIO31bmHKIjh6OSUA9mEXIVcgVzE+GX0q/HYGuR1wNgE3IAXZbe3id9MGRqfD8N4N1AApOIQFdEPJ4WJPYldlHeTHo+dPn1610MoWtGKVrSiFa1oRSta0YpWtKLtrvYf721FSsqWmMIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDQ6MTg6MTcrMDA6MDDgdlp7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA0OjE4OjE3KzAwOjAwkSvixwAAAABJRU5ErkJggg&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiFlagMonaco.displayName = 'EmojiFlagMonaco'
EmojiFlagMonaco.defaultProps = {}

export default EmojiFlagMonaco
