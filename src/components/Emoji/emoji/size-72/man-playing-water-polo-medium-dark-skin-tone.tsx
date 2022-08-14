import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManPlayingWaterPoloMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-playing-water-polo-medium-dark-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFwEgXg7KCgAAAAZiS0dEAP8A/wD/oL2nkwAAH75JREFUeNrtfHmcXVWZ7fr2PsM9996aU5kHEiAECAEkAQzKPKggtkqjrd2CbXeLCig2Nq2+9jVNo3Tra1vURp+ijaLQIE7gwCAgMhMhDAEykqGSVKWmO55x7+97f5x7KxVASSB08/y586tfVd06dc4963zDWuvbFeCP64/rlSx6qQN+cznwxk8D9QeX9rgd+x1ETlc/QApiIbaZwoxtEsnWACoJDrv9Dw4g5/f9MFp5MgDrh6cX3sQs54kNj4LyusjpJZAGkWsEMohs5OeAfFXsjieTdZ9C4YBv/uFHULTyRICzknI7L4LuvghOTy9UARAD2BDQZZAOIKYOSbdD0m1PAfoSp/PoX9hwlRSW/OwPF6AHv11Cfayplhx+wMdSLl7mleYUO3sXwPF7ISoARCDZICAMkAeYMXC8EZINryXoc0H6/mDpI3+4ANXv3x/GpMuYOn8Q2465bjAVYTNE7/RDEHTMAsiBsIGk2wFbB8CQdAc4WgcxzZvHxmvvE0Fl7hmjL3rRW299BlOnlun661cG/f0dQUdHwEki4QUXHJUAIYhKr12Amvd0QJm6Mu7sLzRN50WdvQuh3E7U6+MQFBF0zYVfmg6wATiGpNvB2RiIY5hoM8La1gYh+/Ms45/MfEttl3O/9a1X4cgjZxYefnhwWa3Gbw5DWeK6/hTP86zWenvB1ytm9zdv+cg7K08/+VyZ3/vRv3ntAVS/uwStZHojLtziFGcfUeqaiyS10F4vdGEqmtWtCDr3geMGEI4B24AJNwFmHHE4gqg+iGJBrnyusfSiqYUNPOe0jRAReN4H8a53vW7e2rW1i2s1Phtw+guFAhWLBfi+C0DBGLCwWd/V5X3hjLcu/M7WgWp82T+f/D8KkH7+Cx97l4so4QVRqs7r7Ch1ELnI0hCu3wWlHWjtIWlsgaM1YOvgbAw2GUO9sg1KQhT9FM2kI5LSO35q1ezoy9c8jEcf9bFs2fQ5K1Zs/2qtlr1XKVUOApe6uwOUyx6CwEW57KBUdkhp1Vet2eOf21jXiw7sf2Tx4j/LHnzgO6+dNr91WKAIfqloPMVVmFTDZArEdUhqoZWPNBqDTUbgaAEkAUmCzhJBcYYoMti4mZZsWPPA66xO77j441fi/R9Y6rznPdddUK/jdM8rEpGC7xfgeYLpMzzM6Y9RpkFIOg5rMiS22DGe9HyiXkH13/7P2Vf+yRlP2ONOXPLaAGjHuEApRLNcTrK0DiMWVkqQbASkA0SJBdsInR1dAKcAC8REgKkiSWKMVhlbttnerdvqR3zzh/ffccxZy/HZz/584ejo2FnWBpRlAq0FQAFLDiLsW1oBjK4Ch1UIMxiEEgidTlB05dAL7ry1+67q6I6VIgIi+p8H6NlNAmbs6Cpha71pZmWmAc83QGYhxsfYcIquzgBIm3kN4hBsIoRRhu0jgnoI1CoK9UZWXJ8A67/3DRx99FteH4bVOUqlEMkgYCw+cCr2d+/F+LNPoh5ZCBHKBQcdgQcFwEZ1VDY8Nn/r1Klnvu+jn1q5fkHxfySC1PNf+Nl9Bh//92TEMu4aqwFjNUYYRoibIwjrg6jXxuDKEEy0DUlzB8bHaxgYSrFhq2C4IsgyB2OjxbAQFJ/+izcshcgQNRrhIVbguIUpYGF0dAAHzxhGc8uzqDQNRusxKs0Uo7UYxjJEBI3YYOOW7Xjqvl9NlTXX6YdvveW1kWK3P2Sx4pqAAVzXjPCORiT7p5kAIBjDGKsJNGXIDJBZgQjBWKAZCTKjMD7Shep44ddHLvJv6+wM8I//+9/cKKZZhdJM+KWpUNyBubNSUGUtms0YfT1dOPyEZahHNdS2bAKadRgW+K6DRfvNNYmVx6688r/shqfXvDYiCAAcBzhgPj3hOvgXAJWRal68B0cFzRBoREBiAGuBKBFU6oIkAzZu7MKjKzqzouf+13d/unE8WHYOpvT1ulDFDsftgyKANNDfGyCujsBYxiEnvg39Bx+G21Y8jq1xDK9YBFuLWQcdisL+i9TjI9WOYN4M/PCJLa8dsXrYeyOsuj6Q3k5ca5kCEflkGGNmGOeRIgIIBJYBEUArhZGREu57SMOVdNXC6aXfHHN4CTNmzkYUZQRhN2xuguPMB6kAfkHBJAIiBdgM3KyiT0WY1TcVOkygFCEoeOjWKaYV2cj4FkzpLmHLSP21o+YPfneE1TcGyZxp+FpmaJXn4oNxgjdujGVKauCKaGSZQ3HoYcvWAlavVcgSVTtgfvmK866JN/BXLL64ZjMIEOY0E24iCreB2UUj7EXTClwWPHrbD9HR3Y2Dp06HVBuI0gRECgNPPQrHK+CAnh5KByr44JuX4bwv3/yC9ykbjgUXXaz7Wb9XzurGUYan/c2t/z12xwF/GgGAGbu9dJcVeSiMschxaJGGM+O+B/rOeXa9HBKFhEbIsMKYP7Pz5ncf03/LKYsjqPPvw4UXDuJLX7ow+vZ373lurNKAtSHSpIZaXZAUgCwxcLRGbXQUjib4voNaM8XgeIhywUVfp1HiFjoxuBZKHfqi7/E//jGCVlF/La79Q9nDPR86peeHv/2n4/iIz/z61atBz1+9pzTRf2oYzjszfPS+Xx36/ScfWHLTiscdNTBoUKlnyKxFZ9nfcNA+3f/+pTsqzSP2zVvycccdBqLjecqU8h2u29FM0yaytIHh0QrE60AzTpEaC8MCK4AxgoLroKfsw3M0mCXLMrNVT5uPLduGd40cEYgIPnzN9TR1v4PMusHmnKc2Vr74H3fUPvvEkHt87erT6Bd/f+KrG0HPX9eevxzv/fIpdNGbbjy7GScHaAUAAkWKp/cE3/qbr1/y259+4gr45+TO4jvfeRI+cv7nMH1az+0DWzZfNzCw4/0mS/WOHR3gRT2IMkaUGCgiEIA4tdgwFmK4EYOYsd/U7mTalML2yDC+fNvKnXrxitn4/oXHwVU8b1sFF5OwLJnfvfKhVduPWrF6xyU95erbJe29vjPAj//u7Sc8dtbiEEde9tCrC9ANFy3A2V9s4Il1152+fSS90FVwHMdBYiy6OosrD1nQfd2Xzr1cPnbNg7v83le+/Pc4/oS/ri193YJPug78rg7+i31mdaNzSoCx54oYa0RQiqCVC0cR5nYHmN7pQ1jguP72FGqDPE9Te45C7PRAFGcDY9u5UWucqkimlwquNzjWRJiYhdbKZ/q7g+VHzuZzHt9K217VFBvauAb/9xsbcOlZ3vLhqvlXlzAr8BxYERQDf3S/ef2fO+er9254x9GdL7QLiPDru7+Jow7rHTn/gyd97piFvCLZdDe2PL0C5akzMdxMMFJPEKYGzIKy72BquYAp5QBeIVileqdvdbp6dzmnf/Fm/OW//RjelKnb3vGet//tvP33eQsrfWUjShLf1cgsY/NIHeu2VU9csy3++PIDu/w7P338qwOQDHi44PSP4tQ/WX744HDjS1pwYOBqGMvQWmXz5s34ykfOPvQnv7rszZj7odt+53nOP+dkfPjC856ZKkMXqixeP7R5M0SAYt9UDFZDDIw2MFyLUW0mqDQSVDKKpVi+ZfiJFWHfoiUvCvzZn7way//s02aOXffcx04uXNbdWfoSi7BWecTVokRtHm7+1R0rx972DzeOY+ALy/ZuiokILn/bvjh5+eiBq5+rX0nWLvVdjWZiQESY0lP65eEH9n3lB79clf311+75/ReafgSaX3sjih889KHzjh++uT5Y/9i259ZjnwMXo1QsYnjbAGpjTfieh46urqi7VPha75TSTW5wIM7/xOW7nOv7Fx4D7bqlsYbzJ2GU7Dts0tVP13ufDPwtWWbZikARABZgRyXsKrj6rz59Zs9td601lb0GkAhw1YfegfkHLp717Jqhz2cZv8HVCmFqYJjRUSpsmT+j9C/3Prx15Mylu1fKVtMifHjmd/gNR+z7W3e4YUTEKXd1oaOnB7P2XwQQYfC5dZjaV7r9yIOmXbp9LKn+3Rd/9ILzPPFcA71dxYNXb9x2Ra0RzSClspVrh8dSw13GijtZ9FsjGKnHR6wZCJeMNuw9ey3Frjn/WPSXq93rV2+8tFmtvVkrILUWibHQjrbTppSuvujS+Q+8fbmHk/559zqEN/4M9p01BUVKko6Cyx4xamPDGBvaDptE6O7tg+8ohFs3mumuNT3x4IuepyMQwOFV/V3y/n3mTX1fuavzi9UwS6vNuCQi4NZHm/HHiekdbZgT/unmJ/DQp5a+8gj6+cWvwz79TecnK3B+rWn/XJGojIE4s8isYGpP8e4DFvR84+ufH+Tzrnpgty82YHpx/4oHsPhdR8zqKxuXAITbN4FLPbA9fagMD6K7uxNIRk55ZOVznyXi+7/4niM1W/aZhUUgvq+lWPQzP/CbMzo7t3WU/VUHL33dD79x/T0/3rxp4JPNZnSqMbZIkx5/ZhmVZvammz523NfGG87QK55q/O2bjsD8fjpt02D03Swz/a5WSC0jTg3Icar7ze681uNotVfqGncd9UxXmZ/bd0FXzXo9VKtUgnrd9kWNZEqWGa21HovCbGS8kjSZpSiCfQR8RZLyqYT8CXOxC41mDL/cgUBS6KQBrRUTwYjkka4UiesouK6GUkqIYAnUBGFIgN8WisX/9Pqmr3r00afeUG0kJzfC9OhavblEAK1A6O8sNA87aPb7Hr79gR9+/pffxMyDz3l5AP3g/KXwXdX18Nr42h3j4RmeVigXXJQCF0QEY9n4rmbP065WyihNo4CstYyNVsh1FPd7rjOHQD2AEBHVRWSrMTyUpKY/M7xAWGaAoFs3nxc8AJYZBEL7Za0VHE1wtMq/dhSUUiDKu5iIQFhgLCPNeJSB73T39f77X331l5uvuuTcfe759f1fqFbr7yQilH0Hi/aZ9oO3nHr0+0dGKo0zPnPtyzPtj1wwE4lRSzYNNv4uTLKS52p0BC6KBReuo+B5Wrmu0p6ryXW1VorKmeF5zTA9NAzTxcbwAhLpI6ISAUUBegiYS4SDiGgeAZ1EpIgISuU32rZSiRRAgFIKvqcR+A58z4GjFZQioHVsuwiL5KAmqUUzSouNMD2qWQ9fv/IX39144VW3PHby0gOfrVRqJ7NwHwug2M7JkuTZH33nZ6u+f9M38PXv/XTPAXrXG/ZFV4ent46nR1eayXxrmawVZJkFc/uJA8y5FmIRZBkjSjJEqYUxuSPY5ipEmCiWQH6DjkNwHQ3PdeC5edq4robjKHiuhu858D0NrVUuQ6gFTuvyzIC1jCyzaEYGlXqM8UaCRmQozcwca/jYdx69oHLmGQfcf/+KLftlmVkKAiyLr0hmn/y25bdtfurp2k8fXrPnAP3kkQBnvMmpnX3WgvujRp3qUTanFiblepxRGBtEqUGSGaSZRZxaJIlBkhpEqUUtTBFlBtbmoBAA1XrcIpgATimCUmrS5zyFtKYclNbrbWDaIcMisFZgjEWcGtSbKYYqEYbrMWpxBgAIPAe+Vt0icuLI9uoBRqRvtBofgHz+CyUyw4FUzj9p+b2LOwK5ceX6PQPo0ktHMS7r8fgtl40ffuT8OzlT9yjlNlJGTyNKOxtxqhuxQZgaJJlFkjFSw4hTi3qSoZkYpMaCOVdQuc5qpQVhIiLa0TWRXnnI7fL1JGx2ppRlGJtfb6gSYrAaoZFkYBEEnoPOwEPgO9CK/Cg2i8dr8cJqlFIr8CEiqqBowaZa7d7henXbrau27nmbJyq0vnomffa2/3xo2j5zfvuLa7/3ldWr1y7fvmP0pHojOrKeZPNrcRZoygEQAKlhGGYkRuUWBueJBQEKvgOt6UXZeh4pOTDtRCKiVlq++EpSi0qY5hpOcvBSw0iMRZEdiADGMhGE2mkOAFFmMVIL9+keq593+tlnfeQnhx2WvO2TX3/5an7RqecCgBGRDT//wLQNiy/40A233XnvzM2DtSMGhyvHVurxkVFq97dWullE53gwogwA0omaBUL+ZDXtBAatKGkf87z+SjIZJJo4yLIgSg2izDKLWIBcFkGYGow18p8XPSf3wEHQSsFYnkjTSphiaKTy5od+c9+SRrX+yO+bue223TFxgm9dmgLY+ItzZ25cePZxP77uhpW9m4bqC5sJljdje0qSylFspdOAEWMnSIK8sAe+A8fRrahr+dJ4AQY7AUQbJGmZZIAxFs0kE9/Bj8pFdUstxGnG4uTU8pRqlCHKDHxHw3c1FGiiDrYvkVnGWC2aNrB1aNmvb3vgkWPe8rm9Y5gBAG+6d2crI9hPHYXhu7953vAJfzr3vosvefwbW4b5uChSf5sZOUaEFQsgSPMCywxjBYEv8FwNxyGwyIRhNjmKRHa+0OY7zILMMMLEIjF22C+Xv1CX8QcPmqluGAvVEbVYnR3Fcnqc8ZzUsBOmFq5WE82hDZEIkFrWYRjOuKsKbFnz9N4DKI/xFAh6CYVuQWMQx7/94xADzJsxVHlozaafLJrhPTVYwVVZJqcIGJJKTg0kD39jGQVPw/f0BMeZHOIi7YiVie9zcCyS1CCMM6RGNklBb4Cdg+OWbggf3NT5m+MWOA8++oj52uYhe0KS8buM5SMMSzC52Eset6CciBIABOUXwjC2fVM+AbM2bbFWb/cBmn8CUNsq0B7QswBm9lEAgPOu/kvwJUVc/ZXO9YsWxf/LGCxgkX2NBSLYiWLDLGB2Ya3AdXKGPEEFkKdRu6q2Og+YAWNzizZKDURkQ33HeOWWZxo4/3gPl167CQCyy84+cNVpr+95+qa7tt/YCM2JUcxnZ1aOFaFetGoN5SVDXM8ZPgTAjAVzf2eXd+qjO1wA2W7L/3lveMlj3vm6DP1TSyvCzc1rmPGPBCiWPD0SZeEoglK5VLCs4LIGUV5AcwLaSqtJnW4CoNQgswwiGlg/lKbvPtzFSf+8U3/+ww3PADdAPn/OgUO3/mb0umWHdN5cbZija00+I0r4eGtkfwKKIFQ9z1v1ljMOR9iIfneKsbUKe3nd9OgAzlwyiz1fX5/E9t0ADlKECbnAeQuGmUgtO6GtmF/Y3EVaJLFFHVgABWxbuqAElhd/+5+45hkAwB0bdjSuvuCQO+ZO8+66c0Vj5vC4WRbH9o2K1HbXLzysPYPlf/b5vVyDdmN19fpYeEjfugd+NXCjCD7T7qSa2r1pcp1RrRqxs+3LZCVNAAkgilpEEwmAgdzPkJd8Lx/48pMAYKXy91uo+4ott371jB+vWTWOznLKl3z7ob039tmT9d27N+CUbQ0h4CZHq3MFNG9yo1Ktm9UqlxgtfKBakTSZWggAxQI4gGsVdKYiq2QHCLAZ7763030FAOC0j9yy27+k8Couk2ZI4mS1CO6azEOI8nm+09ZeRFBaTdJnNKHNHEfBbVkdug0qISGimiLC9Y+9upsaXlWAksxg1vQpKRHuAZC1w6d9o22d5mgFR1HL+2n7P3l0qQlHQCYcBAHMTpqO/78Aao+ERQT3bqngt4+sB5E8IyKVnDS2mXkeTzsjJgdrMieS1r+cP7V4lAgMi7HMxlhGY/U1zyOCr0GA2t3FsFDGoMiwrqe2UEu461mWQGm1A0BFkCM00cZbDFkmDPZJHcvmrT3nTAwWzq9jBZaloljqt67YBNN7pBNniWYRmvxw2h//rbP5FwCzC1cBCUCW2TFWAsMcMBBUMyQz5s2tb1m7eQcc7A9q6aq2PmulzoSCb7FmFgHJC6VGPq2QMGWOZxKQedPKJqNSZLJYK8qIyCiCcZUyriZu8yn1MjeAvuwIyn7euimZqLskImQF2or4ViSwLKXUZKXp8w5KAIztqofa0YOJEU0bAG6BYVvft9NrYpQjCI0ge1wAOAEzELBIp2UpWZYOw1LOmP3MirYCymWKefUjqB2yrVrSfsAkLMiYncyKbxmBEe60LGUBfM2S7T9/Kj/uUGNyCjHnEWiZQUqDWn6u3RklOReSnb+zs8ahkkUmHWPrjo5HfYGLUsHRo65WDYG0WzhZEccaa9gaLhUK0hbGex2gdo0AAMOiDOe+j6OVFRGKDRcsS0nyKYZ1QGNaUz1j6bc2K0/fZ4EDSDKhrSallmUBWQYU7cKaMSE3aJeakt8kkqn9naxIcWIseVp1xsaWLcvWwNVDRVcnLEIsIIEi1/WI8+uKEYGzByDtVopJK4dMC4zUctmKaIeAyFgvtdxnRXxN1AwcVekK3KphCQxLPymVrFuzKcusOJPU58T0My+8uQ0yET28czLaPo4npVnPlF71oe/fffa6bZUjC44aLnvOMwRkGfO8KLMzmqktAoCriR2tWJHKdSpAJIDJG8reA6gd3nHGXmq5yzJ8ABaAWJbAsnQQkAWujp4dbpjxMAtiY48TEXdKOVh349XfyibqTrtAt2qOnfjgyTxnUleTXWuTCOr1+jA5ziyC/GtmcRYIHLh6jaNoCEC3Ye5KDBckD0ym1qhNREggqk3S7W50ObU7ncpRColllTGXWaREJKmntWUBGZaSYe43LL5SJI8NVpEx92QsCy2LdoB4/frBDOA7LMtzlsW2a4xlAVuZ3L5zH1smq3iBnfjMYAFq1fpQUHBvAdCTWj6jmdjZPQW3Fjh6s1Y0TYDpVsRPmbUCoHOAhFue1N7dHyQALvhPGBbNjBIAUkTJ4V/9FbdmTYXMyuzE2P0rYdp97uFzSBHFIghTyycP1OKFG0Wc8Ub6vSS1Z2ZGPmysXGVF7jSW1xrmUWNz0reL1TE5xVjYMDeMlQFmvjmLw1962ikRQAxMsyI9ADBYT0ICQgjmWxbfsPiZFZVY2UlFWg1mrxbpy9+6DBCotmtMIHnqgpMAQBQoZoGXMR/GAleQPdQdeOOxsbdGGV9QS8zla0Ybt/7XExvundbhrLv8ox946p5v30DzF87o8ILCFCJnmggdoIimETAdpPpEhIQhQgiNla0iMswsm5M02xTXa5u/9fBquyOK3idwuhWwQRGaAKTgaojAZZEygKJiyayS+DdrK3zCol6w5N4ICWybc72kwB3bvskHkPTOmPc7WbIiIDbshJntZ5Gyo9Rw2XOqjoJUE1OsxdlhseETBfB8re7uCdwHHEVmuJkuDjP750bkKBLb0JI86XD0sE/p452BP9DdPS9sE8TDAVQBWhZANTnveXWApwFygwgqzSq6Sh3ewPDgvs2UT8/IP4uVywXHubYncG/YXA1H5nUV+6zgr0WwTit6ytNqqOTpqquIY8OOFXgEiKspdRVZllwXvthqWa7+SwMkgkZiUfI0NVJTyqz0AwJH0XjB0fWCo3g0yrrqSXZCYvhkIhoquvrHvYG7pujqbEcz7Wuk5tDE2NdbNouJs6kKNtLEGxWwgcRsIk42KUhNO06WkS8pCi0KpEnYOkpRUSs9k61ZZmx2rAgVHMe/0/P8O0qe89S0kje6o5nONczvZ0GqFf3C02q7r9Vo2dOpYaHEcoEFniZKXU1JZoULroKmVwgQWuMaIiCxrKOMy4a5TwBHKxotOrpScJQMNpJZzcyeZqwsVYQRR9FjjlJrC47aUfZ101g49dT0JMbMMNbMZ7aLWGQxi8wgSF0RRaSUZSYrECaxCmBPSDsgxxWoAoRrCvxowdG3dwaFJ/qKfm08yryU+VhmnM4izzqKbvUdPew7KgwcZYbqKboDV6fWlgUgR6nYd1TCAvH07y5FewZQW88ASFlUnNkgY+kWwHWIKkVX162IqiXZ9Cjjgw3z4SyY3XI2xhXRNk20RSsacLUa9rSKRMSNjJ2SWZ4mggCEDAALGyFOrLKRwyJlcYoEHTSIdNVVGCl5zmhXwW3W4swJM7sfC84kQr8iuilw1CMdBTfSALcbjBGhJN+AVSaQcTU1C47Kfl967QJQdXibA8B09c/cLZmRMcNVipqZdTIrRYH4iijVRKmjyBoWJ8xsZ2p4eiY8SwS9IugD0EOEAIAhUAOEBgFxy9eJiVBXoCYRGkRoKFCiVJ4OCmRFhAyLnzLPsCwHAVgMYAYRPekq+lFv4G30NJk2F82sKCviWBbXihQAkKMo9LSKXZULG027ARALEwBRpPZIjxFdjNh8XqWWA8NSEhEPgGm9icTTyiaWlWHRmWUvy4/rsiLdIugToFdEuhnoEEEXIAEAH4DTns63mnMGgBWRB6AAoEighlJ43CW6P3D1M12BW1MtipMrF1GGxWURh0WclpWbeEolniZ+qejZBSBrDQEQrffM+WgDZVgoNuwbliJDPAJEk0q0olgTrKMUO2pCgk3wr8Swji3rzIpvmAssUmBBQUR8ARwBSszoZ5FZAukkkCVCUxNtdTRt9LUaKHvOeMFRhgViRUgEqqXzHIEoEQgBTETsKLKuogme+FKi9RUDNBkkAEitKMOsRKBlYu8UTa5jZEW0tGe/eXtnAthRZLUiUUTiqrauBKyICjP2MsseS87ZHIXM1SouONq0pA4JRAmgIESAMCjnagSwViSadh197M4fB7cBekWG2a7jYmFPa86DCmRZiCGKBUpaHlFmpZshvgg0IArSmvAQ2fw/AgErokQTRSqvaakmWM93Gk4r41paTWzOtinvHYQ8UsBEOdCKILSHoLwok1ZK7xXv9nlgidIkALEVUC6nRFhBk8AwxBWQAxGnNf9qh74SgW8BVyAxGKkiGBZObevmW0BYRcSKSIC8MKt8e2Pb1YVIa1D5Si3XRmVUtZT5XlvPB0sTrONp9gSpybuLFhGVb1IAFBHvTEUg3x2bjwsVSPJdUACBRClYl3ataa/m39PT6LaNRSJK8LsF3J463/T7a5ZM2tkqLft1lzmeECZtZUVrA6fSJGxF+IUzP6UdKff0W1Iv3omV0mhWRyiNQ70HdyMi4jsibIm0ejk3/DLD63kTB9l1I2LubeMFStIatPet0ItTEnopz28P74VE2OKP64/rFa3/B6v7vZHL0ohYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI4VDIzOjAxOjI1KzAwOjAw9ojr3wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOFQyMzowMToyNSswMDowMIfVU2MAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiManPlayingWaterPoloMediumDarkSkinTone.displayName =
  'EmojiManPlayingWaterPoloMediumDarkSkinTone'
EmojiManPlayingWaterPoloMediumDarkSkinTone.defaultProps = {}

export default EmojiManPlayingWaterPoloMediumDarkSkinTone
