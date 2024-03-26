import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import Adventage from '../components/Adventage/Adventage';
import Feature from '../components/Feature/Feature';
import ProductsSection from '../components/ProductsSection/ProductsSection';

function Main() {

    return (
      <>
        <Header />
        <div className="wrapper">
          <MainSection />
          <Adventage />
          <Feature />
          <ProductsSection bg={true} />
        </div>
      </>
    )
  }
  
  export default Main;