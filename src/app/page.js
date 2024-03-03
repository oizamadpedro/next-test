"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from 'next/image';
import img from "./static/exercicio.jpg";
import celular from "./static/celular.png";

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
            <Image src={celular} style={{borderRadius: '25px', width: '600px'}} alt="Aplicativo de celular" />
          </div>
        </div>
        <h2>COMO VOCÊ PODE MUDAR SUA VIDA?</h2>
        <div id="about-product">
          <div id="box-about">
            <p>Com AIIFIT, você pode dizer adeus aos planos de treino genéricos e às dietas que nunca funcionaram para você. Graças à nossa tecnologia de aprendizado de máquina de ponta, AIIFIT cria planos de treino e nutrição completamente personalizados para você. </p>
          </div>
          <div id="box-about">
            <p>AIIFIT é um aplicativo completo de saúde e bem-estar. Rastreie suas atividades físicas diárias, monitore seus padrões de sono, gerencie seu estresse - AIIFIT está aqui para garantir que você esteja sempre no controle da sua saúde.</p>
          </div>
        </div>
        <br></br>
        <div id="image-product">
          
        </div>
        <br></br><br></br><br></br><br></br>
      </div>
      <Footer />
    </>
  );
};

export default Home;