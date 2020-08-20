import { Dimensions } from 'react-native'

/**
 * Returns width of device window, rounded to nearest whole number
*/
export const deviceWindowWidth = () => Math.round(Dimensions.get('window').width)