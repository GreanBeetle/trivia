import { ObjectType } from './reusableTypes'
import COLORS from './colors'

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
    fontFamily: 'Roboto_400Regular',
    fontSize: 12
  },
  regularText: {
    fontFamily: 'Roboto_400Regular', 
    fontSize: 16
  },
  largeText: {
    fontFamily: 'LexendGiga_400Regular',
    fontSize: 20
  },
  subHeaderText: {
    fontFamily: 'LexendGiga_400Regular',
    fontSize: 24
  },
  headerText: {
    fontFamily: 'LexendGiga_400Regular',
    fontSize: 36
  },
  white: {
    color: COLORS.white
  }
}

export const HOME_SCREEN_STYLES: ObjectType = {
  beginButton: {
    width: 144,
    height: 144,
    borderRadius: 100,
    backgroundColor: COLORS.actionGreen,
    marginTop: 36
  }
}