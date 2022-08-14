import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFoldedHandsLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-folded-hands-light-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAjc7/yaUbQAAAAZiS0dEAP8A/wD/oL2nkwAAFYtJREFUeNrdXAmQHNV5/vue7unpOXd39tYCOkErwEIRSREgUJymBJUABTjgyAbHxg7YYCBUjIMBUwZMVMYIsEVBgUMFAuEGIxQTnEIGc0viEERIoGsl9pyde/rI/7/X3TOzBwQ7GO1u1dueo4/3vv7+7z/e6xHhC/rbeNvFsO67xwu7nr5l0cCzt399z7o7Ttnx5KrEwLrbofDmw7D1gesSA2tvW7H3uTVfw+8XPHXhEbDjiX/5k/dT/KIAyuw3D+b/1QmHGqnMv1rtnbeardlfRazEjcXhofTON19rjbW1/zzW3nmP2dJ2qxaL3dN/0t8sVg0T3vnlZbMfoP+572rY/tpLihY1v6XFEwfLMUtVrLilxayVSiTyFSOV/lokkTxbiVmWbFqaFosfpmiRbz19/T+LW159efYDJGsapHr6ehXdOFqUFXBKJbCxSaomgiCeiZ+dLkd0wamU8fMiiLKM36lHLT3j7O6+Ly2d3QD9+jvHgho1QTNj/aKitNfy4whCAZxyCWqFPHiOs8xz7CX02kFwnHIRyqMjiJvYaySSC1M9c2Y3QN0HLYH24y8ESdP63Vot4to2qKYFWiKJ2xjtIjm2LUoRHVQLP7MSAIIAdqWiS4p6MGrV7AYommmBjbf+g4JmM9+p1QgoEBQFQRBB0g3QrDhjmGxEsXdocZIMCoLlOjaZ2YIHL7pAXH/12bMXoFq5TCAYgiD2gecCaRCi438rIBgRUA2j4TPspKriOwF3d7uXn3d+LN07Z/YC5No1AA9SnuemPQ9hkBq74HFgBNF/7cMmSthTBMhz2yKWFSN3P2sBosGhe0/haGMCYSE0dAER81wHiFmNfwKZGu7nOW4KmzmrNUjRdWpxBCNK4ks60/iHZkRANBKIiTSB5HmeWRzPZbzZCtCzl64ADfUFvVTacz2dM0NoYpDrOOASi6AZBr6fpyCCKVEUZydAydYMxLIdpCUZZINEAMEEgMjEMBZiryeaGWImy4qaEiRpdgIkaxHQFh5JZpREgLj4Nngr+ozMi8xsInv4vujpdSMxaxlEcQ+ACRggpokOnEFNCkTsYq3JxAgg7u0EjL7TibY2uPuvD5l9AFF8c0Mbo0OaTEiUmhlEmKA2cQY1WZiAWi6xXe1atTW2/CuCpmuzD6Dfr3seFp5+gopAtUHdbKZgkEevGvEBwQcTwUvff0a/1pJtnX0AxeNRkCTBdF03xcYtTXDxHmfPVAziHo+iAjHTs3ixlsy2zT6AOvp6IdPeZuHoE8GgJxDIB8mb5OZFzMkoWMQcrtXKdhrRdMvsA6j1gHmQ7u1LSpKcYlH0RBNjXszhIj0hGmQmxiPqdLlUarEpFJh1JpbNQqVS7cRRWgTORICY8rBI2pmCQSKZFx4jGFYq1amb5uwDyGprx2zVwSzeU8iDTQr4gkiasWhiJM33R8OMKhG9N5ZKwS9OXjR7AFp93DxQF50CZjo9l5J4KqMiGyYDhNk+1X54JN0AEu6LpolpiCtUS6W5rcddKGS72mYPQF19nfDQuctNzMPm4ShBUpTmTN538fg9UJWRM0hoYBATaJbpi5KwYP2Pzon0HHjg7AFov0MOgYVHHnUwqkg/aY2kqM15GPAgkaJtFnFPSDeIQSKrPAqUsvRn5y9ckOzqhrfXXDbzARpYuxpa5s63rJbWK3CQWWKDpE6OhIlBZGIOY1BzukH5GIHKWOdBF2rYpYWRYZ2nLzMYoOuS3DvhQI7At0exFANNJWBDc7mRNMjhJuZOrPpwgOhY5ukATozE4ksTXT0zG6Cz7rgOBt56S7DLpWMRqCgJMGX1TE8mBok4cKoFuUEs1OzGGKg0p0b7ILRJz3WOUQ19ZgNESWayt9dCViyjgVNErBrRKfIwCPMwVnJ1J9cNCVRFN1iSy8IB216+843Xo6/edP7MBYglna7bg7rSSwyRIxE2jTMpzfC9WMAWb1IozTN6OpYY6AN0gJFMZqPpzMwE6I2fXcgYA2yKx0sTKDStM6X++GYm+PXniRVF9ofRNJkYgcwjAC+LcVEPhQwzEiAz08q9Uq0yD00nQgwg78X0hwE0GSTyUsInfEfzaDKdQ5QJTzrnPLtSnZkA0QxGy7wFInqkuTRotgiBxT/iZAb5jAmmgniNvmlqg8VClG4QY0RFprRDEiRxfy1qwLpLvjzzACqPjcHed9/WcKD7gR8JEwMmpRiTqDL9F2R+dA6JnUcEp1rd78PXXtEMy5p5AJG3wQGk0S13UDYexDEgiFPKefjfmwYlXiPxmaj4JVvoTHX3xMxMZgYyKD9OrRW9V6ZpUFNpTJCbet7kGKiJQQITfmIRT3ilDgQ+LquRmQcQ1Wwc28niIBJkEixBFadjDzl213ffzvQgEYNIh/xoHM8Xr5XL7RR9zziAUphM2rUq5k2yQoPhd1yc0sV7/owGAgpOUO6YytULvJbNGCmx82nIUHL3Mw+g5P7zQIvonbKqCEx/KCaadtKPVxMpFSE21AfsTWFmUpjPocuPqNHo/MVHHgF3rjhw5gC09rsnw7M336BFYrF+SVW516GKoDDNJf1pZ8rkiUXeFPPzgVAzT0Y6JNHaRVZXWvrkLbfoc/tnEEAd8xdA6/5zu/Eu97PgUJH9qHoqgfZ8gFzOHseeYupnQtrBQgYu1qqu97cdMLcj9jnMdHxuAJmZFlA07XBMDboD85o81TyRQUE2H8zPe9PotMgDRtIhangNM53+83hHB6z/0dn7PkCv3PQN2Llpg67FzFMQIEUKBHriVPNEP8YmDT2mP57rfWIkKQY6xFMPBZPYFQObN0fkSHTfB8hqa4NEZ9dSRYscTZl3ECBO7cG8OoNYaza7qd0YTzlYLKRwHaJ11MnOjmXJjk5k0Tn7LkAb77gERnbt0CKWtRKz7gxl3yxm+RSBDppIgSBPxPza0CcINTMxhaceippWjejKkYHdEcW09k2AqICe7OqBTG/f8UokchqVNiRZBYFHvFOXOMJaEA8Wub6IE9THm1KHRJ9FxFAyY2TRqYls9vjWvv32PYC+j03VDSgMDnbLqnoFmlacl1Z5elFPMWBaD0a6Q7OnEu1Ln0+rQzwn4/EQF2tZZSDF0TFcURga7H3v3qv2LYBOueos2L5po67o+uUIzOFU+ePa408xhyUOYWr9YQA5LNeixt6zOfppounGeIgFjWrApOVo3pdVi4XI5nt+sG8A9PZdV0LFdYSu/iXnoln9Hav6aRovbfjsmbbE4dXn452GCUMeCzkNM6yTS7CNIEl+IY1AkhX1PM0wz7vo3GuEtVee/cUCtPXB66E4vBvmHnLoCt2M/RCF2ah7Lqke/8B05hWAwycM+RpFPoHIElDvkwNGVlyTpLAEQlE7BqdRNWr88NrVl5x+0k/2toJypg7meX86gMT4qSBZp0jQ983+L1264evbi9Zl6NJXITjtiqaHZVXOHHH6+o+/aJOAcKoV1gLmONUqa5TZQxg0epPMk5c/+I0QGUAa0yO8Se1WOnXrt8/oXmsdEPsltEePg9QZOmTP+RwBipyE/5aJbjy12One7yeppPD4N46xbj9wfvv1ckTvldmMg+azR2EPorBlLqzQBc3mwkTYn0mtVelpHg4IAYaNfUaA0aMLZGqhYHthYhvWsEOxVsi8GEjEJNOyMuefNGfJyqXeOZG0eT/09t4Jun4UqEdrgvnl/z+AhNhp2IljRUgmF8CiZdcK2exjYir1vfMOcXv+/oROKZFOigwcv2M87+LsYdpDAHl11gTmxTJ3NCW7UoZauUSlEb54gdIN9nmFAVU3Nf9Y1wvn7vk1OEjM1BTf7ft9SaUsOK7fgnQqmlDS6bPE9o4HhYVLbpda038haieqUvLUPwIg42T8t1DwLOUAmL/gB0JXz2NyS9vlejo1J5ZICPFMCiJmlD3S5LtZ37R4WhFGzoHz8urMAVYYqzGWNALBZlX9NUKBmTFtCkFyGaOIQUIDQGyBlW9qTIuosZoRwI5aAlwjDaZpgpFMpiOtbV8VO+Y8JCxa+DNImEsF5QhZME78DABF5/opeUc3LD7++0Ln/o/Kbdmr9ExmrplIiDEzBvFkCt61u6FoCzxS9oHhzY+aQ7cu1K2DzIXVfGps8IFpsVUdzMQclosx0barDDjW7Bpfnte4PEYQwqg6WLEmBoLNmghVvNyGQho0MwmGoYOhY4uaoCeTbVpL2wVi1wGPCIuX3wDtHYsBlooQPfkTAMqcBfDVewF6T8zCoZd9W2jNPqZkWq4z0plF0XhcNJEtMbwLiUQCKZuEvXI3vD+CdyoQykZhDkwrxMdPH3xmkFkxYfYBYCZFTPFXubo1bn4MNPJoVXxNxyCgdA6OfQP4IVCBVyNNkuDDvArvOd0Qj1tANzaKIKm04h9Zr0dNAYHq1FpaL5Y7ex4Tlx77I8h2zmUnjRzZAFD/JQBLvgfQnk3DprdWor48rCQSNxvxxMFmPC4b0ShEscViyBwEx4rHwcT3QjQNL4xkoVJzeEAYLKtrmvcS6uAQM3CwtUoJaqUitlJoXjYDAre2sx3ZsTNw+0yfmEYV2TF1T9cwj+Y/FBOC46chLkiwfigNZTUFUWRONGow9hiGgQBFQEFZ0FCrcHyCkUjO0Vtaroz09D6uLLvyCmHO4l6Ag3AkK15HylcTqO5nicnEv6uJ+GrdspajB1AIGF2PhOBYVpzbMV5AxwvqugabnV54ZxCZI3h1l94ETkM5lTECNadUZuDQgG16mLdcZltiEB57Jw79bqZN5TL7rlrIYyuEgPLlMW5TwFgPHNl0IktXtuYkeL3YCZGIxhr1mfoeRUswEKwIPd2IICmoV5qmgm4YCFRiPgJ1jd7V9ah2+GmXi/Ke+8+SM633aTFrTdSyjjbNmEYnoYMbwSHzCoCh7zQ6OXoLR7Xg+aF2yJdrvNwcmBUIdXzo8QIcFA2OQKmyVmCeizViU7nsYczza2TSnYWx3Gp8/wTu5wVMo/0xffCPKftBpVOvUwvcYwr+IoeqK8Bv9rRBUUpCBL2qhkCQabFxRejm1sdCIMkUItDqEQQrYugSkmSJ0dpytagnkmsMyzoxapoGHaSibdIBHByTNQ4MB03zv6eTyXgyBS++xe2Gl3abKJzYYcELazZ10+K6U8NBVvLjUGUtz15XxnNueXx8W7VUuqlcKp9/2J/172jrm7OrUih8s5zL/bScG9tWyecc2p+OY8cX82iS5fpzZYJQb6SH2DYN67Cx2A4a9k9V+HS1ykBSuWlpmm8F/g3X+Jgk30QZWKomiAiASmAEg6YDCRDDaGSMFgKjqgiKTBfliBPyoOjw3EgfbPkYO8c67DXnWg2pBNMbZAEOHPKDgxvGBwe/M7pnz0lbN719pSArO9pXroLDLv0FVIqlHR9/uO0f80NDJxZHRy8sjY2+QQwinfJs7uYhqFuHzhK1B9tgEWDdQBYcycD+iazkUmeI6o+DNxoXB4jffNmfTmI6xgJQRfHoAxo47chcodGILAGjhbYaXIg8hEyeAhGXMQYZE5Pw2M4uGMi52EnSB7eeZ9WqDTENN7XCyPCugQ8/usj13NUfvPXeO2f+6kX76Gv/LcT1mBsfhRNuWWu//8wz76Lbv2Ns756LUId2sxzNDzCDFbEsdPAxqmAU/tSOFviomsF+CWG2z2+mFJoRjbcRpIAAxCT6PmASOh8p3ImYFEH7jGicciFjQrYQGNgUOURa8lfAUxVwq90O92/pgF2jCJJn0wNiTJRJM7jOcL0pjA7DC6++vXHFqidfvWDVf8DKR96cNlb9298OwNnX3AtnXvPAhhdeeXd7BU2NaRmJOjUyNYyXBLwZNjJq7fYkvDzWyYPHYBZW8vstcRMKmM/B4mOpA6ZxvfLlQ1Q1zVd5PaQZ0yFlAmPYhfwAjKHLEeZl1Lq32lxugzvf6YQ3dwIOpAQoMGCjZgQAVfM52Lz5I7jtN8NKDRRx495Pf+bigzEBo+GkdMfaj6WtH+yEWnC+4jj76QoPGTqar8HD78fg2YFOcDwx1Ca2pigIIH2wgtYIFG0DMii09SVHDEyIGEOvFR85tvVZE5wsOLHoJ6BB41LDZyNcFOpt5QSs2dwFD2xUYdvuHFTHB8ErjYGTH4PiyBA8+uoobC50vJ6FWk5HffjUdUaY6QAe+eZo+neP/P5jKOE53BIHPpcrwIvbBVi9qRWe3dOBJibyfri8jBv0MahUSlOCFJifEpKCY6DSjxoEwKghMLLM85jApPjJxLpd+k0Ii+t8PssJil6uDcM1DR7Z3Q1XvzEHrn/RhPteycETG0bgrvUFeGZ7ahsKx70D8RVeyR79VICiZYzVEkdhku/d9dgW88O7XxiFp14fhjUv1+Dal9Ow+t0eeCuXgJrtsnl9DpDb9LwH7zPGRwwosWk8nARy+Bk3O84sMdAX+pB2ChjDThQ0SQxNShSbWRMwx6ESBQJkI0BVTAuqGP2WMH7Ziubx0FYT/umVDFzynAmrX1Ts4eHyrVB8fgOMPfp/Kjl8TP9yuwEKa18fGK7dtuolzb74vwz46Rsm/HaHBEP5ClRI3yiFodqSn88F/QvMn8dKwVikJosIJcR/HzBLDF5wcBrMSOIJoMRQFxqAERpq7Z4PTB2cGoJTQREtoUaM5XIwMjQE47kRsDF+cXN58Mr5tVDecReIB3223wdwXwUwjvWgMHinUyz+Z3W8BKXxcTz/IAwPD0ERQ4AKxVqUntgBi5xJTOLmJoRWMNHc+FYKt6LcoDMBU5oYQzv6c1XNmuOGVA7Bwc5VsZNlvJvj43kYGRmBkdFRKOUQnLEcMmB8B5RHfgzROSgilc9eyiyuAzHRPSiUCteJhdwuG2Op3NgYDA0Nw+joGGMsXd9mINXYjXP94n8TSMDHE8hEXTaEJgdEC0XFRorVv+CmxZ5PFyR2MskP/gKTYk/mOHwtD4FjB+Age/L5AnZ4lLUC/YAS3mmkkY23/Bax8t/rESQ80/t/UI1YHn0DYrnHX/Dy4z/3xvM2RtswhiANDw+jYOfw5mDuxgBy6sU3Np0diHYwayT62tQIUKPGUjWU1hRMIb4hun5jESoGfkLwRHIDe6gjjD02N60CJpU5v9N5BKaK7MEPAEr5p6GwZY2rLUe7/N0fPElQrb0LOeMvXa+49w4o5NZ6eO6if73R0RG8OXnWD2Iz0yLHDX/ugvfbn96mWdwwDBBCBtXNjkjCcJEc/FdrbAJtBcAm0KM0NdffShj5YV5Vw4vUkL64dXCLsTHSB4UZ48FKDQGqoXnVkEW1Mr728nkbB7ILioM3Q7RvGCov/vHzTBj/iFbXsJAfuVEs5nd7+Zxdzudq+bGxGt4UzG1L2J8q6xd2kfcZ+4s3F5uLWa7HxoPo1ISm1ogDvhdd538BmAuhUysUoIkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDI6NTU6NTQrMDA6MDCwFmnzAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDAyOjU1OjU0KzAwOjAwwUvRTwAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFoldedHandsLightSkinTone.displayName = 'EmojiFoldedHandsLightSkinTone'
EmojiFoldedHandsLightSkinTone.defaultProps = {}

export default EmojiFoldedHandsLightSkinTone
