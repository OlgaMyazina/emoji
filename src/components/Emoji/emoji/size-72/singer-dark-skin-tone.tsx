import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const SingerDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBSci1MA4eQAAAAZiS0dEAP8A/wD/oL2nkwAAH6tJREFUeNrtnHmQZdV93z/nnLu+rV/v07MvzAIIsQoBQgJFSCwyWDIyyI4sOY6dUmwnTsp2UrGzVCVRXI5ULrmcih07lXJkSzKyhSwJCYN2tCEIiGFnGGaYYYae7untrXc7S/6473X3CLDYBuxUuuvW66mpuu/ez/3t53su/P+fv/VHnM6TX33LdTTHwVo8KdkghNjlnNvtjNuIYBQpqoACLM71hRAt4ARwxFkOAbNW25aQwv3lNbf/vwXopr+5FoQLQVyGFDcJyVuEFFuEEHUESghRfvvwClx5OOccjsRZt+CcO4TjHuAbznEf2i0gcJ95DWGdFkA3feU6hKDmrPsNIcWvSF9OKF+hfIlUEqEEUkqELCGJ4WWUgLDWYrXFaIstDEbbtjPuYefcF7F8wVl3AIH+zLtu//sH6KavXcfY2yZY+sbJXxFKfNSLvDiIffzIR/kKpWQJRwgQAiGGeMQpV+NsCcpog841eZpTpNqY3By2xt6K45POukcQmM+88/a/P4Bu/up1AFPOus+rQF0S1gOiWoQf+iglEUIiEAjxwl9fQiuBOedwzmKMIc8Lsn5G1sudyfRhq90nnOVPA2GPFAhuOQ2g5Kt+RgfAJhw7hBQoX+GHHp5SSKEGcNaCjxhakVj7d3kaB650PykkSnlEcUStWaM+XhVhI9qpQvXvhBK35E7eKHwZ3vz1d//dB+QA5zDOOeOsQ4jyBsXArYbutR7KesspLaY8rLO4EtWquSupCOOQarNCPBIpL1JvFkr8ic3tf8hO5hPv+fRV3Pj5a/5uArrh31xD+s5zSJ/JQpPYxBZlDLHWrVqCeIHfFwTu3CmWVYISeJ5HXI+pNGP8ijcqPfmbwZj3+8IXW1X86kUO9Wqd6D3//VpERfrqQ7M/a5X5XWPsHkBKJVCBwgu8EpAQyPUWtN69hu4nXjhkDjkJQAiQnkIogbNWOuPOFp7YnS3k91z62+cvP/DHj//dAPS+/3kdtPHkFvfh+qbqf53YOLHdZFpmSY41DqHACzyUp0o4lGBOyWLroJ3qem6AY/h5aoAXAqRSSCWx1gpn3V4Zye392eS7b/yFve1HPnnw9QX0kx+9hrFfFaRH7Xsam2of27Zz6/hIcwTnLK3FNiYzOOuQgcALPaRSz4Gwaknr8tra/7sXyHRr9ZMQIKRASIG1FmfdHunJyeRE+q19P70reeLWw68foHN+6QzSB+2OcNz//U07N+6uVmtYDCIUdDs9+ksJzoAdQPJDHynkKRB+NA6JH033f0uNItb5nBACJDhrhXOcpQLh0oX8u2fevMsc+Nzh1z5I3/in13D0phQRiffXpmoXRtWIVCekJsV6lupkDEDWyslWcjpzPXrtHtro1UyFc2uZSnBKxgKQwywo5AtWccNMKZXEDzz82McLlC9D9cu17fH7grMDfvr2a19bQB+8+z1Y65j5o2CbitXNlZFY5jYn0QlpkZIXGSiBX/NZfmiZhQcWSZcyOie69Do9tNVYZ7GroOzqPbsXsKTngzR0NSkEUgqElChf4kUKL5RNhPgtMcs5w2z4mgFK9zt0keM1xcV+zdsjPDEAk1PonDzPMdoglEDPZTz154eYv2eB/smEzlyXfqePMSUkYw3GWdbfhPuRz1VIz+Nya0F+0OuJMh6pQKF8eZaQ/Eug8r4vX/PaAep3unQ+awWKN3uRiq0z6KJAa02Ra/KkwBYGISAMPCqJ4NCfP8Uzdz5Ld7ZPe65Dr91HmwJrDcYYtNGYgSU9b/4aBPPnIzQM8FIIpFKr5iV9iVDiRpy7Bue48faXBsl7uYBW9nfQFRM7F+4TnqQoNM44jDFlJ14MCkQlUVWPidER4jTj2c8fo2gVbLthCwDWWaJKiJAScAgkvu+jpHqOJQ2SPCDKuOXW81orHeSgITbODDNcAyF+yRn3TZxbek0syEqLNynHZSC3g6NIC4qswBQGow2msDjjEEoQTkfEtZgN4+Nsao7S+tYCT33iKZafaNFb6JP0UozWWGNJk5Sk38dYfUo1XY6J1ltRWQ+tDy2rGc2V34sQWOMG7sdbEbxdADd+8erTD8hrKlRDjQqPUedc2VIYWx66/Mx7BXknR456qIbCV4qJZpNt01OIJwqOfuJpFvcv0V9KyJIcax1YR2ehS7fdwxi96iplQLerZcHztSNDOMPAL6UoxyaFxUEVeJ81Lnqh2upVBVTdEhNPhGNCiqpzrEKxeu0wmWHp7kVWDrQQTQ8lFYHnMVKrsmlqgtrJgIVPzbHwnQX6iwlFWiA9hS0c7fkOvW4fay1icD9ZlqEH0MS6UeQw0Dtnh83ysEZAerK8rsICXI5gn3PwU1941+kD9LPfvh41JvGmVAVF4NaBMbklbeX0F1J0bghCn/7XWyRH+viBwvcVYeBTi0MmRus0koD2ZxeZ/9IcvZN9jDHEozFFV9NZ7NLv97HOIoTAFIZuu4uxZpi6cJRFqLMWYyzOlrVVOSpxSE8iPYlJDU67jUKIK6WSL9qIXnaQRtjVFGPN4KIQ6FTTe7ZH/+keBAJvxGPbtmlUG3xfIeVqCYjnlcCCNKd3Z4sTK5oNN22ktrlGWA9IFlK8QCGkIIpCvMCju9IrLbhRRQ7GI0O3stauunkZt8q4pHyJ1S53WvtezbvSGffHQP+0APrQXdeBM+WTK5xz1jmsG4xJy7hTtHK8qo/RFiMcjfdNoB7T5A/3yAsDOHzPw/PKukUpiZcpuj9IOJEcZ+bnNxNPx6wcaCMo6xlweL6HlJLeUg/lKaJKNHCxgQVps3qUljTwNwEqUgeKdrEgC3uO9OVm4MBpAZQkJYyirXGWzBqnnS0vQmeGdDFFWsH4mybwqz7dwz1mH1hm4dFF2k+0KXKNyQ3bpsfZu30j0oGUooSkJJ2HU+b+7FlmfnELQaSYu2MO/0YPIQVh7FC+pLeo6bf6gxm3AgfG2NUM6swg69mBFSFQvmzn8Ds2t78rhDgb3OkBZAfW0jnYI5oMl2xhew4azjjSVka2kFEdi4nHI1pPdLn/448iPMH0hRNsvX4LXqTID/aI7tMIVzaXyg1ahaisgLsPp5z8zCxj753CLWrmPjfL5g9sLUOzBOGgv5DgRz5RLSprosGQ3xmH1euq8oEFCSVEUPfuM6n5dya3qbPuNMWgwYm//wc/5NJfO3/BZJVFZ92MTjXpQkZQRFS31cv6Z9znjR/ey9i+EbwRb625umwcvbuPvq0NqR02VCihiMIyP3V/kNCdWKF54SgLn55lefsiE1dNIYXAr/q0n+niVxKGc29rzACSwxpbupdc3+mTCCmK7pH0S9XNkbT2NAXp4YP58Pz7xd3/7MGlom+eNpl5Q9bJCeYjZjZsJJ/o4qwjno6IZyKMMZiexeuXIHQVuCRCGYf5YhvMIG0Lh5KSMPQBQfaNHuqtVaoTMe0vLRHvrFDbVcOLFMnxhHw5Q72pXBRYPxC3urQaKcS6hk60gGLsnIb77PV3mNNXBznAwuIPWzxwy6P9fCXfn7Zysk7GVDHDts07yip24I42s+zsbuGyw1vY/OUVqp86yo7ve0wvTyEuihH7QjBu3ch1MJgPfGLrIe/LiMMAtQz6+xkm0aAElSgkeEhQLJUxrcxeDmcZ1GNr1fcghTxrEpOd9mbVDeY3Vlsu/MAelu5Zumf2K7O9bDmn2RhjvDJRxhYB0sDb1ZW8dWUf6SNt9ux6B9/61nFu/fhX2PBdzZnmTMSFEQTyOasbnpIEgUeYSIKex6VXXsLEnEQeHWS0DR6tg/PIgzm6KPs/Zwfp3Tjc0M3coOGDA/FUaE87oFtvuBMAfyxwc18+wcIdz9r522ZJjvYxzlC3Iyg8TGG4WF/CDRuv5dZPf4qHDy8yvmEj0g84Nt/mrlu/yFuLvWzafAZuSoJ97qRQSYUUcNFlb+MNZ83wf+5+nOgxH9M1+OMhy9kKybePIfqDYrGEUQbqwq71cNb1nXVP2sLx2evvOP3d/K033MmO8QZR5IF1SCfJDie0oyUqRY3QRlTmYq4+573k/Q77HznM40fu586vf4tukhMGHmG6gLe0zOVn/wNu2fIo9lh/dUTmcINWwhHXGlz3nhv4yl//EYeOz3PiD2/nTH8fG9+xkZkz61QOpNSXq7TiLkrJ1dKndLdhfeZOWOuefDmLQS+r1fipz7+L8//XJVAGwwUhRdJ7qM0z9x5CppKRYpTN1a3MTGwmimNmxmOE1XT6GdrA1jHHm/b6jE+Oc96GixjdNo1T65cIBwnTGHbuPZN9Z7+RDZNNagHkvYxDtx0jXckZ3Vtj57ZpNpszcMWgaR0QckO1SAnqgDPuxItN7a8Y0KC6R3cKcJx0uGWvkCwfm2NlboEZs5Vj9SM8NH8v9fHtfPDnbuLiDZZLp1Pee67mN98rufjtl7P57CspyPCnB3FofVM+wBX6HtZK3nn9+7n24i1cMJ6xq7WAOjBHsGWCfW9/N5uDnXiJt7YiO2h9nB3GI3dv84x6F/vS7/VlrWrsu3kXAItfPQE4K4S41vfUDqMLJqdm2LP7bA6Ej/JI/0FcHy44+x2ctXOCmaDP+Xsm2HXeu9jy9l/niO7ylUO3sfSDEySHV05dqx8sIi7Oz7E4P8v2vefzlre9mYmwy6aGpF4dobdjmhm9j4e++QPmvBMEMyHOOIqeRgw6eVPYrtHu49lKfvDWn7zztVV37JkZA4TncP/D99QvCAR79p3Fz//qr7F/5h6eih7D0x4b5Ca2VbfTxMN3PrlULHe6zB84xsL3jrHyxCzWmdWZMoPG063qhQwTU1Ocfd75zGyaIul3OXTsGA+NHiS9t83KQ0tE140wdv0kOrH05xKCho8MJCYz+21u343g+F/f+NWXPvd6xUIOYTWOB61zVkkhjx99msOPPs6u8TM5FhymUAXHeYZjvaM4AVXqNI83yb+7wsojJ0h63fJpD0elSuGcQwxXOwRIqViYP8k37/gbpFQYHFmSo0cFLrP4SmEWNdaA7hWkJ1PCZjB0r2/rvjmh4pe3BPiK1sWenF0ajl7utdYuGmtJs5R7v3cX9aUGW/KdOBwSiRSSGbOJvQ/upf1nR5m9+2AJZyh3cZQKEKkGq6/ylKAtZQmPsn0jCHzCliBIJcpT2LbBFZZkPsWkBiHBGdexxt3uVZX5/E9/9bUHtFr9OvZbyR0Gi7WOI4ee5LH7fsjZyQXUzQhWGGq2wVmz5/L0nQ+yOD8Lam2GbLQlzzVrWaYcserCrDad62EN18E8r+zmpRS4tJxgdp7qDqR8YLW932l3j9XuZd/fKwYUpRFLH0h6nfekn1p4Y9JNfE2W5fzg218jP5pyfnIJoY3Yl76R4lDCybljq8syw0yVpDmLyy3a7R5pP6Hf69Nq9Wh1+uXw64XGf+uEIDZ3FB1N+/E2MpBYY7Uz7rNBzVsQryDSeq8U0EPLz9LYKjARspcjvVmPRivi5NwJvvPV27n2pvdzmb2KCT3Ngye+jda6nOGspgiHENDq9VhotQj88pK0NjTrdaDy/LFvoEBzdpDOtSU52qd/pI+8SuE0j5rcftFqxxfe/7XXD9DEH0ny1CEMGwlc0B3JSVoFoQ544qH9TM9s5NJ3XAM4up2VciQh3Jo6Q0AY+kw0myy12qR5hpSCWlylUa08R4U2DFjDWbS1FmMtNrO07luhX+QUVnPk2DNP3//MYydmRsZf0f29YkDCSdpf0TSvFpudwcvGC9qtnLgVEOQ599z1DRqjo5x1wZso8hy7mqFAykE8kZJGLSb0fbQxCCEIfA/fV88BNJz5DItCbRzGOvLFlOUTCe3xhEcfOEi73mpEewlXOovp6wrICMPWf6G8xXvNFpuBDSztmYxGOyAoPHq9HnfdfhvOObIkHczc3NBDVmdaUkriOGA4vkWIdfMuUVqLs6tj1BKORWuNNpoiLWhHCb2RhM5ij2CE0YpPzUa0ktcTUJjH+Cd85fLOPKF9XMDuxMtVZ7QgOJnhKY92q8U3b/s8vidxCNxg/oO19POCQmtyrVfjkxCCLC/wPUUYBERheTi7NuOxxlIUhrzQZHlOx8tYmuljqxY5hlGj1KUTDeFz/KUsFL7qgOrtMWrdSj5P+pHqruIvbMIfpyvWJF6+sf9dtVUlCUpKRL+P73vl3+t0iAvLLU4sLpPnxdrS8mDuJAb1zubpCaYnxtYp8R1FUUJNspSO7jO/pWuz8VyrcWS0jf+mYr4tnTzhJIB5BWXMq/Sz7w+nUYGQC532Wd0iWQwD/2dGvta8ObzXnhFXorFaXCHyAzyvrFuGYk7rHP0kpdXt0c8y9EAV6ylJrRoz1mhQjaPBOnwZb7Q2FFqTZBndXr9Y3pAcXXh7+740M98Im+LKykbxUWvcfcsfdq/4vl51pf2Gt+9m9BtXsfBP/3KHOa4uDR8rfr3W54JaGFOJYqIgKEXlA0sqb7qsdcpGldWCsdRVK9TAqqxzaFPCSfOMXpLQlkW7vU18kq18Oe7Vv7N4xdOZGrWZcNjuz73y+3nVZMDXffat/N4t/4i7Dz2+dba6/5+Ijv/bvg4/qGS0XfUROk1x2OcIo4Z/GG3Ii4K8KCiG2uqhlQHGGAqjyYuCJMvoJX1y61DNZhhE1QsCGV7tjYsrJ4oJb6bYdOzIr8x1L/7Y+Ry/88Trb0HXfulyhBOh8cz12aL+jcXvpBdmj2lvTI4gUuj3evRXFnF5Quh7REFI6Af4XrlSKle3H4AbKDiGmuqh5Zih5RQ5aZZihIeqjaKCmCBQhPWQcJuP2ZnlejL9nlcXvxsH4de0scXXbv7+62dB13zxLWDFqPXMvwqK6D/u6O7ZfZZ+g/RbHmknJY7j0pWkV7rHQKFhrMFYi3F2UOy51QWB4ZYoYy2F0WRFQVpkJFlKmmU4FSLiESylixZ5Rt7LkSuKTd4WNT05td2OFO8sotz5nnrwjA9szQ9+6pnX1oLe8elLCZoKp92k89xH6unIz58xe7Y/1pnCOWh3Whw4cIDl5WWUUrRaLXq9Hmmvi0k7CGvwlMRTZcNZDujFKd29cyWkUp5nKIxBBBVkXMfzfCqVmDAMcc6itUXnOdZqNm3Zyq63bWXujKPJSrT4J64Q/0lIFu64/ruvnQXt+8fbcdZtdL77WDMb++BZxy/0RnsTOFEOg4MgYGRkhKIoyPMc3/fRWmMcGCco0mT1xvVAn1hoTaHNqtWU8ahM53mhMQZkXEcgqFarRHGE7/uEYUS1VkV6Hs46jh97hmy+4LzJC/28kVyQRN0pjLh79z/c2nuplvSyAF1z2+U4w4zw+b16PvL+s49fqEb6o1hx6tDX8zzq9fopCrA8z8nTFJ0mqxKVYW1TyldM6X6m1PtYM+i1LAipsNJHhQFKKoQstYieV263UkKCKGdPvX6PClXOqO1R3VrrnDTsT5OL7+/50PbezOVTHP3Ss6cH0DW3XY6zbkoG4qOBC39m34nz5ERnerC/69TtTKUMThLHcSnMVIqk36e9MIfTBUoKlCfwlCq1Qp5a53ISJdc2t5R7MjwKJMY4/DDEWoOUspToWUsUx2zcuIFCFzz77LM89dRBxsJxzpjYLZdq8+dov5h0mfteMOr3t14/w+HPHn91AV39+bfgjGuoUP0XocSHpFNKewWtyhJpmGClRTqJNBJhxSDQlkMvz/PwPJ9uq8XJ40eQqmxIwyCkEoVUoog4CInCMsMNj8D38by1/R0ZEutAF0VZbYtSYqd1QXNkhG6vx8LCAjhLnuekOiU6yyMb70ujinOEEDWbmbukL/Onbvnx7vbSWo2yF1DOuO9gOZiT105Un6lQZVoYeaZn/HMiXYlGklGa7QmqrQair8q1cmtRnmJyeprjzTGS7gpxGBKHUQlBqUFqXxNIDDfVaWPK2idN8S10+j1EVAUhcA6CsKzQDx1+miTpMT01TaNep1Jpszy/zD233m8mrqt/KX6j/03n7Inn39fwKmaxK/73RQgnPWfsDI7zrLZvs5m7whr7RmddKCNJ1IhoBk3G29M0ZscRbYXWBWmWcuSpJ3nmyUepRRGVKBrUQ8OtUj+yNuYoAaUp7TSlMjnDkaPH6PdSgjgkCiM83yOOIpaWljBaMzo6ysTEOHEc0+/3WVxYIkvyRwI//K2JlY23ddSyfejk/a8eIOccV/3VpSillE70ZpvZN5vCvtPm9lKb2x02cxWTlUpSW1jcYAasKpJ4Q8T46BgT8xupHB3BpIZev8eRJx7G9TpUongASKy1GusE4tY6Cm1o93rI+ggbd+ym3+1z33330+60iaKYxkgDBCwuLIBz+L5PrVZjYmKcRmMErQtOLizQ7yez09PTf9Bsjt4+fcXYw53H+vpzn7j1lQG64yt3kIu0fkfvi5c93N5/NZqrTG7PsJmNbWFxhcPkDpuvwbFlLseZsq/yRhTNnQ2mmWHkiUloS1qtJRafPkgowPe9deLO5z6cNMvpacvUrr006k28MckzlUPc/1cP0zmaMD4xgbOGVmtl0L+VwocojhgbHWVsbAwpFYUuSJLUGGOOBdvULZf/7MW3//M3/+b9rWSlfe6+8156kL7iLy/iVvXJSu/p9Hfskv3IUnDySueYFgIfJRCqlMwJVW5ok75EBhIVyuEeCYQAk1iyExrpFGZnRtCPCE0Fh8UkXTyl1rYUPA+nJMupTs0wOj6NnSpY3jdL0TaoqsBEOcJIbO5Ie+mq+Tnn0FrTT1O01kxOTrFx40biOJJpmjX7S+mletG895H2g9HHNvz2t8999xvM4b84/tIAbb9hI0ERNrUr/u344oZtOsrJqynKVyUMXyICiQxLKCqWeFWFV/XwKgoVSWQgEJ7ESQtzimA5ptjbI8wi/KJC2m0jnWHoWz+6Z1Vrg/F8JjbtwG7NWdk1h9kv6c8lJJNdGmdUqZ0VEW8N8GKF53vojlkdruGgVquVkh3fZ7Q5SmNkhKSXiEMPH4oOHT08Wjk68rnkkaJzYv/8SwT0E5tIH7cJM3rMV96VG1a2yPboEi6wSE8iPIH0BNIXJaBQoaLy8GKFiiUqVuURSkykiWZryJM++d4eka7ieoKs2x6MUM1qk2oHs5+80NSnN+Od6dHetoi8N8K1Ba0di/hjkmDUJ5wIqGwPGT2/zthFdbzIIz1WoBNDXI2p1uqlNfX7CCHI84zl5WWss3Tnel7+tLn7ibuePLBn7z4WFxdePKAjX3iW3b+4Bavt4byavnk0mdhaKaq0R5bLgftwE5sagBocamBd0persLxYIasCF1rqx5qYlqXY1yfKGiTzbZzOVzt358rxhtEGGVapnD9Gb8cK3r0xQTuis28RNmvCZoDf8EtrDWR5VBW1fRUqm0KyWY2vIzxPDc5tabfbHD92jJFGg/GxcZSScT9JLorj+Kg2xZNxXHG9Xu/FF4ob37SBYKtsF5leKqL8XRsXt8V5lJLF/dWsM9zAJuQwLlHGJSXXwIUSL1S4hiHKK8SzNfK0wO7NkYsB+XJnNVC7gWrfOUF45gT5uQnqhzHxSh29I6V/Zoug7pfWGpQqDqEGsVCAkBBtDmmcVcEsO7I5PVgiFbTbLTqdDsZYwiikOTKC73njeZ5fUeS6jeCRWq1met3uiwN07OuzbL5ihqJnDttG0fSEf8nU4ibZGlnEeubUVU65DtQQnmQVnPQEMhC4qqWxMoZaDMhkgtqtsMcMLs3XXlthHUxW4G0KdTCitjiCP+7ROvckjFrUKpTBA1n/oES5+dVvKuIdPulcQTavcdbS6bTRRUGhC9I0RXkezZERoiiu53n+1rzIpbPugXq9kQVR8OJajeBgDR1kpvWtpGk25j8x6U8FUb9Ce2TplP3vSNa2/glWX30z1PqIgfLAVgyBjqh3moglRTrSQ0x5mCPp2lKyknBlhNepUD8+SqVapXfGMv1tK+tqpnXbNE/ZU74a8/Hqksq2kPYDfbJ2TpImA2lNOfhP0xQEjDQaVKvVSBf6srzIJ4019/u+33lRgKyF3hNZdeHJxX+fL9pzqxf6bGhvJvdz0koPyfrXIZwqbDglda/bum3igsbyGKGJYEmSbOtjco04WW53Mud4+BtqNJ+apBbXcKOGxbOfxYWWU17OJF64shtCkr6k91BOMp+VD8iWe8+G+9zSNEUbTbVSoVqreVrr89M03SkQ31Evtt7Oi/xM4F/T9xquaon3+EzPb6JTX8H4eu0p8mMgAcIJTKjxtE+91cTDQ/Qk/d09zNEMW3FwSYXxpzdRV3X80Gdl1zz96faqxJgfaUleSCqIcPiFj35I0pnvIaXA9z08z7PGmK61NjDGiDTNyPJsMEYRMuknu7TW7kVakAXnrvB87wOVuKKyJQ27c0aqozRXxmmNLOGkOxXSj6vVhaOIcurLo/gmwM8DXADdqTZ2q2RMb2KsM1kO2kZyTu45hvXt85zYPZ+yYdDwOjCCzcd2op+GhZMLqzOkMIr6YRh+JEmSZ3DsttYGeZ7T7/fJ85x+kgjn7NEf29U2G/USEGyRUgZSSWzHMf/VFkeCg3h5wPTsZjDrlBZDzfLqJP55DivI45SVDSfLoZfvMbowSWNiisp0k9GlyfKFKErSnlmiiPNSS716jrWNc0P1v7Os7vJhcB0T8zPE3Tr9mTZKeXheeU4pZOj7wayS6pellB92zt1fFNr2k4SVVotCF48rpT7+Y8cdSVEM77MhhEiEEE5JQfJkwdx9SzTefITtz+6hW2vRbqyULgAIsfY2haGQR/zogxfQmlykeWwSPw0JCJh8ZjNGaEJCpJTY0NAdX3nu6rFbewnT+rUkt87tKr06U7ObOD72NO1WZzBcGzTSSkrr3NbWynIKfHKkObof+M/W2qucdUtSyo+89/ob7vu/Qu6Vxfc3V2YAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDU6Mzk6MjgrMDA6MDDyiSYLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA1OjM5OjI4KzAwOjAwg9SetwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

SingerDarkSkinTone.displayName = 'SingerDarkSkinTone'
SingerDarkSkinTone.defaultProps = {}

export default SingerDarkSkinTone
