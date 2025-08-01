import { create } from 'zustand';

interface Crumb {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

interface BreadcrumbState {
  crumbs: Crumb[];
  setCrumbs: (newCrumbs: Crumb[]) => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  crumbs: [],
  setCrumbs: (newCrumbs) => set({ crumbs: newCrumbs }),
}));
