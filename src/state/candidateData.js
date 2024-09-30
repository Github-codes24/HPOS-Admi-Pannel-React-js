import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const allCandidateDataAtom = atom({
  key: 'allCandidateDetails',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const allCandidatesCountAtom = atom({
  key: 'candidatesCount',
  default: null
});
