import { useState, useEffect } from "react";
import axios from 'axios';

import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import Adventage from '../components/Adventage/Adventage';
import Feature from '../components/Feature/Feature';
import ProductsSection from '../components/ProductsSection/ProductsSection';

function Main() {
  const [options, setOptions] = useState({});

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get('https://whiterabbitsbox.com.ua/wp-json/options/all');
        setOptions(response.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  console.log(options.bestsellery)

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