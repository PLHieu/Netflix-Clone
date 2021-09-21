import { createContext } from 'react';

export const PlayerContext = createContext({ showPlayer: null, setShowPlayer: null });

export const SourcePlayerContext = createContext({ srcPlayer: '', setSrcPlayer: null });
