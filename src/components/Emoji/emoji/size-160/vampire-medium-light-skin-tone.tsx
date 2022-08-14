import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiVampireMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-vampire-medium-light-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcEyYp+h5oFwAAAAZiS0dEAP8A/wD/oL2nkwAAH2ZJREFUeNrlXGdwXNd1Pm97A3YXi14IkmAvYJNEiqJVLMqW7NgSqVFGoktmbGecP/Z4EjuxJ7Enk8zEKUpz4jaZjDKxI8u2IlORZMeyKVMUKdKk2AE2kEQvi93FYnt9+/Kd+95dPIBgEynJSXZ4Zwveu+W753yn3POo0Hv8qg+FyG63U7FYVPCVG2maVuH3qXj8vZ4e2d7NwRobGmgyEqGG+noGQfymqqr4jHf+QbNarfSb9FLerYEYFEWpDqdUKhWB0EcffVT8wMBYLJbqNd/5znf+fwHE0sOLl5KTyWTI7XZTNBaj3+TXOwpQU1PTvAMF6urI6/VSIpGwQpIckJwagOfFZwsDyJKExkgW8XsWLe1wOIqlUonOnjnzfwMglhherM1uV9rb27XuNWvoX595hlatXu3D7yvQNqOtYRwBRjuaH98FATFAmv4qoMUBXD/ee/GnY1DFnoaGhghIvXzo4MH/3QBhYdTS0kIjkTC1N7XU4/sj0LPH7TbbXZCIRlgvq81mI24MipiQwUEMLt/PJF4ul9nKaWhJtEv4/SDazyFiB301NdF8NvuOSdZtBSgE1TGRMHlqajS1oip2m/1+l9P55ZqamnvRXHiRDaQswDDx0hWTmyF1HTCAlS8UKAtA0NJQuaP4/Xv484t4jzLI586efXcAeuyxxwi7zDu3ADvclMvljmMC5Zdeemne65/9wQ9o11NP0dKlSyk+NWVl/WAecXk8j0NSnoZadNYFg8Jaabc4aQ3gg5AE0afT6TyA2oPh/grjvYl39Xog7dixgwF3Yl0bcO8ANnOC57V79+4rrrVeDZzz589zJ5sKhcK3MfCjmMjL6Cw1MDAw76BDg4O0pKtLATiWsfHxytIVK3gBd+Deb9XX1y9mM2+5TT4O76oV0sIbiGYD4sugig9ioSmM14vNUKPwt6726ujoIKxrCe9rMpl8Hz4fj8fjUQbu8OHD1wbokUceofHxcQqFQtsgPd+G/t8NlRgGQN8DYLnh4eErBvzqV79Ka9aupcULF9K5C+etgUDwjnwu//mKVvkC7lkF1VM8sFpmlbk1hBRd9PHOQDldTpZMP+Z6L4CqQBWPherrS7GruBAwGsxtPkj2JwDQVvy0Di7HsbGxsfDq1avp4sWLVweotbWVnE7nGgz2XQC0kfUaAB0eHR19Dh2W0ckVA+7bt4/GJyaop7fXW1YrnwMQf4u5f6hULDZzCMH+DrhnBiDtxpRMu1FeQL8OhCtQGRdUb4uqk9phgFSeDyR2PyA1is/n+y1w2UJIXifWuQIg78N8pxdiowehEcKizr2ZLQbah9E2yjAAHUT6+vpK+Xx+3gkvX7mSsG8utD9yOhx/BgvWUc8qBXD5Hvg7VMA7E7do3CeaNk+Tf+PrNKOZP8vv4je+x+AknivHdDU+nxdS9UX87VPsVy1dtuyK+YJPCSpVwDhTMtzBerehfQQACQzk62oABfgmbmIiRGEtk1AT2dwVgy3BBM73C5HcBcn7AvTfjUmS1+MRnjI7d9PT08JjZpDK+M5jqDyOMYbKCzRaRf42p5WNNuu3aj9lKrErgL7hN5DH7WbH88sA6f0MYhcMh/kVz2Spv7+/AGDDpv5s6K8ZUmjhNV8VIMP3cEgfBCpNq6iw8sATH1j14pYu66EnHpxNYiDeZZ1dy+Hb/H7A769hUVeNAQAY/m6hLKzN5OQkTUOS8vkCW0bRStwYMHPjBeNdLphbSTZcXzDuLZhasaj/vWj0B+cU5O1sh+p9BSFfs9mNOPHb2+kz1jyd/ug97UuslTbVWKchlTXow2KWINt8AOHlkJ9ZiNPjY48focLG1lzxP0Ne7w+PPvnBnlwuW/z0uQjl0zmL2+f+OHhqlQOAcOdSRRg8kcqA5ECkxXdWPZYss2NoJm/FxD9iYeKfVuWuimmxVTUT182oLffN45ZKxXtLlfLHlte3/i1f+8NuxkxxP7Ri0QcvxKa+aCunt3DILFUWr6DBy+XrAWSRnxUMOJ1MWY7Gwl3D8eSXFtXX7WoN1P530Ot5Ye/diw9se/NSIyb0uMvlVKTaaBWeqC5FPNlQIEDoiaKRqOizDg4lS5eM3mcBZHyfxUsmIKqAGOSsGX8ze+D8mfvGhrDa7Do1PvjcyMfvnTh8ZnDTZHz6syPR2M4LYxOBmB8BtDNgBsjF7ts180HGBBRJXvzBhR20YcGT8bgylUq1D/m8n2kL+p+ITccPvb/WPnmwaF2kKBbsGDihUiV2IU38e3NzE7W0L6Cjx44JkFgVgnAa2aM2AtN5pUmq+VywxMaxiWe/iq83/ibvlQCLd1JWbvZ7P7n/eF9gLJ54qn8y0oF3Jlty+TUhsiaAFNn3NSVIM7ZI7hRf5LJgV8TAFUhUkuKplL/f4fhg2N9I1tr6GQtl7KjkDR7M4/XQsuXLye5w0onjx+ASjAtLEoBkcVTPsZgOzowHMJ/E8DUCeIBGeiAs/CD5u1kKq98VcivF/NcO9UUdAMbCm+jAWjzgRrH7JtBZJowg+eoA8Y5JF0RfbIUc6MglxVZeh0uyACBc1nfKRHTiszCXLIFiFzVqa20RUlNT46OTJ07QpUuXKBwOkw8AeWH1dEKfkYgZidaJSZkj5bp0KmwlMC9FXGfMvSqJUtX6UilXIBUjLzDxWIEYA8S5FIsySyp5yaox5+tJkCoWLW7UID0WqhGqoOgAsVgK8oRa2exiFcLkGurAn1l6NIOop+NTQvrYAQsE/NTS3EK9vT10preXIrGoCD6dUDcmbyZ6m8wusupp+nYJpdd0/Hi8HO7RXG6oqZOYEXgTqurHGyn5jX0xqDnxGqwawLGIzXaBFVOGpJkkP4f3yo0AlFEMAmROcQH1WlxpMwCCzAiLkcLtRQxumeXAaYYvNSNR4+EYXb58kVrbO6ixsQmSVEcLOhfQuvXr8Hs/9aNNhCcolUpSOpUWG8Hq6HA6hPpZDZ6SCxaZNEgoGwWbzZSqVZQqpzCIHPspPB8GFn3WYh1OxWi40I77yiXVDFAYG6ua8+JXU7GUBIsX6sAN3LkDHdoMDWAJmgDhl3gglQeYTc78nT/7XA5KlUu0b/8B2rDxTgpAzXjRLC1s8pctWw5gUjQ1NUUR+EqjoyM0OjIinEvmKSEpBg/xfayKAjTMicFkiWOyZ4AEl1msurrrOofv4MOKQIh8+OxgcCBQDk0Hm9dnHBqU8T5RW1ur8nyuJ0Ep/WPFIrxTt02omJP9C0P6eAKuimKoVEl3Do2FMBFmMmkx6a6F7fT4tvtocHhEd+JYJQ2/hhfEi2OybmtrE8AiRhJpjEw6BeDSlEqn8TlNMQYQETrzViIxTQ5Ijr/Gw+kOITnFQp5qa/2if2UOj0n69kCKGCBeAzcV6ymVi5I3maCjDI7ksnkB4kmyqGGQMueLC+zdeuwwBYqwZM6Zgwly8yaxpKgW3fcxFg4nkkKQFJ5YEWCtWr2Stt17vwAGrsksKyU/s5roEuIgBJGkNTZWLaLkNI7rWNL6LlygsdEhCoXqaf+bh4QTqpYKwqXw+/2z/CSZP3Ljo4eljN0DRV94DlJUgBeuYA0Yn9O7YzwmIvyrA8S6jdcEAMqIkAPfc3CsXTCLLhZNI9Ug/CPWd5VJsVKdFC/Ejt3l3EpjYzN7s7BcQUHEvEBB3rg0GAyICN/knFZVlPP1ZlPLasWSxUAh1oNf1VzlHV+Nn17f+xq5IYmX+geogHe+nmZOIYWqBdl62XSesvAbhCSt8QYWJQhJjCmSSBxc3whAnCwPMgBJWCv2HVxG55pxo4cHqnC8ZtHVC7+lIaIburtpxYqVwnwPDQ3RKz/9GY2NjaPvgsFPGt199xZ65JGHZwEhJWZWtG78/fDhI3T8+AkBit1uE2rJVnH5ihXU3t5GSYxbfPklGhmfAME7hNUUnIp+7BUA64GEOixCqhUVY2AhcYBUggTxoiAMEVax656s8k4xiNihGG5YDJtH0+i1AvEVfqmUXDQ/zKYTJJfWQI7wlwqFIrkcdiz+bqqpraXz5y/Qnj17BL+8733bhNTo/okF0tVgeNBa1d8xTjPmdRQ3btxAS5YsEfyQMYLfc+fO04kTJ+mhhx6kNljIeCxGL/zkBcqD3D0ej66euN4HWALMDVbhwAkLU1RsNIXNL0OCSB+XAUpfFyDDl4GLoIyg3QnmoigQL4A7AmqRLA4bVVjX0HGdUqEaqEyygh3DQkvFPN17z1ZasnSZAKKjo5127XpKZPCYjCUQ7JZohksgXUB9wzWTk6bM8qo5kdfWJmM0/doEuGJwYFBIk8/npe71G6inp4fOgqPkeMwxndAnn4Vxwf280ZpKWawnVq4IV8EAaJD9oLlZz3mtGHgiB8LsEy47A1QsUxIdNsKaTXzocSpi9+3jQ+Q+e4yazgzToFoWqtbR2kybt9xDDjhvfC97zpw3ZqmcnoqSpuaE3+LyIg5zewVhs6fOEjWTaJRhhcVwqjXJtUL989kk5TMgZUitxeampUuXVLmvoaGRtkB6L12+ZFhMGzatQM0BN5XWrafcolVEPj8533yNpvr6aKpQlD4Tvy6wYZp7wnIFQNyxOHnQtNNoRVzuiOeLFK5x0ELEHJml68jW1km5pXdQauVmavO+RHTgmJj8wvZWqg0EodKWasDIfg2peYpHhqjn9DGIf4rWb7qLlq66GyD5hSdsjqHMQac5yco+UTY5QSePHqCLF3qpLtRA6+/YBn+pFkRdKwifUxxdUMMF4KTB0XHOCVEDNmnVjo+QumkLuXENO41qfx9NXBqgZL4g0yQZDNJr+EOzRrbMmwvW9f6EIGsmXvgYQ3Y3PqTJPjEi+MbFktDYTpseeZy23HmnALagalXrwu9T4ISGUIAK2SgNjCVo49aP0Cuv9dI/Pv0vNHj0DXLAGWE/69r5eUVIoMtWoFd//gotWLaZSvZ2+u6/vUw/eebfaVl7veBG5iX2wH2+GlrStZgqUB2O+3bs2Elr77oHIAJA1ohshsqjwzRqc1FO51upXmfmO5+zXGNufNx7TOhxLk/9VocITt0Xe6msWzrETBaqhy/ygYcfoVUrV2I11mpUzmadiXhD9zJ69j+epZMnexF/9QpJ01J5OvfCK9ToYRPuuurBoeTEhvo6mhi5QC+9vIdOn+6BRRwVf5s+1UdD+/bQ9u0PGD6cKqS/rr4RJO2m7e9/EN77RpH+FXTBGhIep9wYvHXFTiUDILwOsQ803/iWa+wci91rPMcy9HiwoNKE3UW+vh6qTEWq3ilPiGOr7u51IoyQXGJDz3fddRdlM4jYJqeo98B+UdLCvlCNHV4wpLGUTIB4W6tiLQl4Nl4azHk7RYcGyJ9I03e/+c906NAhseA2p40yA0Pkh8Vcv74bABX1jIPdARWsh7p1iZBGqiyncbVzpyiKDR8tILjWpZdPIvbgmpI5ZXJdgIxd3Ys2yjeOJVPU5/RhseMg5+MYbCa1wCC1dyyAqe2spjv4aIWtS7CulVa3tNMGkPUyxGWLsagnA3ba1llHzfBjWpqbwBV2U86nmnAVfQX9NVhsIy1ZvJpWQyo2uF3UCUu61WenJ+ostHrNCnK4PdTW2kY1UC8Rs4H8gxjb4/GSDDy5+1wsStaTh2kA5D6ZSMoxL6FdtQrCejVwDMJM4n0TflqjwiQHsSvduWnywpJML1lNVkzIYqQMmCfEebyHUxBu4THZsZDWtg4ErAqljrxFq/D3p+rsdG9rDYU+9Sla+OBOqGKB+OyqbGQv577cWDxLQ1tnB6Wh3p7BUXrAa6dPhOzUdkc3dX3+K2Svrafz8InEyQnmwX4QW7Curi4RtvBa8nBLSr/eS+UjB2ifu476wpPiBAV/+xHm/SO8a/OpuvVa5Mhn8ezp4/OHK2rZ5qwL0QqlTK3xSSqCO7KdS8WBnTxrYt5hy8E+iMgDTSeEmV26YRMtvnM91bXUUvuGbqr7nU9T8weeoEgsKdId7GByAMOmnYmWSKlyGf8tCdff66+jNQ/cRw0Lm6ils5kaH3qYGj79eVKCLXT2zFkahacug11+Z1LmsEQcPQGI1OAlcr/0HA2XNHqDXCLwxRgJgPJ1rLPPnEG9IYBkAMm1lGh8vtSqYfHtAT91ZSBF0XFKNLRSpaFZJLh4YkmoIQPjhhrYwQO8SI7IY3FE33WNVL9+M7nWbaF8TTOINiwicz0tK/0e3hTrHDOvUS6fo2g0RjlsV3DZGqpdfzepnSsokizQAOKvJMaQaV7muFxO97c4mOW0bGIqRpafPk+28710tL6D3orEKQerh3HeQPsH5qH5+OeGijjXrFkzevr06RfwceN0fMpypqWBttic1AqCbfnFT2goECJlwSLhg1gREOq56LKRH7IJteOzsEgkNnNiYfjPM0n6mfSoDDdmYjHdD+LvnCPiyF2GHzLNa07wq6qe2ZRSzDFa+Y1fUuDEIYq4PHRRcVAqMS38TvTxYz5HvFbNwDXLLXgSEb1KguOUB8ulUoOC6LkTRNtazJInNU3WeIQizQuoZIMbAMvE4i1SpyBlq9U666ShmhW8ov5HB8KcHZQLnmM0riiyMoPDwXA2q6u6DRJMkMbiWwfI/8vdpOSy1At1PJAqkFH5cRj9/AUnB68mPdcFyOQ0cgUAPEV6oFTRrIHGJlqejZMDC/NOTZItMk5Ru1NE/Sw57NvIzJ85ADVXsZpfrBZ5qFE1cW8EzWKhNtsVAM09LzPCIyPZloZrkaZKKknOU4cptO+nZM8kESo56UCwlU4PjbD/k0U3f45739CuU0hxMwU7l9HuKBWLi63BEC2xqFRfygvu8AGkxMgg/dfgENXCe2VCZQnS1W5miPkOCkV+F4uZmAgbqZCK8Iqj0ajIFnJULs/NZlWbmcBh6WGAmHvS0zE6dfg1uCInadWZt8hqFFxchqXbW7DQuF6d8iLaX/M+3M5C8jB3CtO4+vL4RPNbHU20KJcgHyZpBUjpfIlODg6QHXre2L4Iu+kRPGCWInkoZ2566tUuQOG6JCkxshTH7HbMU0NQzYHLs/nx4cv0q4MnaWuwlrYZ6pi12OiUK0BDl4e5L97opzmlcyOLttxk6RJ71v+UmJoqHswU6aLLXz0PnwIHlaHz5/ouUjw2KdRGlpKYSbValWEcEem+jltUfTU2Ngo14+8MTigUmsVjZukxn8FJ855OJejo0WM0lcpRjhMw2DguP7vkDdCxRJbSySRHB3/D/PNOPYrAftG3tUpldf/YxK49C1tpcTFDdvwc0yzC2RubTNC5s70UCDUJCWI1s8xz+ikBkgCwQ8dqKQ/uWJL4u1m9ZiyVOkt6RLUHABrpv0hnLlwWbnOGPX0b3Axw4z6Lj4bHh1knn0E337tGbdYtS5Aor0H702w6dfBANEEH3UGRbQyXVJGcUoHB6Z5eik1OzMpDm8/Y5e6XZK2QAQoDwtIjTbRZveRprezLzD08Rjo5TWd7j1Mio9cwZQBBHhJ9EF7zMcSChVz2Vfz8l/ynd+NhFvY8/zgSjT6z29XW2eWqoVp4vAs9DhqDNoRjPNmT5EcQy/ljs5popkIDXiTnrJl/pBToHKSIRbsQu3kQanAQzIl6cwpWAsbXCf4aPEdnz/eJEIfDE+I6AAD9s2SJT0K4CP1POK682YXeStnpIFRterpYuj9fG3Q9SVm6x4kZ1NaRDXEbH/34gn5yuX3VB1XmyzUPwvJxfpml/lev7aUeSB/nsvnsXq+7VkQFWX196ApwCoW8cASnJkfp0IHXqG8oQm7Eh4821NAaRED7VDudHw9PqOXSH6CjX72dRd5qXe4ZtVSqhDVlq9fvt99RylBzpURt5QIVFCtFEEOxFCFqJatFOooz6QyWIq4VWrt2LW3evFmEHnyuVYeYj/PZO3fupO513cK3YpC52k1yDksOhxjTcAcuHn+TpgbHaLmmUgvcjAccFeExHwhPJfLZDEvOczfDO7cTIHZ1jxcLBdeYzXVnU22NbVUhSUUshKvKSoifyvksWRGviWT5nOp5njMnudhycfaPv/PJRVfXYpHoD4WCIm/NxQ8yHczgsL/DJ6Bc0jd14jDlDx+itmKe1lortNVWoXPuAL0cz6YRlrCnzM9Vld7uAm9HZTefBB7J5Is1Ya9/Y5fHaW0qwcyqUDM+U8MOV6AitlADyXI3c3hBxlGSAxaHnUV+1IAPG0VVidMuTmwZCJYiGUowOHyiETlzisIH9pEDm1Fv1ajNbqGxQAPtzlJ2dHLyaVDA3xsJMXovARKRgVZRfz1dKHgnvf4NKxwWW10ZHIGll9jkQnU07LAlUAeHQBFHLao6czjIhZjJRFwYVXYaWWpYpRgQDh1Ejievhx4MDmcIogBnYv9esuQyFLJbaQHASYD/XijZMxfHw0+rpSL7O9lbXdjtfP4xDz46GC2WHDGPf8NqRBpBFcJlnFQUIpOkJRHSgUQ5sC3p5cYzjl6xPKs6hBuDks5kqwUNaW6I6CMn3qLoof1kh/o2ABgGp4ggenfFlTw7Gfl6OZ/7u9sBzu0GiAmmoBaLByfKajHh9N4BS+IKgjhZh/hYHGRCND5CqgaOcntF2rZaEmzwCyfIdInJV3M7otoD0pPBvfGDeynde4rc5RI1OCA5fJzs8dGLFVfkVDT+tXI2+81bVat3DiCDkwDS4dFSZTJpta9fYdP8Hq2i54BA1BoWrUTDpDa1UMHmFLXP0gdiieF3bqI2CI1/k2FL7tQR0i6cFbVKDYZaFWEhdxdtF47HU19Sc9nv3wohv1sAkcVmU9VC4fS4ZolEKsrWJVbNFzBGsnOVGjzcXPtictXVk80UyJrjq0q1vJdEuMJZS8flC1SfjlMdwGmCSCY0hV4oWCLnC+rXQMjPOx2OUrl0W/G5fY+Fd3Z28sKsWEwrvOEt8Hnuw+o2jeVyNc8m47TTXqQ2LKqAxacBykA6R8sCAWptaRI+UhZcw3yT4/QEgOEnePi01M9FUfDG2aHMwRo2AmgX2hCiwufLdkp4/bWNdtsfYgrb0d7gBmD52YiSfCDlPQOId5ajcBCqE4DcCWB24v1BWKClXNHOEuCGjzPtr6MfZ1O0o5Kjbj7Gaeygcy6PsFAdC+6ipsYGchqB6jl40VyTyGdaskKDk/8jQ8PEJVkNIOOTmTztJiela31c9cZn16uM9iQ/uob2Ku77AeZ2GPPJc78jIyPvLkAcG01MTPACVgOozwGUx9CazEGmDFBZjZIIOfb6W+h9n9xEoYVQmfRy+sWBi6KeqGvxIlEv7QCfDA+PieJNBl5mFtnnySRTdPeO+6muVaNjJ1KUf/UYQhp1vvUsxub8HtpOjM2Pan4D/NXb1tamjY6O3jxdvC3iAghcvLRgwYL7IDXfhyf8WUThTTJBppjKa6spTTh8rcsXUWAt1MzWS52tYcRaAerp7REmncMQJuVyGRYOJj+dzlQT8FwF64O0NN1XQ2rLOfrQw3XU2lgnvPBrvBoxj9/F+/exgfdzrsn8mPo7StJcEBWLxdZBBb6Fnd8gn7uQeR4z4ZpPJ0rwsNuaHAgtfHR5yEapfEAcCnBtDz8dHY1NUT5XEGkPUcDusIss4/79+8mNyL7Ol4a7UKCzfTF6/dC48J3mS+HOFXbMoRthxxEANc5zMaro3hmAOJhMp9MNPp/vG/h8nwTHfAxzJTi6FCVTWTpyYoJOnCmQ1bUUPqMe6fcPDIgzLK4W5/pop/HUED9GdeSto4j2w1TrD9LAaJn27Oun51/qoanpgnjUau7j5PMdgOLVAj+rA/P+Ba7P3gxAN6VirD4bN27khNZOSM9DvBB5YCe94lkP4pnK6SRgvLCxMIIQfl4e1olB4jjr5MmTBBNIXkgTH19z36lURiTZ+Yyf1besuamnL0tDo+krwL9eCQ2A2Y73J1jNZJHnOwLQ66+/3gAV+BgAcsgjZ26i8t0EztxHmMwHe1y5bHpkSaQ8RkaHq6cYsjg8Ds87h3CCpVYUb9qs4uyM1W/uJtwAQDzfXf39/Y3XOgd72wBZjMewgf5mTH4DgyUS5Wk9mJyboJ8rOeaEvV7qO1NoJXLX6O/0qRPVI2+O1S5cOC+sG7sT4rkV42Cxolbm3YT5zvSkdBtJu3VoW+TG3HaAkskknGTbdgDlkzWDHGGbVWy+h9/Mpw/ycUd5ZqYYk+V6xuHhIRoY6BcSwqV7k5MTUK9glYjFIkXdZGWWtF6r+Io3kJtxvw/v27GhFu0Gn7y+WTMfwsI28+LMgEjJuZZqlU3Ruy41Th0k4zyepYhPNo4eOSLO33t7TovvzEcSHK77MbsQ86mzWXrkcZAE0XBBtuBj/W0FSKoDJrkYg7AjNouUJf9cTXrMYEr1kkdC+rGQVbRQqA6WLkH739hHsamoMP3yPz+RD7AoJgmaG7fNd/pqfoLQULNFaF1zT2tvWYIMJ3ANFhTSTM+HmY9j5gI03+PdMw/dOqoA8ckHky9bl2ZYmXB4QvzvMfJpRHkdWz3FKPU389p8XCQBMrsADBBaEN/X3ihANxRq6HU+KbYwazBhq3lyEizpDcuB55KzeZfNFsxcE82/BYJcthc0/U2pnoqwinGJ8XwbIEEwL1wzPQVt4jHueA02VLlaVdnbjcVq0Pcq7n9uGGGerNy1ucfMZjKdeWjFMkuFJWhGnfYVZTNsxcyxnpnf5p73z33WdQ7Yq3Bf7Y2cz98wQOi8Fh3zQVW2or+uqNkxT2ouP5gPDMl4vtRqsc7yhKUEmqVA9ivAM7hqLkDmTZP9yHEl6KZnWGEIFS7H9d8IQP8DTOSPUkaVGt8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMTk6Mzg6MzQrMDA6MDC/nO7DAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDE5OjM4OjM0KzAwOjAwzsFWfwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiVampireMediumLightSkinTone.displayName = 'EmojiVampireMediumLightSkinTone'
EmojiVampireMediumLightSkinTone.defaultProps = {}

export default EmojiVampireMediumLightSkinTone
