import './Accordion.scss';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Upload from '../../assets/images/upload_image.svg'
import Color from '../../assets/images/icon_color.svg'
import Size from '../../assets/images/icon_size.svg'
import Family from '../../assets/images/icon_family.svg'
import BotBground from '../../assets/images/bot_bground.svg'
import BotMsg from '../../assets/images/bot_text.svg'
import UserBground from '../../assets/images/user_bground.svg'
import UserMsg from '../../assets/images/user_text.svg'
import BtnBorder from '../../assets/images/btn_border.svg'
import BtnBground from '../../assets/images/btn_bground.svg'
import BtnTxt from '../../assets/images/btn_text.svg'









export default function AccordionUsage() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{fontSize: '22px', fontFamily: 'DM Sans', fontWeight: 400}}
        >
          General
        </AccordionSummary>
        <AccordionDetails>
          <div className='dropdownItems'>
            <div className='row'>
              <p>Font family</p>
              <div className='rightBox'><img src={Family}/></div>
            </div>
            <div className='row'>
            <p>Font size</p>
            <div className='rightBox'><img src={Size}/></div>
            </div>
            <div className='row'>
            <p>Background colour</p>
            <div className='rightBox'><img src={Color}/></div>
            </div>
            <div className='row'>
            <p>Chatbot icon</p>
            <div className='rightBox'><img src={Upload}/></div>
            </div>
            <div className='row'>
              <p>Chatbot avatar</p>
            <div className='rightBox'><img src={Upload}/></div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{fontSize: '22px', fontFamily: 'DM Sans', fontWeight: 400}}
        >
          Chatbot
        </AccordionSummary>
        <AccordionDetails>
        <div className='dropdownItems'>
            <div className='row'>
              <p>Message bubble shape </p>
              
            </div>
            <div className='row'>
            <p>Chatbot message background</p>
            <div className='rightBox'><img src={BotBground}/></div>
            </div>
            <div className='row'>
            <p>Chatbot message text</p>
            <div className='rightBox'><img src={BotMsg}/></div>
            </div>
            <div className='row'>
            <p>User message background</p>
            <div className='rightBox'><img src={UserBground}/></div>
            </div>
            <div className='row'>
              <p>User message text</p>
            <div className='rightBox'><img src={UserMsg}/></div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={{fontSize: '22px', fontFamily: 'DM Sans', fontWeight: 400}}
        >
          Buttons
        </AccordionSummary>
        <AccordionDetails>
          <div className='dropdownItems'>
            <div className='row'>
            <p>Button border</p>
            <div className='rightBox'><img src={BtnBorder}/></div>
            </div>
            <div className='row'>
            <p>Button background</p>
            <div className='rightBox'><img src={BtnBground}/></div>
            </div>
            <div className='row'>
              <p>Button text</p>
            <div className='rightBox'><img src={BtnTxt}/></div>
            </div>
          </div>
        
        </AccordionDetails>
      </Accordion>
    </div>
  );
}