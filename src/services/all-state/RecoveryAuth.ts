import axios from 'axios';
import {makeAutoObservable} from 'mobx';
import {Alert} from 'react-native';
import NavigationService from '../../NavigationService';

export default class RecoveryAuth {
  phone: string = '';
  isRunningClock: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  _change = (value: string) => {
    this.phone = value;
  };

  private startedClock = () => {
    this.isRunningClock = true;
  };

  _submit = async () => {
    try {
      const res = await axios({
        url: 'http://tutor.shini.uz/api/user/recover-password',
        method: 'POST',
        data: {
          phone: this.phone,
        },
      });

      Alert.alert('Tabriklayman!', JSON.stringify(res.data, null, 2), [
        {
          text: 'Davom etish',
          onPress: () => {
            NavigationService.navigate('VERIFICATION');
            this.startedClock();
          },
        },
      ]);
    } catch (err) {}
  };
}
