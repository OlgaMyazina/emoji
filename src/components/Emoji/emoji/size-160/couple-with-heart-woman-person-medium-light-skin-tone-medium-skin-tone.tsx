import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanPersonMediumLightSkinToneMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-person-medium-light-skin-tone-medium-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFh0V7wg5QwAAAAZiS0dEAP8A/wD/oL2nkwAAJvBJREFUeNq1vHm0pGd93/l5lnepqlu37tp7t1rq1i4kJBmwJSERCzAGk9gOHI89wwBhsI1NPMZxTk5sHA3hOCQOXjJDyCQOdryMTTgDxxub5CCx2CA2CQu1Wmq11JK6+3b33apuLe/2LPPH81bduuqGQT7w6ryqW/feU/d9v+/39/3tLfgeHH9156/S90N5hTp4YE61X5rI+KZIxQtOeGtsuWK9e7Arh1+/tfrR7huiN/LRTz94yc/5vkNNvnL7BT678n/O7dZLt6YqfVlMtMdiVW5GG4UtHh640VeesyunW6LhXveF933X70U8fN8v3SiEVFJKpFZGR3EhJCOoulFcjn7/V9/v3vNxjxDi/x+Yl/8KtzdeyrHyiX3LeuGt863FN87sXz6q9842xEwscR6/WRiz0uvl672v9PL+/312sPqphk6Lmx/42R2f9ZlXvZ8RRXqI5dctpvNv7+xaekm8r9MRc6lCgOsXrjzbHY3ObZzsDTc/vFat/eF1rRed/ZvuZ3nd3/7GdwxAW0Lh4KZZxGUHZ1W71YyFQAAIIRDPPfaRs977yDuDc5VxtsidLQb4akMqTknpvyal+IqQ7thMZ2bLGueXL//5i/7QS/7Jlfzt8d/mG+nJW5b0/G8u7z9wZ+Puo1JcuwhpBEpCBEgPmzn+CyuM/vbU1oX18//xmH3ufXNmpn/HZ3+B9o8f4RNb/zvn6bWvkfv/5d7Fve/s3HFFW92xDzopGAGVA+shr/DHVhl+5oRdPXvm8+vF+rsWovmHTxenuesL91x0jT9+NOHGW27kxGMnVLvTXoq0OqqUvlIqdaVS8oCUcgkhmlJIiQDvPaK/+Zjz3gnvLM4ZnK3CaXKsGWHNwDsz2vAuexRh7lVK/qWO1TFnndl/9S9M/vixu3+XjPzFC7LzoeXLD9zSev110GzAlgUDSBFAShQsRrAg4eELDP7sWHnqwjP/4XOdp9+7dzTTjwrBZpy3byj2veeyfZf9/Pw/viEWL9oFqxY2SsgNGAfegRIwq/H9Ef2PH2P12ee+vF6uvT2V6d/d9MD2tf30bfvJilK0m43lOI7/QZImr2y0Wi9ptlqH4jSdi9NUREmC0hohZLAWIQJA2eAZ6/ESPN578A7vHd5ZnC2xVY41Q0zZx1Rb3tvRc1D+mZT+d2cXm49mg8I//bacgnJxr9r1B3PtxdfNv/pa9GwLCg+xAq1AqQCQkOCBVMPhBJ5cp/unDxWPr5/8nU8vPPkebYV/xcaRX7ty9+X/bOmnbk7EFUtwKofMADUwxoJ1AajKQiIp1rbYvP843cHax88X594cy2T99+0HiSKFs66TJNFPtmdn3zy3tPji2fmFtNFuE8UJQipqg2L7/+EShRCoX3v3L98jhBRCSIRUCKmQUiGkRqoIpWKUTlG6gVSpEOiO9/5l3rlXlrmxSkeP7z9+ZZGt99/c1rPvbOzqqLTTQJQ2PGH89ilqJmkJlYeug4MzpMttnT6d3by8qd2+fPb2yxcO/bNdb7ylIQ8vwdM5lBYk4G0Ax1RgzPa5NYJhTtnN8Lm9HOefORpf8bUv+S9Q+uqaRiP9zd179/3iwaNHDy/uPaDT9iwqihFSghBTsFx8aCbiK7Z/TXgE4L2CGiipYqRKkDpB5Amm7F7lzOC3ytLcvnXnif+UnIjfrKSObF5h1vvEy+1wU1aCUaA1RDo8+SgK752DZ0s4sMjij9/aav51590GI2ZeeWUs9y4G5jgXwK1MAKYyNUjh1VcGV1TkmwOqskJKFSUy+amnslMf3lJbe5px47/uO3jg9r2HDxM1WvAdOJudAOEnAE05N8YqjpC1XdasmmJXVcSJs/2fFHF+W6Sj3R5PlZVUeYnOSyTU4LgAjHUBGOMgsuFrpWHNIJbnaf7PNycID07DhRKcBWtqUKbPGhhjMJWhykpGo4y8LMF7pJDXn1NnfsA7fmKmPXP78t49qDi5NDjeb3/f11hM/Z7Gu4sBEs8DS0iEEkgpp0BTSJ1ibVuUvZXDwhistmAtVVER5RXag9RjDdIQOVA2vC9N0CWtArOMhkiFv10VUFU7gbHbrHHG4IylMoaqrCiHBaNhTl5VSG/Bi7lT/qn/y3m/B0Rw19P3NAbiO3ivnTPBvCZCJaYACxoy/nAhBMgIqT0akCpCixa5G2DsBk55sBYzqjBZiXQeoTVCu8AiMxbrWrClDJokZXivZPjTzgVAxqcLr95YnLVYYzHGUFWGqqjIBxnFoKCyBukc2nslnTpqrWMwHFLmOfFMm20y+OcZzrQ0b7+AR3tbgJB4gmsT41chJyD5icKLoE+1oEsBqBgpY7xzOG/BSsywxDQKpPWIyKF0rUG6ZpBUNTD1KcTzdNKHp+h9DY7DuQCOsRZjbDCt0lBmJXkvo8gKjLco75DeIVGUlaPXH9Lb7NJot5FR/LwweRIR7mCPn2KRtnYUbhgVXHANjB9rD3JyA7V010/Cbz8ACd5bcA4vLDarqLYKpAMZOUSkkZGvAZIgbfhMWQMz/nry+LYBCuGGw7oaHOswxmBKQ1lUFMOCop+H7zmLcOF3ZeKxuac3yDh7doVOZ5a42ZwytZoIsibDDh0ahzwebateEGChJ9qCUBNhBrnNptqWx/ES3oV4bUGDCk/bC4kzBjsssR5s4pCRR8Q+mNq0aYlpgNgGybsAtnPY+oaNc9iaPZUJOldmJeWwpCoqrLOBZc5RUSDnPPFIs7GVc+bcGp32DHv37UFpXZNg25bEWFtrGo/B8d6hq3yj9k5RDYwCEbzVGCiEQoyBEhJBAMl7DwjiQw2GM8BWAAin8KXFuQpfCnwCVEDkQwwk5RQ4UwwaW7UP4Dhrsc4F5oxfjQ2mVVSUeUlVBuYYF7RKWE+uh5QzGc04xjjPxiDnyVOnwTsW5udQKgSHgSx+W8Sf5+W892hTdmsXHoVAUWiE1Diht9kkA3ACiR+zKzxy8AK9Oya6KsV+KcNJgXca4RwYj3cGLCGHiiC4Nj9lXmwHkIoJg7y1E4CstYE9zgVhLg2mrDDGYJ2t2WMQLpj5VmODUmckkSaNFL1RheoN4ZmzXFaUtNsttFJTUiS29Wj8fuzFrOkDErkDjADS9usUm5AgohAPiSj8LBakd8yRf31UP3kTAkzhEc4jqlpsjQBNAOIigOpT+GBeNUDhDGZmjcGaGixrsd5hvcE6g7OWyDkcJRud85SuQAhoxJpB6ekXDrc5wDnH3qU52s0GWuuJ9w4YjZ0Uk1dtTQ5C4JA11aZ1SNfsqk1P6hokjZMaIWOkiEEq1PUp+kiEOO5wwuKtRQgXgPQgbK0tdkpvxiBNg1MDJGzIuSZAuanTh9M6g7EG5yzCWyIH/eYG3cY6VV7hXTCfpU4Hj2B1cwPbHVJZx665GdrNFK00Uopah5gCaBIo2qAnE1e+DdQ4ih5rk5jokkKgETLCiaBdpA75ipj4qYLChGQX50A4hK/zMC/A1Z7CTrFH+Bqk2oPZcRwUxDok0EHznHOBObV4j72ndh4pKs7OPUPmhoxGGdY5BIL5VpPluTnSOGJlbY21rRHGOhYrQytNiLRCSYmUU0Jde1ItlQ5iWgdRzjvwgWrbthmEVThZ01ECY4aNbQZ4kUVdJ2h+Q1LVoimFDgB4vzMAFaL26PX37TipHYPiA7A1MN473PismTR+CNJZmggutFY43zhLNsrJ8hLvPVIKWmnC4d1LtBsps80Gz52/wOYwozSGuVaDdiOAJKVEjp2HDyBpvETrBGsDSAIf/vMO7wXCC7yw4GrQEPiJSxzrkA42knrKV0tmn42QPfDWgIgQoo6bZG1CiKloVUyFrn478ffTYdH4erYBGoMjnCNF4NWIkzNPMCgGjEYFpTF4D1oKBJ6luRnmZpt0Wg12dWZ59sIqa90NVrdGDPOSdjOhEUdoNbagcG3qx+7ce0+UpiJtzYT0f0eg6et78TvLFridAd04yvbgFhxqKGk+FYcnKARK6kkOx1RMtSN89tMxvgMCGNZbjHfhrN259cG0vLdo72gLwePNxziZnCQvKvKywlqL8w5jHXGUcPn+vbRnUmZnmnRaTZZm28zPzCKEYlSUDLKCrCgx1k0qM+DRZ546zaC3xe5DB1k8sJ8oSbGmwjtbPzWPnPx6AGvydHH4iZgAKDyO/h0Dkic16ckE51zwYEgQbhKp7kTGT+VHU2mGn2ZzOPEhWsY5lHO0hWItOs2x+DGyoqAywcM556mMozSWoiow1iKkJGko4kbE7GyD5flZDu5eYr3XZ63XZaO3RT8bsjnI6xRRoK5uJ/dUVSlMMaQYDYjihMZMGzl2gdtFIp5fWvJTkhZuzOJshU1yqtmC1sk2Og8VRLGDPfLSAE3ACcJsa+ZUvmaOs3i3DVRLCIQccX/6eVZZwxpHZS3WOpz3WAf9Eoqy5PC+3XQ6LYQUSCXRkSJpRLRaKfOdFnvm59i/vMTexSWW5uaYac6QRAl6npgzxzZZPzdk/+VDBt0eywf2s3zwII3ZGaQLN+2mvMmYAGKs9oTIF0+dVFaMjuRs3hGzfO9+RFVn5FMJMJP8Z9qsxuDUHmvCnMAiUZ/SOyIEbQkP6K/zrD+DNz6AYi1ZWaGkINKaFx85gHE+lGqkmJzjgFAqSZRoGq2EWedYth5jHKYKCbG+/ugBNrt9zq71OPWNNVbPDth3bouN8xfYdfAAS/v3k7aa2wX9Okd6PgE89Q05E54yjq2XrpGcb9D5+lIAyJlL1Jueb2bhQQQxdrXe1F7NeaRzSO/pSM0j6hG+Lh/FeDfBeVRUPLc+oJlo5hoxzVRx3ZErUJEK4Kjn1YbqL4UU4AUyCsH+mAh6bmmZRqvFXKfNZrfPynqPpx9aZe3sgLWzGyzvP8vuQweY37OHtNVAAaFFNH6y9YfZIKzej2MIsIll7QdPI3sJ7Sfbdfm01iw5ba87zWzszq13OFezxwX2KO9pCc2KfI775RfJKYKn9R7rHN1hQavZZq7VxLuKylhUJIkTjVCixjEw6lK1snG4JupkTTfnF4ibTZJmi1Z7hsWFWXpbAzZ6Qy482qV3Zsjac2vM7e6wuG83C3t205qbQ8dJnTaFm3DCBLMQdkcyW8zmnL37KQ4MrqK1ktaCPfblsgZpLP9BgxwO47e9FRNwHKlUFLK/9XHub236nhJO4EV4IKO8pDBw2w1HOLhrMaQarYTzm33Od3usbQ3oDTKKyrI83+Yf3HoNrUZSlze2mS3GwAnQ0UwblSToJCVuNEhaLVqzsywuZoyGGVv9Ic89sskTx9bZte88u/bN0lmeY255ic7SEqF9EiFlhJMeISwei/MeZx3OOKrlHqfvepLDn7yGpCu3QZJq2zzxuPrpBrduJ0zCO6TzaCQtpc48zFMfOOXOvCvyapf1DuFFYM+oYHl+gX2L8zTTmBMrq3zxb05yfqOHlBBpRRLHSCkZZgXFjYaZZrqjLD1mtBDgvUDrJMVrjYriAFTVJC4L0rKkNVtAvInZGDInU5KeIi9G5OdGnEtXiFoxjXaT9vwcswtzNNstoljXzPI1uxzeeoaH13j25U9y2f1HiQdgnUV4hxcCi8dMyM+EQc5bqIU5EpBquVXE7j0fG957H4K3OO93hejfk5UVzmuO7ttHI4nYGIz45FceZaHT5PV33syhPQvMtVvE8bjWBbHWEzB2lqPFRCq1imO800htkVGMNhU2SXGmwlUVu5KUO+fn0N5hq5KqLMnzgmFvxNbakA25hY/OISNF2kxoz7WZX56lPd8mTiKEpNYRT/fqs6ih4rK/OYzPHZWwOCFrgLY1yY/1py6cRUCqZZ4l5v2bl83+t9HfjVqx1Oek4GohAkCDvGLP4i52zc2ipGRpboa3vvY2di3O0mwmIc8SF1WfJwXA7dfntX2k1kEvlEI4h9caaQ3Oxjhj0GlKq6qwNWC2qmgUBa0so7m1xXq3z0Z3RE5BP8nYONfn9MlzNFopM50mncUWM50mSSNGRYqNm54jHkbs+doeXGUpvcESknzqp+fxk5BCC0ilNEabD55rDX7rwtNPVMKrLef9KevcXUpKsqJCqYQDS0vEWqGUJIkj9rcbyEhQlhXGBZPWWqGlrwubqi767awDTX9PvevNP3KPCEdI+WXdYVUSqTVSBfMrjWW12+N8b8R6P6c/zEiTiE6rQYygGlUMtgqK3KJiOYkxRv2CtZUuozo61Q1FdVmOymNmLrQwzlL6WrMmQh1ywghBU0lvlf2DdT361YVR0n/F//oVrv7yWY8Qe4EfBsTmsKDTnufA0gKtRkqaxOhYgYSNfo5p7cYtXMHJTcOZPkSdPSQ6xlfDOoPnktMrQgi0jKJJzUW4oAleSnAyuE5Rce7cebZMxLB9lGFTkaQNmtKzcuJhxMaz7O202CsFakOwujVisJ7XNRZY2tOhOdNisJVz9tQag17GvisEq3eeQQ+1mXmioypbCFeL7Thaj4WkoSSVNB/bVNm750zafe0rPsXGm/8S/7J9eO+/XBq7JoXYVVlPpCOkEMi6EO+9YzNX7Lnl1YxUk+PHvsFar8dH//LjtGY6vPEfvZ7br7wGt3YCKfy37KxKIQNTVBSFHpZSSKUQWoMQnD63ilu+htX4ACdWNvjvf/bn/Kt/95v88SfvZ+nWH2Lupldy4kKfOE3ZtTDLrk4LXcGwW+Cs5fzpDTZXByztabPnYAcpPf2NLcpGzuorV067tv9yS8ckQhDhiYCGELS0xmp/bzfKf3nGJSuLf/1zPPiv/gKAkpSSxqaVzW5W1bVjJadY4BlZyRV3/Ah7rr6JD3zwA1x15VF+7uf/KctzLZ579in+5I9/j3XRZuHyF+8wqYsACgVzGYDRenKqKOLC+jrty2/hTN7gk5/4S975C+/iZ9/2ForBJp/9zKf47d/6d+y98Tb2v+yHefLCFmmzweLcDAszDap+RdavSFLF1uaQlWc2AE97LiVpRHjrcfu8Xr998/1S6s/PqIiW0MxITVNFGOE+v+Wzd7Wq+NTSX79jRxIYRTFRFHX2LS7OL88v4JEoGRiPgNI45q66lStf/FIe/PKX+NpDX+e//Jf/xD2/9i84fW4VrTWtaoPHvvgp9t50J7o5d3HEuA3QVBOtZpOMIrIix6TLHLzxTv7oj/+Qxx4/zp9/9E/57OcewHpPHGnyM9/kS/d+jFt/6A00Dt/E+d6ImVaDzkxKK44YbZU454kTxWArY/VMl6oweBs6FkrGS+a1Zdlf7b6jLEZfiIxFG0dRZp/r5t13pCN/bPF//OxFF+2cx1pnSmPsfHuWNEm343HnEM0OB66/FSEE3c118JYHH3qEv7rvAYqywgMHliRte46ZxT3MHbzuW7JI7ugy13ViIQX9rOTIS15FUVacefZpVi6s8yv/x3v48Mf+AufBecGBjsOuPQ5ScdPdP0rPpyAVzTShmUQID9aEp6q0oN/L2NochqJ7WYH3qVbJkfIe8+j50cbbN8utj/Ty3kd6We9n5gv96PnR6iUvuo7Dt7Ky6gIsdjoIIQJwztNoNEiSGO8dRy4/wq52ykwUKgrWwe6O4Adv0Vx70w2krTa7r7wJoeOLPFgo9VzicM7RWjzE7kNXE8cJnXaTSHoqCw6B89BK4MVXKvbsbuO9p7N7PwevvZkojokiTRJp1KTJyKT31NsYUWQl1hpMVeLh4NKPXS2OPPTW46fpvWXFdN/y0yf+4PiXRk9x7cP/+tIAhfbwhnX2wqgsmW02UFLULSBHvnGBtWNfocwzvu8lL+Mfv+6HeOmugrsOl7zhBwT/+k0Rt956LTfc/VaUUniTIccmevH4C5d0b0sHrkRpzfKu3bz2Va/m4+ePk+NZLzWtpuCNtyu+/0iT5k13h7DAO44c2sWofI4yG6GVRNXDCH7csBBQlYbNtQEznRmqssRZu2e0tqnXun9R3fLV92bja/j4sce+9dCOEOR5OYyVeqqozJ2tJMZ5qGyoIJqy4sI3HwRTcNlL7+btv3QPn7/iIINn7ueKQ55dl9/A7pvezsK+6zj78Gd45qv34apiIvKybmZ67y8NEAJiHeJurTVv+Zl/ChsnWX30Uywvl9z4ohaXHZhn1HkDu254FVWZwerj6OEFpKyL31IitbhoBkcIwaA3YjTIaC9UeOcWhRNKICq+w0MCi7MtVxrzzcpaSmMRQlDZ7f69rSrWTjxMtv4ci4ev5raX3011+w+itKLRaFFt9njs4f9Md+UZnDXb4EhRd8WDpWj8pREanX8CnbZp7jrCvoOHecd7f5dv/s2nyFe/ydxCSrz/Fhb23kQ17CFWjqHWT2G93eFtlJb1k2BShReAKS397oilfQZnzLwpy8h7n3+nAHnvqYwFxDec84PSmBmtFJUxlHXJ1VpH5DxZb4OVR7/Ehce/SpQ20FGEsyWmLOrUQk4Ts+6Eb0+zfEsG2XJE96kHKbpnSecPMNOa47ZX/SPK8jWU2ZBysEG28ne47llk3sfVha2QoIJ1DqlrJ+n9VGUqmNygNwpDB9Y0bVW1BPS/U4D+5ItP8KY7rgHPMe/9U877G61zlMZQVBWVMRjjsNYjdZ2+eE+VZ5giqyuKOwtnfrpHPwWYvhQ44596WzFaPclo/el6AkSFqLsqsVWJt1VoE/vgXm0VJr+sDZ0IEW1PbwghJoU0ISDPSkaDDO9s0zvXBs7xgg5BXplzzUR80jp/IzgqYykqQ1EZjAmDVkpLhKo7NEqwPYvpQ1trSgWcCznaNEhyR39cXAKsUBgJVURT4G0Ziljj8kQNzjj7t6aiqiqM9KhIouqUI0QR2+NwzjqyQYb3PvXetr5dNHupw5iSNFYO+GB/NPrcen9IZS2FCQCVlcEah7fhdJMmpZ+KCf3UnFZdh7Zu4s2Cm9/RgfF4675lVLldKxh3PJkMOdmqwpQFpqooK4OPQEUCpQVKSZSWSCWRSkzytGyY4YxNvPcvGKA//dJJpBlwzZJaWe9uPHv89AUGeUlpDHkZrqGqDNY6fAjcprtJFwNeWbJBST4sKXJDkRuyUYW2eYao035vLbYo0M0mKkkuOT48jlZ93R72zuEqgy0KTJFTFiW5rSARRJFCRxKtAzDeg7UOKzzCQpkXGGNS713De8cLPZSAC71R3GlESyvdnLX+kLlWg7yqKCpDZSzWOJT2CBVa2cIzcRzPT+DX1rboDUekaYwUAmMsOt/cRNSzMrYsyHs9Wrt201hcQih5KReyPYFVj6nYqgzg5AV5XlBKR9TUxIkiihVKK6QMGmSNw0iLNaFFVGZ5jPcNnGflyf/M3qM/84JAKoyLtRTLrViw0R+QL3ZomIi8qihN0CJtFdLJUOUUYofTGIOkI0Vnrslqr88zz65grGO2maI3nj0VxtIQjPpbeGtJO3N4Zy8GaAzKuKNRa48tc6oso8xzRmUBLUHa0ESxIooUchww1q1oIQRSOqSEqiyU977pnOXvcxjnZpz3C41IMioLuoMRrSQJAFWGsrJEkUNph5ehwC+mHNFYS6USzM63eFHjEEez3TjvSZII/fTxE5NGWhRp9h46hIrjHfHBBB8bGDMekRuzp8pzyiwjz3Oq2BHPaOJEo2twJh1aL3DCo4VA1f0pUxbCWtuoyoK40XpB4ITuqdtjrJsRAmLl2djqszg7Q1EFLUpjQ1yp2ptJhPP48UySY2p4NASJcSMiTredu263m1RVRRRFdBYX6ezeQ9Ro7mSPZ8fU17ggb02FyXOq0Ygiy8hsiego4oZG6ZBqCCkmVTvn/GR2E6UQQmCNwZmqmfW7zMwtviCArHN4L/dY51oQJjmKMqM3GNKMY0ZlSVpGxFqFh6XD9Yxr01KGe5M1GWw9fxQGLiTWOfSew5djihydpDTnF0g6c6g0ZTLlWHuqMN1uJsxx1mCLnCobkQ+HZHlG1XTEzcCcMUCh5csEIGc9XgYNE0rivcU5l3bPn2HP4atfGIOcB+nWnPd/3G7EN5bGfr8xjs1+j5lmgyTSNOKYONJEZahVj6dMJOCFYDAseOrMKr3+kGFWUFaGKFK00oRRUaJbS8tIFbyY1BqVJKHrWC+ReDtu3dTsGQ9XlgVVllEMBmTDISNVItuKKNFoLVE6gDReXxh7P2cd1rqa0pMwLH32+De4/o7XvDD9sQ5hxYOfeKz7pbfddvBV3WH2gVFRfS2W7vu6W72jSaRJosCgSE8DBCiJEJ6qMhx7aoVvPPEsw6zYEa95PPrs8WM0222K0YhRlqPihHRmBpU2QMe0F+bpdGYnYYCrI2mTZZSDPlm/z8hmuNnafmONikL3QKqQuI5npJxzOGmRym272XAh8d999hFe99MvbBPnvz90AcC97QcOAHyuEUc/IoV4Jtb67YMi+9lBliex1kcjrdBqPGZXDzEATsBsM+XH7nwxN191kEdOnmFlvUd/mFGWNqQaD3z5UZppTFZU9Aah2qCUxBjLbKfNK3/4B5ltz9TaY3GVocpGFP0tRr0eg2JA2XYkMxFxEqEjjY40SutaoINIO+eQzuFU7W7r3EdphQD94GcAXliwOD4+9MXTADnwxJteug8pxO8r7EdBXDfMy9/TMjukpZwAFDx8qLlLQCvJ0f3LHNm3TKgOGOx4FWGtn1FtDoiUot2MmUki0lgzvzjP1TfdyL6D++uBKoc3hirLyLe2GHW79EdbjBoV0YwmSWOiWKOjCDUGSG6P+KvJrKGftJuFEERxDIj4AUI39lLHP3/NNTve//tPHf+WYP3Rl88CDN/88muH/Xx0TsmZdw/y/LeUFEtS1FH8eNw3XNkkFfKAFgIdRdte7LUvuxZjHZFWpGmCThIanTnay7tIms0waeYcrganGGwx2txka9hlkBaodpjYipIIHUUT9iilJht90+WD6UURhECFi4m992ye+UO+W8cffP4x/sld13tj7Z9KKRr9PP83QohFUQ+Peu9JfYT31GnQeDVC7Bg41QevvTYUupVC6QidJOGihcCaMThBc4pBn1GvS3fUYxBl6FZgThzX4MQRWgeAwtzxuBEptnchvN/O6qVA6yg8Rr51CvjtGPPtjt/77KO87RU3mNKYD0khRv0s/3U8h1y9A+KcI3GOKNKTXHEyZFUHtro5N39RLXacZzlrsGWJyXOKYZ9hr8dG3mMUlUSpIk6iiVnpSE/AkWq8+yrD12J6aHM7VREi/HybWJ7v9vGhB77J2+66wQ7y8v+ZaYjT/SK/x3p3h3FOV9bSrGLSJA55Y+3ppJKM18K1s/Z52URdHjAVpigwWUY+GtDtd1kvtqgiS5pExImuwdG1S58Gpu6xSTU1lC6m2OvruezQ5vbO50IIzj/9X/leHB/67DcB/DtfdfMDZWWOS8SbjHW/mJXVvnYjoVkkJLEO8VLt8YQA6zza5NkO5oT0IYBTZCOG/T4b2RabbgQaUh2hIzU5lR5rTgBI1Q1IpaPJDvok9qhVaCzGY6EsskF234d+hN7qCt/L4wP3PcT/9orrzlXWffD0+vDuJIr2zc+06DQbNJOYNIqItCIaR/nOoQdrq+EGvMc5G3ZA85xslJFlGUVekimLn/EBXS3DhERcA1OzR6hxoT6AM21aYse47HiafntnyxTFhd2HryXv976nAP379/8OD33kd6jSxlXDonzRVlawMRjRiCNaSUIjiQJINYOc8+gzp56ZzMaMF9asCYtp44TXDhTnNyIOXmnQsdguYYz7+FOCHDoaarKktr3OsD1a4sV4BE94EA8i+OuQO3zvwHnf+97HP//lX+R/+amfvGHz1CPvdd7vQ4D1jkFeMMiLEN2LaZEGPRqO2LkOELRCKTnxNEoIHvlawmirzYtvjREzVagUjlOJyYhtrUFKTkCbFucaISOE6CHESRCfkkr/0dbZZ57sHLic61/+6991YD784Q8jhFDe+8t+4zd+41UPf/1rP2Odu1nUkyBM8ZqpUuu4xaGb6VTl0G9num68QOLg1FnN+VXJrD3I+eEhsn0D5q/aYO6KjGgBJ5WwUkgvpTRS6UooVQmhSiFEAWQIsQGcwbtTSPmE8OJRj3gySpubtqrcbT/5J99VUI4fP87VV1/N/fff3+n1etfnef5jzrl/mKbp5UgVRa05RD7gYpA829iE7+tWq7ljmn7syZy1ZIXlkcfhCw8p5pMF9jR3kfcjzIkltp5ZYm2poHNZ/lznUPGx+aOjryZ7WNdaFkLoXEo1QjDw3vdBZErpsjEzV1lT+cM3/dJ3nSn33ntvvd0j05MnT171xBNPvNpa+xpr7c1KqXkppZifn2fX7t2cLTK0LWG4sZ2fMS5c+B2s0kmzMVmNFnWMUuQlK6uOLz6sOP6kYjHZxZH5g6QywTobBL2Q2JWU4fmZA+e/qn5CaHEZio/kQ/0//uUjb1z7cT7Px3j991R0vffcc8893HXXXSrLsv3W2ru89z8KfL/3fo/3XqraswLEccwtN9+MANbTBvQvIPqrRN6i6oU6P1GCAJG491feaAFpHQxHjufOljx+svQnTnlh8gYHZ/eyu7lMrDQSud1WFhIltt8rJZGRLKQW3xSST3jHn3nvjxU2yxt6hl/825/7rgFz//3302g05Obm5i5jzO3e+9c4524Hjggh4ul/COH5o3VCCEajESdOnODcuRXMcAsx2EDmW2hbIsbNAx8KaOJN173eWutklnmGQyhyRSqbLDVnWWh0aMhWndyFyluw220PJanfS1GDJZBKegTnhBBfEFJ8FCU+41O1Jirnf/kL7/x7A3PfffcRRZEeDocv8t7/hHPuh4CrgUaoc8tLAjMN2LiK4Jyj2+1y7vx51tfX6Xc3yLa6mGwYAmTnwk7AT+19hxUeqaWmoWNaUUqsonp1NKxqinoQbRzcickSLPUGtJiAOB371C4zc8I/ZDAf9YJPSClP4L2956F/8R0D88ADD5Cmqeh2u9dXVfU27/0bgP1SSjH590SeB8ylAHo+k8aAZVlGt9djY2ODrd4WWZ6B9yG+++2X/EdrjZXOOYytMK7aXj3ygFc7P3jqq/Gm8PRK9bTCbS8YeJA4pHhGSP5KSP5fr/mKtz779W+8+9uC8+lPfxqt9VxRFG+11v48cGRs1mKqU3spU/pOjunRX+dc6Aobg7Vhl1f8h5d+0FpjZdhLLzDO1Jlu6F17L6b2wi769Iu2hMfLLWEYfLzS5Cfzg/Wm86aX7s+98v9WIh+3zvDbj/+bi8wpyzK01pc5594L/E9CiOhS4Px9gHm+2I8DZWtDkDw+tZDCSSXxOAQSJVS97Txu1YqpJYFpHvkp9Kd/Xu961RsYk0XccaHMerz3c0jeIiIWjbY/zSUGF4qiQEq5YK39t0KIn1ChfOu/HTjbGIlvWRn4dhWD5zNSSsn/B0lm5lmX+KZdAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI4VDIyOjI5OjE1KzAwOjAw7irMjAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOFQyMjoyOToxNSswMDowMJ93dDAAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanPersonMediumLightSkinToneMediumSkinTone.displayName = 'EmojiCoupleWithHeartWomanPersonMediumLightSkinToneMediumSkinTone'
EmojiCoupleWithHeartWomanPersonMediumLightSkinToneMediumSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanPersonMediumLightSkinToneMediumSkinTone
