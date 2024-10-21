async function consultarDDD() {
    const ddd = document.getElementById('ddd').value;
    const url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data); // Verifique a resposta completa no console

        if (data.state) {
            document.getElementById('resultado').innerHTML = `
                <h3>Informações do DDD ${ddd}</h3>
                <p><strong>Estado:</strong> ${data.state}</p>
                <p><strong>Cidades:</strong> ${data.cities.join(', ')}</p>
            `;
        } else {
            document.getElementById('resultado').innerHTML = `
                <p>Não foi possível encontrar informações para o DDD ${ddd}.</p>
            `;
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        document.getElementById('resultado').innerHTML = `
            <p>Ocorreu um erro ao consultar a API: ${error.message}</p>
        `;
    }
}
