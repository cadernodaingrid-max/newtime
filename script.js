const treinos = {
    "1": {
        "titulo": "Treino A: Membros Superiores (Peito, Tríceps e Ombro)",
        "tempo": "50-55 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Supino Reto com Halteres: 4 x 8-10",
            "Supino Inclinado com Halteres: 3 x 10-12",
            "Desenvolvimento com Halteres (Sentada banco 75°-80°): 3 x 10-12",
            "Elevação Lateral com Halteres: 4 x 12-15",
            "Tríceps Corda no Pulley: 3 x 10-12",
            "Tríceps Francês com Halter: 3 x 12"
        ]
    },
    "2": {
        "titulo": "Treino B: Membros Inferiores (Quadríceps e Panturrilhas)",
        "tempo": "50-55 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Agachamento Livre / Smith / Goblet: 4 x 8-10",
            "Leg Press 45°: 4 x 10-12",
            "Cadeira Extensora: 3 x 12-15 (pico de contração de 1s)",
            "Cadeira Adutora: 3 x 12-15",
            "Panturrilha no Leg Press ou Máquina em Pé: 4 x 12-15"
        ]
    },
    "3": {
        "titulo": "Treino C: Membros Superiores (Costas, Bíceps e Deltoide Posterior)",
        "tempo": "50-55 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Puxada Alta Aberta no Pulley: 4 x 8-10",
            "Remada Baixa no Triângulo: 3 x 10-12",
            "Remada Unilateral com Halter (Serrote): 3 x 10-12",
            "Crucifixo Invertido na Máquina ou Halter: 3 x 12-15",
            "Rosca Direta com Halteres ou Barra W: 3 x 10-12",
            "Rosca Martelo com Halteres: 3 x 12"
        ]
    },
    "4": {
        "titulo": "Treino D: Membros Inferiores (Posterior de Coxa e Glúteos)",
        "tempo": "50-55 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Stiff com Halteres ou Barra: 4 x 8-10",
            "Cadeira Flexora: 4 x 10-12",
            "Cadeira Abdutora: 3 x 12-15",
            "Agachamento Búlgaro ou Passada/Afundo: 3 x 10-12 (por perna)",
            "Panturrilha Sentada na Máquina: 4 x 15"
        ]
    },
    "5": {
        "titulo": "Treino E: Membros Superiores (Tônus, Ombros, Braços e Core)",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Elevação Lateral na Polia: 4 x 12-15",
            "Desenvolvimento Unilateral com Halter: 3 x 10-12",
            "Tríceps Testa na Polia ou Halteres: 3 x 12",
            "Rosca 45° no Banco Inclinado: 3 x 12",
            "Abdominal na Máquina: 3 x 15"
        ]
    }
};


const urlParams = new URLSearchParams(window.location.search);
const opcaoSelecionada = urlParams.get('opcao');

const listaContainer = document.getElementById('exercise-list');

if (opcaoSelecionada && treinos[opcaoSelecionada]) {
    const treino = treinos[opcaoSelecionada];

    
    document.getElementById('workout-title').textContent = treino.titulo;
    document.getElementById('workout-duration').textContent = `⏱ ${treino.tempo}`;
    document.getElementById('warmup-content').textContent = treino.aquecimento;

    
    listaContainer.innerHTML = "";
    
    treino.exercicios.forEach(exer => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        
        const span = document.createElement('span');
        span.textContent = exer;

        li.appendChild(checkbox);
        li.appendChild(span);
        listaContainer.appendChild(li);
    });
} else {
    document.body.innerHTML = "<h1>Treino não encontrado</h1><a href='index.html'>Voltar</a>";
}
