'use client';
import React from 'react';
import styled from 'styled-components';

interface ToggleTabsProps {
  activeTab: 'Table' | 'Graph';
  onChange: (tab: 'Table' | 'Graph') => void;
}

interface TabProps {
  active?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Center it vertically */
  background-color: #edf5ff;
`;

const ToggleContainer = styled.div`
  display: inline-flex;
  border: 1px solid #b6d4fe;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const Tab = styled.button<TabProps>`
  padding: 8px 20px;
  font-size: 14px;
  border: none;
  background-color: ${({ active }) => (active ? '#b6d4fe' : '#fff')};
  color: ${({ active }) => (active ? '#000' : '#333')};
  font-weight: 600;
  cursor: pointer;
  border-radius: 0;
  min-width: 100px;
  transition: background-color 0.2s;

  &:first-child {
    border-right: 1px solid #b6d4fe;
  }

  &:hover {
    background-color: ${({ active }) => (active ? '#b6d4fe' : '#f5f5f5')};
  }
`;

const ToggleTabs: React.FC<ToggleTabsProps> = ({ activeTab, onChange }) => {
  return (
    <Wrapper>
      <ToggleContainer>
        <Tab active={activeTab === 'Table'} onClick={() => onChange('Table')}>
          Table
        </Tab>
        <Tab active={activeTab === 'Graph'} onClick={() => onChange('Graph')}>
          Graph
        </Tab>
      </ToggleContainer>
    </Wrapper>
  );
};

export default ToggleTabs;
