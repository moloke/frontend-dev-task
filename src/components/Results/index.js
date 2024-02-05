import React from 'react';
import './index.scss'
import ClientLogo from '../../assets/images/client_logo.png'
import DisplayResults from './DisplayResults'
import DisplayChart from './DisplayChart'
import Dropdown from '../../assets/images/dummy_dropdown.png'
import ResultsIcon1 from '../../assets/images/results_icon1.svg'
import ResultsIcon2 from '../../assets/images/results_icon2.svg'
import ResultsIcon3 from '../../assets/images/results_icon3.svg'
import UpArrow from '../../assets/images/up_arrow.png'
import DownArrow from '../../assets/images/down_arrow.png'


const Results = () => {





  return (
    <div className='page'>

      <div className='heading'>
        <div className='logo'><img src={ClientLogo}></img></div>
        <h1>Your performance</h1>
      </div>


      <div className='results-section'>
        <h2>Results</h2>
        <div className='items'>
          <DisplayResults img={ResultsIcon1} subhead={'1,495'} description={'orders use efitter'} directionimg={UpArrow} value={'35%'}/>
          <DisplayResults img={ResultsIcon2} subhead={'32%'} description={'of orders using Sizing Solution'} directionimg={UpArrow} value={'34%'}/>
          <DisplayResults img={ResultsIcon3} subhead={'78%'} description={'of sizes are predicted accurately'} directionimg={DownArrow} value={'8%'}/>
        </div>
      </div>


      <div className='chart-section'>
        <h2>Average order value / Returns</h2>
        <div className='items'>
          <div><DisplayChart /></div>
          
        </div>
        <img src={Dropdown} />
      </div>


      <div className='download'>
        Download CSV
      </div>
    </div>
  );
};


export default Results;