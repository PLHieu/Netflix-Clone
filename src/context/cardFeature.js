import { createContext } from 'react';

export const CardFeatureContext = createContext({
  itemFeature: {},
  showFeature: false,
  setShowFeature: () => {},
  setItemFeature: () => {},
});
