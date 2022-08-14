import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissingCat = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kissing-cat"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAgwRGC+ygwAAAAZiS0dEAP8A/wD/oL2nkwAAH+pJREFUeNrtm3mUJVd93z+/e2/VW3rv6Z6Znn0fSTCShaQRAmEhsMEGg7ERh03GeMMkDj7+Ax9inIQE25w4tmMTG3MMMRAHAphNjoEYEAYkI7RLjDSSRsxIo9mnu6f3fkvVvfeXP6re69dCxwzSQHxyqHNuv3qv61Xd+73f3/578KPjR8czOeR8LrrtLyYYGxtncXFhszF2p6qciNhjeWM2qw9v5LI33fcvdoEP/M0liHEm+uZ4jLorz/3y4uLiA0B40dvPfc/vu/N5SJ5nnDp1otpX7/sDQX9eVU6j4Zuu2n9T3l685cAnr5zxzWWe8+aH/8UAc++HdmPEVPM826fa+lkhvlRVd4UQTxuT3CDCQ+dzn/MCyBgDyEbQazTSFwO7QHdhuAGJd2bzsx9D+Py338fZPNnGlW85+v8ElAOf3Y4/lyBO6xr1eTH6X9CoL9Go62JExICoDgh6VZqk5wWQOS8UjcOIbImB9e2GozGf0lhIyRqmL+RcrzG+j6ifyZOdbwY3evcH9v7Qwbnvr3cRFlwqlus06Ac1xE+GPL4pb8r65oKT5bmU5mJCDMYKctHwcJ0v/t7whWGQc5Ysi9tjMPV2w9JuWECwzpBWIkktVpJKfL7YeAVi3gjhL+7+wO6vCDTuaH2Hf/2bP0BR+vBuEDFE3UfQt2iMN8Sga30mZE1L3rL4XIhRcGmkajwIu44cOZUmLsmeMUC3v28I5xxZnm9SFRO8EIOgKsRgCd6QZ5G0FqnUQtWl8Scwsl8xNyny366o7rrvzg9I3P+W71xYxnzkYsjaoGaCGN+Mxl/TqNtDDlnT0m4a8rYheiGqIED0gkYDVtYnzvWLMPOMRWxh0fCN24+KIBs0Cqor/1OF4CFvGZqLlsaCo92waNBBIbxJJH7awtsFxu7+wK4LBs79H7oIYkix7hVo+CTq3x1D3J41hcaCo7HgyBqWkBcbCaDlfDUKIGuMNX1i5JmLmBG4eOdABZhAQbUDkgLFzqgKwUO7YQleCLmhUve4StgmIr+val6omPfc/pe7bzOGuP+tT49N93/4EjQ0UHSzoL8F4c1oHPWZod20tBuGvGVKhoN2vRjtejSqIKJDIgyIXCCAxJoKMABSPGuFQyiCoKAQA90JBi9U6p5KLSbGhp9W9NnWyJ80mtmHvv3BbYtL199M386d7G2fEZc9YkSXjRGE6IFWsRRZH2P9mmifVdVbf22M00ceteu2br3eEP6DEJ4fo5q8VejEdsPgM0OMq+e3eq4d50/6QUbMhQCoAF4qCP3a+9Dupujq6xVCLrSjIeSOkHkqfYGkqptdvfKfhycmrth+2XNutsn71+kpGUPsEOKGEFsVY10hEx40eDiwbBs3z+nXf2fmWm2fnDzy6NrZU8d/PW8tb8hbSnu5YE7eKpi7SvyfdKI95wJORAcvCINAQEiAqqCrfW9d7Y9LR9aDohGSao2+0UHWbB5kcLxOpa9Sdam70ZrGG1ExxQQ7rBQInZtHehWHqEJUHd88xsi6IWk3chZnMqaPL5CdnCPkLWJUzkenFPuNAalyoURMixeH0L2n9sYpJVBRFeMMw+uGWLdjnLEtw/QNJdgkFheJgDGCGMEkYBwYC2KK0aszNBYjBog5RC/GGFLrSKvCwEiFdVtHaCxsZvrEDGcOn2VucokYeoDS1XsooiAKqKiSyJPZ/3QAUtVCejUKEouHrIanAEaEkQ1jbLlkHeObaqQ1BfEgAbBgErBpORIwafmZA3ElSD0AxQjRlyODkENol68ZhBbWtBgYhIFL6mzYvoWp40sce2iG2bNLKxvSu4cCYjpnapQLwKAQQVWighdRpLytakcClNpAlW37trBpzwiVSlYoWRWQEhiTgKuArayAY8vPe1nU6z8YhehKgGwJogVpl2ACHtAMDRlpGtm4o8bYxBaOf2eZow+eot1ol/FFySLRcoOjouSrlNbTBShGUMWDtkVisQOi3XuPbhhm75WbGF3rEOYL9WFMz4JKkKTDlKTnfSlWqk+h7LWz5cW1pkfsNEJMwMQeHRXQmJFWYPuz+xlau5dH7zrG7Jk5xBhEFGMUMRHQqGir4yM9s1hMFY2xpaqLiGJM7O7IxK617HvBJobXeDQsoepXa+4OQB1gOqDR0Tc9Cq138RpLiuqKbGAKUe2C7IohKwwUASFAXGR4LGPfdVtZv2McjYUOFFvMX1VzjczHeAEY5L3SzmOrv19nRCLGFnpow54J9jxnjDRtojEgRgrjAMWEjStFKF1ZiNhikZhiPOUOKqv9LekBqGeIA4lgAmgodZ0vvxGQuEy1knPR/nUYYzjz+BnEBJCIRl2IyjThQoiYKq/6zT3tWz969DhERAJrt4+z67JxnF1CowcriDFgHUErLDcsrRyCemwi1OpC30CCSUwhfqsWLU/K3fXaHS1NvqyIm7UQIW97Gs02IfMYlIo1VF1aEFZDwSRt4Zxn13PGUPUszp4AIjHqOZ/HBTmPXMb3BOhn3rXAfRPHiUGPRRu1f3RItl4ygXNLoBnWCpGUY6eE+x9Z5uB3znJ6skmj6bvWrb+esGljP1dcvp79z93B0PhoDxNktaR3LIBoj5gV4GTtFo88cIy77j7FY0cXmJlvk+eKGKhXLevHKlyyq86le6tsHBesyYm+jXOw49J1HD24QKt5hqhM5rkuGntBHEVYWvaEEI6KreXrt29N07QJsYVYy+ETli/cMsNdD8yzuJzhDKRJ4TgVDBTmFjIeO77EN751mj1feoxf/qUrueyK3atFp9dp64BDx3+CyRNn+OhH7+Kbd0zSbEWcA+eK50SFswEefbzB1+6YYWjAsX/fAC+/boAdG0FiiyQ1bNi5laOPzBJay48fOpQt7dlT+Z5rt+cD0Buv7yNGqUzs2HvDyHh/v9EGzbbwd19v8YFPneWhw8sYUepVoZpA4gxJaklTR1JJcIkjcYXVeuLEMtPTC7zgut0kaaUEx/T4QU9W3goEPv6JO/nU/z6KdZZq1VKtWGpVS5IYEiekTkgTIXGWdgaPPNbktm83yHPD1glL6nJMUiXGCrNTU5+46KKB237yd6YuDIMu3v9iXKWv7mRR1M8x14p88DOL3HbfIs4ZhgZSxkYTNk3U2LShzvq1dYZG6tT7qiSVlIjDR6HRhGYrsH59H5UkLba+1/HUUu+sOFnd8594yT627NiIs1CrColVEhPI2xnN5Razsy1OTzY4dbrFyTNtZuZzlhqB//n3czzyWI1ff00/IwNLDI+Nhe3mmqm+/hS46ZkD1HjoP2FrE0lr+u43+FZjrdgWjxxVDj7aZMfGGpfs6eOKZw+wY2s/a4brJJUU6fWQjS2dQtfjOdtS/8aCNaKFReoaso6Zj6VHHdm2cZhtGwcKTzrmpUedg/pOKEIMOe1mxuRMi8NPNLjnwWUePtzk24+0+drdKa++PiI07Jp1Ez9VqW//1MLduxuDV/7RMyv7LN77doytXtZeevzvfPvEVmNaeE2YmnOMDFcZH62RJFVklW9ie0y9Xfm86zV3PjOln/QkHdQBR0MZi/ny3JcAlaCEMhRR371OowcCqjntLOP0VIvjp9qsH4uMD3p87hCzdjapbXptDK2vrLn2r5++o+gffz9f/4M/JmRLL/etuS0xb6BBqTjYsSllzXAK6gihyPmipf+iPfojdkYZeIZy0cGXIwdfjvDkUV7Te33nHqHXqy5EsfO4EMD7wi/bMJZw1bMT1o9ADBENbUI2N+Lb86/tH7k6XbjznU9fxLL5aV7ye+8dW5q692W+NStCjpoEsMRoEe3EUGbFuYuUYUE5W4lAWJ0C6JrxHjPfVdDaw6CnYlHviF0xVNUigOhG8MV9QzTEYIjRlLfzxLCI15mfXD73wF4NrQeeFoPi0U/QnDlGc+aJq7KlyUtjtoSGUD64BEZNkd8q07DdVKxIYX+NEqMnyzJCnhVAmXJRwYMvR5dF2XezqXMeQ/E9E0ECqr4IbUS706FXr3fnI2i5AYqgMRLzNqE5t8k3Zl48deTzLN3+ru+fQYsnDjC6/8/M5C2/+hLfmB5QbSEmLTA1RVykFA+NZfCNCCEqT5yc5f6Hpzh4eJajxxZZWMqopJaJiX4uf/Y6nnvFFrZtGcdgV5izypF+UmBKxIecx56Y5K77T3Hw0XNMTzdRhTWjFfZsHeCSXUPs3T7IUF+C912pK+PgYlOlExiHjBAWjJe5F2+8+F99MFs+u/x9A5TNn2bmm789ni9PviC05xHrgbTcKltUB3qSgSLCo0fn+NBnDvGFr5/g2OkG7Tx+V9IqcY+wbWOdt/3Sj/Err78KZ+xThxpdcJTF5QZ/+t9v52M3HebkZJvc60rJQMAZYWjAcumeId7w8i284oUbqFcFH4WiErMSqhRxcUDzBoHZy5tzR3dq9Ae+Lyu2/OW3MT//OCLuhe3G45/TcG7YpBbXN0TSP0SS1jGmgjUJxia4JOHW+6d5x5/czQOH5xGRInFY5otW4qqy1u8jm9bV+OL/eDUX7RyH0JPc0h4tHyM4+MJXH+GNv/WPtHLF9qRVpedPVCVGqKbCz79oA+9668WMj1i8z4nREzUn5G3yxiK+sURs5YgZCkl1+1uy5skPDYxdw9jL339+Omi5ucz0458nZIv7NTSHVQOIRbBINKgHzRXNFfGRYyca/Lv33scDh+dx1mCMEGMkzwPeR3wI+BDJfSTPIzEqfX0paWIKaxRjaZlCj5VaOXfOYp0Qghb38BHvV+4XQkQAZwUf4BNfOsmffOQwWTNCOU/NgSDFGtSARjQ0bcgXr9l48btMyJfOX8Q0Zmy69HeTpemvX4lmGATBgVoIgpbWSUuFe+ixBQ4dXcCI4IOSONi+eYCLdoywafMww0M1jLEsNDxnJxuggTf+7G62rRsolDS97OnRQRSW8AWXb+Ddb7+GL37tJAP9FcbGqiQWfJ4zM93giZOLPH58kdnFHJEi0/yVO6b4jZ/bxobRFSNKBKJBxCKYglmhednsqZtGQabPGyCZXyZffHhtjM2LiCV7tEQ+LzOKRFQCwcNFG/r5qf0buePgJBvXVnjjz+zkRddsZsPaASq1BHEOEYNKx18CZxQN8SnS5lqKZVlk0kjVGt7683t58yt344QiaacR9Z7Q9swvtvnO43N8+uYn+PwtZ1nOlGsvHWeoYomtHC0VPYBEU2w0FtEAMdviW3NbMGb6vHXQyY++DIJenfsTn9cwM2asw1b6cWk/1lYwmmBwxU6IxVpLIwhnZtuMDKWsHe8DY1FrwDlMYsEaRKRUrNLTWiOoCF47yrSwjVYCEiOhzPlqj2WLGtEQwXvUB/ABEyNZ23Po6ALNDHZP1KjbUFyrgSgBpdBFPm8Q2g2izxE36J2ZuDHr858cu7vF4B/e+c8zaOEd+zk1PE//2WSXRj9cOH6F7pEgSKBj3LtxdxSlZg271lRRa8kbvsiwJkV2Tzum3Agq2slgoAJPnMl59GjOzFwghAI752B02LJ7i2HDGlM4gqx4y0RFfUTzCD6iWST4gOSRS9b3QQiE3BPzDnPKakwneR8LHw4VNHin5HsfG7mVte0r/nkRW3jHfgD2vvPH5eTbbt0u6p1RgSjkGTSagTzPiN4To8GKJbGGSuKoVR2VquJSLTzsoiBdgCOxKFDbstCGIgL3PrTEP3xjBtGEaiXFWVNWUiKPZjm335Xz0hcMcNmeOlFXPGz1JTAlOJpHyAPkkViGIeojIQTyEPExEkonVZwWVlYLzVqIX9hx7bdem+QHPpsvvGP/KhZ1AdI/egHZTIYRRF95X5rHsHmpEVhYgqVcyYIH2hi1WDUYNWgUvEKkEBOXOvr7EtYMVxkdrdI3UMEaQ5SwIs8qiEArj9x6xzR5W5hY20eauO41UZW6TzgzNc8td8ywZ0tKmkihm2LsAtABSnzEtyNLSxmz8xlzizlLDU/mI6ET7pjCm1UTMcaT2khfAoN9kYE+v3mustC37oX5HMY9NYMeO9Hg3rNtdg5aO63nRgf7w2bRyEDVMDZgEePIfUKrJWTtoptDDFhjSBNLJbUYZ4nW0GrmHD3lSWttRkZqDI9USWod1VPw3OeBrJ3jM2g1lrG1GsZ2HDnFt9v4vE3WjnjvcdYU1jNG8AH1Ac0jjaWMmZk2c/MZmgVSlGEnjA+5rlVUiahVxEZMEjFWiFFpZ55mHjkz0157z5GzO0+f3v3IXz7yeOMt1+7Qfzze5PATp1cAmmoEjAhtH+2ejXXjB5br84twdEqZXPQ08xYWT90aatZSNYakVLoqQhQBZ3Gppa8/YWiwQr1qkBhYWm7TZ8FJJ78spImydcJy51ST+YVlfJaTJEnZNOpZbrVoNDKetSsldUrwoQwTIhoCMQ8sLbRpLeekoozVDMsxsrDkmWx42u1CwceoeBSvSkYk18L6VpLASB3WD8PYIIxvqi0tnWswkhr7gX+a9ju39q1m0KHZjF/89EO856W70zA1vXvTNtY4AmN1eM4Wx2ClAjGh2RSWGtBsKXlZBrMGqhVDtWap1hy2YlCJZO2cihP6nMVoIHgt+wYKNj3v8j4eOHSOOx44xd6taxkfHSxy4I0WDx45zUXb6zzv8s1oDF0dpCEivojkawlEoyy2PaEVSImsrxskTdAQyb0SKarBLgGXKjaNRONZzjOmFyLHzgkPnmwPP3Kk8dzZBX/rvjXp8de/fAPvPTBXALRn2wR5VN7+zXP2+Rdvmjg077fsXVex1+xKmwmWybnAgyc8x2cCi03BUiy43xn6rKFiDcYKYj0myRFnSKsFi0ZGKlTrhd8RA2inklpak5EhxxtesZap+QUOPTGJcxYjhmNnZ1g/HnnTq9YxMpTgfV5YsajgCxZJ6WkbIk5gsR2Ync9ZXPa0WoF2pvgQ8VFpq9IKkawsadeqyrpBZdsa4TlbE6pp31Jfyz/xxbn5Ld8+l637xsnWkZqT6T3bJqLs2TaBgPGqwwOJcf/leWsWF1060Rhof+z49PxzvY9MDCVsW5My0V9hyDmqYkmiQaIgKmAFtYaYGNQJ3hlya8iMQGqp9jtsalFXXNdhkGoRW80vtvniLZM8cQKMCDu3wIuft4ahwQpF9VPLNJFCKMIbsohmgaWFnKwRcCGSRqgouKCYqEjUsqsm4k2kpZGF4Jlu5pyczzk562l4YaBaOzY3za9vSuWW93573qjqGoFlYFb2bJsAkCwogxVT2djnrhSRK35mf9/rLt/ceO66vkDqEoQKRIcJFhMMJhhEVxw/tYImBpxBE0FTA6ktzp0p/1dcJ7K668uUYM3MNgFlZLhaeN76FPX6ULBI8oiUryaLSK6Ql6++BLJ0MFWUaCNqY/kaQHJ8jCy0DYena4c+dPPiRyaXsrnJZvgnZ+ThDs8dQGpFgfHFTC9tVzV/2eaBv/25ywcn2j57Lt7jQ5GkMp1SsRRUFe2IjHT9m1LqUTVFWiEW7oCGMj2i0pWyTsdaLD8YHrQoEEK+OvvYA6YEkBAhgpQsiRoRVQxFGFQkKbvJoAIgiUQKLzzGiJY1t4GaYf/O/gevTkf+6sbPPTZqW/FZAmuBe4B5B5AFHQXWWOHed9+wY/75c3ly0suhiM1BEyhTn1IuUrTortHC6UKkdAgLx7AASLpdpQVApdOo392almUZuQ84a6lWHLY09zGwmkWlF03UohCi5SuKES0LsFq0AEjH8y4A6oIkgUgo4VbAErx5eMNSbH71rTsfn/j9hx4frNoNwFbgpCuLhy3g0Z/aWo+XNpvSynK1fugASXJaRbagocjvIkRRrDGo2jLcWGFQ4b1LN3cfezJ6GrW4TU91pyNGkzNN7n5wgZNnM5wxbFpXYefmCpsmqvT3OdAiU9kBqWBOWVJDMGjHeyiG0ZXOlJJ7KrFkUSjYo0XJSYxbNurusWdm/GJa1Qdv3KrP+/SJE8Ak0OfKZEAD4D3XrAFFfd2G2qJ5rLWmcmcUu0U0K28sSBnJmxKcDoM6ACHdgnFPb7Ku6vKimw0s3gz219m2tZ+F1jIHDi3y9XuWMTrP1gnHj12UctW+Opsm0iJ8iZQMEjrhVSe72BGtFRUnpQiXABG74AgRJEEkPZS03X3tAY0kaIrw6NHT7Nk2kQGZPFWwCsjA49Ycv868NovTHyQs1FWFiEWlyO0WkUw5qVK86MSAtmhwUwtqtQDOlk3DXQ1tShYVTBLjiCQsNixPnInceaDBvQfmCD7QX1euvtTysh/vo1a13epJoY+kYFOnAyZSWlfTzQLEjph1AleNRWbB1tXZNe/e8kj995fT2aDG6PeM5ruNifNnYyXb+ZU8rf1TiI2XCFlpRBQVU7QcyEo+uls5lhVad6Jv1aLztQNOt49Inpx7UfoTYd82w77tKQOVGrff24IofP6WNgP9y7z0eVV8KEVNS+b0MLLoUyqDUF3Jicfyr9FOZJ8ipvZoEit/+7k/2+x/+rfO4avme6dcB//wThBhad+g3vrq41NO+v8cWz+n3abAQCCQSyAjkBPIycklx7MyQudVc0LMiDEnhnLEfPX7UOSNQ/T4kBN8xsL8ApOTy6DgfcAYQ7VaK68t7hc0x3cGOV4CnkAuHk++MgvxBDxa6h8VA7aeG9P3gQ1Hrnr4CP8WX3XflQv6Z0vPC+/Yz+yuUfobw8lccuTdPkz/NnHJBoVcLUGK3I6UZlVK01+IWakcTGebhVWpdpEntShLmTwrYrWjJyN//43AQ0cElxjWr63xomv6uGrvEkJrpVLSKekoSCwznj0KsCjxF7rKoFgUi0FsDetGP1fTkV8Lxp8bfegc/e+9/+nV5o++/zoc1fEmk38Z8ukbVBt4FXIMnhIkE7s9yGIoP+tJUElvJC+rymDFeZE7Ojul3H5AuesgLDQNz9o9wFX7Ui7ZntNfWSb3ebdtT0sLVYBhQQvHtQNQtx4WCzFxKA6DsVWMG70/tcNvihIe2PGrX3/mv1k9/MHnY9OBXVnj1F/FfPpFqi1yhUwNvmQSPR2wK6xa8SM7QNFR7D2t1tbAkRPKx/9BWVhM0ChcdnHCG15usNIk+EDs6WdcldvvWAa0zPOXqdsyDLIdcESwUsUmI4ddZe1bjx/78lf3XfZ2Rl/1x8+8gertr7ua9uLxmaQ6fpeqXqwx227IywR74f1HioRW1+/plrhWKoednHNPeNXd7WbuOHwyZXFJiQHqFc/ODW2qia5ugn2S+BSFQe2+jyrdloDi5wFKIgZr6phk5HCSrnnb9l/6ylfqc/OMveq/XpgOsz/97EP8zi+8hMb8w9OV+qbbUDaica/BG0MsqzPF5Lo/l9IVHbFSAl7ZfX3SeX9NedbOCqOjVWYW4PAxz8OPwbk5qCTKYN/K94s8fhHCEKXbRtRlThRcUQcmMRZj+nFu5N6ksubf/Nkv33zzZc+ZYuJVf35eP8E6LxHrPR778EsRcWt9vvTO4Jd/Jfq5/hAWacecTCmqE9IraitKfLWoPdW5Yq1loZny5duFuw54cq9YG7j2MviJqyFx2nW4ipCmA1yRZzYIiRTAOFPHuiFvXf0L1tV/d/rEPx7csOs1bHr9/zrv9X7fAAEc/eiNuHSwnrXOvc7nzXfGfGanz86Q+3naMZCrEMrShUhcsXIdQER7ysasOu8ApVg+/iXLwcPgQ2S5HXjTy4T9lwghFC03nc4StPCsnBgS40hsH86NYNORaevqf+WS2ns15lPbbvzE971W93QA2nbjR5n84n9sDK7b+5GZM4cOhHzsnSZb/zLbPlmx2Skyv0QWIY9CxKywR8paR6+ZF11l0YrSu6HRMLRaSpYXSa9qRRjsM8RQ9CYVCqywXE6ExFgSWyNJRrHp2ujSoTuNq74nrfb/n+jbfvNr3ve0fuX4tBjUbZH51t9w9rFbqA2sH8nbzRujb/ymb03t8s2jZO3TZL5JpkXlQ7uM0m7ZB9FVLeMhGM7NJzx6zHDfdzxPnMkRgYlx4Sf3Gy7dboGkqIwUVXacsSQ2JUlGSKobcJWxSZvUP2KTyvuWFqaOjYxuYv0rfu9pr/EZAdQ5zn75j0grNVleOLfP++xtsb14g2+eHM6XHyPLpshCm1y1KBGV3WXSZU8BXLMNDxwx3HNImJqL9NWVbROGvVuEHRPQX7WoppgyUCmAqZAmIyS1CWx1XdNVhr5qXPqnaX3g1pC3840v+/fPeG0XBCCA5v03ce7UwySV/lqeNV4c8vZvhPbcdX7peC1rHCVvT5KFFj4WFYbYkzADJfPK6Rloe6GvIowMQH9VMCJotEW7jQhODM6mJOkoaXUC1zeR23T4XptU3++Syk1ZY2G+PjTO+IvedkHWdcEA6hyzd36cUwdvY2zbs4Z9nr0y5K23hNbMVfnS8TRfPkreniIPjaLaqaXjW3rFItLt0O/4TEYMzlRxtoKzVVw6RFKbIOnbEFxl5KBJqh+2zn1q/f5XnJy67yusve4tF3Q9Fxygrn564Av077iUyXtuXh99/nMhb/6ib85e7pdPpPnycfL2FMEv4WO20i5X5kykDD+sMVhbxyVD2GSIpL4OV18fXG3kYZtUP2Zs8sna0JqjPmvrmqtf/wNZxw8MoM4x9+CXGHrWS5i67aMTIc9eEfLmG0Nr4SrfnKr5xllC+xzRLxNjVqRXpfidmTUpxvVhK6O42jiuNta2lYEDJql+0rr0s31rNh3NGvM6euWrf6Dz/4ED1M0O3HMTAzsuZergN8dCyK+PPntNzJvXhvbSupgtmOgbaMiKKVmHcXVsOhBt2n/OJLVvGZd+2tjk5rRv8EzI2zp29et+KPP+oQHUZdS9n2H2xHEGxsbr3ucXafQvisFfq9E/mxhGFUSMnRVjD4rYbxqbfM2l6cFHDt629OzLrmf4qht+qPP9oQO0qhfygS9QqQ0wN3WiP4Z8s8a4FkCMmTbWHRsYGlvK87b2X/ZKfnT86PjR8f/l8X8Bwkc94xKDJNEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDI6MTI6MTErMDA6MDA0YSBVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDAyOjEyOjExKzAwOjAwRTyY6QAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissingCat.displayName = 'EmojiKissingCat'
EmojiKissingCat.defaultProps = {}

export default EmojiKissingCat
