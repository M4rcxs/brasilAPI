const carTableBody = document.querySelector('#carTable tbody');

const carBrand = document.querySelector('.car_brand');
const carValue = document.querySelector('.car_value');
const carModel = document.querySelector('.car_model');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const button = document.querySelector('.btn-confirm');

let fipeNum = '0';

const fetchFipe = async (fipe) => {
    const APIResponse = await fetch(`https://brasilapi.com.br/api/fipe/preco/v1/${fipe}`);
  
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        console.log(data);
        return data;
    }
}

const getFipe = async (fipe) => {
    const data = await fetchFipe(fipe);

    input.value = '';
    fipeNum = fipe.id;

    if(data) {
        // Limpa a tabela antes de adicionar novos dados
        carTableBody.innerHTML = '';


        data.forEach(car => {
            if (car.anoModelo > 2024) {
                car.anoModelo = 2024;
            }
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${car.marca}</td>
                <td>${car.modelo}</td>
                <td>${car.anoModelo}</td>
                <td>${car.combustivel}</td>
                <td>${car.valor}</td>
            `;
            carTableBody.appendChild(row);
        });
    } else {
        // Se nenhum dado for encontrado, limpa a tabela
        carTableBody.innerHTML = '<tr><td colspan="5">Nenhum dado encontrado</td></tr>';
    }
}

button.addEventListener('click', async () => {
    await getFipe(input.value);
});

getFipe(fipeNum);