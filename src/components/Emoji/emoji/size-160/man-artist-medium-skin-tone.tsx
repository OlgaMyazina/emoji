import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManArtistMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-artist-medium-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBBoUcFCPaQAAAAZiS0dEAP8A/wD/oL2nkwAAI9hJREFUeNrtfHeUXHd97+dXbpu6M1u1u1ppteqWJRe5yTI2NgYbmxICgRAgISGm80wSwBB4sfOMz4MEyMEGngmEcg7gYIqN7RiM3BuWseUiWbL6SrvanW3T55Zfe3/cmdmVe2zhvHdO7tHVzNzd2fn9PvdbPt82wH8f/3389/EHPMh/9QI2rV2LkzZvduYmJxMdXV3+N//t3wJjDAiZX5rv+zDQ2HLH7ezAju2sODlJQShRIFQpQQgIKGfGSKndVFJ1Dw3KD17ycf3Mv/P/HUBvfsMb4Lheb71S/rxtWWcqpZ7I5zq+kXIdow26jFJ5GJPVSucNTI5SmqYECWOMCxCLEGIBYICBMZCAEZRSH0ARlBQYZQcZo3sdz90zMDw8U56bM1/40lf+3wXoZ7/8dyw7bi1uuPa7iaBe75ZhuHhiaubt0zNzH/U8j1NAp5JegVNqGW08QohFCeEghFIQxMJA2gsnhAAE0NoAMAAAYwAD03wFQQipUkb3WLZ1UzKd+sHcwdGxxadsxBVXfem/HqAH770bZ5x1Nj778Q87IggGpJDrlJSnCCFP1EqNSKkWaa3TSmoKAIxRUEKaJ20D0rpmWosmTXCaFwwMmv8AE4OjjYE2GkppSK0AQLue++tMLvMhKeXhpavW4NLLPvfqA/SNr30FqzechNt+9pO0UWqlCKNNSsqzhBAnSKEWK6Vcow3QlAhGKEgTgJa9aAFAEF9rmREKAtW0K6S5eNP8/Ric+D/dkiJtoJogBUJAG61TmdRHC6Oj/2flKRvx5au/+aL74ccClB/9+49x/DmvxXVXXZk+8NT2NfuffPwcrfS5UsgNQohuJRWLQQE4YaBWvCNCAEYZWsa0JTFt9VkgMaYpIZTM/9zAgLbvs2n/MlkgUUYbKK0hlUK1UaeaYvW3b72F/PPlV5o/qIoZY/C5j30Y2VzOmp0qjMhInAdj3mi03qiV7hJCUiUVCNBUl5aUoG0r2qA073hLbRaCQ8k8SsYYxNs3TRjbtgZGG2gYaGOglILSBkIphELAD0NU6jX4QYie7vz9a49b8yYNUvzSH0KCtvz8F7jmmn/CFz7x4bRfr51RK5feDoPzCDBklOFCSGitwQiBxVhzk7QNREsdYvsabxaEgDV/YIhpg9hSpdYNIWjrEbTR0Dq2M1JrKKUglYZQCkJKRFLADyP4QQA/DEEI4NgOjDZWJCU1L1E2XjJAX/ibj6IyXcEdd93WObx0+QXFmbl3G2POJCBZGAOlNIyKP9ZirKkKpL3RGJ15daAte2OaID3DSxljYIxpGlsDrTVU85RKHXUKGYMSAyMRRRGElFBKgVIK27bAKINUCobgUFdnvjo1Vzp2AH36kr8ElM5wm1xUmSv+tZLqDALiwgBKSRjdsifzXqhlN44majE4BPNqZdqGtQmI1hBKQ+l445EUiKSElBKRVJBSQigJKVUbLKVU8/0aBASUEnDG4Dg2CCGxuskIrm0Z13Ue+O43vhmd/5a3vnKA/uFvPo5kNstmJyY2VUuVT8pIvN4Yk6SGxHdUacAAlNJYRQjalsGYo1VDt1ywiVlKWyKMgZIKkZKIRKwaYRSfkYggpIJSsg3gvOGe93CUkqY35G21NcZASNWWREYJUknvcEdHdstrzn8dhlavfWUA/f3HPwytTbpw8NAHoyi6VEk1YHTTdSoFo+c9jzEGysRkTZh5qWjzEa2bp4Fs3vWWSggpEEYxMEIICCmh25JA2+6fUbrQRRzFe7QxgNEtqtj+WcvbUUaQ9FykM6lfbT77NTsf3/YYPnvZZ18+UfzbS/4KhJKUX6leISLxUa20o7WBVrp9R2IXqmOv0QRANY2mbr+eJ2qqqQoLbYdSMn6vMaAgYIzFG6KkKQnzALQ+E+b5vLM5ajuUEFBGYXEO17GQzaQne/t639So135/1de/g+Fli1+eBH3sA+/H9q2PYGjlinfWq9WPaG0cGDRBMFBaIYwEgiiEaNqGFkAtaYltSWwTWox2fmMLVINQUELB6Py9isFFW52eCYpZSBCfBYuZv960fZoqSEnBuTU6NLRkX7lcfsngPK+K/eaxx/D23p61lUrNhYkXHQqBMAoRRBFUU7cXsP2jxHHhomOjzZ5XXmMQF7xxPqpaqE1Y+EmmbenIUTap9Xnt14RAa0BIBcatufUnnxTt27P3P0VrngXQNd/5Hi4+91xw2/5ZEIZvL1erQ1EkoLSORZYxWBYDpTRe5gJ7g4U2oXVHDY56buZ3fBRobbU18+85mgrOcyI0OVSbJzXtFKUEhNDYmzIGRuPnjFHYFi+eedZZolwsvzKAAGDN+uPQ379o652/+e0XuEX/pxBiWXxTmkvWLW5iFtik+ee0fY00PVcTSGJADIFGfEFr0/Z45lm2ZSGHWggOacZqFLT1SCnYAkBisGj7vYwSUEqnu/uHBLOtY5Pu+OE3v4pTN51Gvn31tcdVq9V3RCI6Twg5IoTICyktIRWRUkEqCSHiR6VUzE/UvNcyC41sE6R5CSJtRk2eEay2OANtAbTAeBM6H7q0AKML/kb7bzVtAOcUQ4sHPv34I4/80xevuQYXvektxy4f9C9XXg7HccnM1ES+Wi4PCSlXCCmWikisLVeqf1QslTO1ho8wFE3vpGG0bgeX8xueBwILOExzyzEeBO0oC3g2yVzItFucqwUGXciNFtADYwDH5tGqVSveX5yb+3E6m8G1P7ruD5swu/wzn4Jl8Y6tDz74y4mJ6XMiKWPWTJsLpbTppVocBmDEgNE4+OQUsDkFbb+m4DxWBRiyICSZz2UQSpveEZAaEMogUgaR0AiFhlAtPhQTV0pJW/pSCbe8Zu2qN5fmivd87xc3vHIb9GJHNtuJT37ustJ73vrm+wtTs+cww+DYFmyLwWaAQxUsSNhUwWaAUgL1IEQQCgghQTlFJu1h+WA3unIZcMZhcRbbkaYtoZSCNI2u0hoHxwo4PDGDRhjCYQzpdBKdHRnkM2loQzFXizBXE5irhZgq+wgVYu9oNGzHLiQSidGXk59+WQB98nOX4e3nn4uOjo57u/LZCozO6LCGqD6NRWkb+ZQFyyJglGHvRBG7x4sIhAAMmlJEMF4ogTKGlUsXw7I4OOdglMVZxaYEEMRkrzBdxN0P70Cx2ogJpDHQhoBbHAM9ebzh9A04bcUiCKngNwTuf3Inxks1UDcLQZPIpJOPnbzpjML44bFXByAAeO0FF4DZ7gOiNvPrmcN7/qQ0U4DFKLpS/cikXHCbI1QKB6erCIRCVzaJ7mwKmZQHi8VSsWJoETqy6abUxODE3uloftORTeOE1cNoBBE4Y4iExGy5isnZCvYcnsSy/h4M9XWDGSDhEvTnspicOgIXPnq7BirZ/u4f3X79D4NrfvYbfPxTl706AI0/fAsOPr2jmkxnbqFh9Y9tRljCdZBOJJBMxABlGMVFZxwHEIK+ziwyKQ+u48C2LXCLgzPWlJZ5o0oWkJ2W68+mk7j43NNjT9gMXyIhMVeuYbZURW++A2h6NQ2CdCIBRmMgdWN2tMdMPNrTTfGqqRgAXHXd3fjouSOghOxyLGs2tFRPwnWQSiSQSnqwHQ5ucXR35gBCoa0EfGHQEAwZy0ZKS1gOA6XsGcDMS06bPxkDKRXqEVCLCEIJpLwEcjkXPbksQAiUaOZciIHFODjjiGSEUOpd/cuWTvtB+LL2SV8uQF9777m48IyzyMjAYte2eI0RgoQTA5ROJpBKJpH0PFA3g+yqM+AnunGwUMHtWx7Ctl1j8NNL0ZD20Un65ziBOFRoWF2YoznsL1SwZctW3Lv1KYS55TC5YURCgdCj+ZNp5pg6Uumymahk9GTp1QVISoNtT+89NZNM/msunVmqjAZnDK7jwHVcuI4Naiew/Jw/xnS5jvHRI3jL+z+C2XIdv/3lLXj8dw+gY/XpiNSzRX/ha6M1kOqH7hjE4w8/hoveewmIl8Ydt9yJX//4++hdfwaSg+shpVrIvyF1zNSX9fe/Tyjxv/ceLiSu+pPXvnoqFikFqc3JlLIVmWSSRFJBGYCz2CMRAuSGN6BreBXuveoKjI5O4PBkEeNTU+AMmNp7Dwj/M3hdS6GL+0CbqY5nhhzaEPSu2YgbrvsJtt73IBrmK9i5cyciDlSntmN89++w9rS34KnJfUBYbWcEgkiBEop0MmH7YbTJtq28ARqvmgTNVX1IqauR0CqVTCKSBpGK7UBseC10D6+BMRpRvYqx0TH89uZb4fs+CAd6F0VgXKJ76epnpWZbMR2MgZVIo3NgKRrVIspzZdx6w02YnZ2FAdDbb2DkNJL5HiS7+uP3EEAZg3oowLkNzjjqQVi3OIsszl49FcskPFic7wsjWUk4LpQhCIRqFqMAyijshItUthMnnLYRI93AQBfQmQXe8Brg+JMXoW/ZeiQ7e0AYe45gNU6F2Mks0t0DOHHTJoz0UiztATpSwFmnAqednsLAylNBuQXb89rvU0qjFgokvASMMhBSjvXmMtVcKvHqqVhnJgUh5ZFQyGnP8fLJRBKRVO0AFVpjZtfDcNN5XPC+D4HLw6hP/w5dvQoj6/qRX3UZ8r0rMfXkPUelTXBUCoVAywBhZQ5nv/W9qB7Zjsmnb0Kmw8fKDTmkFr8fPYtPxcyurWhMjYIQCqMlpNKglKMvn4MfCWhjnv7aj//Dv+rj7/pP75O9XIDesWkdKKMyCMWFnLFlsf2hGOjMwXNtMIshLE+jNLodRIRYsnYjsr0rkMqfgI7+tyDlDWJqx32Y3fMwjJJYmDhc+KjCBsrju6FDH4tXHo9c3wqkOlYj1XUBEs4wpp+8D1M7H4IMGoAGpJAoVRsQSmFpbze01gqE/GBJf/e2j37nlldPgqQxeNsFm+rf//kdT/th9DrPtiGkQihkXCMzBoRQSL+GuX2PgTIOy3ZgU4Lavp2oqCdACcAYi/2zNs+blgzKU/CLkwBloMxG0lgQR8YwE+2DVq00CoExGkoZhEKAcwZtDEIh64zTPa5jvax9vmyAUq6DK791vRnsyT8ZCqUJAY2UhB9GMUB6vrOANCsSSoTNtMZ82kMbtNkxAQHjMUFUMs5gMtbMB1EWXxfhgtwSBSG6SSY1jDYQkUQ9CGNXLxVAMO7Y1sGOpPfqAnThScehMFcCIWRbKIJZbUy30hqNMIKUqpkTam6uWVJuZX+OViMDEUpoqWG5vOk34kqtCCVs1wLjdIF3Oyp93c5Xx2bPwI8i1MMIBIBQCoSQJ1OuXYDBqwtQx3v/J77x1xch4TpPlWqNB0Mh3yyVRj0MIYSCVgZUA4QYGBaXmFslVWNaoYWBUgblYh3EAGnitY2PihTq1QAJbZDMuM8q8LS8ZTN7G9frpEIjiOBHEWR8s4KEY9/0+IGx8OrbHn3B/Xz//jH8xS1zuHgxNpWMM10uV/asOXnjy3fzANCbz+KnWx6qRVJ+ueoHv1Jaj9aDEH4YQQoV19EwX5anzSpo6ySEwGiDydkSdhwYx/4DBYwfmsXYoVnsO1jA3rEC/CCa50XtpoeWlzMtNgmjNIRQcd5JSBFJ+XCp0biGUnJzVyb94r2SAzbMF4+Hlvo99QiXDp+2kfn14OV7MQD46f1P4sITRiCEGpNa3SC0JoTgddlEgqRcB5bFIZSEMga2zWNQ6NGBKSUEUmtMlsoYnZ7DoalZjM8UUaw3kO1IYHBRJyyLPTsR2ixH1ep+3AChDOqNEGMzRRRr9f0a+FPH4j/dPzXTGMrncfuOA8+7j0d2l3D8yA/w9Oq+dTVpfyIgfIWslW+wVVh5RQABwNb9k3ho/wTWDOYlJZQY4G2eY3lpz4VjWzg4UYAxBvmODCibrzYsjOCTCRu5Zq4om/HQ05XFUH8nhgd7kEw4C0o6C07ENmfHnlF4lg0GirlyDYdn5hBJec9gPvtdGBL+4N6dzwuOMQbW6z8FWDwtLj7pPftl4kuZVMcJgeaUq+CGSqCOHJMOMwDIJRNQ2uxqhOGOmh9srvkhkp4Dv+Hj4EQBQisQAgRhFNuJIEIYCTSCEEEYIRQCHekkNp+8FlOzZTy47SkAgGNbSLgOXMeCY1lwXQsJNwa/Um3g4HgBg52dCCOBcr0BIaVOe+5dD+4+4P/52WcAeH7b8/MnA5ySJemv7NdX7oisS5ZlLJdrAlJDMmNFPQdKGscMIIdbuPXx7bObViy7qR5GZ1YbPskkXAwv6gVlBAcPjzdr8eqoOhgnBJkEgzEc3KKxy5cRUg6BxRmMURBhDSIEas0UbCsDaXGGDcsXw+MW5sp1lBs+KKUHMwlvy8nLhvCBf/3VC3bIkQ+O4kMXZd65vWRdYqUstxsEgQ+wgPKsxTqrc+6xA+iPTz0BQkkwSm8sNfy/Kjf8lVk/gW4vgw2rloO7tF0sXpjn2b53DLtHJxAJCcYUfvvQDsT9jAzcUCS8BDasHsBgbz5uxyNkvslKGUQNiUrJR7nuox6GoITctG7xwO5C6YUrqBNTEcy1g+7rv3XojWWRdnuUCz9kqJQ1WEPSREZngxI5dgBtuvzbuPJPz8Xff+YTuz9w6ed/WKw3rsgmPJb0HNgOB7MdMIu37U4rZhudKOO+x0bhR+LolrsmDL2dGSzu7QHt46CMzvc4aoMwEvAbApW6j7laHULqAzZn379/1x75rdsff+GU8XQNqBK7OFvORpHCbN3gUU3BBLDC0gaOHyWCxrEDCAA+/5M7UJgtmbTr/qDi+xdMV2qbE44D2+JgnMIG2qQPxoAa4PyNa7CkN4/t+45gbKqIciOAxSi6O9IYGezGCSsXoyefhpYaNK41w2iDKJAI6hHqjQCz1RpqQSgZJdeetXLF47smCy9OAIPtiIB0Pwm7nqoa+I0IlYYPDoqsg+IgNzvW5KNjCxAArB3qx/e23Dd26srhq6p+8G+TpXKfxeOkvFYG3IkT9XHooQFlsHqwF6sGexFEAoGQYIwg6TrglEJrAxFIcIu1YzMlNMKGQL0eoFito1RvQBtzc8JxvrP1wAHz5ZsfetF1VhtFaOOuPm9xcem2gyHK2sKZqUkwzhEhc+Om4aWPbF5BwY41QLc8uhsfOO8UrB7sO3BkrhwFQpyltbY5ZWCggG627DaDU4I47pKRAtGAwxg4odAybthq9Ry2gJGRQhRINBoxONPlKvxIbLMYu7Ti+weHujpx25P7X3CNN9zwC/T2OyhXonf15a03ssYs1ncGeN8mB2ct5+Pnr3X+zkPh0LsvXnPsAQKAu3cewpJ8ymQ874l6GDI/EqcqpS3abPclza6PFjWmNPZOtFU0ZHHLCuesWXKObZZWGlEUgzNbqWOqXEU1CJ4C8LGxudLDQ505fOH6u190fW9/x5sxdricSKXsSz3XWbVq0MVxQx5s2wah/LqR5eu/5yVc3du38pWFGi90XH3bI6j4DT/juV9WWn95plqrjc0UUShWUK7UEfgCMlJQQkMr024gJ6zFtuPmJ6U0lFQQkYTvRyhXGygUK5gsllHx/Sdh8JEbH9x270hvF7544wMvuq4tv/4N9u07jLHxwsaZmdppSpm4fYZzaGNmmGX9aNfuR8TIsuNeWcLspRwP75/E+sVdglH6kJRqJozEhkYUZYRU87MFLenQuq16WmpopdvgRJFCw49QqjUwU65iplIzgZB3EoOP7R098uAbT9uAL97wwEta0/oTT8IbL7yAPPLItv9RLjdeF/gajpuElBphKG7t7Rm8hhAmlw2PvLJo/qUe197xBP7sY+/wrWTyJ6WxwyfYxfIHwnKFNKIIWT9AwrHhWhYszsEZnQ9im32RkZQIwgi1IETND1AMIxxxLVT6O/etWDq8j1dK6K88jR9+4nS87+u/e9H1BL6PG391c7fW6qxKpYJicQ7FchUWt6C1eviTf/t5/9c33/rK2l9e6vGej/wp9ixh6C1jVaFRucKv+RenJZKZiRksCgQ8i8PiHI7F4XDeBqlV/hFKIRISoZQIIgFfSoxlkih1pFB0iexMJ791XjL/uf81d15t+7KfohFKnPqZm59f7b/+dZTKFVBKX+8H/vVK6YzvN+AlkrAseyyTTr2l3mg8+g9f+Pwrzwe9lKPUn8Txic6BO8ceu3qmWj/fCg16uAOSSaGjMQ0dKpAoirtd6fxIFCWk3ZnWbjaP63BAdwdYJgFtaz5tm7/8PfwHlqevv27dpS/e95NMpXHuG9+JB++6+VxtdKZWq2NqagpSSlDKtmw64/TtE8/gUMcUoMJUAT3dPeSRbQ9nS+XiUumHa7+7c8ubpkx0bsMYaCVRjyRqzILT1YH+mg8eRlBaQepnx0rP7PXkFoNyLBzRAjXPBnFp0jipv/ra8FuPqJvev2Pdho2z04UJnHHKyc+dR1cK9995U/eiRX3n2LaNUqkMISWKxVLN4vznP/rJT6NvXP0vxx6g+x+4G5Ryd+euJzc8us2/sF6vnVOv11dVq9WuydIct5MJWIqjHjUgOHBEShQtgsU9WSw3QGctgNMIQZSGBppNnkd124Ewiqn+TuztcFG0ATvrITIKDuzzKmHjFI9h+95dj96SyWR/tWvP7qd9vyZPXH/S0cXO4hwsy1rXp3tXp9NpcMYxNzeHUqm0taur6/7+/kUvLeV671f/ET1v+zNaP7ST8WS3SS8/Vcp6hBX9ztF85567oBW4gTktjOof9H3/DfV6rbter5MgCBD4DSQrCk7KgtebRAd3UPcj+FpCao1RYzDn2ujrz6FHa3SV6uiuBPCEni8k8jhyP5J1sasvg4oIkc1nkMhkUJktISUMESLI0hBnEmLOoBSXGK1+4Xre95966qkdUkV6/fEn4N+vuw7vfNe78A9X/ONrG34jm/A8VKs1zM0VldHm5z/92c+K99x5+/P3KD51+7eR6VtOZg48ujSsl8+VUXiC0SpLLEsSzscN4TuNoo9Tr2t/aesNftfbvgACmtFGfUhJ8YkgCAaCwIfvBwj8AEEYwPcDTBYK+P3UKHbbPpDx4FAOLeJuWKHjyR1CCZyUAy/poENqDJV8LKtECBMODvR3wPZczEUCO+eKoIQgne8ApEbfTIQ3LFqD3s5u2JYF23bguA48L2ESicR+13Wv5dz+Hqdm5pZf3wOtVL5QmLphxfLlZ/X19WH//gM4PHZ4V1dX18UW5/s+9Xd/+9wStOP+X4Gn+6wjO25+h5GNy4ySa4xUXAkF9/AsMtKDn/eiepYUZFDemlp9yo2isG+r27/yY4yQvzbaOJwTWBaDUgxGc4DYoBQYWNSLlOdixfQ09hRmMcHqEBkHbjYFx3VgUQIRhKhVaggqVRyxKKY8jl25BKKEBZ2ywJkBZwxJaoFThmShjuHQwQmLRpBPZ0CIiXuwmyegiDFyxBj5RWPIaZGknz0yeXgPDF1ltFmrlMKBgwcxWShAKX3zZz/z6f0//8Uvn7vL9RfX/wRTepCuDm/9cwuNf2KMdhqt436/A1NYsnUSWcMgjMTM6StRW5YEMQiM5Y17/WsHna7FTqSAKAwhpUAURYhCgUgc/VxEEfy6j9liCaPTBYzVy6g5ADo88IwL2PHAW9Dw0ajWUbYMnN4O5HJJkFqExngZjjBY7Fs4LtuLJYsHkUh4sCwb3OKwLAuObcN1YylyXReO44BSCqXwQDbb8Zf//JVvXZhKJL/a09tHSuUyinPFqUwm80elUumBb33j6ufsQONk/E7kaWqz8sQ/2i7rhJmf6okKFcBKAsoHGx9D6oEQQc9GqBR3iWiMBIceRTh7AHbvcjipHnBOwDmFZXHYEYewLUR2DJCUDhIJD9lcFkNDg6jX6pidLWKmVESl5KNhfITcwHcIjAKqfgOhxzBXa6CxpwDL4vA4R7Z7GN1L+5FyU7A5B+MMlmXFn+nEZzwqYUCIhtYKjFubgrD+IaP1oGVZpFatoVatAcAdZ5+1edvhsfHnbc9jZ1/47oQnxi9PJ6zNnDPMT/ZoCACNp8fRKSQYFGgUoZZLQfakm/Uog9pchGCmBNdqwM3kwJ0ELE7BOQfnLH5k8SNrPloWh+e5yOU60NPdBW4IXE1w/NAwVnf0Il8HajNzmParKO+dRP1gAVHChuhO46CsYT+rI8wy9HhpdNpJ2I4Nx3HguvHp2DFgFmcQUiLhOQiCYNmunQeGObcSYRSh0WjUEonE5Tfd/B87vvqVL+OKK6547rwRD8bXE6Y3U0bbubxWBTM5kEPttAHsu28P+jWFUAbVcgO2ASg1KIznsePui0CdNLqW7sWKk7ejZ+0I7FQPLFtCSQtCSEihYjUTcZ+0EDIeYYgkJiemsOU3dyMMIxx3/CqcfuZGDC8ZgoFBfc8T2AcC0t8JFSlYhiLfmYGQCo9WJnGINPCm9HKcnBiEZXPYtgXHtsAtBkIouEURBAa2TREJ9IAIFKaqcFwPxuC+5SMj93R3db5gcyfXYe14eLq3lXMxRjeHUeJpwdSKRRBdaex87ACKlQiZoRy6TGwMy8UEStOLwJmFiX2nYOKgizODu9C7diW8vuVQ3MCy4uE5R9oQkYgHcIWEEAIBi+AlPDiODWMM0uk0LG7BydpYs2olHG7h/vJhPNmpER0pw5+cQ5j2kOvNgROG2aCB68OdWJrtxopkFtxi4Faz/kbQrsHZNoc/4+PwoUMoztWR7+q+b/Hiocs//KFLysYYXPaZTz8/QEoEWe2AtWY9I2hMpCSkL9AVMHjg8HqycF9/IjJSt3uYjQayndPg2SlgdgBcaEzsXIHdfQfh2A9BRT4yS46HZdnt4RZpW5Cy6eKFhG1HGB4ewjvf/UdoNHz0LeqB1hqOY4PSDCzGUD6gUUiVECxxEEyXoQ5Mw2SScHJp2ACma1XcP3MAG/qHQHicRwKJp6qFkKCUglsce/YcQLXSgOt6wnOcf73rjtsfemY/5HMCZIgVSBkarTUYgIfdEv5jrYZVE1h6gOCUOQ9rrAwYJyCMNme6AA2Czu4GOpfeh0NTFwMqARU6qFUZlJIo7X8CRkToWHEyLIvDGAPOeXsYWCkF17XhOBZSyQR0c0CvUqkjlfLArbjrrHsijU5TQ9ThogiClF9B/lAdJUJguw5YpPBE4TBCo5C2HFAat8FQSlCv+7BtDhFJPPnELhhDwBg70D/Qf9/g4AB+//uHXzx3ncjkD0b18ZpUKs8oxeGwigZPwe1MYJcOMRfU0R066OXe/HdENEMBRinWn7QLMgxx8KkT4XZG6Fv+OIyhIDCoju0CY0B2ZCMos8BYXM7RzcHgeEaVgjPepqxhJJDJJGHZHFop9HTkkJ44gkkuAUrgJF2sVGmMFgT2JX0oAhTCIsphHbl0qtlxQ0EZQRgKZLIJTExOYf++QyCEYWCwR/zF+98ROY6HK6+88sUBksTeISM56gdR3rFdrK15ePDhUagNS1CxIoiEj6mGh17tzc/Ct2YBDeC6wMYzn8aKdfvAbYKOTPMbFUw8lFsb3wtKGTIjJ4NQ3uyJbk5ICx0b6dvuQTKVwGvP2wzGKBzHhm1zJFMeurty6D+SwK65AhQx6KIu0m4SGxMuvGgODzQK0I6Ncr0OdM33HrUSbo7jYMeO3aiU6+C2i42nHL/U96vrCtNjL2lwgzo968ZDoZ+o1nwobbAu2YWLDqdQ27IT9ekKDJFwQSGkPvrLE5qNUHFHK0cup5HPxpPLUggkUuMYXL8Lma7DaEzsRvnAEzCt0e1m8U8qhS2/vQe//c1duPnG2/DEY0+BM96cIIy/MaEjl8FIpgu8HMI0Iowku5Dr7EA6ncLm7mFcmBuG6ytIIaB1nBJgjMIPQlgWRxQJPPH4TmhD0NWdw8jI4mS93jixXpt+zsbRZ0nQ2D1fj+zc0jtLVf/dnbmU5boc5w+uwNJiDvftmEanl0Qf9yCVAmisVtBmwVfTxHdMKUAqDZsyGFFGpvsQ0osJkplDqExEmB5VAHfQsWQtWsNxlFBksxlQSpFMJZDv7JgfkKPxSHcqncRATw+On8xDOASrBgaRTCagtUIUCZydW4UzRlai001BSAWXMQCx/UknPRwZn8TY4UlYlo3Vq5Yhk0mjXKmv68qfZG177PfiRQFKDpwIY/BgrXZkf7UeLLOthGKcYnVnN5bLLshIodVNp6SOv9omnrsGmt/YwhiNpaM5Ak4IRVDWMCYJ2FVkBnahUU+iuPdxONkueLleEEJgWRTnnf8a5DtzyOWyOG7dShSLVQgh4boWOOdIeB5yuSzZPLQSbsJFNpVCwnON0hq+H4AxiiVdnXAsC0orAgJEkUAYROjMZ7Br1z4EvoDreWbVqmFQSrkxZqBcnkgxRosvBtD/BbjesHyaDM9+AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDA0OjI2OjEzKzAwOjAwkxIo2gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwNDoyNjoxMyswMDowMOJPkGYAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiManArtistMediumSkinTone.displayName = 'EmojiManArtistMediumSkinTone'
EmojiManArtistMediumSkinTone.defaultProps = {}

export default EmojiManArtistMediumSkinTone
