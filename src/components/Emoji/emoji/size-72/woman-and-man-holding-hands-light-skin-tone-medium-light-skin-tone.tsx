import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanAndManHoldingHandsLightSkinToneMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdCBYDViy8xgAAAAZiS0dEAP8A/wD/oL2nkwAAJH9JREFUeNq9fHecZVWV7rfDCTdVruqu7uqcCTZJaBDEQFZQlBnFMKM8YXBwfOj4xmGST8eAGd8oM4hjmEHMCCggNAIyhCY10A2d6FS5K9904g7r/XHuLVoZoAvpufU7datuVd21z3fWXutb31qnGP7Ih++5SNNULlywoKujs3Oh5/m9jDE3SZJEpelIeWa6f/jA2AwAwqvw+P7fnoEdm7aycz504bzWeV2nFFqK63PFfJtwBKyxiIMoqVdqu4NKddPArv07F8xvS07/wA9esT35Sv+wVCwClpDL+cuXLl/+niVLl74ll/MXOo7bAiKhlDJJkpTr9drOJdPTPx4aHLqpWCpVtu3Y8YoX+9BNn0Bcj70TzjntgmJH64dzxeJx0nFKjDFOLLsEfrFELZ2dSZokw+3zun4zOTx6LYBt/37V+fhfX/jVnG2KV7rYNE2x4cQTz3Y899tpmr5r9erViwuFYqvneb7reW4ul/MLxWJbqdSywvO8sxzH7avX64+vXL68NjQyMmd79/3wCux5eqdcd/JRl3csmP81x/fWWat9rRRTaQqVxNBJDJXETKexBKjD9Z0TheSnXHzeEVtPOHPt4JEtRdz6wK7DD9DZZ56BjrbWE5etWHGdUuroHTt3ct/34TgOjDGw1oKsBWMMUkr4vu8IIY6RQiyZKc88sGL50vrQ8KGDdOd1l+KMD/4bvvjlS9+r0vrn4nqtE7BI4xAqDqGSCDqJkMYh4qCGsFpGMDOJ+swUTBr1Ms5WjO6b2di1oLX2/Z8/fngBOmrdOgwODLavXbfuq63t7adOjI9jamwU9VoNlhi01oiTBGmaIk1TKKVgiSCEYIyxtWDM2717931dXZ26XKkcks2Pf/QCXP5nb+rLldxvVCYOrNzywOMIa1VwThBCQEgJxgUYY2AAiCyMVkiiAHG9CpBdKB33uZ6+/OYz16/Ej+/YcnhiUCGfwzsufAfu3Hjn+YyxsyYOHEClUsHJqxfiyAXtuHnrINI0RT6fA+ccUko4jgPHcSClhLWWu677530L+343v3f+L/b3DxyS3fZ5rVCxPrpenlidhFX05DtQ2T2N6f4x5Nrz6OjtQltPD7x8HoxxgEkAElYDYS0BF4lTaJWn79xCP8iVvPSwBen5PfPwne9+p71vYd/7JsbHcwxAHEU45dgVuOD45VjQUcTPH+9HVSvkc3mkaQrGGDhjYJwDAKwxLUKIS5/d+sw9y5YsmdnX3/+ydr2cRRqZZUlQK5AhLFi4Aot6XURhDVFURzocYWpkCFwwgHHAEqwysKmBdhScbgkis6ilzcsDdHgAEkKgrbUVjuOckKbpaxkRjCX0llyc+dp1aF84H2+f14ujV+7DrzbtwFPjIRLuNz0HZAyMtdBagzN2crFUOqVQKNx2KAClcR0qIccYzbiW8PwS3EIR+e5ucM5hjYFVCtYYEGXxDwTAGpSDCVTZATDGXc6YAPjhSfMLe3vxxNNP8yPXrTuPrG2zREjCGt5z+lrMpARV01izchmO7V2IFatWYPuOPdi4ZT8e3l8Gc7wsRgAAEYy1LUKIt2569NE7e7q79PjE5EvaVkkCnVJCxlIOJRZEKR5+7GHUgzqWrVqG9ceuBzU8dXJ8Ao889ASMtlixbDEWzm9HEE6CyMaA0AR7mHgQA5YvWdJpjdkQJAnSOMB7T1qO9WuXI8i3oMIkbK6AUr4TTqkFG3p7sWz1CqzfuhsTM1Vs3jWM7aMVRIay2CTlKatXrugVQgy+HEDBTAqladAmOnSYX1BEaG1rRW/fAvT0dgOMgTEGApAv5LF67SpUKzUwwSCEA64EoiAcbp+/Lopqc6MYh+xvkgtwzhdEcbx4bHIKr+nxcf6GdeCtHTgwHWF4dAYJkxD5Ery2TuR6elFatBTF+QvBvQLedvIR+NCGReBxFZOTU4jjeKkUYrXjOC9p9/rL34r1r1+KcCBekNZTQRZo7VkIU+rDxgd3YbKswIXMQOIMlvt4bjTBQ08NoXPxagjhwKYEXUbX+KMDLbXnwlcfoLbWFni+B0u0NIyitiiK0NfVimnysW2K44H7n8JdN9+G/pEZaCJwxwF5OeyeIfxu00789rePYCbXjTVr1+Ctr1mMehAgDMM8wFY4QiLn+y/tvP5HGNXToytjoa9TDd7Wh3vvfwyPPXYfQlsH94oACIwxJLINt99xL7ZvfwDa88D9AqozMXgs13pSdbqHY4t5rgtLQJqmy5M0zQMACYlFK5bD9xbhoVtvwPHHdmDVEUcDCAEigEmsWLserr4RyxZFOPWNr4UYG0XbU8/CGIMoiqXvecueePppdHV0IIrj/9a2KXRi+LoP0q4yBmXEYZWGiKZw8TtOQ+X0Thx9/GthVAKyBGMNutryuOKyCyDYFHpa8kgOTMInCan5AVbIT5NOXn2AjLEItEKSpp3WWnDOMDJdQ4Ep9CzwcfU3rkautRWtRRcUhyAwSAHMzzN88rN/Bx2OoZRvR31mCKPlENZaJGmCNE2753V1SS6EfjHbl3/1B1j7uT+D4fKZHOd1UmkxrRxAX3sOi7pPAs1MIrUGXEqQMSA1gLXLF8HoBdDTo9BxAB8EbeyuSbRW8nryMARpBpS4YTHZViEEPNfDMwMTGBwYxrrueZjX0QXmeaBwGiaJwYQEyIJbi/a8ALE2JNUpTE9O4+n+cXAhYIkQJ0m+VCzyOH1pahI57eCcPVYPRm9y/PrFNlWOkQ44ZUGiMjyINE7AGdDWtxjSz2VgkUUaBKjUox1KsB+2TtyVjrYdc3iC9HQ5ZJwL35US+ZyPkXKE3zy8FSqoQ6dpVntxjtrIIEaeeBiVgb0AALIGRifQYYCHntqFHaNl5DwXUggYa/04SYTW+iVt3/10P3Y/u2Vy93jwf8Mg2pkGNVitYGQMt9dB29E9EPMYcssLyC8rACUNYxKYJEFUrehQs29ctNbeedegxCWfu/bV9yBHujDGwHUdcMbBGQPnHD+6fytOOf4InHJaG6x0GnxFQUURVJIiqVXguB5sHKF/7378xz1PQoPDcQSstZBCFD3XFcKYl7T/1R/ejG9/7GJsnu7oX6OGbwvLM0fBdTA+PgoacDA6WUUQxRCCo7drEjkXKPIi8nAR1uq7SObv/tEzGl+/9f45F+aH5EGOIxBEdfJcz/qeB8/zUMjlMBUofPnGjdi7aw8orGFy53Y8cdtteOy+B/Dor2/HyNYtsFEdY4ODuOYnd2PnaBktxQLyuRzyuRxyvp9zXdfxPe9l1/C6r92Id3SO2MDw71VnKk/qWg3dfi+6nS60qhzMeAq3JtAl2tHjzUcOHmoTE1E1VNe+947X7RnQra9I1mGH8kuLFy7EwPAwW71ixTcdx/lLEMFaQpKmqNRq2LCmD1ddcgGOWLcSaRgiqlbgFYrwi0Xs3juAr99wO+55ai8K+RxcxwEXIkvL4A9yxs4n0MwzhyCkXf/JS3HR4PX4TfcFZ3W1eN/smDdvld/aBuk4mVrGGKwl6DhCbXIinposXztU559yJKt/6Bs/e0UAHZLcUSwUMLx9G779/R+c6nnuaZzzrAjlDCDCzoEDeOjJ7Vi/sA3d7S2Qvg9uNR59fAs+8rUb8cRzwygW8sj5PjzXg5QCnHMQ0dZavfYTsqSmy+WXXcevHtyMwvHn45d75N7l+eBpFQUrKY0XW5WybGuHiMtllCcmp6bL1S+MVPRXWpyk9oF73g2M/+LwSa61IMDp570FSZL8wHFkKoVcxkBdzJqilDJfLJUKne2lhaVSsUUlCawJwUDwXYm2gp/WjBx3HafMyYYMNgTxSWPMviRJbu0fGg4729sObbVvfhP+aVID5Uls+HV5++rl/p7CaStfZ61lsATGORzfQzBa1ZsfGdn1GbGsjuUlxpwv0isVxNlcfrmY96GEQFILxIYrvjx/wQmnnu2VSq/vE7Wll7hPHzWvxeu0lrKq2loIMthRoeiGdM1g4HbsVWH027GnHr7lsa99ol+WCooxTjPV2svavWLpEsQguY6JE7s4P6PAea9kbFVR4rSec9e74tg1gLVg0gE7MIn9N23C2HS0t8Vx7w8YpqbANg977sZVE2MTt68/Abf88ueHByC8ifCG921DmlBvV1fhc11tuT/N+07BZYSznefwOjEAkIUlAidChXzcrNdgD3UBXEARi4NY3z0ylXxyYbvY9u9n9b2sycsWzMMYkXMqE5euls7fL3HdBa1SwjJgf5Kirb2Alne9HjhyOVj/KGZ+/gD6B6ewplhAh+OgYgn9SsXbiH693899IpfE/TMr1+D6X/z01Zdcf/3pXnz+P87FKUc+c0XoFD/uOcKDJRAYhqkNCXPgcYuUuxhkHbjbrsI+1gPBRSaaEWSqzerOYKD1yvJPf/P+d12ov/OL37yovfN72nGysvCtOXsZ2DWLhZjfIgV8xpFjDBaEmWqI6aky8svnY+KuxzG9YwRtvoMluRyYFGCcgxNkotJ1daNbJkot9+Yr5fSRoaFX34NGb7sGbTxu3UU9P7l+avnZ27EABU+i4Dso5R34rkRBGLiMkEAiJZ7pw4agjEU9sViihvC+3Lbx9nTqIibd/+o5+yMvau/ylhyqZNteI9wb1knvLR2ug4KUKAiBHBeQnGNAp6iAsKanA8OVAIkBluV8cCGQcIYYDBEI5VRhe5qG+z3vitah4e8H556Fr/zwx6+eB+370WfgFEuISJ4wv73w8aW5NH/nfoWxiMESIDiDYAwGDAkJaAtobRArg2qUYmQmQn18BH+5cBgrW1FIUj0z/PTm31516UV0zc/ueYG9d5ccLCcGATqnD+JjrVy4kTUItQGzBEEEB0CXEFgkHeQSgy7B0SklLBFCrVHTGlNKoWKy+pEZ45RVOn+sp/sOMzZRe3xs7FXUg/IFzDvzw5COe4aVbtfaDoYz2qZRrgaoBjFmajFm6jGqYYogTFALE1SCFNPVGJOVGEOTNRwrR3FkO0DCg/T8c7pWrVkqc/n/vjFpgSdJ5VuJXdzKeDE0GvuSCPuSCDNpikhrxEpBaw1jDIw1MNpAKY04VQjTFNNRhH21GnZWy5hOEhQ4R5s2xzm1+rne6AiufPOZrx5AXAgM3frVbu66Z3IhwIiwNKdAxiCOU1TrMcq1JlAJZuoxpmsRpmsxZuoRwijGIieCIAsmOKTnrZJ+7ozOpcux5yf//EKJxRI6DPW2ML5KEjCZpnhOxRjVCepGIzIasTGItEGkNCKlECqFUKUIVYogVagmCcbjEHurZUzU67BKoZ2s66v4wqlSqaW+77lXhwf1/+KLcHJ5GJUeLxz3KMY5jIoRxQmsJShtEKUq04+1geSZ/KksIVUGYaqRJAr1agCdWCBXgnA8R3r+haPbtv7Y8XIvaJC1dbTh18OT+9/zkXN+gmr4muEHt4p46AASa1E1GkXNAQIMEbwGcTUMiAmok0XZWkxrhbpKYcnAbfNROmIpupd0o1ultV/f+ohuby28enLH2PYtYt4R688TjtMKACoMUK4bbQjSGAulDRgBxhgIzkFA1sUwBK0NjCHsnGH743q91fPy7VxKSM87ySsUTxKed9eeGz+NFe/51KzJiz57Kd6eqkKhrWWD9H3RcfpxcG65F7vvfgI1a1A2BgyNC0EEDkADiECoWosZY1A12Vabv7oXJ/7F29G6sBdEhI6gvuAv1i7JcyHCL1/2lT9+i0nPQ/uSFYul676ZCQFrNNIgmHq24jxgwKwxFloZJEojSjXCRCFKFOJUI1EaWhswItxX7b43Det3W6UAziA9v0163oWTz+2Q8qCC9ZFrP475fQvg+v65XMg3M8bROq8LK49ZBS4FDGWgJGQRWYvIGITWImxsuURrqEYLHGRBBHjFfNYzI4BxcYyQ8rVCij8+Bu36/lXId3RD+v4bueuuZIzBJAlMVH/kvnrPg4KBW0swxkJrgzTVSBpHqgyUNjDGgjHCDPL1KIx/qeMoBBG4lBCef0bLgr4V3HGx/V+vxMPf/BgKLQUcGBpZ7eS8vxGOU8oajhq1qSqsyqQRQzQLUkyE2FrEZBFbi9RaaGtgrQEHUJms6tp0OW0WtEI6LdKRb6tMVZ1H//Wv/ziA8h3dqA4PFqXrvU0I6ZIlpGGgTJr+cpLymoFARLDWwpjnD914ttbCkgUD4Ajkhsv6fhVFW6wxYFxAet5Sx8+d0blkOXLd8+B6LmrTFVe67kel4x4Hls21kDFIwiglY60FQYOQEiGxB4NDSMlCEUETwRABINRmapO1mepWMiYrsqWEcNyzii2FNY4j/jiAnHwebrF4nHDdkxkXsCqFCsNtSMKNruQOGv2oZjFIBFD2CQTCbJXIGKRkhTdsWj+ehvWf6DjSAEE4rpSu9/bRbVvarTEQksHL+UcKR7692a4mAoxKdVCu7yGy2gDQsx5Es+Ak1iKhDDgNggFgAWhlzPTI5K0miStEDS9y5FLhiAvvu/V2PH7dX78ygAZv+Spm+vdJ4XoXcel0AwQVh6Ti8Jd/+4GvDLphuQhLAOcA5yDGAMZAjIEYBxgHcQYCA4wBj+qFUmVI6HrlpjSoP22NARcS0vePk553YqG9C21dHeCCn86FWNAY1YBVCmk92DOyb/QBQiZFGwCKLFKymSeRRdL4XjW8xzauDufIP3HPk0+pOP4vazSQeRETUr7zdWefsQSWXhlA0vNQmr9gpXTdc7kQMFojDYJ9jkl+fueRF6+Xj997rnz2MTgDe+BMjsOpViGDOpwghBvU4VUqyI2Pw9+/B+62J8GefPDEjpGnT//SzoUDaVD/no4jBQYI120VnnfWnkd+5wzt2u9LxzmFc5F1qo1BUq0EcRBc07+tf4RxJg1o1oNSazPPsRlQiggaFhpZk5kI4AzuyJ4DqU7T61QUlUGZfi4d5wjpyrNa2wrY9K0r5wbQ4M1fRktvH6TrvYE7ztIstYekwuDGT/zg2b2+71zOlVrlTo8jPzqA0uB+tA4NoGN0FF1jY+gcG0PH2AG0jo8hPz0Jr14F03p+avGRX/3qgZKpV29Kw+BxMgZcOsLLF8/oXXNUn+M7C7kUx7BMUEMS1G1Uq32/Vov+k5H1wABLgEYDIGRbbNaDbDMGAeb5sUjuOPCPOfOEu9IguMmkKQAG7jiOdJzzp6drRSHl3AASroeZ/j1dwnX/REhHkjFI69VHHBVcf8+g08sYO51xDiFd8OYhHHDugPHsGVwCQgJcAJyDMcCAneR7zpFffsIdTYP6d3USx4xzSM9b4+TyGzzffwOXchEAqCBAVJnZmEbJ1W/6u+8G4CgCgG16ELKgnGWyLIMljS2nyWYe1Oycc7R+9k/+IY2D4Otpvf4sWZsFaylPllIcy19kxvS/BWj/L76A3nP/CtLP/6l0vdcxzpGGwVRcr139D3eFA8Wcsw5AH2sEXzAOYhzEBCw4DDg0MRhiMDa74pZsM3h3WuCY0cFhhNPTN6dhcD9ZC+F6HoS4zCvkP8oAP66WEU5PP5OEyVU6TYfe7XLBCC1oBF7TyGJxM80TIYZFAoIiC4NGsshOXABo3f/sfixdt/yZJIo+q+NomjEG4ThdQoqLKpVQPvQvVx4aQF6hhJHbvnGs9Lz/zV3Xy2JP7T/L+/fe/tC2MYBhDYHl0Rh5Q0OCtwQYAozNgqRplAKGDspmALdEa9+22mFtq46cTIPgWqNUhXFukjQ+SSfJESqKEJfLcRLFX88x9eRtt98Bj3MBsBwsQNbC2Cz+xNYisgahNYgasUg1aAdZyqgPGAfjPhjDE/duRmVy5qY0DK+1WhvuOJCOfFtrS26978mXB6j/pi8hKs/4wnU/Ij1/NRcCJo1H0yC4Uc1bqZbNK0oC1gJgjGUeRGAZF2ochrITMDZTF6kJEDXmmiyt/rdN9cItdz2FuFa536j0KQKYkE6ULxTLNo0jMDZE4PdHzMf4vjomE6Najlw66KxbDLWwC3FHEXHRQ+Q7CB2BUHJEjkDsO0iLPlRHCXZBJ9xVC9G6fpXtPH5N2HXSkdj4q4fQ1tOVJmF8nUrSxxkXEK63REhxWRwr77E/II7yhVU7B/P8o5kQ5zAhYJQCWerXabrvsT0RJiqpB0Ify/bX8/xnlgdZNDd/E7Q/VMwtYX6sqPTbHbX6aYsREtEYF4J3LlhU0EnswNpIqcldyqYTnDEsPe149FpOHqeE0OBYxoK0BTMmazMbAuMsUxGFAJMcLucAZ2CZMChAgNfZAgbCiX/1/4ae+c9/3AjQScJxwBh7q2D2O7DqsZf0IK/UAul5Jwjp9Koo3JxUK/cS0aCKwvqje+tQ1hYJ6AEYGOONoUn2QnGSNV/JhpuaQ06MMVhCe6RMy2RNQTgugciG5elwenQoNsakpe55+ZaOru03f/3bVc8VIEtwYRhZ68MSOOdwPBduwYcs5CBLBThtRciWAmQhB7fow/U9cMEzMC0xsuQTEchaHP/ha7DrpqtBjA0apRJrbMqFWMAZzjmhdwse+eaVLw6Q9HIA4wUmBFmtb7BGP6iicNPaC98VPzsUwBLaAdbFGhJDE6TmCC6b/XghOE0gCWi1hJ7hmRT3fP2zyiTJ1ur4gf1Tg/uimQPDKeMiyRdL8TWjRHlPHCwP5xljEELAcSUcV8725pqHEAyu58D1HDiOBGezp1hsfrHx85fCaA2A7dep2pWE0Q+541jH845+eN8aj8O8OEAmTUBG7zNJMmq1CsLpqevD6ekb9919ByJFIEIHEYqZ4zZP+uBt1gw22TP9YfrMzqdgLM0vRwYXfP6bFFXK10Ob98dBdElUrW5J6rX9KoruGrj5K3jNh//lYIA8xhgcV8LzXbieCyFmT2ESQCClRC7nI1fw4eU8cDn781zTza21SOt16DjepcLwPqPVrYyxSca5a9OIk1EvDlA4PYU0Cu8Ky9NviyrlX8p8fmDFxf944M+/258VoJZ6AOQzfFgj7tBsMLY2K1DNQfHH0kEwZV84RFiQaIsLvrgZS97xNxN7t+3afPLHr7vDkc4lKgz/Iq7MbAonJ3AQ+gyAwwWH57vIFXzk8h6kMxtG7wewWzoSuYKPQtFHruDBdWVznU4ToLP/4d8R1mqI6rWB2vT035LFHp0kB4w2Y3GsjFL2xYP0knd+EgBqAJ44+PVEGSTKwHM4EVCDpZw2BBiALMAsgZmGx7AMGLIEawhaE5TO9r9kVqVkZxJtVZQaxCobfTnrn28A/vkGAHiucfzeg0CMgXHpSPg5D7mcB2MspJMBQETjYOjhgsN1JYQQIAJi10EcpiCi3wuSp1x5LQDYB752RRjVgx0Jp3eDEH36W5vSz/yfM+c+5TpdSxEri5nQbFzSLt530XH+F0jg+JEoxrRmiElDswicMQ3GqnlJbZwRF6TgI0aXE6M3h8rQuP3Cz55O7p4IsNsQoR6ruY2jCA4hxezW4nz2vGsgBA3iA84PGmB/iebWqR//FgAoANubr73xk9+eO0C7H7sBADD2i0+HUMnvbK71Oe54x2ubeVccp0ijKpKgNhBHyfUdHS2f9PL5Ntf34XjtEBywSRybuO3uj53Hnlj0rkxe3X/o3TsCY5Y1QOFcwBLAeCNdEqoAqrZJDhvgcM7m2D7+I25FAIC64khqilqKrnIKLXAdBzlrYZIYca2CkKd7jYMHc6VCPdfW3ubkC+BSwmqNhJhUceoxNrdp94b2TAywaGZOzsAtb8YXAlAGMENN6WLWi/jvJZLDMkD1e4ttGGOMZYvlAlw64I4LcAHGxJOW7E4mxAh3HHDpYJYScC4Y5y6b84IZYBkAZlljuo03QGomJgAhEYIma2cNisH+SA96RQBJ1+MAy4EouzeieX+EtSmAzWM7d0yRtTutaURw28xizGWcl7gQ2P3DT83FKBokyzbJZgY6bzKupoZWO1jBbF4YNGn//xRAwpEuA1rRYKbWGBitYa2dBsOula9/o7HWbLFKUXMUJkt18BhjC6Sfx9y8qFnScJZtr+fJabN6AZAAVG+uMSOubJbAHpzmDytAYAAT0iegnYgadZABGQ2ytgZCWccxyNjnrNax1RrWNlswJADW07FkydzWyrKlMgZxMHufBY6gAFQZmDmYwc9OwWVA+q/kfF8BQAyMsxyIStQghdboxtAUhUQ2ImtBZEes0TWrs9uUYJvki9p+9rFL2Fy9losMGcbZQZ7DmoWwBhA21JYGoI34w/kLiOLhBSirIPIEyhFl94HZxkFkJ8maoBGTxsjaKat1w7ua2YW1vub8dzPG57DWrHpn2R5rBGfW9B4CNZoXANJGfXNQjdgEiInng9nhBKjBahsiUEPeaMQYosE0CMLG1qsS0VhWQf9eTVZw83lBlua2TMYZAxPNrdOM3Q3RzjbIXkBEWTOj+bPZQhmCnq+iDx9AWbaiGETJC+ewqP/o93xQk7WIg3oAoL9Z0LLnvcEaZWlOU5XNt2BMcM5+T2JpgNUAiAKyZKwlNOUYzkXzdlDO/ieyGGW3fIdEz2eMRoWeENGO/nvvBMhi/tqjFBFty4qohsyRFbMzE/t2GCIzpxjdqI1lM/DOvmdGIUzDg6pEUI2E0IxdzYzGQXOnjHMGyGoNnSQBkT0wG7SzYnHaGrNLJwnWfPBqxNUyyJrtIBs1b3ZryCDDx7/nA0TazO3CZPqKbKb45wGnZhZLAdSJKKWGejDLl7JxHAcgRocdIKPx6Pf+NQDRNrCsJso8y+w2Su1vxhYdx7DabLfWjrAG42aMJwD2lfftA819cpkDcNgfalDZ+ySNIyRQkklRjTTPOBqD7y5eAa+eM0Cr//xzOOOqzxCAZxnnmkuZSRvGbp7au6tMNvMMnaZIw2CErH2m0eoFEyICMGqUmtu1bG4RMNHMpAwHp3sogBQIEQgx0fNJ4aCgnmuk+sOfxbRKQZb6GVjAOAeIUiK7efEJJ1syGd/ROsGiY08IrTEPgQhcCDDGYrKmCiKs/cAX5swuwMB4o0LPDt4ggghntxkhxWzFzyGEaJQk4P8zPAiAVQqMzAhA5UzCNDGsHTFpijWXZCd+5Ie+gvLwIKw126w1YWNtMScb8DneN0pk4TEKtdY3jk6UJ/sHx7F/cAy79o5g3+jMWKLMVzsL7hRAByzZbwwdmNm3e/8YBoYmMDAyhZGpar2e6P9Y3OpX5prKXtG/xxmJHIwlrjixjUESwRjrbA1bOt7cNoHln3kIe//pFKz81P3ou+D1+MF131pzdsm4AEFb8K1Ri5Ribv8y5NM//R3esuFoA8LjlihypQSBYLVGmGjuSDG4ZRiGMWYYY7ekSn8w74llTEgADLHSPNVmYuto1eydCA+vBx139SZs6NmPR6ptb44tW8hBGIt57ufTvevyp30J0qYN5DXYZcNyU7XlmFpKkoGgifVuTzvfcM6SW3D8lx46ZJvvPPVYdBU8aYnea4G+5tyRyNyhLVZ6RaIMgkShHqXzCOhzBANjWR8fjOUZYx/kQMeKrvzhBchYA3bP5YV2n87IC5KkFcraob2qJbzht98BawBE0MBMzjyRdFSGYxdMK+S4cTo98/a+TV9rd+Wh+fpH/+StYFYhTPWbPcn/rOgK5nAGwbLOCWdsRhs7rIyBNgapNmWAxgBAMoLLgRZPoOCKMwVn7xtx57MzNxx3+AByCy6O6olX23zxeEVApAlauralICvPpJ0Qjcyy89Nn4f3nbSfl5naOo0CBBqrWxYTTcWJ33m6ICqVDsjc0OgTN5EIi+/ctnpg3v8VHuy/gcoIyBMH5Q9bSw81IvmnHnr2eFL80NgOnI++gp+Sh5AqPiK7sTg4cS2mM1590wqsfg07+7G8Rd3fBHx8/9W5aNX/v9BK4MBgIhRg0ev0Ddw2I+SsXzzLAvcU+oDbGfhQfgfsnLUIrsF+JVtL1t9hnnrnruE9vNJs/9eLT7he+7hgEUYqi77wlSswGagxFhIlGkGgYC3hS1MM0TXOuA1jgsrNPxOhMGKTaQlsNZQmSC1SiFImyy3KufFeuc95TY2OT9lUHKNIWfd/7IdvzptOW6UJRxNSdva5qCMKJJe78Ti/QZjYKlgoFTATRguFCgVW9EjgIVVVFPYx6eXu7o8xL1xuxMtDgPmfsLMGZU40UKqGCIQJngC8ltLUqiAzlHBfgWW9OWyMcIRCnBnGqGgwA8BwBBpw6OjDYxhimX3WAqspi8+tPIR6lv0vKlfcD1EVgmJkumyCMtwaMJdo+f2G2PPoUlDHPJlPlegxWZEQoz1RrcZLeRq0dsQjrL823tAURdDlMtniSn1X0nRJRY0Ddkom12RsrfWtfd0krZQAw7DpQgbX0oO/QFk+KdZwzh3MGa4kSZaYCZW611takOLToMmfiVLrqdlgiXwp+qRDiEiLklDEbDdHVDGw4ZAA+fy4AIH/VHbBEJYezy6WUF1kCtDU/tdb+G4Ag+sJ5L2vv1KNWAUALB3uH4OydYJhnLU0booeMpV/D0tNgMA9v35M1BNethCFwyXEk5+xsztjJALot0R5LdBMRNjIgfnDb7kM63/8P1K+6V81D1rMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDg6MjE6NTgrMDA6MDBtOdBYAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA4OjIxOjU4KzAwOjAwHGRo5AAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanAndManHoldingHandsLightSkinToneMediumLightSkinTone.displayName =
  'EmojiWomanAndManHoldingHandsLightSkinToneMediumLightSkinTone'
EmojiWomanAndManHoldingHandsLightSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiWomanAndManHoldingHandsLightSkinToneMediumLightSkinTone
