import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const allCervicalCancerDataAtom = atom({
  key: 'allCervicalCancer',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const allCervicalCancerCountAtom = atom({
  key: 'cervicalCancerCount',
  default: null
});

export const fromDateCountAtom = atom({
  key: 'fromDateCount',
  default: ''
});

export const toDateCountAtom = atom({
  key: 'toDateCount',
  default: ''
});
