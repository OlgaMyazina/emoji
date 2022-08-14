import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManConstructionWorkerMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-construction-worker-medium-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAwspfq727QAAAAZiS0dEAP8A/wD/oL2nkwAAHaJJREFUeNrdnHmUXmd93z/P89zt3WffpNFibV5kW16wCY7jEGOXQshamkADaUgCTU+zNGRp0jY5hJxmO4QDoZQlaQghNJCYnDgBE2KwZRvb4Hi3sSVZyJZG0mj2d73bs/SPe2ckmfSclkhC6Zxz5847Z+ad+/ve7+/7W+8IvkUfj3/4KnQaR42pzXu8Sn2f0eYqIdVO6fk7HORW54dsnh20Onsq63cf7y6eOKJ8X9/0zpcu6HWKCw3MVz+wm3ww8Jozm19VbQz9WHV05tVBa2xChdXA80MlfR/nwOYZJkt0HvfStLNybLB26nNxZ/ljcw989ZnRPdvdK3/+yP8/AH3593cwWF1VY9sv2RNUqq8Jq5UramPj310fmZwJh6ZRUROhVHkxDlxxZQ6BsxaT9IlXT9BdPPb8YOnU57M4fTrt9+9+6nNPHJvYUXWvf8/gnydAD753J5OXXUn7xLHJ2tjU22rDYz9eaTS3B5Enw3odT/mgKqCCEhFbHOtXJgQ4CS7HmZg8G5D2OmSJ1YN2+6nB6vIH+osn/tKrVLv73vrwPy+AvvjrLX7nXW1+/1OvfkV9YvNvtqa3fldtZNxT0kC+BkJCrkEGCKnKS3E45xA4HK54I2dxJsa5DOF7CBQEE+SZo7d0Mu7MH/tUd+H4b0xddt2RZ/72T7j119fOqR3qfIDz8Af38shfHBM/8we33z60eeeHRrdf/sr66JSUykHew+W9Ag8dgzM4Z3DW4KwuX2uwBmwGJsHmPTAxSHAmR3pVVNggao76fqV+tRDiqtWXDj6+46bbF964b8BHP7tw8QL02B9exy+/40l+7g9e+91Dszs/MLLt0t1RvQU2hbwLuofL+wjhsFmvBKV0LWtLYAw4XbpWijMxuBykBKMR0kcIgZCKoNYUfrW+Hcc1yy8efGx4duf8W78z4MN/feLiA+iRD+5hau+N3Pq64W8f3rLzQyNb9+wIqhXQg4I5eoAzSXEWBpt2cCY/A6CCRc4VADmbg01wOgZ0wTqjEcpHrGuWcPhRDb9a3+ysuaJ98qX9UWNo9QOfOnRxAbT/3RMMz07TO3VkdnjztvePbLvs2qBWg7xfgGMSsBnOJNi8C8Lg0g4YjXOAcy9ztXzj59cBcgLQGqEChJDgHMIZEOBFNVQYbnF50mjPvXDPT79pd/bBO47+k+2S5wqgyvgI7/+hr4jG5NTbm5MT3xlWAsg6kK3h8gGYtDDWxDidYHWC1TFWD3BmgNUDbD7A5nF5DLB5H5cPyp9JsDot2Fe+xiaFNuk+mJhKs0ljcvpNrU1bv3dsx24e/ci+f7Jd3rkCKKxXecfHr56uDg99d6VZE+hOAYzOC5exBmcznC4MRvmFvliJcAKEBSTOCRAghCt0yGY4m+CEwkoBJkfqPk4ocA6UKVjkDCKoUR1qVeKh1ve9+JX772hMTMUXDUDVZhWjzY4wUtul6+PSLugcbJH8OWsK1uR9rB4gvAisLtMeUUQvJNYJBA4hHQJdalGG83wwAmtyrI5BeCX9NTgfYTMgw5OCIPKubE1Pj/tRePSiAajWChi0k+1KxnXSeTAOrMDh45zDWoM1hVs5k4D2CkE267mhwSGwtgRIOAQGMGU0kzgkmAxrEoRUZa6kEdLDCYFwCoTCk3rM89WM8sTFA1AUCdKOHpJ2IMk6hV3OxxFhXXHnnclKFuUIT2O0QRhXJMzC4pzAWYETrgTJIjAFuJ5BIBEmx+YJgkKkJQYnFEJYnJMgJYLcV8o2lTAXhwZ1jn0URzQxMvrCqzFHhE2fQ1iwRmGFxiExRmN1VrhIrpGBKZmlkcLhXKk/rsyohS10CIt1Bs/5OG2wmQEycAJnC9d1OJQ0YBROKrzGztr4FdfcRm3f/d3jPxo3Nr31WwdQFn8ZIYKWM9136di8Ye6xe5hqxFQChdUCi8M6rzDE5DhjcbY4cBbrLNa6AhghCs0SRdgHB8KVJci6llmc1gXbHFhrQBiENCgn6fQ1PWpy6vJX/RQqOqWi696ns0dzL7juwgPUXfgrFl86IUYmw5/CdN628Oyn1NLcCzS3NKgoU7iLA+cszq1nyQ5nCkOtA2tckQMV5ft6BVYUicKVZ7DWIbAFa4yh4JZDOoMVGimLfKrb1iwsPYIfVmvD21/3qzrrHfE8cce3hEG9g3+GzV3Ub6ubTXoqWDt6EGskcWxwVYOzRVSybj1RLg20DozBGIcpRdpRahCw/lmUpBICpLUoB846bOl661FOCo0VGowj7lvyNGPl4Jfwk5PDVjZfNb69dcfKQ7cw8m37LyxAnl1CSRGJ3Iy7tFNELevIM4M1AmvAWFsYbwW2BMdZsNqgc4vWbgNA59x6KwgoxFtIkAJEbosq3xbMcdYiHTjpcGiEzHESsqzMxo3ApctIfzB54tmO8pRvLjiD8syBo+k8hqxVpXCWhucCY0QR7a3FWnDGYp3DmiLHifMyVbIFMwp3LJxMiIJBUhVnKxwOA9ogpERKENIhJSjpENKCsOSZxRmLcBKtBdIxbvMkynLXv6AAfWgf6CxHJ2a42vDrSkmUUniBh/aaxMLDegGWsAhMlDljYT1xkrO6tLpRh+FOM4jSzYQQJZ0cKjGMTg/he6qIfmWdZBxoHJqkaJP4KUo7lCdRSqJzMzJYHdS9QF04gD76Np+H78rF7sPhlTNbx36hOTo6FtWrbJ5pI/yYsBLgBSBUBYRXCq0pdENYkrjHyollNk3W8VUBkMAhzgIInBBF21UIshw8pRidGcfzKkXS6MrkEcBmWJNS3+XIBhnCNlGqRn+1c2nWXXnnkcPzH3DunqN/+Lbb+ck/zs9fR/H+/3k7awsH1ezlt/1gc3TmXUNTE5dG9SqCGJEvQHYYz0uRXrUASFZBBMW9EAKbx3ROHaI2GuAHEsygaIw5y4YYCQrxWT9kCKpC0s/I+orG5A6EDMoUPMfZFOwATIzOY4xpIqIdOG8U63wG7a5dO7XwYHf5+K9c832/+8ADH/sRbv6xL5wfgJ7/uzeRZdn1wyNjf6mE2RqvLZH31tBJH5MXhgqlkMpHSoWQClG6iZSAM0VyqPwyEpmypCjDvTvDyZzAOgHCK8ESWK1RXtHucM6Vkc8VEdJojM4xxiKlAhkg/QphvUXYHMYI+eDa6uIbhZAnrv2BO8+Pi+Wriwghty+dmptcPnqSNE54es7w/HHNak8TBSGNMMBTgsCTpNqw0h+QaYMnQcki35EIxoeaTDRrGyH95R9Fpg2n2j3mVjqF2BdQ4pzD8xQTjQrV0CPTFm0cubV0k5xQWXwluGxKsHdGEdZChmentlcnJyedtifOmwYtHj6K9Lx/iNvt57sr/X1xbPjioxlfO2FQSjE7WqNV8Qk9hacUT84tstDuUw89WpWAZiWgEigEAt9rUFH1ki9nI+TOyJ5Xe47FtRQcZMYQp5p2ktNLU8aHPC6dqJJrQ6o1SW5ZGTi6g4RAgMg8tjU9jINgee3hIKy8kKfp+RPpNDYsHTx4ZPSS6V/zAvF+ErYpAYESTAxV2DraoBEFVAKfwFO06hHaOcYbFZqVgND38TyFlBIlJVKKIlqVof0bGeTYPDXM9btmcc6ic02Wa3pJxnI/RQhBTUniLGeQ5fTTjFro8ZLJSbMciStkzOOrYN899+yz3YkdO88fQP/yNw/z2V+dJIrEZzOtVr0K7wp8/Z31ADk11GDzSItmNaQSBgShx66gaHekTmJUSBD4KJdTDxWValjkOwiEXAdpHZx1FhUpQJZmtPsZAy1R1lHLU2Zdjq8kSZoTpzn9OKU9SFjpD+glMQtrOcoTcaWqPqV8+Tv3fPKl52/5N5u48T88en570p+8v88rd1zt/tffP390ZHhH99CJ/u3OusrmiTG2jY8yOtxkqNWg1aphhEKMbSXasoe+s3QzSzQ6TXV4kkjk1GshYRQQRj5RJSCqhIRh8ToMfcIwQEhJ3x8mbc2wisdcO6UyOUttfJp80GFiuE69VqEahoReES17gz5G50gvenjr9OwvLK6Ig79yzxofv6d7YXrS3YHPrdffuiOQU/+5VW2OBL6kUQkZbjUKcIbqOKkY23sTI1e+iuXVOW6+9UoefvhLfPITH+NEJ2V636uRShEEiiDwCAOPMFCEYfF14Cs8KYgmd2OGN1EJ1rj9tus4+MR+PveXf8JAKHbe9kMMVESzWWdkqMXY8BAjjTrVQNGqBkwOTd/Y6U/8amtob/2jb3/dhWvaz692Ob7Svtb3/au2TIyhlMRXkkoYlXddUJnYyr7bvp+77/osjz60n68+/AjznYxOMuD5++9AjM4ysvUyBA4pBVIIhJBlmSGK70V1xq74Nr70hc/xxKOP8NQTX6WXabAxcw/dwcwlu5h9xW3kDoLQJ4pCwqCIoo1qxJ7Z6aBWiV4zt9DZ2e6lFyaTBji51iHwPG9qWDPWamEtaGORSiCVwAnFtutuQVVqdFZO8eiTL/Dgk0eQQlHzFdOtFfqdRXZsv4LeiefOil9ninR1dBOy2mJtZZnHHj3I5/c/A0IyWlFsH1sj7S6xa98NPHXwK4ikV4IMubFUo4jRVoO1bt8udHoi8NSFY5AnJcbaU51BnFQrEU5IkjwvC04IwpCR6c1EUcTuHVuYrVuGIoWv4JbrAl7xyi1MzGzDD8KNEO/WG0LuNEBefYShkXG2bNnGTEUT+QIl4LtuCLniui20xqaptYZojoyUSaZDG0sv0QR+iNaW+bXOiX6anugmF5BBtSgky/VcexAvjTUbDc+v0M9M2R0EpzPWvv4kjbEp3vBD/xYx/wRB/hwz2ypsu3o3SePNbN15BYtP3Y11rowWYn2HYSN6WZ1Rr9f4vrf8O/anh2kER9m0o8HOy7diRn6c4bFNdI8+Q95bAwTWOTJj6OXQarRY7vZY6w8ONKLqsjtdLp//yer126fIrdHamNdXg2BrGASEQcCmkRZRJUB6gt7iMXrzhxlq1Nmy9yaq4ztpTe0lmngDW7ddQ/fIo5x89iGsTjd0R4hyClSSKeuukHaWmJyeYXL3K9HRJlTrSoKRf0G9sZmlZx5g/sn7yJMB1jiSJKM7SEBKZkeGWOp2GaTZny/3evdPtpo8cGDuwqy/vPXmyxAIqa398Hij/hOh7yGEYNf0BKMjDYJqgPKK/EZKgR9GeFENIT2EM+i0qN2EPA3MRj7kTmfRRf/IglDgRThU2abVmDzGmWK2ZnJLnmhW13rMLa2w2O5SDQPm253EOffDcZb/9ae/8sKFczHnoJ/GNvD8Z7pJ4hyhUEKiy6ZYYaHciEo6z9B5WrY+xAZjXNlQM6bIeD1VjgO1RQBSSYSURV877+McG20RKQRWynIAULilMZasLDsyY8i1WfSUOlgJggvbkw49D218gMfTXK8JGA49j0xrrHEbQwlXNuTFGRpzZklhrUNnxegmjHwCv+gfGZOTxTleoPB8VTKqFCghTge7DVF3WGvR1pJrTZrr8m+7A4Gnjn+zzvJNR7E/vPfpckdHPGOsfWqQZsR5TpprjLFntS5OtzA467Ur3Sfpp5jcIkRR7a/nRHE/ZdBNivf7P9HYuY3IaYxFa7PBoFQbC+Lvjy+vdZQUF5ZBlBQ/1W6vjNTq70t1PoYQW5I8b2htsMYhPUqXKM/i9PlMBrXbA5SSgMNULM45Br2UxeUOtWpItREVnfszcNkgzzpLrcNoS6Y1mdY21XoRx1cDz/vzRiXiQ1988sID9IkvP88brtlKP83uFIJHAk/99CDNfikrWaTOuMPiZTFhozlf5j8HXjqJd1xRq4Q45+gNEpyFPdumz/qdDXDc6UY/JRMzrUnzHG3tYqDU29px/PBn5r6+8r3TW791C1QH59scnG+7a7dNdAA8pX6gVa0ElTDA89RGlAI2KvYzq3YhBb5S5KlmYbXDcrtLd5DgScmm8WHGJ1r4ofcNAdc5VwwhS+bkmabbT1ju9ukM4n/wlfd7zUq09tgzCxyYb3/rlxcqgU+uzTNxmh3oxsl1Q2mVIPKKskMWo2Vri5prnQHrQ8FKPWTHJVNMjQ+RJDkORyUKqDUigshHSvGPs6ccF1njSFNNnGb0k5TcmAe/NneovXd298WzYTY7NsInHjwwnxlz11p/QJxm6MxgbTFNXRdta882VEqJ70uqtYDRiQbTm4eZ3jTCyHiDSi3A9+XZuuMo5vPObczYTK5Js4xektBP00Vj3V2XbtrFH9/3tYtnwyzThrd8+2VY5z7TiZMfbQ/i2WolxPMVQhYNdyk2Ki5wYKzjyUMnWOrGhausj6aL8IyURYi/dHaMzePNjex6fXztTOFeaabpJxlrg5hMm7uVFI9KcW7u/TkD6LfvfIh33Ho1ubFPZVp/eqXbf2erWiEIfKQnyx2gYo68rj9SwFJnwBeePEY7LRry4oyWYuh77JhosGd29CyRdg6cKYRZ55o4yWj3B3QGyRLwRw7iP77v2YsLIIAP3f0lfurWVxsHH+7GyWtWuv2rw8BHKYGgEFp5OkdASMGt1+7kqh1TfP3kGkcXO6z0YpRSzIy22LN5lK3jdQJPFexypzXHGovJDXFcgLPU7TttzSda1ej+l6VdFw9AQozyztfdwFK3fyjwvN9e7vX/RyUMhpSSCCnwykpUOrlRCVoc40N1ZkabRQbtXJkwFmVLnltyXewdbICjDTozDAYp7d6AU2sdeknykJLyfe1Bkl06M33ObDrnm/YPHTrOa/ftpBKGB7M8D4213+ZJpZQophhivaWxDqorIlSuDVluMNqhtSXPzRkZeeFS65qjs4I5a90BJ1fXWOz2jhjrfjbJ8ieqUchv3/ngxQsQwJcPzPGqnTPGV+rxROuhTJtrpRAFPOUU4xtLD/GNzQV3OpQ77TC5RaeawSBltdPnxMoai53ucWPsz0+ND30+zzUf/iYz5gsKEMCXD87xikumUyH4SprrVprlVzuHEk4gTm/WFYprz9gPsmcfhdZYdKZJk5xeP2G53eP4yiqLnd5RbewvNCqVz/QGsfvwl54653acN4CKntHVLHX7sa/UA/001b0k3ZdrHTm3LrSujEau2F0sxdfqQoBNbsgzTZoUrGl3Byy2uxxfXmWl13/aWPtztTD4myTP7Ufueeq82HBBnjj896/ZhxIiTLT+HinELzai6NqhWlXVo5AoKFocnqfKhrvYcDtT1ldJltNLUtZ6A5Z7vX6c5Xf6nvqtlc7q01JFIvQ955zjm2mIXRQAAbwJuOqhD3Lq3X80e2Kl+1+w9idHGjVRj0IqQUDoe3hSbgBkrSM3hiTP6ScpnThhudu30g/ec8WuS35z7tixzsf2P/MN4+p/NgAdzRy+j9D7Pzt8/OiRG++da+9Vm294UQzvvPbQPX96y6N3vPfGahTIehRSDQNCz0MpuXFB1jq0LRg0yHJ6cUo/yeyu7/mlx2Zf+cbPNU7de3zGLQQ3jIX3nIomXqi4PL35TT9+zu3wzvUbHjl5H3JsyEvv/dNdyYn517ve0huq3aVrjn+tXetks5me3holzauciuoi1wP6qSDNtZNSiCLCnT0ds9aijcVYjV9tyWR07/Xz3fS6Fw+8oDdXvi5b/vhcLWvfq4Yn7/j6M3c80P/yb63u4h6idzQuLoAOLXwaL9nuafXo1a6/8BbH8ve4ueWtMl+TTdNlNI55cf7FaHzbzfTG94qhq15P/vRnkEqc3vLY2BMSGztARTPfIWWAf+0bkdN78VkTCycO+5u3zuGvrWx13daP2uzED3Lj0a/U3vTmj8+n93724Nu95ehQzpbd4lsL0MH9nycUt4j48T/bba/8/E/gLfyw8JY2qUpbiHiAR0ooMy5vZtw3f5g9FchkE/EdP0ulMYT52t9CsoYUAnmGBq1X/tYJXG0Cuff7kde8hfGRFvLUi0SDk2yvJ3jWgI4xeq3uaou3Gm/xJsOp++XB3/tgfuDuvz/0vv/a93/mN9gmLnDL9chjj7D0sf8E/fbkYP79b3Zi/u3qysU9KlgRXtBHjaUIpVHW4AvDpcMW/+gx8v4KO2enOeIHdG/6OfzdtyGP7Bfi1LOIwTLCJAWDvAhXHcOMX47Z9h0wtZfxoRpbRzyefvolZoMOE5ViAV05jalnuNoA7XUi7a3cZlZXbrTHlu4UUzMfNM8988iR/Z/X22957YUB6Ev7H+C+pKFGr3j9a6tff/ydort4k6otBUHYwaskeDLDG9OIukN1LZ50bG7AjFxlbf5FZnZdzWWbmyx2AhbrN5DMXINJuoikA7oEyI8gbCKjOkOVgMmWx1gzJI8HrB1/gW8f0tR8SW7ASIsd1dggR4kMpVJy12/mK+0fcfnarb21xY8/Ljd94KP/7dfmfuJX3vX/FPm+KYDu+sLdqLCy+9Ls6B/sDBe3y2wN3x8QiJhAajw0Xs0hRgSyD0pC1YPLWxn3zR3CGkNY8dg+VWWLtfQTQzeuMsjGyXShO4EnqUWSZkVRCxVSCjIN7V6HdPEwV2wFTxYZufUsbtJhBWgkGo10OSJNMbY7rbvtX15M+/VL3vyL//GTf/7p/LwyyDnHZfuu51U3f9eNO81Ls9FYF2Fi/DwjzHMCDB7ghSAmBeK4RCiBUHDZGNw1f5Ak7hFUAiwCz5MMNyQjTf9lnYHTHUS7cTg6y6eoxPNsG1Ygi1JAeeDGivVOD4vBILVBOo02KY0sZu1kfNMXP/WnY2HaPnleW64fufMJfvdP7m+sJv6/ksmSV6FNRfSJTEolzYmwhIAnQE0IpCcQSoCU7BpV+N1jtJfnMeV01EHxXOE6CBSHceX3yp+xDnJtWTx+mCm/y3hdFc/RSwE1gRguoqAHBFgqqaYiUypiQEusMeh1Lu2a1u3v/e9/x32PHT5/AD17vMfjzz6/t++qN3q6R1UmRF5OxVnCBDzWq3UJ4xLC4ilAhGSyLhkXbZaPHy5XdgvDN9i5PjBdX2DgNHty64iTjJWjB9jZ1FQCsfG+NCXU5cYvCgteHyLPUlE5VRXjdBr1RfNf/+09f1M/eLxzfgB64qnnef+9yyy0BzelqjpqXU6kDJGCAJB9Wb5leQwJqMmNR3aakWRnS7Ny9HnSLCc3Dm0pDgfGls9eWMhNebaQWUi1o9fpEC8c5tIxgVAle6SEEQG+OP13jUTEAqUEgQJPWQyOzKtd9+iBo3teWhrgXHoeADqyyvO/OBX2c663UUt0tcRTAk/JYrO9vQ5OebEVCa3SCKkQnuTScUn/5CH6nQ65cWT2NCCZhcz8I4eGNHesLZzE653gklFv4z2REkZlEQnWAcolxKpQcU9gJcQuwAbN8cWevuE9+9e4897nzr1IP3eyx7FFO9bX9Su86jBtE4CXFv+RxUnoloIhSpACAcMK5kWJm2DPmEMdOs7awknC1igW8FU5WRZnjJPPEGhjHHFsWD5+mFHVZVNLFeFLUZxbnL3JkEjIAb/YMNHakcoKfm1IdvPBjYd/uvqRw8Yz5xygzEDPsU0Lf8avNukR4ZQp/02EhJjCV/zSWiGKi5enAZpuCoZFm5W5QzS3XIZBkhtRPMdx5k7CywDqDxI6xw9wbT2nEcnTZXYgoOlK9pQA9QFdWuccOZZc1QgqDdIkv+IvDorReqW7cE5d7PjRI7y4nLHUt7NIv+6FVWIqaKlAqYLisYRMntE+FTBUtuXKmdhIBbbWc9pzz5HEKVnuSHKIM4jLc5JDmkOqT7tXv71GfOoQu0Yg8NxpgCKg8bIGRSzBle7nSWI8clXDC0Kc9KaOtc34C4vxudWgZw4v8Fef65HhbRV+EHhBSN9VyJwoGSIgF3CW9jlouZLqhVG+cuwYhXj+EP3OKpkp9Cc3xf9bys/Qno2vc0tv6Tiie4Ido+Jsd6o6CF/WvUnKkCiLCDqwEu1VUZ6HE3K4l7qp5+eTcwvQ3HIf95CUQvkz0gtRXkjfhSTrj3ELB7k7A6CXGeBOH5eOCkTvBL2Fl8hziz4TpOKpy43DGofONP2TB2iKLttbZ+QCDqiv34AzPvrirIwz1gIto2JTDRlJpWYOLubnVqQX12KevEsrq/UQiFwqz6QEZGb9xoki40tedrERUAG6pzdYLxkWjKoBg/kXMDtegZBFu/XMPtDGtqt15MmAwalDXN6wTNTEGWALaLizO+uOQgs5feMGORgVbaz/OcTYXO//jhv/GxHPJw8kCIWbAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDAzOjExOjM1KzAwOjAwtKphvQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwMzoxMTozNSswMDowMMX32QEAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManConstructionWorkerMediumSkinTone.displayName =
  'EmojiManConstructionWorkerMediumSkinTone'
EmojiManConstructionWorkerMediumSkinTone.defaultProps = {}

export default EmojiManConstructionWorkerMediumSkinTone
