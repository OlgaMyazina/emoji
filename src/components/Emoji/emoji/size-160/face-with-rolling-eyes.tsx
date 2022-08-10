import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FaceWithRollingEyes = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcEyMhibIUYAAAAAZiS0dEAP8A/wD/oL2nkwAAH/9JREFUeNrtnHmYZXdZ5z+/39nuvXWX2qu6q6q7q/ckpJNOICEhIQQIiBoYFgEVRZ1RH1EQdFRkwhZAEA06zjjqM+qDKKDjCBhkGUXD0gkB0lmaTmep9FrdXVXdtdxbVffes/yW+eOce+tWdVWnjXGZebzP83vO3eqec77n/b7L931PCf79se7Dphv/35F4mof419z5T77pk3zr4WvED998t7yq55CsBIsCYDku2sPze83nDr/E3LTjEfuhj//s//8Afe3O25mLe5w95YlKMdccCbxoi++qbY5jxoSkRzimKMBHgLXEVsu6NVSNFpNx4p6IlTdZj/KTT85vq71i31eU94Nz/yKH/8+6h8nf2M0j9Su9y4oTY8Vc47m5IL7J8/XVbmDGpU+P8MkLDylcwBGrHYABqyw2scbGhCamqiJ5XMXOoTDy711s5r89WR85eXnx8XjoP5/8fwegv77jNbzyA5/h4Q9f1z2Yn72hmAtfFeTVC92CGZcFciIvIScgEOABLuAKkBKESNGxFowFbSGxkAAREBps02IaRKohTkVN9xvLYf7uhWb5wKv+9vfn/viWd3LL+7/6bxOg+97/Ap5TPsKpxlhvf37hFcV8+KagS93olCiLooCChLyFnAtBHoIe8IfBGwKnD2QJRABIsDGYZdDzoGYgmoFoFqJlCBU0gabFLhn0EstR3f32UrPwyXPNns/v+/lHzg+/YpqZbwz/2wHoyIcuZykp5Ea7zt1WLtTfki8mL3TKFChL6AIKDhR6oWsPFPaDfwW4W0H2gSiQmpKTHU4WYNGAAkLQVdBnIH4cmg/B8qNQn4JGDHVgyaIXCcMl95u1RtfvnVzq/2Lejer733PkXxegf/jVW7n1dffw1Jd37O4r1N5RLEZv8LptDxUJXRaKOajshPItULgBvHEQRbDO6kMQ4sJDsTYDy66AJizYJuiz0HwQavdA9RFYWoS6gEVLUmWxvhR8drbRfdf1D/zF4d/be6d9w4fv/pcH6Dvv20dd571t+dO3DxSX7sh3q6tFjxSUgS4Pei+H3u9LgXH6U+q0dymzJTq2Yp1ULfPWF6zsd+wSNA/B/Bdg7tuwtARLYBcMYdU9slAv/tqT9e3/u8erRle/59F/OYCO3LmDJd1VGc9P/WylXP8Fv8f20S2hDHSPwuCroHJr6ltajGmDIkHI1a/bn3c+zIUg2RZAeuVzIVKrWj4IM38Fc4dhUUHVksyLWm0p/7tnmoMfq8ja3Ph7zv4zA/TTlpOjm5hVfUPbCmfeW6mEP+H0ioBuAWUfhl4Ag6+DYNs61tK5nJXPxMUsyGRUW8+KOkCyJgVKLcDsF2HqC1CtQg30nElqtfyfn2psetcu/8Tp75/9OF/92Bsu+ZSdS/3iO9/1Tu7uezVn1PDm8cKZuyrd4ZudfunRDfR0w+jrYei14HWDTTpOIFviYiep11lJ5qQ7V7Ky7Nr3YpBuGgjyY6BOg11AOtIJbHxlXjd2ngqH7/+Zrk9U9974/Xzu648/ewDd9a4386O5z3BKbR7akT99V3el+UanTzopOJth7Eeg5waQNjvojU56zRJr3+s8adUBVJKBvvbzDQD0BqGwC8x50DMIIYRv1J5ARePHw9F7r3IeXdx/y/fwma89PUjupQB0q38vJ6Lh8hWFY++rlJtvkL1CUrLQMwajPwSlnSAaWQ7TSRmng0LrUM1eqpO2GVjr0K3tlzo/sxD0wsgPpSmEPog0QpR1ePuYmV46Go6+/bnigblnxYIm/ts4cbHsjUfH39FTavy82yd9KkDPCIy8Hrq2gEhSaxBrrcJ0WEKn5ah1rGYjOql1rCi+8LPWc5vRz8QgXMiNg5mHeBqBEIFKLvOTSByJdx/4+ReX9P/82vlnDtDdd97CDeJhwkXzHwa6lj/k91KmIqC7F0ZeBV1jKThSgzTrUGYtYGrNVm9Am+RCn3MxQFZ9psC0QEpSCw5G04w8mUNa4fhJsi+fLE9e8f7jj3zpji/zya+feQZR7M8tJx7tZ9GW9mwtzHy63Kf20yehJwcjr4CeK1N4XZkWmo4EKTpCuLgw5xHr5T5PE8XWUm3dqNaRUFqT1nAm2yqTYteYgcnPwuwMzFuWZp3HTzUGf3BInH/4Lu+X+Mi77/zHWdB9l3+GCb09t8c/9t7ucni77HGgKGHwudCzb7XVCLPGYlQHjS62VWsiVrLBijd4X62JaJ3Ws8aSZA5kAZqnwGg8pftlrEoPxZf93X77cPyHX5+9dID+z3uezwvtg7iy+YqB/NK7gx7ylETqlAeuB9cBqTIwOqglMv8i9NOAshbAS6CUTS7ie7LXJsmAUSsg2ex9nYBTTH1TcxqhwYnVDieJnrzSO/ndm2+8mk98Y/rSopgT1viKubz36tLJt+QKpoecA7k8dF+R0sQ0wWTyhJBgsnpKizSKSZGuVVlyJ6XoiGCdTBerFeHOOmwtlTpf25ZEYlKZZNXKkk2bbcu7oDYJzRn8gu3qbtZ/5v5w9z+UZXP6ki3o4y+bRcGrB7rqb/Ur0qNLQu84lLd3UMusiVzrRaw1liPUGmpdLHJtYFl2Hbp1UqllPW2ada4kS0MkNGcQyiBiNawTc/xKM3mw9iOf5P7Pf+biAH3jjis5mmyqjPozd5ZLyeWyKKHUBX2Xg+evplNnJtwCjU7Q1tJt7dIXSfwuRrvsb20nGBpstlqA6GyZJN1anVKNAKIqREvIxDo6tt0PRLu+cFXtnvofHZi7OMW2mqdYFN035r34RhlI8CQUBsEJwIapVGFFRquMXlis0mitsMaCsAjXQQY+0vfBcTKpR6xQTYgNohfrJ4xr5Q8rQGtMHKHDGKt0SmYhka6LlE56bLaDZqZVt1koDIN/Hhkk5L3k2iF37kXDduZ//crv/A6//ra3rQ/Ql+64gb9Qe93XOX/1St83FeE5qdUEvalpawnSyXyPwBpDXG8we77JzKxktuZTWzZYoFJ26e1OGBrU9G8ukOstI31vBRi7XgW/1getrewzbJKYcGGZ2bMNpqcE8zWf2qICLOUuh4FKxHC/obc/R65YQAinwyfpdOt1QVACbwHPN/li2HjVV8zL7v6e838S/vpGFjSsTtHNubGcE9/i+CLNcfwSSC/1/tYBrQFBUg85M9ngwYkSJ2q7mKr5HPjmIxw/cQJrYdvWMW668VpG+i0j3WfYt2eabbsDcn1lhONukIZtBNCKEw6ry0w+0eCRx4tMLuxmdinHgW8+xMTEUbTRjIxs5uYb9rNtUDBWOs3V22fYsjWPX8hnHsGkIGEhqIBbw/ENgYxv3K4mduZM8/C6PuhTH/5B9oYPYIV7WyWo/4RfEK5TcBGlgVRDljb1M2gaC0t852H4u8f2cI5r8Mtb+Zu/+RJHHj2INQ2MrnPu3BRL9Zj9172c+WiEx48FNOer9OSr5IpOmjNavYFP6vQzGqzBqpjFM3N8817JV797GQv2akq92/nCl/6WgwfvQyXLGNXg3Mw0s/PLXPHcl7KgtvLYSY+kNk9/YYkgJ7MEsuWfLDSXMLFCR6YrStyHt5iZh5738u/lL+6ZWG1B/Y1jvLfrD+S7mm+/yXFMDtcFxwPHz5ycBiGpL4Z87VCFB+evoW/zLnbv2s5DB++jNvco28ZcBAIhBEobFs4fob50jhfc/FKeOtrPQ6f7qDUO8+IbphjYWkZ47oqUumH/V2C1YuH0Evcc6OeJ2X0MjW5n547tPPn4Ic6dfZDtYy5S0vZpiZqjuTzPLbfexsRTvRw43cd8/RAv23+e7p5c1jFJzwc3ACdEutbzCW/6lHzjJ3aFjycXUKyUzPLD0W9VXFddhZNGQ+t4qdGbBKxDvJRw76EyB+efx9adV7B75w5GR0f5+7/9LMv1kLjqkSiLtalf9l1DrTbH3j27KBW7mOgqcPyYx70PGF6Sm6I8XEwPUqxHq4xu1tA4X+feb/UzsXAtO3bvZefOcUZGRvjO/V+jVmtgcdHaYiwUuwpsH99Kd6XMc664gnK5zGOFLo5MuOQeuZ+X7Z8jV/AzFUBjHQ8rBTgCVyT7dsUP9eVlOH0BQK6NKWBHJGoHTuaEpZuZuMDGisePu3z7/FWM7bqMyy/bw/DwJirlCm7Qy/SsQDpgjcXadAWBS3f3JgYGBsjlAjzfw1rLxLGI4ceWeF5pGbeQv2gMM1HE4cMBR2b2sW3HHvbu3cXQ4CClYpF8sZfzCxIhbJYrWqJE0buYkMt30T8wQL6Qx3NdjNY8PNFg9NgB9u8OEVaCUVjpYKUECY7QY4FtbnOsmu4UivnrD7wM3zTxbbhFCtONACsEFoHNcorlxZhvn95OcWAXO7aPMzQ0TKFQAAEvfvFL2Lx5FK1UK8BhrWFgYIibb3kRUjqUK92Mjo6wY/t2ega2cujkTuamDagoS/DWWTpmfibhoWM76BkYZ/v2bRnYOYy13HzTzezdu5ckUe3w32yGzJybZXz7LhzHoVyuMD6+jd27d1Ie3ME3J3eyuNCRPJKeK1IgpC13yXBrj5njcx/43g6lXGm2NWZxbbQVYQtWigwgkyZhKuHU+TzzYgdbxkYYGhwin88jhUApzdVXX8373vdedu3ahed5+L7P3r17ed/73su+fftoNpuAoFyqsGnTMKOjI9TNFo6d6sFE0ToZb7psEnH0RIllPc7Y2EgGTh6ERGvD+Pg4H/zgB7nmmv0EQYDv+4yMjPBzb30b1z//+TQbDayxlMsVtm4ZY+uWEebsOE9NF0HFWKOwVqdsSWkeSJvs2Hk2IogWViiWj+ap/HfLI7/YPYaw0iLS62EN1ihUaDg2P0BQGmZwcJBiqYjTTv5S3/EDP/A6rr32Wg4fPowUgudceSXbtm3DGE2cKFxP4Xke3d0VhoYGOX16gMm5TVxVn6HgynWFmLiuOD49RKl7iMHBAQr5AkKIdttMacWtt76IvXv28PAjjxCFIXv27mHv3r0AJEmC4zj4QY7e3l42bRri6LFBJuYGuWpkDkcarFWZ7Ym0ErBm808977Py9bN3mjZAwire+aHfkBZ6LDb9MrTT9uVGwFS4icpoL93dFTzPbx+oyI7WaMOO7dvZtWtX2hfVGmNMmsJgUEmC57oEuRzd3d10d/dQPdPL8pJDoaQ6ksaVQrW+LKg2+unb0ku5XMb13HaS2dq70YbhTZu4fWwMhEVrgzEm9YOAUgrPNylIPb309HRz7mQ/zQi6ggRrNOk5tzputvummT92PLNs2hRzTcyuxnck2K404bRp7moNWE1dBTRED5VymUK+gJQd1bkgNdEMlCSJSZJk1UECaKMx1uBIh1wuR6lcIrFFGs38mup7JXFuNANiW6JSKRMEOYSQqX9rZwDp/o0xRHFMFMVopbGZVVtrUVpjdLrfrq4CxWIXDVuiHjtgdQqQTSNgFjVLPckZRxi9QjFpYorJeYG1frvaySIR1qBxscIjCHwc182sx7bYdWFkbvWp1nSSrQUhBI7jEAQBCI8ocS+M8NlDaRchA4JcgONIZLt+sxfsv23PrSom21d6HgaEg+O4eJ6HFQGJdtr1nbUdAoo1vmtCB6cDoNaO2rKKFRhj05CNRUibhtIMuNXVgEVkPiulU/barrxenfmJdki2WBzZKfvYjn69RYisa9GSfNr7W+nptxyCtR3XxNqVek90XrjsorfUX5ueozGpBbXOvxMTCaClR9Pvs8aKxJhWLpMWo9ZYil6Ib5dpNpsopVZRp3XVREY1IVIhTQBCig5flX5mjEGphLDZRNqQQiHNs1KQxKrnfmARNqTZbKL1CnXatLbpxei0I2tZRf3sSLDGEkURYRjhiZC8r7IgZNp6Wqq3yTiROW2EswJQwwQckvutstRbIpzRGbLa0BVE9AVz1Go1Go06WuvW/lcPYrStcMXa2vDI9FCTOKbZaLC4uEjBX6LUlaSyxAWteEGpS1PwF6lWq4Rhs+3024QSK0pkmnvZlfez4xBSIKVEqYSlpWUWl5apeDUKfoLROj1HsyI+GuTyYjCsbSdARrh87M7/oo0VVa2zL7aW1vhCsbXnPEvVWebn54iiEGNT7opVTmAFKbFmqkUgUEqxXK8zPz9PbWGO4Z4qhbxJ5VsjVpaVoCWFnGVTf5X5uVmq1QWSJM58hl2xpjZ1OtjU8ZnrOEghWK4vMzc/R3Vhnq2V8wROjNEmtRydLWPRVlQf3fRGnTiFFYBEsYejbxJYnFNaS9MJUvoDih295ynYKc6cmaFaraGUoo3E6mO6wDkLQRuchYUFzk5NY+NZdm1ZSEcTjVgR4dogCaSFPdsW0OEMZ89Os7i4hMqEsVU+ZY2CbdsXKKV4GIacO3ee02emEM1pLhueAa3Swj47T61Ba4GxcurDn/pRo9x8pwUJpnv6UCI4qY1oGmVTpVK31AFDX26RvX1PMT01yZmzZ1laWmr7o7XT150Ov/VmohJqtUXOnp1iZuo0WwfOMjq0mKqoNrOa9spAUjA2sMy2oTOcOT3J9NQU9XpK8U7DFR2ArY5rlmYYMjNzjhMnTzJ5apIrBo6xubSQpgPGYrRFZ0tpGWncpw7u91C5yooe9OdfPc6P3tiHEkHe10uvdT1bdn2B9CSOK5FO2hfs60k4eT7H2WpAPheQy+VwXRcpJVKuDuvp1csyXqVZXq5z9uxZJp58Al+f4Ob9R6l4S2ljb+3l72hkONLS3Z1w9KTPwpJLLhcQBAFuK93I9tMOBh37TZKEWq3KyZMnOXzkCQrxY3zv5Y9SUFVUpFCJJYktKrIkTUPUFNWG0/v72smdfvlHHl4tmL3phn5i2ZXkde3lnqO2Or7E8QSOK5BO6mDzvmaoL+LYlMfZeZBS4jgOjuOkB9YRU4wxaK2JoohqdYHTk6eZmHgSmie4ef8xxnpnEZHKwrFYPchgO/RrDcWCotytmDguWKgZnGy/Uso2jVpcNtagEkWz2WRhYYGTJ09x+MgT6NrjvOqqR9nkT6ObEVpZVGJQkSVuGuKGJYy8J2qi939Ya5f/9Fu11XJHFPQzMfzqWvfEhw8pFd2sE4tW2dLgGItuRmwqzXD7Vd/l7x5THHqkzuzcPCObh6lUKhQKBVw3/UmtFM0wZGlxkZmZaWamzlDyzvKC555kW/8MotlqwaxiRMd4XYc5NjU7B84jny/42kHF4UPLzM3NMTQ0RLlSaVsUgFIJzWZItVrl7NQMJ0+coGCO8+prnmBb4Sx6MWxTSitQ2TmqxKKse3i+dPlcX3TsQk26XhrhBUfu0M2g/4BSjf+kEhvoBFQCjmfRrkVKg6g32VQ8y6uv0Rw8tcSjk+eZOTtIqdJLqVTKMmSI45hGvU59cQHHzLFnbI6r9szQ589BPexMd1cnd6xJGLP3RT1mR895Ki9UfOvwIk8dPcfkqQFK3T2Uil14vg9YojBmaWmZhfk5dDjDnuGz3Lx7kn47jVmuY7PQ3gYnsajYopRQSgQH9k9+Ln58/Lb1hxf+/uc2kcjcjl599guFLr0nX3bIlVyCgoOfk3i+xPMk0vUQuQK21M2sGmBiupfTs93Uml0kOsXcczXlrpDNgw22jy4xVK7hRssQqUxiFeto9h0g2TVm1XLAnksSdHFmocRjx0tMzhSpN/Np6QC4MqGUr7Olf4nLRucZyc3iLC9gwyZGxajEkMSGONREDU24rGkuKhrLzqmqGL7dM81DL/rdc+t3NerFLVTz46fK5774dRXX9ySJxYkNjidx3LTjI6UFoZFRiNDzDORCBrbMk2wv0qSLSHlYLEFgyXkJvogQcQRVxUriJDZoiYk1VOsoa6xoFWh44RLbgiZb91VpmoBG5NIMZdtPdjkNAl1HNOpQa2CTEKsSjDZptGpRqsNJK+PfX6uMT+RVFdgAoFd+5Fvc/9OHksiv3K1U841JZEuub1F+CpJ0LFIKhDAIkaQn0wQRaTy3iedWUxFcSqh39MOzqjsdj1knPq/1QWKNRG07LKrVAIwTxHJCQdQpiOxWBmPS4XIVg0qwJgaTCmNaG7QWbb+6Ao5BJTJMZP5z26e/2jx0zS8AD2/cWa0Wt2Nw7/Wbi/e7UXRbEgicWCJdk4LTmlkQFkeolTNVpAeemHSYMjW31SDoNcAIcfHGqmU1vVpbs2aEyJiOvrzOnqfgoBVGWYxOfU6SAZPEliQyLet5qB703dPsrvBjb/3YqkO4QMp710cPs2XqkYVYdP2ZSkSoQksSGpLIkCQWpUyWdYJWFqsSrI7AhFlzMVkZOTFmJUu2Yp3Z8OyGlU4dyHTcyNJ6bdeMIbYSSyOy76vVo3cmSrcqQauMVpqMVqkPaoOTkMQi/+lbHnps+sy277u0CbO/ecdlYOnvi05+OhdEL/WLDkExddZBzsELHDxP4LoCx0nzJOk4aQ9NuGknVjrpc+GkFtU2vQ7zEE835yZWT8K06daib8fQQnt6Ix1UsFqntDKglEHFliQ2RKEmaijCuiZZVoShf38t2PI6xyZnXvrbxy44Arluq8UrsmXusdlQln9PxbKmItO2ojg2aYKVWJRq1TAWo3TaodBRegV1nC4Tp+/pOOtmmswKZFqkWicrVtdbnfUZ6d9qlf1W9ptZ9yPdZwQqxmiV5ToprdKVHnsSGZLQokODimQjEqXfv/z0E2dCt/KPm1H8yi/tQXmlQmnh8d/JueF/9IsCr7DGinyB60pcJytHnCzVd2RqRcLtsB5nZdvKnlvKlWD9GcW2ANc5LKUz61lv3EWncrEG3c51DEmSAhNloT1pKOK6IUr8v4zLm38yapjabdceQ7z5Euek7ceBxhN85p6+RtdI128lUXK9DNVzhNQr970JspNNzd3J/IyUIK1ByCTt5Vu9ChyVWKZON5mZidDGtn/sAoyyRLLFrKFBn9EtBVxPrAEoLcVTbbnDorVFaZuCkxjiWJNEGh1pdGhIEucp5XV99OgD87Uff9P8hrLvxoPkeXjNa+cEb7CP3vfWnl9LovrvOo7pSZxsvK5zjMWTbf8rjU39ktUIYxBSZQAJkC5nTkf88V/Ocb6qMotbf56jUz1NFAz1uvzU6/sYGQ2y6YxUarDWZmpgJnwZu5LrZNYTR4Y4NCRNjQo1cSSWlcz/xk2/9PyDN93/ecHyRvBcDCCR3svGUUEwNP5X0ZS+TDabv+JL7a/1tal6JzOE0lzFyizK25QiQgrAsNhUzC1ril2CfC4bZbxY69lCM4LqkmahrhjJBqfIRLJUDbRt/aotXSSpU45jQxKmwOjIkDTRiQ3+0B3q+zNGPm9ZvvgE19PdimA5gLj2juPxwXcP/XY4Z0ZFI3qzEEaKDpRsqzNgJTbzRa1A086drEVaxfi2gOuvrzB5okEuSGWU1Rni6qTaAF2JYHhznrGtASTxylymXWM5Jk092n4nNiSRRkUaHWrihrWhCj4rK6WPXPfuow3+5OnvdtrwC/bja77zZuyBXx4ZEYvV/5rzotfkikI4gcQNHLxA4voOnidxvTT0O45AytYibdkIi+O5NIMC5+uZuC9X8r81naK2tiOw9ASafNTAxLqte+uswaBNyym3yghNEhtUbFCZ9cQNQxR7X7aF0ltu/Ni54/bj4oJpLfFj/xSAQIgfs+bAL27aSn3xrpwbvzooCOnmJG4GlOvJdLkSx+0EKQWoNYgvHYl003vFhLAbD5jZlaLfKI3RWZsmA8i0gGnRSpm0Ok90BziGqGGJlPtlp5B/23W/uTDBJ5Ad/t9uBM7T3lC3Hki8GXPfL28etcvVDwQy/qEgj+/lJU4gcT0Hx88A8gSuI5COTO9SkAIpWqWKaHdFxNOUGu28sE3jCx1yqu1kAMUZOLFBNTVhAxXp4LOyq/ArN/zm+ePrgfOMAdoQpB/BPvje/t7GXPh2z0Y/lyuYbj8ncTIrcjyJ48uUaq7AkQLRsiYhslRBtMHpLPBZ00O0dqXTmw6pZu0osxLK0wLUoON0qdiQNA3NJkuK4A+97uJHr/u1mZnM51wyOJd8S+a6IPXCd58c9avHl14rVfirOV9dEeRFSjc/BUl2Uq0FkJNZUkfXAbHBCKddsZoUIJv16zLfk9VZRll00vI5hig0hLEzoZ3cRyujpU/vu/5Mk1Ntn9/+9YsB80wBWg1SAOwe48CfNp9jw8Y7PJG8JvBN2c9J3ECkluTJjnpNZFGtg2odgntbDuqUgbI8x7baxLqjqalMClKSyhZxaIkiUY+t93mZz9119UsKD3U1T8MyrYkeLsXvPKObejcESSJ4GebBP9rUtTzV+B6RRG/xpbrB923Oz0kcP6OZK9sgicxxp61p2p2JC26bx7YlpVaLxprMYjJaqSRVG6JIxLFxv4Mb/EHXYOHz1/zkVI2/R6JX9UlWJYTPKkAXBQmgCNzWax/4qDNYX4i/T6joh12prws8U/R8gesLZAfdRJYCpPfDiA2ajhlAbb/DCjiJIY4tcSwbiXEetE7wqVwld/f1b9FTPDgrqK6rA1wyMM/4vvk1IF0IVDfwiiH7wAdtf30+vsmq+JWOVTe50mxxXXzPA8cFx2k5blb5odWz453+hixDhkSRKO2cNsK5D8+7O1fOff36t4lzHJyG8+s64mcEzj/pPy9c1JpA0IPlla6Z+O2h3MxkuE2FyXVW6RuF1Vc5wmyT0lQcQU46CCns6v9OsWoMB2sMoTZyUVt5CiEP4bj3uXnv2wNj/rE9b59t8sVEdABj19Ek/9HA/JMBehqgVp7ngGuw7BqwZ/7E9yefSHp0lIzFodlijRmXmBFj6BbYItggc9WRQSw7gpoV4gzSOe4FzikncE+N7nAXxn68GTGzILgXSeOCG8ueFWCeNYAumXqQ/su0UWAflgqWxpBIHsI58WhZ1quJI3UswWKkb3KVnN5+ec341xpN1zlLE8HDCE4giNcH49kE5lkH6CJAbXzXSksKcgCZjYqJtmYtslvl7Roxwm4g7fNsg9Nq1flA/M/xv7ouEayLXSj7dO89m2Cs9/i/ko982Oe7024AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMTk6MzU6MjYrMDA6MDARV3TEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDE5OjM1OjI2KzAwOjAwYArMeAAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

FaceWithRollingEyes.displayName = 'FaceWithRollingEyes'
FaceWithRollingEyes.defaultProps = {}

export default FaceWithRollingEyes
