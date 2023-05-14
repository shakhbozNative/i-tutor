import {useContext} from 'react';
import rootStore from '../store/rootStore';

const useRootStore = () => useContext(rootStore);

export default useRootStore;
