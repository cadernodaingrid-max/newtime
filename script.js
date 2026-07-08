const treinos = {
    "1": {
        "titulo": "Segunda-feira: Puxada (Cadeia Posterior e Postura)",
        "tempo": "50-55 min",
        "aquecimento": "5 min esteira leve + mobilidade de ombros e coluna.",
        "exercicios": [
            "Puxada Alta Aberta: 3 x 6-8 (Foco em carga e força)",
            "Remada Cavalinho: 3 x 10",
            "Puxada Alta Unilateral: 3 x 10-12",
            "Crucifixo Invertido: 3 x 12",
            "Rosca Direta barra W: 3 x 12",
            "Bi-set (Antebraço): Rosca Inversa + Rosca de Punho: 3 x 15",
            "Core: Elevação de Joelhos na Cadeira Capitão: 3 x 15"
        ]
    },
    "2": {
        "titulo": "Terça-feira: Pernas (Dominância de Quadríceps)",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve + mobilidade de quadril e tornozelo.",
        "exercicios": [
            "Agachamento no Smith: 3 x 8-10 (Carga progressiva)",
            "Agachamento Búlgaro: 3 x 10-12 cada perna",
            "Bi-set: Cadeira Extensora + Extensão de Tornozelo em pé (Panturrilha): 3 x 12-15",
            "Cadeira Flexora: 3 x 12",
            "Core: Rotação de Tronco no Cabo (Polia): 3 x 12 cada lado"
        ]
    },
    "4": {
        "titulo": "Quinta-feira: Empurrar (Peitoral e Ombros)",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve + mobilidade de ombros e escápulas.",
        "exercicios": [
            "Supino Reto (Barra): 3 x 8-10",
            "Mergulho (Dips) no Gravitron: 3 x 10-12",
            "Crucifixo Inclinado com Halteres: 3 x 12",
            "Desenvolvimento com Halteres: 3 x 10",
            "Elevação Lateral: 4 x 12-15",
            "Tríceps na Polia: 3 x 12",
            "Core: Extensão Lombar no Banco Romano: 3 x 12"
        ]
    },
    "3": {
        "titulo": "Quarta-feira: Cardio e Core",
        "tempo": "35-40 min",
        "aquecimento": "Mobilidade geral e alongamentos dinâmicos.",
        "exercicios": [
            "Dia de Caminhada."
        ]
    },
    "5": {
        "titulo": "Sexta-feira: Pernas (Posterior, Lombar e Potência)",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve + mobilidade de quadril e posterior.",
        "exercicios": [
            "Levantamento Terra (Barra Livre): 3 x 5-6",
            "Leg Press 45º (Bilateral): 3 x 10-12",
            "Cadeira Flexora: 3 x 10-12",
            "Panturrilhas Sentado: 4 x 15",
            "Core: Abdominal Crunches: 3 x 15"
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
