import JSBI from 'jsbi'


export abstract class TickBitmap {
    /**
     * Cannot be constructed.
     */
    private constructor() { }


    /**
     * Returns the sqrt ratio as a Q64.96 for the given tick. The sqrt ratio is computed as sqrt(1.0001)^tick
     * @param tick the tick for which to compute the sqrt ratio
     */
    public static position(tick: number) {

        let wordPos: JSBI = JSBI.signedRightShift(JSBI.BigInt(tick), JSBI.BigInt(8))
        let bitPos: JSBI = JSBI.remainder(JSBI.BigInt(tick), JSBI.BigInt(256))

        return [wordPos, bitPos]
    }


}
