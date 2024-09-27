import { atom } from 'recoil';

export const toastState = atom({
  key: 'toastState',
  default: null
});

export const AlertContentState = atom({
  key: 'AlertContentState',
  default: { type: 'info', title: '', message: '' }
});

export const AlertState = atom({
  key: 'AlertState',
  default: false
});
