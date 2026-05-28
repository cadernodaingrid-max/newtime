const treinos = {
    const treinos = {
    "1": {
        "titulo": "Segunda-feira: Puxada (Cadeia Posterior e Postura)",
        "tempo": "45-55 min",
        "aquecimento": "5 min de esteira leve.",
        "exercicios": [
            "Puxada Frontal na Polia Alta: 3 x 8-12. (33KG)",
            "Remada Sentada no Cabo (Pegada Triângulo): 3 x 8-12. (13.5KG)",
            "Stiff com Barra: 3 x 8-12. (20KG)",
            "Remada Alta com Barra: 3 x 10. (17.5KG)",
            "Core: Pallof Press na Polia (Antirrotação): 3 x 12 cada lado. (8KG)"
        ]
    },
    "2": {
        "titulo": "Terça-feira: Perna (Dominância de Quadríceps)",
        "tempo": "45-55 min",
        "aquecimento": "5 min de esteira leve.",
        "exercicios": [
            "Agachamento Livre com Barra: 3-4 x 8-12. (25KG)",
            "Leg Press 45°: 3 x 12. (40KG)",
            "Step-up no Banco (Halteres): 3 x 10 cada perna. (5KG)",
            "Extensão de Tornozelo em Pé na Máquina (Panturrilha): 4 x 15.",
            "Core: Abdominal 'Crunch': 3 x 15."
        ]
    },
    "3": {
        "titulo": "Quarta-feira: Empurrar (Peitoral, Ombros e Tríceps)",
        "tempo": "45-55 min",
        "aquecimento": "5 min de esteira leve.",
        "exercicios": [
            "Supino Reto com Barra: 3 x 8-12. (25KG)",
            "Push Press com Halteres: 3 x 10. (8KG)",
            "Mergulho (Dips) no Gravitron ou Banco: 3 x 10-12.",
            "Elevação Lateral com Halter: 3 x 12. (4KG)",
            "Core: Cortador Horizontal no Cabo (Padrão de Rotação): 3 x 12 cada lado. (6KG)"
        ]
    },
    "4": {
        "titulo": "Quinta-feira: Bi-set Metabólico",
        "tempo": "35-45 min",
        "aquecimento": "5 min de esteira leve.",
        "exercicios": [
            "Bi-set 1: Agachamento Sumô (Halter) + Supino com Halteres: 3 x 10-12. (12KG | 9KG)",
            "Bi-set 2: Remada no Cabo + Stiff com Halteres: 3 x 10-12. (13KG | 8KG)",
            "Bi-set 3: Avanço Lateral (Halteres) + Elevação Lateral: 3 x 12. (4KG | 3KG)",
            "Core: Extensão de Lombar na Máquina: 3 x 12."
        ]
    },
    "5": {
        "titulo": "Sexta-feira: Perna (Cadeia Posterior e Potência)",
        "tempo": "55-65 min",
        "aquecimento": "5 min de esteira leve.",
        "exercicios": [
            "Levantamento Terra: 3 x 8-10. (25KG)",
            "Avanço (Lunge) com Barra nas Costas: 3 x 10 cada perna. (10KG)",
            "Cadeira Flexora: 3 x 12. (27KG)",
            "Agachamento com Barra à Frente (Front Squat): 3 x 10. (15KG)",
            "Core: Remada Unilateral em Pé na Polia (Foco Estabilização): 3 x 12 cada lado. (8KG)"
        ]
    }
}};

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
