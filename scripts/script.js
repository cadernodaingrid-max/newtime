async function carregarTreino() {
    const container = document.querySelector('.exercise-list');
    const tituloPagina = document.querySelector('h1');
    const subtituloPagina = document.querySelector('.date');

  
    const treinoId = document.body.dataset.treino;

    try {
        const response = await fetch('treinos.json');
        const dados = await response.json();
        const treino = dados[treinoId];

        if (treino) {
            tituloPagina.innerText = treino.titulo;
            subtituloPagina.innerText = treino.subtitulo;

            container.innerHTML = treino.exercicios.map(ex => `
                <article class="exercise-card">
                    <div class="exercise-info">
                        <h2>${ex.nome}</h2>
                        <p class="technique">${ex.tecnica}</p>
                    </div>
                    <div class="exercise-metrics">
                        <div class="metric-box">
                            <span class="label">Peso</span>
                            <span class="value">${ex.peso}<span class="unit">kg</span></span>
                        </div>
                        <div class="metric-box">
                            <span class="label">Reps</span>
                            <span class="value">${ex.reps}</span>
                        </div>
                    </div>
                    ${ex.obs ? `
                    <div class="exercise-notes">
                        <p class="obs-text">${ex.obs}</p>
                    </div>` : ''}
                </article>
            `).join('');
        }
    } catch (error) {
        console.error("Erro ao carregar o treino:", error);
    }
}

document.addEventListener('DOMContentLoaded', carregarTreino);
