import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';
import {Alert} from 'react-native';

const DEFAULT_SECOND = 60;

class Clock {
  private timeoutId?: number = undefined;
  second: number = DEFAULT_SECOND;
  cancelled: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  run = () => {
    console.log('timeoutId', typeof this.timeoutId);

    if (typeof this.timeoutId === 'number') {
      this.clearId();
    }

    this.timeoutId = setTimeout(() => {
      if (this.cancelled) return;
      console.log('dd');

      if (this.second > 0) {
        this.increment();
        this.run();
      } else {
        Alert.alert('Time out', 'Vaqtingiz tugadi, qayta refresh bering!', [
          {
            text: 'cancel',
            style: 'cancel',
            onPress: () => {
              this.cancel();
            },
          },
          {
            text: 'refresh',
            onPress: () => {
              this.refresh();
            },
          },
        ]);
      }
    }, 1000);
  };

  private increment = () => {
    this.second = this.second - 1;
  };

  private clearId = () => {
    clearTimeout(this.second);
  };

  refresh = () => {
    this.second = DEFAULT_SECOND;
    this.run();
  };

  cancel = () => {
    this.cancelled = true;
  };
}

const ClockContext = createContext(new Clock());

export default ClockContext;
