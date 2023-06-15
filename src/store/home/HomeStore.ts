import {makeAutoObservable} from 'mobx';
import {Operation} from '../../helper/Operation';
import {RootStore} from '../rootStore';
import $api from '../../api/api';
import {API_URL} from '../../api/api.constants';
import {CategoryType} from './category.type';
import {NewsType} from './news.type';

export class HomeStore {
  readonly root: RootStore;
  _operation = new Operation<any>(null);
  _category: CategoryType[] = [];
  _news: NewsType[] = [];

  constructor(props: RootStore) {
    makeAutoObservable(this);

    this.root = props;
  }

  getCategory = async () => {
    await this._operation.run(() => {
      return $api.get(`${API_URL}/category?type=direction`);
    });
    if (this._operation.isSuccess) {
      const data = this._operation.data;
      this.setCategory(data);
    }
  };

  getNews = async () => {
    await this._operation.run(() => {
      return $api.get(`${API_URL}/news`);
    });
    if (this._operation.isSuccess) {
      const data = this._operation.data;
      this.setNews(data);
    }
  };

  setNews = (data: NewsType[]) => {
    this._news = data;
  };

  setCategory = (data: CategoryType[]) => {
    this._category = data;
  };
}
