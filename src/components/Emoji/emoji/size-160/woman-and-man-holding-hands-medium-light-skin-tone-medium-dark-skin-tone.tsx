import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanAndManHoldingHandsMediumLightSkinToneMediumDarkSkinTone =
  forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFyUyXF9a5AAAAAZiS0dEAP8A/wD/oL2nkwAAJAVJREFUeNq9e2mUXVd15rfPOXd4Y80aS7MlWTYeZFsWBplgY5uAgxOM6QRCswiBrACGBDChE5JOwyKEDCQhEIfg0CR0Ag4kECZDDBgbOxZYlmVrsuapZpXq1RvvdIbdP+6rsoiDLQmJp3Wrlqreq33ud7+z97eHQ/gpX7vu+30wW0+FlSGv0LNMeMEiEHvOai0Ej5PLjlLHzjARr77hvT+tOVy1YiGeOD6F27Zc1V8sFDd5nnelEGIBAAXAWWebWpsDWZZtazSbR6VU+juP7z5ne3SuHzz64Eewcv019OST37uo2LfsV/sWbXilCspLpFeoMjthTeKs7jRsWj9gksa9rNMvQaC+/Mq3nfNif+XmFwOAJ4R4ued5b/N9/1ohRG8XHDAzwHCOXWysPZbEyTfanegegjhcLvv4wv2P/mwAOrb1Ezj52Ldp1W1vfuWhnTv+uNNsXbr51rcIFVRAJPM/SwSwg8k6iJojSdIa/ZLLog9A0YiaDTH8kjeflc07btiMkyenxbJlw28Kg/Cjju2Qsw6OGWAGdwFix2AwiAjM4CRJfphqfadz7okFg0P43De/d1Z25dmCc/jLn0VpXR/Ky9dfF/YOf6o+U9+w48Hv0oIlFYQlH+wysNNgZ0AESBVC+VXlnLmcbbpasnqEy9z6nTe9CR+751/OyOYv33gdhhYOolgo3N5otf+sEyeL2DlkmYbWGpnW0Nog0xpJmqITJ2h1IrQ7MaWZXuaYlweed38Ux9HB0cmzul91tgAFa4G0VhsoDC7/gPDKa33fIul0sOPB+3Ct30SxZyGkKkPIIoQqQMoihAzhh73kTHybTRuTynl3cTHpnKnNsFhA1I4XaGPe3erES45PTKOnUkJ/pYRSIYCnFIgIAgALAUEOYCDVGpk28JS6QQpxc5Jmn3/1z23CVx7admEAGnvi/0H3pBAN75dMlrxMzxyCyU6hpxhgcs849lS24ZIXXg4/LAIQEDKEUAUIWYAQIcBOWJe9gdk+aET0LzMPPIGBG696XrvMDCHp4nqzfUmcpFjTH6KTxBif6kBID5VyET3lInzfhwBAQkAIAWIg0waZNmHgqZduWL3sixOnZs0FY5B2LchpNRDr+hvizkzoFxTi1gx6gyKqYYgTj51AGmW49EWXodRbgc5iUNbo+iUJ5wgmy8pCqLeG/oLvxgNPzJyJ3Va7jVKxuDJKsookYOOyXlQDgXqkUYsytBKDLG2CUwIo9xuSHQqCwcKiaSWMdctq9WZgjb0wAI1v+zwa2QF4orw5iWavCooFmEygMTqNXr+K6ppeLEwzjB+dwrZTP8JFm9djyUVLIT0BawzYaVhjYUwKQd5mTd4WS8lXz8R2mmTwlOdZ50RPQBgoe6iWfAwNlCEIMNbBWAdrHZxj5H6b4ZzDoekY28ZiEOBbZpG78zN/iTN9oxFtXLz2DTLN2q90Nq0KSTjx9EF0RtpInULiFbBw7Tpccc0mLCsvwfjDR7D7vu0YPTAOoxnSCyCVBwLBmqSsTesXSm6ld/yxTz6vbcsMY0wKZres6kFbxkMHZvCNnZPYPdFGGHoolwL0VotwSuHR4008crSOiVaGpb0BKj7BAUngeU5KeWGctLUZRse+P5hGjc1xp46xw6M4uWscA5UhFAaHQIUSZKmCYl8/gp4eDDbqqE1NYWLrCTT3TgAVBb+/hGIlgFIEqnrXZd6pJQx9/Pls+56Cdjwq4dr9Ba/XgdFfLWFFMUB/UYC5qyrAKHgSG4b70E4tyGQoeBIVn3Ays2MvvPKydOvOp88/QONb70VbH4N10dJmbWb4xMERTByoYUVlAKWhRZhKJChNsGiFB1UsQvgevGIRolRB/dgUDp6YQBUt1OsHUBguY2hpLxavdMsLhYH12sbPC1BPKFEwncVtNhLsY3jlagyVFmPnjt0YHh6C5FmwNQAzSv2LUCkXUT82gs2b1mL6wFOQYPQp09fc+3BpYWYb532LORWjPnsESaexemZipndypA4PEoWBIUyppfiPR/bha/f9AE2tABCE50MGIVreAH6wawrfengX5MrLMDS4DJ2JNmamZtGarRezJL6ofuoIxp96bj109eIAPsxlMLqircOyK7dg/5Ex7D+wHYvXLka5fxGYHUgILFi3Edt37MHE5C4sv/IFKPQMItMafT4ua6W2j9mdfx9kbAf3f/XTaDcaq+szrVBIQrUcYtGKVVh58aWwrRFccXkZyy7ZCEgFgEGej6XrrwZlbawcjnH5dVdieO06FJRC1EoxM1WXaRKtueYVnyGGfm5xemISYB6tenDOOUzvfwLXXjyIN96xGUM9vUg7TTADzjqIZBa33XQp7viFzWidOIKoWUM1kCgojEspZs82eTijLZbETfz+PcDm65oDRhsUigqcARQ3sFjN4vc/9Dso9vZApg1YtmAQAEZgpvGu9/0m0s4kApuhk7UAJQFYNGtttGabg8C0ApnnRCgxDE/SnkBSw1jumzq8F4VCCOX7OPDw92GthVISzjqM7NwK5ftIDOPUgUcRRSkUAex4/4KeYvvodOv8M8jmYZOMTqvlHh99gyUgYDRmZ5CeGkXBphCdBpKZE9BxBKc1bJogrY9DJtMIMoN0ehSdVgPOY4RFBbYWjVojBE4K556bQeXQQ+ippxJjv9BOdKotYJ2FMxmcczg+1cLTx2awb6SGKHVwxsAaDQahnRhEmX0iNe7z3945aq3l888grSM0Rv5NCOn8Sk8RSkkIIVCfncWCZhN+tQeCPZCQaIyMoDE1ierQAgyuWwd2DtZoJM0mGp1ZlAZ8hCUfOjMA20IyPS6zNHlO+1ONCLV2VreO/6jg2U2tWG/yPImpCGhxiFlXxXSzicD3kHZCVBKNBb6F1QaNTpYB+Ctj3MORNvjkDw6cf4AcpajNjnNQ9OH5BKEUVOCjpmcxc2oChb5+CE8hSzNYAM45GGYkrTY834eJI9SnJ2BKGj19ZUgpoLWBH4rS7MyY0ua507IvbD+B1121HMsHihOHptpfn20lVwtBYvtYBEsKsXbIjIUQCTpRDHYWF/V5GAgFmkm225fiIWbgB4dPnXXl4owAKlYG0btgPWZGDjhrUggh4PkB7GKL2sQ0ihMjGBCE8ZEx7HtyJ7I0g3/oBNa+oIPlq1egMTGOup1BeWEZhXIJQgpYbRCWwjCOaspx+rxr+MITJ3DHFcNMhH+qddJXFAJ13bXDRRARppsxTrUMCr7EcL8HTwbIjMNUPWql2n3y0cOTJ151+cpzqkGdEUC+V0LfwuvZD75rrcqjAAmBck8PsiTDselD0FpjaGgReq+/DmkUwQ9DeEGA6ZFjmGqNwB9UqPT1IigWIZUCM8PzQwhJUL53RosdrIZ47PCpo8sHSu8fq3X+dnFv8dK+coDh/hKW9pVyschAnBmcasSdRpT9pSC69yVrl+CerYfOCaAzC/NZAhJFFtJrKD+A8gN4QYCwVES1rwIODfaN7sX4kf0wnSZ8JeCSDiaO7sfTo3thwwzlaglhqYigWIJfKMIPQkgVNCWVM0mFM1rspx4+hKX9JayQ1YfrcfbmYzPtbx092bITsxFm2ylmminGah0cm25PnGwnvxtl5k+1tfEXnzxxzlXMM2JQEPTiifvvhOeX/sHBzwRhFVs96AlRzIqVcrFXV6RuLwrCoOx0CpsmYGchwCiGnvEqAzUKe2bCsND2w1LMJGvOuiOC/K8tWXhjZ2z8+2e22je+EV9f2AfMevj41u8fYNk8tI/MTbV2KgmAEATfE1gufR14A4f+4MltHfzmO4BNGfDZv7/wNelofAcgB1AIH1B//J+rlo7RgleSH/7cYDK18lWz31pfVui1zoGNATsHchYTXMj+o//Gqbi46HAo8d1l8tRX3rl01+FWuCFLOrO8cMPtz2v3N1euQAcsN5LcOCjES8tCLJVEawsKN40v9oLjZQVwDtCQAwZGM8QJ7at63oMdYPoUYcdIEDy4ojYz++mbX4ldd//1BapJ/0/GDTfsRhJjeGCw9CeDvYVXF0Ov4BPjxdGPcHW2F2AHZgaxQ4tK+G7pRRgJlwMkoB1l7cQ8NFlL3rekVz312Z9f9rwm37pkIY46J18p1BsvUt4fLvf95T1KkSPgWJahWPRxdFURU1WFgcRhxYkUM/UMa0sF9HseGo5xXOvoaeYvHwnD9xfTdPzYy1+FL/7ph89/Tfrzbyngz4++hr5dfNW7k0LvnaGvPOqm0tP+QmTCRwADLQJM+Evww/JmTBRWQAoJSQKSIDPr1lRPHRh43dF7vvXLt708+/y3fvAT7a1YvQy3dhL0s3vpCtAnl0m5rKokhSRQIIJjRivOEMUZ0l4f/eMxMJOh6kusKBRASubVRYaX6uwFHWPCyZ6eh/qPHtQ/Gh07/wB96LVXIh26uv8iv/47x5Nw1YipQhsH6xgsPZwMFuNIsBoHg7U4GF6EhuwFs4M2jERb1GOLodp+vM49smiBnz3aG7ijd3/1J7diXm81DtusvBL0kaUkNweiG6bYgRyjQgIROyC1uKoDUEuDmLDS9+GYETmLyDpkYAjH1NHZhtjoA9VTp3Zfvn49HhsbP38A7fnM+8BKIWH1wsGe8LeGVavw/XGF6UzCMSAFQRLBkYSGgnGANgaxtmjGGcZnY9THjuON5V1YWbbFLNXteGry/jvveKn71Dd/9Cx7t1c9rHEEH3zjMOT7qkKGsbOIjAU5hmSGB2BQSixTHqqWMCgVBpTMwTEGLWMwozUa1kEIAlkbNLJscLKn5z4yJnp8aur8VRQdO4x95d9IKnUzK79vXY/FFv846s0Omp0Es60Es+0EzShFO0rRilI0OhlqzQSnGgnGZlq4JDuEi3s04IeQQXCz39u7huR/v4RBC2xzWdjL4leqJHoja3A0jXE0jTGbZYiNQaI1jDGw1sI4C2sMtDZIMo0oy1CLYxxttbC/WUctTVESAj3WbPbbrZv9kyfxvlffcf4AIiGw+NZXLRLKu4lUXtIYVhHYGiRphmY7Qb01B1SK2XaCWitGrZVgth2jEyVYTE0QO5CSkEG4Rvj+y0vLV+HJu+98dquHgSVMQxUh1nkgzGiNgzrBhEnRtgaxNUisRWwsYm0Qa41Ia0Q6Q6QzdDKNZpriZBLhSLOOU50OYC36GIUgS2+fKZdK9Z3bz48O2nXPe0CeByHEJuH7G0hI2DRFHGtYx9DaIhZ5Rq6NhRIEBqAdI9MWUWaQpgatqA0dM0QlgAoDqf3gl5oH9/+z8LxndTeUENjf1mMrNy24d9LhmsZozUvrjJQdmtagbATAeb06EAJEBEtAwkCbHerOoWY02jqDdRapcpjtE4iLJQRx2kr216xf9s8PQIIEsulpFSxYeKvw/TLA0J026h2fLQuy1kEbC2LAWgspBBiAdQ7GMoyxsJZxtONPps3pUlisVITnQ4WFa2wQX0ee942n7n4nrnj7J55xjtetwWWJKWCwdJ0ueF6wvBelfRPQx06h5Szq1oLQfRDMEAAMgBiMpnOYtRZNq5EYDfSE0C8YQqunAOMYhY63ZJEvQiVFgpGp81ByJUBVq6ul798gpAIbg7TdrB/OqtsZ5Kx1MNoi1QZxZhClGnGqkWQGqTYwxoLY4XG35sE06jzo0hQkCCoMK8IPbk+mT/qnK7J337Aeq5f0YLAnvCn05c8rQfBKAQpDFYAIlnNQUnaInUNsLSLnEHW3XGoMtLVwzgHOwTkHJ0VeDiaCr8Q1xcDbWA69n94HPf3Z/wVVqUJ4/suE568CASZJYOPO41vt6ocFsXCOYa2DMRZZZpB2r0xbaGNhrQMRY0ZUm0mcflnHUcLMEL4PGQY3eJXqOgiJ3X9zJ968aRWqpQAnJpuriqH3fk/JXgBwlpFF2sAxg/KtNQdSwozEOSTskDiHzDkYZ+GcBTEDiY6zRHcYgCDAU7I/9OVtu4/V5Lt+bv1PB5C1BrpW65G+f5vwlGLH0J22cVn27zWqJgSeb9JZ+8z1TCPPwbEDAVAChYlIPWSizh6nDYSQUEG4XAb+LeUVK2CkQjFQOHC8pkqh9/bAky+kLrOMc5ylukHMxoFhwMiYkbrTwWFk7KCZYZhhOZ/0cEl2MomybcY6AAQlBQJPvmLN4uqaQiB/OoDI9yACf5PwvM0kJFyWQUedA6yzbytPeKDcD/B8H31uTidfHM/9ggieQvGu2ivGdRR9SceRAwAZBEL4wW3Te/YMpHGMasnH8kXV9b4nXyNlDg8zkGlrdKL3AzCWATPPIJ4HJ3UOKefAGXBevAPAljlqRF9LM1NjAEQEz5MXhb667aPf/jW84/p15wbQrnvei6w26wvPf63w/T4GQ8cdmCT+6t98+eCJoF2rwDEgBCAEmPK5ICYCkwBIgAXlRXxrIeJWuTM+IV3U+pJut3ZbrSGUB+EHV2RMLwwrJSzoLcLz5BYlxfI5cLSxaEV6n57t/CcDkgFYAJodMnY5k9gh7f5fd9njuk+HBErtkdrOTmK+b4wFEeBJIX1Pvva3XnrP0kCJcwNIKAmvUl4vfO8WEhKsDbJ264Ry6Re/kV1yldr+4MvVnm3wThyGd+okvGYTqtOG14ngd9oIGg0UTp5EeOww/L07gB2PXl06vv2mu45cc0R32p8zcWRAgArCCqS85Uc/eMx/YMdxz1fiRUKSBADrGI122mxE6ce4GU0z4FvwPIMy53LmuBwozQwDBwPO2ZNjFKKV2HZiPhUlZoaZu6UReXkhVDcM9RTwjuvXnh1Aez5zF9TCJRCef6P0/GUgQEdtmKjzxT/5TutQ4Ku3Ca1X+rWTKE6cQGXkGHpGT6B/YgKDU1MYmJpC/9Qkek5OoVg7haDdBBkzmDq849j2HT0ct76YdVpPsjFQgS97+/tedull61YML6gu9pS4RgqCc4x2lNp6O/30ZMfcS0ARBDgGDLoAId9i8wxycz4IsM8MKgghUDw40PNgO86+kGZdFikRBp687ehUsyAEnSWDhIAeH1kkPO81wvMkG4O01XzCN9HfPjheXEJE15MQkMqHmLukByE8kMi/Q6i8kSgkIASIAMd8jRJ8xf95avGI7nT+QcdxRkIiKJXWlXuqLx6oFm9QUqxkBjqxRq2ZfqMRZX++alFvCkIZANwcg5A75TyS5REs7W45wy5n0JzeI1SWPbLbtGP9iXacPWEtQykB35NbqkX/slKgzhygPZ+5C8ne3USe9zrh+5tJSGSddl23Wx/9wCPFI8VAXgpgMXWdL0iASYBJwkHAQsAwwTLBuvyJu26diBl9DtioGhPIWs1/1Z32o+wsVBB6jXb8lp5y+F4AxXorxalGvL0ZZ79XDeTUyHd2CABV6jpe241iyVyYZ0YChxQMzQ52bqgzh0gCKOtaG5cM9x5oRfpDcWpO5ppILvY9efv2g6fE27asPTOAHAB/3YZNwvPvFH7gO51Bt9tfSE5NfW3/8RkQ0QYGFUA0r+8YBMd5k9G63Enabipg+bRoBpB1uLinVBT+ioundNS522ndsmB78ODRq6I42RAnBvV20mkl+i8W9hT2Htx1GMIRgSlgh7zX5nL/kziH2FlEziLu+iLdlR3sGGCAQAIkQhICT+yfwu7jM99sxdnHtbHaUwKBJ26/YvXApdWi9/wA7fy734aN4yIp+S4ZFlYLpWDSdNok8T+3qivS4UUDHoPXz5EnD/OUa6HuZTm/AevyKVSeAyhfL5zjtU9PppUHf3gMNo6/b7N0DzNTpbcnXn/JurpQKgYw4ivv0XpssKo6gHu1s9VLV414G5ZDLx1E0l9GUg4Qhx4iTyJSArEnkYQesnII3V+BWzIAf+1S9Fyx1g1cvT4euPYSiKMzeMGKflNvp59JMrtVCELgq7WeEr8+MdPx7vwvzvpZG8+aDCTERghxs5ASNsvAzo05a448PenQjE3IjCW5QqFn9M+8DnKY2/xzoDH/19IJL0wtV7aN2sZLhhGx42nfD8RVL95c4izzir6Kf7R9757xsZlThcDHss0b8Ad3bEFlzZKM0dVY1oGNA1kLthZsGSQoryJKCVICvhCAmGc5gYElL78aRw8ex523b5z65g+P/AfgvcRXAlLQL1VL/meVEE89J4O8cgXCD64RnrdAx51dWaO+lYDjnOnGjnEL47gHoIUAgUiASMxR6VnV7m4HDdTVR9S9mNGbattbiyxU4DMBbuzIsfixH2xNm81Wtmrd6uKmqy89dO9TY+1rN17cbQA4sHMFOM4bl4EPvxRClQpQlRK83jJUtQRVKsAvh/DDAEKKHEzHgh2HzAyXGXxu+3E8vHMUBBrLtO1Yx7GSYpknxc2LBoo4nUXPAkiFJRBRUUgFWPcFdvZRHXceu+qd7432nzRwjH4AA9QtMcyBRF1/RPP/ng3OHJAOqDrGwpFZg/boaGrSZOf4idHjO598uvPYI49lxrps+fBCAQCDveU5JU4AikQEKSU8X8HzFcR8GTa/pCT4gQc/8OB5CoLE3H1W5rtHm1ZCGwcQjqba7mnF+h5PCVcIvI37Tsz6p4f8ZwFksxRs7XGbJied0e2kXrs7rdc/9+Q9n0SkAWb0MVCkuWl6euaP8fzX7oLzZONZzGJGwTgsnuk4lFavcWmjfveC3uKbDNNb6o3WU+1abQQ6u//Ju9+B1/7Jl07vwAREBM9XCEIffuBDPlORHAPQUEqhUAhRKIUICgHEMyq5ePoyaq0EUaIPt2P9QJKZ+4hoWhAKxjlhnPvJPihtzALM3zRpcgSgYyoMJ02c4rfvY6TawVe0kIFCjg3NzzE7ZhAz2LkchPmjAcj90H/Zycy8pJ1a/Ma9TTz2wGcm33XLxsmP378bX/7d1x71CEtN1H7EOf6xWWkiUkIJBKGPsBiAHUNnGlmqAeB7AC5Wnrq2UAohJUEqAaM1rLZg5vnq2Oe2HcMbN60AgIlU2w8uH6quiDMzqq0brbVTE3jqJwN01Z13A0ADwA9P//m1N74ZSWogSYGZI3YcGJsXi5gJwnX1QZeX+cRX/t1YQj7T4yCcscbZRqJZt5spooEAAPDX9+/AX+eAP929njVMTkRCKYWwEKBQCGCtg/JU16/xJAhLhBTwfQUpJZiBxPeQRBmY+cec5Oe2HQcA9xsvWpM0OunhVkyvY0by+hetNN/aNXX2U661VobMObRa5r6lJfPGW1YlH7EiuWzaRmihipSKME4BFhZAJxS2LMgJKTSCQoSeQgtDQ432WC3+8++c8O+vJWqfLErUWumZLaAbCoUUkErOb63T/EUbjFZX+ECIvDhGQjxne/TTjx5Gtxh5GAD+7j8PndsY8KFt/wQA2PuJX28Ltt9Nyfs18oLLjANS3Uaa1pBEETr1+liU6H8c6i//VqFSrgaFIvwggBRFuJQS1qX730O0deN7/iGfoD3D/i8LAoh4rgcvRN5uIkF5AGc0ATTdnDjsgiOeCfMXbnjh9FfMHmxi2a8WjF/tQegHKDkLk8RI6jWUkB5jFzwcVKpvLfYPVr1yBUJ5cEYjbdRVZts+0dkuWXQjJBhzkVMQhBNzftACaAKY5TnRNc8i8WOB5IKMv/w3fAeI8sUKmSeqfgCSCqS8HYB4mpQ3Ibw8ic0lgQAJIQnkA4TtH3/r2Q0QOAJAlogghIDogjT3WwAJM2LuHkWgrsQgQT8NPmcPkJQSyg8EEYI8mrs8clkLds4QiR1ZO5oC8wGX/yw/5MYMgDwI6slv7CxME4GJAQLPic150HOAGIAG0Dy9gjmn1bog0s8EIM6HFXyAergb1p0z+YEVa+tEtK9n2RLNzu52OgPbfBQG7ABCAKKlTko8K/94Xg4RAEFdJs6L09Py6wzgzpymzIUrzQtYAN65gHROADG4AOZesMvzIGPhrAEzt0jQrDMWcLzfGZ04o08DiYmAoeDiZTjbUzfMBCKI09X7abmgBtCe24hzCj7fjvNi1j8XZ3QOADkAVGTmMjsHZw2c1XNDUzEYMfIMftwZG1mtc/CsmwO4t/W9x4kdn8UOIwhJAJHIfQrNM6sr2C2ABCDD6M6xY87/zDMtBFhceCed31eZmYvscga5eQa5GjO3u7c+yc7WcgAtnjkjQT2yFJ71WVk2tgtW1zl3uyndA72uq2WSbn7zTI74jB9S3dzoZ7DF2AmARZcpwFxxChhxxrS7D3gWwBS63c38URNAKEKQxFkdKiEwCyIiMbd1Tq9HUR7mM4AjZjZzpk6vIIAg+Zks+kKGeQYzIjAS0LMG+Y6/+A/u1YAAW9cBMDKf0M5tC2bHzvHZ+ui8x0FSdLfNXGWgC5YBcwYgYmab53D5+4TIp8wACGLGz2CLMeBsG+DWfBWCCABrMPZt+4s3g0AoL12cMuc5VfcJzkmCuu5Ehp07qxgmiIgIas7xzoXv/Jw8DGg+zKeuy9g539WNaBLn4KXPyQexc212fDKnctcfMNeZ3T52DCIgqdfB7PYwuwRzmX/+AMcWbbrKnQ3VOUdJAOTNhXjMlXnz1EIDZMBoMXPK3erBvF7Kx3EkAOILHsXAiGszbYD3zS2gC9oRtnwUDGy66//mTtW5vezcJJHIVbYgDeBoc3QcoLM1TQLIGfRjNah828QApwBSZs7yyNYN89Q9Ik4U5JnbBXbSg2+/Db2r1jiAdpMQVnSnzdi5Hbrdnjm9NeK0GYXjp0EEoTyQlAmBxuHcWRnuOloCkZrPdHB6uIdG3itMwOgyiE//bDfM48KH+VXhL8IZA4CPg0RMUoGZDRxvLy1aaLsOEYIEei+5tOWcfRTMeSGdRALmJnVZdtbZHyBEN0PPL9EVguhwLhYzACnmM34Bmdt9pnD/s0hW2RoIZ0cBbgAAO5cQ8TicxbXdG7/mrr9HdOI4nOV9zto0pzYngG3TWatohxA20db888SpxsTxkZM4NjKFA0fGcXRydjTV9mNLe8IGmKed44+NTdUPHDo2hROj0zgxPoPxmVa9k5l/vGxBqSPOEiJ1LgCNZ0VM6Irc1GPYY4bRxtuVDA38D+8xrP+jH2H/BzZj7QcfxVXvvA5/+aH/ve7GcuIBDMMkdmcLpCcJ+DMG3ndmq/3gFx/CrZsvcwzsYObIVyqf+zEGndRIX8mxnWNNR6CMBH0z0+bXi4FcRzI/ZJxoI1JjZ54ab7rvPDV5YRm06c+24Vb8BXYkQzenLJcIOExrP/hmum5D8a4HQDbtIp8CfzgRPJ4t2tjSEASGZrlov134stfXP4qr3NYztnn7lo1Y2luUjvl1Dlg1N3ckc5fbn2qzOtUWUabRTrIhBlZ4Mi9zuHxzVgXRr0mgesvliy4sQJkxKHQOVXt9c1NBWMEmQ5NDjMqheOazb4AzaXcyLQPYmj1iuD6li4DRKJCWfV76i2v6dg363pmbVuQwG6VbQiXeXPal8ARBUt45EUQz2rpxbS20dci0aQI8kX+O4QugGkiUfHmrFPQr9598NW7ZvPHCAeQXFNaXmxuoVL7SOCDWDKMCVwpl/a/Sl0F1I8uBsWm8afiAtWFp34zqRaQZbYRolhZd3evrLXGlekb2Xr3lSmSOFjC7D1QDObyoGqIvlPAFQ1uGlOIh59xjcyL2V7esHwmU/FfrmH0B9Bc9LKgEqPiyyOzec+PgV17gdIotm64+/z7oRR/+HloXrUZw6ND1W8vXDI2Li+HBYCwoiJMZX/H3TzZVdREMAFw2vBCHF14KGZ2gr4fX43FkiD0PI4WwbOvtW8XeI9+45kPfNY//75t+MjgvvhJJolEM1Mvj1LyEu0MRUWrQSQ2sAwIl2/UoMT3FEHDADw9NQQnRyYxj4wxpx1BCohFnSLVbV/DVa97+4T/c/dH3f+j8M6hjHKpfu09EUbKqxp44GK7A3mA1JrmMTpQst9VS2Olm3Q3n8NXbFqLTiZZM2gIO+cOY8BegZYB2lCzuhIWgZZ473Ygzi9iSLwTdIoUImrHGVD1BPcoH2MP8XIaemk0YTGCRRzztnFBSINOM2bbGyWaCVDsEniQBXP9H7/69Cuv0/DOooR2mVgw7maQPBbX668HcyyDM1mZdO0p2JYREd3OsxDEu/+ADSI3ek83UowRUJGbUa81OkmTfoFVrOzh+5LknbJ0DQLYepTtDKevl0Otl7g6oO9aJsfsTbb5+2cohZ4wFQBibjeAc/7Dgy+2+kldIQT7l02qcGjfZyfTXnXWRVGdWcTlr4VT+3fvgmIueFO+QUr6JGaG29gHL+LAAjncIwEdekfd6f/dbcOAej+idUqo7GICx9kuO3SdA1Iy773uu15YXrAWAkiC6VRK9BoTFzvEpy/yode7bbHkvEbmt+w4DAK7bcBGMY/IlrRWCbhZE1xJhoXV8yDn+dwYeBpA+uvfMDvn+f8bSubyvQA4hAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI4VDIzOjM3OjQ1KzAwOjAwpBv0HgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOFQyMzozNzo0NSswMDowMNVGTKIAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  })

EmojiWomanAndManHoldingHandsMediumLightSkinToneMediumDarkSkinTone.displayName =
  'EmojiWomanAndManHoldingHandsMediumLightSkinToneMediumDarkSkinTone'
EmojiWomanAndManHoldingHandsMediumLightSkinToneMediumDarkSkinTone.defaultProps =
  {}

export default EmojiWomanAndManHoldingHandsMediumLightSkinToneMediumDarkSkinTone
