import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PrayerBeads = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFB0iVDFIIgAAAAZiS0dEAP8A/wD/oL2nkwAAHxhJREFUGBntwXd4EwTeAOAfUHb3oivpbulKd5qkSZtmNM1sdtKstklH0rRNmu4JbemEsmQWBFkCCoqAIudCnChyoqjgFlRURAGRTX/f+cf3PN536t15dwr3+b7whz/cfXjPbIKYN7eCY/u9bm33r3ejnOyCvDfa4f+dWocDKp11U9a09ybtaBuQbGtbQB5r6pheqJVN2dDYLXysbt7Gp2rnb33EOa+kx2SeMWyqgv83NAo5QNTsSesbOgxPWDvfO2ZsvXLMOu/sXntH94DBIn+ytuvzU6Z2PFPeg++1j1142NZSDX/hMJXCf6X184agp7bBe4trnnZ/Q9+CB53zjK2Kkpw99ta3P2oexfM1A3jlnu34hMl50UpM+Pi12m487xrBK/3jeO3hp/GAoe6FeSoT9yFXr3NPQ6/9XkdHLPzFHCYF7np2uRq0YsmsrY6OxS9Wdl49qWvBN8o7r7Sm0N5aSeNff7+mBz/WNuKV8V14UF+P8smeuCtHgq/mG/A9RT2+7xzEPmL65VWM4i/eNLZOvGfunjjaMnRkfUV92n5HF9z1hsRqaOaK8x+va//6bOcSvOAYwev37sHxQhWWTwvA7dH5eDCeh8+Rlbg8NOt6kUfAOx0eUdc3BJNxJ4GOi32TsWzWHHzJ1IDfOEfw+sLNeHHrXtxbUrPaY+pMN2seD+462+eNQr+jyWe8sYc17urmVmcx6jfkiq+9rq7Dk8JqPD84jruFpomimb6fOdzDvx/wScB+zzis8Yl6ojg9m6L2I6yvdA87Z3cnnpd5h7xY7Rdx/kVFNZ4UW/Gr9iX46fB63JwhOChJzPCozmbCXWWxvQF6Km2EXXWdO54vbb3wkq7xYltM1hnT9Dm31gVn48ORTNwbw8Zhv6RL6qgkkyg4wqz0I96rnBM5X5aUFisFgIIcintRXCJFEJfE4NEZEVW+kY8t8yfhQxH5eDCRj5uJudgWlnpfu6spuKGtya3R1QB3BRWLC38xaYWxqv9Y69DEF7UDeLF1GR61daFyduA1w6ygb5s8oiYaPCIvWYJil6k4hR6nACB9fqNbytJ5k9MWdcOPydlcMAGAKjKh0OIRdqrZI3LCMYs4oZ7sMzE0l/bxIXPbkQM1XQsWVtUGbK5sgJxyDdyRihZ2QuqqDtCvXeRG5RR4DVIL9x+paMYPDc34ddNC/GrpZhyLo33Ci5lr4AdHVAvD44oEVJq7KC0DABF+CVsoAnpf9yRBfDJJGBxRIwgI27twLnXipMaFX1kH8POh8VuPWVuHokNC3WqkKrjjVChUYFQqpo/bWxS7bR2b1qmrNut9w99aHJyO+2I5eIgkwcfieTgYSDpWymCHVHL48GsoBUKgi/kzWmIzH3yhzIVfuYbxu741eOPgi/i0wXmilpRLaGAK4I4iF0kAD78Hyytq9U/XdZ9/x9iGJzSN2B+RifIp3hOdHjETA94J2OkZc7GGmGLPuX5iklmuhl9DwxcCX1E8qzYwbu+WBBYeJivw9UILvqF24vpoxtt2KpvoYIvgjiKn5gE9KdVzrbr88fe6x/CcYxCvLt2GH46Mo31O7MeCQOJqRWDEagUxXlnMYs+U0hjwa+kNBrADgIEQX9k4O/zKcv9UHA/KwkXeiTeb5iQs0jpsUytL9HBH0eWzQZrH9O2KyXr+cZYWj+bp8P3SNjxR1o5joZmvyzNyQj3wwiRPfB9CvjgM/ypRWhaIqIzZ0qCIZtks/7PGKb5o84v8tJMnE8DVZyeJRXy4M8SHAj73ITgqqjx6bY7UktDY7e0e0bgxmIzbw3JxlW8qNgclr1OUG6ablWr4d7EYjLCEJYVWqaZgYQb7k0czJPhnQfXEa47ek/cZazjvOPpB2loHvyu+VALjFfUwr7Qi+v7q5vsP6Bs+HY2nfSua4jmhnznnss2deM7sF/WwITkzzuIfBVK1Ev5djGIpsKi5MwcZ/Ades3Xi+caFeHXgXry84wA+VlL7kCA+dbaNJYDfVRlfDDkpqdPXm2vXvd44gGcsPXi2bggfEZnQEpm4nR0dT+VSqD5yAGBXm+DfScspAimVEdBOTD36lKgcT0is+KmtFz8bWIPbskRHzeT8OfVMPvyuStIooJybTlxbpH7n3aYB/NTSid+PbcLPxzbi6qSCp5W0PG9rPhf+E7RSGQhL9dMr/KPvG/FOwJ1EOu6LYePmMCp2BSZvUlWXz6hUqOGfQgMAGgDQAIAG/zpFJhXEadkBDf5xL22NY+KTiXx8mabFRxP52B+U+rhWJvWoKhTCf4JGqQSZmw8o4kkZJi/Ci/bZYTdqZ4Rg7YyQ24PUou3rzI60mACfSXYmD35swN4AZo1mxpLK+uR11qac4TJr4LNN/VCj0HitKavTP1TZsvChypa6xYaqsFN9K8FcKIRfpSCfCclZmZM6bfVRJdHJW6pmBOOwTyIu9knGLs/Yb+1RqcYNAKDRquE/hcflQisAFKZlhssi4jZ2EUgTT1FUeNLQiq84+95erSpnvFxSDxajEX5Qw+FDmUDovVJTMfKUsfH0sdK2r5+3dT25VF3OGJPpFz1jdF19t6QVP24Yuf28q3dPr0gdtLhYB/80hUAEfzFprLxG+rCl6fWdearLnb5xqJzhd0XhE/qoihBXohRLpqvyCuA/zZzDAFFGttdIvuDg6/Xz8OuGUby2aDN+s2UvbhcYNzqUusg1Fgd/3OJgdFbaZjtItKpdQtO1M7Y+vOBYiBdX7cBlVP67A0m5337UNIzf1g/jrc2P4qer7r+xlq0wg6Vwst1U7qnVqae+vvQBgMwQ+LuaOSKoyudG7bY2HX+/cRi/qOzFr7pX4H655Up7Rn7pTQDI7nHBb6E8LQe0WVRiV0T6yadE5XhcUImnrfPxZN0C7AhJPrMoq/DYS1rX5WPl7ee3F5vXW/yi9u8t1OHpuj78qn4Qv9/6KC5OZqDDKwJfllnxBL8SzzaO4lF940R7HHnrWrl5+RPlLU8erGxdNV5ak4KOlQAtfPhFraRcsCaRi3ZIjJc/dPTj6dJ2vLJlH77RsACHosjL4ZtNk2zMIvgtlGTlgpQvmG3xjXxwyHsubguj4e6IfBzzSULD9AB8UmzBr6wL8MrwRjxS1XlLPM3nSr9/Iu6dy8VDJDEeypBhs1f0RdXMgAvL/VNxJ5GBu4kM7JwVibrZQdee5psnPjV14bn5q/BIy+ChAb6SsEyohV9UTkgEQ2xadrtv3Nkd0fn4eDwPD+dqcWt0PrYR03sQAKoFxfBbUFZaQAWTQRFPohi8w16odSdedXpEfCf3DD5u9Yu8/Jq5GT8yteLFkQ14smMMLX4R72jdg97v8YrBUZ8k7HaPvlIZMneeODzGXu4RetrlEXHd4RF+ttDd/6154Wm3P2kexvPOYbz90DP40dL7btyTJzEeYCjhF8kodBCKhNO1ARFj9tnEW33ec7HXIxYbvKNfrkilJlSHp0BpnR1+K+IqC6jef21SYSKJwCfGSgXhsXx+WlZGjXfEG+vCcnB/DAcPpUtxezgdm0JTxgrnJtFl/oRVGl/i/arQWIskm+ou0mvdBHFJGUJCjLooOp4iD4129c9JmniaqcVXckvwXX0TPpYjv9WXkFu51iMZfla5oBgg1HfSSKmNMZgv2W2aHXy9eKrPVal/2HhxXHJiIgBIeXz4PakKi6Bw84rJmtCYBrs74dJ8rzjs84xDl0/M8fIUcmalFxFyHJVuZINyGqXXNYnSXgs/piHGgzopPaPag/D+iHcCbgwm45qAdJznHfeGPZmS4CCS4CcV8wWwTFUK7RI1+ZHq5lPH9E14XFCNTwrNt9cUyMcNFOYsF4UDdwIRmQLCQt5MMTFWoQgMX64MiuyTxZNS8/evnyQu4sEvKTGXg2Hv1kkyYpxM7Rl8RDPN71bpVH9sTaDsWW60xsNfcLKy4W/oWYXwg0GebOhoUz9+2bwQL/asxGt7nsZHxeZzjpgsWlcsBe4UUR89DYSrpyD63YOTgs68Ninh2A74R0lFEoBrpyaZkjNdXaHJ1w+kivEtXdPtI67+V+9RlKbtVFeBbFEP/BUtqxDg1fHJjsi05dsy+PhSvg7fFFbjO9U9eF8c82JtfDanJTIT/hvoSNlQnJQWNi+BcuxoeTOed47g9SXb8MLuP+GDqspVk2bMdLPn8eCvqGUyqIbpYAhPlLhmR5xf7p+KG0NycLV/Grb7zn3WTM4LtiVT4L9BSSwJFFGJqV2hKZ8/I7HgiWIbfmrvx/dcwzieXnhQSqG711M58DfEOTTgq+TTZcGRi7TT/G+XTQ1AnUfw69roZGo5ACjKTPDfQJdBBRUtL7DKO/zwqE8ibiPQ8KGIfBz3S5/oCE3rjz37+GSrRA5/xajUwBZ1BcxXGan3qSqObU8X4AOkItzIlL87xJEyH8sQQ5nTDv8N5FIpFAKANDZRLZ8dcK5iZjA63MMvWf2id5WlUYjlsanwN6wZuRAEMHWVsnTrW+0j+GXdIH43dC9+tngD3ksRPyKJJrnb0xhwt1O5HICA0Fok4yyiiv40b07K9zU+ETfNkUmLhdkUP0l0Ivwka1gCFM7wmzlEyjv8ksGB7yjr8WzzQnyvZRRXR+e+aY5ICXFEZ8DdriwxAwxpOXHLCorfeElZh6dLWvHLjmX4StPA22NcReoGjgp+kj4uFdh87tQqn8hNY34puJPIwL3RbNwURMaOwMSHdXyBezW1AO52VvCAssik0nV54lsftY3iF/Y+vL7xEfxgdN3tZeSi+qfyNPCTNCVaUMIMUEYnk0s9Ca86PcJv2mcT0OQe8pkhliReAAByuRTuVuWiYigpEsxoNVmIqphkZ4tv3I1dpCJ8Ok2CrzCNuDOWdasrKtu6dGY8/Cx2Xj7QVi0CbnxSlDA0clQxK/D7zoDES5uY6kPL+FoNm8l0qykqhr+LPg0gGCBZz50SI2NPAX8AoMXB70GDCI5MBlTSCkKW8jQrdhWVnlqWVPCpaqrvLecsIo75p+CIdyK2+Ma9Up2eG2uPzYBfZGfywMjk+q5WmPYcVtjwlNyJHzeO4lPljZ/3kPLYa8LIUKHUwM9RMAqAlpXl1i/UFG1UVKzeIq9Yu0SgFWtpzGnl+YXwW9PTmRCeEOvWTeOMPa6yTrxf0oJnawbwIUUFSrzmnFV4hz5X4h9xnzqelL0PAGTrF8MvcqXlQkUymfWAtvLime4l+EXdAF7bcQCPtwzjguichZlV2hkmnmB2Vnrq5Gp2EegVihkLpPr8FUqLZVSs45q4wpmt+XzZA5LyL16T1eHb2kY8pHecW5Qn1inE4lkDUj17pdJsHBaV5CiZ7Kn1jCL4dyokpcMPHGwRYaHUKF8qK5WV0QqyuhMpx1+1deBnjgG8NLwev9m2D9cypYcKMrKINKVkei8A5NSWwd9lCUkAQ2RKQV9w6oV9mRJ8NkuOrwoqcfNcFlb4xxy6J0+2ZXux+bFVAl1zNZMX3Jcv6niYX/r1i2Lbradk1m/7c7hLWhNyDr5W04VfNozg5dGN+OXanbgknf1CO4Wzap+k4puXpPabTylsn6/kqR203Fw3W6EIfrUn4wAOJQDc7wewEaAnmQZ2GittnK979skiy9UXJdYrS1PZx9Wz5pxfG5WLj6eK8CV6CT6RJcOhsMzHVSyOh5XKgn+YJpUMCjrTt8w7/OEujxhc6p+Go96JqHXzw5bgxImXBVX4jrYJXzC6rtVGpx28h1L05Yd1/fhlzQBeWLoVl5KLbqhmBd7YX6DBo7xyfLe0FY/qXFjhEXZrmJR3++O6BfiVfRAvrt6Jj2vtp1uSc9P7khnwzypic2EpSwo2lmDOYpGuZqOkbOlqod5q5YlCO7PzNx4qd+Gn1l682L0ST3QuQqlH4A3TjKAbgz6JOOabgt2esRftxJTyQwBgUCjgH8ZBBNF0bxBGJcQqfAlrSrwIR4u9Qx6VBxJOPGGoxS9aFuHFofX41boH0T4nFhel5OHblR34YXk7fr14E96bI5pgT/f6utMj+ua6oGzcHELBEa+E27ypXt+tyuBMnKrqxNPVPfjNPdvwUbb+amt8jnIBIRP+WbpsGsgzcnzGeMqtT8qst46L7XhU57oxlMZ6pDoo7uSTymp819yGX7Qswk8G12B/XM4JVhChR+YZfFDtHXZAGRZbLmazZ8jSs+FX4aZlQi6PM70glx6Yw+P42UIT7t+SJcDnmXo8LrfjyzI7mj0JtytmhtzaGEbBPdEs3BPDwvlecZekUXNrVX6EzRXuYeeq3cPO67zDtgtCIjtaPKOubCHm4r44Lu6JZuGoT/KXtclUmis8Df4RFp0W+Cymm1Wu8iqsNE4zR5Mkm/na70+3LcSvHcN4ffN+3MbX32K5eVxd4JuIOyLzcH98IW4JpWJnCOlBpVblTiaTPXIZdA96s30S1WWFf5lKoQQnAOhC4ywNsyK+X+6fhuuCsnHYay5qfAj7JIHElTZ34netntHodA+/agqIHJcUsDwLqDTPAmI0pYAQSWOkpXmJ6Xl+cv+wXZWzQrDZIxKd7sRLlsCYBSqFYoaewYK/p69ADDY6J3K5UDf2gMTy7KZC3RZ9cOx9ozGU2y/KrfhGsQ1Pu0ZwJ1lyUzonfJvGM/htp0c4tnpGTTj8ok84UnMZTRAAtoEe+LcrTskCCT3fXRYY0aX3DD1V6hF2RutL3C1OSE1h0hnuvNBIqTCQ2C0IjVLzyBQfgWcgFCzqhR9I5HKogtmgnZuWXOEXddDpHYX1HkS0RCQc0HGL5pSSGfD3qLKoUJiU6jVcIHngkLYeTyob8JSla6IlKv2m3M1nYok/CbeG5eKm4Bzs9oo7a0rIzGVGx6UX+od2SEOjWszU3JSVX747qW3pMPzHFJDJQBOJphaQUqNYCclJ+VSqpwIAoh5eB7+khMUDUV6BpzM0cfdelhZPqV34ib0fnzM3fTeYyTYeDKZAbY0dfkllYCxoiQn0Jems8x+0j+IXjkG8vmU/PmFrQ66770mdR/BH1tmE65UehNP60DinxFAyVSGWwF1Bk5oD8jhS8lAy/cw7rgX4qb0Pv1+/G0/2LMOF4eTNSWbl1FJxMfwYR6cGgl48qa2wOPUesaHjHoGuUxdDamoNnHtpH02Bz9O1+KaiHndliNAWlrSAFhdPYhOi5JzouWlsLmcqp6AAfvDg+lbYt2XetO1rW4MaqwRzShW06cvnG+COUpKdC6pUclyDX9wHW+IL8CBJhC8wDfhAPAc7glJWEca7pugkUvhfXXgJ2qPSoTojN29doebt56Q1E0ckNRN9sTkX2G6eN7o8YnBFYAau8EvFdo+Ys6aYVJbNKwL+r1VDNlg56nJfM2S2DDRKHmyvZh3pquX02UqSpzvLyHDHEItEwLaYpmoDI0ec7uE3hn0TccQvAZu9ok6bY9MKrLMJUDm6AP6XisUFOo8z3UFI3vqE2oqfO4bwwvzV+M7gKjQGRZ0WeQf9Sece/JHOM/QVdWisSWI0TJUKRfBjo70OGO5rm7l4vsXR2yB8p7264Hq/k4d9zqKTbTXCuA67EO4IJVk0EFNzZzQw+UUVcelLWNN8vhTO9PtA4xe6VRYRx+fqNVMEAj7AnwFMBULQCHhTa5lFYWo6M8nmF/3cHrYWj6vq8MOqHnzbOYBDUeTj7LnJ8bkx8bH5aelBpAbL5AyTEn6su8UK9fXOKYPtZeXzneLXGsqZ3/c3iq8v6VZMzKsXfNtSzTPrZKlTbMY8YFNmwu+mhMUFchHLrSOH3XpfruzCniwJro6iYUt0xhOl+YVERzodMk0m+EHF3EzQZlAC+nN4o/cLSt9akSs5IZrl/1WbRxRuCMnBneEMXOWXik6/uAfFAv4sDZcHP6WvvRoWNIhhQWspb55D9laVhvZdW43wxrJ5mpuLe7QTA43iiQ4b56TTXJDYYGbC76o6ORsMKVmkcYHmk1POfvzM1oeXVu7AwxWtNzuJ6dYDEAqlrEJQS+WQ4qicUh2aMHA/tfjW29pGfNfShYuyOciZ6nm9yjPsSq0H8ZrZi/hySXwaxQBeoBWI4ad014qhy1lCarOJXi2TUycaK/kTS+bpJ9YOmyeWdGuxp5aHNi35Vr2JvrzRKprlsPDgd1MROhd04QlFS9NYl48aG/BtjQM/m78CnxCYscU/YRgBQJWTC6p8NgjJ1DlNYUlHj1S14pmGQby4dAueGl2LNkLCMWZ4pLEwNELFjU+KAESgaDTwU2rLheCoVhKc5dzHjcVUtOq5ONZjxDXDFbio24AuMwtLpZlYpSZja3XBd40Wur67RgTNNgb8LkrCE0GVkJ5o94h4f1lAGt5PpOP2cDqO+CdcqyIkli6AGaBgcUGUywYuJc+/2jvihQ3x+XggU4LP5+vxYZIQmwMSDnJZBR4yFhd+idUkAlu5wseqL7jPUEydqNBycKTTgOMjFTi/QY5aERlV/EysL2Pjkm7FRG89Bx1G6os1RnpcnYkOvws1TwDqxf2T5YGRVaWzQ85Y3QkTZbOCUBMQtlNIpvi6OAmwtzrI83ATgXG4I05pJxG21vsSbo8EJuGYfzK2zo68bA5LrF4NAPrycvg5DVXF0N9ZPbVMntOh4WdcrzEW4cqBClwzXIFt1iIsEWWiRU3HrnoJDjZLsMOah+1VjInWSubNhnLW/Q0VvGTEJSAT5MFvjkVnAF0schNFz21UzJ5zpd4zAkeT84/3Ufiq3dUBhNe652w6s4F0/tw+zrXjKxIujgi8v7cQAo6X+IU+I5sTXiMh02ZJs2nwc3pdElgyTz3VKKXUqnhp37gsRbhxzIqLunRYoaZjuZKCNn0e1pfmo8NExyYzA/ud/ImRZsnt+bWcW04T5YqjtKAGjxBBLWHDb86YnAWaVHL4GFf28tOyKnxLWofvOhbg2hzhx+vVwQfObqfduv1hFeLXDrx1ths/35V/8+nmwEF6OsknutI+mVJWAj/HUZoH8x2S2Q4To65Umn2+t6EYty6rwZE2NZqVNKxUU7BMQcYKFQXbqtg40iLF0VYZtlVzb9fqqRM1JVlX6g2UFf0uiU93LQ9+F9agWDBGp8g2CkuufdCxCM84B/HSpj14L1uKm0uJeO14C+KFEcTvehEnnsIr79+DJ8cIz+0q8/F5whkE/9e8Bi2c/+JjaKoUetXoGZxafe6Wdiv30vL5OlzSo8d6Ewu1ggwsk2agXpyOekk2tlQVYmt1ETpM+Vgmy5wwFadjlSb7YqOFubqrrpBikmWEqApJk0sEafCbM3gRQBOeKGz3T7i8M5mHBzOK8SlGCXYQEnCjKQC/3M/Fa2+W4O0PjIjnFuH1Y2X49kjQNy+Opo8cWi0NwZtiACiEVocOBnpdUKbm+pjV+doafd6Bzhr+N6NtShxqkaPdkI8aQToai7PRrqdjrSEPdWIyqgWZWCJMxxIBCbUCEpbJsrBMnoMWFe3TGj39aKU6+x2LKnt3lTYnoEpLht+cKoMCCiojQO9N3N/kHoVDfsnY5RmLCs+QN5doAo68MhyCH+9Mwq8OZODXB3Pwo3VReHpHLl4+br/55EDWhqNrOD2jDr5Yryyklslp9WZF7tN2PfM7l6UQHWVctJbQ0aLIRquGig5THtp0DDRJc1DGJaEwPwHFzASUshNRXZSKJhkZTdJsVBWRsERAmigtTsd6Yy62VPP+3FknjOlxSkHAmAy/ucJpPsCLTZwr8gtbJfMMPSz2Cd1cEJVAXqYLYdxf4XPiYPscPLwgDA+2BuATXRH4/XvteO5IHR7un3v70p9rbi+vy/mup159TsZOuWaS5mC5nIolwgwsk2VjrT4X6/R0LJORUc5NRSmHhCJmMvJyE5FDS8BCeiIWMRJRxEzCYnYyyrjJqBVloN3AwJ46AS5wCW/11nM/b6li5HfXsoGSMhl+c8zt45AAABS5ZFpWZqZ3FrdgxhkAUDILJi1T+qatLfEeWmf02TZc7LNvX2fkjY8fpk/sbgq9/ecN+XjhTRcutefgjhUdyKVEI5Mcg4K8RJRyUlDNT8dSWQ6WK6ioF2ehSUZBs4qBFnUeVutYWFfKxfqyQqwr5aLTXIStVhF22MU431mMC1wS7LSysb2Sjv31rNdqDemRdcYMuOPUF0SBPS9iclVenJtLkUFYVhr64MqK0IfbBEHrDw1F3/zTYCw2Fkdhr4WGzIwIZFPiUcxKQXlhBmpFZDTJqKgTk1FemIkKXiaq+ZlYLs9Bm46BNXom1plY6ChlY30ZB+vLOFipYaBZScEqDQXrjLk32qoYXw438+seWJ3vtqKvAO5YHAYDYC2CkJ7hVZCZ4eGSJRMXGsJWOsWRaxX5Ua+o2PG7GJlx61k58Y8JmKTn+PmkF0UF6YfE7Mx9xYXkXVIe9UExO3u/kJn2vJST9omKn3ldLSCjRkTBUgUDbXom1pex0VnORpeZhXVGOtYZc687y/O3N1SyfJwWJtx10rKFUwuKVNP4fF5QHps3SyUTTJEKWLOlQq6PgEvzM6h43pVGyayB+Q3TW1wV02ttpbN1KoGvSpyXpBJStCp+Vq9GmLVDK8p6xlCcfdSspB616hgv1Rrzn6kuydthM7Cc813FEXkZSlg5zIH/V6pK8qFCS4d6M2+6zcTxKVPkECxaZlhLrTaouVbv09tVP/3cbYQPz9+CP/zhD3+40/0PI/A3cvhWfIEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjA6Mjk6MjgrMDA6MDBhLh/kAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIwOjI5OjI4KzAwOjAwEHOnWAAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

PrayerBeads.displayName = 'PrayerBeads'
PrayerBeads.defaultProps = {}

export default PrayerBeads
