import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlyingDisc = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdCDkneDNgegAAAAZiS0dEAP8A/wD/oL2nkwAAHA1JREFUeNrVXAmQZWV1Pv9d3nu9TXcz07PCbGwjGI2EkAIEjIBoRUtNSgstMcZKGSqJBkMF2SKLGKLGYFwSjcHSRFImpYUZNsEoGkXDIAijzBBQ6J6lmZ7p9a13//Od8997333dr5tmmQFe1Z1+9y13+f7vfOc75//fKHoZP970r7vJj3yquJWKUmrQUmoAW48mbUeRVkEYUxxEiYqiwArDehIE07UnRxulwRV036feuqxzqJcdKF/+Jf7VrlLWelLWSWTRa8hSr7Qttdl1rFVl1+ovu7ZbtpWltCbPj+O5RuDVG/5k5PlPac/bEXut/wnrtZ3lFUc1dt/6j3TwkW+9vAF605cepST0bGW7xyjLOoOUOh9Xfhouf5NS1Md3AQaRZSmyHYtKJYv6Ky6t7HNpbV+JBh1FEzWfHh2v0oFDVR01mpNxs/GjqNX8alCvfs8t9zTrsxO0698+/PIB6Nyb7qPBNcdRY2a8F2w5BQi8DSBcgEs+Hm+XF70LAAVGEdkAy7WpDyBtG+ml09f0Uxmv3793ln70+CGqHpqluFadCxq1bwKov3v4X/74sZMu/Azt+sYlL22Azvv7+6nUN0CR11qhHPscgPMeAPM6vDVSvF6d7iCKBJMFdyVAWUSuRari0MZVPfTmTUN0/GCZHgCTvvnzcZocn6JwZloHteqDkeddtv+JX9y7dsuJtOuWD+aHsl9K4Fzw+Z9DVqw+HccXWLbzMQBzKV4+hcMIQKiMIMWR5X2tFf5qAxwDhn0BMNHmBfydDWIa9SLaMFCiU5lNPS49PhNQGMRKB8H6OAjO6O0f2j24cvjJ3k1n09Su77x0AHrDZx+kY9/4AQfgnG5Z9vX4ezkQeHVHKGndpg6pFJhlHFwboCz8rUea9gUJnThcples7KGJQNOeaZ90EFLs+yvjMHxVfa52H85/cPD482nmsXteXIDO+/RPaeQ151FlxarNCKdLcWE34N7PxFsVAQKagdcBhkV2pUxWT4/sUxyn4OjlSao2ADOo1Ygogj6dsrKXBhB6Ow961KwHlHgeLEGwNonjwSiM7kEODGZ2v4gAXfDZhxBOdk/P0Oq3W5Z1E8LpHbiRwTSQyBkapNLqESqNrEKIJOSsWknltWtIuQ4p2yYHXgahQQjHJRK07gCNoxBY0yy+csJwhTYh3H4959O+Q01KWgwQtijcqrV+FIO1a+jE88k54uH0Dw+Q27+KoubsVsu2kTLURbiRIUnTfb0CTFStkVWpkLtyGAOvhTUWgGFGcTjY/f3kDBssg4mDpAHgPCwK7GqHpo4TUtCiaiOkR6ZatKV/kI6HeO8ouQDdZf3jT/bjpO8Fi+7GNdWcIwvOz5jqTtSaOw8Xcw1eOg13ZynHodK6NeQcNYwLteRuotkqBQcd0lFEcbMl4cVZKQFApcFBvB7LcxcsCw9Nyv4z6xFQihLSYURPzHjUWN9P6+CTyiWbPAYH9OKB0kqdrowG/tg5khkKFzgIPbkYV/FhPF/DLGEmJL5PcaMpAMRgDz/XIYSzXs+ZkTSbCC9XGKYw4tHsnDCqNLJS3mNAjXIvodY4ELNNAaRD0J1pL6Z+mMoeWIFZFv6UgnDgiGv92oTsww/QBQgpq9yLEQ6PxQ18FNfwTrCk4gwNYfRXCa3DyWmw5RBFMzPmS3jNKpWETcwSncSiNcySiFNvb48A6QIcsiCjtt2Z6RYTbH4b0UgItZYf0ZQXUp+xSp3fNfJ1qqXD3sMK0PkwfWHTVyiNTsfofIJHhWnM4cLsiWt1CqemIZAtuSq7rw9brwBk9/eBWSFYY1MCRjGAfNWcbfz9T1MJgs3HYaBYW8Q9L5r3dVu0BSSEcJjQHHyRAwbJ93QyLyvqLRjQNYcNoAs+95D4LMstvQ1//wbbCTYyj4tsJDd54IDoC2cke2BAAHNW9BshdYz22L0V+cssYWGOa7X0ZrQB0OPQbOB7AwCq2gWU7iDpREuoNVHtuwAmDCLZ1wWAkRpW49+NhwWgN3z2Z8jMUcmy3T/CRV2HdL7GXXUU8SasSUWVw6i0ZrUAwvrBYsyAsYhaACfCZy3oDn+PmdUCGBJquMEEKZ6PZa/gdO8LaNn9KbU4kXRan7B5DDEYM2CSD6ZSkoGUQ9vP5Y1zeJijUWC6H8KTy7EN2v298p6/f1xSOOsOp3BmBQPFzOAwSvyAx5csAMbhU1q7mr2SAMFbhgBrUjg1I16Ijx0cqKejnzJEq3kMUh0I8WdtDlf8nWsGApDonE5ZZDaH7+MFA+gNN+0wTCAawF19BCe4RDmlPnd4SFgRTE6KsVNlpNW1a2WYEzAmnJ5OzV7byHBW4wuOZsv4LsBiF42QokzE+QYh1JzR2OBFM7NpEbZUeHWaR8cyQE3VfAog1jxQhkGJMDQbjBeOQQgX2HQ2fFeBvn9m9VR6ykevl4thURVNgda4w8MCCIdZglTexkV1tCw09EH80ZoR4K0kjWcXrspl2IMhCTMWb9GpZ9OYwDEqKDdCADI5B/cMBiVxZMQ+ycHlgzZfEIDOv+l+0r43rBz3WuxerCqVkosSgcU4nGAgAhFnu6fXvMasYWOXAdOtpOKXAUA4OSUXzmwzmQbKD0EnDrOJQ7AQZYqtRltg1BI6nZ0OG3ufJlz11EyLUKRCgiLopgmztHiD8aLp5w0Qu2NE/Qqk8Y/i6BdDM0qsDaw18dycoSlCgV/zxw9ISJgSe7EQSHclBEx5wKYx4iyVNn/YKAYAhzMZv5b4XkFjutdhWTHGXRO2PRWk99m6T1UwCB7NMKiYyRRxPI9bz485Oxh1uEC6jMFBSi+VN6wTkRVRhedhQ2j39UNID4rjbd9Et2HW6fvwsBDp8vq1ItRcghQ/wk7bHugntg3ioONkEc3RHcdPJR6+UpHrKDqEcsODSAuDYmZQIkki/d4EtoPPGaBzP3UfDuyXMJ5/juNdotxSpbLxaCkq/YkJCYEy6itO5VxQcso2/M5A0It7Ov4kvpc1u1iEteiVFsHmqp6B57CL2Bt1y+u6C/Dpv2WAE0MHJ1GwRj4DFEiImaJXZx//NQ5cdZ4bOD9hwbQtx30vDnSFcp0+bk2waZNsBX1hEYVQkze2V9K3CG+bvlnNM9/nmre4JkMd1vr1U7ADR1GYZS8cgx20PTggJjF4esIAt1Rxmp5MMn8KEodXtR7S3CwLNIMTcIJpdwXMFx/lmvlZM+i8T/yEvN8/nWcQ3oLd60HJIQdehKvggA0gTJ6L0UW4kbd3PAenG0v0wqaEgMjWoGfzJtn39u5DAgiMd0EpwloW15vk7dlHYapxehlbW9pMip+ehptv+EggvgmxjvCiKj62k9u4zwqg19/4QyiuRZVv/eQ03PTH8dI6Fza/hKKTRZR7NTzirBntGmveiBa3LiPOIemOjACIAWllMDBSgaNw5UzIpjLgEC6wb1ltDm1KDG5Ihshes9O+CS+4cBFonRQPNortcSHzcsE569rbxbQhZfPQ3ogDnuTACfdAd6K5GoWzMGs4u3sUyom5aif1uwGiuwCWsoRNIGeviBmSGAG2Kj1SioQ4tjM4KB6o3afuBrxun8P4a/nXBXvq1YBadQ4vz+hPXEjvYjH0Dq3jA/ydZWsQTDHHaj/S+JUY1d91yhUqj6wkHzoQTE6LeDowgtK2mKvOKxCpS9rNCqOCJsFxx62mqbOQqaLptnNmc8nt1vLK1TjnAeOLFC3KxOJ5dBq6HOlJlFB11qewhdAK4IFYf3QsnzIzIxqeQX8fO/GyGXT2tfeQPzvDLbf3YfcitmMcWtyrCWbmRGPK69YKSCyoOjV0Oh9B3cmY+WmYL55v/ugNghZnreDAhClB8B7rTmXTMZIVY1gFDt+uSlM8fno+nW3pzEarEVET5UXstdLwCsVWqDaoyF70vxJn269cHkA2KuryiqEzcdK/Atw9Vmr1mfJcSXNIcLUdSk2UXZ9OR08vEAq9QEGRnVavlu4gH8sHOHGzkdZcvQBnI7nSpA8Ne7LwLTqG4qyQpsK5dVpfJcKeRhXaww16v8k2RcIr6wUps30Pn96bR84zgfO6677LF7QO5u9q7o9YpTL1HbsZr0UUTE1LH4cZ1EI6j+uNzogqknxevaWzD2BkWbe47SFTDvwS6wt/GoZTjCfsQoyb8sefNn5KKZov0R1BlZUc2lTskr5xniBIJHOFHsI38AAYsydui7hxz9stUvGyADr7mrspCgPbdkt/ApqeqySU1gj1W6N75CbLG9aLoHpje8w8llzcPMrkveIuemFbAgDPXHDohLNz+XfYEHJLhO0D110R96ifaYZHtzuHJrRisISb9RrhFUJ7WjytDYAQZklk2JPqEx734fs7+DgcXksCdPZf3yF9G4vsc7D7ARzE5qxlI5v4UzM8E0nOihXwLINgz76C7mqDT9H7dBVSkpvneordN5tMb+9+k/3wVT42N+m9ffsNE4RVemF/p+0C27pDmfYgrGITWmELxW3TS9nD4mx6QCqTAuCHS/4GXqgVx3FxDcJJkdJX4sOX4tvrZLCRgjmVC80tM0XSGt2bOt22SOZmtJtby/s5vTCDx6DmqoiAejhOXqtJnOHGMNI8AKIf3DXsUjpQx7mKoszAgD28iMqLuDcOkBrwPkZ7dMae9DiAeAee3sO7o7dduTRAv3fDXTRarzAAF+Js5/IJucNXRuHIJQCPNrvd3uOPlUqY3fN879F1ajitrVhbKps3CnvitCEv1gBvs8aVN2wQYa7gbwRdC6emntEmG9ZIu9FU5ZABBigOAI4XmNCChYj9FljFzjxuC7NCalf6q9g5NF8euoZY04/pxEHveC/SF0NXyoxizzFHS/Zo7RuX0CvD1fLFxGn7wnQiVIflyUEq2B3pDoI9zgDAgRdhYDjlymghO1a2bBbw+Xtc5LIw62xpR9c2j5rHHgNQzBOOACdi9rQy9hjfI6HFqV3lM7I/xj+3887o9quWBujCT32X1g1X7EfG5t6HE57Mx7DhXPnipasHxnCdFVZh+aFF3ACjQh2VS09WKOYCqlCGrAQ4PdIO4Szo7dkDcMz3WW96OJ0LOCRzZVKHcRpWqgC2WhCuRJ3gSGgBHO4Uhi1mT9OAE3o4Xghw4nSCTA7EmvNFPJ8cve2qBWRZEGLT1Rb9376534ii5N3CQBZMiKnMNkhbMqby+nXUu2WTeJ92i6CdOdrU13kLk/vQ3A6RqR4AxJU6N96z+qsHx3NRw3H9xs391tiYGNFO4zTPRBVAMZOLiQAfy3KWAOzhlI7yxAN7QgAUp2k99zzyuA3731msqutg0DtuvJPWDFacx8ZrF8VxsplB4RFzAITFXTwWY57Ug7Byx9Dohm7nFtVZQUimQjhxWFWOXid6w20Kn7+LLUvz0qfGTTWffArFaEPccpoKF7nu4mAURJmbXgCI2cOFaKY7EWou2BWjOzotKcw1jmH7HHYai/WnOgCqt0Ly/OikMIzfLp/HSUtIt9zraSHdsjjz6LNj5tGWXg0XqVm9RO0+j3JLIuoyhcyrJ/A9FmPuR+cswABYjivHZQbwBKFxyXrxpnLm0gslBGWizPP5IesOg+NJaIUSWr6wfx44nFm+jAPs4JEdvf3qrgDlIfbOj99Gl77peOUF4R+EUbzZxDUAWrVKHLJKXS6HVe/WzRDZfjlRphkqTftcsHK3r4drp7XGVDqwB609+1HUTqUTf4nMcPSdcBz1nbyN+radIK0MbplIOu8orfS8LQupxPSrmTXYpKfDAIGhbAQFnMwQiudJ8uyRzgn8AHs348KT0duuXrxIz57wZP4X7n58YxBGb4Xz5NY42WU3z9w8DcxtSbHsUiwCnKFBebPEfRqILYckAxYhTLiuCg5OSkg2R8dMgcl3jH1eFFXZeIzUXfx9fo/DSwRfygjdJWVlYdWe3BOwM5DCTHc8CS0Bh9sZ3ErNkgcPsskb4/j3Rhj/A/EzrOMTgN51w3/R7n1ztGao8vowTF6RhRcfikeHgag//oRclNh9nKGE+okZwYxiMPlCBZTpGbw3LBrjobAU6jN4vECKtQilSQmCbZbSJdK/5jqONaijfaHTJWG6nSGzppdOFxtIH4c1BwyJgxQcbIHXTMEJTQgyOrz2xzAnwP7ncGE/5JptT5fMtQAgH27z5I1DvfsP1d6C7FXixhilI1WG/jAoHGKSyTAirEEa9l1cLk8CQqw5nMLpWZkqZoZ5+6FZGMlszY2wkBcpQLRl/Y9MH0+bRQzZrITuLK3azMkWHBQylxjB0KwjYnD8LGN5aa0VSBvVLPi0zeofszx4O0b/n3Ez8ej2K565D/aHN26niRnUQX5wYhDFv8MXgbDkGXJhBy+e9FEocucwmJqUFkdr3z7sb5IeDjOltOooYQJ/jkNQshDbeF7qgjBiRnEIylxZrWZuNooWXV+oCx4nF+KcQYmUCTLRl4LDdaFhTxpaWRuDobbslEECziP49zrc2/TylsgCoNl6i361f5o2rl5xVhTFa1m3pQectid8hBELMqd5bntGfPNczcOneHstmZ7JlrJkYcmpW+a1RlZL9c+pXtIw3wSzCxmR07FadFGqLgh1QXPShVTSQ5aMZZgj4CBbycaiHKdT0emSOmV+qjCBFz+Kp7/kQ4/ddsXyAOJ1R6cct6YyPlU7G5S0lJVNz0BvGnVxzD3QDW5i9W3dAtPYR004YGIGcHsjZYFKV4Xx1fDUcP/JrwCwK9o3DUD4GKbhFZjlcHqxqRqddyOz2U7T04lTr2PA4Y6geBzPVOlhlrFkYXm6SXaVuem/RVjdwYCPbf/IsicqHB/ZC6fYEMXJq7KRUma5umgPlxjsObkL14/ikcWVw4XdNYcSN9ZLK1eRO2iml7kt0XjiVwi3g1J4mpUdU9Tauzc3h0qpDq+jO1uB88RY505ZJveieeD4qe74Zo5djoCwEmCM9QBV4Xd4A/3Gtl/+rKa5nGrTo7LrbEviZIMgT+0L44IurM7J/BOzg2sovkkGY+DEEyT25x7eCZe8HsXrqna9xKu3nhoVU6hgBNlMStNdZYKtFkw/69RgZn6n6JBNOk91J0jBCTwBKMjSOTtl0U8r/50GnnN+/6ascNO6sdyw6gDo4HSdNqxecXKidW/hxw75epvWvr1yw31bt8o+W3depSED5bjCKM5aDJB8nVeOlcvSJWQW5YzpmFld2EzTHeCkupNkfR2Tyk1o+TJdw4wJRHc8w5wkSTXHkqxFnLmUugcHuwIHOzR6+1XPaYrdeeNZ25yHd+/flvkFg0/WcFeyGqMJQbZ7+8hFmuYlKcQA8T3zb7NQoTdHR8lFScKh50tvZzYVYVWYjtddF3zlBjAtbHOAErOQyTAnzHUnY07WV5Z5LU4qlIIj4SWZ60c4+F/KJKDS9FwfzvjB6kAc601a5/NCZplaWvHKoXGRtV2PQmSflgt3OZMlZq1gDCGP6jWaefBn7QVOytBcq0KPqOsCJ93ZXMtFOSsj4pQ9ZoEBh3QYmJ5yyEBxbyc2zKEUGNmUxX3lS3CwXfzeUqXEMwLk+XE/RmA4b7eko6kKk/3GWcdI+ZNmXTM0ib2QUNpS6RJ+Jc8lO1GStm5k1foSCwuoHXapAZRWa1pCJHHbJccZc/yWYVFoJvwMc1QKjsN/H8QLH6IofoigmaO3XUXP5+E0vaAcJ7o/156iB2n3TLKeV97dM2Ufh4FleiwSnipljGqbsyXYo4vz5h2p3LRLTWgFUnByL1nA8U0qT8SIpsDI7ywEnAdwqg9Ss3E/IcvO7w4+J4BQnLpgUHl+V9BotO4yeWxctqJ22yF1Yu2tQ4jV4tE1L6y4NkuSuCDKKTgcVn7TPGdB1pQKsi3rBWRT9o/xz19QkDxEg300euvzB0cAShLNmmwJW3QnHBwqTOGFa0STdHIu/WFbqlsSUqTaP4lcMC82zylTypp0eiZrXeRhFfrG5wSmp2OKT8r1xhLmuAzOd/n3H7GOH7VdaM6tV9ML9XB4STU3j1S+BjITzdQTkV5AAJ2tFcwal+lPIjPQcv1ZdDVKsV2alRCd4EiGYs3JFhjIEpWUORk4thvj+a148TJ4tqcsFuQ7rnlB1307dskJKAhbxa5g2+iqtomjTqYUOxKUg5O+L9NqaglhTvLQSpK2CYwjw5rcJRfSuBbvh/QNxlg2/9DFbQGcr+CkH8MhJ0bvvO6w/KTCsculhtX0ZxKKO2dBC7PFRZiKRYI430yUJURVupKUOhvTulOU8yZ7YsJKRBebAMIZimsqrsj59dSfKeUYMQY4luVMAaVP4tV/wllrY3deQ4fr4bj9vXOq2hwjCs7I6JMJ9PyfgbQb8gYMnWmL0m3W6IWs0cU0ns+Xx7kJFI8TpuUDL0mJ/HRRkzaOmDMUu3YbDt12duOFa6E7t0Ijw7E7Dh840mLuGTk1qgwObI2D6Px8gk5RzpbOH+13Ake5PnVZ6ZVOB2XeptiqMBnKL9RULeOMpeAEWPxZGSuTwi0XwDilCODcBXA+aDvWf4N9ydhhCqsOBg1sWMPr/36KsmEq8eOVbXyyH4VkoKi8/FB5O1TJYgXSndV5MYW3xbgAUJyxJtUcZky6VtkYR8v8RiMNKYA0CTP6RSD2eV6//OT2a+hIPRy7hy/A3mk1Ww/EfvDG/FczhTU2bWPUmda7rZjXmjqBydqjMukY5nojGsPgxGG+RtnkBc5QHFIlFuPYmD+bf292Nw4WjN31MTqSD4cBaeybqJYG+/8dTDonCYIenXfi0tJBtaeQtWr/tnNhF3B+sclZKmoXnAxMZNYl56k7/Y2WccWO8TWiN+4hhNjX8MIXdFAdVeVBGrvzejrSD7nT37nsFp7YOyqYnv1aUK2/WVZgcI2VzoW1HXJBl+b3c3IRTkxaZtYkUR5SEkICSva7iLgdTrkjlnDywJp78eQzuIgf8E9ajjRrFsxqqJJD3sGZaae/55PK914Z1eqbTRvVzlmkVMERF/5fCJ23SAtz5FlrNAMnfS6N+iRuO6s0Q6W+JibbfgRgfQmgfQsfnOJzj76I4HTkqN++/Ou06vWvVQe23/Mef2bm01G9MSISY2UAqY7yoV2FJ/lSt7w1mgKUC7OwJVsLqAqtCQ4lJ8K2G8B8HS/8B1i0RyehHrvrBnopPDrE5FSAVBoedhqjYxcFszPXh7Xa0UkUp2VFp3ksznQWNUdnIZa+1rF2KG9osdY47IR3Aqz/RCjfiv0xAJ2MvciMWRIgYdKVt5DbP2A3xsfPDebmrgpr1TNir+UIULq9tLY4b5WVD7q4DCbVLgEmb2TZ/JuCA0jZ92Hn23h+L5XLByiK9J47XlrALNWoofff/H362s3fpt8887fWB7Xau6NG/V1Rs3kS6qOKFr8S5+uCtG53IXOaWanwciPNskI8P4C/OwHXvfj4vXhxd3Nqf2vtK8+iX3zl/fRSfiz5Q8/XfvzbNDA0pA7u3bchajTOjD3/HJQCr4YVOAaCOwygygAq64dwB4sn2HluZwJ/eTH2LmyPAKmHkSXHhradVq899Ut6/JYP08vlsaxfwl74mKbHvvBVGtx2nNN8+umRqNU8Lg6CLUkQjsDkVXScoG5NWmARL3fdrxP9JMT9gFXua0Cok903/ym9XB//D3C8K8SzvMhIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDA4OjU3OjMyKzAwOjAwKwPjVQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwODo1NzozMiswMDowMFpeW+kAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

FlyingDisc.displayName = 'FlyingDisc'
FlyingDisc.defaultProps = {}

export default FlyingDisc
