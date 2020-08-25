import { ObjectType } from './reusableTypes'
import { deviceWindowWidth } from './utilities'
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
  justifiedText: {
    flex: 1,
    alignItems: 'flex-start'
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

export const SWIPE_COMPONENT_STYLES: ObjectType = {
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card:{
    width: deviceWindowWidth() - 40,
    height: 400,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    padding: 20
  },
  card1: { backgroundColor: COLORS.accentAqua },
  card2: { backgroundColor: COLORS.accentLightBlue },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent'
  }
}

