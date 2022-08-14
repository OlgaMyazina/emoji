import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiClosedUmbrella = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-closed-umbrella"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBAshdTpoWgAAAAZiS0dEAP8A/wD/oL2nkwAAGKhJREFUeNrtm1mQXNd93r9zzt17756efTAACGCwEwtBgCBpbqAkkrIlUtFqLaTMVCWlqiguJ5aKUkmR7arEiaOk5ES2FcW0+CBLCSWRlCgSFEFiI7Hv2+yDWdAzPdPd0/vdzpKHBmiVozgPZsIBpK+qq2919emHX/3X794m+Hv60K6vQjERIb6xg4XGHUzpcUiEnIcjvucfGrx6IZeJZ9WJ6nfw6yBy4+Ijj/wRiAldltW91NOfNoR1n605WduymaHpSkrZ8Fz/fL1e/9tao/pDW48WfzD4+78egD75+J+BaNQJKu4XSIP+q4iKtadiSSTjCUQcB5ZpQtd1hAHH/HwxnJ3Lv7xYLn61u73v0vj0CH529d/csoDY5z/1V4glU6y5WP0XqoFvRFQsmc2kkUzGwDQNUkhIqaBpGuKJGNoySWboxtowEHfkC3MX/93nnpl55ehxLPLRWxPQ+tseAg/C+8KG/03DM1PZVBrxRBScC1SrNSyWyihXqnCbHgghiEQdpFIJGIbZE/h810+PvXb5UO7bk/u/W8Rk7fitB+i+u5+y3Ubta6LKdyfMONraUmCMolypYH5hHsVqAfVGFU3XQxAIUMYQcRykEjGYptEe+OGdz/6H1y790z1/MlkqNDBeefvWArR53SM7/EbzD1AnyUwyjWQqCj/0MTefR76cq9aD8gmPN8phGLTxUFIeSjBGEYnYSCRjME0jG/jhHW9fefXc5pU7pyNyGUbLh28dQLevf+xxv978iOYz1pZJIxGPoFZrYjafq5Xd+T/0UP4ylHpBKJEQgm8WXFHOJRhjcBwLyWT0eiTxbZOzE6f7u1fkMmQzRssHbglAmpIiJTlnUAyMUGi6BgIGorTLgWw+z6hWI4rVQtL8EoSScNVTKCkNBABR6OxsQ0dXGiBqKzHlf81uaX5lz5c2HPhY7nvBU09/7haIoA2P3uk3mg8Sl7JoNIZkMgYCinrVrYeeeiFuZEtFMgJDJVxOvCNSyU4u+WbJFeFcgmkUtmUikbWx+X1tPT1rIh9o1LzG7Hzu9Mc/9nH50ksv3dwRxCi7QhgqgfDbatU6mk0fsbiNrs72gSAIvpxfnP6DXmNbeZS8jDTfVghJ88tKKAOu+qQqKSKVAotw7PnwANZu68O1a9eyo2Nj3xBSNL7+9a8/+61vfUu1t2cpgFitVq9rmiaeeuqpmwYQ1QzjCNXZaU4DVKtVLCwsIgw5OrsypKe76zPtqZ6vVr2FyAr6MN4a+y4IaJ6j+a+bovrjUiOvaiqPtts9KKcB3w/Q09ML0zBTExMTezZs2GBks1kEQXjPihUrX+zt7X38ySefxOr2+8n6vgdvjhTrSW1yTdvRwsD/AHe5JkPSauUxG/FYhCmBrZKz+rlrB4/tXPGE2j/0l+jLbK1xHhzVHLl6ywPZNd0r4vA9H0pK5OfyeOEnL/IDBw/8xdat24/19vZsqdfrvzM/X/jA7Fxu5Z9/5SXSRtcl/+WW7149VX0dper00ga0Y9vj0Az9ahj4GwPPWysCCRkCms4QjdmwTEOvVt0BHc4bGjPyPan1ODT81/i9L36oEknRiXS79QghJE4pxeTUNA4dPow1A6tpoVCIHz506Mq27du+oSQee/GlF/907tr8ut7YpqfDmnHn0bmfHuuPb5276L8GuEsY0Ma170Nloehppj7CeXgv94OsCBUEV2AaBZccxULZani1X1BChwLp4mrxFHbdtQOSNGeVpBXO+d2VStU5eOAgP3XqJF2+fDl2797dPzs3u2pkZORILjfX79h2KsxHX+kyNz6oJOmtu5WNZW/OWB7dPt6ZXNfTl7nd689sD6dLZ5cWoAuDr2HD6gcx89bobKw7MSmEuIcHYUJwBc8LUa5WUa6VZhtB5S8FwjkJgavFU3jr8BHs2nm38n3/QhiGhdnZ2fyZs2f/plAorJiYmMj29fVh586dy8+cPVObOhcc0ryO313dvXFbyupKhMKnpXphWcRI3hME3k7Pb3xRgx56Qd3viW9c3RFbo2cSy8u9yY2Yqwy+t4AAYHBiP7Zu/wCW7UyPlqfq45zzHaEI057vod6oVBtB9ZuL8uqLFEweHP7v7xw+duwY2tvb5cLCwtlarfbyhg0bT1y8eGHMdd1dExMT6eX9y7Ft6/ZVhTGyVdScyEDfhrihGbTh1VGo5tGd6reabnNVvVlKR8zkXVwEn2RgT3VkegcymfafEtDg6sKZ9x4QAIxcewtJby2oJYbDUBwRIlwMhXfWl83/6Mry9w0SDd4a+Zv/7QeGh4fx2KOPqbnZWfq+hx/+vYf2PHjn0aPHXy6VShsmJ6dSXamV1C/EzKgdISv7lkNKhVxhGpwH6Mkuw1xxEl7YQEdipeWHzahU3OjO9lc1U/9bz3fd8fzJpQEIAMbzxzF67TjaUn25ANV9Lll4lVBr8OjIc/xX1YY//uM/wV98+9sglK6/7/77Pzifzz/eaHq/22PcEfEreCO3MNETE8uTMjDR1dmBeDwOP/RxZeICetv7QQnF0NR5ZOIdyMaXIRQcDW8Rth3Lg5Dve57XHJ9/bx0C+qs+PDn8Y5wc/ok6PfxzeWTo2f/jYc9zsXbdWlKpVD7PufhOEIZXfvHzg99Rvv3AQ9s/9cj2/sfOdSRWcAkOO2LDEx5yxSmEwkdXWzfmStPQDA2rlq2DbVuI2xkYuoOAe7qUSqNEe+8n6X/M4Wazie899z01NTX144sXL26KxpxHO6Jr36wshGHTntnQ27l2TSgkoxqFVArlehnDV6+gJ9sHx3YglEQm2QMnEkFIJSJWFHGrDaFwTU2GFmPkve9i/5jDR48exQs/eQHDlyenL5y7sD9sWI9oXttHgjr0xVoR6XSSFctFYhkOdN3A9LWrKBTnsW39DhiGCcoYFhbzcH0fsWgUUhCIUCFUvqcY/5+EkPnh3JGbF9ANbez6HaSdlWlZj34UvrHM5y4II9CpicXKIqJ2Ek2vjonJYfR09WJZzwoo2bJMTNNEqVJEw2vAtmwoTsGFoIKLc+XF4oXVnbvUROHkzQ2oL7MZZZWrRljKVkq9P5QetbUYmq4LKRV0amC+mIMfuFg/sBm6bkJCgVACU7cQtaNouHXU3Ap0zUTcThgGsXdTornFcOrsQMd94r2C9K4A6sqsRpIsUwLBTgn1ECFU04kBN6jDYDaC0MdibQGdHd1oS3dAKgmlVOu2CiXQmY6oHYPnNdHd3o7lPctAqR4JfXm3puywEsyfWtNxD58onLg5AfW2bQYhBJLwEQIyy4i2SUieUERCIzqafg2UEmTTPVAKkFJCoQVJKgkhJZpeA/2dfbitbyV0TYOh6yBgZuDLu5gyw2owd+K29rvE1cKpmw/QteIlTBfPoi+z2QOR40SxRwT4MoNaICAIVQDGdEAwiFBBCAkhBaSU4JKj1qiiI9mGZd29YIyBMQadaTBNA4Qwo1Kvbgp4MG4Qu9aT2kQz8X6+tusBefX/Q9q9a310x5onoKsYFNQuCu15AtpjsQg0okNBIlQ+pJIwmYOIFYdt2dAtBgmB7kwn+nv6YFsWDN2ARjQoCYhQ4crYEM4MnVOOEStTsIKQYS4U4XAgvGOBaBwuB7kxmyX4oZG/XroRBAA9mfWg0KAg6oTQS5qmryWKdCooUELBiA5GGLgK4IVNBL4Pz/cQt1NIxdMglLS+RykYZTB0HVNzUzgzcgb9XSvIip7ldme2PdOWbluejCS3W7rzKIX5QR3RPqXEVF2bKGztfgLTpfNLE1CueAUzpfNYu/K3PMMxQsXxacFFu4SExPWCTOg7kEIZIG5m4BhREAIQQkAIAaUEmqbjau4q3jz5Jtj1VKt7FTSCKiQCOBETHdks7cp0phwjsouH5MEEva3SCCvDK9p2iHfTMmHvJu09u/456sej0DvDz/Mg/ISQgraKcasoSyXAVQClJKJGEiazoSSgQADaAqhpDJOzV3Ho9GHYWhTZeCeIZPD9ELV6HfniPK7mJjE+O4ZSvYB4PEJ6sr1ZndoP8pDopebs6dvadvvTi2eWHqCVvTuQ2EKJV/E8HvDLCuoaoBoKiihIKolkSknKiA5G9VbUgEApcv0OAsNc4RoujlxAd9syrF2+Hu3pdmSSabQlsmhPdqAj2YW2RAeiZgK+F2Jqbhr5yiwyqaSVjXfspspIzddmjt6Wvct9NyD9P1t27hz4BJTimgYrAkU7KaW9TiTxIAH7/aDp2VRRmMyGqTkwdQeW6SBUdVwrTCAd60R/1wqkkgkkojHYZqsbSqEguADnAgHncD0f1VoNc8U8ivU5xGMxZBOdvFCe/29DuXNfiVnJxYMj31magP6+PvXB/wTCyNag4f6gVl5c49VroIrB0hxYWhSh8FANFmBaFnRiIQw5NKYhHo2jI9OO7mwX2pJtsA0HSigEQQgv8OF6Hir1BhaKRcyVchDER3u6PWx4jT8fnDn39ZidqB8Y+qulkWL/kO7Y+mE89qXPzI0euTTHKLtfKhUJQg9SSgShi7pfQiySxLLulejv6UcmmYGu6ag365jJz2BkegRj18awUJ2HgkQkEkHcicExbVi6AdPQQYkJ3xMo10vMtu2tyUimOXbt0vHVnbvlzOK5pQ3o7KWXYZe7YUTZkOKswph2r+Ch5Xt1BNyFZcaQdNphGRGYhoVkIoGu9k70dfSiM9ONmJWACBXmCwsYmR7B0PQg8pU5UI0gFUshGU3AMgwoBYSeRN2tapSRbalYduTugScu18MKZhcHly4gADh/+RVsHvhtZUadC5CqGXruVs+tR8AoDGpCoyaIooACKCMwDB2xSARtqTS62jvQ3d6NznQX4nYGEBoWigUMTw9iPD8KrkK0p7JoS6QhpILncnh+0w6l2zs8f+xnBnUak4UzSxsQAJy7/DJW9+4Wqe7sqdLcbD/nfIeSElyFCEUAyQWUJFCKgjIKXddhmSYc20LMiSAVT6AtlUZHugPZVCdiVhq+xzGRG8fI7BAUlejr6Ial22g2QwRhYAvJ34pr2fGKtoh6bX5pAwKAgdvuwXM//KL84XP7HxKc30UEBSUahOTwQxdu0EDg+xAhQBiFaeowDQO6rsPQNJiGAceykIhGkUmm0J7uRCbWDskJJnITmFwYRzwWQSaRBfeVw4VcUQ0L+zutVeWJwrGlD2jLhkfxX/7ofyCSStwtAn4fEYDBLBjMBiM6pJBoBg3UGmXUanUEgYBu6HBsC4aug1HSmsopg6kbiFgW4pE42pJZpKJZ+K7AeG4MtaCEVDwJBmuZ4NIp+7k3VmV3h5PFU0sb0O0bHoNhGtBNcwP3g0dEEBJGGHTNgmXasEwbOtMhpUTTq6GwOI/5QgGu58M0TUQcB7rGQAgBCEAphcZakRWPRJCOp2GzGMqVGmYXp8A0BVuPrWMwZ1/57H8+dWBqFpOlU0sX0IUrr2LL+seg6WYPD/0PBa6nQwKMMmhMh2EYcBwHkUgElmWCEIKGW0dufgaTuRnUmg1YloVIxIGmaQC5vuuBgFIGyzAQjUTgmFHIUEOhkocrqrppOKufO/fyfkuPzCfivciVLi1NQABwx6bHoemGwcPwn/huMya5AAEFJQyUMDBNg2mZiEajSCQSiEfjMA0TfuBiJj+D0ckxFMuL0A0d0WgUuqa1xl4FEChQSmHoOnTdAJEmGs0Gal6pTUEt/tuHv/nGvrG9mCqeXrqA7tz6URim4wkRPhD47srQ9wElQQkFIa30oYSC6QymbSIejyGdSiOVzCAejUNBYnbhGobGh5Cbz4MyiqgTgWEYUCAtS1cBhFxfGISBgAeoe+XJHw0++yJVTM0snl/KgD6OfG7Yj8TSrpR8dxj4ccF5awYCbUUTWsssZQSaTmHaJqKxGJKJFDKpLNKJDHTdQGFxAYMTQ5icnYKQHNFIBIZhAgpQSkFBgXMJKRgopUO+dH+uMytc0hF08tyPcM/OTyOaSA42GuWTSsn1Qoheyfn1evIOHoCQlqHGCDSdwbQMOLaFeDSOdDKLtlQWtuWgUitjeGoIY7lxeKEL27Jh6uZ171sgDASEwDJGtKH+2JZLda2IUmV6aQICgNMXX0JP+0alBCY1Sx+ihD4QhkFSiBBEtYouQADVump1LAJNY9D11ss0dTh2BKl4CplkO2J2HK7XwHhuFBOzo2iGTViWDUMzIKRCEHBTCNGXd0f3Zsz+6tjCkaULCACujO7Htts/iB+89IdTL/7oZAVKPRAEnhUKH0KK63bDDUgEoASEAJQxaJoGXWPQNQpd12AZFqJOHKlYBjE7iSDgmJmfwvTCJHzlw7EdUGgIQ9mtlCy9MvLvD9+z8mlMlU4vXUCttr8X4xfTiCTil6WQplJqdxh4LBQ+QuFBCAFIAIq03EcCgAKUtTxsjTFo1991xmBoBmwzgpidhKMlwH1goZTHQi0HZgKWYRPJybKe2OY3bS06P7rw1tIGBADnr7yK9Sv3CNO2zwCkXUq5hYchkYojlAH80EcYhBChgpLXzSyiQCgFvW740+uGf2ue0qAzHZZhwTaiMEkMIiAoVRfQFIuwLDvNiOGenz68b1v/Y+pq8cTSBgQA5wdfxYZV7/dM2zpJQFdLIdaKMGxZspIgDDk834XregjcEEIoqBvRRMk7Fi4hrR5Ib0SVrsHQDRjMhgYHvheg3MiDaqS9Ld69l2laYTT/9tIHdMNY8+vNuunYJwmhm6QQK4Tgf9fRFAHnHE23iVqlhnq1DtcNIZUCYQSEte6QAK2h8YZxSikBpa3xgcGEFEC1UYgIyfcLzgd729Zjqnhu6QM6e/FnuGP7E/BrtZIZiZymlG6TXPQKzvFLkx8IWs8ceZ6HarmKQqGE8mIVrh9AEQXGWqOBUoCSCkpKyOtzkeQKRGkAELhB7XmqtKEqL2CuPLj0Ad2AtGvnR1HOLcxHU8mzlNLtQvBuITgACdWaJlupxFq+kVIKrttEsbiIfH4BxcUyXN8HiAJltJWHSkFJBSkVhFAg0HSNGaEna/scPRlMFI7fHIAA4MyFn+GBBz+LqeHRXKoje4YydruUokdyDijZCiSiQChAGAHTGHRTa3nTjMIPPCyWF5EvzKNYLqEZNAGqQBkDJRRKoVXDJAYIYfN7x//sxF3LP4eZ0rmbA1Br2n4Rn/3iVzFyYjQXzyaPMU1bBWCF4JwopUAIwEirtlBCwRgFMxh0S4cdseBEbBimDiE4KvUy5kvzKNUK8EQT1FDQdAaimAZJ1i2P3/F2TM/khuYP3DyAAGD/vu/jt+79BJqN2rwdje5njElCSZ+CjCmpWqBwfX8jrf+8Mcr+LqJsE07ERjQSgWVakEKiVqujVC6iES6CGBKEkJRUSuZr43sHOu6VE7/U8pc8IAA4c/FlXB7dh00DD1VN29qvlPoFIZgiGkmBoFNKeb0aA1DXV11CWhGlMTCdQdM16IYBy7LhmFGYzIHwCerNCkAkpBTHm25jr8Z0cbV08uYC9M7EPfgazl1+Va5fd3c+u854yy+TvUzTFBhZJ6SwpOKt7V0BkKQFixAQxlqw6PVhkrWMOZPZYMpCwyvDtI10OtFxrDPbN91cVCh6ozcfoBu6PHwQp4/vx4Y1D1UMxzoARYZAsIqLsDMUPuEyhOASkgMybA2ZhFDQ66n3DiiqwWAmdFiouqU01WnGa7o/z2a6g8HcwZsX0DuL7th+bNnwsDiz9+zlnoGeNwmhNpRaKwQ3uODgIUfgB/DdAIHLIUIFgpZ/res6NE27vr8ZIEJHrVFq+LLxPBdBfWz+2M0PqJV2+7CIQaxdfl/JiTv7ADJDCF0LpTItH0iBC44gCOB5LjzPQxAErSdwIaGZDMxoPUhKhD7tNtzv69RqDC8cvjUA3dDg1YPYtPHh8LZ7156t5sqHCCERQPUoSJMSQilr+d2MMFDGQCjg+U1IKSGUAFchuAxgOHjesLTCpekDN4yWW0+/fe+XwXQt4tXdzUHT3yK5/BhR9B4CqjFiwNAtOBEHdtQE1SV0TYMMKXoHzMLArsSHAk+8/eRTn751Ad3Q/Ruehgg1ECY7iSKfgSJPQpIBCo1pmg7TNmE7FsAENtzZg3vfPxC8vm/vP/va177+7IoVyzE3N3frpNiv0tWF05gqnsTyji11ZbpHiNBeASFjBFQREEspWIFsaj2rIrh7zwAqtRI7ceLEymeeeebtjo6O/C1Vg/4hTS6cweTceXS1rV1M+MuON7T5F5VSL4HIw2vuSAS3bU5q+w+8kRgbG2Xbt2/v4Jz3Xb58eV8ikWj8WgC6oZnCBYyUD2C6eC6cLJ4qPPmFD1/edk/fq2dOn3/hzTffJLOzs7c7jqNv3759lRCCHjp06CDBb4T+/n4opRzG2BdM03xmz549yTVr1iy8/vrrn2W/wQNUKhUkk8lQSnkiDMOZXC633rbtRcuynv9NBP2Senp6oJQimqZtlFLSmZmZ87+h8n/R/wKf9kLFSp8vAQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwNDoxMToyNyswMDowMJLsdlIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDQ6MTE6MjcrMDA6MDDjsc7uAAAAAElFTkSuQmCC"
      />
    </figure>
  )
})

EmojiClosedUmbrella.displayName = 'EmojiClosedUmbrella'
EmojiClosedUmbrella.defaultProps = {}

export default EmojiClosedUmbrella
