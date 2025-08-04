import { create } from 'zustand';

type ThemeMode = 'default' | 'sepia' | 'high-contrast';
type FontSize = 'small' | 'base' | 'large';

interface AccessibilityState {
  fontSize: FontSize;
  theme: ThemeMode;
  setFontSize: (size: FontSize) => void;
  setTheme: (theme: ThemeMode) => void;
}

export const useAccessibilityStore = create<AccessibilityState>((set) => ({
  fontSize: 'base',
  theme: 'default',
  setFontSize: (size) => set({ fontSize: size }),
  setTheme: (theme) => set({ theme }),
}));
