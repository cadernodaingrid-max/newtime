const dadosTreinos = {
 "treino_a": {
    "titulo": "Membros Inferiores",
    "subtitulo": "Anterior / Quadríceps",
    "exercicios": [
      {"nome": "Hack Squat (Máquina)", "execucao": "4 séries • 6 a 8 repetições", "peso": "42.5+ (Subir 2.5kg)", "tec": "Carga Progressiva", "obs": "Descanso de 90s. O objetivo é sinalizar força para preservar músculo no déficit."},
      {"nome": "Leg Press 45°","execucao": "4 séries • 8 repetições","peso": "85+ (Aumentar)","tec": "Pausa de 1s no Alongamento", "obs": "Pausa no ponto mais baixo para eliminar energia elástica e recrutar mais fibras."},
      {"nome": "Cadeira Extensora (Unilateral + Bilateral)","execucao": "3 séries • 8 Unil. + 8 Bilat.","peso": "22.5 / 35","tec": "Jump-set","obs": "Faça unilateral e vá direto para a bilateral sem descanso. Foco em pump metabólico."},
      {"nome": "Mesa Flexora","execucao": "3 séries • 8 repetições","peso": "35+ (Aumentar)","tec": "Excêntrica Lenta","obs": "Controle a descida em 3 segundos. Máxima carga possível."},
      {"nome": "Panturrilha no Leg + Abdominal Infra","execucao": "4 séries • 10 + 15 repetições","peso": "Carga Máxima / Caneleira","tec": "Bi-set", "obs": "Sem descanso entre os dois para manter a frequência cardíaca elevada."}
    ]
  },
  "treino_b": {
    "titulo": "Superior - Empurrar",
    "subtitulo": "Peito, Ombro e Tríceps",
    "exercicios": [
      { "nome": "Supino na Máquina + V-up", "execucao": "3 séries • 10 + 12", "peso": "--", "tec": "Bi-set Agonista/Antagonista", "obs": "Abdômen ativo entre as séries de peito." },
      { "nome": "Desenvolvimento Halteres", "execucao": "3 séries • 10-12", "peso": "8+ (Subir)", "tec": "Pegada Neutra", "obs": "Se bater 12 reps com 8kg, na próxima semana use 9kg." },
      { "nome": "Tríceps Corda + Elevação Lateral", "execucao": "3 séries • 12 + 15", "peso": "10 / 5", "tec": "Bi-set", "obs": "Descanso reduzido para 45 segundos para otimizar queima." },
      { "nome": "Rosca Inversa (Polia)", "execucao": "3 séries • 15", "peso": "12.5", "tec": "Tensão Contínua", "obs": "Sem descanso no topo ou embaixo." }
    ]
  },
  "treino_c": {
    "titulo": "Membros Inferiores",
    "subtitulo": "Posterior e Glúteo",
    "exercicios": [
      { "nome": "Levantamento Terra", "execucao": "3 séries • 10", "peso": "27.5+ (Subir)", "tec": "Progressão de Carga", "obs": "Principal exercício para gasto calórico sistêmico." },
      { "nome": "Leg Press 45° (Pés Altos)", "execucao": "3 séries • 12", "peso": "45+", "tec": "Amplitude Máxima", "obs": "Foco em glúteo. Desça o máximo que a lombar permitir." },
      { "nome": "Mesa Flexora + Abdutora", "execucao": "3 séries • 15 + 20", "peso": "--", "tec": "Super-série", "obs": "Descida da flexora deve ser lenta." },
      { "nome": "Extensão de Quadril 45°", "execucao": "3 séries • 12", "peso": "Halter 5kg", "tec": "Pico de Contração", "obs": "Segure 2s no topo contraindo o glúteo." }
    ]
  },
  "treino_d": {
    "titulo": "Superior - Puxar",
    "subtitulo": "Costas e Bíceps",
    "exercicios": [
      { "nome": "Puxada Alta Triângulo", "execucao": "3 séries • 10", "peso": "35+", "tec": "Negativa de 4s", "obs": "Segure o peso na volta para maximizar microlesões." },
      { "nome": "Remada Cavalinho", "execucao": "3 séries • 10", "peso": "20+", "tec": "PC Escapular", "obs": "Esmague as costas no pico da contração." },
      { "nome": "Rosca Scott + Rosca Martelo", "execucao": "3 séries • 12 + 12", "peso": "6 / 7", "tec": "Bi-set", "obs": "Foco em falha mecânica." },
      { "nome": "Tríceps Overhead + Face Pulls", "execucao": "3 séries • 12 + 15", "peso": "7.5 / 10", "tec": "Bi-set", "obs": "Postura rigorosa." },
      { "nome": "Abdominal Máquina", "execucao": "3 séries • 15", "peso": "25+", "tec": "Carga Progressiva", "obs": "Comece com um peso moderado e aumente se conseguir completar as 15 reps com facilidade." }
    ]
  },
  "treino_e": {
    "titulo": "Corpo Inteiro",
    "subtitulo": "Esvaziamento de Glicogênio (Metabólico)",
    "exercicios": [
      { "nome": "Agachamento Búlgaro", "execucao": "3 séries • 10 reps", "peso": "Halter 8kg", "tec": "Cadência 3-1-1", "obs": "Este exercício elevará muito seu gasto de oxigênio." },
      { "nome": "Cadeira Extensora", "execucao": "3 séries • 15 reps", "peso": "25", "tec": "Cadência 3-0-3", "obs": "Movimento constante e fluido." },
      { "nome": "Supino Inclinado + Arnold", "execucao": "3 séries • 12 cada", "peso": "--", "tec": "Bi-set", "obs": "Faça os 2 sem descanso." },
      { "nome": "Puxada Supinada", "execucao": "3 séries • 12 reps", "peso": "30+", "tec": "Pico de Contração", "obs": "Faça isolado para focar na carga máxima e expansão dorsal." },
      { "nome": "Prancha Lateral", "execucao": "3 séries • 45s", "peso": "0", "tec": "Isometria", "obs": "Foco na estabilidade e afinamento da cintura." }
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
