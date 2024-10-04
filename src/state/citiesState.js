import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const getAllCitiesAtom = atom({
    key: 'getAllCities',
    default: [],
    effects_UNSTABLE: [persistAtom]
  });