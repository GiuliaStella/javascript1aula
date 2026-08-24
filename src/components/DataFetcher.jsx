import React, { useState, useEffect } from "react";

function DataFetcher() {

    const [data, setData] = useState(null);
    // isso eh o equivalente a :
    // const data = data.useState();
    // const setData = data.setData.useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://jsonplaceholder.typecode.com/posts');

                if (!response.ok) {
                    throw new Error(`erro de rede: ${response.status} + ${response.statusText}`);
                }

                const jsonData = await response.json();

                setData(jsonData);

            } catch (err) {
                console.error('falha ao buscar dados: ', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-centerh-screen bg-gray-100 ">
                <div className="text-xl font-semibold text-gray-700 p-4 rounded-lg shadow-md bg-white">
                    Carregando dados...
                </div>

            </div>

        );
    };
    if (error) {
        return (
            <div className="flex justify-center items-centerh-screen bg-red-100 ">
                <div className="text-xl font-semibold text-red-700 p-4 rounded-lg shadow-md bg-white">
                    erro: {error}
                </div>

            </div>
        );
    }
    return (
        <div className="">
            <h2 className="">Dados da API</h2>
            <div className="">
                {data?(
                        <>
                    
                    <h3> { data.title }</h3>
            <p>{data.body}</p>
            <p> ID do post: {data.id}</p>
            <p> id dos usuario: {data.userId}</p>
            </>
                ) : (
                    <p> nenhum dados encontrado </p>
                )}
        </div>
        </div >
        
    );
};

export default DataFetcher