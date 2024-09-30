import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const allBreastCancerAtom = atom({
  key: 'allBreastCancerDetails',
  default: [],
  effects_UNSTABLE: [persistAtom]
});
// allBreastCountAtom
export const allBreastCancerCountAtom = atom({
    key: 'BreastCancerCount',
    default: null,
  })