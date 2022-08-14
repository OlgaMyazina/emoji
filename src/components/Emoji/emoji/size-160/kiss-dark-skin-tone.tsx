import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-dark-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcEg8xrPYFnQAAAAZiS0dEAP8A/wD/oL2nkwAAHHFJREFUeNrte3mwJVd53+8753T3Xd/+3qya0QoSEQgNi2whUGSCoIqKTRxTwbENTlIkLiyDHZNKHGEjx4mp4FAhXlJxCMZFVRIXxnaqjB1wECChFYEsgSQmEiPNPpp5M/OWu3Wf5fvyx+m+t9+bN1pmlIhU0bdO3Xfvu7e7v9/5vt+3XsL/heMLb7kdPRmoy/Ulu2d0942ZSq9LdDrHJMEHeyIIP7iqBg+/zr1r9SeSd+NPvvTglud5/Z4WHnrTKdx14rdntpmF1zV044YUyfaAoHM/PFuE4pE+Dx86Ek4cbVOT33nPx15yWeglBebN/xJvar4RT9gndy6auX8w255/d2fX4pVmx1STOqkCC2Sl8P7E2lp+Zu2htbz3n473l7/YNI3i+q/93IZzfeVt/w5DFI09WHznfGP2/dNLC29Id05P00xDgwDuFWyPrw6Hz549sDZY+aPT7vRnX9V+9fF7V+/CO+/7+PcfQG/4h1fhvv3/Ho82DuxbMLOfWNy1+y3Nt16p6Jp5oJEAWgEJACXASg655wSG9x1cP3Xm5O89EY58bMZ3ejfd9UF0f/wK/OX6h3ASa92r1a5f2TG/47bpmy7v6pt2AtMNwBPgGAgC5A7yxDIGX3kqLB8/9vUzxZlfmktmHzlaHMXN93z0+wugJ976KYyQv3ZOTX968bLd+9p/+1VAqwmsB8ADUBRByjQwnwBzCnjkFPr/4wl78NSh/3D39DO/sWPY6SUFYSXNu9cWO3997869Pz/7d69N6dVLwHIAzlog94BnQBjQBEwZSG+I3l88geXDR75xxp5+f0M1vn3d1z74ksilX4qTPHDLJ7Auvfl5NfM7U93Zmzs3XQ4FA5wpAGaAJG4FIe78ugfWBLhqGumOrk4PDF6frrj0vpkj9y5nA7Ovv/v2y7bt+dD8T16X0ZWLwIEcOFsA3gMSgOCBEIDCASsjkADopgjHervEhz2n7fKX/vGlbx99+vCdLz9Ad7/jduwb3oKBOf2+rpm6rbk0rRvTTZANcYchk0WlJhkFOAFWGbikg8Zi1zSeGV2/uGJ4Zz71psvm9vzy0rv3NdWlC8AzOWADoBDB8QHwLoJVrfUhMMhhV0eQPFwGlkNXpld869bdr8RnD991UfKZiwWoYbt4OLtzcZ6W3qeVSULu4M/0kC52o1BBAV4DxgCJAQIDSRJfMwOHLbB7HvM//rp268vTH/Hw1PlbV6VqxzxwMI+fgQDOR2CcL0GKz+I8uHDIV/pw1kEpnWQq+/uPjR77XEe1Vi5WvosGyPgERHSt0eYagcCNLFxuYXILBZTgcAQmcATGM5CE+Lc2wGkPWpxF66euz0ACsAFOWYBLc3J+o8ZUwHgP7zzcyGI4HCG3FhCBInVtopOrNfT9Fyufupgv3/WWX0MCA836lQo0FTgghABXOPjcgUcWyMs1cuVzEdcgB/ojYDAEihxYLYAegB7Fv4sCGObxc8N88r2RBY8KhNzC5hbFqEA+yDEc5MidgxUPEcwSq1crUbjzpo+8vBq0K+zEITq8QwTEIkAI8EMHP7JQLCBjQIajFnkN6GopQKnISUrF17rcL+ZIwtXi+Cw+gENA8AHeezjn4QqHvD9C0S/ggodihhIhYuzahu1Y0SsvH0DaEGbv+wkcuuETmQiDJQBBwQ8sfLOACgJKGNqUHGQY0AFQugSmXESbAg4BpFwcgMBgjuD4EOB9iKZlPezIIl8boRgV8BKghQEJEOF05+prsX/huy8jQA3B/ut+DxBeFQ4AM4QCwsjBrRdQDKiEQYmBSqQESAEqRFBUCUz1dwVODSDhAA6MwCU4geG9h7cetnAoBgWKXh7f4wBiBnGAZ157uPtFvKwk/cN/+a/w6I0fhyAclOAtKZMKKbD3CAOLIEDIGCoRUCrR1OqmRXWAMAFJOILNjMAlOMwIpfY4H3nOjizswMIVDoFD1DJmgH0RKDyd0whvvedfv7wcxOIhFL4j7E+Dw04hBbCG2ABmB7EEyQA4AInEGEipGjg1DVLla4ngcAgIzFFzqmcfomkVDja3cDZqjueSq5gR2J0I8H8toi5eg4gIIkI7tm9vZWk6q7XuElGTgCYRKRFxIjJk5kFgXhuORqvddts/fehQzFVaFsHkz6DX+AaF9F1MBGEDYga8QNgDATGHSgAYifmYqgNUpSIYa5CEMAYohOgdPXMkZuvhrYP3HoFDqT0eVJK5Z/9gLxkebkljg7Dbt21rZGk6Z7TuklKtUkYNIDDzkEUGIYT1vChWrr3qKvvV++8Hvfqaa34hTdO/kSbJlYkx27TWs0TUJiAlIhKREJjzEMK6D2HZOnfMWrvfOveI8/6v8zw/9KVdv+Aabf2exLc/43XS0DpFK2kg0ykS0kiVgdYaZAxgKg+2GaBykUQtKAnZlbzjOMB5H80rBNjg4STAsYMNDiF4JByQhpCPZPjegsMfv+/4p9Nmo/GKLE1fn6bpvjRJrkqM2WG0niOiDhGlpRIwixQhhHXv/Rnr3HHr3JPWucfoR2+9lRtZRmmSQGsNpVR0KFRzKyJgkajuziEvCvSGQ9cfDA6P8vyeQZH/yc9MX/fkP2rc/Cmm9M1BGTRNA02TIVUJEmWgSZfco2vunc4FpwSIQwTEliA5ri0JsOzjCg6ePcAeDRbo4L72Vbv/Z35/cM8ru832e9ut1o902+2drWZTpUkCY8x5ZRQgxnHew1qL/nDIZnFu7vkzeiJoImilkBqDVrOJ2ZmZxFp7RX84vGJ1ff3df9Z/8sEGN3s/3byRiURVXg3EICnzMCGA480g1LSHpASp9GChioMiWUMYIgIRATMjyIS8ReJ1DAsy4f4D9pk7/6B48PZdS9vfszA7O9NqtWDUC+AiorhXxiApZZyZmqILJmkCkKYpZo1Bu9VqTQ+6t9y5esi/NuyhN+orUZSkqchEAERq3yw9mGDyfqiS2goUicCWwMQ4q1ylx6o2QXFAC4QD9tmDv5/f+2OX7Nixb2l+XiXmInxQeV+mFpo9Z6FIzgs8IdEa3XYbJjHmzuEhvMbvQVMySPAAJSAqE05VmhCodkKqnV0mib/Uw6IIkNQAqsAhZjRA8Jz3/7B//2w209q5MDtL5jzgyIuUsVLqLU9UX8+pTUpBa41GmuFIZ4B708NoKgMtpRcTibGNyKYT0rkXPCdY3GhezBEoKlcigg4IfzH4dvqd/PiiVpqI6LyyvFgZjYhsiahsUjV5AeVIAsAEfDn7Hl7F2/AKXkRgjvEJFEAlSBvOVrtF2ZRmiEAw0R4p0wjiaIaaGVOk8SQfxxfyx9PcW/QHA3jvUWnQc1nGZhm3+rwJIYxNZbMNjrVc5HnJrdphCQHPcg9/pB/BB3Ez5rgBCQEEHQFCqKUVW+xjHZxKc6TUHGYQR25SwmiRgjcWd7eOgQsDv+axuraG3mAAbUyUSWR8j+fIWJNNNgE1BshaG09QnmTs+kqAxicQeR5OiwA57+GDxzfCIfypPIKfVTci4TLpJFUj6TKaHm9DyVOlKVbAyNjEJmalhJGA0NGELzQP43BjgOlOFwCw1uvh2MmTyNIUxpiJxrwAGetKMQaosHb85vgEG/hRJic6D8obXHAtPfgzPIK96Rxu1dfGwhf78c2elw0kuvVKa0LMzKNXY6nKGZhWBg+lR3Bvdgw+eCRaI00MBoMBTpQALc7PRxcfs4Xzyhg3BKU5b5TPDEajDR6JthKghvRmlRy/zwyumwUzcinwqXA3ltozeK3aXXJRGQCpOiFsNLPKnQdhMJfaw1F7tAg6ZHAoOYM/z76HATtwCBAAaZoBAPqDAQ4dPQbvPaa7XWitL0jGCNBwOI4siWisinVe2uxFuKZVW2lS/e9n/DI+KV/CR7t/B5fRbAlS5ctVCVJ8LSUHMRheQqk9pTsXhhZGU2msmgE+l30XyzQEAsok1kMrBWMMnC3Q6/dw9FlBYS267XZMdeqmtknGKluo5BOOpm1W1tbQyLJJmlH/8jhjF4QQNn4ZGD9TGWUT0XgXyiQYBODRcBi/TX+Fj3R+FPOcTUBSunReAoaAS23yEgGqNAnCUCxIScHqAv8t+Q4O0ArAKEsgHtY5iAi0Vmg1Ewysx3qvBw4BhbVot1owdRlrDqaSsaKIuozm9Nmz6LTbaDYaG0GqtKD8coVoXf0qwIhocvF62Fd9loCv9B7HlGT4cPcd6AaNwAEkDCFCgMBjYrqVBrEEoCTmlAAmj8+Gb+EhPgblVcxYOMBai2GeQ0SgiNBKUzTTBCuDAoPhECEwrHNoNRqTXKyScZOFbJZRE+GOwvlYaCqFDvVVlRxqHDN2weXnZVOsJHVVLcENzPjf+XGIguzL9oJYyEmAh8SsXBgB5ZIQ+acsnCUAUk32D0cP8BfCfq2NGd+bcw6jIgLhytdTjRTdVhOJJogwcutQWIcqpOEtZNtgITUZ9Y7Zzh0hBOTWwjk34ZcaCJuZvR7qhVKFxya2iYOkxlVeAh4fHV3b17r0/j1mZqdjb6yEaFKoci1BwMS9GwKaWtlnsPz53zj7pY7OkjmtVCyFOIfcWozyHNY5cIhhRreRYG5qClmSIEsUEk3w7MdAVcpwvvusy6ivvXT3Ha3UIFE0FrawFs6HiXacJwaqAMlL9TZanzcEqFbOjh/Lj/7KT83e0Cfgei+BrES75zFRMwiCBISWVkJGPvOLpz7/mROh954sTadEBM45WOdQWAtrbdTwsjTb0ISZThutRgOtRgPNLEUrMUg1QTjA2vJ73iMwQzhed6uyhlmYnoZttZFbi7woMLQWI+uQV12DIpKZIjXOucZLRV+tlMJwNIIp31dKlf/DOa6ThBr78+Ok2u1fdf21bQ3SP+Z8JGQSGldAUlJoagWn/J92W63bvzU88qpmks0658aaXhF0KDfSewdnCxSmAQKgtUKaGjSzFJ1mCzPOYlQUGBUWQ2uRWw9nc4zKLIdUvHelFIw2UFrBJIlGkmg0myk4tGIFz5dFI+dhy2cXfKzsBQdvCxRCENIwSYLEGBRFjuEoR7PZgC+KSPq1OsxECYUU1MyHnvr0qV/b9a5/2qG01Ub6tpG3kfBBSIjQMAZOh79a1fmHP3jwj5cT0lMQySpvVa2qwAUAidaYzgwIMb0wWpWEDBij0Wyk6LZbsW0UPJwLsN7VZCyrl8HDOQtrAUOqLBQhjqckYsqLo4xmpUZqMUJ23qOwFv28wNAWCGTQThUG1sI5jcFwCGZBq9nYsszCzOmf976N31R/7+kR+Bcb0J/qSHJjCAxVhgyW+OvrMvqltksP3js4gMCcKKXIh7AhBvMhYL3Xg9YazUaG7XOz6GQJsjRqgCqbA5X5aK2RGA0gLYPQiXzMMin1+qgcRivaQDExv4sOUEOjlqaMqTm619ifyguLwjNyW+DU6hqG1iJ4h/5wgDQx0NpsyJFZWJi5JyTofPGncfaGTz7RS/UHmkH9bgPJTUQKOYq71zD6QFOSJ+bu+zlctncvRISZWTbz2yjPId4iIY1gBUALnWYTSaKhVC0YrMUfVQ4bKZMgopBskUqFwDD7D5/AFbuWkGgz5u9IvhtPFmNHgvMeTx07icEoj7uWpphuNzHb6UARcLo3RIoEZwcFRkWBTktDqrJY3K3AzGeqmzjYP4m97aVHT7r++6d089e1EHJxH51Vrf2H/HLZ5BAAyFmEwawraUMIyPMci1MtzHc7UEojSQxOr/fRz3MMiwLeM5pZgldcsh3NLB1v9JYyli+YGU+fOIWV3gCGmYEKgKpuPPZQtRNgEvSJCJQieB+wPFrH0dNnARHMdtrYvTCLvMhRuNPI8xyNLINSarw7zNxn5pUqF9r3+Mfw2Zt+Hu/d9wf7H/7mh3829cA/f/rzo1++5O34kSc+WW6ZAMA6RIYCmhaJmf8oz5EqwVSrCa0Nnl1Zw+n1PgAgTRI0UgOj1ZgyxjKWFc0q8q/kH8soMThWRKCffNsPy/PWJrcu15YaIRhZizNrfRw/vYJLFufRTA2OLp/G8ZUeWu0pNMqdY2F4759ikbcT8MyJkydfUHn40kv2AJBXEKkvKqUui9zj0e/3sNBKsTA9hSDA0dNnsX1uGoszU2g3sxibKRpjcgFyitlYbaPJjtF5TlYjPFIEpQhd00Cn2cCO+Rl4H5t7s50O1ocjFM4iTZPS4zAC8xEROaXoxYxHCljkWQU+IUKXEQHWWjQ00G6k0EqhlWW47vK9aDYSaF3llFsD85xyyqRMXnXEQeVj8wnq/6MaMvWEtt6kSIyGMQpaKzSzDDPtFlAOH1QFMIjcC6UHz1eA26yxmqgvIo+KRG8aXIFOZqDLuEUTwRg9KWPQ+boxtOV7m2Ws5FIYFxo2PiaAnv+9zWpaZfXVTbcbGVJN8OVgVfC+D6J7SRj6RbRkiAguBGaR+3wI3joHJVymN9GVK6XGfUjUqOYcAF5wWys+1HN96blOuuF/tcIXEcqbJWitkSUqFrTYQ7E7TBK+Q+xx/MSJF3yzB48cBnwOuNGBUAxXnbNx9qE0o/rzVvwi53lUcjyXEpjzqd3zqeXWxB0vxsLjdCPRCuwCmqlGlhjPzCMiwrMvso+Xxt7aTCPRzZ4NEysg2tivqPMOnXvvsgUrVyBtJbOq3DidM+V1fnXfvFEEQKkYPxw+eQanVtbHPKVJAcJINIEAHVjiqN6LbnQKmBGISJpGbWyMAHBlTkYbmpJ4Tr45H9fW3zeuDK0L55GZmNid77DBYzAqkBqDxMTEDgC8D+gNRzi2vAIRYO/Swjg1IQIMCRQEgWUoIr5WbXixneDTgbmfGNUhqA1ll/XhCEfPnMUVu7ah08w2OJF6ffQFOYdKYQQwjzwV53zajQx7ts1v7ARvgf7K+gBnewNUUT+VgWNqDBZnpjDbaSMExnCUx6EmAM1ElTVfPgrAXsQ80wlmXlWKtmulIkuUedR0uwXPjCcOHsNct4256Q6yJPbGAjOs8xgVFvNTHbSa2XP00oEza33k1qGZJTBX79mJNDXIjBmH3HXkaykYEq1x+a4lXOIDcuvgfQQgSwzSJInz3i6ME76qvmuUKmtL2J8kOveeLwgdEawR4aCwXE1EEJYyyYxtod0Lc1iancKZ9R4OnliGDwEi0fyzNMHidBdpYs5t0G+qlDWzFGv9IU6eXYPpthpblCQmeQnJRmITESRaI2nqDWF5LHjLZAo1TOo0Zb8pB/DwhYIDAGfPynBhgR5jkXeomPiOJ8wCM5wPaKQJLt2+GHkpBIAAoxSM0ahA3WxKMm57o7SmFFfs2gYWLnvztIm9CecGXJuBqjfcIoHGAC7EecHJ/M4YpMMAvgkAT59cvSCAFhYIAL4FiBUgraJzH+pAKahA0FohS8zEk8km/qmFBZtBqlcu1LlBvWyZYmyOESbglF0PmdSMqrpRGPfQAAB3iuDohWrPweW16s9viOBAdd3xFGwoe3ZBxoX36tpjLd4i3tks+/ghdYBkMn3rXbzIWHkkagYHOcd2qfxA5IJxrgUfPHyY1LQFOADQf1Za+QvVnmpn+2fXniGl/60L0gshFvp98AjBl9cPESSW8SzExpZLlDEE3iAPB0EIm8ZzpK5BAjALBqMC/UGOonCw1mOUW/QHOazz52S/1YBYHIiXcU/eVVOpgbE6sLBIHr/q6td8d3HH3osayT24vIY9r3qNzG/f8+CQ1XBYxA5FVSKuysKV5nK9x0WTBmFeWPT7OfIijhHnpYxF4c7pT5hJMSw+e+9xenW1LNQTmAVZmmDb/OwEG64Fb/WhhRDJuZp6L5xH7hkLnSnTbLbUMC8uem651WxCKTXXyJqt9bUh2oGhVNyUxAcEHRBCbCgoEoiu1bVKjg3MOHV2Bcwx4meOHZlt87PnaKyq2yMpQqfVxFS7DWZG4RySxGBuegpZloxNjiuu4Zp58aReHV08I3eh6hQ0R3me4iU4yvBhZ5qYVEjDlu2paNa+/LnChP+Eo7lx4HHs1m42MDc9Ba01rHNQijA73UWzkZ6TJRhILCKO2y2pwdL8DOZmpmJdWuuyvrLxdyY+cJwoqxW6JwD5cpYZUFpDmLve+waAtYsFqLAWaZLsijOkGYrgkZX850JAEjxM0PAhJsxkJtVRpQCtCcYozM10Md1tl1pE4xrSJHSJKmREBFRDKOZPEZStcjOlCEQqeiofEFjic6jzQEDuGEIKRmsIMBOYmxcLzptvuAGHjh7FtsXF3YGZjDHgEDdLq9hEcFpDawMdNDyFMs9U4yoDqYm5GaO2cuRlfToOUxjmOFKq6xMd56lRBmasrK+XxMjQpGG0hgsBhXew3pWEySgCkCQJ0iTxWqlOYG7LBSSpmxPlW2++WT382GOOiA5kabrXOTKWHQwHeFZw3kNrF2tFqLoWAUqX89gByNJk8r9a2aNy9UTVeLbAOB+QxP4oSNG44r9pDBGBBSeWT+P48hkwx4L29vmFmMQ6C1u2gl3wsEKiTMLtVkt12+3fZeaHIHLqYjWIiLDe74v3/rfmZ2b+q4j8l9X19a5SrWbI+5f7EGDJl/WoCUDWW5xaWSnHcoCdSwtYnJspf2dMm+K7ifMJgWGcC+PoWaMcVyv71EQU3WJucersCk6dWQGLQCuFRprBaA3rHQrnUDgL570I1Pr0zOyDw9x+rdVq3jI7Pf05APff/cADF03Qd91/PwDILTfeuLJn167Vpw4evM2HsNJqNm85uyIfCsP1GU/+EuujB672WSkNYcGwiF708InYLJibnpq0yGXSJmcWBM9wLoDetu9aSYxG/B2DKjmmKngThnmO3mCE4SgHMyMxCVqNDATCqCgiONaicBY+8Ld1kv2LpZ17H80dH1fipxtZNgJgXwqAtuSlH/ohKKJmrz+YWzl56Eal1H9MjF5ITYIsSZGWrXFBzBNHeYHC2ei5prqY6VbZPY3B8T5OiTjnhf7ma64WozUSY5AkJoJEkczqnQcRQWEd1vtDFM5tmGgtnIcP/mlm+SdK4cvMF55vXehx2dI0REQrpT6gFP0bo3U3NQnSJIFWGlmaRIchMa5rZCl02btXNAEnBC579h7OO9HbZ7t38KYRlarGIYLxl7zn2J0A4iyR92OvFTjsF5Hbrrlm4X8tLw//n4MDAKuDArOdhgB4FMBQIDcIpFHlVrHCENDKMrSaDWilQSWRR62ROLhQDmw4F6lDz0+17phMhJXDCiWalS1aF6cfinJgqZqIcN4Lc/imsNy2d/7Srx44cvxlAacO0lynGUTkm0Q4JiLXi8hMJGdVjgnqGDQGnmiMD/GHet6VskZOza0FXb17wWultdHRZRutkWhTzvJRNY1RBoIRpFj/Df3A/N9F5OMLU9n3nl3JcfDUywfORnObgYgopeiNStE/U0Tv0Fq3jNbIkgSpSZGYSU+tmjWqfjhsXRmyhOD0TDtbEeHpwLwYmE2s5/iKpFBYi9wVyEsidt4PQuCvs8ivisjvENHJ3rDAwVNr+H45Vgc55roNIaKjEPxPgTwuwCwzL/kQ0phQ+zLyd7AuyhZltSicy33gbzHLb9HSVAdTrWQJhBsJ9BYiuo4IlxDRVPmTTIagJ5BDLPIIgK9A5AGl9IoLHk8/u4rv5+PybdNITQIfwgwR3gCiWwh0vVJ0KRHNEJGKFRseiMgREXxHIF8VkfsCh2fHbuqybdNx+ovUFIGmQEip/CkcgAIi68zcA5E8fXIN/z8ely51IQAZpdsEmgahUQY0IhAHwTqLrBPAB06u4gfHD44fHD84Xu7j/wCz6BuUNeEgqwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOFQxODoxNTo0MyswMDowMAD6MqAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjhUMTg6MTU6NDMrMDA6MDBxp4ocAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissDarkSkinTone.displayName = 'EmojiKissDarkSkinTone'
EmojiKissDarkSkinTone.defaultProps = {}

export default EmojiKissDarkSkinTone
