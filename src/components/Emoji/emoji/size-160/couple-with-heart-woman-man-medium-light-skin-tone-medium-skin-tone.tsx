import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanManMediumLightSkinToneMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-man-medium-light-skin-tone-medium-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcEh0iULw0kAAAAAZiS0dEAP8A/wD/oL2nkwAAJv9JREFUeNq1vHe4ZXlZ5/v5hRV2OjlUDp2bpiNoAQIGaATEAAMKzgxiGsJtA47euYpjKwpPK8jMPI+O+iDqiDM63ovCgNwWgUtsG2i6G+gqquhU1RVPnXx2WOkX7h+/tffZp6pbkYFVz6p91t7nWWet73rf7/t9w28LvgXbB573y1ys1uWNjasOTMnOkUQlt8QynnF4W7nivMP946bMvnjbyh3rb9v9Y/zqB//8Sc/zphufw+8/67N86uG7Zhb07DNTlR6JhN7tvFOZGawWNn+w77LPn/UXnmiKhnvpp97+Tb8X8eA//MJNQkglpURqZXQUF0IygGojisvBn77lne43/s4jhPhnT/ah73wL3x0/hwero/vm9MxPzLRmXtnaM39ltHsyFZ1YYj1+I7fm3NZWvrZ532be/cNz3ZUPN3SS3/rJN+w418dv/10yinQfs98/l07/9MTC/DOTPZMTYipVCLDdwlXnNrLBhdXHNvsb/3O5WvmzWyaecfaTqx/lpff89j97rf/wtuvZtdvwhfuTyDo/UZZ0BplrFaVPrEV574WUWHH6q399znsfeWdwrjLOFrmzRQ9frUnFSSn9F6UUXxDSHWtPtrescX7+8P9x2R/8kX/zbP7q4bu4r/XAM+f1zO/O79333Mb3XCXF02YhjUBJiADpYT3Hf+YCg3se7y6tLv3BQ+702xbK9taz3/6XvOB3Iu7sv5JlNieuUXvesmd295smn3tlWz13D0ymYARUDqyHvMIfW6b/8Yfd8rmzn1ktVt48o+fuP109wXd9+s4d12fuvR51xPFnPxcl3R4H+wNxkxDitsqIG0Du0lpNIkTbI1I82uMR4ER3/avOeye8szhncLYKu8mxZoA1Pe/MYM277CjCfEQp+UEdq2POOrP32p8dXcCxF76bjPy2GTn5nvlD+25pvexp0GrAlgUDSBFAShTMRjAj4cGLdN9/rDx58dTv3zt9+tcX+s0tVXg24nzihnzPWw/uOfjG6X/19FjcuADLFtZKyA0YB96BEjCh8d0B3b87xvITp+9bKVd+uiHTB2/+RLi2v/ylG2k1UafOcEV/wO3OqdsR+hYdp3ujOImiOELpCCklQogxT/HgPSLrnbIeL8HjvQfv8N7hncXZElvlWNPHlF1MteW9HZyG8v1S+ndPzDaPZr3CP/5TOSXl/KJc+PPpzuyLp190PXqiBYWHWIFWoFQASEjwQKrhUAKPrLL+lw+UJ9Ye+71Pzz/xH6mcf87qwTuvWTj85rkfvTUWV8zByRwyA9TAGAvWBaAqC4mkWN1i/ePH2eit3L1ULr02albL8Q99SN57n316byB+zBH9QJw0D6XNpo6TFK0VCAE+3He497B7CD8LgfqPv/qLdwohhRASIRVCKqRUCKmRKkKpGKVTlG4gVSoEetJ7f8Q798IyN1ZF0YkrH7616K6s/nhHTbyxsTCp0skGorThCeO3d1FbkpZQedh0sL9NY76t0seyW2bWBItZ57mHp/e/eeFVt6XyYA1OaUEC3gZwTAXGbO9bA+jnlBsZPrcHsTzx4DP+5PETX9V3DLLoHVHSfsnE9Oxsq9ORWkeAxxmDMwZrDM7acGwtzjm8c3hr8c4h8uysJfz5sc2H/4cW5SzOVlhTYKoeVb6JKTdwplcIZd7Xe2Dwh/xx8x0T0cyRZLpJ5+AM8XwHkjiAoRRoDZEO1hRF4dXXFjWn8adXyT76SGm8pX371bE8MAcXS3AuWI4xAZjK1CCFV18ZXF6RLXfpnVzDdHPW3YVjH5v/v5dKxXNbnYkojmOcc7j6pr2vH5jfcbeEJzj2pgDtvav9bjxKhZ+FECAkQkiEqK1qzLqqIk6c7b5GNe1zZBQteu+psooqL9F5ifQ+AKNdcAnrwrFxNVgalIYVg5ifofmvb4sRgFM1OBasqUEZ32tgjMFUhiorGQwysrIEHMLrp03oPU8zMwXeOso8D+AMXelSY/CXmMbwdwRovKsBGQNIXAKWkAglRkRGDZjUKdZ2RLF+/pA0Bist3lqqoiLKK7QHqV3NQRoiB8qG49LUlqUCWEZDpMJlVAVU1U5g7LbVBPewVMZQlRVlv2DQz8mrCuks2iVM2RkuVKewZYU1dgfPjEN0KWCXHmvvTW3qXAKUGJnckNmFECAjpPZoQKoITZN+fwNfbeESD9ZiBhUmK5HOI7RGaBesyAzJuiZsKQMnSRmOVe3pzgVAhrsLr95YnLVYYzHGUFWGKq/Iexl5r6CyBukd2oHoC8ok3wbHeTz+Miva/vHS98KxdrZACFVbikAMX4UcgeSHLocA4RkSuhTgRYRABx93FqzE9EtMo0Baj4gcSqttV1MWpKqBqXchdno42xEFZ/F2yIMWYy3G2OBapaHMSvLNjDIrMN6ivEM4h68cpjL1dTnc0Hq8H4FSax0u8zq2f0db00dKjUAFwqyB8UPuQY5uwA9JzLsRwkIKdDPGYME5vLDYrKLaKgIWsUNEGhn5GiAJ0oZzyhqY4c+jJzkWcp3FWYd1NTjWYYzBlIayqCj6BUU3x1QG4yzCOZw3bJU9iqpEInDOh+jk/ZO60WXwjH2ubbWFlxoh9IhbEGpEzCC3rakWUsPohnfgQC4oiOqnLSTOWGy/xHiQiUPGHhH54GrjriXGAWIbJO8C2M5hXQ2Oc9jaeioTeK7MSsp+QVVUWG9xzuKdJ7c5x1dPsVpcZGFqgjjSCMRTkDQ70qjLOMgUawgZI6WugVEgQrQaAoVQiCFQQl7yxwTRvhTfcogNgxcyAFVanKvwpcAnQEwAUdcAjcAZsyDFCCBfh2XrXLCc4auxwbWKijIvqcpgOcbVXOU862adE93T9HqbbPVypjtNJpopcRShldzJqeOB21/yHh5tig2E1AgZBaEoNEJqnNDb1iQDcAKJH1pXeOTgBdF8gro2gc+WOFkLLOfAeLwzYAk5VAQhtPkx92JbQI4DZO0IIGttsB7nAjGXBlNWGGOwzmLrNEk4i3CeJ8wTbNotKm+5uDmgmxW00phOI6HdSGgkMXGk0Uo9SYqxk7S1Md0QsneAEUDafh2zJiSIKOghEQXgIkH63CnK+y7UN2ZAaqTwCAeiCu6HEaAJQAzdagRQvQsf3KsGKOzBzawxWFODZS3WO6w3WBdUcOQcxuU8yiOoWCBcTFlV9AtDUVm6g4Ik0jRiTSOJaCQxaRyRRBqtFUoqpBQ1YOEatbM5CIljiOQ4D+laINauJ3UNksZJHVxTxAip0Nc3MFdJ5FGPE0EPCeGQ0iM8CFtzix3jm6EVjYNTAyRsyLm8Ddzihq/O4nzYrTMYa3DOIrwl9nCeC1yQ55ifmKLTnmBlc4OtXo+yqjDOUlpHVlZEWUGsNWmsaSYRzSQmTSIirVFKoaQIAch7C96OhfJtoIYqeshNYsRLCkFwSyciEAqfOMR3R8SPGqoqhGWcA+EQvs7DvABXx1U7Zj3C1yDVEcwOdVAg65BAB85zzgXLqcnb+/B3IufBlxzXRyltyYGFfcxNTrE4NcnWYMB6t8tmv0+WZ1TGYKylNI68qhgUFc2kotNMaTUSmqlEK41WEi2lxnuD9y5oNO/ABz0UVLMIfCMlwgWfCFY0tLChzwA3OHi6o3l/RFWTphQahBsTG2IUEUNEr9+3w6R2CIoPwI60i8MNdzeMWAEc6SwNBCflSZ5QTxApzRV7FplothgUJYO8oD89TVaWDIqCXjagOxjQzzLysiSvLFmZsdbNUEqgpCTSikgrNF6idYq1Jd47BEPF6fBeILzACwuuBg2BH+VuQx7SQQ4knvJ2Q/NkjFwXeGtARAhR37ysXQgxJlzHEsRhXjT8tZEsGl7PNkBDcIRzpAgq3+VB/WUKX9BsNJme7JAmMc1WgjFNitKQFyV5UVEaQ1mnKkVVkRUlRVlSVCVlZaiswdaWq08dPcrCwQO0p6fwvibY2pq289xhQndpKlJbhvABJC/gCkn/ORnTd09R+TqKSV3rprHEUHB59rwjggzF4k73CoLPIeo98p62EHzafYUluYSpHItTARypQg4ZpZoGKc45TBVkQlFUAQxjsXbosi6ISu9CEUF49NnHztDb3GLxwH5m9+0lSlKsqfDO1k/NI2tQ/FCej27G4UdkQu1qjuw7CtJHBrQfnghPwtUVlZGr+cvBGD2EsTTDj1tz2PFBLeMcyjkmhOa0f5wv8mWcdxgHu+ZmAzhDuSUDUFpI4kZUK3SwNgBmqjp9MRZrhkA5vPPoh75wjl0Hegy6A7bW1th16BATc7OgfSi9uqBrQr1r540FZ3F4b+obCxHFdSrWb18hXW0QrychoqECQNixtOISgC4FZ5x/amUtXOAm6R1NobCixyfdPfRFn8gq0iRlYWZ6JECFFGNA1SFcSoSACD3Ku7wLCa0bvdYATfmYs8fWWb3QZ+/hPr2NTeb37WV+/34aE21kXSxzY9EEP84egViHIDpn8baiOmxZfv559tx9GFUQrGgsAR5d9Qh0t53nDV1qxDt+h1tJ74gQtCV8VHyRJ9w5lJBUxnJw7yKtRjqq2gxF4CjgiG2dE7RhqCAIPV4P2vZ59eaXPePOiTQWRbfkwtku6+sDikGXvL+BM5a02SJpNGvFuV0r2lafYuSAzju8MwEsPNViAVuS5oVJxIjXhucYL8e6MQsKD8J6h3GWyptaENYPwYWMfUpqTsRf5VPy8+S2BA9pnHLzNVfTaCQIKZBKIJVEqfAwrLMUVYW1FinD+2JHSiiQl+x6am6eRqvF1GSH9Y0u51c3efyBZVbO9Vg5t8b83nMsHtjH9K5dpK0GCggtIjcqHXhfaxdczcPBykTsWfuu88TrLSYfmazLpzVnyfEa3U43G4Zz6wNp+rqEIbxDeU9LaLbS5f696QPNYlAKKQTGOfbML9BpNnZYTz8vOLe8xtmlZVbWNiiKAiEErUbK4f27uPn6K0nThKfq+unG9Axxs0nSbNHqtJmdmWBzq8faZp+LRzfYPNtn5fQKU4uTzO5ZZGbXIq2pKXSc1GlTzfzCBLcQdpTMOu9xE4al7zlJ1LuW5vmkJuxhLB8W6ob0H7jH4TDeYv22EAzgOBIpaSl1/L7O1z7Qtd03C08MEOuYvfPzNc8Evjl1YZmPfu5LrKyu471FS4Ea+Zbn9PmLzM1OcfWhvXj35CUQHbfbuCRBJylxo0HSatGamGB2NmPQz9jq9jn9lXW+dmyVhT1LLOyZYHJ+iqn5OSbn5mh0OkRxhJQRTnqEsHhsAMc6nHFkC5ucef4jHLz7OpINsQ2SVHXw8jg8rrYm4wNAQ0vCO6TzaCFpKrFklf8PX504flFuiDc5T2yMZbLToZmmIxcWUnD0sdM8dvoC7UbMVKfNVLvJRLtJFCmMsWilmO60dwTVS5NWrZMUryNUFKOSBF01icuCtCxpTRQQr2PW+kzJlGRTkRcD8gsDLqTniVoxjU6TzvQUEzNTNDstoljXluVr63J46+kdWub08zQH/78riXpgrUV4hxcCi8fgx+h6CJCFod4RkGrZLWLz1vm/f9P/+qM33nZNf4tV61zHek8cRTsIGOC2669kst1kdqrDnoVpJjtNtNKjz4UArdSoBrRdBtkuvWoVJ3jnkNoioxhtKmyS4kyFqyoWkpTnT0+hvcNWJVVZkucF/c0BWyt91uQWPrqAjBRpM6Ez1WF6foLOdIc4iRCSmkc869eeRfUVBz57EJ9bKmdxQmJrNeVHF1bzT104i4BUyyJPzbtO7Br88d2vfxUrrccugjgPHAKIVIQcL8ABe+an2bc4EwKG9eSVx5UGrQTNWBJrva1bx4AdjyVaaoX3Cq9UqOVqjbQGZ2OcMeg0pVVV2BowW1U0ioJWltHc2mJ1o8vaxoCcgm6SsXahy5lHL9BopbQnm0zOtmhPNkkaMSpSrN50mrinWbx/F66ylN5gCUl+0FoCx7aC1gJSKY3R5g/PN7N37rsYl2s/8Fm+91lXb/3Wb61+xXv/bO89Wqlwk6OoGkygl1VUjVnyxhQPnzrD2maXxdkZDi9M0O4tM9PSowg9tCDvtxsV6udf+7I7RdiCgJJ1h1VJpNZIpVFRTGksyxubLG0OWO3mdPsZaRIx2WoQI6gGFb2tgiK3qDhUBKSSDLoFK+c3GPTy0FRtSKpDOXoQ07rYwnhL6QNnDbmIOieMEDSV9FbZv1iLsl+ZHkSbZ17yx6TJlvry/de9oijVy89eXNtXVIa5yWkWZqaJEh3CuxT0S0fz6mfB4rU8evIku3Yt8v4PfohP3fcAvjHN0575fMqNJRrK7yiajb9KFUVIrRF1dU0qhdQaVfOS0JqltXXODWCjcxXdhZvh6ufRvPGFnGea02s9Wp0Wu+cmmW83kaWnt5pT5hWDXkajFbG4dwLvLOdOrnDusYsMbI+L33mW7tWbJlXaK+FD+PcO4S0CRywETS2x2r5/PcrfMlkla+++6SQPnZjh8w9ee+XahrirmU49y3koKoN1O/tdZeVoHLqFq47cznv/+3sRruI1P/pvue6qg/S7G3zi7r/l6PHjTF5zhNy4cbvbSdJCyZHlODsMqR4vJd4YzlxYRs5fx/JqwdnTp/j0PffwyKmz3HLLrfybH3k19uLjPPz5u7litsXCTED94maf/kZBlEiWzqwxNdtm98FpnPPkg4ru2hbp/gYXX3j+7MHznYutfvxtmSlxddkoEoJUayplP7au81+cKdOzh1/9t6z+9N28819/D0lid3tnFjvNFFBkdV16u+DuKVWD64+8gDNnnuCL99/H144+wP3338cXv3wUqTRTScH5B+5m9hWvYunCcXy5XhcLxY7zBCEiZbAgrUe7iiIurq7SOXwbZ/MG/++HP8gdP/tm3vCTr6PorfPJj9/Nf3rXb7P7puew98hLeOTiFmmzwexUm5l2g6pbkXUrklSxtd7n/Kk1wNOZSkkaEd563F6n1r5j/Xel1Pe0VURLKNpS01QxRrh7Nn328+0yfmziY69n9afvHup1ipL1vCgLhCCOkwCQHetYeIinFpmcWaDIBmAqziwt87HPfp6tfo73sGtKsncio9Vu057fH/pml7V/GCXqtXaoeSeKyIock86z/6bn896/+HO+euI4H3jfX/LJT32CEFY1+dmHuPcjf8MzvveVNA7dzNLmgHarwWQ7pRVHDLZKnPPEiaK3lbF8doOqMHgbOhZKxnPV95VZd3njDWUx+MfIWrSxFOXgsxv5xhsafffQ7Md2Tp61mhWN1GxUtlwxxpImKYPSURo7Sji990zPLyK1Zt+Bg1xzcC/zsSGNQt61Z1bwkiOa6295OhMzC0zO7bpM/wzB1jtnFsQoCe1mJVd+28soyoqzTzzO+Yur/Mqv/0bt6yFW7Jt02JUTIBU3v+CHuPe/P8ZuqWimCc0kIq8KrPEoDUoLupsZSSMiTmNMWYH3qVbJleWd5n9tvrX7UxO68VblBbkrf21Sto6dsauXPdWJdokQbvPshfhcUVTXTjSbWA+VdSM5ARK2LpKtnGXXrr289nU/wUfefSeKDWb3pDzvGSnzsweYe9YdpM02CnsZMEPA9JMRk3OO1uwBFg9cy8WLS0x2mqxc9FQ2gOg9TKRwy9WKXYsdvPdMLu5l//W3Eq2fIIpC90CZcpT9D3XG5tqAzlSLtGUwVYmH/XMvv1bEL3/xsS8949deGxn83/eOZs9sHOL5R9912bW1GxVHbjm/9d73X/fEoCiZnehwYGEBrVTgIRcGn3pLp3jkI+9l+oqnc+S225j5mbfyxIN/z1xnnbkD1zBz7Q/SmdzH+Qc/yuoj9z/FIMNTACSEYG7f1SitmV9Y5KW3v4i/WzpOjme11LSagld9h+JZVzZp3vyCIAu848oDCwzK05TZAD3MooejNuG6qUrD+kqP9mSbqixx1u4arKzrlY0/qG65/zcH/DPbD739Qf6v77vdL87lR4uyQkrJrplp4ijCmNAi8i703fKtVS586ZPo45+nPTHNDU/7tgCCU6wde5Cl7FO4MgvTB+PkXE+ePaUFISDWAUKtNa97/c/A2qMsH72b+fmSm25scXDfNIPJV7Lw9NupygyWT6D7F5GylgtSIvWYZh/TFr3NAYNeRmemwjs3K5xQAlHxdW6dlsF7HjLOFtL7RAgojRmF++GIi6iVta1ysrXzOxVzrXukDHFqfKJD7LAg/+QIDZa+hk47NBeuZM/+Q7zxN9/NQ5+9m3z5IaZmUuK9tzGz+2aq/ibi/DHU6kmstzumNJSWI5cc1mkFYEpLd2PA3B6DM2balGXkvc+/XoBmJguc4/HKqAvWiYNSSkpjyMtQ63HOh+GtYR19WH8apiFi+z6H7fPxjFXr8JCNMU9tQbYcsPHY5yg2zpFO76PdmuI5t/8gZfliyqxP2VsjO/9l3MY5ZN7F+bqG7ULB2zqH1HWQHF3EdkOjtzkIQwfWNG1VtQR0v16AJloZ3qvTvUF0rLL2IN5jrCOrKoyxeBui2dCC8OBFCC3BunbmXeNVUqkkcRQRRZos908C0FjY97ZisPwog9XHQ7NQqNDprEpsVeJtFdrEPtSFbBUmv6y1GO8Q0fZTE0JsF9IE5FnJoJfhnW165zrAha8XoLyMuP94s39wd/m+fuFeUBgTG2fJipKyCl0K5RRe+tGsofBi9HDEjnlEEYZJShsAjSHPC6qqwlgbepk7hgguBWs4KusMzhR4W4Yi1mjQsy6aDZNZU4WTS4+KZN3CHc4nbNeEnXVkvQzvfeq9bf1zMzvj20/+189z7cEtmmnxAeMG70eYJY8vB2UZ3GxI1uOFSsaalDt7AyGp7eWsr/coeiVFv6C/lZF3C+QlA3t4655s5IrL2Gs4qVUPOdmqwpQFpgr9Jh+BigRKC5SSKC2RSo4SSSEh62c4YxPv/b8IIIDrDm1wx3vcyuxk9obJVnW7lO7TWVkxKEqqajua+R3dkUt7b+H6BSGfe+TsRR49vcSZc2ucObvGyTMraJtnSKXDCazFFgW62UQlCU+Wv/m6zOrr9rB3DlcZbFFgipyyKMltBYkgihQ6kmgdgPE+9KKs8AgLZV5gjEm9dw0/XtT/OrYX3fkYANfuX1x/94fm1/fOl5+pjHlBPy8oyook0Sgt8VIhaksRtYt7IcJ7Y14y0W6QJhGPnl/GWjfidJ2vryN1oCJbFuSbm7QWFmnMziGU5MkSlNG0aD2mYqsygJMX5HlBKR1RUxMniihWKB3GSjweaxxGWqwJLaIyy2O8b+A85x/5I3Zf9fp/EVCvuGuJ1z5/iki7e4rS9Xt50RoUJY00RkcaoTw+jFaGAY0aqABSPaUoPGkr5oar9rFvcYb1bh9nHY0kRq+fPoXSOoT27hbeWtLJKbyzlwM0BGXY0ai5x5Y5VZZR5jmDsoCWIG1oolgRRQo5FIzej3hISoeUUJWF8t43nbN8o9vumQrn/QNl5R7KyvJILy9oNRKiWCO1HFUqkYQOk9wmaOdCRzUvDGVZYawj1gqnJNY79OPHH0bUnc4o0uw+cAAVx/UExyX42GAxwxG5ofVUeU6ZZeR5ThU74rYmTjS6Bme7DSZwwqOFQKkAlCkLYa1tVGVB3Gh9QwD90o8s8fTX3br88ucv/V1RVUd6Wc5EIyWNI7RWozLGeFgXCB4/s8y9Dz3GZn9AVvfqra1LvbWo1O12E2MqoihicnaWycVdRI3mTuvx7Jj6GhbkrakweU41GFBkGZktEZOKuBH8XykZGnj1A3DOj2Y3qUuk1hicqZpZd4P21Ow3BNDca/rc8b0XSCL/vo3KvG4ry6+YyAsaaRysSIkQ8l1tRbUeUggePbPM6eWNEDgui0Ygdx06xO4DB9h16DCzBw6RTs+g0nR0ElyY+Bou/vAjoAy2yKmyAflwMKnpiJvBcoZ7FO08VipwklISFakwUeJcurF0FqX0N+xm1x7IeeefPfpVpex/GxSF2xxkDLKCsqiwxuGs3xHWnXXsnpvkFd95K1fvnUdJOVbA3xbfujU3j9IhikmtUUkS8pO6feztsHVTW89wuLIsqLKMotcj6/cZqBLZUUSJRmsZQNByNCQ5jH7OuhAlIHwWriN94viXuOG5L/6GAfqZd5/h4TNX+WZi/7Q7qF663u8facYxcRyhlCKRY4Oacnta5ap9C7zupc/my4+e4asnL3BxvUs/L3HeE2uFPn/iGM3OBMVgwCDLUXFC2m6j0gbomM7MNJOTEyMZ4GolbbKMstcl63YZ2Aw3IYgbEXGsUZEK+Uxd5x6KVuccTlqkctv5a1DY8Zc/+RW+798J/ne2ucmKe49Nnj64mN2VleV7Vnu9mTjSaClHbi59ve6kTlqddbTThOfeeBXffv1htgY5/azAe08ca/QnPn+MZhqTFRWbvSwkmUpijGVissMLX/I9THTaNfdYXGWosgFFd4vB5ia9okfZcSTtiDiJ0JFGRxqldU3QgaSdc0jncEqOBJwQAqUVAvTnPg7g/7cA+rW/OsX/+YNXsDBdfuhrp+U7trLsTiVlKmvLabqEKA6Bw2s5mvjwzlEWoaY9kcRMNdLa2jx6pZtRrfeIlKLTjGknEWmsmZ6d5tqbb2LP/r31QJXDG0OVZeRbWww2NugOthg0KqK2JqkJUUcRagjQcGAcUDtW9tWDWEIQxTEg4k/AU/bHf+nF1+04fsfdx58SpN/5wGP8wvdfaRZn8t+7uCb2bvQHbwRUGIrwNF1MHNeUUvfDZD1cHtaU+REFCEC/9Mh1GOuJtCJNE3SS0JicojO/QNJshkmzmqQD52wxWF9nq79BLy1QHUXciIiSCB1FI+tRSiFqgEZ9puEI1lhhSkURQOy9Z/3sn/PN2N71wUe543uv7rWb5W90B0xu9PlRPMo4x7Rt0nQJcRyhdQ1SPWmilESpnefS+667PuQjSqF0hE6ScNFChKVEzuFM4Jyi12WwucHGYJNelKFbwXLiuAYnjtA6ABSmuIYtpe1ZouFYXRjuEIQlkmFM9qnSsX/KYp5qu3LvgBNPtFcmmtW/3+pTrfX9aytndVEZpqomnUZKmkQhso5fo2DHwl7dnJq+XBDWeZazBluWmDyn6Hfpb26ylm8yiEqiVBEn0citdKRH4Eg1XPsaGpFiPG6ynaoIET7fNizPN2t785+cxXv42ZdcvdxIzS9lBStbmXtDWZmJQVEy1QrrN5pJQlSDJOvh8R0AhWmw8WzChdBuKkxRYLKMfNBjo7vBarFFFVnSJCJOdA2OrkP6ODB1j02qsaF0MVbq9fVcdmhze+dzIQRLj/8x38wt3OfD/PxLr1qbnSzuXN+Kvpgb98tl19zcLwqxNUjpNFKaSUysNZEeA2rY1aiyQZ1WjCefAZwiG9DvdlnLtlh3A9CQ6min8NNDzgkAqbHW9VDijyp7NQsNyXioXYusl/3De17G5vJ5vhXbf/7wI/ze63fnb/+Fx//6537rqvuLyv3U1sC8MSvKia0sI40i0igagaTrmjqA7q8uB4C8xzkb1oDmOdkgI8syirwkUxbfDkSutURrhY5rYGrrEWpYqA/gjLvWzkXDw2l6OTo2RXFx8dD15N1NvlXbHX90nqUX/xWr3Z97ROror9e3eK2WeiIsZomCKJSytiAZRmnw6LMnnxi1PIYL1qwJ68eHZmp7iqW1iP1XG3QstksYStVutU3IoaMxfG98OcP2aIkfTt4L4UF8DsFHQ7L2LcOH5/3wXfzmy1/N4jN/7Ibr+l/49cRs7C58yaAsUVKipQqtqjFRCaAH/QE7q/qBK5SSo0ijhOArX0wYbHW45Rkxol2FSuEwlRhGgeEXEwwHIkajvuMT9d4IITYR4lEQd0ul37t17tQjk/sOc8Pz3vZNB+YFb/l7tPBqIBoHn/a699x+7ug9rzde3NoQ4Gqesd5jTUVuhutyt+1dN9JkpBrx2x+60QA3nDynWVqWTNj9LPUPkO3pMX3NGlNXZEQzOKmElUJ6KaWRSldCqUoIVQohCiBDiDXgLN6dRMqvCS+OesQjUdpct1XlnvOa//FNBeWd/+Ue/v3t0/z4+1YnL1h3Q9+6l1fO/4BIO4cLkUQbYo4p1UVTzwDJscGpSzoeutVqjr0hRpHMWUtWWL5yAj7zgGI6mWFXc4G8G2EenmPr1BwrcwWTB/PTkweKv5m+anBfsotVrWUhhM6lVAMEPe99F0SmlC4b7anKmsofuvkXvumW8qq3fza4OKSf6nHNR9+3/iLj5IsrxK1eqmklvGhPz9GZ28Pp8z0mZMZusUykFEm9VHPIkHhPiCMOnTbT7aXgtUYp8pLzy45/fFBx/BHFbLLAldP7SWWCdTacoJDY8yn9pfa+pfvUjwgtDqL467yvP/bLX3nVyiv4NH/D9/Ot3P70vZ/jx/9W85pnO71p/D5j/Xc5zw94OOJgl1fI4eJRgDiOueLGb+dxPCfWm5Sc4rA4Qxp52mlCVJdbPKGv571HfORXXmUBaR30B47T50pOPFr6h096YfIG+yd2s9icJ1YaidxuKwuJEtvHSklkJAupxUNC8mHveL/3/lhhs7yh2/z8PW/6pgHz8t/+AjfOafXllWohtzzPwoudF98BHEaISIyRiLiEA4WUFP0u5x47ztryeTpmlQP+LAf1OoupIakX9TnnsR7Ev33a91trncwyT78PRa5IZZO55gQzjUkaslUPR4KsdY0c0zeS+liKGiyBVNIjuCCE+IyQ4n0o8XGfqhVROf+Ln7njGwbm1e+4l1QRrZbiJuPFq40XL/KIaxAivXTG8HKQdkhIvLf0NtZYXV5mc30F31smLZZpmk2UzcKKRAviNXveaKVDaqlp6JhWlBKrqF46OpwFktuzxcN/wzUO9TLxIYjj2keGge7MCf+AwbzPCz4spXwY7+2dD/yHrxuYn/jPn6MdeXm6J56eO/FTxot/5YXcMxw+EEMReukQ5racfjKdHWrx3lPmGb2tdbbWVxl0NymLAeDDFy6869t/37rKSuccxlYYFxa/hvWggFeXnJYdcmBb51yy+fEFBh4kDilOCcmHhOT/8ZoveOuzt33pV/9JcF55170kguktL3+y8OJNHnl4qLfGVboY6/0L/unC25jD7RgaDx0OgzFm9HUW4r8c+QNrKyPDuvQC48xo5Z33Iuw8aQ9x27/FpU1XXw+DD5c01QnqcH28YN1L9wGv/F0SecI6w386sfMb7H74rn9kg5gUe7jy4jetkD+MkJHckSuJp35A/4Jtx4Lh+kuWhot1tJDCSaVw1Nl1vQhXCI/zYnvp1M4JkR1Py+/4Dp5gMdYP11/4sJRp2GwMw5ZTSF4nImaNtv+OJxlc6DqF9mYul+p3EPKVcuxLAOSOJQfiUtNmbODncjAu+2Kl4U+hBR00Uf2lLh7+f4/eg40fty/MAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI4VDE4OjI5OjI4KzAwOjAwR0zpUgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOFQxODoyOToyOCswMDowMDYRUe4AAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanManMediumLightSkinToneMediumSkinTone.displayName = 'EmojiCoupleWithHeartWomanManMediumLightSkinToneMediumSkinTone'
EmojiCoupleWithHeartWomanManMediumLightSkinToneMediumSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanManMediumLightSkinToneMediumSkinTone
