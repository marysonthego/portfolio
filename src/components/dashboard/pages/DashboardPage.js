import React from 'react';
import { Header } from 'components/dashboard/components/Header';
import { DashboardProfileWidget } from 'components/dashboard/pages/DashboardProfileWidget';

export const DashboardPage = () => {

  return (
    <div>
      <Header />
      <DashboardProfileWidget />
    </div>
  );
};
