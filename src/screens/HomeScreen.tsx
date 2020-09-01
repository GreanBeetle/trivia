import React, { useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/actions'
import { ObjectType } from '../reusableTypes'
import { GLOBAL_STYLES as STYLES, HOME_SCREEN_STYLES as styles } from '../styles'
import { homeScreenCopy as COPY } from '../copy'

interface Props {
  navigation: any,
  isGetting: boolean,
  getQuestionsError: ObjectType,
  questions: ObjectType | null | undefined, 
  getQuestions: () => ObjectType,
}

const HomeScreen: React.FC<Props> = ({ 
  navigation, 
  isGetting, // NO USED VARS, ADD ERROR HANDLING COMPONENT I.E. ERROR.TSX
  getQuestionsError, // NO UNUSED VARS, ADD ERROR HANDLING COMPONENT I.E. ERROR.TSX
  questions, // NO UNUSED VARS, ADD ERROR HANDLING COMPONENT I.E. ERROR.TSX
  getQuestions 
}) => {
 
  useEffect(() => {
    getQuestions() // WILL NEED TO INVOKE THIS AGAIN USING COMPONENT DID UPDATE OR SOMETHING, AFTER PLAYER HAS FINISHED THE GAME
  }, [])

  // DISABLE "BEGIN BUTTON" UNTIL APP HAS RETREIVED QUESTIONS! SHOW A "RETREIVING QUESTIONS" COMPONENT OR SOMETHING

  // **********************************************************
  // ** HERE! *** IMPORT and USE <GettingQuestions /> HERE ****
  // **********************************************************


  return (
    <SafeAreaView style={STYLES.container}>
      <TouchableOpacity 
        onPress={(): void => navigation.push('Quiz')} 
        style={STYLES.standard}
      >
        <View>
          <Text style={[STYLES.largeText]}>{COPY.sentence}</Text>
        </View>
        <View style={[STYLES.centered, styles.beginButton]}>
          <Text style={[STYLES.subHeaderText, STYLES.white]}>{COPY.begin}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
 
const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  return { isGetting, getQuestionsError, questions }
}

export default connect(mapStateToProps, { getQuestions })(HomeScreen)

