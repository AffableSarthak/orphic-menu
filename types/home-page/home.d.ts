/**
 *  Naming convention => Start With I and No "Type" in the Name
 */

// GC
interface Igc {
  id: string
  name: string
  type: string
  values: Value[]
}

interface IValue {
  name: string
  price: number
}
