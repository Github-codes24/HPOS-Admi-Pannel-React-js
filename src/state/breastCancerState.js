import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const allBreastCancerAtom = atom({
  key: 'allBreastCancerDetails',
  default: [],
  effects_UNSTABLE: [persistAtom]
})
export const submittedBreastCancerAtom = atom({
  key: 'submittedBreastCancer',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const allBreastCancerCountAtom = atom({
  key: 'breastCancerCount',
  default: null
});

export const breastCancerDetailIDAtom = atom({
  key: 'breastCancerDetailID',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

export const breastCancerVisitAtom = atom({
  key: 'breastCancerVisit',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

export const breastCancerCenterCountAtom = atom({
  key: 'breastCancerCenterCount',
  default: [],
  effects_UNSTABLE: [persistAtom]
});
