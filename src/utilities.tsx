import { Dimensions } from 'react-native'

/**
 * Returns width of device window, rounded to nearest whole number
*/
export const deviceWindowWidth = ():number => Math.round(Dimensions.get('window').width)