/* ==========================================================================
   CONTEÚDO DO GUIA
   --------------------------------------------------------------------------
   Para adicionar um tópico: copie um objeto de D.t e mude os campos.
   Para uma matéria nova: inclua o nome em MATERIAS, COR e EMOJI (app.js).

   Campos de cada tópico:
     id        único; usado na URL (#/t/<id>)
     mat       nome da matéria (igual ao de MATERIAS)
     n         número do tópico dentro da matéria
     calma     texto "Em outras palavras" (aceita HTML)
     passos    lista do passo a passo
     formulas  fórmulas e ideias-chave (aceita HTML)
     exemplo   exemplo de aplicação
     ex / resp exercícios e respostas (mesma ordem)
     links     "yt:<busca>" gera link de busca no YouTube;
               "khan", "mesalva" e "brasil" geram links dos sites
   ========================================================================== */

const D = {

  t: [

    /* ======================== MATEMÁTICA ======================== */
    {
      id: "mat1", mat: "Matemática", n: 1,
      titulo: "Porcentagem, razão e regra de três",
      calma: "Porcentagem é só uma fração com 100 embaixo: 25% é 25 em cada 100, ou seja, 1/4. Truque de ouro: ache 10% dividindo por 10 e monte o resto somando (5% é a metade, 20% é o dobro). <b>Desconto</b>: você paga o que sobra (20% off = paga 80%). <b>Aumento</b>: soma (+15% = paga 115%, ou seja, multiplica por 1,15). Na regra de três, pergunte: se uma coisa dobra, a outra dobra (direta) ou cai pela metade (inversa)?",
      passos: [
        "Transforme a porcentagem em fração: 20% = 20/100 = 0,20.",
        "Multiplique pelo valor: desconto = 0,20 x preço.",
        "Para regra de três, monte a tabela e veja se as grandezas são diretas ou inversas.",
        "Multiplique cruzado e simplifique."
      ],
      formulas: "Aumento de i%: multiplique por (1 + i/100). Desconto de i%: multiplique por (1 - i/100). Proporção: a/b = c/d, logo a x d = b x c.",
      exemplo: "Uma blusa de R$ 150 está com 20% de desconto. Preço final: 150 x 0,80 = <b>R$ 120</b>.",
      ex: [
        "Uma camiseta de R$ 80 aumentou 15%. Qual o novo preço?",
        "Se 3 canetas custam R$ 7,50, quanto custam 8 canetas?"
      ],
      resp: ["R$ 92,00", "R$ 20,00"],
      links: [
        "yt:porcentagem Provão Paulista matemática básica",
        "yt:regra de três simples e composta",
        "khan"
      ]
    },
    {
      id: "mat2", mat: "Matemática", n: 2,
      titulo: "Equações e funções do 1º grau",
      calma: "Imagine um app de corrida: tem um valor fixo (a bandeirada) e um valor que cresce a cada km. Isso é f(x) = ax + b: o <b>b</b> é o que você paga mesmo sem sair do lugar e o <b>a</b> é quanto sobe a cada unidade. Para resolver uma equação, pense numa balança: tudo que você faz de um lado, faz do outro. Se tirou 7 de um lado, tira 7 do outro e ela continua equilibrada.",
      passos: [
        "Isole o x: o que está somando passa subtraindo, o que multiplica passa dividindo.",
        "Função do 1º grau tem forma f(x) = ax + b: 'a' é a inclinação e 'b' é onde corta o eixo y.",
        "Para o gráfico, ache dois pontos e ligue com uma reta.",
        "Em problemas, o valor fixo é o b e o valor por unidade é o a."
      ],
      formulas: "f(x) = ax + b. Raiz: x = -b/a. Se a > 0 a função cresce; se a < 0 ela decresce.",
      exemplo: "f(x) = 2x + 3. Para x = 4: f(4) = 2 x 4 + 3 = <b>11</b>.",
      ex: [
        "Resolva 3x - 7 = 11.",
        "Um táxi cobra bandeirada de R$ 5 mais R$ 2 por km. Quanto custa uma corrida de 12 km?"
      ],
      resp: ["x = 6", "R$ 29,00"],
      links: [
        "yt:função do primeiro grau",
        "yt:equação do primeiro grau passo a passo",
        "mesalva"
      ]
    },
    {
      id: "mat3", mat: "Matemática", n: 3,
      titulo: "Equação e função do 2º grau",
      calma: "Aparece quando o x vem elevado ao quadrado, como em áreas ou numa bola que sobe e desce (a parábola!). Bhaskara é uma receita: (1) escreva a, b e c com os sinais; (2) calcule Delta = b<sup>2</sup> − 4ac; (3) se Delta for negativo, não tem raiz real; (4) senão, aplique a fórmula. Cuidado com o sinal: se b = −5, então −b = +5. Se a &gt; 0 a parábola abre pra cima (sorriso), se a &lt; 0 abre pra baixo.",
      passos: [
        "Identifique a, b e c em ax<sup>2</sup> + bx + c = 0.",
        "Calcule o discriminante: Delta = b<sup>2</sup> - 4ac.",
        "Use a fórmula de Bhaskara: x = (-b mais ou menos raiz de Delta) / 2a.",
        "O gráfico é uma parábola; o vértice dá o ponto máximo ou mínimo."
      ],
      formulas: "Delta &gt; 0: duas raízes. Delta = 0: uma raiz. Delta &lt; 0: nenhuma raiz real. Vértice: xv = -b/2a e yv = -Delta/4a.",
      exemplo: "x<sup>2</sup> - 5x + 6 = 0. Delta = 25 - 24 = 1. x = (5 mais ou menos 1)/2, logo <b>x = 3 ou x = 2</b>.",
      ex: [
        "Resolva x<sup>2</sup> - 7x + 10 = 0.",
        "Ache o vértice da parábola y = x<sup>2</sup> - 4x + 3."
      ],
      resp: ["x = 2 ou x = 5", "vértice (2, -1)"],
      links: [
        "yt:equação do segundo grau Bhaskara",
        "yt:função quadrática vértice parábola",
        "khan"
      ]
    },
    {
      id: "mat4", mat: "Matemática", n: 4,
      titulo: "Geometria plana",
      calma: "Regra número 1: <b>desenhe</b>! Metade das questões fica fácil quando você rabisca a figura e escreve as medidas nela. Área é quanto de tinta cobre a figura (unidade ao quadrado); perímetro é a volta, como um barbante em torno dela. Viu triângulo com ângulo reto? Pitágoras: o lado maior (hipotenusa) ao quadrado é a soma dos quadrados dos outros dois. Trio famoso que cai muito: 3, 4 e 5.",
      passos: [
        "Desenhe a figura e anote as medidas.",
        "Escolha a fórmula: área do retângulo = base x altura; triângulo = base x altura / 2; círculo = pi x r<sup>2</sup>.",
        "Em triângulos retângulos, use Pitágoras: a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup>.",
        "Confira as unidades (cm, m, cm<sup>2</sup>...)."
      ],
      formulas: "Perímetro = soma dos lados. Comprimento da circunferência = 2 x pi x r. Pitágoras: hipotenusa<sup>2</sup> = cateto<sup>2</sup> + cateto<sup>2</sup>.",
      exemplo: "Catetos 6 e 8: h<sup>2</sup> = 36 + 64 = 100, logo <b>h = 10</b>.",
      ex: [
        "Qual a área de um círculo de raio 5 cm? (use pi = 3,14)",
        "Uma tela de TV tem 40 cm de altura e 30 cm de largura. Qual a medida da diagonal?"
      ],
      resp: ["78,5 cm<sup>2</sup>", "50 cm"],
      links: [
        "yt:geometria plana áreas e perímetros",
        "yt:teorema de Pitágoras",
        "brasil"
      ]
    },
    {
      id: "mat5", mat: "Matemática", n: 5,
      titulo: "Geometria espacial (volumes)",
      calma: "Volume é quanto cabe dentro, como a água numa caixa. O truque é quase sempre o mesmo: <b>área do chão (base) × altura</b>. No cone e na pirâmide, que afinam até uma ponta, o volume é um terço do cilindro ou do prisma correspondente. Pegadinha clássica: 1 m<sup>3</sup> = 1000 litros, e 1 dm<sup>3</sup> = 1 litro. Antes de multiplicar, deixe tudo na mesma unidade.",
      passos: [
        "Identifique o sólido: prisma, cilindro, cone, pirâmide ou esfera.",
        "Calcule a área da base.",
        "Multiplique pela altura (e divida por 3 se for cone ou pirâmide).",
        "Lembre: 1 L = 1000 cm<sup>3</sup> = 1 dm<sup>3</sup>."
      ],
      formulas: "Caixa: V = a x b x c. Cilindro: V = pi x r<sup>2</sup> x h. Cone e pirâmide: V = (área da base x h) / 3.",
      exemplo: "Uma caixa-d'água de 2 m x 1 m x 1 m guarda 2 m<sup>3</sup> = <b>2000 litros</b>.",
      ex: [
        "Qual o volume de uma caixa de 4 cm x 5 cm x 3 cm?",
        "Um cilindro tem raio 3 cm e altura 10 cm. Calcule o volume (pi = 3,14)."
      ],
      resp: ["60 cm<sup>3</sup>", "282,6 cm<sup>3</sup>"],
      links: [
        "yt:geometria espacial volume prisma cilindro",
        "yt:volume do cone e da pirâmide",
        "mesalva"
      ]
    },
    {
      id: "mat6", mat: "Matemática", n: 6,
      titulo: "Estatística: média, mediana e moda",
      calma: "A <b>média</b> é o valor justo se todo mundo ganhasse igual (soma ÷ quantidade). A <b>mediana</b> é a pessoa do meio da fila depois de ordenar. A <b>moda</b> é a mais popular. Se aparece um valor muito fora da curva (um 0 numa lista de notas 9), a média cai bastante, mas a mediana quase não muda. Em gráficos, antes de qualquer conta, leia o título, os eixos e a unidade.",
      passos: [
        "Média: some todos os valores e divida pela quantidade.",
        "Mediana: coloque em ordem crescente e pegue o valor do meio (se forem dois, faça a média deles).",
        "Moda: o valor que mais se repete.",
        "Leia com atenção gráficos e tabelas: eles aparecem muito na prova!"
      ],
      formulas: "Média = soma / n. Mediana = valor central. Moda = maior frequência.",
      exemplo: "Notas 6, 7, 7, 8, 10: média = 38/5 = <b>7,6</b>; mediana = <b>7</b>; moda = <b>7</b>.",
      ex: [
        "Dados 3, 5, 5, 8: calcule média, mediana e moda.",
        "A média de 4 provas foi 7,5. Qual a soma das notas?"
      ],
      resp: ["média 5,25, mediana 5, moda 5", "30"],
      links: [
        "yt:média mediana e moda",
        "yt:interpretação de gráficos e tabelas ENEM",
        "khan"
      ]
    },
    {
      id: "mat7", mat: "Matemática", n: 7,
      titulo: "Probabilidade e contagem",
      calma: "Probabilidade é uma fração: quantos jeitos de dar certo ÷ quantos jeitos de acontecer no total. Vai de 0 (impossível) a 1 (certeza), ou de 0% a 100%. Na contagem, imagine montar um look: 3 camisetas e 4 shorts dão 3 × 4 = 12. Quando a história tem um <b>e</b> (uma coisa E outra), multiplique; quando tem um <b>ou</b>, some.",
      passos: [
        "Conte os casos possíveis (espaço amostral).",
        "Conte os casos favoráveis.",
        "Probabilidade = favoráveis / possíveis.",
        "Para contagem, use o princípio multiplicativo: multiplique as escolhas de cada etapa."
      ],
      formulas: "P = casos favoráveis / casos possíveis. Fatorial: n! = n x (n-1) x ... x 1.",
      exemplo: "Ao lançar um dado, a chance de sair par (2, 4, 6) é 3/6 = <b>1/2 = 50%</b>.",
      ex: [
        "Tenho 3 camisetas e 4 shorts. Quantos looks diferentes posso montar?",
        "Qual a probabilidade de tirar um número maior que 4 num dado?"
      ],
      resp: ["12 looks", "2/6 = 1/3"],
      links: [
        "yt:probabilidade básica",
        "yt:análise combinatória princípio fundamental da contagem",
        "mesalva"
      ]
    },
    {
      id: "mat8", mat: "Matemática", n: 8,
      titulo: "Progressões (PA e PG)",
      calma: "Numa PA você <b>soma</b> sempre o mesmo valor, como guardar R$ 10 a mais por semana. Numa PG você <b>multiplica</b> sempre pelo mesmo valor, como um vídeo que dobra as views a cada dia. Primeiro descubra o padrão: subtraia termos vizinhos (se der sempre igual, é PA) ou divida (se der sempre igual, é PG). Depois use a fórmula do termo geral para pular direto ao termo que a questão pede.",
      passos: [
        "PA: a diferença entre termos é sempre a mesma (razão r).",
        "PG: cada termo é o anterior multiplicado pela mesma razão q.",
        "Use a fórmula do termo geral para chegar ao termo que quiser sem listar todos.",
        "Procure padrões em problemas de crescimento e poupança."
      ],
      formulas: "PA: an = a1 + (n-1) x r. PG: an = a1 x q<sup>(n-1)</sup>.",
      exemplo: "PA com a1 = 3 e r = 4: a10 = 3 + 9 x 4 = <b>39</b>.",
      ex: [
        "Na PG 2, 6, 18, ... qual o 5º termo?",
        "Uma PA começa em 5 com razão 3. Qual o 8º termo?"
      ],
      resp: ["162", "26"],
      links: [
        "yt:progressão aritmética e geométrica",
        "khan"
      ]
    },
    {
      id: "mat9", mat: "Matemática", n: 9,
      titulo: "Trigonometria no triângulo retângulo",
      calma: "Só funciona em triângulo com ângulo reto. Olhe a partir do ângulo que a questão dá: o lado na frente dele é o <b>oposto</b>, o lado encostado é o <b>adjacente</b> e o maior é a <b>hipotenusa</b>. Macete SOH-CAH-TOA: Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente. Decore os ângulos de 30°, 45° e 60°, porque eles caem muito.",
      passos: [
        "Marque o ângulo que o problema fala.",
        "Nomeie os lados: cateto oposto, cateto adjacente e hipotenusa.",
        "Escolha a razão: seno = oposto/hipotenusa; cosseno = adjacente/hipotenusa; tangente = oposto/adjacente.",
        "Use a tabela dos ângulos notáveis (30°, 45°, 60°)."
      ],
      formulas: "sen 30° = 1/2; cos 60° = 1/2; tg 45° = 1; sen 45° = cos 45° = raiz de 2 sobre 2.",
      exemplo: "Uma escada de 4 m forma 30° com o chão. Altura que ela alcança: 4 x sen 30° = 4 x 0,5 = <b>2 m</b>.",
      ex: [
        "Um poste projeta sombra de 10 m quando o sol forma 45° com o chão. Qual a altura do poste?",
        "Uma rampa de 6 m de comprimento forma 30° com o chão. Qual a altura que ela atinge?"
      ],
      resp: ["10 m", "3 m"],
      links: [
        "yt:trigonometria triângulo retângulo seno cosseno tangente",
        "brasil"
      ]
    },

    /* ======================== FÍSICA ======================== */
    {
      id: "fís1", mat: "Física", n: 1,
      titulo: "Cinemática (movimento)",
      calma: "Velocidade responde: quanto você anda a cada unidade de tempo? 60 km/h é 60 km a cada 1 hora. A pegadinha número 1 são as unidades: de km/h para m/s <b>divide por 3,6</b>, de m/s para km/h multiplica por 3,6. Aceleração é a velocidade mudando: 3 m/s<sup>2</sup> quer dizer que a cada segundo ela ganha 3 m/s. Antes de começar, pergunte: a velocidade é constante (MU) ou muda (MUV)?",
      passos: [
        "Anote o que o problema dá: distância, tempo, velocidade, aceleração.",
        "Converta as unidades: para passar de km/h para m/s, divida por 3,6.",
        "Escolha o movimento: uniforme (velocidade constante) ou uniformemente variado (aceleração constante).",
        "Aplique a fórmula e confira se o resultado faz sentido."
      ],
      formulas: "v = deslocamento / tempo. MUV: v = v0 + a x t.",
      exemplo: "Um carro faz 150 km em 2 h: v = 150/2 = <b>75 km/h</b>.",
      ex: [
        "Converta 72 km/h para m/s.",
        "Um carro parte do repouso com aceleração de 3 m/s<sup>2</sup>. Qual sua velocidade após 4 s?"
      ],
      resp: ["20 m/s", "12 m/s"],
      links: [
        "yt:cinemática MU e MUV Física ensino médio",
        "yt:gráficos de movimento física",
        "khan"
      ]
    },
    {
      id: "fís2", mat: "Física", n: 2,
      titulo: "Leis de Newton",
      calma: "<b>1ª lei</b>: o que está parado tende a ficar parado e o que se move tende a continuar (por isso você vai para a frente quando o ônibus freia). <b>2ª lei</b>: F = m·a; a mesma força em algo mais pesado dá menos aceleração. <b>3ª lei</b>: se você empurra a parede, ela te empurra de volta com a mesma força (mas em corpos diferentes!). Em toda questão, desenhe as setas de força sobre o corpo antes de calcular.",
      passos: [
        "1ª lei (inércia): sem força resultante, o corpo mantém seu movimento.",
        "2ª lei: força resultante = massa x aceleração.",
        "3ª lei (ação e reação): forças aparecem sempre em pares, em corpos diferentes.",
        "Desenhe as forças sobre o corpo (peso, normal, atrito, tração) antes de calcular."
      ],
      formulas: "F = m x a. Peso P = m x g (g ~ 10 m/s<sup>2</sup>). Atrito = coeficiente x normal.",
      exemplo: "Um bloco de 5 kg com aceleração de 4 m/s<sup>2</sup> recebe força de 5 x 4 = <b>20 N</b>.",
      ex: [
        "Qual o peso de uma pessoa de 60 kg? (g = 10 m/s<sup>2</sup>)",
        "Que força é preciso para acelerar um carrinho de 8 kg a 2 m/s<sup>2</sup>?"
      ],
      resp: ["600 N", "16 N"],
      links: [
        "yt:leis de Newton Física",
        "yt:força de atrito e plano inclinado",
        "mesalva"
      ]
    },
    {
      id: "fís3", mat: "Física", n: 3,
      titulo: "Energia, trabalho e potência",
      calma: "Energia não é criada nem destruída, só muda de forma. Numa montanha-russa, lá no alto ela é <b>potencial</b> (altura); descendo, vira <b>cinética</b> (velocidade). Sem atrito, a soma continua a mesma, e é assim que muita questão se resolve. <b>Potência</b> é a rapidez: dois chuveiros gastam a mesma energia no total, mas o de maior potência gasta mais rápido (e pesa mais na conta de luz).",
      passos: [
        "Energia cinética: a que depende da velocidade.",
        "Energia potencial gravitacional: a que depende da altura.",
        "Em sistemas sem atrito, a energia mecânica se conserva.",
        "Potência é a rapidez com que a energia é usada."
      ],
      formulas: "Ec = m x v<sup>2</sup> / 2. Ep = m x g x h. Potência = energia / tempo.",
      exemplo: "m = 2 kg e v = 3 m/s: Ec = 2 x 9 / 2 = <b>9 J</b>.",
      ex: [
        "Uma máquina realiza 600 J de trabalho em 20 s. Qual a potência?",
        "Qual a energia potencial de uma pedra de 2 kg a 5 m de altura? (g = 10)"
      ],
      resp: ["30 W", "100 J"],
      links: [
        "yt:energia cinética e potencial conservação de energia",
        "yt:trabalho e potência física",
        "khan"
      ]
    },
    {
      id: "fís4", mat: "Física", n: 4,
      titulo: "Termologia (calor e temperatura)",
      calma: "Temperatura mostra o quanto as partículas estão agitadas; calor é a energia que passa do corpo mais quente para o mais frio até igualar. Kelvin = Celsius + 273. Em Q = m·c·ΔT, a água tem c = 1 cal/g°C: ela demora a esquentar e a esfriar (por isso o mar é mais fresco que a areia). Quando o gelo derrete, a temperatura fica parada: o calor está sendo usado para mudar de estado.",
      passos: [
        "Temperatura mede a agitação das partículas; calor é energia em trânsito.",
        "Converta escalas: K = °C + 273.",
        "Calor sensível: Q = m x c x variação da temperatura.",
        "Calor latente: é o que muda o estado físico sem mudar a temperatura."
      ],
      formulas: "Q = m x c x (Tfinal - Tinicial). Água: c = 1 cal/g°C.",
      exemplo: "100 g de água de 20°C a 50°C: Q = 100 x 1 x 30 = <b>3000 cal</b>.",
      ex: [
        "Converta 25°C para Kelvin.",
        "Quanto calor é necessário para aquecer 200 g de água de 10°C a 40°C?"
      ],
      resp: ["298 K", "6000 cal"],
      links: [
        "yt:calorimetria calor sensível Física",
        "yt:dilatação térmica e escalas de temperatura",
        "brasil"
      ]
    },
    {
      id: "fís5", mat: "Física", n: 5,
      titulo: "Ondas, som e luz",
      calma: "Onda leva energia sem levar matéria: na ola da torcida, a onda passa mas ninguém sai do lugar. <b>Frequência</b> é quantas ondas passam por segundo (Hz); <b>comprimento de onda</b> é o tamanho de cada onda. A equação v = λ·f junta tudo. O som precisa de um meio para viajar (não passa no vácuo); a luz não precisa. Eco é o som batendo e voltando: a distância é metade do caminho de ida e volta.",
      passos: [
        "Onda transporta energia, não matéria.",
        "Identifique comprimento de onda e frequência.",
        "Use a equação fundamental da ondulatória.",
        "Em óptica, lembre da reflexão (espelhos) e da refração (lentes)."
      ],
      formulas: "v = lambda x f. Som no ar: cerca de 340 m/s. Luz no vácuo: 300 000 km/s.",
      exemplo: "Comprimento 2 m e frequência 5 Hz: v = 2 x 5 = <b>10 m/s</b>.",
      ex: [
        "Uma onda tem comprimento de 3 m e frequência de 4 Hz. Qual sua velocidade?",
        "Você grita e ouve o eco após 2 s. A que distância está a parede? (som = 340 m/s)"
      ],
      resp: ["12 m/s", "340 m"],
      links: [
        "yt:ondulatória física equação fundamental",
        "yt:óptica geométrica espelhos e lentes",
        "mesalva"
      ]
    },
    {
      id: "fís6", mat: "Física", n: 6,
      titulo: "Eletricidade",
      calma: "Imagine uma mangueira: a <b>tensão</b> (V) é a pressão da água, a <b>corrente</b> (i) é a quantidade de água passando e a <b>resistência</b> (R) é o quanto a mangueira está apertada. Ohm: V = R·i. Na conta de luz, o que conta é o consumo em kWh: potência em quilowatts × horas. Chuveiro de 5000 W (5 kW) ligado 1 hora = 5 kWh. Em série a corrente é a mesma; em paralelo a tensão é a mesma.",
      passos: [
        "Corrente é o fluxo de cargas; tensão é o 'empurrão'; resistência é o que atrapalha.",
        "Lei de Ohm: V = R x i.",
        "Potência elétrica: P = V x i.",
        "Energia consumida (kWh) = potência (kW) x tempo (h)."
      ],
      formulas: "V = R x i. P = V x i. E = P x t. Associação em série soma resistências.",
      exemplo: "Um chuveiro de 5000 W por 0,5 h consome 5 x 0,5 = <b>2,5 kWh</b>.",
      ex: [
        "Qual a corrente num resistor de 4 ohms ligado a 12 V?",
        "Se o kWh custa R$ 0,80, quanto custa o banho do exemplo acima?"
      ],
      resp: ["3 A", "R$ 2,00"],
      links: [
        "yt:eletricidade lei de Ohm e potência elétrica",
        "yt:circuitos em série e paralelo",
        "khan"
      ]
    },
    {
      id: "fís7", mat: "Física", n: 7,
      titulo: "Pressão e hidrostática",
      calma: "Pressão é força espalhada numa área: p = F/A. Por isso um salto fino afunda mais no chão que um tênis (mesma pessoa, área menor) e uma faca afiada corta (área pequena). Na água, a pressão depende da profundidade, não do formato do recipiente: quanto mais fundo, maior. <b>Empuxo</b> é a força para cima que faz o corpo parecer mais leve na água; se for maior que o peso, ele boia.",
      passos: [
        "Pressão = força dividida pela área onde ela atua.",
        "Quanto menor a área, maior a pressão (por isso a faca corta).",
        "Num líquido, a pressão aumenta com a profundidade.",
        "Empuxo: força para cima que o líquido faz no corpo mergulhado."
      ],
      formulas: "p = F / A. p = d x g x h. Empuxo E = d(líquido) x g x V(deslocado).",
      exemplo: "Água (d = 1000 kg/m<sup>3</sup>), profundidade 5 m: p = 1000 x 10 x 5 = <b>50 000 Pa</b>.",
      ex: [
        "Uma força de 200 N atua sobre 0,5 m<sup>2</sup>. Qual a pressão?",
        "Por que um prego entra na parede pela ponta e não pela cabeça?"
      ],
      resp: [
        "400 Pa",
        "a área da ponta é muito menor, então a pressão é muito maior"
      ],
      links: [
        "yt:pressão hidrostática teorema de Stevin e empuxo",
        "brasil"
      ]
    },

    /* ======================== QUÍMICA ======================== */
    {
      id: "quí1", mat: "Química", n: 1,
      titulo: "Matéria, substâncias e misturas",
      calma: "Substância pura tem uma receita só (água, ouro); mistura junta várias. Se você enxerga uma fase só, é <b>homogênea</b> (água com sal); se vê camadas ou pedaços, é <b>heterogênea</b> (água com óleo). Para separar, descubra o que é diferente entre os ingredientes: densidade (decantação), tamanho (filtração), ponto de ebulição (destilação). Fenômeno químico forma algo novo (queimar, enferrujar); físico só muda a forma (derreter, rasgar).",
      passos: [
        "Substância pura tem composição fixa (água, ouro); mistura tem mais de uma substância.",
        "Mistura homogênea tem uma fase só; heterogênea tem duas ou mais.",
        "Escolha o método de separação pela propriedade que difere.",
        "Fenômeno físico não muda a substância; fenômeno químico muda."
      ],
      formulas: "Decantação (sólido-líquido ou líquidos imiscíveis), filtração, destilação (líquidos), evaporação, separação magnética.",
      exemplo: "Água + óleo: mistura <b>heterogênea</b>, separada por <b>decantação</b>.",
      ex: [
        "Sal dissolvido na água: homogênea ou heterogênea? Como recuperar o sal?",
        "Queimar papel é fenômeno físico ou químico?"
      ],
      resp: ["homogênea; evaporar a água", "químico"],
      links: [
        "yt:misturas e separação de misturas química",
        "yt:substâncias puras simples e compostas",
        "brasil"
      ]
    },
    {
      id: "quí2", mat: "Química", n: 2,
      titulo: "Átomo e tabela periódica",
      calma: "O átomo tem um núcleo (prótons com carga + e nêutrons sem carga) e elétrons (carga −) em volta. O número de prótons (<b>Z</b>) é o RG do elemento: mudou o Z, virou outro elemento. A massa <b>A</b> é prótons + nêutrons, então nêutrons = A − Z. Na tabela periódica, a coluna (grupo) diz quantos elétrons há na última camada, e quem está na mesma coluna se comporta de forma parecida.",
      passos: [
        "O núcleo tem prótons (+) e nêutrons; os elétrons (-) ficam em volta.",
        "Número atômico Z = número de prótons. Massa A = prótons + nêutrons.",
        "A tabela se organiza em grupos (colunas) e períodos (linhas).",
        "Elementos do mesmo grupo têm o mesmo número de elétrons de valência e propriedades parecidas."
      ],
      formulas: "A = Z + N. Átomo neutro: prótons = elétrons.",
      exemplo: "Sódio: Z = 11 e A = 23, então N = 23 - 11 = <b>12 nêutrons</b>.",
      ex: [
        "Quantos nêutrons tem um átomo com Z = 17 e A = 35?",
        "O cloro (Z = 17) tem quantos elétrons na última camada?"
      ],
      resp: ["18 nêutrons", "7 elétrons"],
      links: [
        "yt:modelos atômicos e estrutura do átomo",
        "yt:tabela periódica propriedades periódicas",
        "khan"
      ]
    },
    {
      id: "quí3", mat: "Química", n: 3,
      titulo: "Ligações químicas",
      calma: "Os átomos se ligam para ficar estáveis, geralmente com 8 elétrons na última camada. Metal (tende a doar) + ametal (tende a receber) = <b>iônica</b>, como no sal de cozinha. Ametal + ametal = dividem elétrons, <b>covalente</b>, como na água. Metal + metal = <b>metálica</b>, com elétrons soltos, e é por isso que metais conduzem eletricidade. Os compostos iônicos só conduzem quando estão dissolvidos ou derretidos.",
      passos: [
        "Átomos se ligam para ficar estáveis (regra do octeto).",
        "Iônica: metal + ametal, há transferência de elétrons.",
        "Covalente: ametal + ametal, há compartilhamento de elétrons.",
        "Metálica: metal + metal, 'mar' de elétrons livres (conduz eletricidade)."
      ],
      formulas: "Iônica: sólidos que conduzem quando dissolvidos. Covalente: moléculas. Polar x apolar depende da geometria e da diferença de eletronegatividade.",
      exemplo: "NaCl (sal de cozinha): ligação <b>iônica</b>. H<sub>2</sub>O: ligação <b>covalente</b>.",
      ex: [
        "Classifique a ligação em KBr e em CO<sub>2</sub>.",
        "Por que fios de cobre conduzem eletricidade?"
      ],
      resp: [
        "KBr iônica, CO<sub>2</sub> covalente",
        "elétrons livres (ligação metálica)"
      ],
      links: [
        "yt:ligações químicas iônica covalente metálica",
        "yt:polaridade de moléculas",
        "mesalva"
      ]
    },
    {
      id: "quí4", mat: "Química", n: 4,
      titulo: "Funções inorgânicas e pH",
      calma: "<b>Ácido</b> libera H<sup>+</sup> na água (azedo, como o limão); <b>base</b> libera OH<sup>-</sup> (escorregadia, como sabão); <b>sal</b> nasce de ácido + base; <b>óxido</b> é oxigênio ligado a outro elemento. O pH é uma régua de 0 a 14: menor que 7 é ácido, 7 é neutro e maior que 7 é básico. Cada unidade a menos no pH é 10 vezes mais ácido. Ácido + base reagem e viram sal e água (neutralização).",
      passos: [
        "Ácido libera H<sup>+</sup> em água (HCl, H<sub>2</sub>SO<sub>4</sub>).",
        "Base libera OH<sup>-</sup> (NaOH).",
        "Sal vem da reação ácido + base (NaCl); óxido tem oxigênio e mais um elemento.",
        "Escala de pH: abaixo de 7 é ácido, 7 é neutro e acima de 7 é básico."
      ],
      formulas: "ácido + base -> sal + água (neutralização). pH baixo = mais ácido.",
      exemplo: "Suco de limão (pH ~ 2) é <b>ácido</b>; água pura (pH 7) é <b>neutra</b>; sabão (pH ~ 10) é <b>básico</b>.",
      ex: [
        "Classifique HCl, NaOH e NaCl como ácido, base ou sal.",
        "Uma solução tem pH 3. Ela é ácida, neutra ou básica?"
      ],
      resp: ["ácido, base, sal", "ácida"],
      links: [
        "yt:funções inorgânicas ácidos bases sais óxidos",
        "yt:pH e pOH química",
        "brasil"
      ]
    },
    {
      id: "quí5", mat: "Química", n: 5,
      titulo: "Reações e balanceamento",
      calma: "Uma reação química é como uma receita: os mesmos átomos se rearranjam. Lavoisier descobriu que nada some e nada aparece, então o número de cada átomo precisa ser igual dos dois lados. Para balancear, mexa só nos <b>coeficientes</b> (números na frente), nunca nos números pequenos da fórmula. Comece por um elemento que aparece em só uma substância de cada lado e deixe H e O para o final.",
      passos: [
        "Escreva a equação com reagentes e produtos.",
        "Conte os átomos de cada elemento dos dois lados.",
        "Ajuste os coeficientes (nunca os índices) até igualar.",
        "A massa se conserva: lei de Lavoisier."
      ],
      formulas: "Tipos: síntese, decomposição, simples troca e dupla troca.",
      exemplo: "H<sub>2</sub> + O<sub>2</sub> -> H<sub>2</sub>O fica <b>2 H<sub>2</sub> + O<sub>2</sub> -> 2 H<sub>2</sub>O</b>.",
      ex: [
        "Balanceie CH<sub>4</sub> + O<sub>2</sub> -> CO<sub>2</sub> + H<sub>2</sub>O.",
        "A reação 2 H<sub>2</sub>O -> 2 H<sub>2</sub> + O<sub>2</sub> é de síntese ou de decomposição?"
      ],
      resp: [
        "CH<sub>4</sub> + 2 O<sub>2</sub> -> CO<sub>2</sub> + 2 H<sub>2</sub>O",
        "decomposição"
      ],
      links: [
        "yt:balanceamento de equações químicas",
        "yt:tipos de reações químicas",
        "khan"
      ]
    },
    {
      id: "quí6", mat: "Química", n: 6,
      titulo: "Mol e estequiometria",
      calma: "Mol é uma dúzia gigante: 6×10<sup>23</sup> partículas, o jeito de contar átomos que são pequenos demais. A <b>massa molar</b> diz quanto pesa 1 mol: some as massas atômicas (H<sub>2</sub>O = 2×1 + 16 = 18 g/mol). Fórmula de ouro: n = m ÷ M. Na estequiometria, os coeficientes da equação balanceada dão a proporção em mols: 2 H<sub>2</sub> + 1 O<sub>2</sub> quer dizer que 2 mol de H<sub>2</sub> reagem com 1 mol de O<sub>2</sub>.",
      passos: [
        "Some as massas atômicas para achar a massa molar (g/mol).",
        "Número de mols = massa / massa molar.",
        "Use a proporção dos coeficientes da equação balanceada.",
        "Converta de volta para gramas, se pedido."
      ],
      formulas: "n = m / M. 1 mol = 6 x 10<sup>23</sup> entidades. Dados: H = 1, C = 12, O = 16.",
      exemplo: "Água: M = 2 x 1 + 16 = 18 g/mol. Logo 36 g de água = <b>2 mol</b>.",
      ex: [
        "Qual a massa de 2 mol de CO<sub>2</sub>?",
        "Quantos mols há em 90 g de água?"
      ],
      resp: ["88 g", "5 mol"],
      links: [
        "yt:mol e massa molar química",
        "yt:cálculo estequiométrico passo a passo",
        "mesalva"
      ]
    },
    {
      id: "quí7", mat: "Química", n: 7,
      titulo: "Soluções e concentração",
      calma: "Solução é uma mistura homogênea: <b>soluto</b> (o que dissolve, como o açúcar) no <b>solvente</b> (quem dissolve, geralmente a água). Concentração mede o quão forte ela está: gramas por litro (C = m/V) ou mols por litro (M = n/V). Cuidado: o volume é o da solução toda, não só o da água. Ao diluir (pôr mais água), o soluto continua o mesmo e a concentração cai: C<sub>1</sub>·V<sub>1</sub> = C<sub>2</sub>·V<sub>2</sub>.",
      passos: [
        "Solução = soluto dissolvido em solvente.",
        "Concentração comum: massa de soluto por volume de solução.",
        "Molaridade: mols de soluto por litro de solução.",
        "Na diluição, a quantidade de soluto não muda: C1 x V1 = C2 x V2."
      ],
      formulas: "C = m / V (g/L). M = n / V (mol/L).",
      exemplo: "20 g de sal em 0,5 L de solução: C = 20 / 0,5 = <b>40 g/L</b>.",
      ex: [
        "2 mol de soluto em 4 L de solução: qual a molaridade?",
        "Diluindo 100 mL de uma solução 2 mol/L até 400 mL, qual a nova concentração?"
      ],
      resp: ["0,5 mol/L", "0,5 mol/L"],
      links: [
        "yt:concentração comum molaridade e diluição",
        "yt:soluções química ensino médio",
        "brasil"
      ]
    },
    {
      id: "quí8", mat: "Química", n: 8,
      titulo: "Química orgânica básica",
      calma: "Química orgânica é a química do carbono, que faz 4 ligações e forma cadeias enormes (por isso existem tantas moléculas). O nome é um código: o <b>prefixo</b> conta os carbonos (met 1, et 2, prop 3, but 4, pent 5), o <b>meio</b> diz a ligação (an simples, en dupla, in tripla) e o <b>final</b> diz a função (o hidrocarboneto, ol álcool, óico ácido). Assim, <b>propano</b> = 3 carbonos, só ligações simples, hidrocarboneto.",
      passos: [
        "Orgânicas têm carbono. O carbono faz 4 ligações.",
        "Prefixo diz o número de carbonos: met (1), et (2), prop (3), but (4), pent (5).",
        "Hidrocarbonetos: só C e H. Terminação: -ano (simples), -eno (dupla), -ino (tripla).",
        "Funções: álcool (-OH), ácido carboxílico (-COOH), aldeído, cetona, éster..."
      ],
      formulas: "Alcanos: CnH(2n+2). Combustão completa: hidrocarboneto + O<sub>2</sub> -> CO<sub>2</sub> + H<sub>2</sub>O.",
      exemplo: "CH<sub>4</sub> é o <b>metano</b> (1 C); C<sub>3</sub>H<sub>8</sub> é o <b>propano</b> (3 C), gás de botijão.",
      ex: [
        "Qual o nome do alcano com 4 carbonos e qual sua fórmula?",
        "Qual a função orgânica do etanol (C<sub>2</sub>H<sub>5</sub>OH)?"
      ],
      resp: ["butano, C<sub>4</sub>H<sub>10</sub>", "álcool"],
      links: [
        "yt:química orgânica funções orgânicas e nomenclatura",
        "yt:hidrocarbonetos nomenclatura IUPAC",
        "khan"
      ]
    },

    /* ======================== BIOLOGIA ======================== */
    {
      id: "bio1", mat: "Biologia", n: 1,
      titulo: "Como estudar Biologia sem decorar tudo",
      calma: "Biologia parece um monte de nomes para decorar, mas a prova (8 questões) cobra bem mais <b>entender o processo e interpretar</b> textos, gráficos e esquemas. Pense em cada tópico como uma história de causa e efeito: o que acontece, onde acontece e por quê. Quando você entende a história, os nomes difíceis grudam sozinhos.",
      passos: [
        "Ao ler a questão, descubra o tema (célula? genética? ecologia?) e o que ela pede.",
        "Grife as palavras-chave e os dados do texto ou do gráfico.",
        "Lembre o conceito-base e elimine as alternativas erradas.",
        "Depois de estudar, explique o tópico em voz alta em 1 minuto e faça um desenho ou mapa mental."
      ],
      formulas: "Técnicas que funcionam: mapa mental, flashcards, desenhar esquemas e revisão espaçada (revisar após 1, 3 e 7 dias).",
      exemplo: "Gráfico com coelhos e raposas: em vez de decorar, pergunte “quem come quem?”. Quando os coelhos aumentam, as raposas aumentam <b>depois</b>.",
      ex: [
        "Qual a primeira coisa a fazer ao ler uma questão de Biologia?",
        "O que é revisão espaçada?",
        "Por que desenhar esquemas ajuda a estudar?"
      ],
      resp: [
        "Ler o enunciado e identificar o tema e o que se pede.",
        "Revisar o conteúdo depois de 1, 3 e 7 dias para fixar na memória.",
        "Porque transforma o processo em imagem, que é mais fácil de lembrar que texto solto."
      ],
      links: [
        "yt:como estudar biologia para vestibular",
        "yt:revisão espaçada como estudar",
        "mesalva"
      ]
    },
    {
      id: "bio2", mat: "Biologia", n: 2,
      titulo: "Célula e organelas",
      calma: "A célula é a menor unidade viva. Pense nela como uma <b>cidade</b>: o núcleo é a prefeitura (guarda o DNA com as ordens), a mitocôndria é a usina de energia, o ribossomo é a fábrica de proteínas e a membrana é o portão que controla quem entra e sai. Se você associar cada organela a uma função, metade da questão já está resolvida.",
      passos: [
        "Diferencie procarionte (sem núcleo definido, como a bactéria) de eucarionte (com núcleo).",
        "Ligue cada organela à sua função.",
        "Compare célula animal e vegetal: a vegetal tem parede celular, cloroplastos e um vacúolo grande."
      ],
      formulas: "Mitocôndria: respiração celular (energia). Cloroplasto: fotossíntese. Ribossomo: síntese de proteínas. Núcleo: guarda o DNA.",
      exemplo: "Células musculares têm muitas <b>mitocôndrias</b> porque gastam muita energia.",
      ex: [
        "Qual organela produz energia na respiração celular?",
        "Uma célula sem núcleo definido, com DNA solto no citoplasma, é de que tipo?",
        "Cite uma diferença entre célula animal e vegetal."
      ],
      resp: [
        "Mitocôndria.",
        "Procarionte (como as bactérias).",
        "A vegetal tem parede celular e cloroplastos; a animal não."
      ],
      links: [
        "yt:célula e organelas biologia ensino médio",
        "yt:diferença célula animal e vegetal",
        "brasil"
      ]
    },
    {
      id: "bio3", mat: "Biologia", n: 3,
      titulo: "Genética básica (Mendel)",
      calma: "Genes são receitas que você herda do pai e da mãe. Cada característica tem duas versões, os <b>alelos</b>: o dominante (letra maiúscula) manda quando está presente; o recessivo (minúscula) só aparece quando os dois alelos são recessivos. O quadro de Punnett é só uma tabela que mostra todas as combinações possíveis dos filhos.",
      passos: [
        "Defina as letras: A (dominante) e a (recessivo).",
        "Escreva os gametas de cada pai e mãe e monte o quadro de Punnett.",
        "Conte as proporções de cada genótipo e fenótipo."
      ],
      formulas: "Aa x Aa dá 25% AA, 50% Aa e 25% aa (fenótipo 3:1). Homozigoto: alelos iguais. Heterozigoto: alelos diferentes.",
      exemplo: "Olhos castanhos (B) dominam azuis (b). Pais Bb x Bb: chance de filho de olhos azuis = 1/4 = <b>25%</b>.",
      ex: [
        "No cruzamento Aa x aa, que proporção dos filhos será aa?",
        "Um indivíduo Aa é homozigoto ou heterozigoto?",
        "Pais Aa x Aa: qual a chance de um filho aa?"
      ],
      resp: ["50%.", "Heterozigoto.", "25% (1/4)."],
      links: [
        "yt:primeira lei de Mendel quadro de Punnett",
        "yt:genética básica genótipo e fenótipo",
        "mesalva"
      ]
    },
    {
      id: "bio4", mat: "Biologia", n: 4,
      titulo: "Ecologia e cadeias alimentares",
      calma: "Cadeia alimentar mostra quem come quem, e a seta aponta para <b>quem recebe a energia</b> (de quem foi comido para quem comeu). O produtor (planta) faz o próprio alimento, o consumidor se alimenta de outros seres e o decompositor recicla tudo. A cada nível sobe só cerca de 10% da energia, por isso há muito mais capim que onça.",
      passos: [
        "Encontre o produtor, no começo da cadeia.",
        "Siga as setas: herbívoro é consumidor primário e quem come o herbívoro é secundário.",
        "Lembre que a energia diminui a cada nível."
      ],
      formulas: "Relações: predação, competição, mutualismo (os dois ganham), parasitismo (um ganha, outro perde).",
      exemplo: "Capim, gafanhoto, sapo, cobra: o sapo é consumidor <b>secundário</b>.",
      ex: [
        "Em capim, boi e humano, quem é consumidor primário?",
        "Carrapato no cachorro é mutualismo ou parasitismo?",
        "Por que há menos carnívoros do que herbívoros numa cadeia?"
      ],
      resp: [
        "O boi.",
        "Parasitismo.",
        "Porque a energia diminui a cada nível, e sobra menos para os últimos."
      ],
      links: [
        "yt:cadeia alimentar ecologia",
        "yt:relações ecológicas harmônicas e desarmônicas",
        "brasil"
      ]
    },
    {
      id: "bio5", mat: "Biologia", n: 5,
      titulo: "Fotossíntese e respiração celular",
      calma: "São processos que se completam. Na fotossíntese a planta usa luz para <b>fabricar</b> glicose e libera oxigênio. Na respiração celular a célula <b>queima</b> a glicose com oxigênio para liberar energia (ATP), e solta gás carbônico. Um gás que sai de um processo é o que entra no outro.",
      passos: [
        "Fotossíntese acontece no cloroplasto, com luz.",
        "Respiração celular acontece na mitocôndria, em todos os seres vivos.",
        "Compare os reagentes e produtos: eles se invertem."
      ],
      formulas: "Fotossíntese: CO<sub>2</sub> + H<sub>2</sub>O + luz = glicose + O<sub>2</sub>. Respiração: glicose + O<sub>2</sub> = CO<sub>2</sub> + H<sub>2</sub>O + energia.",
      exemplo: "Uma planta no escuro por muitos dias murcha porque, sem luz, não faz fotossíntese.",
      ex: [
        "Que gás as plantas liberam na fotossíntese?",
        "Onde ocorre a respiração celular aeróbia?",
        "Por que a respiração celular também acontece nas plantas?"
      ],
      resp: [
        "Oxigênio.",
        "Nas mitocôndrias.",
        "Porque as células vegetais também precisam de energia, que vem da queima da glicose."
      ],
      links: [
        "yt:fotossíntese e respiração celular",
        "yt:cloroplasto e mitocôndria diferenças",
        "khan"
      ]
    },
    {
      id: "bio6", mat: "Biologia", n: 6,
      titulo: "DNA, RNA e proteínas",
      calma: "O DNA é um <b>livro de receitas</b> guardado no núcleo (a prefeitura da célula). Para fazer uma proteína, a célula copia uma página da receita em RNA, que sai do núcleo. O ribossomo lê essa cópia e monta a proteína (o prato). A ordem é sempre: <b>DNA, RNA, proteína</b>.",
      passos: [
        "Lembre que o DNA tem dupla hélice e pareia A com T e C com G.",
        "Transcrição: o DNA é copiado em RNA mensageiro, e no RNA o T vira U (uracila).",
        "Tradução: o ribossomo lê o RNA de 3 em 3 bases (códons) e junta aminoácidos.",
        "Mutação é qualquer alteração na sequência do DNA."
      ],
      formulas: "DNA: A-T e C-G. RNA: A-U e C-G. Um códon (3 bases) corresponde a 1 aminoácido. Proteínas são cadeias de aminoácidos (enzimas, hormônios...).",
      exemplo: "A fita de DNA <b>ATG CCA</b> gera o RNA <b>UAC GGU</b>.",
      ex: [
        "Qual o RNA formado a partir da fita de DNA TAC?",
        "Qual base existe no RNA e não existe no DNA?",
        "Onde ocorre a tradução?"
      ],
      resp: ["AUG.", "A uracila (U).", "No ribossomo."],
      links: [
        "yt:DNA RNA e síntese de proteínas",
        "yt:transcrição e tradução",
        "brasil"
      ]
    },
    {
      id: "bio7", mat: "Biologia", n: 7,
      titulo: "Mitose e meiose",
      calma: "A mitose é uma <b>fotocópia</b>: 1 célula vira 2 idênticas, para o corpo crescer e se consertar. A meiose é um <b>sorteio</b>: 1 célula vira 4 diferentes, com metade dos cromossomos, que viram os gametas (óvulo e espermatozoide). Por isso os filhos não são cópias dos pais.",
      passos: [
        "Pergunte para quê: crescer ou reparar é mitose; formar gametas é meiose.",
        "Conte o resultado: mitose dá 2 células 2n; meiose dá 4 células n.",
        "Lembre as fases da mitose: prófase, metáfase, anáfase e telófase."
      ],
      formulas: "Humanos: células do corpo têm 46 cromossomos (2n) e gametas têm 23 (n). Meiose tem duas divisões seguidas.",
      exemplo: "Cicatrização da pele é <b>mitose</b>; formação de espermatozoides é <b>meiose</b>.",
      ex: [
        "Quantos cromossomos tem um espermatozoide humano?",
        "Qual divisão forma os gametas?",
        "Uma célula 2n = 8 faz mitose. Quantos cromossomos tem cada célula-filha?"
      ],
      resp: ["23.", "A meiose.", "8."],
      links: [
        "yt:mitose e meiose diferenças",
        "yt:fases da mitose",
        "khan"
      ]
    },
    {
      id: "bio8", mat: "Biologia", n: 8,
      titulo: "Evolução e seleção natural",
      calma: "Darwin percebeu que os indivíduos de uma espécie são <b>diferentes entre si</b>, e que o ambiente favorece os que sobrevivem e se reproduzem mais. Eles passam suas características adiante, e depois de muitas gerações a população muda. Atenção: ninguém evolui “por esforço”, quem muda é a <b>população</b>.",
      passos: [
        "Existe variação entre os indivíduos (mutações e recombinação).",
        "O ambiente favorece os mais adaptados.",
        "Eles deixam mais descendentes.",
        "Depois de muitas gerações, a população muda."
      ],
      formulas: "A seleção natural atua na população, não no indivíduo. Lamarck (uso e desuso) é uma ideia superada. Evidências: fósseis, anatomia comparada e semelhança de DNA.",
      exemplo: "Bactérias resistentes sobrevivem ao antibiótico e se reproduzem: a população fica resistente.",
      ex: [
        "A seleção natural atua em indivíduos ou em populações?",
        "Por que o uso exagerado de antibióticos favorece bactérias resistentes?",
        "Cite uma evidência da evolução."
      ],
      resp: [
        "Em populações.",
        "Porque mata as sensíveis e deixa as resistentes se reproduzirem.",
        "Fósseis, anatomia comparada ou semelhança de DNA."
      ],
      links: [
        "yt:evolução Darwin seleção natural",
        "yt:Lamarck e Darwin diferenças",
        "brasil"
      ]
    },
    {
      id: "bio9", mat: "Biologia", n: 9,
      titulo: "Corpo humano: digestão, circulação e respiração",
      calma: "Os sistemas do corpo trabalham como um time. O <b>digestório</b> quebra o alimento em nutrientes, o <b>circulatório</b> leva nutrientes e oxigênio às células pelo sangue, o <b>respiratório</b> troca gases nos pulmões e o <b>excretor</b> filtra o sangue nos rins.",
      passos: [
        "Siga o alimento: boca, esôfago, estômago, intestino delgado (absorção) e intestino grosso (água).",
        "Siga o sangue: coração, pulmões (pega oxigênio), coração e corpo.",
        "Siga o ar: nariz, faringe, laringe, traqueia, brônquios e alvéolos."
      ],
      formulas: "Absorção de nutrientes: intestino delgado. Hematose: troca de gases nos alvéolos (entra O<sub>2</sub>, sai CO<sub>2</sub>). O coração tem 4 câmaras. Os rins filtram o sangue.",
      exemplo: "Ao correr, coração e respiração aceleram porque os músculos precisam de mais oxigênio e glicose.",
      ex: [
        "Onde ocorre a maior parte da absorção de nutrientes?",
        "Como se chama a troca de gases nos pulmões?",
        "Quantas câmaras tem o coração humano?"
      ],
      resp: [
        "No intestino delgado.",
        "Hematose.",
        "Quatro (dois átrios e dois ventrículos)."
      ],
      links: [
        "yt:sistema digestório resumo",
        "yt:sistema circulatório e respiratório",
        "brasil"
      ]
    },
    {
      id: "bio10", mat: "Biologia", n: 10,
      titulo: "Vírus, bactérias e saúde",
      calma: "Vírus <b>não são células</b>: precisam invadir uma célula para se reproduzir. Bactérias são células procariontes, vivas por conta própria. Por isso o antibiótico mata bactérias, mas não adianta contra vírus. A vacina prepara o corpo antes da doença: ele aprende a reconhecer o invasor.",
      passos: [
        "Diferencie vírus (acelulares) de bactérias (células).",
        "Associe: gripe e dengue são vírus; tuberculose e cólera são bactérias.",
        "Vacina: apresenta um antígeno inofensivo, e o corpo cria anticorpos e memória.",
        "Lembre a prevenção: vacinação, higiene e saneamento básico."
      ],
      formulas: "Antibiótico: só para bactérias. Dengue: vírus transmitido pelo mosquito Aedes aegypti. Doenças ligadas a falta de saneamento: cólera, hepatite A, verminoses.",
      exemplo: "A gripe é causada por vírus, por isso antibiótico <b>não</b> cura.",
      ex: [
        "Antibiótico funciona contra gripe?",
        "Para que serve a vacina?",
        "Que mosquito transmite a dengue?"
      ],
      resp: [
        "Não, porque a gripe é causada por vírus.",
        "Para o corpo criar anticorpos e memória antes de entrar em contato com o agente.",
        "O Aedes aegypti."
      ],
      links: [
        "yt:vírus e bactérias diferenças",
        "yt:como funcionam as vacinas",
        "brasil"
      ]
    },
    {
      id: "bio11", mat: "Biologia", n: 11,
      titulo: "Impactos ambientais e ciclos da matéria",
      calma: "A natureza recicla tudo em ciclos, e o problema começa quando o ser humano coloca <b>mais do que o ambiente consegue reciclar</b>. No ciclo do carbono, as plantas tiram CO<sub>2</sub> do ar e a respiração, a queima e a decomposição devolvem. Desmatar e queimar combustível desequilibram esse ciclo.",
      passos: [
        "Ciclo do carbono: fotossíntese retira CO<sub>2</sub>; respiração, queimadas e decomposição devolvem.",
        "Eutrofização: esgoto em excesso, algas se multiplicam, falta oxigênio e peixes morrem.",
        "Bioacumulação: substâncias tóxicas se acumulam ao longo da cadeia alimentar."
      ],
      formulas: "Efeito estufa: gases como CO<sub>2</sub> e metano retêm calor. Chuva ácida: poluição com enxofre e nitrogênio. Os maiores níveis de tóxicos ficam nos predadores do topo.",
      exemplo: "Esgoto no rio causa excesso de algas; ao morrerem, bactérias consomem o oxigênio e os peixes morrem.",
      ex: [
        "O que é eutrofização?",
        "O desmatamento aumenta ou diminui o CO<sub>2</sub> da atmosfera?",
        "O que é bioacumulação?"
      ],
      resp: [
        "Excesso de nutrientes na água, que causa proliferação de algas e falta de oxigênio.",
        "Aumenta (há menos fotossíntese e a queima libera CO<sub>2</sub>).",
        "O acúmulo de substâncias tóxicas nos seres vivos ao longo da cadeia alimentar."
      ],
      links: [
        "yt:eutrofização e impactos ambientais",
        "yt:ciclo do carbono e efeito estufa",
        "brasil"
      ]
    },

    /* ======================== PORTUGUÊS ======================== */
    {
      id: "por1", mat: "Português", n: 1,
      titulo: "Interpretação de texto",
      calma: "A prova de Português tem 18 questões, então é onde mais vale treinar! O segredo é ler o <b>enunciado antes do texto</b>, para saber o que procurar. Interpretar não é dar sua opinião: é achar no texto o que ele diz (explícito) ou o que dá para concluir dele (inferência).",
      passos: [
        "Leia o enunciado primeiro.",
        "Leia o texto sublinhando a ideia central.",
        "Elimine alternativas que contradizem o texto ou exageram (sempre, nunca, todos).",
        "Confirme a que sobrou voltando ao trecho."
      ],
      formulas: "Tema é o assunto; tese é a opinião do autor sobre ele. Inferência é uma conclusão a partir do que está implícito.",
      exemplo: "“A fila do ônibus dobrou depois do aumento da gasolina.” Inferência: mais gente deixou o carro em casa.",
      ex: [
        "Qual a diferença entre tema e tese?",
        "Por que desconfiar de alternativas com “sempre” ou “nunca”?"
      ],
      resp: [
        "Tema é o assunto; tese é a posição do autor sobre ele.",
        "Porque generalizam demais e raramente estão sustentadas no texto."
      ],
      links: [
        "yt:interpretação de texto dicas vestibular",
        "yt:inferência e ideia central",
        "brasil"
      ]
    },
    {
      id: "por2", mat: "Português", n: 2,
      titulo: "Funções e figuras de linguagem",
      calma: "Função da linguagem é <b>o objetivo</b> do texto: informar, convencer, expressar emoção... Figura de linguagem é um jeito criativo de dizer algo. Pergunte sempre: o que o autor quer com este texto? E: a frase está no sentido literal ou figurado?",
      passos: [
        "Descubra a intenção do texto para achar a função.",
        "Em figuras, veja se há comparação (com “como”) ou troca de sentido."
      ],
      formulas: "Referencial: informa. Emotiva: sentimentos (1ª pessoa). Apelativa: convence (imperativo). Poética: foca na forma. Metáfora: comparação sem “como”. Hipérbole: exagero. Ironia: diz o contrário.",
      exemplo: "“Prove já! Só hoje!” tem função <b>apelativa</b>.",
      ex: [
        "“Ele é uma fera em matemática” usa qual figura?",
        "Qual a função de uma placa “Compre agora e economize”?"
      ],
      resp: ["Metáfora.", "Apelativa."],
      links: [
        "yt:funções da linguagem",
        "yt:figuras de linguagem metáfora ironia hipérbole",
        "brasil"
      ]
    },
    {
      id: "por3", mat: "Português", n: 3,
      titulo: "Gramática no contexto",
      calma: "A prova raramente cobra regra decorada: ela quer saber se você usa a gramática <b>para dar sentido ao texto</b>. Os mais comuns são concordância (o verbo combina com o sujeito), crase e pontuação. Truque da crase: troque a palavra feminina por uma masculina; se aparecer “ao”, use crase.",
      passos: [
        "Ache o sujeito e confira se o verbo concorda.",
        "Na crase, teste a troca por um masculino (ao).",
        "Vírgula nunca separa sujeito de verbo."
      ],
      formulas: "Crase = preposição “a” + artigo “a”. Fui <b>à</b> escola (fui ao colégio). Vou <b>a</b> pé (sem crase).",
      exemplo: "“Fui à padaria” tem crase porque dá para dizer “fui ao mercado”.",
      ex: [
        "Corrija: “Os alunos chegou cedo”.",
        "Há crase em “Vou ___ pé”?"
      ],
      resp: [
        "Os alunos chegaram cedo.",
        "Não: “pé” é masculino, então “a pé”."
      ],
      links: [
        "yt:crase quando usar",
        "yt:concordância verbal e nominal",
        "brasil"
      ]
    },
    {
      id: "por4", mat: "Português", n: 4,
      titulo: "Redação dissertativa-argumentativa (3º ano)",
      calma: "Quem faz o 3º ano também escreve redação. Pense nela como uma <b>conversa organizada</b>: você apresenta o problema, defende uma ideia com argumentos e termina propondo uma solução. Não precisa ser genial: precisa ser clara, respeitar os direitos humanos e não fugir do tema.",
      passos: [
        "Introdução: apresente o tema e sua tese.",
        "Dois parágrafos de desenvolvimento, cada um com um argumento e um exemplo ou dado.",
        "Conclusão com proposta de intervenção completa.",
        "Use conectivos (além disso, portanto, entretanto) e a norma culta."
      ],
      formulas: "Proposta de intervenção: agente (quem), ação (o quê), meio/modo (como), finalidade (para quê) e detalhamento.",
      exemplo: "Tese: “A desinformação nas redes prejudica o debate público, exigindo ação conjunta de escolas e plataformas.”",
      ex: [
        "O que não pode faltar na proposta de intervenção?",
        "Quantos parágrafos de desenvolvimento são comuns?"
      ],
      resp: [
        "Agente, ação, meio/modo, finalidade e detalhamento.",
        "Dois."
      ],
      links: [
        "yt:como fazer redação dissertativa argumentativa",
        "yt:proposta de intervenção redação",
        "brasil"
      ]
    },

    /* ======================== INGLÊS ======================== */
    {
      id: "ing1", mat: "Inglês", n: 1,
      titulo: "Interpretação de textos em inglês",
      calma: "A prova de Inglês tem poucas questões (6), mas são das mais fáceis de ganhar! Você não precisa entender cada palavra: precisa pegar a <b>ideia geral</b>. Muitas palavras são parecidas com o português (cognatos), e isso já salva metade do texto. Cuidado só com os falsos cognatos!",
      passos: [
        "Leia o título e olhe imagens e legendas.",
        "Marque os cognatos para entender o assunto.",
        "Procure a ideia geral antes dos detalhes.",
        "Tire dúvidas de palavra pelo contexto da frase."
      ],
      formulas: "Falsos cognatos: actually = na verdade; pretend = fingir; push = empurrar; library = biblioteca; attend = assistir (a aula).",
      exemplo: "“The library closes at 6 p.m.”: a <b>biblioteca</b> fecha às 18h (não é livraria).",
      ex: [
        "O que significa “actually”?",
        "O que é um cognato?"
      ],
      resp: [
        "Na verdade.",
        "Palavra parecida nas duas línguas e com o mesmo sentido, como “important”."
      ],
      links: [
        "yt:inglês para vestibular interpretação de texto",
        "yt:falsos cognatos inglês",
        "brasil"
      ]
    },
    {
      id: "ing2", mat: "Inglês", n: 2,
      titulo: "Tempos verbais e conectivos",
      calma: "Os tempos verbais contam <b>quando</b> a ação acontece, e os conectivos ligam as ideias do texto. Se você sabe o que “but”, “because” e “however” querem dizer, descobre a lógica do texto mesmo sem entender tudo.",
      passos: [
        "Present simple: rotina e fatos (She studies every day).",
        "Present continuous: agora (I am studying).",
        "Past simple: passado (She studied)."
      ],
      formulas: "but = mas; because = porque; however = porém; although = embora; therefore = portanto.",
      exemplo: "“I am studying now” está no present continuous: a ação acontece <b>agora</b>.",
      ex: [
        "Que tempo verbal é “She goes to school by bus”?",
        "O que significa “however”?"
      ],
      resp: ["Present simple.", "Porém, no entanto."],
      links: [
        "yt:present simple e present continuous",
        "yt:conectivos em inglês linking words",
        "brasil"
      ]
    },

    /* ======================== HISTÓRIA ======================== */
    {
      id: "his1", mat: "História", n: 1,
      titulo: "Brasil Colônia e Império",
      calma: "Para entender o Brasil, siga o <b>dinheiro e o trabalho</b>: na Colônia, a economia girou em torno do açúcar, do ouro e do café, sempre sustentada pelo trabalho escravizado de africanos. Marque as datas-chave e depois pense nas causas e consequências de cada uma.",
      passos: [
        "Monte uma linha do tempo com as datas.",
        "Ligue cada ciclo econômico ao trabalho e à região.",
        "Pense: por que isso mudou?"
      ],
      formulas: "1500 chegada dos portugueses. 1808 corte portuguesa no Brasil. 1822 Independência. 1888 Lei Áurea. 1889 Proclamação da República.",
      exemplo: "A economia açucareira do Nordeste dependia do trabalho escravizado.",
      ex: [
        "Em que ano foi proclamada a República?",
        "Que lei aboliu a escravidão no Brasil?"
      ],
      resp: ["1889.", "A Lei Áurea (1888)."],
      links: [
        "yt:Brasil Colônia resumo",
        "yt:Brasil Império resumo",
        "brasil"
      ]
    },
    {
      id: "his2", mat: "História", n: 2,
      titulo: "República, Era Vargas e Ditadura",
      calma: "Aqui o jeito de estudar é por <b>períodos</b>: República Velha, Era Vargas, democracia de 1946, ditadura militar e redemocratização. Para cada um, guarde quem mandava, o que mudou para o povo e como acabou.",
      passos: [
        "Organize os períodos em ordem.",
        "Para cada um, anote um marco (lei, golpe, constituição).",
        "Compare ditadura e democracia."
      ],
      formulas: "1930 Revolução. 1943 CLT. 1964 golpe militar. 1985 fim da ditadura. 1988 Constituição Cidadã.",
      exemplo: "Na Era Vargas surgiram a CLT (direitos trabalhistas) e o voto feminino.",
      ex: [
        "Quando começou a ditadura militar?",
        "Que documento de 1988 restabeleceu a democracia?"
      ],
      resp: ["Em 1964.", "A Constituição de 1988."],
      links: [
        "yt:Era Vargas resumo",
        "yt:ditadura militar no Brasil resumo",
        "brasil"
      ]
    },
    {
      id: "his3", mat: "História", n: 3,
      titulo: "Guerras mundiais e Guerra Fria",
      calma: "Pense nas guerras como uma <b>sequência de causas e consequências</b>: o que a 1ª Guerra deixou mal resolvido ajudou a causar a 2ª, e o fim da 2ª criou o mundo dividido da Guerra Fria entre EUA (capitalismo) e URSS (socialismo).",
      passos: [
        "Anote datas e lados de cada guerra.",
        "Descubra a causa e a consequência de cada uma.",
        "Na Guerra Fria, lembre que não houve confronto direto entre as potências."
      ],
      formulas: "1ª Guerra: 1914–1918. 2ª Guerra: 1939–1945 (Holocausto). Guerra Fria: EUA x URSS. Queda do Muro de Berlim: 1989.",
      exemplo: "O Muro de Berlim dividia a cidade entre os lados capitalista e socialista.",
      ex: [
        "Qual o período da Segunda Guerra Mundial?",
        "Que muro simbolizou a Guerra Fria?"
      ],
      resp: ["1939 a 1945.", "O Muro de Berlim (caiu em 1989)."],
      links: [
        "yt:Primeira e Segunda Guerra Mundial resumo",
        "yt:Guerra Fria resumo",
        "brasil"
      ]
    },

    /* ======================== GEOGRAFIA ======================== */
    {
      id: "geo1", mat: "Geografia", n: 1,
      titulo: "Cartografia, escala e fusos",
      calma: "Mapa é a Terra <b>encolhida</b>, e a escala diz o quanto. Escala 1:100.000 significa que 1 cm no mapa vale 100.000 cm no chão (que são 1.000 m, ou 1 km). Para ler lugares, usamos latitude (paralelos: norte/sul) e longitude (meridianos: leste/oeste).",
      passos: [
        "Na escala, multiplique o tamanho no mapa pelo número de baixo.",
        "Converta cm para km (corte cinco zeros).",
        "Nos fusos, a cada 15° de longitude há 1 hora de diferença."
      ],
      formulas: "1:100.000 significa 1 cm = 1 km. Fuso horário: 15° = 1 hora. Quanto menor o número da escala, menor a área representada.",
      exemplo: "3 cm num mapa de 1:100.000 representam <b>3 km</b>.",
      ex: [
        "Em um mapa 1:50.000, 4 cm representam quantos km?",
        "Quantas horas de diferença há entre dois lugares 30° distantes em longitude?"
      ],
      resp: ["2 km.", "2 horas."],
      links: [
        "yt:escala cartográfica como calcular",
        "yt:fusos horários e coordenadas geográficas",
        "brasil"
      ]
    },
    {
      id: "geo2", mat: "Geografia", n: 2,
      titulo: "Clima, biomas e meio ambiente",
      calma: "O clima depende de <b>onde</b> você está: latitude (perto da linha do Equador faz calor), altitude, proximidade do mar e correntes. Já os biomas são as grandes paisagens do Brasil, e cada um tem clima, vegetação e ameaças próprias.",
      passos: [
        "Ligue cada bioma ao seu clima.",
        "Associe cada um à principal ameaça.",
        "Entenda o efeito estufa e o aquecimento global."
      ],
      formulas: "Biomas: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal. Efeito estufa: gases como CO<sub>2</sub> retêm calor.",
      exemplo: "A Mata Atlântica, presente em São Paulo, é um dos biomas mais devastados.",
      ex: [
        "Quantos biomas há no Brasil?",
        "Qual gás liberado ao queimar combustíveis intensifica o efeito estufa?"
      ],
      resp: ["Seis.", "O gás carbônico (CO<sub>2</sub>)."],
      links: [
        "yt:biomas brasileiros",
        "yt:climas do Brasil e fatores climáticos",
        "brasil"
      ]
    },
    {
      id: "geo3", mat: "Geografia", n: 3,
      titulo: "População, urbanização e globalização",
      calma: "Aqui o foco é <b>pessoas e lugares</b>: por que as cidades cresceram tão rápido, o que isso causa e como o mundo ficou conectado. Muita questão usa gráfico ou tabela, então treine a leitura de dados.",
      passos: [
        "Leia título, eixos e fonte do gráfico.",
        "Ligue o dado a uma causa (êxodo rural, industrialização).",
        "Pense nas consequências (moradia, trânsito, desigualdade)."
      ],
      formulas: "IDH mede renda, saúde e educação. Êxodo rural: migração do campo para a cidade. Globalização: integração de economias e culturas.",
      exemplo: "A industrialização no Sudeste atraiu migrantes e fez a população urbana crescer.",
      ex: [
        "O que o IDH mede?",
        "O que é êxodo rural?"
      ],
      resp: [
        "Renda, saúde (expectativa de vida) e educação.",
        "A migração de pessoas do campo para a cidade."
      ],
      links: [
        "yt:urbanização brasileira",
        "yt:globalização resumo geografia",
        "brasil"
      ]
    },

    /* ======================== SOCIOLOGIA ======================== */
    {
      id: "soc1", mat: "Sociologia", n: 1,
      titulo: "Os clássicos da Sociologia",
      calma: "A Sociologia estuda <b>como vivemos em sociedade</b>. Os três autores principais olham para ela de jeitos diferentes: Durkheim vê regras que existem acima de nós (fatos sociais), Weber foca no sentido que as pessoas dão às suas ações e Marx enxerga a luta entre classes pelo controle do trabalho e da riqueza.",
      passos: [
        "Ligue cada autor a seu conceito.",
        "Pense num exemplo do dia a dia para cada conceito."
      ],
      formulas: "Durkheim: fato social (normas e costumes). Weber: ação social. Marx: classes sociais e luta de classes.",
      exemplo: "Seguir uma regra de trânsito, mesmo sem ninguém olhando, é um exemplo de <b>fato social</b>.",
      ex: [
        "Quem formulou o conceito de fato social?",
        "A que Marx dá mais importância para explicar a sociedade?"
      ],
      resp: [
        "Durkheim.",
        "Às classes sociais e à relação entre trabalho e capital."
      ],
      links: [
        "yt:Durkheim Weber e Marx resumo sociologia",
        "brasil"
      ]
    },
    {
      id: "soc2", mat: "Sociologia", n: 2,
      titulo: "Cultura, desigualdade e cidadania",
      calma: "Cada grupo tem sua cultura, e nenhuma é “melhor” só por ser a nossa. Julgar os outros pelo nosso jeito se chama <b>etnocentrismo</b>; entender cada cultura a partir dela mesma é <b>relativismo cultural</b>. Cidadania é ter direitos e deveres na prática.",
      passos: [
        "Diferencie etnocentrismo e relativismo cultural.",
        "Ligue desigualdade a acesso a direitos.",
        "Classifique os direitos: civis, políticos e sociais."
      ],
      formulas: "Direitos civis: liberdade e igualdade perante a lei. Políticos: votar e ser votado. Sociais: saúde, educação, trabalho.",
      exemplo: "Achar que a comida de outro país é “estranha” porque é diferente da sua é um sinal de etnocentrismo.",
      ex: [
        "O que é etnocentrismo?",
        "Dê um exemplo de direito social."
      ],
      resp: [
        "Julgar outras culturas tendo a sua própria como padrão.",
        "Saúde, educação ou moradia."
      ],
      links: [
        "yt:etnocentrismo e relativismo cultural",
        "yt:cidadania direitos civis políticos e sociais",
        "brasil"
      ]
    },

    /* ======================== FILOSOFIA ======================== */
    {
      id: "fil1", mat: "Filosofia", n: 1,
      titulo: "Filosofia antiga",
      calma: "A Filosofia começa quando alguém pergunta “<b>por quê?</b>” em vez de aceitar tudo pronto. Na Grécia antiga, Sócrates ensinava fazendo perguntas, Platão dizia que o mundo que vemos é uma sombra do mundo das ideias e Aristóteles estudava a lógica e a ética.",
      passos: [
        "Associe cada filósofo à sua ideia central.",
        "Entenda a alegoria da caverna: quem sai da caverna descobre a realidade."
      ],
      formulas: "Sócrates: maiêutica. Platão: mundo das ideias e alegoria da caverna. Aristóteles: lógica e virtude como equilíbrio.",
      exemplo: "Na alegoria da caverna, as sombras na parede representam as aparências que tomamos como verdade.",
      ex: [
        "O que é a maiêutica?",
        "Que alegoria de Platão fala de sombras na parede?"
      ],
      resp: [
        "O método de Sócrates: fazer perguntas para a pessoa descobrir a verdade sozinha.",
        "A alegoria da caverna."
      ],
      links: [
        "yt:Sócrates Platão e Aristóteles resumo",
        "yt:alegoria da caverna explicada",
        "brasil"
      ]
    },
    {
      id: "fil2", mat: "Filosofia", n: 2,
      titulo: "Ética e política moderna",
      calma: "Ética é pensar sobre o que é <b>certo e errado</b> e por quê. Na política, vários filósofos perguntaram por que existe o Estado: Hobbes disse que abrimos mão de liberdade por segurança, Locke defendeu direitos naturais e Rousseau falou em vontade geral.",
      passos: [
        "Ligue cada filósofo a uma ideia.",
        "Compare as visões de Estado e poder."
      ],
      formulas: "Kant: agir por dever. Hobbes: contrato social por segurança. Locke: vida, liberdade e propriedade. Rousseau: vontade geral.",
      exemplo: "Quando todos respeitam as regras da sala para a convivência funcionar, há um pequeno <b>contrato social</b>.",
      ex: [
        "Quem defendeu o contrato social para garantir segurança?",
        "O que a ética estuda?"
      ],
      resp: [
        "Hobbes.",
        "Os princípios do agir moral, o que é certo e errado."
      ],
      links: [
        "yt:contrato social Hobbes Locke Rousseau",
        "yt:ética filosofia conceitos",
        "brasil"
      ]
    }
  ],

  /* ========================================================================
     PLANO DE 7 DIAS — cada linha: [dia, foco principal, extra]
     ======================================================================== */
  plano: [
    ["1", "Matemática 1, 2 e 3 (porcentagem, 1º e 2º grau) + <b>Biologia:</b> como estudar e célula", "Física 1 (cinemática)"],
    ["2", "Matemática 4 e 5 (geometria plana e espacial) + <b>Biologia:</b> DNA, RNA e proteínas", "Química 1 (misturas)"],
    ["3", "Física 2 e 3 (Newton, energia) + <b>Biologia:</b> mitose e meiose", "Matemática 6 (estatística)"],
    ["4", "Química 2, 3 e 4 (átomo, ligações, ácidos e bases) + <b>Biologia:</b> genética", "Física 4 (termologia)"],
    ["5", "Matemática 7, 8 e 9 (probabilidade, PA/PG, trigonometria) + <b>Biologia:</b> evolução e ecologia", "Física 5 (ondas)"],
    ["6", "Física 6 e 7 + Química 5, 6 e 7 + <b>Biologia:</b> corpo humano e vírus", "Química 8 (orgânica)"],
    ["7", "Simulado com provas antigas (Vunesp/Fuvest) e cronômetro", "<b>Biologia:</b> fotossíntese, ambiente e revisão dos erros; dormir cedo!"]
  ]
};
