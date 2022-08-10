import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonManMediumDarkSkinToneLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBg4z+HA5OQAAAAZiS0dEAP8A/wD/oL2nkwAAHkNJREFUeNrtnHmwbWdZ5n/fsNaeznzuPCXhhgxkIAkkIJCkoQGJjHaJihYorTa2Bc5toYKtpbZiO0uLDSURqkssurG1GFJtEpCQQAIxAzdjJzfDnecz7WEN3/e+/cdae599Tm4CGTBWtatq1T57Wnd/z/e8zzuua/gOHJ+/+lfpas+e5XbumHFTV6Q2fXFikzkxGkMsDgty66Lt33mZvHXxh+Ud/PUNt5z2Oi/fPsnXXnOEL+//05ktfsNLmq75ssT4LVHFZaF/Ko/5XT3tf+OAHD7QNm35npt++zlfi3kuL/a5q36FK9sv4578wW0b/dy7Zzvzb5/YtvFsv3WqZSZSiyi6mIdwaHkpO7X0jeVs5b8fXD52Xds380u+/JNrrvWl1/0+ffLmLja+cb41+xNTmzZcnm6bmTbTDYcFWcmlPLTU7x8+uXept/g3x8OJT140efGhm07+I2/86of+5QF0xY+fw833/yHfbO69bKOf+4MN27df1XrN2da8aAM0PVgLiQGrsJihNx9mcMtjy0dPHv1v99p9vzNbTK686ovvo/HWHdzQ/SWOsjR5nt/+y9vmt7536pW7J92rtsJ0E6KBUiEKZCV67wl6X3wonjh08CsnihM/N5vM3XUwP8DVX/m1f1kA3f/ajzEgv2TOTv/lhjN3XNZ584ug04KlAAGwBpyFpoO5BOYc3HWU7t/fXzx27PE/+er0vt/c0m+v2BwWGtnkRdm2X9+1ddd7Z7/vwtRcuAlORDhZQBYqcETAGZjyaHfAyufv5cTj+79+ojz5Ey3b/ObFX3rfc7Iu91xc5NbX/CEr2p2fMzN/NjUxc/XElbuxxsOJrFqI0WorDBAUlgMsCZwzQ7p1wqV7+y9NFsr09rnDtxxLe/6Sle2/euamXT8z/45LGubsjbB3AKdyCBFUIEaIAfISFgYYUcxkSjzQ3U6Iu04Ux//Pe858w+Av993w/AP0lWs+wGX9q+j7Uz8y4Sbf29o07ZozbUweqh1GV09jKiZ5WwG1KLBzgubGCd98dHDp3CkjW7OpV541t+MXNr390pY9cwM8OoAiggU0ViCFAKGsHwMsD9B+RrGUwSCehejjuxu7/+n128/lk/u+/KzW558tQM1ikjsb/7hx3mz6EWd9ErOSeHIFu2Gygj86CBa8h0Sq50lSPY8CjxewfZ65772s07px6gNRo+m87uzUbp2Hx2oGolDWYAwfa6A0BCQvyRa6hLzAWJc0bOOH7unf8+kJ21l4tut71gD5kGAwF3rnz1eUMisosgKXF1gUnAPvINbC6j0EgSRWfzsPJwJm0yztH7q0gQHUwbECpDal8ERwtAxICIQyUA4K+v2MrChRFYyxF6Y+Oc/jvvZs12eftY2qxak7x2CmokZiiISsIGYFmhWw/hzk1dnLoDuAXh/yDBYL6AIrwEIBeQH9rPpcP4N+/b1BgQxyYr0RxSAn62cMuhmDsqDQgMKsEXOREcsXr/zg88sgqxZVnVRVI6oQI+WgJPQLjCjOe4wT8FIxyQ1PW7n+oXcbPofKrGJcPSVCFDREJIZqE0KgLANlXpKtZGTdjDIGrAhOxSBm+2bdwoJbeH4BQhWjCiqoRCRaQq+gbOWYqJhEcN7XAAm4WAFkDRhbcdiYOuAYE3WtzxockYhEIcQKnFBGyqKkGBRkSwOKQUHQiNMqBFCRdNvyhTwwd//zC5BIRIhRJGJFwAqxXxKWc1wEmwrGCzapQXIWbFz1aKaOkcwwJFsLkNbARImEEUCRUJSUeUneK8hXMspQEiRiRDASCBqX7+hcz/Mu0kpATDyMhELFp4hFQyR0C5wYbENxqaKJYryssmcIimEVrKEirrIAESFIJIgQo1SmFSJlXrEn7xWUeUmUWG2WCEjIxcS9mRvwb2/+zecZIA1g4h6J4YSzcZuKRY2gRUS0REvQVCEFEgWv68AZA8itAqQiSKyACeOPIVKWgSIrKbKCsggECQSptUqEKOFw0HCnffY+CD9hDKWqOe+s7e1mI511zk9aa5qAM8aAqqpSRpVeCHGp3x8szk5PhJvvebi6Qqcg+OxRlltfNxLfJtGiJmLEY0oBiWgwEEwFktNVcR4BRBVUjjFIYwVQlEiMkShCjBU4ZREIRUkIoXpfIiIBIxEThaDlbV3f39fW5mih5519Nlme23a7PW2NmQHaxph0GCyragRKa0wPw5KKLDnvo3n95Re/L02TC9I0Odt7v9l7P2uM6RhMMsRHRLMQ43II4XhRFAfzonigKMNdZQh3DrL88f8x95Nl2rQ/mMTOtcEmTe9TWr5Jw6WkxpNYh3MO433tyU4DkK1PoxULohBiIMRIGYVSImUMlGWkjJEiBkqNlFJSxBKJAS9CQ8Ig0+xdDZP8r3ee/HjLe/8Ca+351toLnXNnW2vPtNZutMZMA80aICOqQUVyUV2KMR4XkUdF9T7znre/SVrNpknSBO891traoZgxM1JUtd7BkizLWel2y5Vud99gkN3cz7PPvLV10f/9AXflR5XGVWIdzaRJyzVIbUJiPc44sK5mj60YY2rWDAEygKn0R2KstCYGCqlAKaU+NVJIpKjBCRJAAi1Ryjj4+h9nN/7Kg3rivNQnb0i8vyRJki2NNPXeVRtlrcUas05Lq3VKrXtlCBRFgd+4ccO3zOiNMRhjsNaSpAmdTpvZ2ZmkKIrd3W539+Li0ttvXH74Nin8yR9KXlVatQkxYoxgTB0GDD24VKEBcYw9RmsG1R4srsZBOhTsepNEhKgyMi3VSncSVVQKPhVu3/l4uvLJDa3ZLc1Gw3rvsfXv17EShq4rZQxJ4epYrJGm0G4/A5HW+uLG0Gg0SJKEiU6nPT01+eo7Th0sLs72uZdzLplEVFZBQsd/Xs0eZfX1qKsIiozFV1qDI8jwrD2W1qJsJdLG8E17lEcmV7ZuasxXC600YgTuaAnD1435lvWfZ+3FjDH4JGFychKfJumtS/u4cGUXE9pGYwQrqwmn1Yot1OCs2c+1YZCpXzI1iKqyCtIYOEaEFobcZNzaPFhpHBBr1jEmF+apimLrP1M/f/aRdA2S854mTRZmS76mj/Hm7kUEVTQGML6KbVRZw/NxcJQxoFaDxQqYmgV1bKQqmPpMVJkwhuvs4zwsJ6Gsfs8wymednp6WKcasNbchWMbgx6m3PoXQdc9Pg8wTgLLWcPvEPs4pNnNBuY0olasHWwmw6lrGjNeLhiDpWCTNWvaoVtEyIjgRpo3jIY5wY3yITHOcsU8Q3ycznzqMWcueWq8MYKzFh7KsX1x/Ca3XomMbrE8AyIx5OolVNr9Mxudad7MlzrJROmgMGFwFELFy8acDaD04usoiqdljpNImq0LbWHKT8T+Luzmqy3jriMONW7/B307NebieoVMyBp8XOQYz8lSM0XNc3J6UaesAKkMghMBDeoi/c7fzLq6mKaZikbFjIl2L6GgZsjYHU10V5RqkoVlZFVIME9bwV8UevlkcqryUkVXzGvvNo81db3pPYhFDkKwx+CLLV2VhhOAq43Xck5zOnY3FSVJHu8Oo92buZ4eZ5xp3GSaG2tROpwnjDBIYiXHl0rXWLyOKFcGqMmM9N4YH+PveHrJYkCTJyEWvAWf4u8e92FOBNK5B1uJ7/f7aeGdIOjMmoaq1vo5Rf0xXlQqcSkh19DwT4TN8lY1uhsvtC1YBos671DzRxFhlThyallbeyqjgFCZtwv3xAJ/IbqfZsVy2axd7D53i2GKXMmoVCA4D3nUsfzqOB1V8v9/HWbcKyhAks2qfCqjoaFel9kbr/0FdB56qcpwlPi7XM5W8lXPt5qrwLjUYox2vng83QBCCRkRXA8EKHKFlHcdZ4MPdmzmky8w2Wrzz+76bTRvnuHPPg9xx714e3neEwyeW6GcFRRmJCsZYjK3Mxowv7iniPRHBn1xcodVI8d5ha7tbL9qiVW4U49CTDDWiLpgZg3MWg6kXWYc6tdk/Lsf4S/kHfqHxNjZrp2aSjpoqiiIoWuV+RFWCxopBtclZUVLjGJg+f7pyE/eVR/DO088KDhw9xctefhlnnHUGb7ymYGW5x8mTpzhw8CgHDh7h8LGTHD+5yMJyj15WkBWBoqxSGRnbZGMNjcQz1W4wO9lmfnoCf+jEAjMTbTqtBt45nLUjG6xcrFblGR0yZ1WLVJQolTB6X393zFjGo+e7eISPxOv42fYbmYkpIlWPS40hosQRQKxhELUwp8YQbcFHu7dw8+ARTO0JixA5dOQEMQQEg3WembkZZudneeE5uysPGCNlXpDnOWVREMpAjMP6kSKqVUHBOXziSZKURrOBTxJ8tz8gLwNTeYuJVoPEO6w1axygqq5hxlCnVJUowwQL1Oroh+tYUFh/m5vCPczaifhTrddiSnFBI2oswUCsr1+RUlbZI0ICtL3rfyq/58hn+/e+oILc1P++sLTSrQpltVSsTy2wjqTdJm23nzSGO128JyLY8ze0mPTKSq/H8cUVFrv92nZLQqxqMVKL9OixzngViBLp5wUhSu29ap2q2RXrv4ds+1z360t74r4vOWdzVSGXssrKpaSQQNBQs6cyrcRAy9lQ+vIvPt699bqg8gTPKfptdNHHwpY1Ufn6c+wzxhjspTtn+K5d01y0qcVcquTZgFNLXU4t91jpZwzykqKm5PiXpX601pIXgX6WrwWk3gnRIVDVa72YN/9o4XMfUccnvDdiEIKURI1ErQpglWlFEgNt51R8/OSD5th/WSoHrfUOQUWYmZ7EOst34vBb5zvMTTXZMlOyMihZHJSc6pcsZpFemZMVIMNAsnaf3rlKr5zBKDhrWRlkeO9IvEONwTtXJ5urYNbJZ/PB4pCx7c4HQ39pSxP3lhAC5UjbDBZIjKHlHMGFv130+Qde9uivLVxgzp0YKv9QN6yFs3ZtBWzl8TBPaj3PCKA0daSJo9NKmZ0StoZIGYS8jAyKwKCI9PLIIESyUhiUwiAEshz6WKzzNBJPUeR0+xkT7SZlGWvRt6uCvur+jVU788H91x77+Y1v+bmOSVsd0tcNQkGsy0LeGJo+IfjwD4s++8Uyi4e/q3ORX+kXTsZ0QkTYvmGKC889q87wpTI1a9ZE1M8KIFsXzC3gvSVNXR3t15GxaKUnUQhRKUIkLyP9PHCiW3C0F+hFy+a252g/kBUly70BUYTJdnMk0mtSEpX0+sEeftm+/ZEM+dmGuo9NaPKKKILB4KyjMPErSzr4uXaePPaWY3/OZCddl3pCCIGrX/oitm7egERBUQwKYjHO1A7DrHrW9eL9LYuE4N1wl3VdMYkqtvGjkH31Q6oQorAzRPpZYDmP9LISf7TLwV5JDCWLXaWRehLn1ixLVDVGWREDnet+mFMv++P7VhL/U02xH26a5FUGQ0Z+07LJfqqp/r65W36SK178IqY7qS4sD7LhrxBVZidbvP6ql2C9I4ZYxWTOggrLy32WewNW+gPAMDM9yeYNszjnVtcyTIzNWq+NMeR5wfFTi/gb7j3MK8/ZRDv11WfrMZXRNUYlgUof+kXkpgePcKKb0/SO6XbK1ukmm2aaJBaS4wNWksgjCxm9LGe60x4LHBURiVHk5PC37OseZefEpruPFd2fmHKt33BqyLT8z9O288D+cByANLW8/mXb5WN/t7SgqlhjkBh55cXnce7uXRV7RDDAw4/s59NfuInb7n6Ag0dOUoaIonTaLX7+P/wA73jba6ul6GkAqtdYlCV/cu3f8vkbv4YPIqthwfCDtQDq8DtqavpWb4tC4ixZiJw4tsLd+xdQVc6YbXP5GXP0siYr+QmWBjmdRqPKi+qcLYp0RXRhuGGX3Ps7fOoV7+N95938wA0PvvlHkwCfOH7j4HtmXsq/uf9PqhGb1PLTv3+zXrB79vEhg9qp59WXnUvifaU9qnT7A37tjz7Bl2/7Jmft2sa5u3exfctGoiqP7T/M4nJ3DI9xUNYSSIEyRLZumsd87Meu1NOGEE9hq0N2CZU2LfVLHjuxwp79C7z8rHnm2yl79i9w+4EV2hMTtBvpKIUoy/CQqH63wTy659H935YevO11L2Hv/iWMMW8qAp9WaG2dafFff/r7OffiCzHWQd11uen2e2g2m5z/wjOZm53C+QSMoQwR5y3e+SeWeNfWWqt+cYhIFPXrTG/sO+b0oBlTFdMtuFpQN0455icbXLBtmhCEshR2znU4sJRxPC9pJknFnihE0f2iesw+DSfzd9f/E1dcfDagD+WlHlPMGa5u3agIxlhASb3jDVddjvW+EuVRzcnQSJOhOXyLKc3qfe8cWKt2CMy4VzTrakij90d1kqEbrc4hoxLv8M5iLXSaCWfOtvEIYSyyVtVbDPSeTukBoNMQdszpvtTLfSHEUeSOVoU2U6dDcRj9iz6lFTyt3vxTXed0762+pk/aQ3PGMN9JmUoH9GLEYChD7FprbwEleRqR74HP/RHOulZ7evKdH/zIZ7Z95ot3kBdNYojoGBDj5d/VYREdaxA8g/mnp4qn1jPridVJ8+TvGUi8ZabhiDFiNTJh476GkT0NI9y9d/+3/SNDlpEP+i8IRfjAhbt3vjiGwCDLKcpy1C0REZ4yhB7vqDzFkRclWVbUwCh2vRmtManTmNmTgTYeDIaoI/TbicOoMNe07J5Nw1mTdvCCqac3XBvLgpBnGvJMN81OYQ30soyiKEEixsCd9+3l+pvvrDLwdW0cRgMkYxXT07HFGg4dOcHH/vqzPPzYAUzVsBpOopi6/vOtKafrypemfr0U4YGjXYwomzpVyy31BocymVoUcXmIxtunl1hKiEiMx8s8P7ltw9SuVsMzyHLKsqyakyLs2DLPdV+5g/sfPcjrr3wJZ+7cysREB2sMRRno9jNOLa0wNzvF7MzUaSNqEeWM7Zu56Nyz+Mgn/54tm+aML6NSRGFQRJqJY6Lx5LubB2GxH2illtRZnK1omJfCqW7BQ0erusy5G9tDj4U1hqaD1CplkL4IIfL0xTPk2VLI84NzE61Lz9gyz56H9o1NoEW2bpjlZ971Zq7/6t189FNfwDnL1GQHgKwoWen22TA/w4/94JuYnZl6ChZZXvOKy3jhmdv58q134794/3EUZaaVcN7WqfWN4Cd4xKPLGUcWM6Kuhk+iStNZdsw02NhJKMvIIFTFNANsajuMKkH0gDFaPJM5tq9/8qPFVe/9Tw80HW96w+XnMeWVzTMdYgi4WoOmJzp8/zVX8t1XvZTHDh3j8PEFQhSmJjts37KRHds20243V9kzHkmP6YaosHPbRt75716r/ooXzNJKHM3EDvtta1of45l46i0X75jmvC0T9IpIUVYutuktTW+rTkYe6qKaEmJVpm14SxBFlQcm02bWLfOnOyfKVe/9RVTkvpDn+ubLzzGvPnsjs50mEkJV6KoXhsBUp8Wl5+/mJRc5rPWoMaP2j8q6/phIPUxq1rSy6jBB7VwnpZnY07p0O1afHgcrdZbZdsLmqZRNkw06qUO1AmSYMQdRQqxYJApBNFP0jt7TBAfgnHf9JlKNwjwqISw5a0i9q+rQYXWQYXwSpJqELSnLovrcaJhhLAergrrVuUh9YnfXStQnfmc4TzOML4ZFfB0fNqpysmEbSGR4Vl4sRKGMQlwtmO0Dbgf4/H2Hn9G4sYrsFYnHhs8llMRQoCGOmoujH1cX6yXWAI7eVzSUSJlXU/5pE5xDihwN5brWt2Axazump2m/17tyurhCR+Y0BCmKVOCEGiAZdWVvRPXAMx43jhEJ4aiE+I2aTcQyIGVJjGWV0a+rOyOK1iANgdIQKPtd4mBQfcY5VIQw6FN2u0hZrk6ViKwdf1GtkjTv3ahPJlrlUKpUXmuNNrEKTBTiGHOK+gxVRX0vmI9a68Jn7z34jAAKeY6xppAYPy0hvElEpiWUxLJEyoA2Iqoeo4KqXdMVRusmpXNICBQry9gkgWWLTVKkyCkHfUKe0zKGpNOpKgQi2FE0rIpEodsrWF7JGAwKsryk18tZWskoijBGMR31QldNq2ZPUIoyVpXHENl7ss/hzN6784Xn39/cuO0Z50QXvOcPCHlOKPLrYwjvjCF+OJZlGcuCWBarYr1mMkTG7gCoSrKxLOidPM7K0cN0jxxk5dB+Vo4cZPnwIbrHjhCyQaVnUn3Pj0/rGWPIy8iBE926tGsQUTpNzxmbp9a0oVXXAROrcwhMEYTlLLCYC/ObJn2j0bAuSZ9V4njxe/8MYHDb7777syj3i3fXhLzYHcsCiaEyIWtH9SypvZQC1jlUHcZYQpazfPQwLkkwNatiWdCZ21BVAmpwVBQ7ri3GGmYmm8xPNSmj0MsDaerYMj9Bs5mMGFRNvEdCGI7rCiEIRTkESMhD5NSgxDqPc7bVy/KUZ59c17coGZC4T6LcHYqckOeVqdUsQQSNld5IfU9ZFQcI1jumd+ykM7+h6rj2+0gMtGZmmd11Jr7ZrDRLqhq3N6NeQ5WlNBqenZun2DI/AVQJp3N2zVibKpRl5b1CqAS5CEJRRrKyKur3ishKCd5ZRGSyCKGJYek5a8c0G4XG+LmQ528Jee5jUSCNgHUOGXm9SCgKXJLiTOVxjbU0JqfZdO6LKHpdYlFgE0/ansA3m6OptqFX8spqK3mYoXtf9b1OV0wy1uCdpQCKsmLRODiDojKxU1kkYEmqocqZGKX1XIFz+fs/zjc+9O9RkRsllA+U2eDCkGckzRbqk7psXLn57vFjnNz3GNY5rPNsv+gS2rNzuDSllczVpeTV0qvK2vFAr1JVB1cHF5+s0gZlUA4cX64YU0ZSa2kklqIUsiIyKANZGekWkaVCSbynlSbBWzMRo3RU9bnCCBXl0B0P7Ntx+QX/u8wGF5aDAWmrjUvTqlQxbB9by9FHHyPvdbHW0l9Z4YWvvIrW9PSaWcy1M6516COCu+bi7b9uDKMK4elKGcYYoij3PnaCO/ce48DxLseXBky3U5yxI3D6RaRfRE7lqgOxMt1pm/mZyT9TuLbTbu4B+vc+sv85AehjN97FL/zI61HRQ8BrrDUbfdrApynGVs7Z1FlFyItR5bN36iTLRw4PzRSfpGPjPmMNzkqo1ZdB6qGpeo5ZzepAo4Eoyko/56GDCzx8aAGRqho42UpoeMegqFgzqExMczHL7amZ28pB/o+T7darN8xMfxr42t9cf8tz3jdXES5//7UP3v57P/bnRb//+3l3pekbTYx1dV1a6S8sMLNpI/Pbt5GtrFTAtNskjQZhMEBaLYxlNLA67PcPp/t9Xsc3qa+8w+jmvxqrxZWM40t9YhnZMdOm6S3T7RRjoJcH8qg1QIEiyh7j0vfPzc7e3WjmhxJn/tzAgO/QccUv/xXfMAYR+UQoiksGy8s/7tIG1ns8TYy1uDSld+oEKsLk5i1Mb92BS5N6xK5mSpSxkZ3VGEpVMb/x5hdrM3WkqauHoMyaYc5hFzIEodcvOL7Qo5+VRFGKqASFLESKqI9E0fdYY24QlWeWbz3D4+u/+25QPcslybWNicmrJ+Y30JyaxqUNjDV1qiGknQ7W2hEQ6wYxV2dTV1MNsb1BSW9QMsgCeV5SFNVoWpVPRYoyMMgCgzwgCq1mihpLLlCIMqjAeSCK/sczZ+0NovrPCg7AFe+/FuvdoxLDzxS97q29kyfoLy5Q9vvEMmCsI6ldeBVQShXs1uzRsbsbq3tjQ5UIFwV+aVBQBEcRhEZiSROH91W1ULXSoNVYJzLIA6UopShZEA0it4vw8+fN6833nxS+cN8hno8jhkCSpHfHsnxP1ut+WESulLIknZgkaTYr7+b9GHPM6Qes6ii6iq5LzDsu2xUaiXOtxJF6R+otibejtkysC19FELJ6qmNQRooo3RDlU6r8XjvVh7uZ4QsPPD/gDI9bf/tdpI0GIZTnWOd/K2k039qYmEjTzsQoBDD1XUBmzcDCavYvEtEYCEVByDIx33vR9vc5a38wceayxNlm4i2JtXhXZcRRlCB1dl6xqBdEbxXRvxDlC8bQDwGue/D5BWf8+MbvvhtVmbHO/7j1yU8nzebOtN0mabVwSYq1bgTUWvbE+n9zKAhZRpkN1Fy6pcPODdObnDGvsNZc5Yx5sTVmpzFMGWOMqIqIrojq41H0LlH9oii3pt4uDIrAF+4/wr/E47bffheq6lziL7HOvdslyVtc0tjmksRZ77HeY0dDn8N7ZCuzimUhsQzHRcKXRoZ4zflbEVWTOjtlrZmykFK14VXRXJTlILoC6HX/zCL8rNj0oR9GVRKXNM4zJrka7NXGmPOMtU3jHAYznE4zKtJX1QdRuU1VbzLoHsP/J8ctH7qUPNzJZPKjTdR2VNVZW91cM7wnzUA0VntQZJDw0l/6BP96/Ovxr8d39Ph/N8VqbgXHte0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDY6MTQ6NDUrMDA6MDBFaRDzAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA2OjE0OjQ1KzAwOjAwNDSoTwAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

KissPersonManMediumDarkSkinToneLightSkinTone.displayName =
  'KissPersonManMediumDarkSkinToneLightSkinTone'
KissPersonManMediumDarkSkinToneLightSkinTone.defaultProps = {}

export default KissPersonManMediumDarkSkinToneLightSkinTone
