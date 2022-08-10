import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Man = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFhoWOUD+PgAAAAZiS0dEAP8A/wD/oL2nkwAAHUBJREFUeNrNnHmwJXd13z/n9+vlbm9/b3bNaEYzGklIAgGWMSQOYTGrcCJXyiEW2GXWxDFFyrETJ3GCqdiObapMxWazY2IncYxxCrM4GCizSggQEkLrSGgdzT5vf++u3b/f7+SP7ru8NyNp5iEpnqpb3fe+vj39+/ZZvuecb1/hOfjnbn8FLH8PKjtSNJvW4LcDl4LuQmWXohOomuJoVcCr0lHVJeAMcFzhGNgFsdUVVReqr3jkubh05FkD5eZDINYQ8jnUXYXqixFzHSY5iKnuwtQm1FRiTBKLqRg1FcCADHBS9R2vbj3Ht7rqWgvqWsc1dB9Ew/c16J0gD5uouqw+09prjv/dB8h/8wrUtRGTjqm6F4HegMQvJ5o6JOnOBtVLhdplSLoLogkwFTAxSAxiN12OQnBo6IJvo/kK2j1JaD1KaB8N2j29pNnSD4Jr3Yy6v1XsnTaZXAq+o2OvefzvFkDHvnCYXXWHYscF92qQnyWafBm1g9Myfh3Ur4ZkG9haCYQiqpvOouim96Obwa568B1CtkRoHyWsH8Gv3r0WWkfvUt/5FCKfwVQeR51OvP74/3+A/C2HQUxMyH8cwnuIJl4h4y9uyPQroXagAGUQWvRcAEbf63ng0tFjFVUdXLYioB7tLeCWb8cv3up98wdHcK0/wdg/C9nqaZPOMPG6o889QP6Ww0AAZA5178FU3yljL9jG7OuQ+hVgU9BQLk7PWWjxmW4Ca3icnteKdARHHX69XEbIV/HL38Od/VIeWo9+U4P7LxB/GdRNvvHYcw3QIYBDEH5bKntvYPYNkUz+GNhG4QZ9EAZAhE37YQS0/n4YWJtuBmZkq+cxLu2/USX0zuDOfhW3cOtZdeu/i0QfAW1NvvH4cwNQuPUwKFeA/wi1K18uu34OqvvLhQYQLbYaAD+yH0rwwibrGn1/rqUMEdENwOjIMgoPVpRQBHffxS3fSX72K13y1Y8i5v3A8sWCdNEAuW8cRJVpY/m41C79Sdn9LqjsK4BACwDUg7oSHDf8DA9hZH8QlzYBpKOWpxus4xyAtIxFSHlIQINDQ4b6Dn7tCG7pthzX+RAivwY0Lwak6GK5jY2jKOv0/qmqviaqHS6yU2iXi3SgebndvO+GwA1ADCOuFzbFqiFA0g/OWvxdStCkbzlIGbApj/PgM/BdTNTA1vfHfv2hd6P5GZAPrPz1HnehIF2QBflbr4aQAYxDeG8I4Rfzbj6bzF6HveStIJUSjBw0g1BuNYcwAhSj4Iy6WtiU5fQcK6IESBkCVWApKIagUoIDqr6wIt9DfRd1bUL7BKE3vwC8DfgswIWAdGEWVIBTRcN/JJ74RVvZmTj/KN2Fe6lWv4yZ/JGS2GWgPQi9Epx8xIry0q2eDJywIc6ck+1KC5M+UFrcXVVB1GAQQlCCKhpC4cohA5+hoQc2AZvO4nu/CtwJHHtGLMh9/TKMFVT1rcRTH5aZV9alsge3+C3Wj32DKG1Q2/Vj2MbeolQIvdJ6ssJ6yIuLxZXB2G8CZZOlbOZKuiku9TNeyYf62KkW+yEEQgioL61I+/EoLywqbwUIvwb8FqBPZ0VPb0HGEILfJbbyC9K4ui7xNPh1bG03xDOszJ+k27mFsbm9JGPbMHG1XLg7DzC6Me5sAObcdL7hbxsowfAzGTE0giJBEe8J3qP9hBCK2CcE1FhDCDcBnwQe/qFcLPvaQYwRQpDXk8xdRzwF+TzgEc2x6STN9RPMn11ifDlncvYUjfEx4loDGydgZMQSwnmY85PEn/O52PmA0z6floFFiiqiAQkODb5wt5JGqIZ+QD8s6BsVPrjy13ueMhZFT2M8+LzXMHHtHxFNxLhVlBwp07kRjwspyys5C4ttaic7TM+uMjOb0hivklQr2CTGRFFRg4kBiYoClQhkuLAiXvlhnGKEOPb3R91QNwZzESAETElCgxTn0VACowHVQaliFL1B4E+Ala27mIAYezkSvwgUzRZAHUrASADfJneQZdDrwfJSl1MnYWysw/TMOjOzMRNTKdVaQpzG2NgiNkaiBLFVMGlRyZsK2HoZEjdxqdAbUgPyEb4UNsYnVUQUJCAmYEIglCS1AGm0jBFE5fmKXgXcuiWA8m8cKk9mrgeZwzULHy79Wg34vEPWzUjjnDSGpRyaTc/qqufESSFNO0xOGGbnYqZnYsYnYqo1S5xYothiowhjLWJsYWEmKvtBMmI1ozGrBKN/TGE2G8oakYAQMKYErARSR7KfFulkWoQfVbh1+XOXMHXDsYsDqCRjVuCFqFp8G9Uy+GkAK7gsI888UzOGNIGxscDqqmF5ObC84llYC5w5ozz8cI9qVZiejpjbFjM7FzM1HTM+HlNtVIgqEURxUceZ6sjiS9fsN9LElNZS0obQgdAt6UUXfA5SgKTe450nyzxZL5D1PN4pYiCtGJLEiLXyYhFJVDXbkouJah0xh1EF3yWEgHcOVcVg6XYcALOzCXEM9UZgYiqwfUeg2fQsLBSvlTXPwmLg9FmH/UGHNDWMjRkmJyOmp2OmZlImplLGpyeoTcwRVcex6QQmqWNsgogpeVavAEID6jzqPD5zuG6bXrtFt92juZ6zvuZYXXE0m55u1xO8Uq0Ik5OWue0xaZr0l3iFwgQi8xcNUPAK6AzC7qLO8njncM4jAsEEmmsZUQSN8QhjhLSiOBfI88DEZGD7DiXLlHbbs7oSmF9wLC461luBM/OO4ydzNLRBIIqEauUEtaohSSxxGpEkEXFiiCIpEqIMyw7VgHdKrxfodT3dnuKcFvywjE3OQbsduPSSmMsvrzMxFZGmBmsH3rodZTuwBYCCAjqlEhqEHFUl+EDwAWMF72B1NaNSKRYkRhCR8jjFOU+eBbwLjI9btm2Dyw4WgHW7gU4n0GwGmq1As+Xp9RTnwDnFeyVrZayvZ4gUbMEYsFawkWCNEEeQJMJYQ5ieikkSIYmFqEyO1gjtTuD273WYmYvYuTvZFNMVVWoiOr2lIB1CABiDkKooGhTvA8Erxlg67ZyVpYwDB+tYK4gxWGuK0NEHygWcD/g8kLsiBqQVpTFWRMpQMuIwYMNasuFiP/RjrxRhW/qhqZ/vdJhtz7N4xnOlXu/R6xagi5S1m/QzmlRAxrYEUMEXSFQ1Ui3rHB8IqoQAy4s9cqdMThe3zJQWhAEjBgRsZInLqw8+lAAHfP9cXsvSoLDY/sI2NM0GCJR9Rn3ygkk283GFsTHLetOTZ0qSSNmrLKv/Yv3pFgEquGJxN0MBULkI75T5sxlT0zH1RoSUACFDcIpENEzHNgI7cnLVwiqL/k0JWCj3deSYPndRQc5p7I9gJLLx5paWt+eSlHvvbtHpeJIkGukfDZA3WwMoFI2XohgsFlPEJeh1POtrjkNXNDCmBKd/kYO7KSPpmjJNy4abLpvviIYNAG60pBF/6ltSv4E2UpspI9eqyr59Fe67p8Xqimd8Iiq/poPidsu1WCjugtOgPigDdxARVlczktQwM5sgUrpWf9tfeD9gDAKHnNtAENnkJmZjEVqCcm7LYdgfKu8mBB24YJCASAHy3LaEbdsTFhZydu9JiurGQxDFmJJZPgVQ5qksSIP2VPEaFB/KmOEDa6uOHTtTktSUAI1YjwDWFC/TD7blis1m0M4XTEaPMee+ynOEoiIs3lsLgwTBhmtKU8vhwzWazUC3GwrLKY0vBFyxRt1yDOoF1dz7Mv4A3U7AiLBtezriVjLwoixTlpe6LCz0WF3K6bQdAlRrlsmZlEv2j9MYT7c0SWmu9Tj22Boriz06bY8C1VrExHTM7GzK1HRMkpjC5cpCWLWIQw//oMXCfM6u3QYDqATUSx6UzhbTvBYABXVFgC5Aa7c8M3MJSVoE4P6dCkG5/6517rxjjfmzPbzTwc0t4lRxsw8ebvIPX38JcRKVdZUM48o51jT8LM8ct37lJA8/2CKUVCAExfuCLthImNuWct2LxrniykaZNIrvV6uGS/ZWOH2yy8xcTJqYwiADXYH1p+xoPGkfurCade+1E0oLaq078jwwNh6VxJBBin/gyDqf/IszHDnSYn3d471iDMSxkKZCFBWm3Vx3eK+bYtD5TFzPuZ7mukMpWHeaCnFcAO+9sr7mOXKkxSf/4gwPHFnHWNngarv3JICwvOhwvgRYtauqaxp0a0RRRFZD0EXv9WC3G1hdyalUbcF5YLBFIM+UOBLGGhF7dqfs3F1hZi6l1oiwVvAenAtMTqWklfhcocLTdITTSszLXrmTleUeUVSUC94r7aZjcb7HqRNdjp/o0e0qeaYjPS3Bl1Y0NR2xtOipVDzjExYjLCiyqFtK8x7EalsDR12uP9ppe4wVksSMJCUpWTM879px5nZWiGLD9EyFpBpvTPGjOIQtjIBF2L5njO17xkYY4ZAWZJ2cpcUuLg9smyvLikHULoCanIzodh3N9UCSCsbIE8ZKM/gtWJAPwtJiuzc+UXkgd6Fwl8hgrZw3SyeJZc++BiC4LLCykNFcy8nzQK2RMDEVU6lGm2LLhc4ty+ND8d1ux7G2ktNez4gSQ2MspjFm2bG7XsQ15wfcSAY3EuJEqFQsNiqSTRybez7+x6e7b3/H9osHaM+bT/HYn27De70NaFkj9Z4LbCChmycgPc/iotLsTbG44jh6dJ5Op8eenTGzMzETjS47d0ckFbvJq54sSG98m/Ucp08G1poVzpzNOHG6Q7WSsm/vBFMTlkZllbk5Q2TPX4KICN4HqjWLMbquktz6z27awb6bTl8cQLr+Cdxt/45o6sDkypmTexZOLXSc9/UsH9ZKQzJYbHpdz6mFKZKdL+H+ex7nztsf5KEnHN+6f525yS43vPwAb3zFdXQff5D9+7OC9j9p1pJz/pb1HI8fTckqV/K1e+/nzFnPzXdlnFpqcuX+jLfceB3Xv+DFPHHyu+yaW6VSMWVhOsLupWjHBC9UGlFn2+65vbXZXVPNL969XP+JryFy8MKy2Or3/pj16Ip6a+nE+2PT/r0kkRmXK1kvDIcTI+vJ88CZ5Rlmr72JB491+OjHv8E/+bm38b7f+BVmx2N+cCLj9//8Pv7qy49Rv+wG5ufTcsJwgQ6mgbPzCY3L3sQnv/gQDx/v8Ku/83u8/S2vZrWVc8vdq7zvg1/joRMZ217488yvzZHn4bx5wHvFu0ASM2vC8gd7K8feJzv/cb19529eeJr3648R1h7cn3VbN0KoxrER5wJZpvgwMqIprWd1zVDb+xqi2gT/639/mYdO5Tx4773c/u3bWG46jBGqkfDtr9zBypqHqZfQabsLC0ECnZbDTL2UhdWcv/z8XRw72+Ke797C9+95hEDRUAudnL/5P1/CVhrU97+e1VVzjtuqgncB5wI2EmNEq66zfmN26uv788U7LtzFXNZGldQYkjiKMFbIskCvF3Buo3Yn+ICP9zG79xqOP/oA9z2yyFJLee/7/hIFOnmR9RILk5Jx9MgRLn3TG/GP31aOo58+PjvqTOy7nps/9VmWm4Fb7prnrnf9Pq1e0TEICtNV6Jw5y+KJ4+y87HnMn9yD90fLmVlRxDqnZFkgz4UoKhi3y7LE+pVE5CKIosQ1JKq2vZd28IqxgnNFJ9C50bFU0QVMJy/Fpg181iY4jxGhnRs6rgAnKIylcOksJCZQnbwUW5m5wHwfsJUZqpN7QUN5wcJa1xBGitudE7BzkmKgmdSIxy/B5RvlMs5p0eX0ShSboj0bTDuYWjvY+oUDZOMpbDyxgHLcuYC1gqqQ9fo9oWGxJsYQ16cBYefefbzoymnqJqcRFzN0H2AsUV5/nXDFZSn7r7wSm05iq9OgF5bh49osJpnkmudfxSXThvHIkxjFl+e/fJvyE9cZDh3eztSOvaBC0pjBGLOh6i8sSBEpmL3zAeBknI4vRsnERaR5t0JSGV/JW/KA9/5lUWwxVsjLfnG/HaKANYoxq+AzqtP7eetNr+P4I/+dqu8Skpi0ZnnDy1IOzAWachV7n/8qICJpbIeVe5+ETeuGHB3Xt4NGXH7dK/jpN36JL33mO0yPWToSsW93xI0vr9Bdzdlz/WupTe0G36ViVzGWgWZIdQhQkhqMBZcHwB4R8St59/wDVnu+D3/lZ+ZYeuK+ENcah1F9tS1d7OzZnKnJmOmZiCiyRFFRdhg3D/kiIlV2H7yWS3dWaZ89wc5Kh+dfati9rUI8+0Je8Kb3Up/aCa37kdWbwa0+BVkcba55iOcwtT1cdc1VVMMZWDvDZbOBaw/E1BuTbL/2DRx+6WsxvSfQ+S9gmt8vddZFane5p9n0dDqBSw9UaTQszimI+cTqqQdvrk5s43f+bOHC5C9L//cqss4qiHmTBveJKJJqlgVOHe/RGLfMzCZUqhFpJcZEZtBRJGog1X1Q38/Kcpfjj52g2w1s37WdHfsPENsAnceg8xC4tSchiJyfH0XjUD0E1f14Is4+8Sinj50hjg279+1gcrqCdB5H20fBNQeViHeeXjen23G0W45W0zM5HRPHBue0Y2z806rhc5XxOSZffeeF64POfmY/wLUu6/6NEXaFoKyt5KQVS70RkVYslWqMjWzh64Oyq2yt2hSiajkNDeA6QwnMBlX9hQDEcGaPFN/ffG7fK/o/IQyF+qEYO/U6Gd2up9V0dLueicm40DwFTsbVxutUuXvuhocuslhFETEnBI6r6i60T9WHzXsNOugfD5vmZYHos2Ik3C9UBwstA6dsVklEBajIiGBhs7DTDIHK14cFq7KppTuU6vU7mkXvSAd6Ig2KiDkOnOApSOuTd/R9wIhdVbh/tCNZjH90OKo553kBPUfec15KqyPiKRGIxqB6EGoHC3d6SsH5yDkVzvMfDqjIYLxUvvqt4VIFc39lcnbVRNHFAyQYOs0Vh8p3NJQEethIK8c0/dHNyGRhw4L6d1ifpDr34PLi7/EM1C4vXslccYjLwfuneHQhbJqKjICjw+nG6AvpDybxYuQ7q0886CSJLx6gbTc+jrUxIuabCif6AsngyzZnoGjkh6HqdMOFqp5npKMbGk5Zp0u33UW9K3WNboPIM89ysk63lPJtAkb1PNYzOhcbupaGgi95r6XYTAFOGGu/GdXqTL/q3i0qzGxMnKQPdFprn/ZO3+NdMdQbWtHQgqQvwRXpzxs29ht0dJ4jBOdYWWzj8sDUrFLhMSRfKxpw2TKu06K50kFVmUwijEnOtc5N1jMYGPZ1QKWl+1AMOwtjDDhnSKz9dGVs7IFeq711jeKOnzrKsT/fmYu1H8x6bjx3esgYudp7neibrA8BE8xg7i0DDRfD+DIyZegDFkJgaSHj2BNdtm3PmN3WpVZfHrRO1lZzlhZzZmdjxqcDJhqJRyKbLHYoQu+TwoHYorxO5wKKWQ2Be/NMH0xS88HF4/P5pW85/cOpXC958ylu++2xxyo1+y6b1Brqsj/0LvyUd2YQ+DQqR8Pan3xLCVIoxU+ysQWpihEhSQ2PPNLjzrs6TE5YGg1DZIUsU5rNoov54y+fKL92nkb/CDiDONjPXGXWCn3rcUqU1L9YnZh+d2geby0tdLJrfmHx6UW+F9KPuf7frBNX6ll79eySoN8uGvAjwdqHDcKDoeJ9o845+IDPHa6XkfdyJqdirn/JGJdcktDtKSdO5hx9ImNp2dMYM1x9bZXJqYheJyfv9vC5I/hwjnZ6NElstJ6iMC10Q4ox+q0nvvn95ca+l1wQOBf1rEbnxAnqczMAt2nQZefClHcGHxeymGLMAqgZ6ISKbSDvOrzzWCMlsRQktlTrCQcOCjt2JKyu5LSaHh+gkhrGJy1j4zGVakwUlcM+7/FZXszBrCGKzVBHMDLTL9yqAMd7Jc8DiizZKNyx8wW72P7Kz11wP/yCAXrh++DeDwPIfSHovS7Xv++cEm/gGIoRHbRjvQs013uoD6SVCBtHGGuQUuJViWPSakp9zDM95we8yohgrcFGBhPZAQnVEDBlb7rV7iHGUG+kg1KnAGdoOcErLtd+2+O+yHKf30BqeWZcbJjVhJNnWosKn3deNc+L7pzva35KXtQnlPOnW3Sa2WDO5l1f9R7ACBJFmEpKPFajMjlGbXqM+vQ41akxkvE6tlZFkriY85fPoHnv8b5gz+1mxtnT7QHVGPCd0nL6DTLvVY2Rz3/hMyeW0vSiHnC6+OfF7v7QDGLk6uDDZ5NE9jfGIiqVQtqbJBZjDVFkWFnOOfrIGpPThdWUAgxCKEqRgWSvTwp08xxsZFtqiKCY1haWWtyExfmM/YfGmZpOyPMiHua5J+sVAs71NYf3+litlrzJe3/v5W+bv6j1RhcLUJRY4jR+oL3a+bRz+q/yLBDHBusDIRjEFASt1cr59nfbNNthQNL6I7Uzq7DWHUrnlHPpjYzI7lRhogI7JkpVtBbWbA3Uq8Lczhrjk/GG7OV9aT1OiSLzVwcOjh05c6p98QPLrags7vqv04hwraKfShJzWb0RUa1ZkrQQiBsj9LqOhx5qM382LwSXqSFNhDQR7j6qfOQLOY+cCoPx8FMIKDi0y/Du18Zcs1foZUqvp/Syov07ty3m0KE6acUWvZ880Os5uqXIyzl9pFqNbnR5uPvKdy9c9FqjrQBkrFCpmHvaLfexLAu/aTo+spGMqM2EJLU87+qxAVcUkaKgU+WqawzXXev5xFfafPV7GU+c9XTzER4pUIlhx5zlVS9Oeetr6xzaY3F5oZE0pShh5AnxAeXInSfLAp2Ox+XB2cj84cGf3H/Pya+e2JLkZstPPd/z4RlEmHO5/g9j9LX1ekStUcSjKC6aaMaagX6xn/rzzBEChY5HDCfmPXc9lPPA0ZzlZtH/nhozHNhpufaymL07IyxKlvtCm1XShL52sZ/SC+lxoNfxtFqOdtOjyhdrtegtBJ0/+I755xagR/90B0uLHSrV6KUuD//TWjlQb0TU6pa0YgvuYobBuC9FCUFxuce5UDbPi7mWSKFIk1JzFHwYiNI1FJOVKDZYazeQQx0pJbKep90qGmPe82iSmLd0u+7W6Zkq+246taV1mq0CdOBnT1OtRjzvxolbReTXvdeVdsvRaXuyrsflYdhcC0MCJyJEcZH1AHo9Vz4+0KW51mN9rcfaSpf1tR7dTvHYg41MGdvMxlqrDMguL8DptAtwnNOVyMr7r3jnG26dmEi3DM4PZUH9f/d/bA4bm6TXzn8pBP0PcSy1eiOiUi3SfhSZAcvuW9NoW6J4vDQMAvLgwkyhqO8LoUa/M6jURyyn2ynAyXPtWCv/eXI6+UC347NDPz//Q63vGflxkyMfnSGKTK3d8f9WVX85SUyl72pJYgYxSUQGyrSLYbOjwtIw6lZ54YLdTuFaWRa6xsgH0qr9LedC+3nvWvyh1/aM/TzOPR+axlqp5U7/Naq/HMemUa3Z8tEjWzyQYkdVsYWVbBaBn9M0REeshpFnQQJZ5ul1A+2WJ89D0xj5QJqY3/U+tK/650vPyLqe0d8POvKxWYyRSi/zb9eg/z6ysqNSsyXTLoKxteYcKxr2+0f7zLrRpUq38j7gciXLy6d82h7n9bQY+Y1aPf5vwWv38redfcbW9Iz/AtUDfzRLkhrbavrXBK+/bi0vSitG0nQjSEWGG17COUY08tsd/UDvy+KzD06vGzQE7hDhP9XH7BezXvBXvnPxGV2PeaYBuuIdC4SAv+ZfLH7eRubNIfAH3U5YbLeKwV234+l2Hb2eI+t58tzjXJH1XClNceXTQf2aql9XdTq+GP6tO3odv6jKH1hr3vwzv7T0+awtzzg4z4oFbSST08RRlDrn/54GfYcYXmWtzESxIYqFyBZZymyIR6NNL4ap3BV9He90UZW/BfmjOJZbXOZ7V//L5WdtDc8qQABnPn2QU8cXieOo5p1/IcqbRPgHIhwyRhrGSGzKh4JsJJiy3+zKWKOKQ1lX5SFFv27EfNbG5g7nQmf7tjqzNx59Vq//WQdo9N99H5sDwagP2zXo1UG5XpAfEeEy0HGRgZjCKdIU4VHgdlH5tqD3WrGnEQ2H3z3/nF3z/wMR1iLt5mjkegAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOFQyMjoyNjoxNiswMDowMC7JjZwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjhUMjI6MjY6MTYrMDA6MDBflDUgAAAAAElFTkSuQmCC"
      />
    </figure>
  )
})

Man.displayName = 'Man'
Man.defaultProps = {}

export default Man
