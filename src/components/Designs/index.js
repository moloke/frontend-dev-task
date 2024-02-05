
import './index.scss'
import ClientLogo from '../../assets/images/client_logo.png'
import Tab from './Tab'
import Chatbot from '../../assets/images/chatbot.png'


const Designs = () => {


  return (
    <div className='page'>

      <div className='heading'>
        <div className='logo'><img src={ClientLogo}></img></div>
        <h1>Designs</h1>
      </div>


    <div className='tabArea'>
      <Tab />
    </div>

    <div className='chatbotarea'>
      <h2>Preview</h2>
      <img src={Chatbot} />
    </div>
    

    </div>
  );
}

export default Designs