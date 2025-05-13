// components/NavTabs.tsx
'use client';

import styled from 'styled-components';
import { useState } from 'react';

const TabContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 2rem;
  background-color: #f0f6ff;
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ active }) => (active ? '#000' : '#333')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState('Forecast');

  const tabs = ['Forecast', 'Other conditions', 'Map', 'Details'];

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default NavTabs;
