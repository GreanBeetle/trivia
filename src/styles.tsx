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
  standardWidth: {
    width: deviceWindowWidth() - 40,
  },
  justifiedText: {
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
  largeHeaderText: {
    fontFamily: 'LexendGiga_400Regular',
    fontSize: 48
  },
  white: {
    color: COLORS.white
  },
  red: {
    color: COLORS.red
  },
  green: {
    color: COLORS.actionGreen
  },
  darkGreen: {
    color: COLORS.textGray
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

export const DONE_SCREEN_STYLES: ObjectType = {
  listItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20
  },
  questionNumberWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.textGray
  },
  questionWrapper: {
    flex: 6,
    padding: 10
  },
  scoreContainer: {
    marginVertical: 30
  },
  playAgainButton: {
    height: 60,
    borderRadius: 30, 
    backgroundColor: COLORS.actionGreen,
    width: deviceWindowWidth() - 40,
    marginTop: 20
  }
}

export const SWIPE_COMPONENT_STYLES: ObjectType = {
  swipeContainer: {
    flex: 4
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: deviceWindowWidth() - 40,
    height: 350,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    padding: 20
  },
  footerWrapper: { // DUPE OF CONTAINER IN SCOREBOARD COMPONENT
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

export const SCOREBOARD_COMPONENT_STYLES: ObjectType = {
  container: { // DUPE OF FOOTERWRAPPER
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center', // EXCEPT THAT ALIGN SELF IS EXTRA
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bubble: {
    borderRadius: 100,
    height: 20,
    width: 20,
    backgroundColor: COLORS.textGray
  }
}

