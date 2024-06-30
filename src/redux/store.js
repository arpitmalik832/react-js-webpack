import devStore from './store/store.dev';
import prodStore from './store/store.prod';

const store = __isRelease__ ? prodStore : devStore;

export default store;
