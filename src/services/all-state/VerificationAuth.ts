import axios from 'axios';
import {makeAutoObservable} from 'mobx';
import {Alert} from 'react-native';
import NavigationService from '../../NavigationService';

export default class VerificationAuth {
  code: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  _change = (value: string) => {
    this.code = value;
  };

  _submit = async (phone: string) => {
    try {
      const res = await axios({
        url: 'http://tutor.shini.uz/api/user/accept-recover-code',
        method: 'POST',
        data: {
          code: this.code,
          phone: phone,
        },
      });
      Alert.alert(
        'muvoffaqqiyatli otdingiz',
        JSON.stringify(res.data, null, 2),
        [
          {
            text: 'Malades',
            onPress: () => {
              NavigationService.navigate('ONBOARDINGLOGIN');
            },
          },
        ],
      );
    } catch (err) {}
  };
}
