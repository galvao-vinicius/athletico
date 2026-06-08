// JavaScript - Athletico Paranaense

// ============================================
// DADOS DA GALERIA
// ============================================

const galeriaItens = [
    {
        titulo: "Sul-Americana 2018",
        descricao: "Primeiro título internacional da história do Furacão! Final disputada contra o Junior Barranquilla, na Colômbia. Gol de Oliveira deu o título histórico.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2022-07-13_Football%2C_Men%27s_South_American_Championship%2C_Brazil_vs._Chile_%28069%29.jpg/1200px-2022-07-13_Football%2C_Men%27s_South_American_Championship%2C_Brazil_vs._Chile_%28069%29.jpg"
    },
    {
        titulo: "Copa do Brasil 2019",
        descricao: "O Furacão conquistousua primeira Copa do Brasil! Final contra o Internacional-RS. Gols de Rony e Marcelo Cirino.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Copa_do_Brasil_de_Futebol_de_2019.jpg/1200px-Copa_do_Brasil_de_Futebol_de_2019.jpg"
    },
    {
        titulo: "Sul-Americana 2021",
        descricao: "Segundo título continental! Nas penalidades, o Furacão venceu o Braga. Geuvânio foi o herói da classificação.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Athletico_Paranaense_vs._Club_Deportivo_Braga_%282%29.jpg/1200px-Athletico_Paranaense_vs._Club_Deportivo_Braga_%282%29.jpg"
    },
    {
        titulo: "Libertadores 2022",
        descricao: "A melhor campanha da história! Chegou às quartas de final, eliminando Atlético-MG e Estudiantes. Vitor Roque destaques.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Estadio_Joaquim_Am%C3%A9rico_Guimar%C3%A3es.jpg/1200px-Estadio_Joaquim_Am%C3%A9rico_Guimar%C3%A3es.jpg"
    },
    {
        titulo: "Arena da Baixada",
        descricao: "Estádio Joaquim Américo Guimarães - Casa do Furacão. Capacidade para 40.000 torcedores, inaugurada em 2014.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Arena_da_Baixada.jpg/1200px-Arena_da_Baixada.jpg"
    },
    {
        titulo: "Série B 2025",
        descricao: "O ano da redenção! Após o rebaixamento, o Furacão fez uma campanha histórica e garantiu o retorno à Série A.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Estadio_Joaquim_Am%C3%A9rico_Guimar%C3%A3es_2.jpg/1200px-Estadio_Joaquim_Am%C3%A9rico_Guimar%C3%A3es_2.jpg"
    },
    {
        titulo: "Fernandinho",
        descricao: "Um dos maiores atletas da história do clube. Ídolo da torcida, voltoutrino em 2025 para ajudar na reconstrução.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Fernandinho_2014.jpg/800px-Fernandinho_2014.jpg"
    },
    {
        titulo: "Vitor Roque",
        descricao: "A nova joia da base! Revelação de 2022, vendido para ofuturo mas deixar sua marca na história do Furacão.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Vitor_Roque_2023.jpg/800px-Vitor_Roque_2023.jpg"
    }
];

// ============================================
// CRIAR GALERIA DINÂMICA
// ============================================

function criarGaleria() {
    const container = document.getElementById('galeria-container');
    
    if (!container) return;
    
    let html = '';
    
    galeriaItens.forEach((item, indice) => {
        html += `
            <div class="galeria-item" onclick="abrirModal(${indice})">
                <img src="${item.imagem}" alt="${item.titulo}" onerror="this.style.display='none'">
                <div class="galeria-item-fallback" style="display:none; text-align:center; padding:40px;">
                    <span style="font-size:60px;">⚽</span>
                </div>
                <h4>${item.titulo}</h4>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ============================================
// MODAL DA GALERIA
// ============================================

function abrirModal(indice) {
    const modal = document.getElementById('modal');
    const item = galeriaItens[indice];
    
    if (!modal || !item) return;
    
    document.getElementById('modal-titulo').textContent = item.titulo;
    document.getElementById('modal-descricao').textContent = item.descricao;
    document.getElementById('modal-img').src = item.imagem;
    
    modal.style.display = 'block';
}

// Fechar modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const fechar = document.querySelector('.fechar');
    
    if (fechar) {
        fechar.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
});

// ============================================
// MODO ESCURO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const botaoModo = document.getElementById('modo-escuro');
    const body = document.body;
    let modoEscuroAtivo = false;
    
    if (botaoModo) {
        botaoModo.addEventListener('click', function() {
            modoEscuroAtivo = !modoEscuroAtivo;
            
            if (modoEscuroAtivo) {
                body.classList.add('modo-escuro');
                botaoModo.textContent = '☀️';
            } else {
                body.classList.remove('modo-escuro');
                botaoModo.textContent = '🌙';
            }
        });
    }
});

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-contato');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar os valores
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validar que preencheu tudo
            if (nome && email && mensagem) {
                // Mostrar mensagem de sucesso
                if (mensagemSucesso) {
                    mensagemSucesso.style.display = 'block';
                    
                    // Limpar formulário
                    formulario.reset();
                    
                    // Esconder depois de 5 segundos
                    setTimeout(function() {
                        mensagemSucesso.style.display = 'none';
                    }, 5000);
                }
                
                console.log("Mensagem enviada:");
                console.log("Nome:", nome);
                console.log("E-mail:", email);
                console.log("Mensagem:", mensagem);
            }
        });
    }
});

// ============================================
// MENU DE NAVEGAÇÃO SUAVE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const linksMenu = document.querySelectorAll('.menu a');
    
    linksMenu.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            const destino = document.querySelector(href);
            
            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Atualizar link ativo
            linksMenu.forEach(l => l.classList.remove('ativo'));
            this.classList.add('ativo');
        });
    });
});

// ============================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Animar cards quando aparecem na tela
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Aplicar animação aos cards
    const cards = document.querySelectorAll('.card, .bloco, .titulo-bloco, .galeria-item');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });
});

// ============================================
// INICIALIZAR TUDO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🏆 Athletico Paranaense - Site carregado!");
    console.log("Furacão do Brasil! 🔴⚫");
    
    criarGaleria();
});
