import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const userIsAuthenticatedAtom = atom({
  key: 'userIsAuthenticated',
  default: false
});

export const userAuthState = atom({
  key: 'userAuthState',
  default: {
    isAuthenticated: false
  },
  effects_UNSTABLE: [persistAtom]
});
