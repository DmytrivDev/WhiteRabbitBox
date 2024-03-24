import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection'
import Adventage from '../components/Adventage/Adventage'

function Main() {

    return (
      <>
        <Header />
        <div className="wrapper">
          <MainSection />
          <Adventage />
        </div>
      </>
    )
  }
  
  export default Main;