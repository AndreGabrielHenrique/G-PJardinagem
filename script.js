// Função para buscar a temperatura atual da API OpenWeatherMap
async function obterTemperatura() {
    const apiKey = '471c9b9c0390b7986bde02dd6a27e193'; // Substitua por sua chave de API do OpenWeatherMap
    const cidade = 'Sao Paulo'; // Altere para a cidade desejada
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${apiKey}`;
  
    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();
  
      if (dados.main && dados.main.temp) {
        const temperatura = dados.main.temp;
        document.getElementById('temperatura-valor').textContent = `${temperatura}°C`;
      } else {
        document.getElementById('temperatura-valor').textContent = 'Dados indisponíveis';
      }
    } catch (erro) {
      console.error('Erro ao obter a temperatura:', erro);
      document.getElementById('temperatura-valor').textContent = 'Erro ao carregar';
    }
  }
  
  // Chamar a função ao carregar a página
  window.addEventListener('DOMContentLoaded', obterTemperatura);
  