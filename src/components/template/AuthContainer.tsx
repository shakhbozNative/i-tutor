import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { observer } from 'mobx-react';
import React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import GapHeight from '../../constants/GapHeight';
import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import useRootState from '../../hooks/useRootState';
import { STRINGS } from '../../locales/strings';
import DefaultButton from '../uiket/DefaultButton';
import DefaulTitle from '../uiket/DefaultTitle';
import GoBackHeader from '../uiket/GoBackHeader';
import DefaultInput from '../uiket/TextInput';
type PropsType = {
  title?: string;
  text?: string;
  imageWidth?: any;
  height?: any;
  fontSize?: any;
  education?: boolean;
  student?: boolean;
  teacher?: boolean;
  onClick?: () => void;
};

const AuthContainer = (props: PropsType) => {
  const state = useRootState();
  console.log(state.auth.setSignUpTeacher);
  const navigation:any = useNavigation()
  
const states = useRootState();


  const handleLogin = async () => {
    try {

      const res = await axios({

        url:"http://tutor.shini.uz/api/user/sign-up-student",
        method:"POST",
        data:states.auth.siginUpStudent
      })

     Alert.alert("Tabriklayman!",`${states.auth.siginUpStudent.name} siz muvaffaqqiyatli ro'yxatdan o'tdinggiz`, [
      {
        text:"Davom etish",
        onPress:() => {
           navigation.navigate(ROUTES.LOGIN)
        }
      }
     ])
    } catch (err:any) {
      console.log(JSON.stringify(err.response.data, null, 2))
    }
     
  };


    const signUpTeacher = async () => {
    try {

      const res = await axios({

      url:"http://tutor.shini.uz/api/user/sign-up-tutor",
      method:"POST",
      data:states.auth.siginUpTeacher
      })

     Alert.alert("Tabriklayman!",`${states.auth.siginUpTeacher.name} siz mufaqiyatli ro'yxatdan o'tdinggiz`, [
      {
        text:"Davom etish",
        onPress:() => {
           navigation.navigate(ROUTES.LOGIN)
        }
      }
     ])
    } catch (err:any) {
      console.log(JSON.stringify(err.response.data, null, 2))
    }
     
  };

      const signUpEducation = async () => {
    try {

      const res = await axios({

      url:"http://tutor.shini.uz/api/user/sign-up-institution",
      method:"POST",
      data:states.auth.siginUpEducation
      })

     Alert.alert("Tabriklayman!", ` siz mufaqiyatli ro'yxatdan o'tdinggiz`, [
      {
        text:"Davom etish",
        onPress:() => {
           navigation.navigate(ROUTES.LOGIN)
        }
      }
     ])
    } catch (err:any) {
      console.log(JSON.stringify(err.response.data, null, 2))
    }
     
  };


  




  return (
    <View style={{backgroundColor: COLORS.tabBgColor, flex: 1}}>
      <GoBackHeader />
      <DefaulTitle title={STRINGS.ru.registration} />
      {props?.education ? (
        <ScrollView style={styles.input_box}>
          <DefaultInput label={STRINGS.ru.NameOftheTrainingCenter } onChangeText={(text0)=>state.auth.setSignUpEducation(text0,'educational_name')} />
          <DefaultInput label={STRINGS.ru.lawAddres} onChangeText={(text0)=>state.auth.setSignUpEducation(text0,'educational_address')}/>
          <DefaultInput label={STRINGS.ru.email} onChangeText={(text0)=>state.auth.setSignUpEducation(text0,'email')}/>
          <DefaultInput label={STRINGS.ru.PhoneNumber} onChangeText={(text0)=>state.auth.setSignUpEducation(text0,'phone')}/>
          <DefaultInput label={STRINGS.ru.password}  onChangeText={(text0)=>state.auth.setSignUpEducation(text0,'password')}/>
          <DefaultInput label={STRINGS.ru.ContractID} onChangeText={(text0)=>state.auth.setSignUpEducation(text0,'country_id')}/>
          <DefaultInput label={STRINGS.ru.region} onChangeText={(text0)=>state.auth.setSignUpEducation(text0,'educational_region')}/>
          <DefaultButton
            title="Зарегестрироваться"
            ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
            TextStyle={{color: COLORS.white}}
            onPress={signUpEducation}
          />
          <GapHeight height={68} />
        </ScrollView>
      ) : null}
      {props?.student ? (
        <ScrollView style={styles.input_box}>
          <DefaultInput label={STRINGS.ru.email}  onChangeText={(text0)=>state.auth.setSignUpStudent(text0,'email')}/>
          <DefaultInput label={STRINGS.ru.name}  onChangeText={(text0)=>state.auth.setSignUpStudent(text0,'name')} />
          <DefaultInput label={STRINGS.ru.PhoneNumber}  onChangeText={(text0)=>state.auth.setSignUpStudent(text0,'phone')}/>
          <DefaultInput label={STRINGS.ru.password}  onChangeText={(text0)=>state.auth.setSignUpStudent(text0,'password')}/>
    
          <DefaultButton
            title="Зарегестрироваться"
            ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
            TextStyle={{color: COLORS.white}}
            onPress={handleLogin}
          />
          <GapHeight height={68} />
        </ScrollView>
      ) : null}
      {props?.teacher ? (
        <ScrollView style={styles.input_box}>
          <DefaultInput label={STRINGS.ru.name } onChangeText={(text0)=>state.auth.setSignUpTeacher(text0,'name')} />
          <DefaultInput
            label={STRINGS.ru.lastName}
            onChangeText={(text0)=>state.auth.setSignUpTeacher(text0,'lastname')}
          />
          <DefaultInput
            label={STRINGS.ru.Surname}
            onChangeText={(text0)=>state.auth.setSignUpTeacher(text0,'fname')}
          />
          <DefaultInput
            label={STRINGS.ru.PhoneNumber}
            onChangeText={(text0)=>state.auth.setSignUpTeacher(text0,'phone')}
          />
          <DefaultInput
            label={STRINGS.ru.email}
            onChangeText={(text0)=>state.auth.setSignUpTeacher(text0,'email')}
          />
          <DefaultInput
            label={STRINGS.ru.password}
            onChangeText={(text0)=>state.auth.setSignUpTeacher(text0,'password')}
          />


          <DefaultButton
            title="Зарегестрироваться"
            ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
            TextStyle={{color: COLORS.white}}
            onPress={signUpTeacher}
          />
          <GapHeight height={68} />
        </ScrollView>
      ) : null}
    </View>
  );
};

export default observer(AuthContainer) ;

const styles = StyleSheet.create({
  input_box: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 29,
    paddingBottom: 200,
  },
});
