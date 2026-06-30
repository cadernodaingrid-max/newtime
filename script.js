const treinos = {
    "1": {
        "titulo": "Segunda-feira: Puxada (Cadeia Posterior e Postura)",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve + mobilidade de ombros e coluna.",
        "exercicios": [
            "Puxada Alta Aberta: 3 x 8-10 (foco em carga).",
            "Puxada Alta Fechada: 3 x 10-12.",
            "Remada Cavalinho: 3 x 10.",
            "Stiff com Barra: 3 x 10-12 (foco na descida controlada).",
            "Remada Sentada (Cabo): 3 x 12.",
            "Bi-set (Braços): Rosca Direta + Rosca Inversa: 3 x 12.",
            "Fortalecimento de Antebraço (Rosca de Punho): 3 x 15.",
            "Core: Elevação de Joelhos na Cadeira Capitão: 3 x 15."
        ]
    },
    "2": {
        "titulo": "Terça-feira: Pernas (Dominância de Quadríceps)",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve + mobilidade de quadril e tornozelo.",
        "exercicios": [
            "Agachamento no Smith: 3 x 8-10 (série simples com descanso total).",
            "Step-up no Banco (Halteres): 3 x 10-12 cada perna.",
            "Leg Press Máquina (Horizontal): 3 x 12.",
            "Bi-set: Cadeira Extensora + Extensão de Tornozelo em pé: 3 x 12-15.",
            "Core: Rotação de Tronco com Anilha (Em pé): 3 x 12 cada lado."
        ]
    },
    "3": {
        "titulo": "Quarta-feira: Empurrar (Peitoral e Ombros)",
        "tempo": "45-55 min",
        "aquecimento": "5 min esteira leve + mobilidade de ombros e escápulas.",
        "exercicios": [
            "Supino Reto (Barra): 3 x 8-10 (série simples com descanso total).",
            "Crucifixo (Halteres): 3 x 12.",
            "Desenvolvimento Arnold (Halteres): 3 x 10.",
            "Bi-set (Ombros): Elevação Lateral + Elevação Frontal (Halteres): 3 x 12.",
            "Mergulho (Dips) no Gravitron: 3 x 10-12.",
            "Tríceps na Polia (Barra V): 3 x 12.",
            "Core: Extensão Lombar na Máquina: 3 x 12."
        ]
    },
    "4": {
        "titulo": "Quinta-feira: Cardio, Regenerativo e Core (Sem pernas)",
        "tempo": "35-45 min",
        "aquecimento": "5 min esteira leve + mobilidade geral.",
        "exercicios": [
            "Remada no Cabo: 3 x 12.",
            "Desenvolvimento em pé (Halteres): 3 x 10-12.",
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
            "Levantamento Terra (Barra): 3 x 8 (série simples, foco total em força e postura).",
            "Cadeira Flexora: 3 x 10-12.",
            "Leg Press Máquina Horizontal: 3 x 12 (pés posicionados mais altos na plataforma).",
            "Agachamento Unilateral no Smith: 3 x 10 cada perna.",
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
