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
  getQuestions: () => ObjectType,
}

const HomeScreen: React.FC<Props> = ({ 
  navigation, 
  isGetting, 
  getQuestionsError,
  getQuestions 
}) => {

  useEffect(() => {
    getQuestions() 
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
  if (!isGetting && getQuestionsError) content = <ErrorComponent errorMessage={getQuestionsError.message} shouldNavHome={false} />

  return content
  
}
 
const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError } = state.getQuestions
  return { isGetting, getQuestionsError }
}

export default connect(mapStateToProps, { getQuestions })(HomeScreen)

