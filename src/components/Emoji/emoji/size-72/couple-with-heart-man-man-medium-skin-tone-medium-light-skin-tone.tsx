import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartManManMediumSkinToneMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-man-man-medium-skin-tone-medium-light-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAh0Psfms8AAAAAZiS0dEAP8A/wD/oL2nkwAAI2NJREFUeNrVnHm0ZGV57n/fsHeNZz59eqLpZp5BQBFUoldBjETRRGPUBGOyvDEavQ5JjIleoyQOiUP0ruQaEzVibvReo8EBRQWjzIgDgjQg0kAD3XSfPt1nqqq99ze894+9azjdYIbllG+t3dV1qtau2s9+3+d93uErxU9gfeEX/oQV6egj7ZbDJvXYWTWTnpbodDoiwcVidyTctKS63znDPWvxxcmv809fvu4Rz3PWYU1u+oW9fGPXByY32Nkz66b++EQlG4IEk/nu/jzkt6zG7s0PxN0PtlQjXnjNO37s16Le8IvHPwbQCCilvFKqp5RaBRbxkmGUvP2Lt/87gfljnlQ7i9vdDzats9MvnWrNPL+9ed3RduN4Q7VTTRTkQOb97uWlbGHp5uVs5YMPLc9f0Ujq+enfePmac33t/PfQlax+uFp34Ux96mUTc7OPSzdNTKjJukFBXMljsXux2929/56lzoFP7nP7Lj1x7JRd1+3/Bhde/xf/5nf9wTf/HG1q+GLVioQxiTIeY2hKDDVErAgK8OrPXnDWHgGLiIiIF5FujHE5hrAgIvdIlFtijLdGiXdGHw5EdHjPV+865AMf9/JjuP7W9/G9+j1nzNrp96zbvPkXGk89WqsTZ6CegNGQAFrgQIZc+zDd6+9d3ruw56+3hwfeMeHbK+d+49VM//LhfHbp99nD0tjxZvMbN81s+L3xJx01Zp60CSbq4BW4CEEgc8j2eTpfuzvM73romoV84bXTdvqWB90DPPmat6z5fvPb/4jxtmPn7lYtRLaAOlXB6Sh9klJqo9Z6EqXaSqkaSCICIF793eueG0GUiICAiBAlEkIgOI9zhbiiWCzyYodz7psxhKskxuusMnsjEv/88tK6tp/3d/TIHzOtxz+8btthZ7R+6URoNWA5gAe0KkGqGZhJYFrDLXtZvWx7cd/e+99//eTOSzZ0Wis6FxbTbOykfNNbt27a+sqpXzk5VafMwXyA/QVkHnwEiWAUjFtkpcvK5duZ3/nANxeKfS+r6/qtp3391QDs+Oab0FpM4fQ2QZ2ntD7fmPR0W6sdlqS11CYpxiYorVFKo7QCVImqCOpDr3l2KF1MKqdT5ctKDdAXEUIIuMKR9Xq9bqdzR54Xn5cYPpkY+4OndX81arEzG/TcxybHZi6cevoJ2PEW5AKpAWvAmBIgpUGAuoVtNfjhAouf+G5+18KOv/rGuvveKi7KufuPePMxc0e8fvZFp9fUkbNwXwY9D1TA+AAhlkC5ADVNvrDMga/dyeLqvsv3FHte0pyyC0dcsqSXsvTEIOpiY9OL0kb7yFqzZdO0jrYWpRQyuEiQ/jMZXrp55plHvkVCUBIjEiMSAvGggxjRQJJY6s1m0mg2NhprnhxjfHrhXXt7evM9Z7snP7dtxl7VmJsw9YkGqgjlHUaGh6osyWpwAksRtrSpr2vbxr2906f367gxG3/itqktr597/hkNvbUCpwigAQklON6B98NjuQudjGKxh2ThCILcN/PB/Tu6y+kr0Ol76mOTF45Nz802xia0TVJQeuApEqW8bonEKOVz6R8R610xihgDHKWytIFhKVCglEZrzVi7rRq12rFLS8uXuNXmswNuymqbhKzAL6yQrhsrLypo8AashcSWdz5JSqsKEXYWcNgs0798Zqtx5cSbvHjVPv+YVG+cgfsziLH8Es6XwDhfgVQ+ivPE3JEdWMUXDq1s0phKX+UfaD8/nWk8uTE2mSRpHUEI3pdglObyI5dUHmV94R7xhUc8SeV+Sqny0IpWq26Ua5ydZCkCuJ7DZQU2K9AiJTA2lmCEWD73sQTLWjAW9nnUuimaLz69hhKIFvYWEAMEX4EyelTAeI93Htcr6HZ79IqidMOgT07yqZPH102URucdEsPAMvgRAPWvv/8G65w7xAeHJxoBTIa0pFRJZOWDsDFspC51fPTooHG5I8kcVkDbWHGQhSSCCeXzwpe8ZE0JlreQmPJDXA7OrQUmDK0mek/0Aec9rnAUnZxuJyNzDh0DdBWyJyHGiC8KYgiIxPJaRNbe/IFBMALcgI2wzvnhy9WLse+DfX/sAyVDgu8DJUowmcWIJiIQAr7r8L0CHQVlLcrG0op8n6wrwta65CSty+dGlyeOsQSkf8TyUXzJicEHvPc453GZI1vtka3muODREtFeKPYWuEwIzhMr60HkUBcb9ZgBUkOasT74oQWNgCExDoCKIiWByVogASKCKyrzjQGCxncKfCNHB0ElEWPN0NVMAG0qYKqj4rdRHqS6IGJAQkRiCY4PAe9D6VqFp+gVZEs9il6Ol4CRCDHgc48vGASaPhH3gVrrTgeFrj5IItgY4pqX+1YTKxaPAjHG8hgBqjwgEOj6LkE7VNSICoSewy3nJRZpRCUWnUgFkAYdSlB0BUz//4NvMgSoBCYSYgVOiHjv8YWnyB15JydfyfDO42NAxYiSgA8rONeAqMrIHP2QOkT+XQQtIthDk48qIisQUYcgK/QtKhKi4CUwHxbIpUddW0Rpog+EToEX0LWITgWVSOlqo66lRgFiCJJEqGRHiBU4sRSv3gecD7jcUfQKik6Oyx1BAjGG8kaqgt0Ld7FyR8LMhk0k9Xp5YSPcujb2qBHvOoiktdYHRS8QDVHK6yjfV3EDEaJGVKyQjEiEBdnPalimYVqIKjlDikCMDikUUgNSIJFSA2k9As6IBZmBGZcuHgIhxtJy+o8+lK6VO4qswBWl5fhYfq4KQs+ssKv3EHtvcRzYuMDMhlnaU1Ok9UapmpUeRBzF0L3VGk+rXMwYM/KHYQTTo/yjIlEpglIoFdcoJhOFrupwf7yfuThHVAqJERUjeEGih0CZQyVQhjYZcS+GAnIUoIo7QmU5oQLJVdzjC4f3nhADIZYupGKAKHRmFijSHr3FQJHtZWlhmfHpNuNT47QmJqi32iS1OjZJUcZUkkU/gpsJNsRY3cxKCPYfRREloiOVKUVADzSQDqUmEoEgnrvUD3hMPAmrWsTgQVu0ElQE5UqyxSuwlED03WoAUHUoKd1rjZov3Sx4T/AVWCEQJBLEE6InhkASI+iCcPQB6tpQdCHPAt536a7mLM4v02jP02w3aI61aLRb1Bot0nodU+VkWusSLKVQKGzhHEZrdHXhawQhpekbEbRWZVCJkRhV9f4h2rvYxc74AMfrE/AxICGgVERrQQmoUHFLGOGbvhWNglMBpEKZc5UEWwEVq0PKI0SPD2UYVxKwQYibO7AtY3JPi4ZKWCy6rMYMlwe8j2Q9x+pij1p9mXqrRrNdpzHWotFqU2+1sGm9BMoYlNLYGAVrNdYY9AAohuG+72qxTFgjEKLgQiAvPJlz5IUn956vcxPH6m0kqlmG/BhBRZRUeZio0hDL8DfiYlKBVEWw0NdBJVlThWfpBwcZkrdI+Tk2CmkS6J25jGpExluTtFt12nmbrMhYLXqshpzcO4oQcEWg13N0VjLqS11aY13aU5O0xidotMcwSQ1jLfa2HQ+RGEOSGKwxJKbMtcpMtwrlMRKCDMJsqCJYjIKUdkbhHbfZu7k9uYtzzGPJK9LUyoKKI9GhQmV4F8o/h35S2wdFSmBHEsfYPypL6t8EHQMNgXjUCnJsF/bBxNQ66rqGzzPqeU67KHCuwHlHLxT0Qk7mHc55im6Xlf1dzK4FjDWYxJLWUpJaip0cmxxktVGE3Jf0W3KNRiuNMZrUGowpQbRGY3QFqLUo4J5dD4LkfF1u5KR4NBNmGgkeVIJS1cXryoVQI9FiVErIMPEfjbYVQDICUB8cFSN1FEkzZ+XM/UTrUcHSaI9hbUrSahG9JxQFPs8IRUHbl5wVgseHQBEcXgJePKEIhDwSOo5AgX3scccOxd9B4X5UevdJS6kqWR3RDyFGmrWU4AO75GGucjfyQnshXiijmLYl/8iIxFcHgXNQRWEoFte6V6wUsaqORIS2Uhw4bg9xc4brFVjqWJuWNR9tsPXSaiUGonP4IifkOcEVRO8rnquUdhxJaAG7ecNMqTmirAGKSimPpHElQFoNop6qrs/7wEPzbfbs72CN5lp3Myf74zgjOREfS+kPesTV5FAwRhLFQZpRJZZ96xGJIKVaJkZMjIxhcBv30zllnrqqkXdz2slcRbLV9zUGrQ3oGqoBKVKmL8ETnCM4R/T9o7TOMjUR7Mz6seo7D3XQoXnKoepcohCDEH0gBuGIzevZte9hrIEOHS4rvsIWu4n1aqqMaJgSIMJIWnEQQAeDM8o/lbJWseQmLZEGmtqYY+9jH4LxgC8cMYPW2HglRPWglIrW1c2tpEpS8mDSN4ZY5nsS+p9VgmRtYtbmiSNexUgYL61rGNlikMoiNChhw7ppxlptur1VrNbskPv5TP4Vfqv5q9SjKq1IjQifgZqVoUpHBq44qPhJHOSFfbfSEklEMZFq9p25C7elg1aaopfT0OOkSW1oPQOQVKXxSlHY/9toreuQ8ofI2ns5SpuqCjQhRHp5QZYXxBhLkTh68uqhWa9xxKaNhFASvAZu8t/i6/4mxFQcFH15SKiAOPhxeMTKaspQXkW1KOhY8s6UseSnrNA9Y7kqtIMUionGdCX09AAcXQm/KBHnc7wviBKH0bQ6lCrdURmDNgZt7SMkq9Xq5QW33bmDex/YTaeXIQKNeo3ZmSk2z82yYXaKRppWJy6ta8v6OX5w/068L1AoHI4r+deV05KT9m+Uma0lF1UCSI/Wlta6WT+ch36dWGKVpUeMCC2MmK1+tXtBry2I0sHgioKatEhtmZgqXVpKVuQsLh1gaXmB3C0jyqG1Jk3rTExsYOOGI0mS2pomxeh6RICUUux8aA9fu/67lPWiMhMOItxxzwMoY1k/O815Zz+GzbPTSKWZxppNNs+u456HHsAYjULR0csP3dO4921zzL7Z5OqEEqR+LNcjGWK/0idEIl4CQYZCsAQnUtOaptJ3LD9+8TMyE/+AeamJCDETmqo9Ug7WzO+b5/t33EpWLJHUoFY32MSgtaLbg6XleVrNCWZnDxupIR4CkFoDXp+cJ8fbHHn4JqJErDE471le7bHc6bG42uXunbvYODfDYeumB6FfK8WGmVnu3b0LkYjWCqvMvi+l//KFUzk9a0Xzt6bw6wYgaTMo9UaEfmXKSwlQ35KQiI6CVZqmUQ8XMfyhf1Jnnk54lYjUgveoQmHTZFAZUEqz88EHmF94mPHxBvVai1arRaPZIrGWKBGlNI3m2COWPgYA9V1wNFKJCHOzUzzngicNwq9QhvPF5Q4P7d3PwuIqx27dVHU71KBM2W40qNdq9LIuqkxu7/tvpx3e+brs+txTvrVxQ0vUO7Xz4zEElEREKQKCH7mHfQuKFTcpiSQK6lYvF2l468yXX3F579rfOEbFuYUQwkQMAS12DZegFEcdeTTtdouxiXGmpmZottpVuaOKQVqjtRl88mgu2gfEHkrkCqka02likRjo5oFeEYgCzWaLk49uY7RCRBFDZBRkrTWpTVgVIVEKrbj93R+9Ln7wnBfxwIbVD2/d1ZptdvSfiHM1FwNRaQJCqFK18ntV/FMVzhKgbnSW1/y771nX+cjSe15M/bT9eyVdvxuRIwGU6EqbDb/M9PQ0M7OzJUOESHRlLUkbg62lGG2GunX0IkYA0aOmpdSIUlaKvHA81LHcudrkmgc8N+01zLePIZ85gYXc4JwbvB+11lUr0dmLIrcetXmOjy69l7n5pNjf7r0v1/5vlVE+SqCIBUV0FOJw0eGjx1XWIxKxCupGe5+Ev9nd6r13biEt0q3fYVPyleWYr9zaL8nq2O+yqEEPT4Aiy+lmil2dOl/93i4++Y27uHr7PPOLke5Kp4yOo5Zz0P/1EBi1BqTCeRbtOu4txmhMz5HWE/7xU5/iAx/5GA/mKcdf8BJ6zQ04H4ZZecUhIQohRGppKo876dRnP/Vx52w748RTuWzb95jezeoqvT/1Ol6aGB0VscyBYknKXqo8S0rLaRot0YRLD5jeJeuX0g4vvhST79B37vzvz3Hz9lSXO4IPIylMv1CjKLICNXUku9KtXHvnTuz4DJdd+a/8z//1Yf73F25kyW4m77m1bjX6fzWspR5STSuSCXpjh3PFl7/EE84+h4uefRGtmmHXzh187K//gqWVFU654IX07DgSZZBaRRGcDxQ+0Gq0mo1a/XeWVrqv+8QV15s993+L1519LS2SA6uJe3O08vm6NRglZfiXsuCuiKRK0bKaaMNnFpPsTRO+tvi8X7qBhb3beGjPM48scv0uivoTi05O3ssJIazJf733qInDqW07kw999KOo6Hjhiy/mhKO30V1d4qovfYYrb/gWeupIDm6eji79SNX8ECPTR57K3ffez/a7fsAf/tEf8Oa3vInlboa1hrH8Qe6++SrWbdrK+pPOoQixKnpU4PpAVnjqtToiwko3O/bILesbUYS/e/uH+cjpO5noJbu62r8OY77asim1SvYnQEMpWtYSrHzlQJL9fivUds9c+Qqufu3/IevVyLPa+qLnN2o0ecezutTDFWEkyoAPhsmjH8v9O3fyne9+m0986p/57Ze+mBu/fQvaWCZrnl3fuQLGN4BtjvTYHwWg0dxLVMLslqMp8i4SI9+8dTu3bL+bGMFoxTGbFC3dBRGmNx+BTpsjXVkoQiTzQqvRpHCeXl6sZM5lMZbvedW7/ifJ1y+mpuo7MsNrtDHXt01CSxna2tI0KV7Fa5al99pWkd43e+XLB188xkgILPk8z4gQMsXyUoYr/DCPQ1CNCWrj0+RZF7zjwT3zXHXdN1nulKJ3w6TmsIkeptbEtmeR+Ag6qKrjrQVHIrVmm/HpOU49+VQ2ti3TNUFrjdFw1rGaJ50xzuHHn4LShvb4JLV6fU3zMXNlc3Cy3aKbFeTe79w2t85nRbHm81tXvJh4YN/25d7iK4q8e20SAtYH8qJ79WK2+Lv1jmyfuerlh6ZBsBScm4/OgTesLOZV8zIOQKpPzIA2HLZlK8du3cy61FNPSnvYNKP4xcdbTnjMyYxPr6M2PnOI/ulbo13TF6oyeo1AcDzlvAu487oL2Pmtz5KORY49ps4TTmnA1C9yxOkX4PMO3V13g8sG5wyxBGis0WKs3mC5m8UY452Lqx3e9YWbDrlJ96/uZWtr7nt7i9WXjdvGW7UosujeMqGbdz4Y5h9J5qNgKYawKxTFCamukfci3oXBKAuAdiv41QU2bNzExS/5Lb7y92/BsMjMpjrnnllndvpwZs/+PeqNNl31CA3WChO7tp1c3iPXW+HBmy9n9riz+PXfeS3fOfZIurtv5LDNNdIt5zB5xPmsPHAX+++5heVd9xKKvKptCSFGNs5MMdVuVnzkeyj1g/go3czTb38HnzjnVVx8/NV33nzXs3/TBvjA/qt6vzb+OJ66/f2PhA9Wy0oR1P2+yJmsN9gyPkmq9LCOA/jlvazecRXp7Dae8uRzmRt/J/d953JmWgeYO+I41h3/XKY3HkP3oVvJF3Y8Sk1HUNd84JUBJRp5hParNiSNNiZt4UMcVEBcd4Wis0zwvqrUCdFHsk7Bg3v3c8eDu5lut9g4Nclyr3d3VhTPALXjkn+5lh/HuvptLwSlXmesebfSRi3v24dNEibWb6AxOUnSbKFtUmb5SqOTFNMYJ2KIMWKtRSsQ3y0rnpWqfoQisAz6Yv10oq+DUGWJMl9dBDlAHBTVhCj9cRg9mPqQSvtkhcOHUBbynSeEeL8P8WHzKNnyf3qJfD+GmGuhjqLsuHhXDSqUiW9fB4t3+NX9A50XFESqupAx/T57VQiMI4Mfgu6XWkOMuCLgXRgZUKhSj1EJr/TaWCjDglrhPN28IMZSnboQ8DHc/o7P3dAN/8bAwH9ola2i+0TibpGyRlWOxTgk9IXmQX34NXnWsBc/oJgQCEVRNj2NQdXSoVDsk3QMkaLnSsKTteF/+HyIzOiUR6ysp1sUZWZe8k/hfLjhzc99Yqm4f0yrqn89KDHeHkMYhH/vXDlcVXERo5McI7X2gyPVABzvy6pEvYZq1NG1FOuLgDaKGARfBPJuQQiR5nj9oNxtpIg/0p3ok7P3JUC9oiCK0MlynA+3uxCuVcD7rvjWj9G7HL1V101r5jM+yPkxxJpEKQvw3iM+IElE9LC+rQ4uqfaneUWIztFdXEIpqLXbZTXSWsQ57P75ZawxhBDpZjnLqz02zE3SGKuNhP9DSX5Qt45CDBHvA928IHceEVY6eX4gc+6DtWTTQ7nb9WOln3Pf9M9c/dbzUEo+V+TmfBGeAkx752plK8chIUGMQYkaWpJi0OgcWFWMBOdY2b+Az3NaE5Mk9VrFwRH7zTt2kBiDD5GVXoY1mrl1EwcJJ1kzNjOYg6y4J4ZIUXhWS6vxwFt9jJ/2Ie7O3U7+4Zrt/LjX5NRtfORvPrRw0fP/7BUxNjbHkL43OP90X7lK9AFlIqL00IpkZJJNpLSiiiaCcxx4+GFWFw+QpLWqMRGwO3bvGvimVbBpepy9C3spYo9Ws0Gz2SBN07J1wuiIXtnZ6LtXN8tZ7WUEiQsIV4Ug9338ujv5Sa1TX70HuIhn+tMXi6y1qLS/NsbwdF/khKLApCk6Scqui6jBZNmgkTIyNKWNoTU5wcrCAsv7FohxOOJjN0/WCTGitaZZSxhrNcldzoFFYWl5BYUiTROmpyaZmBivQqEMjtJ6HCu9jG5RgHCLUuqH/JTW09/xXT7/mqcD3CBRVn1RtH2RY1wNnZTFMZQautqwUzWIatoY2tMzbKnVWV1cpLe8QowBm6bY4485ooKxbOfoqp7bNztXFHQ7Xfbs3cfMzDRHbDkMpXQpBfrckxWs9DJ8CKKUuhxYvfTaO/jprQhwiyC3euef4PIMW69jfEq0Ft2XKNWsk4pl9VKVoZvgPD7PkOBpNGqDSqoI2G7hDw4RZQcjeILz5XSX9xTOMb9/B1oZtm3eVJJbiOS5Z6WbsZJlhCj3A1/lp7yazT10O0fsg97lwfsn+LzA5zkmrVWKuj8UNQz3Cnjgvp1875bvk3W6uCIvR4ZDWDOnYD/51W+v0VK6skRrFLWk7AqVc04lM09OzXH4ho1EL3gXysjX69ErHFHksz7Eu63RP1WAnvb22/jCa9cD8hmJ4aWuyI9O8hxbyzFJOQwl/bnIfoVHBI1w2533cd9De6tm6KHntsvdsGYARSvF3OQYZ52wjQ1TbXLnyQpPXjisNRyzeVM1yB3Icsdyp8dyt0fhw04RuTSxJoyS3E9r2bTDEWffcOfdV5/3D965txVZpm2aYpIUbexwrK7qwsYYmVu/juc966l88crr+OHO3XgfhvX1yoLUuUdvDD5EnSaW6bEmRx22jpOP3Mz66bFBKGc0ckUhuBKcxeUuuw4ssndp2WfO/2kvd++opzb+dPlnuC5/3VMBOUwk+X9JWj+nOTZGfXycWquNrTfQlTUpXe7+klAW2VZWO3z/9rvZfte9PDy/n043I8ZImiZif+eicwkipNbQrKckxiBSuo8aQXw4+F5qnm4vZ7HTZam0nq9GiR9q1Gz82DU/G3BKjghE135QmeId3hUfybvdWW2r0RelsAgiCVqbgUXFEGg16px91mk89oyTWF7p0OlmiAhpmqDbacpkvU7DWmIRyXsOXwy7BFJFK4lC8IEi93R6OYudHgc6HXpFcUeU+Gaj9fzPwrVG14Xv+QbKZAj5l0TiX7g87+WrHfLOCq7bxWW9kcEpV7pQpZh9niGuYLxRY/PcFFs2zDA3NV7uWCo3koHSCpNojK2mN0YEoXclOKvdjAOrXfYtr7Dcyx50Ifzh3NjYt2OMfPy6u/hZr19631VA4gX/NyH6D+VZz/dWVgcghWoMrz80JSIoY9FJirYJKAje46u8ztrUrN2COTphFvupRDnR2unlLFbgLHZ7e3Lv39DpFZfHsMKlP0HV/B9dz3rfVXzhted1IFwSAhNF1vsNEFN6QsTWAyYOR/QG80O2GuIeUdq2PyZTzgIy3PUjZQEs+EheOFa7OQc6HfavdljuZbudD2/Ivftko57IpT9L3nk0OlIZIvUF8H8QAy7vZS+VEG0IntQVJPUmplaO+qpqJnq0rz8o2nvnh2F+sOtZCD7ivCer0oilTo/FTpduUdzuQnhjr/CXp9bEn0dwAC58b1nevfz1T90H7g0icV9RxFeEECZ84UiLgqTewNZq5UBDBZLSo9McoD7+e88LWqFLKVi6lAuB3DmywtHJclZ6GatZ3s2d/xcf47sePrD/trmJST7+c+RWP2pd8YYnobWrBd94lsTkjUolj7E20TZNSWo1bFq5WzVMX9any2qRes+vPz2YcrIRkRKcwnly78iqEmpWuNsFeZcP8TKt1co/XL39vwQwo+s7729x+qs7XPnHZx/piuZvh2BfaYydsInFGIu2FlNJgsH8okLU/3jGmUErpRXlDJ8P5ZF7T69wdPOcwofP51J7kVayetVtO/7LgTO6PvaSxyPCaVrry9Mk2ZymCUliMaacPBsQdulmYrbNtt+ymuVqOctY7mYsdXssdrssdzM6eV5uPyDZ8qA5IftW+sybzfoTgzx88385YJ72onfTuverXKHPP+Ho5urbxo17nPNBFUVBnhfkhSs3CBdlBSPPC7Isxx5Y7Q5OMpi0qv7tt4ACqnlAmm+aGss3n3rWs/7JPuf5t1219JTVF058nE+85eKfb2D+5MtYFU1XNbf4X/n78/K7bni5aH2mNbrcHkIZsJzzODccIhtM2tcSu2YEr7/NIFbRDIT5OMtybLTWTa9/ZW4bLyTqG54x+bVPr9otX3vOu657CJFw2R896efHjf76Ol7yyof5zUvWj+0O8aROiBf5KM8xjbGjlmOa3LHa5pjxAtvf+1b9RMXo1neosLj43BPCIOOqthiULRtH7iIPuBm2+20kG45ly0ln0WyPY63FGlUYrX5ojP2StfbTiTW3LnayzuGz4/zj757wUwflBW+/jqgNBql1Ase4KOe5yDO9yBlBmBYR5V3BjluuRy3cw0u37eWsmQ7Wlvwz7KwOOqhorUW9/pmPC0opraudhhIjncKxu6O4ozPN/bKBxubj2Hj0qdQabUy1XUprjTEGYzTGmH1G65uM1v/XGnXl3GTz4f2rmVz2mtN+oqBs/8KNnPhZy4uOFbPoZbOP8gtRuEjg7ChsEoVWBw389FYW2XHrTdjOwzxjbj9PWbfIXBOSWorqzyyONP/UGy46N2iUFqXoesWujuaHKwk7szZ5az3TW09gYsPWchee0mijB7/f0S/Ram2q8Rida623a62+qBWXaa1v37FnoXfcpjk+9/ofH1gv+subWTeR6PsOFHN54IkBnhFFPRE4CqXSNRt1B53Uil+1Ju+ssGvHnRyY382WdIWzxhc4ZbLDljGhYRlQTIgi6oRzXhBijDoL0ImWTDex7RkmZtczNrMe3ZiqxvpHd/voge/2n+uR8GiMFqXUHqXUdVqpT2vFVbVEz/sg8uU3nvWfBubX/vJG6ga7UKhTvKgXeFEXCOo4lGqMhOaRfRmjII0uhUhgdXE/++b3snxgAZstMBkWmNKrkkhG4QJdF1Fbnv9+L2BMklKrN6k32yRpDarCfOxvAGH44cMfOWFtDgOPMBCqeiDfQ+TTEuPlWqu7AX/dnz3l3w3Mb/3VjUymqHtX1Em9oH47oJ4nSm9WSqlhqXTtdxhE40cdmqiYV4Qi67G6dIDlxQU6K4sUWQ8QtLGinvbnN3sfookxIMERfdnADyESUUQ0MuLHwzA4Mgmy5nV10MTaIJZGQXYi8kXgU0apmwR63373BT8SnF95543UFZNLol9aiHqloI/qb1BRIyO/amTzu+JHT5KMONyaCB5j+Zsg3vv+L02IOv+d3w7eBx2CR/keElyZxUchYAijP061FqVHMV8O2SE4+rdqSH0R+JxS8k6J6g5lhO+//9lro9I7b2C/JNRV3OpFXRKU/jWUToatKTW0GvVvQfKj15oNw9Xuw3IHoogFQp9PUBrRBtBVF0OVE+w/4tMPtphBvzuObqWsZnaqfRkiMgFcrGBWK14mgUOa98vRkEiYzrV5J0q/QJeJpAy472DrVQfZyKOM24z+8suInUPlJ3rwOyIKEeT/A5ygtCN3OuTaAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDAyOjI5OjA5KzAwOjAwqibzWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwMjoyOTowOSswMDowMNt7S+YAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartManManMediumSkinToneMediumLightSkinTone.displayName = 'EmojiCoupleWithHeartManManMediumSkinToneMediumLightSkinTone'
EmojiCoupleWithHeartManManMediumSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManManMediumSkinToneMediumLightSkinTone
