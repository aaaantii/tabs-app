import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { TabComponent } from './components/tab/tab';
import {ColumnComponent } from './components/layout/column';
import { RowComponent } from './components/layout/row';
import { data } from './data/tabs';
import { CardComponent } from './components/card/card';

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
  // State to track which tab is currently active
  const [activeTabId, setActiveTabId] = useState(1);

  // Find the currently active tab's data
  const activeTab = data.tabs.find(tab => tab.id === activeTabId);

  return (
    <Main className="App">
      <RowComponent>
        {data.tabs.map((tab) => {
            return (
              <TabComponent
                key={tab.id}
                title={tab.title}
                badge={tab.badgeType}
                isactive={tab.id === activeTabId}
                onClick={() => setActiveTabId(tab.id)}
              />
            )
          })}
      </RowComponent>
      <ColumnComponent>
        {/* Display content of the active tab */}
        {activeTab && activeTab.content.map((section) => (
          <CardComponent key={section.id}>
            <h3>{section.heading}</h3>
            <p>{section.text}</p>
          </CardComponent>
        ))}
      </ColumnComponent>
    </Main>
  );
}

export default App;
