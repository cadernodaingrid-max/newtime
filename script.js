const dadosTreinos = {
  "treino_a": {
    "titulo": "Membros Inferiores",
    "subtitulo": "Anterior / Quadríceps",
    "exercicios": [
      { "nome": "Hack Squat (Máquina)", "execucao": "4 séries • 6 a 8 repetições", "peso": "35kg", "tec": "Carga Progressiva", "obs": "Obrigatório. Foco em força e estabilidade." },
      { "nome": "Leg Press 45°", "execucao": "4 séries • 8 repetições", "peso": "60kg", "tec": "Pausa de 1s no Alongamento", "obs": "Obrigatório. Pausa no ponto mais baixo." },
      { "nome": "Cadeira Extensora (Unilateral + Bilateral)", "execucao": "3 séries • 8 Unil. + 8 Bilat.", "peso": "22.5 / 30", "tec": "Jump-set", "obs": "Obrigatório. Adicione Drop-set final na última série bilateral." },
      { "nome": "Mesa Flexora", "execucao": "3 séries • 8 repetições", "peso": "35", "tec": "Excêntrica Lenta", "obs": "Não será feito. Foco de hoje é Quadríceps; posterior será na quinta-feira." },
      { "nome": "Panturrilha no Leg + Abdominal Infra", "execucao": "4 séries • 10 + 15 repetições", "peso": "Máxima / Caneleira", "tec": "Bi-set", "obs": "Opcional. Realizar apenas se houver tempo." }
    ]
  },
  "treino_b": {
    "titulo": "Superior - Empurrar",
    "subtitulo": "Peito, Ombro e Tríceps",
    "exercicios": [
      { "nome": "Supino na Máquina + V-up", "execucao": "3 séries • 10 + 12", "peso": "--", "tec": "Bi-set", "obs": "Obrigatório. Abdômen ativo entre as séries." },
      { "nome": "Desenvolvimento Halteres", "execucao": "3 séries • 10-12", "peso": "8kg", "tec": "Pegada Neutra", "obs": "Obrigatório." },
      { "nome": "Tríceps Corda + Elevação Lateral", "execucao": "3 séries • 12 + 15", "peso": "10 / 4", "tec": "Bi-set", "obs": "Obrigatório. Descanso reduzido." },
      { "nome": "Rosca Inversa (Polia)", "execucao": "3 séries • 15", "peso": "10kg", "tec": "Tensão Contínua", "obs": "Opcional. Trabalho de antebraço." }
    ]
  },
  "treino_c": {
    "titulo": "Membros Inferiores",
    "subtitulo": "Posterior e Glúteo",
    "exercicios": [
      { "nome": "Levantamento Terra", "execucao": "4 séries • 10", "peso": "27.5kg", "tec": "Progressão", "obs": "Obrigatório. Aumentado para 4 séries para maior gasto calórico." },
      { "nome": "Leg Press 45° (Pés Altos)", "execucao": "3 séries • 12", "peso": "45kg", "tec": "Amplitude Máxima", "obs": "Obrigatório. Foco total em glúteo." },
      { "nome": "Mesa Flexora + Abdutora", "execucao": "3 séries • 15 + 20", "peso": "30 / 40", "tec": "Super-série", "obs": "Obrigatório." },
      { "nome": "Extensão de Quadril 45°", "execucao": "3 séries • 12", "peso": "5kg", "tec": "Pico de Contração", "obs": "Opcional." }
    ]
  },
  "treino_d": {
    "titulo": "Superior - Puxar",
    "subtitulo": "Costas e Bíceps",
    "exercicios": [
      { "nome": "Puxada Alta Triângulo", "execucao": "3 séries • 10", "peso": "33kg", "tec": "Negativa de 4s", "obs": "Obrigatório. Peso validado no treino de 09/01." },
      { "nome": "Remada Articulada (Máquina)", "execucao": "3 séries • 10", "peso": "20kg", "tec": "PC Escapular", "obs": "Obrigatório. Substituta da Cavalinho (Não será feita)." },
      { "nome": "Rosca Scott + Rosca Martelo", "execucao": "3 séries • 12 + 12", "peso": "5 / 4", "tec": "Bi-set", "obs": "Obrigatório. Pesos validados no treino de 09/01." },
      { "nome": "Tríceps Overhead + Face Pulls", "execucao": "3 séries • 12 + 15", "peso": "6.75 / 10", "tec": "Bi-set", "obs": "Opcional. Pesos validados no treino de 09/01." },
      { "nome": "Abdominal Máquina", "execucao": "3 séries • 15", "peso": "25kg", "tec": "Carga Progressiva", "obs": "Obrigatório." }
    ]
  },
  "treino_e": {
    "titulo": "Corpo Inteiro",
    "subtitulo": "Esvaziamento de Glicogênio",
    "exercicios": [
      { "nome": "Agachamento Búlgaro", "execucao": "3 séries • 10", "peso": "8kg", "tec": "Cadência 3-1-1", "obs": "Obrigatório." },
      { "nome": "Cadeira Extensora", "execucao": "3 séries • 15", "peso": "25kg", "tec": "Cadência 3-0-3", "obs": "Obrigatório." },
      { "nome": "Supino Inclinado + Arnold", "execucao": "3 séries • 12 cada", "peso": "5", "tec": "Bi-set", "obs": "Obrigatório. Halteres de 5kg para manter volume." },
      { "nome": "Puxada Supinada", "execucao": "3 séries • 12", "peso": "30kg", "tec": "Pico de Contração", "obs": "Obrigatório." },
      { "nome": "Prancha Lateral", "execucao": "3 séries • 45s", "peso": "0", "tec": "Isometria", "obs": "Obrigatório." }
    ]
  }
};

function carregarTreino() {
    const container = document.querySelector('.exercise-list');
    const tituloPagina = document.querySelector('h1');
    const subtituloPagina = document.querySelector('.date');
    const treinoId = document.body.dataset.treino;

    const treino = dadosTreinos[treinoId];

    if (treino) {
        tituloPagina.innerText = treino.titulo;
        subtituloPagina.innerText = treino.subtitulo;

        container.innerHTML = treino.exercicios.map(ex => `
            <article class="exercise-card">
                <div class="exercise-info">
                    <h2>${ex.nome}</h2>
                    <p class="technique">${ex.execucao}</p>
                </div>
                <div class="exercise-metrics">
                    <div class="metric-box">
                        <span class="label">Peso</span>
                        <span class="value">${ex.peso}<span class="unit">kg</span></span>
                    </div>
                    <div class="metric-box">
                        <span class="label">tec</span>
                        <span class="value">${ex.tec}</span>
                    </div>
                </div>
                ${ex.obs ? `
                <div class="exercise-notes">
                    <p class="obs-text">${ex.obs}</p>
                </div>` : ''}
            </article>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', carregarTreino);
