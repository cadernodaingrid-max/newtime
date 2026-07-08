const treinos = {
    "1": {
        "titulo": "Segunda-feira: Puxada (Cadeia Posterior e Postura)",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve + mobilidade de ombros e coluna.",
        "exercicios": [
            "Puxada Alta Aberta: 3 x 6-8 (foco em carga).",
            "Puxada Alta Unilateral: 3 x 10-12.",
            "Remada Cavalinho: 3 x 10.",
            "Remada Sentada com barra pronada - palma para baixo (aberta): 3 x 12.",
            "Rosca Direta barra W: 3 x 12.",
            "Bi-set (Braços): Rosca Inversa + Rosca de Punho: 3 x 15.",
            "Core: Elevação de Joelhos na Cadeira Capitão: 3 x 15."
        ]
    },
    "2": {
        "titulo": "Terça-feira: Pernas (Dominância de Quadríceps)",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve + mobilidade de quadril e tornozelo.",
        "exercicios": [
            "Agachamento no Smith: 3 x 8-10.",
            "Agachamento Búlgaro (ou Afundo unilateral com halteres): 3 x 10-12 cada perna.",
            "Cadeira Flexora (ou Mesa Flexora): 3 x 12.",
            "Bi-set: Cadeira Extensora + Extensão de Tornozelo em pé: 3 x 12-15.",
            "Core: Rotação de Tronco no Cabo (Polia): 3 x 12 cada lado."
        ]
    },
    "3": {
        "titulo": "Quarta-feira: Empurrar (Peitoral e Ombros)",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve + mobilidade de ombros e escápulas.",
        "exercicios": [
            "Supino Reto (Barra): 3 x 8-10 (série simples com descanso total).",
            "Mergulho (Dips) no Gravitron: 3 x 10-12.",
            "Crucifixo: 3 x 12.",
            "Desenvolvimento: 3 x 10.",
            "Elevação Lateral: 4 x 12-15.",
            "Tríceps na Polia: 3 x 12.",
            "Core: Extensão Lombar na Máquina: 3 x 12."
        ]
    },
    "4": {
        "titulo": "Quinta-feira: Cardio, Regenerativo e Core (Sem pernas)",
        "tempo": "35-45 min",
        "aquecimento": "5 min esteira leve + mobilidade geral.",
        "exercicios": [
            "Remada no Cabo: 3 x 12.",
            "Desenvolvimento Neutro: 3 x 10-12.",
            "Bi-set: Crucifixo Invertido + Elevação Lateral: 3 x 12.",
            "Core: Prancha Ventral: 3 x 45 seg.",
            "Cardio: 15-20 min de caminhada acelerada ou elíptico (ritmo moderado)."
        ]
    },
    "5": {
        "titulo": "Sexta-feira: Pernas (Posterior e Potência)",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve + mobilidade de quadril e posterior.",
        "exercicios": [
            "Levantamento Terra (Barra): 3 x 5-6.",
            "Agachamento Unilateral no Smith: 3 x 10 cada perna.",
            "Extensão no Banco Romano: 3 x 12.",
            "Cadeira Flexora: 3 x 10-12.",
            "Core: Abdominal Crunches: 3 x 15."
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
