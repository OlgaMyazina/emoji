import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonDarkSkinToneCurlyHair = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-dark-skin-tone-curly-hair"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBzAMDhFlTgAAAAZiS0dEAP8A/wD/oL2nkwAAH65JREFUeNrlWwl0XGd1fpIt2dpnRjOaGW2zaTSSRqPRrlk02iVrl2XLlixvsWPIQjYI2dmhoaQFQiEtW0hCA2kJgRCSQEMboIHQNqWFNieQHpJDAgGyNklTk4X49vvumyfLxklsx2lCO+fc8zRv3vvf/3/3u9+995+RYfwvviZ6WoyxzmjufF9X5dbh1PDmgZ6t6eb6ubawv2Wko7k2GQ0XdNQHjNKiolxnWUmV3+MaDFVWTIS8FZHeWP26eLDGGO9pNf7gX/m5eUZezlqjID9/bd6aNWt4LtPaaGTijYUTidZT5jKdd872djw22Nb0TGck8FSmJXL/QGvjj3tjkas6G0K74qHai7oagneOdMYenUy2/edYV8tPhtqjnwZIA5lYfWF3YyjaF2+YysQbYm1hXwGufeODcv7OaaMtGDBmezsd0+n2aQBx6VB7018mo3VXgxXndUQCI+lY/buw0Kf74w0CQGS6t0sWx/pkYTgtwx3N0tMYEoDzfGck+CJAEwAj06l2mUl3yGhns2Cc3zT7q28CqD/D5/sH2poezLQ0XJNoqus+dctk7kym640JDiZqDHc25wKA4dGu2N/MpNv/a7y7RQCQwOvS3RB6sbXO9zQ8/Sy8LwgrmUq2yemLM3LOzs2yd25UEG4CRhEgwbUrR9wjyaY6PTb5qqQRNtZtArcBx9lMJ8G9P9Vcv2thsGftdKrtjQXOp95xqtEVCRoApxfM+NlwR1QmEm1gR6dMYhFkBgGB93XBWIiyYaCtURA+sjiSkk393YKQA2NiAnZIC8DpagpLWzggjbWVUlflFp/bKd5yu4I02hkT6JiM98QBUlzBhhN+3dUQGm8NVhvpeNPrC8pYd9zY0NOaEw/5irEYL8BpB+W/PgVAdk4Oyq7pIVkYTOoCGE6p5rAVPnokOBBkScHgcQWHixxsj8rcQFJOXZyVvRs3yHx/j4JGcN32MikuWC81rnIA5xeGIA3ASF9LgyCEJVztubo55FvX6K95fYABAMa20YQBTQhs7Ou6cDwRv7W/tfFHWOhD0JYXF0fSsmUoKQizbGgFpR2L0ZCB1dd4xQ8mtOFvAgXtkBGwaTLRKhMAk1rDsNuDkCNoZNbSaFqP6VhEQSovLRFkN7DKIw1gF0MuFqzRZ4Bpj+P9FQB0V6Ip3N5RHyxKtTQY0K3XHpwKW6lxya6N1JpWgPNd6MwBhhPZQRAICMACM+oOAQa0V7ZAeCXqrwYDHBL0VqzoC8NvCNpDPUF2A/MSCg5tHsDM95nhRz0jGLUV5Xp/BGCTWT0AuRXP4nueZwhiLi+Aeb/CmNfDRiYS8Tw47bUFqNpVbjhKim1IrTcyHJiFyAACQU+2hnwr4kqPttf7wY6YiilqHL22JViri6itcEoYDOC1ChBCi7qEhSiTGFY8h1SuxjAl6KFKtxqBJuAcdwGM3TM7KgO4nuNWQqfIzslkq8CR1LnfQPxPn0y3r33NQIr4agx4CFaZgsg+yklzwZwkRZRhU1/tXTEufDptsmAQesMJU3x5ngusdjoU2BkI+fbxflifhhEBIhPNsXm9T1lCZo4g5UcD1QoAx2gCSPwM+qefoaxQPWIYkkUcIwHmEljM81f9bU0D3U11xlz6Nchy9pIiAws3uhpDp2Oxv2MYcYFNSnmngF16pHHyA+3NshV6RH3hBKk5XExjbZV+DhbKvvkNct7eJXnrri2a5qld1CACRCbSuEiG3t6NY/L2vYuyb9OEgsbnkEX8nFkSZYY0AzyGINlMIQ94XapVNIg3x7v8jIWxNaitTiw4qaaQ0eqvzEfWmoVI362LBiPICqs28btd4nXYpArercdkJpJmZuqPN2qo8ToVUYCDahkhMSJv37NVF8wQYaqnwDN1D7Y2SSxQA1D9Gl6sj1grXXLabjl167TWSgSBgJNxu6YG5czlOdkGJrbiHj6DOuUqKxG0KziWKusg4A9hLp9AplyGRLj6WiLGFRec9SoLQLQHfbF621hP/AMnz48/tryhT1MrKc/FM93SO7XwGCfBibFeYW1CHaG+dFJIASbCU7WJQrxnZgTVc0pTO0EhOCdNDytQ1B6GTzNAIpt4/V5ozGkAh0UhBZ8spChzfDpj24aMgk4w6QzOwW0rU70j2Fps4j4eMf9nAezXUe03UpNOnR85PnA2DaaMyy44MwdgnL842vvsGdvmhHUOxZlepAe5CFKeRipXI0OR/lwkhbXLjH+tUfg5CkqZZdsA8EZYUEKQybTdqJtO2TyBlN6rwstQITO14kadRH1iTcVFcsEcK8DFA3AaGT2eHYshR/DoMDKNz6QOIuvq2HQw54fQ/QrucaAqPz6AeprCRkck6AYg/8SJL431YnCzh+pprDOrXdMjqkcehFgsaBaC1CgembXIMi6CE7Z0hZ9ZhR4XtWUooemdWWcYk6e+RFVoQ8JSgoylQwgOF98ANlKcmanYr3FcgsS5kXWcm8duU6bxPhaSBJqsZtgSaIy5H+G+vHmg2/B7nMcOUCc6ZNQX4cH2pvsxiPY/HJgTYDZiaIWzWYsTofYQEC6O7QRDkJmIoDGlM9OloD/9bVGIalQn3qnebVLPcvKsqunpeYTKLoThboTW5qGUgkpg+Cwe+QwCQj2khg3h/pZslc5MxvnRIWRam9ZoERV7K/vSodrSBGuuwlLzqpyOYwdoBO3EcFdLN7zyMCdN9nBwPpAxXoEYpwCauuNSEEjpqXSnvHlhUsWTqZcss/SC2eiCfcty1o5NSPEdOkmOp17G5Kk3i8OmYC+NZaA7MxDzRW1d6BxWzzReT/HnPZwbSwpmsbZsccrnMdTjWZYTOPZvDC3exxCmJgLAr67Pz1/vLCs9doBQ2tMGAMqTI7oVYXbU9BwnwfqHzCEzqD30KovCkwECBZMs4IQYXryOHTlDiFp2CgCkoDLEmrJ6w/BYwLkdE/0q1hRvjrc4mtExeS9DLABWdGfrKlbxZB5DjeyiKPuyxSKzWTtrKBabcG4GLGLpsRXjNeB5yHDP2YuLzuVay4oKj3HnL9Fq7JsdXIMy/jyA8RybStYyVnPJhZPKTf4qLfo4MeoEGWCyLaIgcuFWjcTws7Y5qDeseXgdgaWmMNQIzJsh1hTtjRhrCgun5ynAfM+2gmFjlQ40AkDRZ+1Do+PIJjKEjCaQHJsO4O4BHTSd6ZIqp/2fnaXFvgpbybGzZ9tw0sBiJsGeh62exyrMCAAfRv2g7nhQuUYBFD1EgaVXSW3ewyIxgkkyDDlZ6hEXReGlJhBwLojeZ4fPvovhtYgGlYzhOWoZw4ssoFPIVmZP3T4JmaLfC6DpBILCcOLY1Ew+iwwm+zlnhiRLAlbuEPmnOur9Z/e21K/BPccGkIgYePCVqWzcU5Atz9Cb9DwnGASNWSCSHaR9MqtRNCtbMd6Z4UJgGUEygarRxdK7TNdctKUT4z0tukD+rZpXZ2qUVSXzeQSCDqOD2rMaRicQJF5DUSbTOY5VlZO9Zki2KIO10Y6GfwEZSYGZaMLjRw9QXzycgwXckMw2mOjk9eEUZz6IEyAIrKD5GSdlLYTXk0F835ytWVjROkqKVMjJFm1PEJqhLMBoZbQNIWgWsGQogWSmJBjecps4S0vUVGuyxSB1ic7jeJwPw6wZ1zOpEAQ6wcp6moWzpQXrpX6TVR/du3E8d+NA4ugByluTk4NBb+CCOWEuxFZcqIuk17gAq7YpXr9eMxrF02pWg5XmAqg/bB5tRYVSuG6dlBYWSE0260EgpWBdvhStX6efcYFkiWoSFkwwySyOTXaUFKyXdfl5mEfRyuYZ2wmyiTuNzKgEp4pAYS50EgGndnIsOqwnCz53Dhiy1C6A9H00u+WTyfajB+i2y95mYPGfJDDZblgBKClcDytQDxIITnA9Js0FctJkE488TwDIDBfOQRB12zRS48F7k01kVUlBgYIGsdR7GYpklB7BmGqn2b5wD4ljNPkq1fieY/NcEE1pDKFP49/aEwIkOpLsYqKgs9i+WGWAtkARUwshF/fi7wB06ugBcpUWG/biwrHy0uLHCIa1n8y/KcqcBNnjKCkWBxZHke6PR7SITKGKpqUR75lYGOIIT2Eik2gsabyuta5WrashgHvCmonSzXV4jl89TqegmYSnozIGbw+3N0I7mmUGujLN6pl72q3cK4poy8LztOH2Jp0L5+jLbsGQTXRaXTa8yXyGHYHLNtz/joKxGvM5eoAwUQMxGwaD/sMS12g2dRIkUrk8qwfdjUGd9JbBbtk62CNbUHWvGN4vDvXI0nBSlkdTarxmU1+nzGc69Kj3DZn36XnY5v4uPcf7lkbQ7Q8n9GiNwb+3DveoWee3w/gslgbxkBn+ZCWdSLaSlQxji1VmnaSbff8QqnS5YEcPUEO114AQvwUIv0DlNxvTatUi68EMK/QwaD7RTWOSO8bSh9qGtGx/HYxzIZvIQoYyda6QOrfelAGugcdGhGq2DLi/rqoigvA8tjQPBl1FcDbo9meTChzRp0cK8vP1IeySl+BdArJ9wxvHCNI8CstYsFrWrsmV3Nwcdagzq42MAKvQRFJ4AJrWWOOyHz1A5yyM5SBOb6DusLhS1ceRsUuqojRXjVlAWGx/GXB2jPeushOzeI6zMubLXMew45eX0FHJW7tWGcSMuXpXgaUFwLoDOupCMjl6gHYNJ3NQgN3ADEIqdmcbPg7sg+gxw1BwGfeHA7Jzolf/pm5sGuiSOWgKbTO0ZvlomDZm2vJYKmvplfuWRpM65nx/px63QHN4zU4+d7z398aivkGAFRgyh2UD33OPiLoKqXiuvKT4LU6bi0np6AGqLCszoDkfq0AYMY0TdRZ9NNY2fNBGFFtWaFnsmIXwJpCNQkjpmsaRwosK1qnRk6w7dqxayPIGC4wsIAB82yGWPMTiyHylRQVaA7E8YKpnXRUP+2QcDiOAh4w/mlJ5YFZjEam7mlmRDpjZ7dtlRQUeghN0244eIGQn1kEJLPI/1q5Zo5rDNGl+r1WuNQbDixSnLcCTzHIEIh905iJq3Oi/wL5m6EAMWYW7ihvBpB2rWHLQUoewZgWckYPGbMXerAVjcTw+jy2Q21GG8MlXMSZYIygHVrNoFr2jlXmZuQhOa/aLS5QUX8EaixEpx9aLIWYh1P9tuG2lO1DBPsNFkxGsKfggtiAUZy6KHhuGRpWh0mYFbTadnbrA7VkArRDYcRSh9fshllpJ79ut7JgFlUCylOB2RwdqKhahfhSLiyPJlXFZVlgbbowAFoiWriJTPwRWtaGCPzaAooEaA6jzq54FALKf4LDVYJgQIA6+zPoju4DFkYTMIbysjGYyqzdrh4ls9vzRatFL2bKyLnXwPcDaDF0iS/UzK3xHUjpfgsP9IfNnNTEZROgh6TwBLeo7ZoAAgoGbCdLFDCtWn6QmayG+p5aoXoykDtEO9TTes8jj/s1cb6e5hUG2HQGcgyD2HhHElfOrxJ0OYMhxG5j7T7PZgpPPsOa0Mq8siGwpzIbazF7cpWCY1bqdD4D1UWjmsQEEZTfcDpuBavlU9FC/s/Z2rC8LWfYvZavb1WK6AA9OpWKyc25Yzjtlk1x82pS8bc+I7Fsck00jZmY7LoCy5wjUJgCzbWZEztg9Jee/aYNcfOqUnLFrSuaRsaYTLaimD87LCk1umDFxkEXcbaBAl6JUWZeX9w2ULCXoCY8NIGQI3YZEtohBrO9jZ9ye3crg1gK/rmFsc8EqogBnOom0Pz0gX77m43LLte+VS9/CX2VUyVS6Si44OSGf/ejZcvqebbKA+44EhAXG4ecOsgh6M5qRP37PefLpS/fIBTtaUGp4ZMuwXy6/ZFa+87U/k0svOkMmEs2aQAiS1aqQQfymlcJOJjG7sniEsL+PRbGt5Dh2FVk4Ic2vs5cUX2f9YIAdOcFiZljoZw9lAjTX2ybnnLwk9/3kX+Ub110m+6aD8v2bLpLLzh+DcKKChU2kauTrX/ygnHfGKdpDvRQQRzxPndvQJ1d/5uPy0Xftlgt3x+WHt71PTlmISVkJW4h82bcpLr/86d/KV77wGdk02Km9HedHm+hp0QTDbMaSJT9vLYvd51HP7UbJAkIUHjtAIa/daPY582pdZZ/n9gVbC24jZFrqtYynMYNsRvyfsXuL/OLn98mjD/4I9YhPto8H5akH/lqu+9hOqXSul4ryIvE71so7T+qUu3/4LTltxxZQP3nUADEJfOrjH5W7bv+CtASK5YNv7Zf9v/mavPO0tJSXrRePs0gaKnLlmku3yovPPwmQrlSxphM389drcCjDih0A2UPzOmz3+d3OqO9YU/wKQB4biqey9WGv48b6KpemSRq3F1gkzqbateveMpqW73/3duHr7278C1TaqIE8RTLT65WWujJxOYrEBYA6qvNkb3eR/PxHX5Ubv/zXqhEvpTWrjQw9c/eiPPSLB+TPP3gGAMlDfVWK6twLXSnW8QlQpnaNXDRXK08/fLfs3/9bef/Fb4MmxTHXTp0v+zLWc+thzMZ1XucdUZ/b3lhTcXwA1XsdRsRbnlfntV/dVGuGFuOXey7TyTaZSrTKHLrmP7r47fLb/fsVoL/69B+hDVmngDhsheK0Fyl7nFjEcDhPzuvNk3u/d6U88sgjcs7eZS0VXkmkl8CeL171WTnw4vPyrrOXAFC+jsfxCQ7Hp22JrpH3zTjl0Z/fqXP58b/cpV/xTCfaZE6/aGjQjTbd3K92S2uw8pa2UFUR7DgBqiw3EtG6nDqv7YMN1a6Vr335oHGk+YkueAcP/soXrhbr9YPbrpVobTFCsWAFmHI7e6BCuXgiTz65wy4P3/stvfZzV1xu1k0vAxC1502bJ+Xen9yj91zzsQulxpknVS4THI5vtxVJc02BXLZxrVx7VoP89xP3yYsHRJ547FE5G8wb74zJDBw60tGk5QozWdQHdvs9V3aEa/PaQ8f587z6qnINMzDoTeHK8hd87nLd4uTO3wjS5nhnCxjULu85583yyK8f0gU885+/lLOXeyVRZchgXZ5OPFFfKB85uUxuu7hA/u7yGfnds4/rtd+88ctmdfwK2xbnnbwsjz3ysN7z4L3/IPNpP8IpRzLBdRKtLpDReKFce26ZfP3thfIv158vcuAFAHRAvvPNm1AHZeBIZDt+7YwC0fqavBkAxfyeS8LeMqM1eJwMCrjLCA5tA8B6utZlQ+wWSWe4VgbwsA0dMTCoA0LYJX/yjnPloQfv10X87N++IxdtaZWzunPk/eM5cv1Z6+SHH7HL7R/pkycevEuvue+nd8u7ztynQv1K1fTuqQH50lV/Ic/811O480W589bPyZkj1XJu0pAPzebKNy4qkH/8U6d87zPL8uzTv5QXXnhe/v62m/ULSDqQTB/rQFvRHNZvgQMeJ4S+8rlmn3s7NMiIVB2nSPMFgTbClY4Y7EGGWbjSJfFAlfSiEh1tb8YEOjRTMKVe+OYd8u1bb5QnH39EHnng3+Xb175fvvjeTfLVD22RH918mTz18L3y2MMPyc1fukbOPWnhEPZYIXWwZ1ud4gHSZJ98+N3nyo/v+r7sf+ZJefCeO+TWT54rX3j3nNxy+Q756XevVPY+cN+9cvUn/kT2zAwhu6LtSHcq04daGyXVFIJM8LeU1WTP4wAoE611G6/qBWBoTgB1Z0O1E/rixuBeSTYGEWZRFUCthwZRbwAkLu4dp++Sqz7+Ibnta9fJD26/Sf7xOzcDuC/L56+4TC45bYdes20Vcywgdk1kwJZ+Nf59OEjbINanbB6TD7/zrXLTdZ+VH3z7Fh37jttulJv+6hr5sw9cLG9ZmsZcrL3xHmTaDrAnJv2xeumJ+JX97XXQIZ/7HqzF/+oBIoO8jnyE2ecjVSZAGFy66/0yGG9EbLeiD+rSyWiJP8wN9h615bGknITF7p0ZAAMyGk7UlEP6qsPAOWlmUE6aHlDGHKkfM3stCnsK1/Xh+gHZibF5jsBwg4zVPR1Gx80k2mUUjszwZ8gApwPgQHOwjopvNNVUlDTVVrx6BtWZQn12faXjRQwqGFQf1M/f3IC+rDO0asWkFodNEA5uU6RXGtjf68izAJFRBGTP7JDsnRuRPTCCZIXaS22FWD3gyjcdw+a3H3SUfnOS6VIHDrc2SRrh1V5XrYbwkqYa1wdqKxxGU82rBIivrFD3AKxfRRBmDDV6oTdapzo0k2zXapUsMr+qSRzWTR+6t3M4SDSyh+Ds3TiqRrAO2UI90h7Rqr0iPs8CSL9CAkDzcBwFmkxPNARY96ghCp5srHGNw07Mr1yzOlTIMEO4Ceojifk8qkP0zlRPm3qLv+3hxA42sakjL2gVSLooeHzXRN/vAbSsnydeEZwjAcTwmoXjTP2JSBfCi8yhPIA9t/ArjFcdXocXjUiHLeFK5zcDbvs9eMDzXfU+pPsGzRLMFhaLlEmDq74sPCJIaQ0RZsGpnlYFafdkvwJzEjLQjvGMahvbmaWsbr0Seyywt+gXk10yDceR4cy4baHqp5CFb4d9CzVQXyxUi/BynjiATt1+pnHh6W8zmiP1jgp7aQcAu7vtsDDjpBasUBu0Qu2gRhy+OC5oA6rcZENQC0/t7TAGm+CpnrjWWsM4z7FeiokmQMmD7KE4Qw9ZnzG8hrLhFfNX/n2V01YTqKm0DaR6czOJ1GvzLwlO89dYOSGv4z3NPs8BPpyT0Laj12SRgjRoZjVrw3151ebVysY8PD+Nfg7eFTAS9VWlKaR43+L3qhEgjvNyAK0WZzqH4T6D8oPh1ccfKSC8Gmvc7+W87aUlxmv2qvR6Da/HYwQ9dqPGZesCXX/JbMZJjFkswuQOCnZihfrWxtXhTCKYZCAXwQyJMBYWpASL42qIDSdflj2rwdnc143GtEMm4TDqI3USY/0m4ClPNVRXGOFg0Eh3dRkdLS2vDUCVAMgdGzQcpcWFYNGXKHyrWURNUcFexSJdQNYO1yWCxus1HPjrfQgqdY2hx7E4xraX0LFtFnuyaZ3PZHhOW+zBWAQewHwVzCkxcgsUoExPjzHa12f0JRInFiCyx+t2AyS3Ea0pN3wV9gWk/KcZFhn+myWYQGFUwYYnF7K1kdZHQwdtSWulbB2TZYAujvs2uJdH3r8i9C+jO1uzosz7CTRBnVjFHoTpU363Y5NuI5eW5hGg/mQyp7e7W4E6cf/Q0tl5iFWjyPK67KV1XscNTJ0s403Pt2j1Ot+7WrDNRVjizTS8mllLWbOYsHXwYFVugXkwnScPuZZj0hFW3zWFwpCOYngy/CPVruvKbaBPSekaW1nZmsKCAmMwndYwO2EAcSDLiDxNC0hU2D63fQIZ7XEWYGwG6Tl6kHo0nzkIkm599nWvvLfYtCX7WyFuic6m2jRE+H4m2SpTibj+hkjDbMQEaqUQzAJjjUtwGFrcYaCj6DA47lGwfCRd7zXsdnuOw243aCf8xVi1jOBYsetx2o0Kh70Aov0pVtdsAjPNZpdPkFioMVxIfZr1N4HrQ/PYxn9E8VVKQ1WF1HkcEvZAoKtc0sj3boeEKuwSqWT/58G11forNQ0ninEWmE1Z5jC0za59RZgl5C3/ZHFxUUFhqcNojESMYehOd1ubkcEaBpJJo/9Ea9DhYO3cNG8E3XYDPU1zyOO4h1mIFSsXzwZxAhPmxMmm2axRIwgU03dDZYVUlhaLp7hIvCWHW7Ee+VlVWYk013plErURgSEom/pMoJmxWMmTOUPZnov1GRrrf0PdE/U5iw1/bW1OpK4uh+D0wPoQCf8rAEHsjFqv2zAi2w2/x7EPrciT7PZZYVMDuB1CTWLKZbWsYCUIVMdKBc2s1QIWhSocUmMvlWpbiQLCY8Bll7i/SsHkprvFQt2EBzAci80oMxazaJq/qUYNhTLhCcxn2/cuGDIITDgYyMFcczHnnL7XApRXegU9DiPoda0Puss+AJCebwZITK/cYqBXWSOR/gw7iii1guDwnJ7vbtHfGvHHTmNI7wR2pD2q5/nFABlCcC0W6v3d5v28lpqTQli1harYSD+HObyzxluR7690GS3RRhVkAPP6AcSX31Vq+J2ljkBF2ecxwQNkErMIKc8FcCH0tAUUjX+PAohB/g8amDQYb9BaiIwhI3ieoq8s7DaBmswCQ9D5GZlqdeoA5wCefQ0aazsb7DfcC+AAqDI/jrdioloZ06tcAMWb2w4KFBZHsKgbo9mFEkQ2lcyEDBVez3P8nACNA9ANFjBtJqjsAxnO8YBXK/A6j/3mkNtWG4IuBj1lbzyAfM5SBQnHCI63hDz2A8xu7KkYcswu1sIZehpKMAJEI2v4mfl5owJBgGgjbSaQBIZFKcfqMLdOpR7ghDy2bwYrysL8lRiOxhv25XehNmK4ucp8/oqyazHh57l/FK2tkFakXnqci6P3GR5Wa0F2HcmsUON1ZBg7/66wT8ciQ8Nex+/wjOsDFbZAEHVZwGkz/iBeqkmuUgeAegfY9GvQX6w9bS6O3ue+NsMv1WiGVRqg9WZN39P4DygAlIVfB3+dH9AdQSukngQ4H8b4HgBk/MG9GHK15SVrAdQwdQmL+S21iYtrqnEhPDxa0DE1d6CfYxiuNoLIzyjA5j6y2e1jDLLmLoTSEsZeH3gjh9TRCHdNeQnZVA7bB0bdgXPPYIEID7tu31KnCBjDkJpC4988x60PgoKsRJ15AffdjfsvYTII5mJ8V4nxf+IFJhnV9mIcSyvArDnYFVjkv2KxjwfcNjKCADBsyBA98hzsWdjPcd2NsNNhIZ+zLBf3Gv8nX9X2oqw+lawBSJWwXhiYVfpe2Odg12PxX4J9AiJ/Id5vxd+NsKJmn4MAG//vXmAEQtGWi8UX1DpKigFYMQDJR5mQA3vd5/c/+siuWuRXNTYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDc6NDg6MDYrMDA6MDBGNpHdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA3OjQ4OjA2KzAwOjAwN2spYQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiPersonDarkSkinToneCurlyHair.displayName = 'EmojiPersonDarkSkinToneCurlyHair'
EmojiPersonDarkSkinToneCurlyHair.defaultProps = {}

export default EmojiPersonDarkSkinToneCurlyHair
