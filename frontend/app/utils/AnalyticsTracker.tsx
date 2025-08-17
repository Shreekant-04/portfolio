// AnalyticsTracker.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { pageView } from './gtag';

const AnalyticsTracker = (): null => {
  const location = useLocation();

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  return null;
};
export default AnalyticsTracker;
