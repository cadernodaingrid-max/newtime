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
            "Supino Inclinado (Halteres): 3 x 10-12. (Carga: 7kg | 10kg)",
            "Push Press (Halteres): 3 x 10.",
            "Dips (Gravitron ou Banco): 3 x 10-12. (Carga: -47kg | -61kg)",
            "Elevação Lateral: 3 x 12. (Carga: 3kg)",
            "Core Rotacional - Cortador com elástico ou cabo: 3 x 12 cada lado. (Carga: 3.kg | 6.kg)"
        ]
    },
    "3": {
        "titulo": "Inferior (Dominância de Joelho e Quadril)",
        "tempo": "45-55 min",
        "aquecimento": "Elevação de Quadris: 3 x 15. (subir 2s, hold 2s, descer 2s)",
        "exercicios": [
            "Agachamento Livre (Barra): 3 x 10-12. (descer 3s, subir explosivo)",
            "Leg Press 45°: 3 x 12. (descer 2s, subir 2s)",
            "Avanço Unilateral Halteres: 3 x 10 cada perna. (descer 2s, hold 1s, subir 1s)",
            "Panturrilha em pé: 4 x 15. (subir 1s, hold 2s, descer 2s)",
            "Abdominal Infra (Solo ou Suspenso): 3 x 15. (subir 2s, descer 4s)"
        ]
    },
    "4": {
        "titulo": "Potência e Integração Funcional",
        "tempo": "55-65 min",
        "aquecimento": "5 a 10 minutos de caminhada rápida.",
        "exercicios": [
            "Ativação do Core: Prancha Ventral (3 séries de 30s a 45s).",
            "Estabilidade: Perdigueiro (3 séries de 12 reps alternadas).",
            "Superman no Solo: 3 séries de 15 reps.",
            "Step-up no Banco (com halteres): 3 séries de 10 reps por perna.",
            "Burpees (Tradicional): 3 séries de 10 a 12 reps.",
            "Cortador com Cabo (Polia): 3 séries de 12 reps (cada lado).",
            "Face Pull: 3 séries de 12 reps.",
            "Elevação Lateral: 3 séries de 12 reps"
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
            "Finalização: Abdominal pêndulo: 3x20."
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
