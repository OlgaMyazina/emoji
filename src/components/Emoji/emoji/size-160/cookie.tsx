import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCookie = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-cookie"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFBkmNzBJPwAAAAZiS0dEAP8A/wD/oL2nkwAAIjZJREFUeNrtvHuwZVld5/n5rbX23ud1H5k3n1WZ1IsSKaoKLYQWpYXuCYcQwwjCGh0aFRvbjug2+kU4qAM26PQ43baPQFoZO3pGbccHowKjtqKoodKCUgiFQFdRVEE9MiuzKl/3ce45Z++91vr95o+17026pVu0bRsNdkRGnsg89569f/v3+j72gc8dnzs+d3zu+NzxWXvIX+SHXb7/K5ltfiU5bQcn60eEsIX444hbB04i7ijia0w9mtWEuag9SeqeNkvnTfunJ3e8drX7wVez+byf+KsRoCtPvIF3nn0T9z78XWtCdZu4+gsQ/6WIv1twpxB/BHEV4ipDnJmJAGYKYGiOpK6FfNFMP4bGD6PxA+T+fpZXnrTmeJ7e8x1/+QLUPvJDWHCB5G4TV78U3FeIuufiwnHwAecAByLX/zbDLIOBmYE4wEAzWAZTsIzlbkXuP4Gm3zCN75C0+IBtfMFSrvwukxf+0GdvgD5wHp6TfhyVrnZafSEpvRLlZUi4RXztzSgXbVYufDgFsyFjzECknJQ4DDBVxDnECRiIOEwT5B7ThKX2Chp/B0s/Kxp/29/zndv7P/Uctr7hgc+uAK0e/H5wjMQ1z6da/zqyfJX1qxtUDVNwDsQFzAxLEQPE+xIcXEmkg5OSIYPMECeI8+V1qMF50ASqJUA5gSYs9wsRfS+WfkKEX5Xm6E4+/8vMvvzf/fcNUPfA94HtCX7r2WbuH+Dqe6VaOwGCpR6LLaQVcbmDiQcJqIGvGnw1whDUwHkPApYSploCKIILfgiaIC4Mn2pDAHMpS02gGXEOLC0x/S00/jC6fDdSt5On34C87C84QNe+B6Zf/WYstRNx4X82qV9ruM83RTQlNEe0a8ntLrlb4kLJoJgdEhpGsw1wofQf59GcUc04JzhxGIKIQ0RK2TlBvAM1NCc0pxJAJ0Au7zMwDOc9lvtr5O4XLKU37T8VHpzd4Fl7wev/YgJktkP7wX+FjCY3YvLtJvWrIczaxR7zS0+yc+E8Vx4/R1zuEwLMjqxx8pYzTDa2kHqG1FN8qDEcWa2chtlhgMR5xHmcr4YA2NCjSj8aWhWmGTSWxq0ZU8NVDa6qh8aewPTDZva6lOpfc5LzkS99w5/qWsOfNjg7734tIpusPvyDL0Dq/0NNXqLZfDe/zOXHHuITH/gIDz/8NHstbB1Z48gU/Ciy3Jszmq4xWqtxzZjY9+TUY1YmmGpCUFIqAXM+EOoROEFzwnIP2BC4AOJQTeS+JbZL0EROmRQzq8WKUDdM1tcYTyd3h7r+N81I/zfL/Y/N73tjv/aC7/5vE6Ddd38H07/+zezdt/6SnHmz8+Gu1Lcsr13k0icf5rEHPslHP3aJ/eYUd/4PX8bZW29jce0Slz72O4x39pkdXVHFHtcoImWkxxhJMZFjh3MO5z0C+BAwzTjhsIxME5oEdX6Y/pHc96z295hf3WF/d8li3tP1CSyxdfoItzznWYQqnNaY/3nu+412f+/Nl379H65OvPRffUbX7D/jnvPu1zM+eSerh3/vxfjxW8Q3d1qOrLaf4vLjj/DIHz3CA48u2fy85/HCL38pt995N5oi7WrB/iKyVi1Y35ziqmYY65kcMzEmckqYRiwnpLRtTDOp79AUsVz2oBwjqIIqqe9o57usdvdol0uuPHWNx88vWDQ3oLPT7PeBnWt7OGtpao+ZjlR5oTjfxpjf/61f/8X5B3/6vj+fAG2/558hVUNabj+favKjJvWdqY8sd57i2vnHOffwEzx6IXLkmXdz5uZnMJqM6ZZLLl94gu3Ll+gW+xzf6JmtNYR6jAGaFc3lYkfjitF4RKgaREBQcoykvgRHh5EuIuX10Iv6ZUu3atnbXvDIY7tsu5Nsnr6R8do6k81jWLPJIx8/x/6VC0ynI6pmVLtQPV+V8+9863s+/C9e+xW85e33/9eXWKhHaFw+i3r9+6Ua3ZVTpp1vc+38OZ5+9BxPXlxRn7qNtc11nnz8PA989CGc8wTnUDUqW+K94EOFaSZ3HdkcZgJOsKyIa2jGE8RNyf2K2K5ol0u6doVgOCeEEIbSUzQbfRfpusTVq/uc2xFufOZR6qbB+xoRmMxmzE7cykce/BCT8TnuWJ+RXdgU59/4P977xZ+oa95z/898O1/4yu/9swfoyru/i3a+faqaHvl+F5ovwyB1S1b7Oyznc/bnLfu2xsmtLUbjEft+n499/HEuXt3j5LGjnNza4NhU8W4EJohA3dSYOLpVT4o9fdICt9gHDO8doWmYrs8Yzzbol3t07ZK+XWHDzuTEk9VIUdnZ75l3gncO00zsVvRtS4yRvu2o1k+y13XEdoVvxlRNcyvody2X3as2J4uLf+YMuvSb307cvzaq17a+DRdeZibk2ELuqCvPeDqGZkRrFfu7+yAwnoy45exp5queRduybEeEDcdsY0yoKlQNl1LZMSxSBQFzZcO2UkamkLu2TC1xNI2nHm2QU0IzqCo5KZIAFzDxtH3LztVt2sWCxbLl2s4e+8uWmI2UEsfWZ6U0NWE54Jz/m8HLa55+8tJ3PvBTr+7v+Pof/9MF6PK7XgO7T0o4csOrEfd3EedybMn9EkypRzWzjTWsHvH09g7nL+/Rp0wIgbqq2NpcK3jLMseOBOoqIM7jqwrVAki9CEiBFIaAqxBxaM7klOhXC/p2SVVVVKMxoR5RNQ2qYPSECtaPrnPs5JLFR65x34cfYrFsWfWJNipdTExmMxxwz7PG+KqmazsqHKGqnYh803Rt9Nujhnd+4P/6Bp73zf/PZxagy7/+rWQiMjv2YjFeZ2azHFs09WU5szJtfNUwGo94/MIlHnz8KruLjtm4ZnNjjeMbU9anI45vVpw9sYGII+eMxUjOhuaDpZChNAzBYWRS35fppZkQPCKQY8RUcEkx5/FVYFLXqMLJU1uMm8d470ceo+0jo9GYqqrIORPNcebkJjffsEHO4LyAZjQr4sNWVVf/ZDFf3Nd4ufrpYuE+3T8uFzt088XpGNN3pqRnUt/RL3bI/RLLPTogaUW48RmnOXP2KOd3W/bbzN6y5cLlbT7+xNNcunqVu29tOLpRoTnSr5a0iwV929K1Ld1qSY79cPEZQYGMQ8ESVXCE4A+Bq+ZMShEBnJR+JiIc2drkb77oWdx0wyYheGJMtG2LWObYzPPS521x9tQaBjgfyCnTtx2Gw/n6xRLql69NhA/9weU/GWo88nPfQru3cOvHRq83V70RF3x5k+KGO4dmUtci1Yhm8ziXri35pV9+L/e9/yF29paMRoFbz27ykntOccct64gmwHChKknrAt4HzDJV8Hjv8FXA+YD4GqQA3diuCoRAyvpjgviA+AoJAec8Ih7xARXP4+cu86E/epRLT1/FO8+pE0e4/bbTnL1hnaoSNBs28E7ee3w9YrXqWM13f7/vunudk4vP/3u/8CcE6K2vRnO8sxpPfwlf36JqWOoJdcCHqoBCTZgpzfoRqtEMMyNFY/fqDvOdXYJXpo0huiQO00dzxoeAuBrnwwBGwbvSh8QymgvMEJHyed4PO1MmJcXE4asRvh4donwoQQqjBsOR+ki3PwfxhCCIlaCUIWCkmOj7HsGomhGZitVinrrl/mvW1/IPX92Z8JLX/Nyn70Hv+5F7ufMVP84H/+3futcrtxhK7FYIig+enDLeC5piqeUcSe28bMGqrE+UtWaMak/uO3KuBuzk8cEfou2cEjlnnHMkM1IfafdXrPYXLPYWxK5lNKk5duYUmyeOEXzhi5wTvBOcF0yVHBOhbgjNCDEQZwRvWDBSXBFXivclYyXUaE70XUfsu1ITqmQqUtKQs73q0tP2dpH9C//ZDPrgv74XUzszWZv9cj2ZfoGqEbsVAHUzIlQBJ4amtty7qsFXdUH4uVAcljMMvUFTInUrYrcixx5Tw8xhFLawX7W0+ytib+zvrXjiwg4rN2E0WycudlmvWu66+wzHbzg+kG0U+jpUmJT26UONrxuwsmWnbknuV2i2w0xV8bjQkGKkW61QjQNrKSAVMRuL+Ty2i9XfDxX/d98HvvKN7/yPM+j33/xyprMJOeUvE3HP1uFCq7oe0LXDCWXlxzCDHDtyioU9FQYsNbxWRVMq7CqQU4EWhmImpJhY7i6IbceqFR54Ys5ychPP/eIXsb65yeUL53nq0Y/zkQef4G7n2Tp5DFVFPHhxuMoVRlIz/XKB8xWa05C5pV+Kc+RUPlMlFfDrBCeh8EsDH541YyaVwcu71r1VnC7+2BTrusSDHz1frVbdl6ecmhSHbAD8gLA19WjsSH1H6lakrsNyxiwPY1nRoc5T35cx23cFU6mSUqbdX7G/vcdiZ4/YdfRd5LEL21zJ69x0621UXmnn2wRRjp48zTW5gQ9+6CIXHrtI7NOwPBqoojEOmC6XmxV7NGdEHM5d36dyLj/nQ6Cqa0Jd4Z1HVWmHjdsHjw/VFxn6LDu4q5+aQWKRjfWw0bXdc3BCXScINS4EhHJCYhmsjPmcM85XhxwNIqBG1kxOPTIQ7rGL9KuWHBOpT/RtJMeEasaALsMnrilHzp5A+56Ljz1O3/WICFVdMd08zrXLiUcev8Z4fY3RbG0g1AYGUQ2h7Ekp9njvceJKf8lKShGk0CiGFOYyZ8y03MCYUbPS47w74YQXiOODv/LGL+crv/s3rgdosbOPqd6K2U0+ODBF1WgETAJOGFK4RcRwUois0mzDISGfUyb1EYYTWO7uk9r2QNVB1dAib5AyXLjSsZdG3Ng0rJZLuq4nxoRzjvFkhHOearrBteTobEQ1mh5yRbHvB3XEyuSrqnKeWs7dVAuuqxrMlL7ryVmv90gtgQlDS3AiDuSe7Sv7frY+zocZ9M7XvwjNCZC7Uh+3+rY/jLRDyCnhpFAOue9xKL7yIL7gpmxIKFRpSkYfjRx7Up/ICmqQ+3LRIh5x0LU9y9ZY9MJoMgVT+j7ivGPaTKiqirop/S+mzDx6dhaZU32icYWb9j4UNjJnYtuW3jcoIqoDfDErzOMgBmCKiMM7j4jgvS9wh0jfJ0S4fTprxiLsHwYo9R1m2YuEv9a3vRcRZNYgIqyWC7x3mCkORSgKQtCMr6rD6aJZyUmI6nDVCB1EBx88vqmIy5aUlJQgZiGLsn50zLO2RjzyvktcurrD+nTCeNwgzhFCwHlP10Wu7sy5urNDe/NR+r5DTAtMkXJeXVtGtw/lojUnkHKzcs64FMlDb/JO8L6sBE4cOSuqkFMupW961kxP5KTXAyTOI/iNnNLdZmX8OifYqEgsUqROnDNCKIhJULJGnNeSSQg6nIBzjhCmhNEYywkngq2VEY+rEB9oqkCg48rlK8zn23zokac4c3yT9emYqgpkNVZdpEuwM19w5ljNqeM34cUVcl8CWROrxZKcM8EXrKdaIAkoWXXAcTqoHRWokjWVqxKPmRCzkuIgN2XdUNXTiHzy51/7JSVAXZ8R7AbTfKNZIsVSxyM1QvCHMotzUI883gk5F+HPe0NRxHuayaRkjPfU4wkuNGjs0dgWHVUCSMmM1O6xf20b0Z4X3X2C+97xEB8/d5VZ42maMCisnroKHFuvedEX3sLxozPEEqpG1EiMkayK846UhzIyQ5BhnSjLZEqJENzh4DjoWdkc2Twx6dCoBTMdgR4/2JP8W7/lHvp2Qez7zw8+/O0Q/MisjGTNGfFln0gx03c9llMR6ig9J2dIWQh1TTMa4X3ZMTRlNPZFetEeS2XChKZGLB0ulsE7bjp7grtvP8vYCxWZpoJJ7Tk6C9x2YsxXfPEz+JJ7ziLak7oeRIgpEWNZHwp/nej7SE6DmIjhBLzz+GHkx2F6ChShIOUSnBKzAmJjRvG/mdvtD4XZWUIzneAWLeL8cTWdqAlumEipj6xsQVXXuOBRhf15ixMlBE8INfVkwmhWIyLErkV9VbQrLaPUOaiqAk5DXRGaihwBq2mma6S+RXA897Ypn3/mLnau7TKfL4nJ8FXFbDbmyOYYry1tG8s23fdFuzctykYs9MUBLrChHUgVSl/yBe/ltif2kXT4PhmyvyIrpURzDqoyUSu0S9i/8hSnnnGKvWt7N+B8ldVQS2UUDpGOfaQZjwojCGjsyeqofCj/XgdiHwu3PBLEDtI50/VpGLdKNqizIs4fbtnia/rlgq5dkftI7ZRTxydl/xoGQGqXdDGiCr5yxcQw4LMDECpOhikF4uUQmJpB8A7EUTc1mpV2uRrcIx4TQ0IRMFPKpJyJGfF4+m5FyHiStqy6eLQZOUKoBvgwuCqGpWu1LGJcqALVqPSJelRjwz4RQknlA+XhYBmTYVLEfoXrC/fjnCfn0i8Otm9NhV82U/KyA7qSieVWD6VkxLacl6sCLpR+WPiiogjlGEvvCBUueJwa0fIh5Al1Ta3QrrpDTGgpl1YRFVWLILuxz4SNhpAswM5HiemmyqcMODRlYuwIVTU0LuijERdL1HksR8aVMVsbM1ubMlmb4sejkraqOCkoHVVwQop6HT0fNlKGUlRyTkXOYbAAqQ3/J4eIujRNG3YWK29UQU3Kz2VDVYudRiGlTBAhAZrLXsTQuGNUfF0PZSVkHbBjifNSc3pS6jX6/UuEtFqwM72ZnPrtGAXVTHAO54S+XeFCIKujT47tlfHY1bLPrPmWo6NtTm+NOHHqGBtbm9TjMcEKJaE5Dpkon2JtEQwrGroTQqgYVER8EHIWTAcvkHNl6xs2ZRvMCSXSGU1yGECTYXINWYZzyLC140oJasqHCsqQcBgeXFUWTIZA4/bFh0uI8I0/dB9B/YSdyzsg4VHT3FdVqF1TFeqy72hXLepGLHrHw093RL/B2pF1onNcWO1w5YkneY5epqoC1WiEaiZ2kRTjQIBRmABXShWRYZkryoQTwbnCDhRQbIX5g4GzloHKACMPlMmwhaoUy8tgbsiDyCiDe01SLraawTKjQ79StcJQusJQyKGJCzCumurlg4YfvuVnHuBHvvYsmF3IWecitqWaGDVNgQBtZJUDXYb9Trnxxg1O33iaejQiVDWXL13iE4//IaPRNZrZGqOJ0C47NOXDHoYYzgsuBEytTByzYdIVPCSuOMsKJTLYXQ4AqRUTFjjEKQz0K0MQTSGrkjWDZmIq7y1B9sPvH6w0w/QysSE4iporfVANVftkjHk3ePcpaN41qOm2aDtPSbcECFVFEKEajelbpYsruljAn9NMtz9nHhOrRce55ZTJxW2OHF+UuycytB8ZbCpC7NNwp4YADePYBnXDuesl4nyxv6galgdZaPg5TToYrgQfSkvQbId9J8VIykOWDXyPOKGuKrwvvxMRvCt0rpkWkJ0L+jezc3n9pj60T10PUN925GwXgk+P1o2/2QdH7HucC7gqkLJxdXdF1kDXd+ztzdlfrnjwE+e5ul/EubpLPOPyNs576qYe7pYVkh/IsQh4qqXaZVjeNMdBj5dh6gneDhC/Q42hO0jxN3pPFcpOZQYpZtQSMRltD8tFSxczKReQ7BxUwVNXntGoJoSASJm4ZpCHXpWzklVVzR4YLR61RH09QImK5e3/aH/60P9+v3f2N5yr8LUr3C+Q1YhZ2N1vufj0Vfo+sbPoeHpvxf5iia8qdjrP7t6CtbUpYkLVVEDpNaWsBkL+U/YVhgmZYxx6UMFx5lxZ/gac6B0045pQufI7KCXVt5GUhS7CaqXMl8b5y5HL88R+Z8SUqMSYjT3HZ8KJjYojm2uMJ5MSFAM1u74DpXzNkA9n4Jve8t7rAVrqJuH+77SVNH/gvbXe51HXRXzVcMCFdTFx/2NXmF7c5hnHNqBqaPueUAUMw3uo67qUDWXCe8/1EW8H3kIOx/xBw8xawKVYABUsW3GfmeAFmrqiHo8RjJSLDIQP4EEl0WVjr8s8cS3z1GoTP6oZjYQql9UhO+GJ+S7X9q5wW1ZOOE/wARv8klkzKSVy1v9gLjwk9p8oq2/8pQ/yxr+xhWZ5X9ulh8VxlyQl6ZzRVFibTdg6MiZh7K4Se6uI6zIc2OVSyzO2ZmxszqjqZnB/DbY5KVtMqIsrI6fC4B30nmZUoxn6vkeHO4opJiXwo9ozXpuBc6QU0YOy84F6WrOKC1Ypc22pbKcJa+vjIiVRFFuGxt/WNefOr+ge28FwnNjaBF9EyZRLgFLKv7390P3bx5/7wj9OuY4mY9p843lxj7zL4C7nZCDaM0GMM0cazmzWXNyOxKxozCBCJSvuuXnC59+yxXRtRhiatEhpjqVXDmPaymJXmLwyovtYVgLnqjLlrDCNZjAaeZrZiGyGpsLxmPPDNg4pK8nAULaXCZEx62uFcSwTrvTSvo9UakzXj3J5e8HN0dMnxWMYSkyJnNIVzfabm8+8g29+y+//cQPVbz28x1fdHcyF0Z53vMwJayKCDubJphLWXM/V3RV9TFReOTYTnnfzlC+5+0ZOHt8cMA+HxnAdjJml5Eqt29BXQlM0s9hHYh9RK6xAUiOqgHhG4wqpQglEtmHTLX0xxSImdp3Sx57zl1u66JhNJmwcOUJTN2VYDOtpSokuZZIqz7xhSnDFn61mpAJ+3xVGm29xoYq//IdPfnrhsFk7AWHtD11/8edzN//HQkbE6LqW6XTC3bcdYb0xri4yk8mUG05scnRzzNr6hKquyDGSk+IHe+7BCEWKKooUi2+oQlnUUiYp9DljKeODYC6gGGKJPnl02RfvYvA4MVIXyanQLXlgArsusVh17HUFbHYxMhmPEBFSKmB70XbEVPhzTRGrAjHLYA71C+ern7Z+vnjRP3kr/Ogdnz5A//Dfvp8f/TtflMJs68d6cV+Vltu3ogUpr1Ytk+mYW55xnJsRmqZmPB4R6uYwpcX54s5QpXION1C1cWD0xDkYkDbDdCxl54ixh2i4eoy5slHHPpEzjCcNTiAOhL4MmC1reWE5M99f8PCTS5ZtRwiBrY01mrrCgNFkMgRLOTIWxk0gU7xKYoIPze+6qv4NbMQdd93xX7a/TNaPc+Tmez5y+aF//29azf8sLndC1RSOrm17fPDDBlrSVgZLrliRkkMViF1fwKIvTfc6W1eWvpyvT7ZSPtB2uQQpKM57Ro0nBI8LQt8XckwHDGeqhzSGCFTB2BwLT13bYdVlJqOKLhuTpi570KpjMl3DO8+NGyCa6HOFI1E1zY6vRv+natz9ph95759s4nzHHzzCS581ITSzh3DyBSl2z+y7DnNCHhBvWfgyImUHSLkwkAecwsE4PjCJO+eHbLLD7Ekp0/eZtk/szFuevLLkyStLnriyZL7fUjsdhL4KNwDVg4d/ihrhEBQxLbZhUWpn7Cx6YjZiiigyCIiFgzqzYTz75OAUyUZVV4Rm8rMi7ocRl37xvsc/MwNVPV5ntXfpcj1a++e6lu/cjxdujF1HM24OnuMiK4UHbosG7nwgpXzdYDC4NNzw1E6Rg0sf6vtEHxOLNnP+0pwPP7rD9sIwV/jhUVDauAIKRHDTSVFT80CTiJCsqKZeDGeZExsVX3b3KW67YZ2Pn9vhExfnLGLEmzDxjpPNgmcfmyEWiClT1Y5QTz7iXPUDpnnl68lnbgN+2+89wCtecg8bR295IsVlL969OHbLOuU44CQ3aNwygEK5LtaZDtxO0fNBDoVCww6Fw1WbOXdpn/c/souGGWdOn+T0yWNMRg1N09BqTbdaUktHXVeHDEBp/IpqCZAOTpGmcsxGFcePzLjpxIwzR2pOrQm3HQvcfrLmluMV01GNUhGCYzLbfNpXzf+SUnq394FvfNO7/nQ+6be992N81RedJtTjj4aqWkfc8/tu6VRz8dwM5NQhl2JlSz7YkA+eA8uHEKOM1JgyKRmLVvmjT14lypQzJ4+ysTZlc30NJyUDqyqwiALdnEnjhpuhpBgPS7mQbYV3SrlkqQhUlWc2qVifBo6u1ayvTanrMSmXJWEy25xXo+nrnat+xjmxb3zzb/zZjORve8/H+OoveVb01fgDPtRb4vxzc+xcMTYMtriDqAzI/WBJLLLNf5xFOlAdMSnbez0fO7fLbG2DjbUpYXi84KCBOxFMHPP5PhtjGI8bHIVYL/1NB0NEok95GOHucBs/+KyUepI1pFia82RtY9VM1v6lr5ofNk3pG3/oXf9FG7T7k3zSr/yX70BzvOrr8etmGyd+am3rTHZ+dADurtMQmocSs8NG+qlklQx/vBdCcMSc6WKiCoHJeIz3jvliQdv3Ba17DzjmfaCLhfMRKSykUMi3LibaPpO1bOerLrLqIm2faNuIqqBWlcex6JmsH7kymm68IVTN94tp96o3/fqf18MsgkOvUDXfPnZH9gT5pr0r52exm2MihKpYes0OrCc2aFB2nRMayqJMHyFIJufM1Z05RzdmqCo78wV1VRG8Z95GdhY9hjGZjvHBF8CrGeSglzFQuOV5MT+42bIKMRWNzBSqZsJouvlA1UzeUI9mv5hzTF//A7/65/cwy9ve8yC/8HsP8jV//Y6FD9Xv+tA8XY+m9xisxXZZCCs7ZNYPx7kOZaA5EVMxRKSYinsDWKw63vfxS+zOV+wuWq7u7OFE6LJxabdlZ2+PzzvpeeaNG9TBF9p0YCFNDTUdfAGDnUUhJS1m81yk5nq8zmRt63erZvItu+cu/FazMdNv+IFf+YyfcPqMn/YB+IXfe4B7v/TZSVy4vwr1R6rR9JbQTM6YIQeGKxsel7ThiZ2cE1nzoRSUchqkC6N2nt1FYp4r6tGMxXLFYrki45nvz7l5reOLbt9kPCqOWB1+fynlgS7JB5p6HsxUxdXh6wnj6dFVM1n/2VDVr9EcHzh71wv5n77rJ//bP3H49n/6CroYcSJnzOzVsV++erXYvXm1f01StwIUHxzeDe6OEBCkGMkHZtwUYvY8/vQ+H37sGpcWDnzNZDSmsp7Ts8SX3nWazY0xOA79PmqKqgziYyT1PSml4YGYQNVMqCcb1KPpY95XPyjO/0SO/fxVb/q1v/iHen/uf/1aEPFm+Tk59a/qu9VXrxa7N3XLuYvdPprbQ3q0quvrUw4OTQbLNnLu4g4XrixYRcMLrDfCrWc3OXniaKFWGSgSU1LOpfco5L4fskrwvqGZrtOM15e+an7N+fB9vq7u05z16773F//7Phb+c6/7GhAJmtPn5RTv7bvVK1f727cv97e9pR5Ey/SqiteaoTSkjDvaLrO7NydbeTSqroSto5v4qir2OVc6Qc5F9lE1MI9RFQdZXdOM11ahHt3vnP/XYP+fWt4Lfsorv+9tnz1fLPD2N/wtgq9kuZzfmlL86pz6r+3a5Z3tYneU+iVYGoxPDM12kH/QgTQvDd47GViCapiCcqiYihTjuKtGVKN1DSHseO/e50L4SXHht6xKlx01r/yet3/2fjXF//u6r2HwwJzKWV+UUv+y2HcvSH17S07duLhSV2hqi7F8EPwUKcooRvAVPlT4qiaECucCPlQWqvHKhXDZiXzIheZ3nA/3OZH/MD93ZXf9lpO84nt+/i/Pl5v8u+/5u1zbforRaFbn1J9OKT0/5/hiM55nOZ/NOR4xY5xzcsUVZkNJOcRUnXdtqEdL58I1QR9yzr1ffP1BEXlYsPPLtl/Oxg2v+N53/NX4epyf/raXg3gv4tZN7TTY7Wp8nprehOn64HDYA91x3u8JfFKcPyfiLnrvr7g6rDCzr/nun/2r+f1B/+nxY9/2dah4RrbvvHcOcVhq9cSJs7q/mPPyN/4knzs+d/zlPv5/trWD0odqw58AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjA6MjU6MzIrMDA6MDATyKC6AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIwOjI1OjMyKzAwOjAwYpUYBgAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCookie.displayName = 'EmojiCookie'
EmojiCookie.defaultProps = {}

export default EmojiCookie
