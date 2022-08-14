import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonWomanMediumLightSkinToneMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-woman-medium-light-skin-tone-medium-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBBYaO13tYgAAAAZiS0dEAP8A/wD/oL2nkwAAIphJREFUeNrtnHmMbOlZ3n/fcpZaunq/+x3PzJ3dY3vGGMZ4xcYQPBYibGKVSFAsosQOAULCYiIjFJFE4ITYISEWIfBHSJCCgICdYGOPh5nxeB9mYTbf2e5+b2+1n3O+5c0f51R19517PYCNTCSq9amqq6pP1XnO877v8y5fK/4abn/05p9lJGN9nTl+bMn0vi7V6asSnaxEJcGH6lwkPrijJ194dfy2nR+I38d//+j9VzzOa48u8Mm3nucTp/7D0iG79jW5ye9KlD0UJJrCT7bKUD40lslnTsdzp9uqHe++9199xc9FfSUP9odv+hne2L6LR8snj6zblb+/3Fn97u6R9Rvs4V5LdVNNFGSn9P7soF9s9T8zKIa/dmZw8cNtm5d3fOIf7jvWx7/pl5hQ5tew/o7V1vI7ewfWvjY9srSoFjODhjgsozvbn0zObZ7sj3f+xyW/8VuvWHjl2Xs37+EdD/ybv3kAfd0/uIn7Hn8fD+cnX71uV3557ejRN7XeeoNWt61BbkFrSBRogZ0Cue8c0/ufG1zYvPAfH9Mv/OJytTB8w8feTfZtx/jo6J9zgf7CLfboTx9ZPfyu3utPLJg3HIbFHIICJxAiFA55bIPxx54OG2fP/OlGtfFjy8nKQ2fK07z5T//l3yyAHn/bB5lS3rGiF3997dpjr+58623QaUHfgwe0AqMhN7CSwIqBhy4w+v3Hq+cuPv8rDyy+8AuHJu2hLmE7KxZeURx57zWHr3nX8nfdnqrbD8BGgM0KCl+DEyMYBT2LjKYM/+gxNp4/9ekNt/nOls4ffuXH3/0VOS/zlTjIg299H0MZra6opff3uktv7r7xBFpZ2CjqE1FSXwoFeIGBh36Em5ZID3dNenLymmTbpZ9dOXf/xXRs7xge/dlrD1zzo6vfd0embliHk1PYKsEHkAghQPBQOtieoqKgFlLC6dFRfLhmo7r0f3/k2m+Z/voLH/3qA/Snb38Pr568iYnd+qGuWXhX68CiyZfaqNLXVxjZXUrVTLK6BmonwvEu+XrX5s9O71zZUvFw0Xv9dSvHfuLAd9/Z0teuwbNTqAJoQEINkvfgXXPvYTBFJgVVv4BpuI4oz5/ITnzum4/ezG+98Ikv6/zslwtQXi3wheye9VV14IeMtkkoHGFziF5bqOEPBrwGayGJ9e9JUv8eIjxfwdFVVr791Z3Wn/TeEySozjfdkOrDq/Bcw0AEXAPG7L4BSrwnlo5ie4QvK5Q2Saaz73908ujvdHVn+8s9vy8bIOsTFOp2a+ytguCKiqqoMGWFRsAYsAZC41itBR8hCfVjY2HDow4s0/7+OzMUIAYuVhAbU/IvBkecJ3qPdx43rZhMCorKIRJRSt+e2uQWi/nkl3t++su2UdEYMTcpVC9IIPiALypCUSFFBZevaVmvcQGjKYwnUBawU8EIGALbFZQVTIr6fZMCJs3fTSvitCQ0F6KalhSTgumoYOoqKvEILKuoXqGi5mNv/LmvLoO0aERkQURUFIEQcFOHn1SoKBhrUSaCjTWTzGzpOvTPotvsd6jNKoTdFQOEiPhADL6+CN7jnMeVjmJYUIwKXPDoGDESFVEdPSiH2DbbX12AEEGJgEQkBmLQ+HGFa5WoIKgkYqxtAIpgQg2QVqB0zWGlGsGxx6lLsxpwYgzEEPGhBse7gKsc1bSi6E+pphVeAkZqCSAxpkcGt/PEyuNfXYBiDERCiDGgYwQdCROHH5SYADqNKBvRSQOS0aDDbkRTjUZSM0m2HyBpgAkx4OcABXzlcKWjHFeUwwLnHT4GVIyo6PESBp/vfISvupMWPFGFc0RfSbQpUSM+4EcVJip0JphUkERQNu6yZwaKYhesmUfcZQExRnwM+BgJIdam5QOurNlTjitc6Qgx1BcrRoi+jCqcLMyUb7zvF77KAIkHFR6JwW8YHY5I1IiKSBWI4hAHkgqkQCJg5TJw9gBkdgGSGImhBsbvvfcB5zxV4aiKCld5fPT42PiqGAnRn/Piv6C//BiE/c2fPoGvSnXdq76+nebtZZPYBaV0rlCmpr2IiLgYwjh41x8PdnZuu+WYv+aN/6k+QqfC2+JZBq1Pqxj+bgwaUQEVLcpFiAHxCryqQTKy65znAFGLyj0MklADFGIghECIkRBqcFzl8ZXDe1+/HgMxelQMqBDx4j41spMX2pID8O7XLvHFS1OzvLjQaedZO7EmFbSxRmsRoohUPoZyMi2Hf/DZC+XLjxg+eTbUudhDH/nxdydp+nKbZDeYxB7UxiwrpTpAopSq4YmxiMEPgveXXFWdcVX5hC/Lh1xVfKEcj54//l+/zsUQvjeNnd/wOsmtTWnZnMykpMqSaIMxBmVtE8muAJBulpKaBSHig8eHgAsRFwMueJwLuBCogsdJwEVHFRwxeGyMZDFMRjL84V9tfeDeg+n6raKSl+d5dqKV58eMTVattT1jbEtpbRXoGGMI3hfBV9Pg3ZaryrOVc08GVz1eunBSnX/qAzHJUmUSi9a68ZVypWCFxEjwHlc5ivHYTUejF8rp+L6ymvwvPpY+uX7/tR80uvWmaCx5ktMyGalOSLTFKAPaNOzRNWNUw5oZQApQtf+JIdS+JniqWIPiYrMkUMVA1YDjo4foaUUYsfHcvQfu+0i22nptp7t4fbu72M5bbZVmOUmaYa1F6frDRIQYA8F7vKuoyinldMx0NGA82C7H49F5Nbz43wSRK4Jy1QKAAkQRA1RFxWiwMxkONj41/r0wfNlnrnt7JE2sSWnbnNSkJNqitQVl6tCuGtrM/ZA0DGq+R4jE4GumSA1KJbEBxlPN7qPDR0cIgUQCNpTck93ru3et6yPHrtdZ3mouev2ZSqmGAKo+WxEEgSiIRKLMCFBSTcdMRkMsEv/Scas5Otpo8m6LvNNtL6ysvWXjO89Vk62RWXl6jUoFJAaUiijVhO15haUBR9h9PswuUlPKmOsrQWT3BKI0mijWxydGdAy00TxcPsXj9jn7jUu3krc7DTj1ZynUnsd76CD1xREEI4K1CUmSkmY5aat7NTevrvLc5UvqDJtAlrU4fMO1qfnOrmYpkotCQpiHbOIMJNkndxC1L+GnyU1V8zbVgCgSd0HaA46KkTaKIvb54/GDnB9sMxgMCN4hDfhKLrvAe8+iYZZWGqUN2hhskpJmLVqdLvrKJ86XeO6KchGIaDTLr1mm/AbItcFIRIKfObDmfu/lU/u/95xlu2KxBqZhUaONRCKqWYkIXaX4rH+Yx6enGIwmvPD8c4z627hiSnAVIXhisyTM2Bd3j9381GeqUFphbA2U3RNbr8Kgq7FJXmx6gDEa+/ac6VOR7pO2EW6h9sIq8mJ/t4c+wv40Y/bl97BHpFbLxIiJkZ4y7HQ2eTp9DncuIlXkmWef5cDKEgcOHKTV6ZIkGcZatDFobRp/NPNLNYtAIQ2bkNnzYHe1onwJM1Mv7Zea94iAXTcU3xHIfk2TbYMEj8LUABHqEH8lgC4HR3ZZFBv2qFj7Ji2RttIkrcjz113AnFckRlO6wPmNDZ7+4tP4csri4hKdTpc0z2ugkgRt6kimlN5zX4M2eyyNcdm/aMVD/gKlbRGpBZ33cLNn55s967+3iK0aFim9x0nPopnsMdP94MydcgPSzKy0RBJR9BLN8zcNGK94WlsZrcQyLQOT0vP8mXOk1lAUJZ3OiHarTZ7npFlGkiQYm9SMalilmqWNRilTSwGlsD7EPV9S7eaMe/UPe6MQczD2widRiDE2th4IwRHuCmyf1qw9uIiapQLAiz5kH4MizJ1xJDTmhQgqCjpGtAiLxrL1sgkXr50iOxFjFHmi0QqqIOyMp5w+fxGUZlI58nFBnqe0sowsTUnTpAbKGIxpzM/smqEyBqU0tpiOmuuv5lphr1HtuoX6BGYOc+5Em9QgxoiEMHemMXiiiuy8pURvWFaf7uwCRJN3iXqxibHLnDA7rtTRSknEiNBRluJAyXO39JmEMa6YIiFgtSK1msKDC8LmYEiaWNZWofKRaVUxTkqyNCFLEtLEkliLMQZrzRwsY/ScVXY62EEb2+Cj52FvLghRu8ljDMSwPwLsNTOJob7aqLljVQuKjW85QzK+ht6ZrJYFsQFD630MmjE1EvESiBIQacK5RIxEcmVgyfPkLRv0GTDt95lOhlRViQIyqxBt8CimLnBpu4/WmpWVVaJkuBApncfaisQYbLOM0fVja7BGY7RBa4XdOneKVncBk6S182qc1NzcpKn5BE/wbh9AcSbotMbYhCZ3mzttEanBPuA4+9bnsH9wPe2+bbSTzJsqghCRWhKJEETwEmoGNSano5CgMe3AQyfOcN5uUm6PKcdDqmJCWZa12NOazFp8VJReMFVgY3sHoxWrq2uIqp8vfUBrjdEKozVa6RoYo0mMrp/TGnvqqZOsHl6ns7iITTK0qR1Uk8fPazIyq7VInJvdjFFKK2yS1Qmp0nNtMXNtSkF1zZSTr3fccM9NtMaaGGsRKUoREMIcIPYxiMYxp0phk8jnjjzDyeQcbqvAV1N8VeCqkrKqqHsEGpukBIFCwdh5pAiorW20grX1Ayid4rzggwcUWqum4lKDZbRCa41WCnv+uW0mw4LVQ2MWlnskWQOS2o1MsieyzJ5HqRo872k8ERJtrTNgnwnO7ie3XOCZvgo3fupGtBPjJSBK4xWEBlBp/nbOnhhJgNQKn115gkfSk4QdRwyuLqUEj/eOonIoBYlNSPMMhSJPLMNpyaR0hEkgxG18CBw8cJAsbVG4SAhCDHF+IWcpiW5cjXnnm1/13nJaMRqPKIppnT+xR3vMFbDsO2GRWnm6qqIcT7DWgla7eVOUXcXaRDmUMFnZ2ZFT+YO9UfdYlGhKCfiGMUFqY4szcKUGJzeKz3Uf5cH2w5RuSnBlo9Brn1cUJRe3B5QukOVtFtptunlKO0vJEosCpl6YukhZloRqSisx5HmO0no3EM0FfZ2/xxgx/+IH737vQtohCQY/dYyGY8ajEVVZEvb4mzpBmglh2ZcWDLcHSIwkabJfDjQlktp51/VlVJBLyxvv6Ty2PunY9E4fg6rE1z6ImfRv0gilaBvDw60/5+PZpyilmHc5lJI63xVhezBiazAiKkOns8Biu0WvVa+FVk47S0mMwYswqiKjoqIqJiQq0MpTkjRDlNoja3Ylju0cPEy+vEJ3uk41HlMUI6bVmGK7YLQ9RIygrMJmBpNabJqQZAlJmtTdCqXQxrKzsdM8X5uomTMKYpgltUAkzw65eP/OqZ97w9qxw0u2dbf3HjeTDCh0Xa2jZQxPtp7mHvsgYz/CSh1Z0BqFQQGV8/RHE1wQkixnIc9rYPKMLE3QSuFC4NBSwcZwzPntfn0/dIyrDQ6OJ6yvrdLqLuFtgvOBEGpxqhCsThJ0kpC0O7SWVug6R3QVvqrmDtBVBa6s8BOPjxUTSkgE3TZkvZw8zxic79Pf7LO4ukg5LekuLWKTZC6k5uaJKPGyfOv3VOce/sjZH3utvT7rkH7j1FeEpixklaJl03imdW7jntYDKzvTvpVZNqPMvOYfRdgejOmPC0RbOq023VZOr53Ta+W00pTE1v7Ux8jh5Yojy4uc2+5zdmuHrdGE5zYnbI9KDi4PWFtbo9NewEXbABWws4jVZJroNAFpk860TmhMJASiD3V2XJVUxZTJeEAxnqIXNAuqzWh7SpqnXDi1xVoVWD6wvCenmkmqSAwh3br+LG/I737KE/+Jgg92JXldiBGFwmiDU+G+e9oPPL/pd37Q+4DRe1KiRqeNJ1POb+1Q+kje7rLQmNRCK6fbymllKUlSpw8APd9isdNmvbfAwaUeZ7f6XOgPGEymPHtpyNZwwoGVRVZX12hnLXy0WG30PrehRBrRqACD2MuMsuFB8IFF53DFhCpWuNUxcvE0k/6E4cYU5wKdhRZJmu4KytrxSfBhGGOg8+EfYOuuf//nw8T+ozzqD+QqeYNCUVLd+3R25idPm7PvrSZehUYlqz2Rpqwcpy5u0R8XmLRNr91hqdNmIc9JrSFNLa12irGmSURBopBmllYrpdvOWVvosjFY5OJgyMZwxGha8MKlAZv9EauLC/R6i9gHH/g8d776drI8q0+kCW+7xSbZl8wX04LPfubPGPQHZHlKr9dhbW2V5d4q61HRLy6yaj1nzm/RPzRg9dDqPNcTEaIPIXi/OTveC6MLHO8e+LOL1eidPdP6eSMK8eo9v/uyP+6aSu4sK0eI9d9HEWIUnPec3djm0vYQh6XX6tDJUkbTMRuDLaJ42nnCwZUlThw/xmJvoSljgE4EkxqS1NDKUnqdFuuLC2yPxmyNJmyPJzWjLmyhzl/ABu/n+kZpfUW9Mzu5uhRdg2etxVUVZ073efqpkwQvHD60zp2330Tv2hWGj03YOD+gt7KAsWY32w9+FEPYnh33jsd+kd9+3bt59y33PfHRJ7/17yUePn7Hh6dJZX6kdP5gUTm0ogEpEqKw2R9xbrPPNEC70yKxmqKacnBpkesOH6DTzVAaxuWE05cu0O62aOc5AugoxKjQVmOsIc0s7VZGr9NirVcynBZsDIacPO+pQsC+/hu+vkm5dgFRezTPzKxm4LXbLd70ltfN/UoIgfFoxLkz53nyyWeYuMD6+gGuPXKUZzZPMRlN6C52QaTub/mwEUUu7M3nv++B98MDcAdfmP7jb38tKizo9Ti6q6gq5UMgsxYRofKejf6IrcGEiYuoJGep3eHwUo/j66scXF6i3UmxmUVbjTYaQdCNMp7JghgV0QhiNCbR2HQXqMWyxUq3w9HVZSrnsWpP6WEfay4rb8wy91n+rRunqY1maWWZxaVFrr/hWgie6ByrBw+x2d9mtD2hs9CuW0bOE7w/FWO8qPWV61BWQeqKpRDCrdPSMYtek9KxORgxmpaMHTgsS1nGUqfFkZUVVnsLZLlFJwZlVL00mKZwr/Vu2Vjr2lSjFrRRRKvRVmNTS5ZbWu2MJd/Gh1iXE5W6esXwSqDpPWZXpxhxbnYRkBBIOx0OrKxxbngB7zxKKUIIxCj3I2oscuUSXNsIRsWDVeWOVlUFCJOyYmc4ZVRUjKtIKYZ2bulmGSvdDovdNq1Wik0t2tTMqVmj5uCoppsxa1lpBVHXil9F0FoRoyCJrmcJmiaDfXHxiy9RGLvsuX3hT80Bnfmzhd4iWxc2qcoKrTVVUY2M1fejqFX3FW4tFQmijhberTlf9+R3xgXDacW0ClRRkaQJeWpZ6bZZX1yg122R5hZjNdqqfeDM61vzPGu32KWibhS5IFqjYx0ItKkBEpHaxK4GkLqMKZe/Ji8CaQ9YSmGShNxkVFOH8lBuli+0lrNHYoy846f+8Mr9kemUmGW3lZXLK+/ZGhUMJhU+CiHWvYfEGhbbLQ4tLZJnCZ6ITSzKqoZBe5gDKN20dS4zFGMUWoSo6txLTGN6cdZFkbogPb/ql629YFzttX212cY/Be/r1E0rUpXgp55WTFnVSz7fSqedfuuK4PzcD9/Fe//3oxDDbWXl1aR0DKeOKLu1O4UiSyyr3Q4HlnqUwfHAE09SeFdXBfeYlVaqqflo6hLzi89D67oGNCuYRYl8/qlnKZ0jTS2aPW/8Ur5oPnKnddPb3m9dWmuCjzz5xNOcPnWWWcfWGkssAjYmKIUJvlIx+iseezGLvP+fvq4bgr+uco5x6eucqBGuMza00oSVboduK+Po+irTsuL37/80Zze3EGiqgk110BqM1k3X6+p+dmaWrSxlNJnye5/4NKcubmKdc1TOUUwLsiyj2+28OII1t7Kq6PeH5K2cNEkwpg79VVmytbHFs198BiXCy28+MS+0aa1RUw0GgveTEKPnKhdCqoAP9JxzB4vKU7kwV8/SBAdRkCcJnSYZbbVS3va1r+RDD36e3/zQx7jh2CFuedlR1pZ65GlC6T3bgxGV89x58/XkafoSBFC86c5b+f17P8Nv/NHHsff+yb0IsLjY46bbbv7SzR2luHT+AhfOXSCEOGv2IDGS5xnHjh3h4PoqBIeb1oV0BXTJwUVCCKcRKolXvgDjYcRo6ZRVWJ1WnhDjnsae1JGnAco09XMBlntdvuutX8/jz53ikZPPcs/nH0YpyJKEXqfNdUcPcePxo6RJ8hcZuaSTZ3zHW17LK288j/2au15D3qozcrXHIavabpo5wdpc0jTl5a98OTfefAOTyZSqKEGEPM9o5RlIJJQl3kmd3IaARCHRluADIvGJhaXlYjTYuTJDpx6dmJWy8r3S+Vp3zbqf1OwhSj1tFuuyxCzatLKMr73tJl5z6w1MyhIfAqm1tBumqSZVuTzgXO5WpNF7WWJ5xYlrsEvLi3vavPu4htKm6SrsEYsiJEnC0mKC9Ophp9iUXqOvC2xIPd8TvZ93OmKIBcLnx8P+7vEuB8g50kQdqrxPXYhN6bM5icbMVBQq55hWtWsIIWKDIGb23Qyr+cI8n5yvl5AxV/K/UQQdZ72sPeiquSMWFGpfPrYP6bjbEp6VSEVkDk7wfs4iEXlBkM8icPe/+/BVfJxDQliqXDBRZrOeal7/Mc2aliWjomRSVPjKExsmNa1PXkrbXR6NrxSx5zxRl6cTMfKiEDX7wD0Cce/vIrtMkgac6F3dJpqBh/yJRDn9pezf+0AMoRdiNApIjCYxdc/dzls0TbCYTBlOS8rSE/2usLucK1dihrzE6y+ect3bD/d+XziXGImunrVRWjflD7Xb7ou7TcUZOMFVBOfqxyGC4qTS+r/YzPi/86//4OoAhYj3sSUiOjEzHVNzIgKq6TmW3tMfTxhMp0yLknYnw0RTgxRBtLyIFdTTmlRl3b5KUjvPz3yoGxNJYvfk7KrZq7G3vRMjbjym6O/gxmP8ZEI1HFAO+oSy3O+n9nY6ZmYWQ80cV7OnqhxPntlg0LWPveUnv/3xa9/xNS8xlB7xPlgRsEbvLqtJjSa1NaOMguF4zM54wnBa4kpP9HVeFWK8snkphfeRzUtDLp3vMxoUjEcl42FJf3PM5sUhzoX9vkkEe3k+5auSwbkztffRde8ra3dYPHZ8nxnuHWiKIdTbkpyvwakqQuUYjKdUqefgzYdssrCk86WdlwyxIUQFzBt4M0c90ygidW2orAq2hiP6iwssF22yVoJJNCFogpEmx9plUT11EukPJzx16hyHlhfp5BlRhAvbA1Z7HRaXOySJ3pdK2XlxrFGqeW8RXxYMLl4keEert0j3wEFM3ppn9LvtZ0GCR4LfNa2qxFcVzlUMqykLKwlpalr9zUEqMP3SIzZCFDEK6hLrLF1oItmsqx2jEKrAznDA9miRtYWCTjvHpoZoIiHUpmmakww+1OxQsNDJmZQV9z72VN0cRLHc7fCyQ2vzCzD7NgoaBqndAUeTZfSOHKN74GBdO0lsM9ygalNqqFeH8GaKwzmCq/BVia9KQlVRlCU+D7S6CRLDQlUUuYL+l2ZQA5CqW8h6T041q0OpppsRRSiKKZf6fdZ6XXqdOqPXVhN8/TcYwfvIhYv9WthaTZYa7jhxDam1bA3H9No5Nx87zPpaD231HvNUxFm5Y2+pgqZUoZue1+V2rIxBQ+2EXbXLnLKsRWJZ4qqKiRRkPUO7m6I1S75yrauNYV1z5Ghz+Hqqsx4/EYzS8775fCB11msTiOLZ6u9wqddjsd0mz3eL9CgIQdHvT3jgoacZFQUIrK/0eOWJ49x12wlG44I8S1hc6pB1knlKs7d7bGdOdpaAzkC6koMIIbBx6oXaxzhHlqVkWYavGtMqS1xZUroSlwc6izmdhba3iekG7ztX0yZJUn9eN1VEpVVi6l0QM4B22UUz7bHLotKVnN24xFKnTbeVkSQ1QNJMyrrCszkYcWpjm9QaLvaHbPZH3HHjNVxzaI00s9jEYOzeWYTdeyve1ztwZur5CuAopQgx8sJjj/LsI48QfEAZw023vxyrFb4sCVWBK+sGo2tFyRfzuHxwVS+urn9AYviMiFy8mpw1Td/qllXN00OtQlILVN0MEcz9UxSi1H6j8VeICP1hn+cuXKCT1wAtaIVNTM04URxaWuSpM5cYTSuUmnKxP+TkuUvcfuIY3/CaW1htd/fV/+Y1oSjY6H39JRoHLHsrg1oTY2QyGHD6iSd4/okncc5jrWVhYYEsz3BFgZ+ZVlGK5Gpw8LZrP1X4wT0LSytvWT16ze8gfPJlr/jxq/qepO56qHf97or8s7sHKvj66ukmxZilDUrVY3g1YGa3sCWe8xuXaKUpqbVopWjlKUopirLCGs3b7riFSVnx+Olz9MdT1pcXuP7YOp1Wtoc1u6YVQ71sqEqYbbRpBhfn7Z0YGe/s0L94AVzF8eNHyVoZncVltFb4ZvTNVSWuKPHOPZIud3/q4M3X/9kj9z549vD1a7+KYspLqNXEzl5PMFqHmZ/Zm6iiaqcJsRkGBbEy75UVLvDsubNN3egoywsd0qRuIW8Ox2itGBUlSsEbXnUjb7zzZhY6OSLgfdwFp2FODEJwEeuLKSKCyaSeMDPN9KnUX7q1sEB7YYF47bVUoyHDCxcohzv1TE29w7iOXt49E0V+otqYfPSJ3/o43/a+DwO/2/8L7Xut/Z988Hs2AFPuBWa2t0Kp2cS8rif3tcZaQyJ1KTaKUDjP06dP4UPg1uPHWOy0MVpxeHmRJ89eQAGvu/UEr7rpZWTWUlX+srn1WTYh+MpTFA5bjcfYUI/2myRD2XrXz95SR62Q62msfGEBXxZILOu9tzU4T0iMP3rr7UsfffzRHe5+34f/Urs/XKgZkZhAFCm10s0AE3s2nYBWutnwUo+JWNFEY4hWGhUtlC7wxdOnGRcFtxw/xnqvx/G1ZQ4vL5JaQ6/bRkXwZWhGDWe5Zd2aDj5QlZ7xtGRzMMKW4yHRO6JzmLTCpCna2rrUgewmnzOtU0znwAVXSfD+szHGHz9w8NB9Tzx6jrt/+S8Hzl7v+MWBRpSMtVbRaK1fVLJo/JJohUhdJrZGCNGQ2IiPumaTD5y6cIGtwZATRw5zfH2NXruFQlG5uqBpotnXvopBcD4wLSq2hyNeuLjBs+fPY4vRKISqMrYqMUlaD3MmzewPqp5DnOVXZYkrpriyxDs3iiH8dozybzvt5S+eP3eWd7zv//yVtj0+8sTTALztmhtRCaeUUqVSqqUbIC4vxyD1REpQzdhwFEKshy9Dk49FgeFkzEMnn+HZ8xc4urrKkdVllhe6dPOMpNkfhwg+RCZlDcy5rS1Ob2ywMxzVjUNXVj8Wvf9eV1WvNjbJjbVoa5uJV/YUw+pNZ8G5cQjhQYnxP8cYP6S0mgz7m7zjV/5q4OwjkoEY+XOreAG4GZo8rHHQewcqaj9Vl2ZMFGw0WFMXz4LWhBgxupYn28MBO8MhXzx7hk6e0221aGUpVhtCjEzKknFRMC4KqqZyUQ90gt04e+b9q4cP/08d4+uC929SSr9Ka3VcKd1DoSRKFIlDifH5GOJDIvFjUeRBkyTbcVrwLb/0oa/Uf9hBWhrfkufSAT9D5EdBblZKtZVSmRKSZpvG7r+MULr+nwRGY8JsQrUGxmpFFDWLNYhA1VQht4fDfZty5Eq7U/Z0UgD40E+8HYlR2STpKa17Sql0NuwsIqWIDKKPQ0De/r6vHCiX3977k7ejW6jpY2EJpw4Zow5prQ7FwFqMsihRlgVWYowrIcpyCLHjfGgXlcvKytnSBVv5YCofdOWjckF0iFE3wym6CYgapeb/zqBhpmreo5SimZ1GKf4/uv3Kz99G5wDqzOcwk52YVlOxwYkN3pvC+bQKrlW5mLsYMh+CHU2jKV2wPogREYtglMIARmllTV0wIEZRIugo6KbfqZK62aj529vf3v729td5+38eUfRd4NshggAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwNDoyMjoyMCswMDowMCWeld4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDQ6MjI6MjArMDA6MDBUwy1iAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiKissPersonWomanMediumLightSkinToneMediumSkinTone.displayName =
  'EmojiKissPersonWomanMediumLightSkinToneMediumSkinTone'
EmojiKissPersonWomanMediumLightSkinToneMediumSkinTone.defaultProps = {}

export default EmojiKissPersonWomanMediumLightSkinToneMediumSkinTone
