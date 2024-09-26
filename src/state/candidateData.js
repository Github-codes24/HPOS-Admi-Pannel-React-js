import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const candidateDataAtom = atom({
  key: 'candidateDetails',
  default: null,
  effects_UNSTABLE: [persistAtom]
});
