import {makeAutoObservable} from 'mobx';
import {Operation} from '../../helper/Operation';
import {RootStore} from '../rootStore';
import {BalanceType} from './balance.type';
import $api from '../../api/api';
import {API_URL} from '../../api/api.constants';

export class BalanceStore {
  readonly root: RootStore;
  _operation = new Operation<BalanceType[]>([]);
  _category: BalanceType[] = [];
  _balanceData: BalanceType[] = [];

  constructor(props: RootStore) {
    makeAutoObservable(this);

    this.root = props;
  }

  getBalance = async () => {
    await this._operation.run(() => {
      return $api.get(`${API_URL}/category?type=payment_type`);
    });

    if (this._operation.isSuccess) {
      const data = this._operation.data;
      this.setBalanceData(data);
    }
  };

  setBalanceData = (data: BalanceType[]) => {
    this._balanceData = data;
  };
}
