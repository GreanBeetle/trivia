import { ObjectType } from './reusableTypes'

export const GLOBAL_STYLES: ObjectType = {
  container: {
    flex: 1
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  standard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallText: {
    // fontFamily: FONTS.raleway, // FIX
    fontSize: 12
  },
  normalText: {
    // fontFamily: FONTS.raleway, // FIX 
    fontSize: 16
  },
  subHeaderText: {
    // fontFamily: FONTS.montserrat, // FIX
    fontSize: 24
  },
  headerText: {
    // fontFamily: FONTS.montserrat, // FIX
    fontSize: 36
  }
}