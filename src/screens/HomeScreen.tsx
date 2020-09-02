import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GettingQuestions, ErrorComponent } from '../components'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/actions'
import { ObjectType } from '../reusableTypes'
import { GLOBAL_STYLES as STYLES } from '../styles'
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
  isGetting, 
  getQuestionsError, 
  questions, // NO UNUSED VARS use this to enable/disable the begin button
  getQuestions 
}) => {
 
  // UPDATE STATE ONLY WHEN questions, isGetting, or getQuestionsError changes! Otherwise do not rerender

  useEffect(() => {
    getQuestions() // WILL NEED TO INVOKE THIS AGAIN USING COMPONENT DID UPDATE OR SOMETHING, AFTER PLAYER HAS FINISHED THE GAME
  }, [])

  let content = (
    <SafeAreaView style={STYLES.standard}>
      <View>
        <Text style={[STYLES.largeText]}>{COPY.sentence}</Text>
      </View>
      <TouchableOpacity onPress={(): void => navigation.push('Quiz')} >
        <View style={[STYLES.centered, STYLES.roundButton, STYLES.greenBackground]}>
          <Text style={[STYLES.subHeaderText, STYLES.white]}>{COPY.begin}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )

  if (isGetting && !getQuestionsError) content = <GettingQuestions />
  if (!isGetting && getQuestionsError) content = <ErrorComponent errorMessage={getQuestionsError.message} />

  return content
  
}
 
const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  return { isGetting, getQuestionsError, questions }
}

export default connect(mapStateToProps, { getQuestions })(HomeScreen)

