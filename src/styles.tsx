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
  card: {
    width: deviceWindowWidth() - 40,
    height: 400
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'

  },

  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  }
}

