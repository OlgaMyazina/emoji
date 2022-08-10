import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WhiteExclamationMark = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQcFicJ3qC7dQAAAAJiS0dEAP+Hj8y/AAADyUlEQVRo3u2Yz4vdVBTHv+cmmXnzXt8MfaWKVmdEbAtVS0VFaKVIEcGVFHeCUG2LaHddFKobERUFNy78H2bRheBOqqBo25WUqT8ZRErnTSfJy/udvOSe/HBTlPYlGSahN5t3ssxJ+PC9537vOReYxSxmcX+Ddpb+EZr0e21Ti5PsnAQtvOSPo/OFgPSdpS/BN565ePyYiHKAaNfo8Q/wB1QA1XA5emf5yRNGbpZ2yxBFl2yHH0b4Jgq3EmgQec8wGSRqgAi/QVrhdmk9chUpJPAnuM3BNmm3FQJ5kBb7lKsimYusCOgsInCPvW0qxLITRUBADDmQo/wUMnUoA4rgDqQd5y2Zj01SBxTC9riTBwQPHagDSvBPyHaUd+a46AN7VQERLoXSivIyBjRUqJDAD5AbYd6aWRgpBXIgrVDmAQlfIdBZSISODCjbFm09VAgESMiudHOcz3QTxUATh7uZrxltDUqBGGOXu1lVTQFZUAsEjAPpZG4zHz0q7EKFgAhrUlpZ1kgj9BQrJLAa8UamNXZINZCGa5AmZxE58BQDncEY3GHOVIiVF7ULtnlCGd3ignogH77N6XNFgvYwUQ4Uwh/JdCCGKaAcKEHgyV4aEElyUMKFCgIR+hOZ3jV66JB6hQQ+D3gjzRqpBwfqgXSsg80wfWYdVwB0Gn9D2qnW2IVfARDggE2WNO1CpbrFEkAeApPTFqfthpUAhQj6PEqmx1pzrhwPCs+8PJbTlhyRXc6FCitE8MbBVJNGPiwCqgFam/DmlDUOYaEaoASrIU91jTTEsCKgGJtgO7xHNQyK35yVLGoDLpZuzH9n0P+FTRquoTRQwRq8imfh6frC3VWUMPsCLczifkYJ2ziJLTr00AOHGyvCYGf0a3d92f8QFRX18ziK7tKrb+4/te9gsy4gw77Z+XbwZXLjM1ysQqFzcHcf/uSFt1fmDST/zSK3r/fPaVckXlPtQ+/he+3Au0fPPDEvECG+89SxcuTRT/c88rB6Y9yFlw8eemvZiO5xbx2tY3tO1nFTLdAFHMG+F1ceEykHiqYvvNJqzKkFquEN8eBTi3r6PCj2i71CLVAdr2vN3RoyBtRFWlRcQ01M4jkvc4NKkooVauCrSP8ryrhCE7c0SzHQKdyE/rM0021N/FTvkeptL8DX8XWaRPq6tuolLdVAx/F0MP8FXabkbnV0S/+4sVbmUhgo+PUF1Hq4Kpq0jDqBQNAC/Rfjff0Sx0vVnPYOYlADz+EEDpBBW3RF+7He5mShuvYDAAIQSR1ijqO4VvZns5jFLJTEv2mTjlatR2UqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI4VDIyOjM5OjA0KzAwOjAwRXkYZgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOFQyMjozOTowNCswMDowMDQkoNoAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

WhiteExclamationMark.displayName = 'WhiteExclamationMark'
WhiteExclamationMark.defaultProps = {}

export default WhiteExclamationMark
