'use client';

import { createContext, useContext } from 'react';

export const MiniAppContext = createContext(false);

export const useIsMiniApp = () => useContext(MiniAppContext);
