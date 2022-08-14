import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManRowingBoatDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-rowing-boat-dark-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAzcGpoyySwAAAAZiS0dEAP8A/wD/oL2nkwAAEUNJREFUeNrtWnmwXFWZ/33nnNt7v9dvf/22BJKQF5IAgRCgmAECZUBKFGTEDZfREVRGRhgtZywVZShcMgMy7igqUyIzoDAyymYhAWIWErKH7CR5e97W/V53377bOd/80f22JFRpFUES+1d13r333L73fMvv+853zn1ABRVUUEEFFVRQQQUVVFBBBRVUUMEpBXqzB3zpxw+hRYXocVNo3D8+1mICzYsbm/dl87nCl268CVRNf70G+uBXv475DfUNe1z7w04q+h5ErdleroB43n3obS0ddwRC5G++4fq/TgPdtvK7SFcl0y8O9N/DbfXXN3e2W1Yyilw+j+JrPYWFgbnlzo/c/ODagT7rxT9ujA/1DajFLU1j/aNZ/19v+uhfzEDqzRjkhRdX419++QTObG64aizQ1zdUJax4IoZ0tYWmCBDSMj7cXfjKjd+8d97hriMtfj43RwV+pDhn9rdWbdzy642vbMLS8849dQ0khECYCIooYNfnOm1jRSiLZs9g96EMVm3sxrZNu07PdHV90R4fp1RLOxrT7durY9Gezo5WCClO/RD76n3fR9gKz/Ux+Luz5ted0TMu8OL6fdj0whoM7N2FhGDMTTeia3DYnbf0wqcuuuLqO++67VObmRlEdGqHGDPjs9/+Fjpb0/Jg96j//cd3onfrFoihbgx29yMkLXTO7YAShIbammfmt7XddNdtnxras3/wL2ocADjh3P3NS2tB7Uvg+PElDz25+r7Hn9wwf/2vHkHflo1ICokFHa1YMncW2psbsXDJeUgkEi/3ifjQ8rM7MX9u4198FjvhBnp1x6v47l2fb92xdfu9he5DV16qMuods5I4rTEFu1hELGRBEeD7AcJKIF1bjbefNxeJWOwtMc2f8BCrCyvAipjLa4yzLJaBH47i5eU3IKkkejfvwPjW3TDGYGxsDBvWrs2FlBr89he/TM1NdXxKG+iBx55EVapa3vmVO865cxGWf6zZn/e4bsM99mwkUIeqiAU17yxYr/WgcGQY0lfoH83+4eDA4H8nIhHedWToLcEgeaJePDds0Lt726xE99aHNu/v+uBQqqnudwuuxkiO4WRccCaP6PaNCBdyYAZydr43ElJf6Gis3bO//61hnBPGoOHdO7GrcyHm3Pney2LV9Wc+P94sv7irCEtvQM2CJRg90I/Cvg1Q2T5UJWKoTSWRjEfDQohzlZKvpOvrx+fMqcfKnz916jHo4V8/hgsuuRS7L718xYH9e+9uSUWbDl6wAsPnL8fwli0Y2n8AF3mjWDDwKg47Gl5gYFkKlqVizHyJ1jxXStFVLPqDnR0tZueh3lPLQM11tbj0mutqsO2P9w2OZM9/eO8YNowDsfZZqD9nKUL9vUisfRYrkhLpmmpsH7Ph+wGkEFBKKiJazMxXBYFpY0b2rLkdI7Mbm4LLL5yPjbsOnfwGev8F50C47sIbQ8O3fWJhQ+LAnHOxvX8MA6teQD6Xx7tkHh/QQ3hu2EUvSWRYwg80HNeDYYaUAkqKaoAuAHCNMbxIKVn0PD2QClV5T//hFnzvh6tOzqUGM2PV7R+Dp8JXnde/5VG7rjHxudblGArHYff1wHl5NU4/sBmX1UYxt7Gu8J8Dtsl6nIyFQgiMRqANLCkRCYcQjYRgWQoEAjMyAK8iolcA3lNTm3zplhuWd1A4mgrXtT7P2g86l3/orZ+kN65Zi6p7fwb/0+8/LeTr6EtUjx4vDKU1rPoOXHt6A67kBF4ZM9jqyF/Faqqezw5k/snxvLNCliXDloTWGnm7iELRQchSCFshRKOhmnDIus4Yvs4YtgsFZ8fO3XsbWxtS6yMurYH2g5Oikh47sBd7maVrF88p+izXiHr4mqADRjg3hkvGDmJJbQJ/39k6fPN5nf/1cGvswXgk+ndCim94gX/IDwIjhIClFKSUCAKNnG1jNJtDrlAEiGGFVMx1/GXrd/YODnf13j00MljY/ezTJ8c0LwlI/fapKtt2FvQWHBQjClXkoaAFOsb7sYBzQCgCP5F6enDe0nVW+3xED/zmtYSIfTVn248EQXBFoPUiBrcIIaJE0IIo7weBmy/aZwrCwkg4DM8PcLAv89x9jz637R/efQV+8tjzJ4eB/EIBKBxqGBkZaRupqcIHlqUQaqzCoAuIw3EUnEZkHeNmGlufsNb/2l7w4NqJR4NPXnPltmQ8vu1wf78MjI4GOlCCyBzqy7nf/Py1s6XOrtzfNbrgyTUHOVdwHaXkhqWnz4KU8oQm6TfUQO7gANh1qkc9OxGaswRCCDRHBWY3RBC0dmI4ncTeHXutAkVnty67tepH595cuOnWVv32izbhh//3hYnXaAD5hx/4Dt6X/ga2ZD98tghy/16wxSUNydjPHM8/5PreGZaKrq5JJfCjR589iQxUtKELdjbX3DzYUJVsKBZcjGdtaMOIJCJomT8bjbPSwi4UP+f4uavDVmH/t7/84jMXLe15/oy5l2aqkxHzbz94Bp+9+ZN4/8e/hrof3HhZfTx/T3bcXjw65t+vog1fOjIwnmtqTMVrkolx1/dP/FJjyyN3znNd710gmYSKZcOxql8EQTC09N2f+bNf1qV8hNvmvGZFnTUgWlh0PNgFB0IIlJKvRDJVhVRDqpEZjSMb9162edO+99i2s8Pz9Batxzddff7ZW7ZtWHf4f+997yU10WBlPu90ZMb097ycf4dUg2Nbu7uB7u6xN20t5tj2O53xkbsBWIFKjYSj8UMdTck9fat/EgFBCSLh+UZs3X1YDI1kyPMCgg5ICKkCbaTWWrAxwmhDQX5IDA0cUkWmDiCFcDgEEMF1fTiOC9f1kHB9xBIRhCMh9HWPIJ93qgl0sZLyYiITaENDf3NWa1c6JWcNDWaau4ecvVa86iBC9E5LKfHw3TezkoqlVIakMCSEFiQ0CeFLITUEDMFoYj8wxgmIBKSQLIVllLSMENKwUAbCClzfBPX11bqhLulL9l1iX1MorsOJ2nw8fWbRPbJDKyMj+4RUtlsYr9Z6PJXXI99/rd/SUkkllBBSKjIsSNk2NVgeadJwfZ88rcnRLIzjUeD75PkBXE+TU3TJkLT8qEJ2xEC7ReRjUcQiYcQTUSSSUcSTUcTicbi5Alqa6yAEgQ0jCDw1qyWVvvjstnQmk8Nzm3rQO5w7vT0VWhkLK5JSQErJUgpIpSClYKUEKylYSmGkECwILIhYEhkhYAQJCClLzwnBJIhF+fd20Q24mDIJ1PsS7DMbDYY3rvf0D2x7YU8g4/9Dax+5d5Y3tO/xwHOWZEYHISSglIQkghAEWW5KSggiEAAiKjcBAgMgMBEIAiABsAGIIKWCUBaktEoKqfJRSkgVhuczim4AHfiwnSK0cZCIWcgMZyFJgSIJBEGA6qiAIoYxBsy69H4GAC6Pz+VlwdR56ZrAx6n2AQYzg9lg4qMAM8rXAIOhNftWdfoLqv7Kz/b0/OIzL7AxS+q6bcjRPDgagglJICQAS4CUgCk3SAILAgSBZek42YhAgkBCQEwexeQ1SJQ24YlgmGEMw/cDOI6PRHU1alJJdHcNoJDPob2lFiExDlgM4xv4ZWVKijDAPPO6rPzUfYDNxG/K/YZhmEv9pjQ+awNjGNowjGYYbWACAxmNdTXXV69Rh378UW2l0r/VTu4jSRY16b0ZkBAlBtAEgwBBJSMQEVgATARDgBEEIwBDgBbT+whcPudyvwagCdBg+MwIAg3XUoj87QJU1abQu/Mg7DW70RiyoLYPTJAEKHudTJkGZcUxoWjZ2GbatdYlpScbl4/aIDi6b9q5MYDRGqKmdk3rPz+wWVUvXAEYvVHbI+vt1qqrijELUc+UQqxsJAuAAkEyIAwg9KTkkwrwpAfLAqPsLUZJ4LISmhkBM3yt4YYsBO9YAtPRjJ4dB8DPbMe8IzZSUsLi8kqaJkKj5AQu2QcGJUMbAAFQUpCBgAANQgBGwIAPlM6JEHCprxSa08OufJwISMMQofDBR9KNniA2GPndl8dCkeRjqIn6dkMcWhvwtDfwZCuxgsuCTrBIC4ImIBCALwi+IHhUag5hRisSUGSGHQ8juH4ZgvNPQ8+WfVBPbUN6sIiYpSBlKbRZCbAUYCEAKUCSAFU6f90m6PitlDwnUwEmvrdR6d6EvmW9jIhGexIAxPlXfwh1y29FOJX+vYxYe932anhgGJ5umGn7I1T2Kk1tmDBKHjWMSYZMHANj4AUaLgNFKeAYhhOxwNcug7u4Fb3rXkX06e1oGHYQlgKKaFL2GSQlnow2nuZtnk4BHO9DCIN4+r7OBHv4mCcmQ1qIIkKhrlhbS6mSpnACyWtu6vLvv+Up05JY6EYULM9ASYnXG5pomlzHMK0cAtrAj4TgLGqHntcEjofBmQIoEkKxowYDq7aievV+VOV9KCVhUWkHb9I+VH7ZhHFw7JgTHTxdQZoSmHiqn6YrwkfHF0+FmVBZisd74+csKRkotvTDyP7w08ZK1j8RpLIf9eqi9V5PDkqUPHo8Js3cc+NjplLWBn66Ds6VZ0HPbSyFCBjQgOc4CMbyqDswiljOh1KlcSTK7CkbBWXmTOVqmlTi9eU51gr0OneP51wwg6UcDbW1Z1Q8UdoPWtgShdXciVDz4i0yFl+n25JwTWmm0czH0rAcY9PD+OiR3DNnofjBi2E606V6yTA4MPBsG4KAVLoeVW9bAhEPlyYAohmp4hjhmSZDi19HMcwkw1Esm/bkVFaeVhuVw5kZUOpIZNas8VhHx9SGWXjeFRh/4jM5Eat6nJuTvhcS8IxBwDPz0UzJaMo7E0lOCtgXL0DxPcuAxqoSEcpaCyEQjkURikYAIeCHS3WVoNLOHaFcRtDMsm+qHOQZ3GB+nZwzTcYZcvPRnOejHF/+G7K6Up/4lB2uqZky0KJFixA57+OgZMtzJhXbpZMKrtbwjJmcTmcMRtOPZeorifwVZ6P49rOBWAhkynwjAk2yToBIwLZtZDfuhix6EOUCkujYAJhKqdOS9PTSYiKkjwms6dX1cZLx0Ql+WqlC4Ujf7fU1evjl9TO3XGXHhWi69vZuN173H0Gq+tkgFN7hCjEUMDvGGF2qokoS0mQDiBnQjNzSObAv7SxNt6Zc7E9Me1wylJAC+UIBA6u3oWpzDywSpdl3KnCnhKfjRsTx88+E0aZbsVw1l+Q2pSWK1pimh2FmnwEHQuRIykGEI69RJLrnOgCytvbYrxprdh+ClUwK/6EH4mrH1upwPtcSC3RbTAdN0WKxUQrRpHyvVgBJMBIUBDEEfsyWItV3w7Lm0BltgoNgBq+Zp/JKNpPB4OqtaFp3GNVFU1rvlTfHJ1rJmzxVFE4vRMsrMQYZQ+XCFzCaWRuQ1kL4WpAXMBwNtgOpbG1ZxUDrQkBk61A4pwVl/ECPcjw+hlgs57ruuEgmc0aIrOu4Y9HOzv7MunWFhd9a+ad/9rmJGfcD+EmhIC/81aPKyowqK5ezYt1doUg2r7Y302K7LfTzltNnNUeiEZhJLwEkCIYNho8Mmv6Dvc83vzr2Qt1QUYGgpBBSSSEECRJsSDAAIjZgGK2N1lprhoZSPoT0jVN0SAeOJuEhHi/6luVyIuHpXK7IWrumptbRiXgxsIu2GRtzuCXt0WlzfBAFnKoJaq6/Xje1tel+gM/9E/456w35Lrbqp3cgnEhFB3Zv+BoHxX9s7miP1jbUQwoJptK03t/T5w73Df3SHs7cEe9o797RM4S7fvwsLgLwDoAuAlBV3m8dAvAqgAcB3jmjQn3z8YaN+vuvvw+xho5Ef9fB9wZO8ROJqvjiWDIZ0Vobx3G7PI/vL46M/UhYKvuBe57AyYI31C07n/kpzlxxA55eeWvas8cu0E6u1S4EdiRR+3LTnAW7i+NZveL276CCCiqooIIKKqigggoqqKCCCiqo4MTh/wFZR0jl9qUGsQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwMzo1NTowMCswMDowMNEvmgEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDM6NTU6MDArMDA6MDCgciK9AAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiManRowingBoatDarkSkinTone.displayName = 'EmojiManRowingBoatDarkSkinTone'
EmojiManRowingBoatDarkSkinTone.defaultProps = {}

export default EmojiManRowingBoatDarkSkinTone
