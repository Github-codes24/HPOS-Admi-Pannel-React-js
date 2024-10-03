import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const sickleCellDataAtom = atom({
  key: 'sickleCellData',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const allSickleCellCountAtom = atom({
  key: 'sickleCellsCount',
  default: null
});

export const sickleCellDetailIDAtom = atom({
  key: 'sickleCellDetailID',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

export const sickleCellReportAtom = atom({
  key: 'sickleCellReport',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

export const sickleCelVisitAtom = atom({
  key: 'sickleCelVisit',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const sickleCellCenterCountAtom = atom({
  key: 'sickleCellCenterCount',
  default: [],
  effects_UNSTABLE: [persistAtom]
});
