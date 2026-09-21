const treinos = {
    "1": {
        "titulo": "Treino A: Membros Inferiores",
        "tempo": "50-55 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Cadeira Extensora: 3 x 12-15",
            "Leg Press: 3 x 10-12",
            "Squat com halter no peito: 3 x 10",
            "Panturrilha: 4 x 12-15"
        ]
    },
    "2": {
        "titulo": "Treino B: Membros Superiores",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Supino Reto com Halteres: 3 x 10-12",
            "AgRemada Baixa no Triângulo: 3 x 10-12",
            "Desenvolvimento com Halteres (Sentada com banco a 80°/90°): 3 x 12",
            "Puxada Alta Aberta no Pulley: 3 x 10-12",
            "Tríceps Corda no Pulley: 3 x 12",
            "Rosca Direta com Halteres (Sentada: 3 x 12",
        ]
    },
    "4": {
        "titulo": "Treino C: Membros Inferiores",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Cadeira Flexora: 3 x 12",
            "Cadeira Abdutora: 3 x 12-15",
            "Stiff com Halteres: 3 x 10-12",
            "Glúteo Máquina: 3 x 12-15",
            "Panturrilha: 3 x 15"
        ]
    },
    "3": {
        "titulo": "Quarta-feira: Descanso ativo",
        "tempo": "35-40 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Dia de Caminhada."
        ]
    },
    "5": {
        "titulo": "Treino D: Membros Superiores",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve",
        "exercicios": [
            "Supino Inclinado com Halteres: 3 x 10-12",
            "Remada Unilateral com Halter (Serrote): 3 x 10-12",
            "Elevação Lateral: 3 x 12-15",
            "Crucifixo Invertido: 3 x 12",
            "Core: Prancha Ventral: 3 x 20-30s"
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
