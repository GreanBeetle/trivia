import { Dimensions } from 'react-native'
import { ObjectType } from './reusableTypes'
const Entities = require('html-entities').AllHtmlEntities 

/**
 * returns width of device window, rounded to nearest whole number
*/
export const deviceWindowWidth = ():number => Math.round(Dimensions.get('window').width)

/**
 * add "user answer" property to each question 
 * format the properties correct_answer, category, and question so they are
 * usable and readable 
 */
export const formatJSONquestions = async (questions: ObjectType[]) => {
  try {
    let arr = []
    const entities = new Entities()
    for (let question of questions) {
      question['user_answered_correctly'] = null
      question['correct_answer'] = JSON.parse(question['correct_answer'].toLowerCase())
      question['category'] = entities.decode(question['category']).toLowerCase()
      question['question'] = entities.decode(question['question']).toLowerCase()
      arr.push(question)
    }
    return arr 
  } catch (error) {
    console.log('error in formatJSONquestions', error)
    throw error 
  }
}

/** 
 * returns true for an even number, false for an odd number
 */
export const isEven = (number: number):boolean => {
  if (number === 0) return true
  if (number === 1) return false
  if (number % 2 === 0) return true
  else return false
}
