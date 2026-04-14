const treinos = {
    "1": {
        "titulo": "Superior (Foco em Puxar e Cadeia Posterior)",
        "tempo": "45-55 min",
        "aquecimento": "5-10 min de atividade aeróbica + Prancha Ventral (3 séries de 30s).",
        "exercicios": [
            "Puxada alta: 3 x 10-12.",
            "Remada Sentada: 3 x 10-12.",
            "Stiff (Barra ou Halteres): 3 x 10-12.",
            "Rosca Direta (Halteres): 3 x 12.",
            "Superman (Extensão no Solo): 3 x 15."
        ]
    },
    "2": {
        "titulo": "Superior (Foco em Empurrar e Estabilidade)",
        "tempo": "45-55 min",
        "aquecimento": "Mobilidade de ombros + Perdigueiro (3 x 12 reps alternadas).",
        "exercicios": [
            "Supino Inclinado (Halteres): 3 x 10-12.",
            "Push Press (Halteres): 3 x 10.",
            "Dips (Gravitron ou Banco): 3 x 10-12.",
            "Elevação Lateral: 3 x 12.",
            "Core Rotacional: Cortador com elástico ou cabo (3 x 12 cada lado)."
        ]
    },
    "3": {
        "titulo": "Inferior (Dominância de Joelho e Quadril)",
        "tempo": "45-55 min",
        "aquecimento": "Elevação de Quadris (Ponte) (3 x 15).",
        "exercicios": [
            "Agachamento Livre (Barra): 3 x 10-12.",
            "Leg Press 45°: 3 x 12.",
            "Avanço Unilateral (Halteres): 3 x 10 cada perna.",
            "Extensão de Tornozelo (Panturrilha): 4 x 15.",
            "Abdominal Infra (Solo ou Suspenso): 3 x 15."
        ]
    },
    "4": {
        "titulo": "Potência e Integração Funcional",
        "tempo": "55-65 min",
        "aquecimento": "5 a 10 minutos de caminhada rápida.",
        "exercicios": [
            "Ativação do Core: Prancha Ventral (3 séries de 30s a 45s).",
            "Estabilidade: Perdigueiro (3 séries de 12 reps alternadas).",
            "Step-up no Banco (com halteres): 3 séries de 10 reps por perna.",
            "Y na Polia Baixa (ou I e Y no solo): 3 séries de 12 reps.",
            "Cortador com Cabo (Polia): 3 séries de 12 reps (cada lado).",
            "Burpees (Tradicional): 3 séries de 10 a 12 reps.",
            "Superman no Solo: 3 séries de 15 reps."
        ]
    },
    "5": {
        "titulo": "Bi-sets Metabólico (Fullbody)",
        "tempo": "35-45 min",
        "aquecimento": "Caminhada na esteira.",
        "exercicios": [
            "Bi-set 1: Agachamento Sumô + Supino Reto (Halteres): 3 x 10-12.",
            "Bi-set 2: Remada Sentada + Stiff: 3 x 10-12.",
            "Bi-set 3: Avanço + Elevação Lateral: 3 x 12.",
            "Finalização: Farmer's Walk (Caminhada do Fazendeiro): 3 voltas de 20 metros."
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
