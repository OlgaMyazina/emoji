import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const SantaClausMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBAwdFRSCGgAAAAZiS0dEAP8A/wD/oL2nkwAAI5dJREFUeNrNnHmwXFd95z9nuVsvb39P+2bJkm3JNvKCN2IbY8ISlgSmSCCEAJPKJFSmQjaYygwEMpkMMyFTk6SYMNlIJpCFAAmBAINJIBAH29iykS1LlmRLtvbtrd19t7PMH/d2qyXLjm0Ek6669bqfdG+f8z3f81u/5wm+S6+Tx++nPTUh7vrTz7XnHts/Q6+7Rjq7Tpfl6nxuYVr0OqEGL/EIKZFRYnWzkcWtZEkEes6FyUmp5FHRap+QoyPzC6pceNTsKUaay/zPveN/8r16iYv5sLs++Xv8xXt/lVvf+ZbxM08cvLFcWLzV9XrbQ1OuC0w5EzmTRN6FAagAh/YO6T0SXw9EeC+E80JaJ5XxOkh9GM2V3p/My/Jw4cwTVopjwCEr1dHmROvkimu2n1lx9fVLJ/fv9nf+zK/+6wXo/3z4g4wsm1aP/cPX71g6dvwX/dLiLUGeNRNvSJwlwZEIiIQnwFMBVIEj64EIBB5wXuAQWCExUlKqAKM0FrDOewulQ3SEEqdlGB2Vo2PfClat/vLUldvue9lP/dKiLUtUEPzrAei33v12WpOjwb4H9vyEmZ1/v+p1lyemoOFLmr4GB08k/AAgLTwaUDVAUlQQeSpwnJDYGiQnVfXZe4zzGMB4Qek9pYNCakyjucDY+D1qcuLjpqG/+NP/68/P3PPlP+SmV/zE/1+Aful1t/Abf3sJP/uKp37Ud3u/E6e98YbJabiCprM0cSTCEcsaIEALTyAEWoASHik1UgVgSwAccgCQQ2AReO+xzmJdDQpQeEkuJBmKXChyFZDHSWqT+Jvh5OTvrnnRVV+8/3Of637o7nsRIvneA3TXB7byya+OEgT+Sgr/yThLL2vkPVo2p+VKWlgawpNITyw8kRSEAgIJWgo0Ht0aQzZGkN15hC0qFgmB9xUwFrAerPMY67HOVQB5T+EFmZekSDKhyJBkOiSTGhOGnaDd+uzoipn/9lN/8BcP3/u1z3DjS9/4vOeovhOAxqNLCUNaphD/JSjNy+Iyp2FyGt7QFI6m9DSkI5GQSIiUINKyugJNsuEywk1XEdmSUDrCQBPGEUEUEUQBQRQShDGhkmil0FojlUYpiQwjZBAihETg8d7jgwiiBGcKjHVhluVXpZ301m994W8OrV6T7H/pxvX+r+9+8HsD0C++9jYe25vTHgnfIo3/pciUQWILGq6yOw0laEhPQ3oSLYkCRRyFREmDeGoZyR2vJ3r1m9FTywnGJgmSRnU1EoJWGzW9Er1sDcHENHrlevS6zajRKZRS6NYoqtVGjU4gpEJ4h165hmjDZsqFBcosxSuFU5q8KGbSXnrbiUOnj77r9/73ri30+PQ/3vfd32LvevlLkNJvLHPx6ciYq5tFSqtMabuStihpBZqmhKYSJBqSMCRqNInWbyH6vlcSXP1ihFZIY5CdJcTsaWR3AeFKSFoVG8IYpqaxUmPn5zAP78AcO4TJUszIBIXzlGWBWLUWO7WMk9+8m9n9e8nDiEwFzJ0+w+LsaXLrEHF0uDk59hO7Hjr8f299+WZ+5g8++90D6Lff925e8ZY7xG/++9/8oCjM+5qmoG1LRoSj7QrarQZNJWnPrKA5PkFsS+LuLI1rbyZ+yfej16zHC4EQAoVHOQ/O4pVGKIlQGi/AC4V1Ft/rImbP4E+fwGcpbnQcqzQ0mqjJKYyHxcOHSM+cRiQJWZZz8vH9HHrgfk7s30u3s0TmBcTRPZOrp3/k/Z/80pOHH/wsq7e//l+cq34hAB3Yc4CPfuBjl4B8k8YTBZrx9esYazVpNxJaUcjklitorVmH9B6xbxetmWmim16KaraqyFmcXRvr+0slkLKOhZzDWYsQoNsjqPYIfu06EALvKptjhaAsCmxR0Fyxktbq1TjrWJqdpcxzeqdPUxQFHDuK7XbpIW9YyPnpUwe+8f5HHnqieC5zfUEALZ6cJWw3bxPObQyEYGrzFjbedBPNMGSk3WJ87XriiQmkkJD2CDddSjA2jpcSQcUchMA5B97XVJYI4RFIvPcIIQgChZRyiO6VyfTCYY2hLAq898RRVIUHzmGFozkygly/gbDVYmTtOk4ePMDJI0c4dvy4SLPizZ/4yF9+oru09PBzmat8PsDs3b0TgHe87xfiIIxe1pqa0muvu56rf+A1bLz2OtZdcy2rrruB1oqVhHFCmCQ0ly0nml6Grxnj8VhrKYoCay0IgZAS5x3WOTwepSSB1kgp8c7jnKu8lHM466r7PARaE4YhSmuU0kilkEoSxDGtqSkm129gfO06GqNjNdCeYmlp7dzxk6/75Y/+sfD+Hh7bu+/iMSiIGvzoK25lcSG9dNXlV9ywcu1aNm/bytSy5QQ6IAgDlFIIIbDWImX1Hu8qEJyvGCNAa41SZ52olBVz8OB8nZtVH5Gi2na+BlgKORi5c27wfd57pJQVM4EgCBmZmWFi3TrmzpyhmaYszs4yd/LU6778qY9/4srbX30Mf9ru3bvXeO/ZsmXLCwPosccew3tPXtj413/v42NPPrHvDVuvv37NytWriZMGrrYJAEIIpJBYbMUID1JJ9NAkhBAoqRDyrB3q31+9r9AR9fN8n3v1vUIKRA2YqLeqEKIC3HuEDsCDtQ6hFEEUsf5FL6K9Zg3tySm6aXZVYeVbs87ip733R4UQC14GHNjxFQA2XHPncweoP6iHHnpwpXPu+l6389pGq/26kbGxUCuNFIIwDIjCCCEFUkpUTXVXbxnvz05WIPqZ6VnbMmSw8QyA64PA0Kc+kB5B/zZRe0S8x9Us648laTRZfcVWjHUsz1LWbbuSwwcOxhZxmzHmH7z3J6VUyhSZKOIZ61H+ebn5e775TZRSa5x378b725RS28IgiHSgAUGr2aTRbAyoLYRAa40QAmMsUgqCIEBKWdmOoQmdA0x/uwyB0jfQVZbvz2HXeatYs7W2VzWjnXdYYzHGUJYlpSnp9VJOnThBkWVHV65d9zGp1BdMWS4FYXgyVO5kcOoeX45sYcv225+ZQXv37iXLMoIgUCDi+bkzP+ysfWsYhmNJHIVCSoSQBEGA0qpa9cGExDl2RdZu2Xpbg+hrYGqj7aqbpZDnAuf79qpinKgT1mFQ+zbL19/lnKtsmahAE66aoacCCyCKLOMTE3S7nZler/tKIeSKIAy+Afy9cah7b/1Jc+ODX/2Xt1ij0RDW2jhN06sRYjv4CaWUVlrjPSiliKIIpRTOe7y1Va5UgycESFFvF1Hbknp7WOuQUiCEBFFN1DhTgSBAiLNbib7dGQBfTVYMeUWGSFX93p816jWIAoHrv5cSqbTK8+wKpXSoA73XOdeUWvlrdj3C5mvueHaAarcqjTGjZVlcXhT5tUpKKaUcsCQMA7RSKKkqV91ng+wbVLDOIrwYrLb3HiUlCIEpbV3/qZji6n8feLOaFX02SaUGXm/YIZxlUvWMipVu8Ly+Y+jbwqpkYnHWCmtdZG2xQml9pVL6PinlAe+93blzJ1ddddWzM2jz5s12586d0975G6WQq5RUUsrKQ+mg7877blfUW8BRlrUtqAfmarfubTVoa0wFlNbnAONdNQlTllU8UwOllKqia0+1pevPUp4FSw7YdNZe9e0R3lOasgbKYYzFW9cHzwGhNWbMe68B7ZzLh4PTpwG0a9cupJRi586dE9aYS8uyuAZ8Uwe6DsjUIOgy1uLLsoqKrcXVg3LOYcpywCThLdYxAKg0JdIbfJHhdUQYN5CqGoopC4qiQKjqu6w1SCEH3jEMQ4IwrMYhZMUIa5BSonWAkrL6zmqIVXRdj6mKj3wdoIJSUnjPEoiec67tvVfGGMIwfGaAakMonHOriqK4Nc/zTc45oZWuvkCAMWU1CQFlUWKMOTsA7yjLgiLtUvQ6CBUQKQ86QuioHqDDlymuO4stcrzUNMemiNvjhHGMImPh9CxeaHzYwKKrnCwIiMIQrTVaCqTSFejWUpYFYRiidVBl+KJioNaVI9FKURQl1tjaPgqEQDnrWs65Reecs9bG11577eJDDz307DZo9Zq17tFdjyRFkW81xjSEENVKGUueZWR5RqfTxdbAmLKsvJktkLagtLBw8jDCFkgpyYVDSUE0MkXYGsEXJV54vHe4MsPnPZbmj1GMTBCNTJLEEfLEbvKFWbwXqI03YBvjZJ0uLq7CCmEMzuQUZYlIRvHOkXY7OA9LiwvoMKQsLVEUEUYhUlYFtyqodYMw3TnbLPLseqXUQ0EQ8Mgjj5wTfl0QoDgKMcZMGmNWe+e0B/IsxzlHr6fIspROp0uappgiJQo0cukUKoohXURGDeKyg7IFESWBK9DSI9JjaLMKsmprWefx88dQZQ+Bx3VPYjqTsGIdrUZMw4a4IqN3aAdyagNZaVnyEr9sDS0NIpuH3iK5bqIaIywtLGCjNrPHj2A8qGQEHUYEOkDrgDiJSeK4WlRTUpYG77103k9ZZ6ettaNSqtPO+WcHSAjBfffdd9w5l5dllTFneYZbdLWhKynLyvAtHHiUEW1pdk8QzKxFmR46C2gEgkA4dLNNEDbRYQQCnMmIdIEghyCA6TbCN/HO4ozBmh5y8QgqCBHNFiQxuiixvcO04jYdK+kefhTvCoLOSYIoAqEprMMvzrOkRlHWsHDqFG56A8nUCpSOkFKR5RFlo4mUEmMM1lqEEHmcJB28TwAjXK4PtK4vdt93F5e/+OUXtkH79u1TCwsLDWstWZZhrCXLcowxiNpreRzeWtTSKUIzx0g7QpdzhAoCaQmak0SrtxIv30jYGEFHIVpphC3pHdtNfmxP1eQRyTk5RZWxmyp2Chp4Z2msWUd743WIsIGxjqzXJZ0/RX7qKYoTjyOXTuOKjEAUsHQI60HZRY48MU+mQ5LxaZx1g+cLxMBwR3HcbengPh2Ej3jvS4m3b9wi2HPfl5/OoJ07dxIEAWmWRWVRrPbejVjrfLfTFWmW1gGiJFCSPO1gFk7Ryudph4Y4bhNIVxXaJ1cTb3050dhylNZoKVFKoHVAEEboMGRu4Qi+zBD9WKcfIQ/FMv3YqbV2K43pDZiyQJgSEbQIWpOY5ZvIN2ynt/du7JFdWK0ZkYIyy9FJQK+7wLG9DyC23kQQtyrXbsoq++8n2EJY5/w+IeQe8B1s4R6875+55sU3Px2gftxher0x5/240sFe5/1YXuSjpjRVVOwdwkNnaRFxaA8zQUoUt1FBgA4DgihBxc3Kw3RP4XpnKLNFBKbyHDrCmwxc1f18GkBD+ZVzFUvTo4/iiiWMKXDW41A4L/A6QaoGweg0ar6NDfLqeUphrWW0kbKw1CFLU2QQglSYwtVfJdBBkANkWWpGRkePeOeygCXviC/sxbz3BFXLdl4p9S3v/KXeu63AqPcWb6vSBV4iVUDDpSTaV7UdHaDCEBXFqGIR/8TXsThwVeCHlNh+riUlUgeD9xeulosBeD6bo/fkGXy/AuldtRXrxrUyBTKOEUqeLcAZQ5KljHnPQpgQhjEeQemqe4MwJI7jXtJo7lBKLXnv55Eqn7Vj3Hzzzc8MUF1sKr3388AprQOnqqTTCYHUElOWRuogko0kItAWFQSoIEQFITIIkFohTFrFJ8bRyXoIIWm1RohCTZDEVbApxAWBYTiVqEH1rqAsCrq9lCztoXVAI4rQioqtUlU9syAE59BRTBiGNISmaLYJowjnqgaktZYwCBeTRnNfkjR2hFH0sDHGFEXhh4PEpwG0fft27r//fjZs2FDu27d/VirZDQI9H4VBGx81ASelOGJ8uTxUQRTGMVpmFXPCEBUEFVuAwoBpTPLo3t08/NDDHD90mPWbt3D7na9meaSJnB3836cBdZ49ssaQmYC9x+fY+e0dHHhsD1PLprnt5a9i46qVmPkjSFUzTkmE1oNFi4OYRqsNwhOFVeWh1+v6pJF8Y3xi4mtCyG9prfcIIZ2U7hz2PGNNes+ePQSBXoii+KthFH+q1R759tjE5MOjjeDuMJ83ATYI44QgblRRbRCgtEaoqg5UOsXI1tv45rcfZTGNeM3bfoFTpzvc9dnP8+d/8kfkrTUUZb869iwlKSHwzlIQsvd0wf07HuEH3/keRqbX8427vsEff+S3OZYr2pfdhildXSqpyyayX59uEjcaKGdITx3h5L7dPH7//eWZI0f+bnrZ8k8lSfKg1npWS+8SVfLAN7/67ABdd911KKX49kM7LHA0juIvT0zN/Mp4JN/X3vfVhbEjO9bH3RMyTppEzRFUGFTM0VXR3BhDe+P1zGUlX/rkX/LkwYM8cM/dzC4uYQTMH7mfvY/eR2vN1kEBjb6RHr6Gyq/Jskv56hc/z2M7d/DAPf/EseMnyBx05o9zzxf/kGBmPcmqrVhjzm5LKauqYtwgjBJ05xTt4w8RnnyMIw8+YI49/MCBbVdccVBr3VFSmoDCPq+i/Stf9Xoef3zPolLyvv2/fIed2P7SK8Io3D42OqJsEmIbDaJmC2XPILVG1GUPpxu0Vl/Gzn/4HIuzs3z5b/4K5wVCeJSCmUnIFp+iuWw95Zn94O0zsgfvCJqj0J5m7vhxnnp8P7/1K+9FiKpCoALwvX0szJ5gbO0VpEd21VoQcbZRFMaoICTRMNYOEDnsFGXp0nTp3950DVEUuboCxrZt254bQDfeeGP/bQnwxfe8Bu98KKWIgqRB1BrBNxpEjTayexYcgHhqNTpp0R6bpN2O8bLDYs/jHGzZILjycsmaTdtojEzRSdrY7txQ8fe8WMh7wvY4yfRK1m7awOHHdyKMJytASti2GdasGyOMGgStCZLJ5RSzRwaGXQgqgJTChBE6ipB4tFbGO5+FYXhBUJ53V6M5MoqzNrVl0RNSoaIGOo7RYVRT+Wwso5ME8Fy+/RZuf81rObTjkwhpmVohuPbaGBfdwbab34RUGqlDLJ4LVPGrSiIgg4hGc4wfese7WDyyA9JDoGHTFsWWy0aJ176NsalV4HJ00qBADGwRQlbOQ2mMDHDWYUqDt7YssjRX+l+e/nMCKIhjTFnOe2vnvPfr0RFBECKVPGsuBAghcWeeovf43cTTl/DD7/pPPHrvi5h76p9otnLG1t/I+qvfRntklM7xR7HpfF24Eee2EPzZnkK+cIp07imuvP42fvJX/4idX/0Yrvc4EyuXMb359aza9FKK0/vJTz5BMXusfl5/PKCkRmtFKgOMMaRpiS0swnsnzi/+v1CAlNZYZ+eFFIes89vREVqr2n6Is/MT4IqM7lO7SI/vRyajXL5hM2zeBjIgjGKYO8Cpwzuw2eLZovwFJRXVDE1vgbndXyNoTbJ8dIyp1/47ukuLeGPRGDq7/x6Xd/CmHDQAhskoRRXIIgOsdaS9HF8aGcWRztPs4gAUjo3z4rd/KL/7v799X26qEF8rhSnzc7ODwQQl3lpcb54ina9crtakspZqXii1eCZvLyTOFORzR8hmD4MH6SzeWoxz/cp8zRzLoFrff2iZoZXE6wjjBeliinQuiJI49mdmL05vfmzDJXzmx69Dar3HqtARxmjhselSXVTn7ECHjGx/gsP78PxemLfVZHH+7MTqZ/khcUN1rzz7+NrGXKDVOUBIIDDdhSohCWOs1GSLXRReKSlDb8zFASiemGDNTbcQRuFuG7bmpQrBWWzWPReQuntw/u8GiWedofezdZvnVflBSlAKtKp+1jmVNwZbFOdm+HXfHe8Rvgaj/o5+h2SYlUVvCW9KVBBS+oBioYeqHZzoP+s7BWj5lf+GaGKaqJU8XjYnDyIl3hm8KYYWvCrQ0+9SUCeVNRN8nZk7Y3DGYLIMWxb9jmMFihy+qm1oswxb5FWXpA9wvxRyfpPVU3c0hhbIFOAs6JDFXFAuZSgQpigVzwGg56zuSOMpXjSVnjpwZvWDIK4R3oG1eFlvBepa79A26dtgX2noz/bdrMX0etiywJdlJcbUCqHqeMp5vDGYNKXodQhbIwRJMnD//T4YQ/0uP8ymeix9MAUOITWLSx5XlIgkFM4aMTym7xggF08glk3g5uqMXyqQCmfzyo64emX7W6Y/gb6Upb/YzuGcxZY5C0cO45yrOhlBiNQKEDhrKLOM3uICSilmLr0MF4UDG4QfdOrPYZB3VX8N76s+nLU4dG2vLCLoa6WF1zrwUoiLB1CeGw6edNI51bLOIlSAjBqYhXlsWeKsQWpdyeZqGUrfTvjafiAEOm4RNkaIxtdiwimOPL6fzqlFJN26AehxzlN6SZyMc8mWy2ivWoX3BtNbwObdvu7lHCb1jXq/aWnLElMU0Bypc5ICGSe4qsziwyi01YJcJICsdWR5KbyXylmHFQo9OkN68iAmz9BFjAoCvJN4axAiGFAcPEF7ipE1W2nMXIJO2iAkE0XJzOICS4uLlEU+MMBKa+JGg3Z7lFa7VbWrvaNMF+idPMDSoV2UndmBoGFg52qP6MoCk2eURY5aPgUqqGOk+tiMEA5BKZS+eAD5oS3j6hZuvHITnb33UmQZKuxVJVQhcXWcI73CS0l77TbGN99I0Bg7pyAWx4o4jpmcmq7UZ33pkBCDvvxZuYsibE8TtqZoLtvE3L57WDr06IA5zlQsdmVJkaYUeYaxnvaqzVUE4YflM5SmLFMdhRcPIAEESnrvvfXOURQ5reWbiGbWU5w8WNWDatmJjmO8s/goYWLzjYxvvhGpw3Ps0TmRulIo9fQF8f7pOiDvPbo5zuTWO0DHzO+9F1dUdtDkKUWnQ9HtUvR6RNNraKzewnw3x3lXNwwBIcs0zXNUcHHcPIAWjqnEeO9d6lylMjUiYOqG1yKb43ipGb3sZoKZjRRpDxmPMHnVnYxvvgkhg3My9PN7cN57iqKk0+3S6XYpqmra07RAwzGU0CETl72Eia2342VI3llEja2ise4qSuchaTP54tfgZFTZSOcxeV7rhLwQQkjcxfRi1jA1PmvdkzMLou6H51lKMr2OVa98J4FwTG++jqfu/wrtZpuZq24nHl8+8F+VyxfnyPqstSwudTj05AGe2P0wJ488iUCwYv1GNl1xFctXrqbdap4jBR4GCQSjG68jGF3G8W99mTRos+GmV6NmLsGgUJNrWZifx1hbec6011efRY1mo9Gdnb94AIUY1n7sev/hFx2Yt9ZibSVty7OMZHxVVTQTsP7a29FRXKk1Bu74XBYYa+l0Ohw//BRHd9/P3V/6LPt37SLtdgBoj41x1XXXc+0dr2Zm09UsX7WGZqOBUvJpz/LeE0+sYu0dP0qZ9aoyyswmlLUUeT7ooFprKTtdauFSgBetste7eAA1fIf3XH4U59xxb6031oq+9k9mGbPdDlEYMjI6Wh2Kq9q6ZwXeNaCdTofTp08xe2AX8vijzAQlr775MhauXk+3lyKEoNmIGW0mRPOPcvqefZxadgVTG7YyOTVFkiQDqfHTbFWY0Ol0OHH8GKOjY5RleRYgYygW56uQwxqd9Xqj6dLSRYykS8OM7iC8O5wbk5qybBhjMKbS5iwtdTh48ADLli2n0WgM1GCVUMCQpikLi4t05k8jju5kpHuUKJSouMno2BQrgoCBdNELbGnIF88Q5Bn5qQc5s3SUuZVX0R6fotVqVQLy8xRneZ5z9OhRlpaWaDZb9MdnrcUUOcXcXHW60blAOjNFkV88gG5+83v51B9/BIU7kjqzVBRFo//lzjmSJKHXSzlw4ABBEJwzAVOWFGVJo5Gwbv0lRCsn8IvH8GWPxrINNJdvqqQwdW4nVYiQku6JJ0hPHUSETVa0lpHqEU6dnmVubg6lJKruojhnKcuSNE1xztFsNgfiij5zy16Xcu4MUgiUd6pzZm75g/sP89g//zVbbv6hi3RWw3vAHfHeHSnKcllZViqPKIoYGRlhbGwM8JSlqbaYFARBSBzHtFotms1mJQlWG5BiO967gZRuuPDWz0JHNlxDe93VVYDnK+HWxOQ08/PzzM/P0e32yLMU6xxKKUZHxwZCUmAg/zXWks/PUS4uooAACJW89CuzT6zsHn0iP/Pgn82Jk193xFNM3PZrLxyglsiZVp35XUW8x5TlNXmeE8cxxhiiKCJJEuI4Jo7jgZ6wH/QNu20x8GpyyO17LlQB7f8fAZVoNEmIooipqakBAH2WGGMoioIsy0jTlP4CGmPI5uZwxtCcmGDZZVtZ84pXv+zEid6fIKae7AVjfxmvWnWvIViE7wCgcZVyV29LsSaYv99Y++Y8z0We55WKKwwpyxKtNbaWBPd1y32B+XDcMywLvlDMc6FIftggV5rEulFZloPzGX2H0AcqyzLKoihbI62vT734pu0bv+/WidXbr6U9MblSKb3SS+2KPH9VauKPtnTx+/7M8uMnjn6M5Ve+6oUdqPv4H/4ukTC3LPnkb4XSE61mk9HRUdrtNs1mkyRJaDQaAxYNpw3D6vrzfz5rinPeTzckyizLSi9ZFAV5npNlGb1ej8XFRRYXF+n1ejhrTl2ycuI9YTL6863xiSvjuCoZV6cFIEszljpLKab40Orm0q/PF5FJsqdYc/OPP//zYm2ZE2B3dV2001p7e5qmBEEwJNGVg2twwGToWMHzfV0IID+kge5vrbIszwGo2+1W4i9jCRQ7Z5YvbzrVuCROEpI4RuugFqSaWtQukm5WvO1AJr50uBvdd/1U8/mfFwNYpRf5fPfyeS3s57z3zhhDt9ul0+nQ6/VI03RA7f6ZsOEVd0PCqOd7nf+cSt1aDrZTnuf0er3BWMqyxHvnkkB8Uehknda6WcmIq6Nbui7LWGsxZUleFBvSvHzVG140p0oXvjCArvux93Nr8gQNkf+NxD3qnKMoCjqdDp1Oh263OwAqTVPyoWjWDR04eab354PxTL/v25lh5nQ6HZaWluh2uxRFgXMOJfyumdH4CyDGB0V/56vUo58N5Hn/GTIvyom8Eyhb52kviPfXRId5w46ffSLEfBTv876WcXiA3W53wKb8vJD/Qmy6EGDns6Z/bx+cvt1J03TA4m63S57n/WfkkfIfvfUHpveAP+qc9X2Nd5EX5HlGllULmaVpdf7VGFeUVljrX/iZ1c1v/RB/+0czCPhEaeWtxqs3WWtJ0/RZjWoQBEMHXsTT7NI5Zy8u4MGGt1WfNX1glpaW6HQ6ZFk2OJ+hhfvseOT+7EtfaftLltsdeeHmEEw4U6VBxhp6vXSwkMbabhLIfe11olTz7oUDBDChUvYWk/NNWXyg46J1zssb+kzqG9DhSNZaWx0jqEF6phjpQsa5D85wrJOm6cDe9JkzDI7E3dtW9gPHFsX8rVdKQln8Y5rLv+uW5Vu11kIKgTGGXpqSZSlFWaKE3zmaBP/4iS8695IV2XcG0Et+/D/y+Y99mL351O4Veunnej78qPXyKl8fVhlOUPvbIY7jp4E07PGeKe45p3pQM6e/rfoeqygKjDF17dHtbIji5w70kt1bW0ts2vZiHvrW3fOB8r+RZ2Y8y9I7QcTGlPWzMu+sPdqK1B9cPeMea+oU7Trf2V9e6L/u/pNf45b97+bP133shp4L/4cV4iaBEP1Arh9Zx3FMFEWDoPKZQOoHkOeDfL4r74PU95a1zfEK982GLH/+zSd/7N67V/4Ot7z9fVXasfczqEsf5LEdd65b6Nk3ltZdXZbl6qIotbfm0VDz+YmG+lpufHciqthz6ff9yMX5+0FP/dV/4PePXcmVzTObOi74FevVG70QiajLqbo+vt2Pl7TWg7ipf509i3bOmbVzE86hoLDvwYwx9UFqnyrsp5si/+DufGb/j03sYONbPvy0sZ7YdRcCVOlUuJD60dI4PZb4M2vXBRmp9WLVnc9JMvC8X/f+6X/m270ZpnQ60nHhmwovf8Yht3lQ1UloUf3VFqkGR5v6NmiYPc9mnIcvd7aNbSXu4QD7kXHZ/eS8byxeqk5w0zv/80WZ10X9G2YAd33817hlxYN8/uBt6zOn31B6+YMOcaXzjCJqCOoTitQH8cQznID2dSt50M4+22v2wvsFKdwjWri/jkX5mde1PnXwG72X8v0XCZjvGkD91zf+9L+yMuqwqzcz0bV6m/Vie+nlZR7WAGMgRoCWh6aHpKpCDNDxAl8CqYAu+I73LAqYF4JDgXB7JHZHU+S7bgmenH3cTnDDOz74XZnHdw2g81+Pf+G3iZWXT/WiRqcQDaBtPRPelpNO6HHrRdN7r+oxGYXvClfMIeQZIZjF+aVG4Hrrm3kvNbjL3/De78m4/x+o7yDL2mvMhAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwNDoxMjoyMiswMDowMCvj4vYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDQ6MTI6MjIrMDA6MDBavlpKAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

SantaClausMediumLightSkinTone.displayName = 'SantaClausMediumLightSkinTone'
SantaClausMediumLightSkinTone.defaultProps = {}

export default SantaClausMediumLightSkinTone
