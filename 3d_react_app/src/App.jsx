import style from './style';
import './App.css'
import { Navbar,Billing,Business,CTA,CardDeal,Client,Footer,Hero,Testimonials,States } from './components';

function App() {
  
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${style.paddingX} ${style.flexCenter} `}>
        <div className={`${style.boxWidth}`}>
         < Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}
        >
         < Hero/>
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX}   ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}
        >    
    
    <States />
    <Business />
    <Billing />
    <CardDeal />
    <Testimonials />
    <Client />
    <CTA />
    
    
    <Footer />
    
        </div>
      </div>
    </div>
  )
}

export default App
