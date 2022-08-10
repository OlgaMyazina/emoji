import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissManPersonMediumLightSkinToneDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFRgTeVrWagAAAAZiS0dEAP8A/wD/oL2nkwAAHj1JREFUeNrte3mwJWd13+9buvve++59+3uzSTMaLQhkgawNESQsZILBRSV2SCjHJgESjE0ZCmJnqSLgOHJiU06ME2KbCkbEQCA4kFAQ9gQQEqMFKcKSkUajZaQ3+/Jm3naX7v6+75yTP77u++57MxJIIyxSRb/q6vvu0suvz/md8zvntMKPYPnSz7wXXenrC835502azksznV6RmHSalVAgd4yEv7ui+9+72v/iyt9L3oD/+fXvnnU/1+xs4d7rT+K2Y/9pcoudvbphGtelSLYSyBRhsFRSeX+PB/ceomOHx1STX7fn/c/5tajnFJhX/Etc33wp9rpHt8/Z6X80NTbzhvaOuYvttvGmaqcaLJDlMoRjq6vF6dV7V4vufz7aW/xa0zbKK7/99g37+tar/xADlI2dmHvdTGPqbRPzs9em2ycm1GTDQAHcLdkdXRkMji/tX+0v/8Upf+oTl429+OgdK7fhdXf+ux8/gK79x5fgzn3/AQ809l81a6c+MLfjvJ9pvupirV40AzQSwGggAaAFWC4ge45hcOfC2snTJ/50Lx16/2Rod2+47V3ovP4ifGXt3TiB1c4L9Y73bJvZ9s6JGy7smBu2AxMNICjAM0ACFB6ydxH9bz1Gi0ePfOd0efo3p5Op+w+Xh3Hjnt/58QJo76s+ghzFT0/riY/O7T7vqrG/dRnQagJrBAQAWkWQMgPMJMC0Bu4/id7n97qFkwc+ePvEk/9m26DdTUqF5bToXF5uv3nX9l3vmPq7l6fqxfPAIgFLDigCEBgQBowCxi2kO0D3y3uxePDQPafdqbc1dOOvrvj2u56T6zLPxU7uvukDWJPuzIye/OPxztSN7RsuhIYFTpcAM6Ak3gqFeOfXArAqwCUTSLd1TLq/f0267NM7Jw/dsZj17VW98967e8vOd8/88hWZungO2F8ASyUQAiAEUACIgNIDyzmUAOikoCPdHRJo5ym3+PVfu+A1+UcPfvP5B+j2174XVw1uQt+eenPHjr+zOT9hGhNNKEfxDkPWV1VZktWAF2CFgfPbaMx1bOPJ/Mq5Zcvbi/Hrd0/v/Kfzb7iqqS+YBZ4sAEeARgQnEBB8BKte1wZAv4BbySEF7QbLgYvTi+77ufMuxScO3nZO12fPFaCG6+B72TfnZtT8m422CRUe4XQX6VwnXhRpIBjAWiCxADGQJPF/ZuCgA86bwczrrx5rfWPifQFBtf/mJaneNgMsFPE7EMCHCIwPFUhxKz6AS49iuQfvPLQ2SaazX3kwf/Azbd1aPtfrO2eAbEiglLrcGvsigcDnDr5wsIWDBipwOAJDHIEJDCQUXxsLnApQc1NovfHKDEoAtsBJB3DlTj5stJgamBAQfIDPHQaDHIVzgAi00pcnJnmhgbnrXK9PnzvCBobNCzTUODGBiOBLj1B4cO6AolpzX23LuPYLoJcD/QFQFsBKCXQBdFV8XZbAoIjfGxTrv8sdOC9BhYMrHMq8RNEvMOgXKLyHkwARTCnWL9ai8c0b3vf8WpAWBSO6IwLFIgARwsAj5A6aBcpaKMvRioIBTL1qQOvISVrH/011v5gjCdcrx60EAhOBAiGEAO8DfOlR9HKUvRKeAjQztIhSjB1bsBXLZvn5BQgVRYgwWAggjdB3CM0SmgQqYRhbcZBlwBCgTQVMtSq1KeEQQKqVCSAGcwQnECEEiq7lAlzuUKzmKPMSQQhGGBCCCKfbV34a+2Yffn4BYglgYRImgBmiCJR7+LUSmgGdMFRioROpANKApgiKroCpX9fgjAAkTGBiEFfgECOEgOACXOlR9kuU3SK+xwTFDMWEwLz6vc7X8LyTtIAgio4JBae0TUVpcAigvgMJQBlDJwKVSnS1UddSowBhHSThCDYziCtwmEGV9fgQec7lDq7v4EsPYopWxgxwKEnRE4XK8ao9//b5tyBR9H3hcApM20VpgA3EEZg9xClIBsADSCTmQFqPgDNiQbr6XyI4TARijpZTbwNF1yo9XOHgXbScwBVXMYPYHyOEvxTR525BD337X4CJjDJ2ElDjSqk2lEog0AIREQnCXFLgPLhyZfHAoe7Utln+G6+/JWqVlgPZ4kl0G/coSn+RlYKwhWIGgkA4AISooRIAVqIe06MA1VIEQwsSoiFARDE6BuZIzC4gOI8QAoipsp4AVZF54PDdbjI42JLGhovdumVLI0vTaWtMR2ndUkBTKWUAEDMPWKRPRGtFWS5ffskl7ta77oJ6eM/73qONvcwkyUXG2Fml9aTSOqt+yCLiIZIz8xozL3IIh31ZLpD3D7my3Jt3+4/v/MBLekXS+6WUxz4WTNIwJkUraSAzKRJlkGoLYwyUtYCtI9hmgKpVSbSCipB9xTueCT6E6F5EcBTgheDZw5EHUUDChJSoyGXwppLps28++tG02Wi8IEvTa9I0vSpNkksSa7dZY6aVUm2lVKqU0iLCLFIS0VoI4bTz/qjz/lHn/YPq6CN/KkmawSYJtLHR3DFKmCPUWZk9k4cvS3JFvujy/PtlMfh62Bsenv7MjpuVz64hY9G0DTRthlQnSLSFUabiHjMS3tWZ4FQAMUVAXAWS55FVCI5DXMkjcAA4oMECQ/7bt7p9//DD/T2XdppjbxprtX62Mza2vdVs6jRJYK2F1jpeoRoJnSIQIOZxIcA5h95gQGr1+KfjRwLU2wiIPGUBYHS/TAG+KGTQXzsp3+LQ+fz49pK0sjZDyzaQmgSpTqC1BZQBlF6/CUMekgqkKoIRx/0SwdWACK8DMwTII7AHEcEyYUy4d3fx+B98sLx9x/z0zN+fnZqabLVasPpZcJFSgIjYEDxE5GzhCU8FlRrZiVIKaWtMpa2xLeG1BezjBHO/hq9IUysbARgeYwQcwfr7VIvaGMEgAlWHepEqz6rWKmLVqYVmQgsK+93xhQ8Xd/zC+du2XTU/M6MTew4xqDovG7x7elBk1M1kw3eiNSkopaG0hu5YyN/WaB5U0MsCoQCoBEpV2aSuXAhqZD9q5MCyLvxl1LcjQDICUA2OYkYDCoGL3sd6d01lk63ts1NTyj4FOPI0xTA5q9Z05Rlfi5gI1vFYv5PDLQAR2QiQMVC7NewNKVpfSeCEYxTTNuY2MgKw2gSObD7VOlnkyoIEzAzmCJSq1kQEbSj8Rf+v0u8XR+d26G1KKfUDL/zp3j8DoI2WURPWCEAjJynVCUp1waMgaW2grEF4WYpk3xQa+9MqcaPIwqoCaePBRgDZJDOq86iPJ5WMUBzd0DBjXBk8ykfxpeKhtAgOvX4fIQTUFiRPU0I9u5dsAsi74oy7J8NvjloNQ1iG5s3MEKYIGAQKCkpXlmQt5JUltp0+H3ZVQ4igYCJAoBFZsQmgzeDUliOV5TBDceQmLYyW0gjW4fbWEXBpEVYDVlZX0e33YayFikQbuRLAZsuqvWD9cs+0KUshnIHu6JdlxMxHQYnhPowQpgx3orVBuaULc63Gttt3Q/sqy1V6hKTraCabVO+6ZfLQcmSDW2lhJFBoG4UvNQ/iYKOPiXYHALDa7eLIiRPI0hTW2jMCyobwXoX2YZCSMwOSHaI2gm69k+g+gFSHUSpGH9msvgVDtQ2WoXw4cdlBNBZbmHlwWyUDwhnHOtPNYkG+thqKyjxGNZa6nIEJbXFvegh3ZEcQKCAxBmli0e/3cawCaG5mJob46lrqazjDzUQqepQzIrpVWg8vXJ2F12WUnBWDtYZiqnhHRQlR3QVhBoMhFEEqzACHrn0EptvA5MJUVT6lysxGCWGjm9XhnITBXFkPR+sxImgriwPJaXwxexx99mAiCIA0zQAAvX4fBw4fQQgBE50OjDEj6Y06M0ncZE2jINm1UyeRNZtIsiaMTWIkqgDb4KeVmWtmMBsoTZFzlAZVW6UUSIWKowTsA7rZCp582YO4eHA1OieaFWHXsVxXIEnFffE4DEYQqqynCufCMMJoaoMV28dnsoexqAYAoRKxAUZrWGvhXYlur4vDxwWlc+iMjUWpM+pqasQrKoC4jpTDYCQwr7ly6l8Puqso8x5CmSN4F7mFCEKRb4ZRDethX9U5kNYxda8AitEsfsbM4EBwzQHctMfE8XnYHBu7HCP5DQ3BqQFadzHFjIZScMbh4+kDeNicjkl3BU5eFOj2+yhdibFEIRAhLz289+DKIuo0YSiAR4SwDwHeezjn4Hz8nQ8B9vTJNSQrfTTHehgbb2F8ehLtyWk02xY6S6JVVX6sUAeYyBXMFGs/wcccmCkmxcSx0jfI4YoC2ihgy2EcekUbu269EEkXICYoYYhSIAjCyA2oLYiFgIqYUwWwCvgE3Yd7+Qh00BCJ+3HOYVAUEBFopdBKUzTTBMv9Ev3BIJ6P92g1GutarL6eEbdi5jNdrBFS+BCwVuToreQ4fWIFaXYUSSND1mggazaQZBlsmkBrEwmPJSLvPYLzcEWJMq/WgYMvCcEF6BSYmR9DZ7IFJo/lSw6j2R8/su22uWkJoemFwEpXAK1zktT8UxXOEgCpUe6Wwb3qq9iXtGwr1qhFovWUJYqigADQWiNLEzTTBIk1WB2U6LsCyyuEslmi1WyeVbAOaWRTRLc7WrMIHCqVHEAFgQpGWM3hVY7eCB3VyTC4Dtaq0pkKSjQyKDQlhVYaznqk57cwNd8GhQAFBWKPletO3D1119TxjNWvMwXrJIAA0DDiq4qL4t20Cmhq7fbj5P/4VPf/vrTRaV0cQgBLvEnOe+RFgUAUvVZpGGMw0e6gkWZoZgN08xJrhcMgH6B0Do0sQ5ZlsBXfnjU/qgGa2LIFwTmwc6CKc4TXc49adsiGLHSjRFAbwn78rGQH1cqgjQEzQykFYUYw/XR5+8rNswfGmwn0Wzx5HYTBoiCqBl2gIEig0DRaYPjjv3v8K5/M2d+YMqOszjVUADnn1iWI1iAWWGPQaLfRbjUxXpaYzHP0ihK9wqEscpRlCWMtkiRBYiy00TB1RB8N81O7LwL7APIO5NxwyyGAKUCoStYq0HCW9LyODBjJMYwr0c17kImR8gEUhNE++fsHVtI3X/q+cSQzDWV+wQcCC0OJGtbPUqXRNBpeh891Wq333jc4dFkzyaa8XyfemqCpOrcQPLwrUdoGFABjNNLUopmlaDdbmPQOeVkiLx0GzqFwAd4VyCuVo7SBroKOrUCzSWtsY2YpEsudPuYXmzPq2pQ2+myl20QioBSQdNewutpF8AF6CJwAAtN4tKnHU32sx+G32iptjSF9dR4cWGJ0TJRCw1p4Q/97xRT/7F0Ln11MlBmHSOa8X9eFFUi+UgOJMZjILFQ0a1hTR1jAWoNmI0VnrBXbRhTgPcEFDxcCnA/r1UsK8N7BOcAqpUYqDwpaa0itqajKdYzZmGnXxDbiksxVHTkEcPDIaAzJSoaiX6DVaYxUMwTMgkfe9TAu+sMrnsjB/6QB85G2JC8nYmilYLSGU/ydNcl/c8ynC3f094OYE621CtVNq885EGGt24UxBs1Ghq3TU2hnCbI0WoCu3H9o2cYgsQZAWiWhMgz9XAWfUFcVQ4BdOn0C7fFJJEljXZzWblMDM5JUMTO6aysY9LtgYqRphkbWQCNrQA3BNdA2wVjWweLaUTTHMoiuil7EJQUSIkL7a/8AS9f9x73d1PxGk/SfNJDcoJRGgfL2VeS/0ZRk7/Sdb8fuXbsgIszMsllo5kUBCQ6JMiAnAFpoN5tIEgOtRyXSOm3WGjYm2AoiGslZBCsRw37u0x/EJS+8Ate/8vWwVaoOkVg3rpXwCL88/NAD+ObXvwBX9mNnmA0649M4f+duXHXV1dg6P19ZncZYcwynFhXKvETWzGorWyIHJoo500LvBHaNzT9wwvfeNm6aNxtRKMT/zpRu7TsQFqvoKQBQsEhM46urJSIURYG58RZmOm1obZAkFqfWeugVBQZliRAYzSzBC87fimaWDoOOUmqDDBVZ16DMjCeOncRytw89M7ct3vnR6K/Ws+RR2SEAiiLHxOQULr3sClx2+ZXYcd5OlGWJPXv24PNf+ALyIq/KHgY2ydBWY+id7sOXrnJFOnDl+O8FqXjjqofejy+nj+Pi635/32GsvuVYWHnLrz328X13D57Ai+7/3WEBRiBrEBmIrGfEeVEg1YLxVhPGWJxYWcP9+w9g74HDOL60CudDdZ+lvtdR3ehYV9daVa9V9Xq94MBV0qkWvvEhUVqtdzQ2R6rRsKdULHMwQatoYUQBg14Px48dR1EUeMHFF0MrBfYeZXcNayeP4kh+BKqlMDE9Tu3xzluI+ZPNNMU1f+eWH6o8fMH5OwHIC5TSX9Na747cE9DrdTHbSjE7MQ4S4PCpJWydnsDc5DjGmlkM21qtFy+fYVlRBGKH4vRsBaOzKF6tI/HVXGWMRaczjk6nEwtqIeo4KAVtDLS1aLRSlPDor/VPWRX2CQte8av/6xk1uFnkuAYfE1G7lQKcc2gYYKyRwmiNVpbhigt3odlIYEytC88OzHpMlbMXplWd3z0H80HD4hZVkWw0N6prMRA0Wim0MU/0BvR4P6dn3GAwSvVE5AERBhGDfIl2ZmGqvMUoBWtHoq16yqbVWd+r/4Yfq/WqzDkB87Rjs0qBRVAUHsEHtJOJud3ty996nr5w/L4/ecczaFEpeCJmkTsDUXDeQwtXmW+06GjZG69vSKmjAPzQ47/xT9duFbyD9/5ZAzMKilQ1SAUgMGHQLzHoljCUXcwhvM8X+U/5ovihT3bh0EEgFIDP91M5WPHeVdmHOmN7Nn6Rp/irgdj83uhvtFIKS0uncOedt2JpafGswm3z3VRP8T5E8PgT+3Dw0JPDPIWI0O87dFccFCcgV4ovcgll+YwMNlWMRNHkWKKaBrTuBUpttN1R3lEbreepLOjp3M7edtvXsLq6jEsvfTHmZrc8NakrhXwwQLe7hlazNSyKiwicK7G8fBqP738Ya2vLuPbK6+M9YAYTo991SNMMmUkRyvJUcO6keobt4CpUkzVKmlbDBd7wuQ8B1mpYGGxS1j8QjKd737aaY3jx5VdjemYuJgFP4T4KQFmWuPue72JldRmNrAFrEygIgs8h7HHBzt244vKr0UwbIO+qaiRQ5IRmmsAA8K48SSEsmiR5Np3gU8TcS6xuK2iMdtjWBjkOn17CRTu2oN3M1i1ryEtqQ5vnBz1/oKrWuL3m2htGuqQj0NfqvYpGIoLJyUm89tWvwdLyEpaXl5HnA2gAE+PjmJ2eQbPRrNpBVBXxCak2mGq0MNvuACGAAz1OrhjYNH02oeEYM69orbYarSNLVDpqYqyFwIy9C0cw3RnD9EQbWRJ7Y8QM5wPy0mFmvI1WM8PTzGbg9GoPhfNoZgmsMA8zZ6nqMFGfxIMrrTco+sRabJmbx9a5+VjoptgT49GSSN3hYIYBcOHMFFqdMYSyBDM/1J7dQj7Pn03gXFUKC8LyQlVXNqvjQATnzU5jfmocp9e6WDi2iEBUqSaFLE0wN9FBmtgzG/SbGr3NLMVqb4ATS6uwEZSR/EgwnByoeWJDY60CgKuyyOZe/bALSwwOHhT8sCdPwRfC9Igvi1hOfYbL0pIMZmfVgyzyWg3EQn81YUbM8IHQSBNcsHUu8hIRoACrNaw1qEHd7EqbW+9jjRQX7dgCFoYFc1TgI0NSwgTTaEKlCRAIlOfriV/dEmF+CnBqcg4g70E+xO/GfZ8UkUchgptu/uwzBmh2VgHAfYA4AdIYJRmBRoHS0KRgjEaW2GEkq+tVZ/AMzgRJ1nvv0BLVX5UNE/ygj1AUsZtpDARAKEuEwWBD/Uc2T3vU22FdyINctCAWiYCF8H0OdLAG7JksC4ur9ct7RLBfJArK4RRslckzVdZdWfmwkHeWHOhMQTPyV4GpRy+MigLF8hJ8vw/f7SIsr8CvrSHkA5TdVVBZrlsPb+Kc0ZW5sh6H4AOYGcG5ni/KT4XgB975Z0PQEAF6S6tPKm3+wJN0iWLnI1AAUYgShCmCxDKchdggSgUIPsqVUZyYBETr80n1d+2o2YWiwNrx49DWoNEZh0kSMBHcoA8hRtIai5MbI8AMKwD1kEPVK2PvYlsoBGbmjxPRFynQ16GA1/3RsxvwXlhcxdUveYlorb/7xMEDA+vLTmJNHA02AdYGGDIwhqElFv81NjYVWARF6cAsaDQSGK1BzCjLAGM0mo10g0a3o3mPthbeO6wcOYkkTWGsre8+JubnobQZhm8OVTar1TB/Eq74J3gE5+DLEiGEI96HPwqBHvylP7v9nLVxq9mE1nq6kTVba6sDjBFD6zjomQQCGQKRiSJWCcSMFMaqhJCYcXJpGcwMrTW46oJsmZk6w2K1jAwo2CzD7K7d6MzMIARC3h9EkTk9g5mdu2CSZBiRopV4cIi9eBmxHvIeVJbwrkQIdL9z4XEixnOxhNgq3p4mNhVl4EKcVQoUqjXWlGnYY4/uFqsNEamxZgPTE+MwxsB5D60VpiY6Z1jPBguqk8Lm9AzOa7VQ9rog72GTFGmnA5s1htNm9TgJlQVMmkJXv62L9lSW8GUBVzohom90Oq0iz8vnBKDSOaRJsgNAmqYZSgrIOEYzT4SEAiwZBIoqX1kMy6taA8YoWKsxPdnBRGessiI1rCENx3mq2Ugba7GyoYJoG80IyEhNWimFotvFoX0Pg7wHM2NqdhZTW7aAq5xJmMHeIZQFyryAc34hEP0fKhi/8tE95wzOK667DgcOH8aWubnziFlZa8EEBGIYHR9y8cbAGAtDBkFRpfJ1VWLVsaRauZu1+qyPzNWYMAAd3WPjVOtoCK8tLO928dhffg8L+x7FwmP7cezwkaElDVs/ISA4B1fkKIsCIYQvrnX7j2xqRjzrRSmFn7vxRk3MXim1P0vTYG0CJ7p64KWexo+TGfHBF0bpPFz1XllFULVJoI6q/WHcYYHlEKC0GVb/Npday8EAKydP4tgTT2Dl9BLSVhPNZgvtiQ5a7fZwjE6IQMHD5wMU/T7KsnwiBPrY5HibBwP3nAG01utJCOHfz0xOfkpEbllZW+to3WpS0bswEMGpUBXP9FCkuuBwcnl5ODG3fX4Wc9OT1QSOOmPMuc6hiLgCSNFwAFMpPTLxwAhlgcQabNt1PrZsnYfRClm7A6EAn/eRNpux4UqEkOcoel3kvYH3PnzooccX7r/sol1463+75zkB6La77gIAuenlL1/euWPHymMLC+8MRMutZvOmpWV5Nw3WJoMK57ugIv9U1661gbBgUNWgDh47AQCRqIdyan0UhllAgeE9Qe391L8SbG7xjI7jqXXXYyL0l06jf/pUDLmTU2hOTALCCEWB/vISVhcX0ev1P1OW7u1a6+U3/pc78KNcXvGyl0Er1ez2+tPLJw68XGv9ocSa2dQmyJIUaZIgsRYCiUNVRYnSuxi5xjuY7NTqXg3BCYGrgaogloKPLiYcrWdTe3k0wimlMDY1jSRrVD0mDaGA4EoUq6voLi+h3x/c63242Vqz/Mu37MGPevnO3XcDQL57fuKIiHxORLYGot8D0KndJhAhSxNkSYLUWmTpJBpZClP17uNYT9165qpnH7nMUllCWwtlIg+p6jkKeYoWklIKtsqw2fsITreL3vIS+t3+A96HdzQa2d4jR07gr3N58uQqds9PkIj8GTOSAPptAJOCmAQGCnFuaGwMjSxbH3URVKN4UdeF+pEr71EGD+vzQcxlbJwgU9WjSmeM81dOqpSKuY4r4YscRa+H/uoqBv3Bfc77dzbS9N5BUeBdX3gIf93LkydXceGWyVJE/lgEpwPRzSKyi5mR2ATWGPhAGAwKWGPiYGfVRa11XIx8AS54lN7D5mtrSBsNmCyL0+mbI9rmbgYzgivh8gGKXh+DXi8URfFV58J7xlqNh9Z6A7zpY3fh+VqeOLGC3fOTnkj+q9Z4BOB/LiKvZZFWXRJJbYrErvfU6lmj+sFh52NaEIiC+vJv/bxkzQbSRhO20l91RBs+sjQswMe5RJfnKAYDFEVxzDn/Ye/DhxpZuvjwIwv47VsX8OOwXLhlonahDhR+Xmv9Nq3Uy7TWbWssrDGwxgy7xPXEa4ggFczygIh8Un3612/8ZJrYn82SZEuSJtraBNqayt1UVQqowImjsuydO+F9+Kr34ZbSuXu01vR8Ws0PAiq1CQLRpFK4FkrdpKCu1FpdoJSaVEppCISF+yJySATfF8itInInMR1Xf/7W6xuZNT+VaP1KrfR1WqsXaaWb2ijR1dQHEysidiLyGAnfzky3+sAPKYXyjR/Zg/9flgvmOxBAWW3GFNQEFBpVtiQC8RCssciaAnj/iZX1LOe/v/1GiFLQIg0RGYPAKKWG01lx+hxMkEHPlwMDjV/987vxk+Uny0+WnyznuPw/hpLcaYUTrtkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjE6MjQ6MTMrMDA6MDDFzh7IAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIxOjI0OjEzKzAwOjAwtJOmdAAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

KissManPersonMediumLightSkinToneDarkSkinTone.displayName =
  'KissManPersonMediumLightSkinToneDarkSkinTone'
KissManPersonMediumLightSkinToneDarkSkinTone.defaultProps = {}

export default KissManPersonMediumLightSkinToneDarkSkinTone
