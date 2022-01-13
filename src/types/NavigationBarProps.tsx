import { IconName} from './IconName';

export interface NavigationBarProps {
    NavigationItems: NavigationItem[];
  }
 
  interface NavigationItem {
    name: IconName;
    route: string;
    action?: string;
  }