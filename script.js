const treinos = {
    "1": {
        "titulo": "Segunda-feira: Puxada (Cadeia Posterior e Postura)",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve.",
        "exercicios": [
            "Bi-set 1: Puxada Alta Aberta + Puxada Alta Fechada: 3 x 8-12.",
            "Bi-set 2: Puxada Alta com Triângulo + Puxada Alta Regular: 3 x 8-12.",
            "Stiff com Barra: 3 x 10-12.",
            "Remada Sentada (Cabo): 3 x 12.",
            "Bi-set 3 (Braços): Rosca Direta + Rosca Inversa: 3 x 12.",
            "Fortalecimento de Antebraço (Rosca de Punho na Máquina ou Halter): 3 x 15.",
            "Core: Elevação de Joelhos na Cadeira Capitão (Paralela): 3 x 15."
        ]
    },
    "2": {
        "titulo": "Terça-feira: Pernas (Dominância de Quadríceps)",
        "tempo": "40-50 min",
        "aquecimento": "5 min esteira leve.",
        "exercicios": [
            "Bi-set 1: Agachamento no Smith + Step-up no Banco (Halteres): 3 x 10-12.",
            "Leg Press Máquina (Horizontal): 3 x 12.",
            "Bi-set 2: Cadeira Extensora + Extensão de Tornozelo em pé: 3 x 12-15.",
            "Core: Rotação de Tronco com Anilha (Em pé): 3 x 12 cada lado."
        ]
    },
    "3": {
        "titulo": "Quarta-feira: Empurrar (Peitoral e Ombros)",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve.",
        "exercicios": [
            "Bi-set 1: Supino Reto (Barra) + Crucifixo (Halteres): 3 x 8-12.",
            "Bi-set 2: Desenvolvimento Arnold (Halteres) + Elevação Frontal (Halteres): 3 x 10-12.",
            "Elevação Lateral: 3 x 12.",
            "Mergulho (Dips) no Gravitron: 3 x 10-12.",
            "Tríceps na Polia (Barra V): 3x12",
            "Core: Extensão Lombar na Máquina: 3 x 12."
        ]
    },
    "4": {
        "titulo": "Quinta-feira: Metabólico (Bi-sets Integrados)",
        "tempo": "35-45 min",
        "aquecimento": "5 min esteira leve.",
        "exercicios": [
            "Bi-set 1: Agachamento Sumô (Halter) + Glúteo 'Chute atrás' na Máquina: 3 x 12.",
            "Bi-set 2: Remada no Cabo + Stiff com Halteres: 3 x 10-12.",
            "Bi-set 3: Avanço Lateral (Halteres) + Elevação Lateral: 3 x 12.",
            "Core: Prancha Ventral: 3 x 45 seg."
        ]
    },
    "5": {
        "titulo": "Sexta-feira: Pernas (Posterior e Potência)",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve.",
        "exercicios": [
            "Bi-set 1: Levantamento Terra (Barra): 3 x 8-10 + Cadeira Flexora: 3 x 12.",
            "Leg Press Máquina Horizontal: 3 x 12.",
            "Agachamento Unilateral no Smith: 3 x 10 cada perna.",
            "Agachamento com Barra à Frente: 3 x 10.",
            "Core: Abdominal na Máquina (Crunches): 3 x 15."
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
