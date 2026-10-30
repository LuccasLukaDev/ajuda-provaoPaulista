/* ==========================================================================
   Estella | Provão Paulista 2026
   Organização:
     1. Configuração   4. Telas (views)       7. Roteador
     2. Estado         5. Efeitos (confete)
     3. Utilitários    6. Eventos e timer
   ========================================================================== */
(() => {
  "use strict";

  /* ------------------------------------------------------------------------
     1. CONFIGURAÇÃO
     ------------------------------------------------------------------------ */

  // Datas das provas por série
  const DATAS_PROVA = {
    "3": "2026-11-04",
    "2": "2026-11-10",
    "1": "2026-11-12"
  };

  // Ordem de exibição das matérias
  const MATERIAS = [
    "Matemática", "Física", "Química", "Biologia", "Português",
    "Inglês", "História", "Geografia", "Sociologia", "Filosofia"
  ];

  const COR = {
    "Matemática": "#FF7DB5",
    "Física":     "#B79CFF",
    "Química":    "#FFA98A",
    "Biologia":   "#5CD6B3",
    "Português":  "#F2A33A",
    "Inglês":     "#6EC1FF",
    "História":   "#C98B5E",
    "Geografia":  "#8BD450",
    "Sociologia": "#FF8FD8",
    "Filosofia":  "#8F9BFF"
  };

  const EMOJI = {
    "Matemática": "📐",
    "Física":     "⚡",
    "Química":    "🧪",
    "Biologia":   "🧬",
    "Português":  "📖",
    "Inglês":     "🌎",
    "História":   "🏛️",
    "Geografia":  "🗺️",
    "Sociologia": "👥",
    "Filosofia":  "💭"
  };

  // Itens do menu inferior: [rota, ícone, rótulo]
  const MENU = [
    ["#/",         "🏠", "Início"],
    ["#/plano",    "📅", "Plano"],
    ["#/materias", "📚", "Matérias"],
    ["#/foco",     "⏱️", "Foco"]
  ];

  // Sites de apoio usados em "links" (data.js): chave -> [texto, url]
  const SITES = {
    khan:     ["Khan Academy Brasil", "https://pt.khanacademy.org/"],
    mesalva:  ["Me Salva!",           "https://www.mesalva.com/"],
    brasil:   ["Brasil Escola",       "https://brasilescola.uol.com.br/"]
  };

  const CIRCUNFERENCIA_TIMER = 653.5; // 2 * π * 104 (raio do SVG)
  const FOCO_PADRAO_SEG = 25 * 60;

  const MASCOTE = `
    <svg class="mascote" viewBox="0 0 120 110" aria-hidden="true">
      <path d="M60 100C20 72 6 50 6 32 6 16 18 8 31 8c12 0 22 7 29 18C67 15 77 8 89 8c13 0 25 8 25 24 0 18-14 40-54 68z"
            fill="#FF7DB5" stroke="#E5388A" stroke-width="4"/>
      <ellipse cx="42" cy="48" rx="6" ry="8" fill="#5A1239"/>
      <ellipse cx="78" cy="48" rx="6" ry="8" fill="#5A1239"/>
      <circle cx="44" cy="45" r="2.3" fill="#fff"/>
      <circle cx="80" cy="45" r="2.3" fill="#fff"/>
      <ellipse cx="32" cy="62" rx="8" ry="5" fill="#FFB3D3"/>
      <ellipse cx="88" cy="62" rx="8" ry="5" fill="#FFB3D3"/>
      <path d="M52 62q8 9 16 0" fill="none" stroke="#5A1239" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M96 6l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#FFD84D"/>
    </svg>`;


  /* ------------------------------------------------------------------------
     2. ESTADO (persistido no localStorage)
     ------------------------------------------------------------------------ */

  const Storage = {
    ler(chave, padrao) {
      try {
        return JSON.parse(localStorage.getItem(chave)) ?? padrao;
      } catch (e) {
        return padrao;
      }
    },
    salvar(chave, valor) {
      try {
        localStorage.setItem(chave, JSON.stringify(valor));
      } catch (e) {
        /* localStorage indisponível: segue sem salvar */
      }
    }
  };

  const estado = {
    feito: Storage.ler("feito", {}),   // { idDoTopico: true }
    plano: Storage.ler("plano", {}),   // { numeroDoDia: true }
    serie: Storage.ler("serie", "3")   // "1" | "2" | "3"
  };

  // Índice rápido: id -> tópico
  const TOPICOS = Object.fromEntries(D.t.map(t => [t.id, t]));


  /* ------------------------------------------------------------------------
     3. UTILITÁRIOS
     ------------------------------------------------------------------------ */

  const $ = seletor => document.querySelector(seletor);
  const $$ = seletor => document.querySelectorAll(seletor);

  // Porcentagem de tópicos concluídos (de uma matéria, ou geral se omitida)
  function progresso(materia) {
    const lista = D.t.filter(t => !materia || t.mat === materia);
    const concluidos = lista.filter(t => estado.feito[t.id]).length;
    return Math.round(100 * concluidos / lista.length);
  }

  // Dias restantes até a prova da série escolhida
  function diasParaProva() {
    const prova = new Date(DATAS_PROVA[estado.serie] + "T08:00:00");
    return Math.ceil((prova - new Date()) / 864e5);
  }

  // Primeiro tópico ainda não estudado
  const proximoTopico = () => D.t.find(t => !estado.feito[t.id]);

  // Formata segundos como MM:SS
  function formatarTempo(segundos) {
    const mm = String(Math.floor(segundos / 60)).padStart(2, "0");
    const ss = String(segundos % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function mensagemContagem(dias) {
    if (dias > 1)   return `Faltam <b>${dias} dias</b> para a sua prova! ✨`;
    if (dias === 1) return "A prova é <b>amanhã</b>! Revise com carinho e durma bem 🌙";
    if (dias === 0) return "<b>A prova é hoje!</b> Você se preparou, respira fundo 💪";
    return "Sua prova já passou. Parabéns pelo esforço! 🎉";
  }

  // Converte uma entrada de "links" (data.js) em <a>
  //   "yt:busca"  -> busca no YouTube
  //   "khan" etc. -> site definido em SITES
  function renderLink(entrada) {
    let texto, url;

    if (entrada.startsWith("yt:")) {
      const busca = entrada.slice(3);
      texto = `Videoaulas no YouTube: ${busca}`;
      url = "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(busca).replace(/%20/g, "+");
    } else {
      [texto, url] = SITES[entrada];
    }

    return `<a href="${url}" target="_blank" rel="noopener">${texto}</a>`;
  }


  /* ------------------------------------------------------------------------
     4. TELAS (cada uma retorna uma string HTML)
     ------------------------------------------------------------------------ */

  // ---- Peças reutilizáveis ----

  function renderBarraProgresso(materia) {
    return `
      <div class="pl">
        <span>${EMOJI[materia]} ${materia}</span>
        <span>${progresso(materia)}%</span>
      </div>
      <div class="bar">
        <i style="width:${progresso(materia)}%;background:${COR[materia]}"></i>
      </div>`;
  }

  function renderItemTopico(t) {
    const feito = estado.feito[t.id];
    return `
      <a class="item" href="#/t/${t.id}">
        <span class="e" style="background:${COR[t.mat]}">${t.n}</span>
        <div>
          ${t.titulo}
          <small>${feito ? "Estudado 🎉" : "Ainda não estudado"}</small>
        </div>
        <span class="chk ${feito ? "on" : ""}">${feito ? "✓" : ""}</span>
      </a>`;
  }

  function renderExercicio(enunciado, resposta, indice) {
    return `
      <p><b>${"abc"[indice]})</b> ${enunciado}</p>
      <details>
        <summary>👀 Ver resposta</summary>
        <div class="rs">${resposta}</div>
      </details>`;
  }

  // ---- Telas ----

  const views = {

    home() {
      const proximo = proximoTopico();

      const botaoContinuar = proximo
        ? `<a class="btn" href="#/t/${proximo.id}">▶ Continuar: ${proximo.titulo}</a>`
        : `<div class="card min">
             <b>Você marcou todos os tópicos! 🏆</b>
             Agora é refazer os exercícios que errou.
           </div>`;

      return `
        <div style="text-align:center">
          ${MASCOTE}
          <h1>Oi, Estella! 💗</h1>
          <p class="lead">
            Aqui você aprende <b>todas as matérias</b> da prova
            <b>de pouquinho em pouquinho</b>, sem sofrimento. Bora?
          </p>
        </div>

        <div class="card tape">
          <h3>🎀 Sua prova</h3>
          <label for="sr">Em qual série você está?</label>
          <select id="sr">
            <option value="3">3º ano (prova em 4 e 5 de novembro)</option>
            <option value="2">2º ano (10 e 11 de novembro)</option>
            <option value="1">1º ano (12 e 13 de novembro)</option>
          </select>
          <p>${mensagemContagem(diasParaProva())}</p>
        </div>

        <div class="card lav">
          <h3>🌈 Seu progresso</h3>
          ${MATERIAS.map(renderBarraProgresso).join("")}
        </div>

        ${botaoContinuar}
        <a class="btn alt" href="#/plano">📅 Ver o plano de 7 dias</a>
        <a class="btn alt" href="guia.pdf" target="_blank" rel="noopener">📄 Abrir o PDF do guia</a>

        <div class="card pea">
          <h3>🧁 Como estudar cada tópico</h3>
          <ol class="p">
            <li><span>Leia “Em outras palavras” para entender a ideia.</span></li>
            <li><span>Siga o passo a passo com papel e lápis.</span></li>
            <li><span>Refaça o exemplo sem olhar.</span></li>
            <li><span>Tente os exercícios antes de ver a resposta.</span></li>
            <li><span>Marque como estudado e comemore! 🎉</span></li>
          </ol>
        </div>`;
    },

    plano() {
      const dias = D.plano.map(([n, foco, extra]) => `
        <label class="card dia">
          <input type="checkbox" data-d="${n}" ${estado.plano[n] ? "checked" : ""}>
          <span>
            <b>Dia ${n}</b><br>
            ${foco}<br>
            <small>Extra: ${extra}</small>
          </span>
        </label>`).join("");

      return `
        <h1>📅 Plano de 7 dias</h1>
        <p class="lead">
          De 2 a 3 horas por dia, em blocos de 25 minutos com pausa.
          Se um dia falhar, sem culpa: continue de onde parou 💗
        </p>

        ${dias}

        <div class="card lav">
          <h3>⏰ Rotina de cada sessão</h3>
          <ol class="p">
            <li><span><b>10 min</b> lendo o passo a passo</span></li>
            <li><span><b>10 min</b> refazendo o exemplo sem olhar</span></li>
            <li><span><b>25 min</b> em exercícios e provas antigas</span></li>
            <li><span><b>5 min</b> anotando o que errou e por quê</span></li>
          </ol>
        </div>

        <div class="card pea">
          <h3>🧬 Biologia todo dia</h3>
          <p>
            A Biologia agora está em <b>todos os dias</b> do plano, com uns
            30 a 40 minutos por dia, porque é onde você mais quer evoluir.
            Português e Inglês entram por 20 minutos nos dias mais leves.
          </p>
        </div>

        <div class="card min">
          <h3>🍓 Cuide de você</h3>
          <p>
            Durma bem, beba água e faça lanches leves. No dia da prova leve
            documento com foto e caneta preta de tubo transparente, e chegue
            antes das 7h45.
          </p>
        </div>`;
    },

    materias() {
      const secoes = MATERIAS.map(materia => `
        <h3 style="margin-top:22px">
          ${EMOJI[materia]} ${materia} <small>(${progresso(materia)}% feito)</small>
        </h3>
        ${D.t.filter(t => t.mat === materia).map(renderItemTopico).join("")}
      `).join("");

      return `
        <h1>📚 Matérias</h1>
        <p class="lead">Comece pelo que parece mais fácil, para ganhar confiança!</p>
        ${secoes}`;
    },

    foco() {
      return `
        <h1>⏱️ Modo foco</h1>
        <p class="lead">
          Estude 25 minutos sem distração e descanse 5.
          O cérebro guarda muito melhor assim!
        </p>

        <div class="card">
          <div class="ring">
            <svg viewBox="0 0 230 230">
              <circle cx="115" cy="115" r="104" fill="none" stroke="#FFD3E6" stroke-width="14"/>
              <circle id="arc" cx="115" cy="115" r="104" fill="none" stroke="#E5388A"
                      stroke-width="14" stroke-linecap="round"
                      stroke-dasharray="${CIRCUNFERENCIA_TIMER}"/>
            </svg>
            <b id="tm">25:00</b>
          </div>

          <div class="row">
            <button class="btn" id="ini">▶ Começar</button>
            <button class="btn alt" id="pau">⏸ Pausar</button>
          </div>
          <div class="row">
            <button class="btn alt" data-m="25">Foco 25</button>
            <button class="btn alt" data-m="5">Pausa 5</button>
            <button class="btn alt" data-m="15">Pausa 15</button>
          </div>
        </div>`;
    },

    // Página de um tópico (id vem da URL: #/t/<id>)
    t(id) {
      const topico = TOPICOS[id];
      if (!topico) return views.materias();

      const indice = D.t.indexOf(topico);
      const anterior = D.t[indice - 1];
      const seguinte = D.t[indice + 1];
      const feito = estado.feito[topico.id];

      return `
        <a href="#/materias">← Voltar às matérias</a>

        <div style="margin-top:12px">
          <span class="tag" style="background:${COR[topico.mat]}">
            ${EMOJI[topico.mat]} ${topico.mat} ${topico.n}
          </span>
        </div>
        <h1>${topico.titulo}</h1>

        <div class="card tape">
          <h3>💬 Em outras palavras</h3>
          <div class="nota">${topico.calma}</div>
        </div>

        <div class="card lav">
          <h3>🪜 Passo a passo</h3>
          <ol class="p">
            ${topico.passos.map(p => `<li><span>${p}</span></li>`).join("")}
          </ol>
        </div>

        <div class="card">
          <h3>📌 Fórmulas e ideias-chave</h3>
          <div class="fm">${topico.formulas}</div>
          <p class="mu">Copie no caderno com as suas palavras. Escrever ajuda a lembrar! ✏️</p>
        </div>

        <div class="card min">
          <h3>🌟 Exemplo de aplicação</h3>
          <p>${topico.exemplo}</p>
          <p class="mu">Cubra a resposta e refaça sozinha antes de seguir.</p>
        </div>

        <div class="card pea">
          <h3>✏️ Exercícios</h3>
          <p class="mu">Pegue papel e lápis e só depois abra a resposta.</p>
          ${topico.ex.map((e, i) => renderExercicio(e, topico.resp[i], i)).join("")}
        </div>

        <div class="card">
          <h3>🎥 Onde estudar</h3>
          <ul style="padding-left:20px;margin:0">
            ${topico.links.map(l => `<li style="margin:6px 0">${renderLink(l)}</li>`).join("")}
          </ul>
        </div>

        <button class="btn ${feito ? "ok" : ""}" id="fz">
          ${feito ? "✅ Estudado (toque para desmarcar)" : "✨ Marcar como estudado"}
        </button>

        <div class="row">
          ${anterior ? `<a class="btn alt" href="#/t/${anterior.id}">← Anterior</a>` : ""}
          ${seguinte ? `<a class="btn alt" href="#/t/${seguinte.id}">Próximo →</a>` : ""}
        </div>`;
    }
  };


  /* ------------------------------------------------------------------------
     5. EFEITOS
     ------------------------------------------------------------------------ */

  function confete(x, y) {
    const emojis = ["💗", "✨", "🌸", "⭐", "💖"];

    for (let i = 0; i < 14; i++) {
      const el = document.createElement("span");
      el.className = "fx";
      el.textContent = emojis[i % emojis.length];
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.setProperty("--dx", (Math.random() * 240 - 120) + "px");

      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1200);
    }
  }


  /* ------------------------------------------------------------------------
     6. EVENTOS E TIMER
     ------------------------------------------------------------------------ */

  // O timer fica fora das telas para continuar contando se você trocar de aba
  const timer = {
    intervalo: null,
    total: FOCO_PADRAO_SEG,
    restante: FOCO_PADRAO_SEG,
    rodando: false
  };

  function pararTimer() {
    timer.rodando = false;
    clearInterval(timer.intervalo);
  }

  function ligarTimer() {
    const tempo = $("#tm");
    if (!tempo) return;

    const desenhar = () => {
      tempo.textContent = formatarTempo(timer.restante);
      $("#arc").style.strokeDashoffset =
        CIRCUNFERENCIA_TIMER * (1 - timer.restante / timer.total);
    };

    const tique = () => {
      if (!timer.rodando) return;

      timer.restante--;
      desenhar();

      if (timer.restante <= 0) {
        pararTimer();
        if (navigator.vibrate) navigator.vibrate([300, 100, 300]);
        alert("Tempo! Hora de descansar (ou voltar ao foco) 💗");
      }
    };

    $("#ini").onclick = () => {
      if (timer.rodando || timer.restante <= 0) return;
      timer.rodando = true;
      clearInterval(timer.intervalo);
      timer.intervalo = setInterval(tique, 1000);
    };

    $("#pau").onclick = pararTimer;

    $$("[data-m]").forEach(botao => {
      botao.onclick = () => {
        pararTimer();
        timer.total = timer.restante = botao.dataset.m * 60;
        desenhar();
      };
    });

    desenhar();
  }

  // Liga os eventos da tela recém-renderizada
  function ligarEventos(hash) {
    // Seletor de série
    const selectSerie = $("#sr");
    if (selectSerie) {
      selectSerie.value = estado.serie;
      selectSerie.onchange = () => {
        estado.serie = selectSerie.value;
        Storage.salvar("serie", estado.serie);
        rota();
      };
    }

    // Checkboxes do plano de 7 dias
    $$("[data-d]").forEach(checkbox => {
      checkbox.onchange = () => {
        estado.plano[checkbox.dataset.d] = checkbox.checked;
        Storage.salvar("plano", estado.plano);

        if (checkbox.checked) {
          const { left, top } = checkbox.getBoundingClientRect();
          confete(left, top);
        }
      };
    });

    // Botão "Marcar como estudado"
    const botaoFeito = $("#fz");
    if (botaoFeito) {
      botaoFeito.onclick = () => {
        const id = hash.split("/")[2];
        estado.feito[id] = !estado.feito[id];
        Storage.salvar("feito", estado.feito);
        rota();

        if (estado.feito[id]) confete(innerWidth / 2, innerHeight - 120);
      };
    }

    ligarTimer();
  }


  /* ------------------------------------------------------------------------
     7. ROTEADOR (hash: #/, #/plano, #/materias, #/foco, #/t/<id>)
     ------------------------------------------------------------------------ */

  function renderMenu(rotaAtiva) {
    $("#nav").innerHTML = MENU.map(([href, icone, nome]) => `
      <a href="${href}" class="${rotaAtiva === href ? "on" : ""}">
        <i>${icone}</i>${nome}
      </a>`).join("");
  }

  function rota() {
    const hash = location.hash || "#/";
    const partes = hash.split("/");          // ["#", "t", "mat1"]
    const nomeRota = partes[1] || "home";
    const parametro = partes[2];

    const tela = views[nomeRota] || views.home;
    $("#app").innerHTML = tela(parametro);

    // Dentro de um tópico, destaca "Matérias" no menu
    const rotaMenu = nomeRota === "t" ? "#/materias" : "#/" + (partes[1] || "");
    renderMenu(rotaMenu);

    ligarEventos(hash);
    window.scrollTo(0, 0);
  }

  addEventListener("hashchange", rota);
  rota();

})();
