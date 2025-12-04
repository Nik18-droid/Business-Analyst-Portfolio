export type Tab = 'home' | 'work' | 'skills' | 'contact';

export interface NavProps {
  activeTab: Tab;
  onNavClick: (tab: Tab) => void;
}
