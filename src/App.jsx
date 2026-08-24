import DataFetcher from './components/DataFetcher';

function App(){
  return(
    <div className="app">
      <h1 className='text-4xl front-extrabold text-center py-8 bg-blue-600 text-white'>
        aula rquisicoes http em react
      </h1>
      {/*renderiza o componete que faz a reuisicao*/}
      <DataFetcher />
    </div>
  );
};
