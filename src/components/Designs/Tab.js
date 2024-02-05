import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Tab.scss';
import Accordion from './Accordion'
 const TabDesign = () => (
  <Tabs>
    <TabList>
      <Tab>Design editor</Tab>
      <Tab>Copy editor</Tab>
    </TabList>

    <TabPanel>
      <div className='accItems'>
        <Accordion />
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Copy editor content</h2>
    </TabPanel>
  </Tabs>
);

export default TabDesign