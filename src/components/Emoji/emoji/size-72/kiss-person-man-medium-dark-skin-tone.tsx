import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonManMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFisO7HFh2gAAAAZiS0dEAP8A/wD/oL2nkwAAHUFJREFUeNrtm3mwZddV3n97OOeOb+5+PanbaqkttSzJlgSe5FEOJtjGmAyuBLvKTkiIKcquYEglIdgJFJVQqQQSghMciAN2UUC5AgWJbAdLniWPwpIsS91Cc6sHdffrftMdzrD3WvnjnDu81y3ZGoxcFU7Vqdv3vvfOPefb31rrW99ebfgeHJ943S/S07496PZfMu9mX5ba9CWJTRbFaAyxOCXIV9fs4M4b5G1r75Sf4A9uvf2i13nFvhm+8oYn+MLj/2V+t9/xA03XfHli/O6o4rIwOJ/H/K6+Dr5xXE4db5u2vPmL//Y5fxbzXF7s5tf+K17Tfjnfzu/fu9Mv/sOFztLbu3t3HvJ7Zlumm1pE0bU8hJMb69n59W9sZJv//cTGmU+1fTO/7gs/veVan3vjf2RA3jzAzrcstRZ+anZ5x0vTvfNzZq7hsCCbuZQn1weDU+ceWu+v/dHZsPKxa2defPKL5z7PW77877//AHrZP76C2478Ot9qPnTDTr/4azv27Xtt6w2HrHnRDmh6sBYSA1ZhLUNvO8Xw9kc3Tp87/V/vtcd+daGY2Xz1Z99H422XcGvvn3Oa9ZnDft8v7F3a897ZV10+4169B+aaEA2UClEgK9F7V+h/9oG4cvLEl1aKlfcvJIt3nciP87ov/evvL4CO/NDvMCS/btHOfWTHpZfc0Hnri6DTgvUAAbAGnIWmg8UEFh3cdZrenx0pHj3z2G98ee7Yr+wetDdtDquNbObabO8vHdhz4L0Lf/ea1FyzDCsRzhWQhQocEXAGZj3aG7L5iXtZeezxr6+U536qZZvfevHn3vecPJd7Li7y1Tf8OpvaW1o08785251/Xfc1l2ONh5WsehCj1VIYIChsBFgXuGKedE/XpQ8NfjBZLdM7Fk/dfibt++s29/3ipcsH/unST1zXMId2wkNDOJ9DiKACMUIMkJewOsSIYmZS4vHePkI8sFKc/fP3XPojw48cu/X5B+hLb/oANwxey8Cff3fXzby3tTznmvNtTB6qFUYnpzEVk7ytgFoT2N+lubPrm48Mr188b2RPNvuqg4uX/Pzy269v2Ut3wCNDKCJYQGMFUggQyvo1wMYQHWQU6xkM40FEH7u8cflf/PC+K/nYsS88q+fzzxagZjHDnY3P71wyy+921icxK4nnNrE7Zir4o4NgwXtIpHqfJNX7KPBYAfuWWPxbN3Ran5n9QNRoOm88lNo9S/BozUAUyhqM0WsNlIaA5CXZao+QFxjrkoZtvOPbg29/vGs7q8/2+Z41QD4kGMw13vmrFKXMCoqswOUFFgXnwDuIdWL1HoJAEqt/Ow8rAbO8QPsd1zcwgDo4U4DUoRQuBEfLgIRAKAPlsGAwyMiKElXBGHtN6pPDHveVZ/t89lnHqFqcuisMZjZqJIZIyApiVqBZAdvPYV6d/Qx6Q+gPIM9grYAesAmsFpAXMMiq3xtkMKj/blggw5xYL0QxzMkGGcNexrAsKDSgsGDEXGvE8tnXfPD5ZZBVi6rOqKoRVYiRclgSBgVGFOc9xgl4qZjkRqetSv+ouo3eQxVWMU5OiRAFDRGJoVqEECjLQJmXZJsZWS+jjAErglMxiNm3S3ez6lafX4BQxaiCCioRiZbQLyhbOSYqJhGc9zVAAi5WAFkDxlYcNqYWHFNJXeuzBkckIlEIsQInlJGyKCmGBdn6kGJYEDTitJIAKpLu3biGo4tHnl+ARCJCjCIRKwJWiIOSsJHjIthUMF6wSQ2Ss2DjpKKZWiOZkSTbCpDWwESJhDFAkVCUlHlJ3i/INzPKUBIkYkQwEggaN77ZuYXnPUkrATHxFBIKFZ8iFg2R0CtwYrANxaWKJorxMmHPCBTDBKxRRpywABEhSCSIEKNUoRUiZV6xJ+8XlHlJlFgtlghIyMXEhzI35G/c9ivPM0AawMR7JIYVZ+NeFYsaQYuIaImWoKlCCiQKXreBMwWQmwCkIkisgAnTryFSloEiKymygrIIBAkEqXOVCFHCqaDhTvvsaxC+awylqjl8cF+72UgXnPMz1pom4IwxoKqqlFGlH0JcHwyGawtz3XDbtx+srtApCD57hI3W143EH5doURMx4jGlgEQ0GAimAsnpJDmPAaISlVMM0lgBFCUSYySKEGMFTlkEQlESQqh+LhGRgJGIiULQ8ms9PzjW1ub4QX/gissYZJnttlvz1jAHdIwxDUbBbRAwpTGmbwzrxpg1jEbzwy998fvSNLk6TZND3vtd3vsFY0zHYJIRPiKahRg3Qghni6I4kRfF0aIMd5Uh3DnM8sd+f/Gny7Rp/34SO78bbNL0PqXlmzRcSmo8iXU45zDe15XsIgDZ+jRasSAKIQZCjJRRKCVSxkBZRsoYKWKg1EgpJUUskRjwIjQkDDPN3pVI8r/+RfxIO4q9TJWrnHXXWGMPWWcPWut2WGvmDKYFagFENYpILqLrMcpKlPiIiN5n3vP2H5VWs2mSNMF7j7W2LihmKowUVa1XsCTLcjZ7vXKz1zs2HGa3DfLsj9/WuvYv/557zW8rjdeKdTSTJi3XILUJifU448C6mj22YoypWTMCyACmyj8SY5VrYqCQCpRS6lMjhUSKGpwgASTQEiXI8Ov/I97yiw/KmcOpS34kSfx1aZLuajYbPk0TvKsWy1q7LVVUzyh1KOd5QZYX+J07d3zHjt4YgzEGay1JmtDptFlYmE+Kori81+tdvra2/vbPbDz4NSn8uXckry6t2oQYMUYwppYBowoulTQgTrHHaM2guoLFiQ7SUcKeeoCoMg4t1SrvJKqoFPxJ/NqB4379ozs7S7s77ZZN06RibxUO44VX1eqzixwp0G61nmGS1uo5jTE0Gg2SJKHb6bTnZmdu+ub5E8WLs2PuFVxJJhGVCUioTjksNXuUyedRJwiKTOkrrcERZHTWFUvrpGwl0sZw1D/BydnN3XvbyyRJUt9rxXwzcnbMk5OgejC2APesq5gxBp8kzMzM4NMk/er6Ma7ZPEBX22iMYGXScFqt2EJ9M0yLw60yyNQfmRpEVZmANAWOEaGFobQZd3WP41KHilIURY199X3TZLkYWCNQpl+NMc+Bkq4v5rynSZPVhZKv6KO8tXctQRWNAYyvtI3qBAuzDZzxw2wVixUwNYtqbaQqmPpMVOkaw+fcwzwUT2OyyUOOyGnY+p0XfW8uBMcag1fVJ20hdNv7iyBzAVDWGu7oHuOKYhdXl3uJUpV6sFUCVt3KmGm/aASSTilptrJHtVLLiOBEmDOOh81JvhCPMsyycZHRC0CfsMZcxFg1o8jHTOVcgw9lCcaMxcD0jetUjtCLgWQmq6GqlW4JkQ0ybm7dze64wE7poDFgcBVAxKrEXwyg7eDohEVSs8dIlZusCm3jKMyA/x2+yRndwBt7QeK9gAAXAGQuWHNT50hrDT4v8i2ojVkxTo568S+6gHBal+ZACIEH9CR/6u7gXbyOppiKRcZOJWlbf9fourK1B1OdJOUapFFYWRVSDF1r+MPibu4tTmCMQa1uIbXWSRq9oM5wwYdT2WlEFmsNvsjyCQmN2ZIadATMCKyLlbNtGmJa9d7GES4xS7zJ3YCJoQ61C0NzK4MExsm4Kula5y8jihXBqjJvPV+M93Fz/26GWpImHju1iDq9yGyvA7o19XFhrjIYjDX4/mCwVe9si9XJF40uPMWqMU4VOFUi1fH7TIQ/5svsdPO81F42AYi671JzYYgxYU4chZZW1cqo4BRmbMJfxsf5w+zrDOKQVAN5tAgOax3OmelUPOGMfkcFM+GRUYyCHwwGOOsmoIxAmopVBVR0vKpSV6PtYafbwFNVzrLO/5RbmE3expV2V2W8Sw3GWM1qva7VAghC0IjoRAhW4Agt6zjHKr/d/wJPsE4jSbhuzwwzTc+J1SFnNnM2CyEPiowkep1PbJ1GDDypSASwdaoRVfy5tU1ajRTvHbYubduTtmjVG8U4qiSjHFEbZsbgnMVgJvSdEq6PyRk+Ip/m5xs/zi7t1EzS8aaKogiKVr0fUZWgsWJQHXJWlNQ4MjPgw5uf5Uh5itR51BiCwsHlGS5d7lJGYVAENoeB1X7B+rCkn0cGRSQPkTIqQSCIVgs9FVwja8p6Q8NbmonBHD6wV+e7bTqtRtWn2EklqEqsVvaMjpgzyUUqShSpBJWv/3YqWKbVs6Lc6K/iZ9tvYT6mCArGocYQUeIYIBCEUiNR63ZCIgkgtuDDvc/wicHd1aJYi7GGy+cdr75iR1Uc68WdPEN1zSBKGaU23YQQq3sX0XFn4IzBOUPiLIm3eGfxvcGQvAzM5i26rQaJd1hrtpQ/Vd3CjFF8qypRRg0WVRWxk59NEmF1E18M32bBduPPtH4IU4oLGlFjCQZiff3qgWTCHhESoO3d4OP53ac/Nbjn4OiBRouXh5rVxmBU0dEyTekZ56CZuKe1lywK9qodLWa8stnvc3Ztk7XegEFWUJQlIVZejNRJevxaO30KRIkM8oIQpa5edZ6q2TVepfr9zb2vr98Tj33OOZurCrmUVVcuJYUEgoY6/1ShlRhoORsKX374Yxu3/d+gcWrRIIqg6KQCb9WEW0TuiE3f7WkAe/3+eV55YI5rl1sspkqeDTm/3uP8Rp/NQcYwLynKQIxxIvlVa7AUay15ERhk+VZA6psSHQFVfdaPefM/rd78W+r4qPdGDEKQsgonrQww0QgaSQy0nVPx8WNH9dS/Wy8HzbHCkNqaCJFmnT+/U3V6Ro7inqUOi7NNds+XbA5L1oYl5wcla1mkX+ZkBchISFqLtRbvXO2rGIyCs5bNYYb3jsRXecU7VzebEzDr5rN5f3HS2Hbng2GwvruJ+7EQAuU4txkskBhDyzmCC3+y5vMPvPLuX177gZlLu6MwF1Ushhgji52EkZsxZsx2wKbCfUuz+iS1f/SpT1NHmjg6rZSFWWFPiJRByMvIsAgMi0g/jwxDJCuFYSkMQyDLYYDFOk8j8RRFTm+Q0W03KctYJ307SegTmhurdv6Dj//umZ/b+WPv75i01SF94zAUxNoW8sbQ9AnBh0+v+eyflVk4dePiQZ+X4nVUHqmqaMMpu2YbiOhWXTKCe2q3RJ+s/XgqBtnaMLeA95Y0dXUM1spYtMondeYvQiQvI4M8sNIrON0P9KNlV9tzehDIipKN/pAowky7ue3WGLUQ6S3De/gF+/aHM+RnG+p+p6vJjVEEg8FZR2Hil9Z1+P52njz6d07+Gs3EkjOxLwCKEHjhYoPZZoKI1hZT9V3W2rqTmTLGVJ9W7BnAu9EqjyhYc1WptI3XaRU6+XeIwv4QGWSBjTzSz0r86R4n+iUxlKz1lEbqSZzbch+iqjHKphjofOqdnH/5f75vM/E/0xT7oaZJXm0wZORf3DDZzzTV37d4+0/zyhddSrNhtJ+T6ZTGsipctqNdh5eOeyyDISsCeRCKWIVbO3V0m35LnzyN13bhGKLQzyP+1ntP8aorlmmnvs7c1QXHbcTYqqwwHRSRL97/BCu9nKZ3zLVT9sw1WZ5vklhIzg7ZTCIPr2b0s5y5TntKOCoiEqPIudGNHOudZn93+e4zRe+nZl3rl50aMi3/zZztHH08nK1o7uGK/al+9b5yVbXKIEGE5Y5nRzedtEHAymbGncdWOXZ+wMYw1EyyeAuvO7zMDZcuXGjSbWFmJV2++sga95/cxAeRSf84MkW0VhKjdkMNI3VRJUhInCULkZUzm9z9+CqqygsW2rz0BYv0syab+Qrrw5xOo1Hd5Mj+FOmJ6OooX1x376/yhze+j/cdvu3orfe/9R8kAT569jPDN8//IK8/8hsANBLLH9yyKgf3po+NV1yV/fNNEj8x34sQ+cTdJ3jwdI/luRa7ZpssdptgDOd6OcMiThV/U1nBF7SqZjwe0G15zO/8o9foRcXTUySyEbuEKjetD0oeXdnknsdXecXBJZbaKfc8vsodxzdpd7u0G+m4hSjL8ICo/k2DeeSeRx7/rhLlj974Qk6t5BjDW6OYj1tjmg7hxhfMsH+pQzNxGFst4oOnN0m8Y898i3bD4+ykr7LG4KzZ9mjb2o2Rmq+rr9/qy07/ibk4aLVaxYKrE+rOWcfSTIOr984RglCWwv7FDsfXM87mJc0kqc1zIYo+Lqpn7NNQtDd/+QFuvHo/Bh7oZ5wRw4HEmVrx18GhirOGF+2bx1qzxcKpq1HV8uhTj2mOfm7rjsGOXTRz8T8Z/WwSgmBsba7V5teIUYl3eGexFjrNhEsX2niEMKWsVfV2A/2nU2oB2g1heT4e8y7eV9aNMzrt+Yw8Kd0iVJ+T4YWnutbFfjb5TJ90D80Zw1InZTYd0q+3XcoQe9ba20FJ3He/b/7+m67EYFrz3fRdeW9j3wP9DJeYus2Y2j0ybBMCT73/9V0BtEWBPokn/2R+vap5EpCqO0y8Zb7h2BhEUmvo2ngsGu4B5c6HTnzXNznIAxhzqB38B+abfl9RBhyWMk7aGr24G78tO+h3nHwOUjVi3pkJg74TwN/NAkyLwRB1bDy1E4fRksVmws5mGsqoQ2PgzqexilnVrUtWRG0nFpFIXgplqABClVMbOYUoh5a7F53pmPYn9Cmec2NYcvTkBlfumWGxk04AGpld3yl0ba2RpmPc1J+XIhw93cOIstypttxSb3AoM6lFEZeHaLx9emMp1WyQnh2WYaWduEucUYogFGFkyVpmm547j29wrldy+XKHhU5CI3EYU3X8RRAGRaTT8LQb/klTx0I7Yddck689fJ6ZRoIvo1JEYVhEmomj23jy0ek8CGuDQCu1pM5WJRQlL4XzvYIHTvcQEa7c2R5VLKwxNB2kVimDDEQI8en21wrDMqzlpT8x6911Mw3PmV4+/g4RpdNwvPzgAo+cG/CNR1ZRlMTVE8Qi5KXQbXpe+cKdtBv+KaPl8p0dlropj54d4D975CyKMt9KOLxnFvNUFAROb2Q8sZYRdSKfRJWms1wy32BnJ6EsI8NQKVIDLLcdRpUgetwYLZ5Jsvzkt08W73z5waMhylv2zKSUIeINhCDUUUbDG67ZO8MLl7usDiq7VVRpJI75dspCJyX1bsyescOwbU9QgbmW5yUHZvEvu2yBVuJoJnaLZWC2jb9U4WJ58SVzHN7dpV9EirLay2p6S9PbaicjD7WppoRY2bQNbwmiqHJ0Jm1mvTJ/mgRS3vmyg4jokayM7GgneBRrqp5pnKjVIFJ93975FpcstKutuJFXjqmr2vaNxYmqnoBXp5TFTkozsRetVtZefKcydbaK1dmU5ZkGndShWgEyMtSCaO37VrZEEM0U/Wb/aYID8Ad/cazKQ6oPl1HWR3dUBqGsnUwZm3kjK3jkcGpt1k1ZLnrhvv30Z9O/ZyXqlh3faS0zoeDWYYCR7pCR/Tol0ESqKhZiffMTw+wYcAfAJ+479fSnaSv5/1BUPTPSPkUUihAJUafKvY79cJky66YfXmpr2CeeRqeN844Q4nhvb9q9sJitO6YX2X7f8gVb93V1HE4jkKJUuwaT1R3vbn4G1ePPVLBFEcooT4Sod4yYWsaqOoVQMWW8SFP+uYputYpFybKSPC8x1pI0UsBUtvGwqIGezCb47eETQsR7N94nE616KFXGjd80RmNgYnWTI+YU9RlEAR4C89vWuvB/7j3xjADKi4ixphjG8PEo+mZRnQs1g8oQieIQtdgpe7eya6qZCWMq/7wsI+ubOWliset9hoOMsgj0BwVZEVnC0Gol48ENP9HnikSh1y+w1tBqJjhXXXCYlzRTT6uZjL2h0V7oJLRq9gSlKGPlPIbIQ+cGtDvde1927eEjK2vrwDMD6E/vPcmbr9oDyp9jeHdUfrgU/Sd5EF+Eyu1MRBFbVRo7vYmJYm2ViMsQOb02wBhDp5njbaXI1wcFZRDazYRWMxnPJPjpzsUYQ15Gjq/0wFTiT0TpND0v2DW7ZRt6ujEchdVoRfMQKYKwkQXWcmFpecY3Gg3rkvRZNY6fPHIKYPj6Q8t/hnJfNPojeRkvy0OswiwRnFRCVsYGndamm632x6whC8KJ832SWsuFWkguz7ZIvJ0KSbYMRGCsYX6mydJskzIK/TyQpo7dS12azWTMtGrivb6p0U5lEIpyBJCQh8j5YYl1Hudsq5/lKc9Ng13bpnpMRO/OgpAVFWNjqIWjjthc58Ig4yLkvePS5RmWZ5uIKsMiEEVZ6ja5bPcsrWZS5a+aBH7sqNQbb42GZ/+uWXYvdYGq4XTObjG+VaEsq+o1uokiCEUZycrK1O8Xkc0SvLOIyEwRQhPD+nMBkCp4Z3NR/UQZ4lsHZfB5GWmmDicC2HpsuQqpNK1aDhHBGsPCbJMXN3awMSjIy0jiLDPtlE6dQmRKEnidmtobKUrvq32vCxvfamvZO0sBFGXFomlwhvWQwPksErAk3gHMxygtnqPjcw+e4aZDywC3BtH7h0W8elgE2g1P4hWD1P+jSljrF6ytFDhbGWyX7Z6j20popI6dSWucYEY7ItMRpQpeResJEbO1c79IB18G5fjZjYoxZSS1lkZiKcqK5sMykJWRXhFZL5TEe1ppErw13Ril81yZWKPFOrU6OLZ3sfOnWRmv7ueBbjPSSBzW2HGFNQbObWYUoRqGycvIVfsX6TT9uOkekcSYLXNhiCg+xIjD1pPn5qLWhjGGEIX7HlvhvmPniLGyNw/vW8CQjMEZFpFhGVkvULVe5tstOzfT/pCIfkPRM88hOnzuwbPcdGhZVfX3yyh/u5eHq2byQCv1YyvWGEM79exb7NDLSoZFZK2Xc8+j57hkR4fFbpNG6rap6cn8QRTFl0Hqjf96jlnNZEDTQBRlc5DzwIlVHjy5ikjlBs60EhreMSwq1gyrENNczEZ7dv5r5TD//Ey7ddOO+bmPA1/5o1tu57k+VJXPP3T26BsOLf/WoAj/YW1YNFqpx7lqNKZqeYRdcy32LnYYZCUhSpUmbFWxvbOjpD8ZFBMdC1yfF6FuRMHWDDJTImttM+Ps+oBYRi6Zb9P0lrl2ijHQzwN51BqgQBHlHuPSf7m4sHB3o5mfTJz5bwaGfI+Ozz90lpsOLSOqv1dGuW59UP5kw+d4Z2g1fN0uwfnNHGOg20xYnGnWmqgiQoyRODWPOd5Vrl/NL7/1JdpMHWnq6iEos2WYcyS7QxD6g4Kzq30GWUkUpYhKUMhCpIj6cBR9jzXmVlF5Rv3WMz2qhK2XOWt/r5P61+yabbLQadBIq25g1LE362qmOqX+tuUdxm1KxSL3sgNLv6RTPf5ol1KVsQAsyiopV8NShkEeyaJSipJFoYx6NIq+99IFe8vqUP9KwQF49HyfQ0vdVVHuiqLXl1H2oeDqkUJrR+YeY+/oYueouY0ykgiCXx8WFMFRBKGRWNLE4b0db7BFmdY6kWEeKKUGJ4gGkTtE+LnDS3rbkXPCJ+87yfNxRMAZc2cUfU8/Dx+Koq8qgjDXTmk3PA1v8d5tM8ku6L3HvWWI1YSLu2Jn94NB1Fbdso6VZ6hLeV5EsiIwLAL9PLCZlfVApPRClI+p8nPtVO86uWH45JHnB5wRiw4stHHOPCGit0fRPUWUQ0UUN3IbGDkPU4k41r5VqEEZjf7088hmVuJeuKO7GqLOlVF2FkF8UYdUXmubQV4B06tfh2Xol1G+JKIfVOU3jeF0Vhg+df/zB84YpNUBsd1nyc+cE9VPi+pmEeVwHmR2vPBVSqiioiZEEavWKC9jNSGblWzUp7l+d4f9O+aWnTE3Wmte64x5iTVmvzHMGmOMqIqIborqY1H0LlH9rChfTb1dHRaBTx55gu/H46bLd1A5NPZ678xPOmt+zFu7J3HWJs7i68Z1Miao40nYMoqGqGcF/fw4Et901R5E1aTOzlprZi2k1EOjiuaibATRTUA/9VechJ/N8ZarlwFNnLUvKgKvF+F1BnOlNaZhTbXfKAJSjbAMFf1Lha8Z+IK13GP4/+R49yt2M9+2HDkZWzHSUdSaaQu5SvIxSejPL6TZ5mbJzd96gr8+/vr46+N7evw/3B4zxvKA79AAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjI6NDM6MDcrMDA6MDBKiIexAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIyOjQzOjA3KzAwOjAwO9U/DQAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

KissPersonManMediumDarkSkinTone.displayName = 'KissPersonManMediumDarkSkinTone'
KissPersonManMediumDarkSkinTone.defaultProps = {}

export default KissPersonManMediumDarkSkinTone
