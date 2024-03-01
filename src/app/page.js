"use client";

import Header from "./components/Header";
import Image from 'next/image';
import img from "./static/exercicio.jpg";

const Home = () => {

  return (
    <>
      <div id="home">
        <Header />
        <div id="page">
          <div>
            <h1>TRANSFORME O SEU ESTILO DE VIDA!</h1>
            <p>Desperte a sua melhor versão com o AllFit, o seu parceiro de saúde e fitness.</p>
            <br></br>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{width: '240px'}}>BAIXAR AGORA</button>
          </div>
          <div>
            <Image src={img} style={{borderRadius: '150px', width: '200', height: '180'}}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;