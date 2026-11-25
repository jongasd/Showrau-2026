/**
 * SHOWRAU 2026 - Sound Cue Controller
 * Sistema de controle de sons para o Showrau do SESI SALTO 2026
 * 
 * Cues podem ter:
 *   - optional: true -> aparecem no fluxo mas podem ser puladas com →
 *   - fadeOut: true  -> ao cortar com ESPAÇO (ou tecla F), o volume abaixa gradualmente
 *   - missing: true  -> arquivo de áudio ainda não adicionado em site/audio/
 */

// ========== ROTEIRO & CUE DATA ==========
const SHOW_DATA = {
  scenes: [
    // ============ CENA 1 ============
    {
      id: 'cena-1',
      number: 1,
      title: 'A ABERTURA',
      meta: 'Narração de GATTI',
      description: 'Uma breve narração apresentando o contexto da história e introduzindo a ideia de uma viagem pelas diferentes décadas. O público será convidado a embarcar em uma jornada pelo tempo, passando pelos anos 90, 2000, 2010 e chegando ao futuro.',
      lines: [
        { type: 'direction', text: 'NARRADOR(A): GATTI' },
        { type: 'direction', text: 'Uma breve narração apresentando o contexto da história e introduzindo a ideia de uma viagem pelas diferentes décadas. O público será convidado a embarcar em uma jornada pelo tempo, passando pelos anos 90, 2000, 2010 e chegando ao futuro.' },
      ],
      cues: []
    },

    // ============ CENA 2 ============
    {
      id: 'cena-2',
      number: 2,
      title: 'O EXPERIMENTO DO FUTURO',
      meta: 'Roteiro: 3–5 min | Personagens: Gabriel e Valle',
      description: 'Gabriel e Valle entram em cena discutindo sobre o funcionamento de uma máquina do tempo.',
      lines: [
        { type: 'direction', text: 'Valle está mexendo nos controles da máquina do tempo. Gabriel entra apressado, passando pelo público, segurando algumas anotações.' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Valle! Você está mexendo nisso de novo?!' },
        { type: 'dialogue', character: 'VALLE', text: 'Estou tentando fazer essa máquina funcionar, Gabriel. Diferente de algumas pessoas, eu realmente trabalho!' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Trabalha? Você está há semanas dizendo que vai fazer isso funcionar e até agora nada!' },
        { type: 'dialogue', character: 'VALLE', text: 'Ah, claro! Porque ficar reclamando vai fazer ela funcionar sozinha, não é?' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Pelo menos eu não fico apertando botões aleatórios e chamando isso de avanço!' },
        { type: 'dialogue', character: 'VALLE', text: 'Olha aqui, se você entende tanto, por que não faz você mesmo?' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Porque, diferente de você, eu tenho bom senso e sei reconhecer quando uma ideia é horrível!' },
        { type: 'dialogue', character: 'VALLE', text: 'Horrível? Estamos falando da maior invenção da humanidade! Uma máquina capaz de viajar pelo tempo!' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Uma máquina que você nem tem a capacidade de ligar.' },
        { type: 'dialogue', character: 'VALLE', text: 'Quer saber? Cansei! Vou provar que funciona agora mesmo.' },
        { type: 'direction', text: 'Valle se aproxima da máquina e começa a mexer nos controles.' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Valle, espera! Você nem sabe como ligar essa coisa!' },
        { type: 'dialogue', character: 'VALLE', text: 'Claro que sei. Três botões aqui, alguns ajustes ali... O que poderia dar errado de tão errado?' },
        { type: 'cue', cueIndex: 0 },
        { type: 'direction', text: 'Valle aperta o botão. A máquina começa a emitir sons estranhos e falhas.' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Isso! Isso que poderia dar errado!' },
        { type: 'dialogue', character: 'VALLE', text: 'Você vai ficar apontando o que eu fiz ou vai ajudar a resolver?' },
        { type: 'dialogue', character: 'GABRIEL', text: 'E tem jeito de resolver essa coisa?' },
        { type: 'direction', text: 'As luzes começam a piscar. Alarmes, voz da máquina (IA) e explosão são acionados.' },
        { type: 'cue', cueIndex: 1 },
        { type: 'direction', text: 'Som de explosão. As luzes apagam e, quando voltam, os personagens dos anos 90 entram em cena.' },
      ],
      cues: [
        { id: 'cue-1', label: '1° SOM - BUTTONS + MACHINE SOUND', file: 'audio/01-buttons-machine.mp3', description: 'Botões + máquina ligando com falha' },
        { id: 'cue-3', label: '3° SOM - EXPLOSÃO + ALARM + IA', file: 'audio/03-explosao-alarm-ia.mp3', description: 'Alarmes + voz robotizada (IA) + explosão' },
      ]
    },

    // ============ CENA 3 ============
    {
      id: 'cena-3',
      number: 3,
      title: 'A CHEGADA AOS ANOS 90',
      meta: 'Roteiro: 5–6 min',
      description: 'Tetracampeonato na copa, bandas como Raimundos, Charlie Brown Jr., Skank, O Rappa e Planet Hemp. Domínio dos programas de auditório (Domingo Legal e Domingão do Faustão). Ayrton Senna. Brincadeiras e interação com o público.',
      lines: [
        { type: 'cue', cueIndex: 0 },
        { type: 'dialogue', character: 'YASMIN', text: 'Gente, vocês assistiram ao Domingo Legal no último domingo? Eu quase morri de rir com as atrações!' },
        { type: 'dialogue', character: 'LÍVIA', text: 'Domingo Legal? Ah, não! Domingão do Faustão é muito melhor!' },
        { type: 'dialogue', character: 'AGATHA', text: 'Vocês duas ainda discutem isso? Todo domingo é a mesma coisa! Mas, sinceramente, eu prefiro ver Castelo-Rá-Tim-Bum.' },
        { type: 'dialogue', character: 'MANU', text: 'Eu só quero saber quando vocês vão parar de discutir programa de televisão e começar a falar de coisa que realmente importa.' },
        { type: 'dialogue', character: 'ASSUNÇÃO', text: 'E o que seria mais importante do que a televisão?' },
        { type: 'dialogue', character: 'MANU', text: 'Música, obviamente! Vocês ouviram o último sucesso dos Mamonas Assassinas?' },
        { type: 'dialogue', character: 'DUTRA', text: 'Finalmente alguém falando de música boa! Os caras são simplesmente incríveis!' },
        { type: 'dialogue', character: 'HEITOR', text: 'Concordo! Não tem como ouvir Mamonas e ficar parado!' },
        { type: 'dialogue', character: 'JOÃO MARCUS', text: 'Vocês falam isso porque ainda não ouviram Raimundos! Aquilo sim é música!' },
        { type: 'dialogue', character: 'YASMIN', text: 'Ah, pronto! Começou a competição de bandas!' },
        { type: 'dialogue', character: 'LÍVIA', text: 'Eu fico com Mamonas! Pelo menos eles fazem todo mundo rir!' },
        { type: 'dialogue', character: 'JOÃO MARCUS', text: 'E quem disse que Raimundos não é bom? Vocês não entendem nada!' },
        { type: 'dialogue', character: 'AGATHA', text: 'Tá bom, tá bom! Cada um tem seu gosto. Mas acho que existe uma coisa com que todo mundo aqui concorda...' },
        { type: 'dialogue', character: 'MANU', text: 'O quê?' },
        { type: 'dialogue', character: 'ASSUNÇÃO', text: 'O Brasil é tetracampeão!' },
        { type: 'dialogue', character: 'HEITOR', text: 'AÍ SIM! Quatro vezes campeão do mundo!' },
        { type: 'dialogue', character: 'DUTRA', text: 'Aquela Copa de 94 foi histórica! A comemoração foi enorme!' },
        { type: 'dialogue', character: 'AGATHA', text: 'E pensar que já faz tanto tempo desde o último título...' },
        { type: 'dialogue', character: 'JOÃO MARCUS', text: 'Mas o importante é que a taça é nossa!' },
        { type: 'dialogue', character: 'YASMIN', text: 'E vocês lembram da festa? Era bandeira por todo lado, gente comemorando nas ruas...' },
        { type: 'dialogue', character: 'LÍVIA', text: 'Acho que nunca vi o Brasil tão unido por uma coisa!' },
        { type: 'dialogue', character: 'AGATHA', text: 'Bom, pelo menos até o próximo domingo, quando vocês vão voltar a discutir qual programa é melhor!' },
        { type: 'cue', cueIndex: 1 },
        { type: 'direction', text: 'Todos riem.' },
        { type: 'dialogue', character: 'MANU', text: 'E eu aposto que, daqui a pouco, vocês vão estar discutindo qual banda é melhor também!' },
        { type: 'dialogue', character: 'JOÃO MARCUS', text: 'Nesse caso, nem precisa discutir. Raimundos ganha!' },
        { type: 'dialogue', character: 'DUTRA', text: 'Sonha!' },
        { type: 'dialogue', character: 'HEITOR', text: 'Não importa agora.' },
        { type: 'dialogue', character: 'AGATHA', text: 'Claro, eu vou para casa ver se consigo acompanhar o programa na TV.' },
        { type: 'dialogue', character: 'YASMIN', text: 'Eu vou junto!' },
        { type: 'direction', text: 'No embalo, sai todos, concordando, ficando apenas Lívia e Manu.' },
        { type: 'dialogue', character: 'MANU', text: 'Já imaginou como seria os anos 2000?' },
        { type: 'dialogue', character: 'LÍVIA', text: 'Não, mas estão falando de algo sobre "o bug do milênio".' },
        { type: 'dialogue', character: 'MANU', text: 'Eu vi. Bem, só espero que não acabem com toda a nossa cultura...' },
        { type: 'cue', cueIndex: 2 },
        { type: 'direction', text: 'Barulho da máquina. Os anos 90 saem de cena.' },
      ],
      cues: [
        { id: 'cue-6', label: '6° SOM - PROIBIDA PRA MIM', file: 'audio/06-proibida-pra-mim.mp3', description: 'Charlie Brown Jr. – Proibida pra Mim (entrada dos anos 90)', fadeOut: true },
        { id: 'cue-7', label: '7° SOM - RISADAS', file: 'audio/07-risadas.mp3', description: 'Risadas – usar só se ninguém rir', optional: true, optionalHint: 'Usar só se ninguém rir. → para pular.' },
        { id: 'cue-8', label: '8° SOM - MACHINE SOUND', file: 'audio/08-machine-sound.mp3', description: 'Transição: máquina do tempo para anos 2000' },
      ]
    },

    // ============ CENA 4 ============
    {
      id: 'cena-4',
      number: 4,
      title: 'A CHEGADA AOS ANOS 2000',
      meta: 'Roteiro: 5 min',
      description: 'Referências à revista Capricho, Cinema nacional (Cidade de Deus, Tropa de Elite), Reality Shows (BBB, Casa dos Artistas), NX Zero, Fresno e CPM 22, Malhação, Rebelde (RBD), Meninas Malvadas.',
      lines: [
        { type: 'cue', cueIndex: 0 },
        { type: 'dialogue', character: 'ANA RIBEIRO', text: 'Gente, vocês precisam ver isso aqui! A Capricho está dizendo que essa é a tendência do momento!' },
        { type: 'dialogue', character: 'ANA FERRAZ', text: 'Deixa eu ver! Nossa, eu vi uma menina usando uma roupa igualzinha ontem. Ficou horrível!' },
        { type: 'dialogue', character: 'ANNA VIK', text: 'Falando em meninas, vocês já assistiram Meninas Malvadas? Eu estou obcecada por aquele filme!' },
        { type: 'dialogue', character: 'ELISA', text: 'Aquele das garotas populares? Eu assisti! É praticamente um documentário sobre a vida escolar.' },
        { type: 'dialogue', character: 'MARIA JULIA', text: 'Cuidado com o que vocês falam! Daqui a pouco alguém escuta e vira a próxima vítima da fofoca.' },
        { type: 'dialogue', character: 'MADUH', text: 'Mas vocês viram Malhação ontem? Eu não acredito no que aconteceu!' },
        { type: 'dialogue', character: 'DOMINGUES', text: 'Eu sabia! Aquele casal estava dando sinais fazia tempo. Só vocês não perceberam!' },
        { type: 'dialogue', character: 'ANA RIBEIRO', text: 'Eu também desconfiava! Mas quero saber se eles vão ficar juntos no próximo capítulo.' },
        { type: 'dialogue', character: 'ENZO', text: 'Como vocês conseguem transformar qualquer episódio de novela em um acontecimento histórico?' },
        { type: 'dialogue', character: 'ANA FERRAZ', text: 'Ah, Enzo, não começa! Aposto que você também fica curioso para saber o que acontece.' },
        { type: 'dialogue', character: 'ENZO', text: 'Eu? Nunca!' },
        { type: 'dialogue', character: 'MADUH', text: 'Tá bom! Mudando de assunto, alguém viu o Big Brother ontem?' },
        { type: 'dialogue', character: 'MARIA JULIA', text: 'EU VI! Gente, aquela discussão foi inacreditável!' },
        { type: 'dialogue', character: 'ANNA VIK', text: 'Eu sabia que ia dar confusão! A pessoa entrou na casa dizendo que não queria brigar e já começou arrumando problema.' },
        { type: 'dialogue', character: 'DOMINGUES', text: 'E o pior é que hoje todo mundo vai estar comentando. Não tem como escapar!' },
        { type: 'dialogue', character: 'ELISA', text: 'Pelo menos temos música boa para acompanhar tanta confusão. Vocês ouviram as novas do NX Zero e do Fresno?' },
        { type: 'dialogue', character: 'ENZO', text: 'Agora sim! Finalmente um assunto que presta.' },
        { type: 'dialogue', character: 'ANA FERRAZ', text: 'Ah, pronto! Lá vem o roqueiro defender as bandas dele.' },
        { type: 'dialogue', character: 'ENZO', text: 'Não é minha culpa se vocês têm péssimo gosto musical.' },
        { type: 'dialogue', character: 'MADUH', text: 'Olha o respeito! Aqui a gente escuta de tudo, inclusive RBD!' },
        { type: 'dialogue', character: 'ANA RIBEIRO', text: 'Gente, eu só queria terminar de ler minha revista em paz...' },
        { type: 'dialogue', character: 'MARIA JULIA', text: 'Paz? Com tanta coisa acontecendo? Impossível!' },
        { type: 'direction', text: 'HORA DE ENTRAR NO MSN/ORKUT' },
        { type: 'dialogue', character: 'VALLE', text: 'Ah, que papo chato. Vamos tentar uma próxima década agora!!!' },
        { type: 'cue', cueIndex: 1 },
      ],
      cues: [
        { id: 'cue-9', label: '9° SOM - DIAS MELHORES', file: 'audio/09-dias-melhores.mp3', description: 'Jota Quest – Dias Melhores (entrada dos anos 2000)', fadeOut: true },
        { id: 'cue-10', label: '10° SOM - MACHINE SOUND', file: 'audio/10-machine-sound.mp3', description: 'Transição: máquina do tempo para anos 2010' },
      ]
    },

    // ============ CENA 5 – ANOS 2010: A INFÂNCIA DE UMA GERAÇÃO ============
    {
      id: 'cena-5',
      number: 5,
      title: 'ANOS 2010 – A INFÂNCIA DE UMA GERAÇÃO',
      meta: 'Duração estimada: 4 a 5 minutos',
      description: 'Referências: YouTubers (AuthenticGames, Rezende), Carrossel, Funk (Passinho do Volante, Anitta, MC Kevinho, MC Livinho), Copa do Mundo (7x1 / gesto 67), pulseirinhas de elástico, Hand Spinner, Desafio da Garrafa.',
      lines: [
        { type: 'direction', text: 'Os oito personagens estão reunidos. Alguns mexem nos celulares, outros conversam. Ao fundo, toca "Show das Poderosas", da Anitta. A música diminui.' },
        { type: 'cue', cueIndex: 0 },

        { type: 'dialogue', character: 'PIETRO', text: 'Mano, não aguento mais escola, queria ser youtuber.' },
        { type: 'dialogue', character: 'GUSTAVO', text: 'Seloko todo mundo quer! Gravar vídeos com o AuthenticGames..' },
        { type: 'dialogue', character: 'THIAGO', text: 'O Authentic é daora mas eu sou mais Rezende em mano! O bagulho é fazer uma casa dos Youtubers e viver jogando Mine.' },
        { type: 'dialogue', character: 'PIETRO', text: 'Nem me fale! Série de Minecraft é muito zika, todo mundo queria ter os MODS que eles usam nos vídeos!' },
        { type: 'dialogue', character: 'GABI X', text: 'Não vejo muito Youtube, mas eu AMO Carrossel. Eu chego da escola e vou direto para a TV, não perco um episódio! A Maria Joaquina é uma nojentinha.' },
        { type: 'dialogue', character: 'DOMINGUES', text: 'É verdade, mesmo assim eu queria estudar na Escola Mundial! Só tem aluno maluco naquela sala!' },
        { type: 'dialogue', character: 'MATEUS LOPES', text: 'O negócio é ouvir música, "Passinho do Volante", a melhor do ano. É só tocar essa música que ninguém fica parado!' },

        { type: 'direction', text: 'Começa a tocar "Passinho do Volante" (ah leleke leke leke). Mateus começa a dançar e os outros acompanham. A música diminui.' },
        { type: 'cue', cueIndex: 1 },

        { type: 'dialogue', character: 'NICOLY', text: 'Mano, funks tem que ter MC Kevinho e MC Livinho... Se quiser animar uma festa é só dar o play.' },
        { type: 'dialogue', character: 'GUSTAVO', text: '"Hoje eu vou parar na gaiola"! Vish essa ninguém se segura!' },

        { type: 'dialogue', character: 'THIAGO', text: 'Exato mano kkk, mas mudando de assunto, vocês estão sabendo que o Brasil vai receber a Copa do Mundo?' },
        { type: 'dialogue', character: 'PIETRO', text: 'Oxi lógico, dessa vez a taça é nossa! Com o Neymar em campo, os cara não tem nem chance!' },
        { type: 'dialogue', character: 'GUSTAVO', text: 'Imagina ganhar uma Copa dentro de casa! Ia ser histórico!' },
        { type: 'dialogue', character: 'NICOLY', text: 'Vocês estão muito confiantes, depois toma uma goleada e eu quero só ver!' },
        { type: 'dialogue', character: 'ANTHERO', text: 'Ah, para! O Brasil não perderia de goleada tipo seis ou sete gols nem se tentasse!' },

        { type: 'direction', text: 'VALLE olha para GABRIEL, faz uma expressão irônica e levanta as mãos fazendo o gesto do 67.' },
        { type: 'cue', cueIndex: 2 },

        { type: 'dialogue', character: 'GABRIEL', text: '(Segurando o riso) É... eu não teria tanta certeza disso, se vocês soubessem... O famoso 7x1 ainda vai deixar muita gente traumatizada!' },
        { type: 'dialogue', character: 'ANTHERO', text: 'Como assim?' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Digamos que vocês ainda vão conhecer um dos dias mais tristes da história do futebol brasileiro.' },
        { type: 'dialogue', character: 'ANTHERO', text: 'Pera aí... O BRASIL VAI PERDER?! E de 7 a 1 ainda??' },
        { type: 'dialogue', character: 'TODOS', text: 'O QUÊ?!' },
        { type: 'dialogue', character: 'MATEUS LOPES', text: '(Desconfiado) Pera, pera... quem são vocês dois mesmo? Desde que chegaram estão falando umas coisas muito estranhas!' },
        { type: 'dialogue', character: 'VALLE', text: 'Nós? Ah... somos encanadores! Viemos consertar um vazamento!' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Isso! Um vazamento na... máquina do tempo! Quer dizer, no encanamento!' },
        { type: 'dialogue', character: 'PIETRO', text: 'KKKKK, que encanador estranho!' },

        { type: 'dialogue', character: 'GABI X', text: 'Esquece isso, eles só estão tentando chamar atenção. Olha isso! (Mostra o braço.) Comprei a base para fazer as pulseirinhas de elástico. Eu tenho um monte, só que minha mãe tá louca com tanta borrachinha pelo chão!' },
        { type: 'dialogue', character: 'NICOLY', text: 'Nossa que bagunça kkk, meu Hand Spinner não dá trabalho, acho que ter um é quase lei né! Até na sala eu brinco, só pra relaxar!' },
        { type: 'direction', text: 'Alguém pega um spinner e começa a girar.' },

        { type: 'dialogue', character: 'DOMINGUES', text: 'E o desafio da garrafa! Quero ver quem vai mitar.' },
        { type: 'dialogue', character: 'THIAGO', text: 'Opa, eu!' },
        { type: 'direction', text: 'Thiago tenta fazer o Bottle Flip e erra. Todos riem. Se ele acertar, comemoramos fazendo o dab.' },
        { type: 'cue', cueIndex: 3 },
        { type: 'direction', text: '*Jonas coloque a música do desafio da garrafa, se acertar você deixa tocar, se errar você corta e coloca música de fracasso' },
        { type: 'cue', cueIndex: 4 },

        { type: 'dialogue', character: 'GUSTAVO', text: 'KKKKK, nossa você é bizarro mano, muito feio filho!' },

        { type: 'dialogue', character: 'GABI X', text: 'Gente, chega! Vamos logo! Daqui a pouco começa Carrosel!' },
        { type: 'dialogue', character: 'THIAGO', text: 'Isso, bora que saiu vídeo novo no canal do Rezende!' },

        { type: 'direction', text: 'Começa a tocar "Camaro Amarelo", de Munhoz & Mariano, ou "Ai Se Eu Te Pego", de Michel Teló. Os personagens saem dançando e fazendo a coreografia.' },
        { type: 'cue', cueIndex: 5 },

        { type: 'dialogue', character: 'GABRIEL', text: '(Aliviado) Ufa! Essa foi por pouco!' },
        { type: 'dialogue', character: 'VALLE', text: 'Ainda bem que ninguém perguntou de onde a gente veio. Acho que já falamos demais!' },
        { type: 'dialogue', character: 'GABRIEL', text: 'Pelo menos conseguimos sair sem estragar a infância de ninguém!' },
        { type: 'direction', text: 'Os dois saem de cena enquanto toca Camaro Amarelo.' },
        { type: 'cue', cueIndex: 6 },
      ],
      cues: [
        { id: 'cue-11', label: '11° SOM - SHOW DAS PODEROSAS (ANITTA)', file: 'audio/11-show-das-poderosas.mp3', description: 'Anitta – Show das Poderosas (abaixa gradualmente ao cortar)', fadeOut: true },
        { id: 'cue-12', label: '12° SOM - PASSINHO DO VOLANTE', file: 'audio/12-passinho-do-volante.mp3', description: 'Passinho do Volante (abaixa gradualmente ao cortar)', fadeOut: true },
        { id: 'cue-13', label: '13° SOM - AURA', file: 'audio/13-aura.mp3', description: 'Som de Aura (gesto do 67)', fadeOut: true, optional: true, optionalHint: 'Opcional para o gesto do 67. → para pular.' },
        { id: 'cue-14', label: '14° SOM - WATER BOTTLE CHALLENGE', file: 'audio/14-water-bottle-challenge.mp3', description: 'Música do desafio da garrafa' },
        { id: 'cue-14-1', label: '14.1° SOM - FAAH (FRACASSO)', file: 'audio/14.1-faah.mp3', description: 'Som de fracasso – usar se errar o Bottle Flip', optional: true, optionalHint: 'Usar só se ERRAR o Bottle Flip. → para pular se acertar.' },
        { id: 'cue-15', label: '15° SOM - CAMARO AMARELO', file: 'audio/15-camaro-amarelo.mp3', description: 'Munhoz & Mariano – Camaro Amarelo (saída)', fadeOut: true },
        { id: 'cue-16', label: '16° SOM - MACHINE SOUND', file: 'audio/16-machine-sound.mp3', description: 'Transição final da Cena 5' },
      ]
    },

    // ============ CENA 6 – PAUSA ============
    {
      id: 'cena-6',
      number: 6,
      title: 'PAUSA – GABRIEL E VALLE',
      meta: '',
      description: 'Gabriel e Valle fazem uma pausa antes das apresentações.',
      lines: [
        { type: 'dialogue', character: 'VALLE', text: 'É, VAMOS FAZER UMA PAUSA.' },
        { type: 'dialogue', character: 'GABRIEL', text: 'É, ACHO QUE TÁ NA HORA DA GENTE PARAR DE BRINCAR COM ISSO.' },
      ],
      cues: []
    },

    // ============ CENA 7 – DISCURSO ============
    {
      id: 'cena-7',
      number: 7,
      title: 'DISCURSO DE GABI DOMINGUES E MADUH',
      meta: '',
      description: 'Discurso de Gabi Domingues e Maduh, seguido de apresentações de outras turmas.',
      lines: [
        { type: 'direction', text: 'Discurso de Gabi Domingues e Maduh.' },
        { type: 'direction', text: 'Apresentações de outras turmas.' },
      ],
      cues: []
    },

    // ============ CENA 8 – FINAL ============
    {
      id: 'cena-8',
      number: 8,
      title: 'FINAL – TEMPO PERDIDO',
      meta: 'Todos em cena',
      description: 'Encerramento com todos em cena, música "Tempo Perdido" – Legião Urbana.',
      lines: [
        { type: 'cue', cueIndex: 0 },
        { type: 'direction', text: 'Todos em cena com a música "Tempo Perdido" – Legião Urbana.' },
      ],
      cues: [
        { id: 'cue-final', label: 'FINAL - TEMPO PERDIDO', file: 'audio/tempo-perdido.mp3', description: 'Legião Urbana – Tempo Perdido (encerramento)', fadeOut: true },
      ]
    },
  ],

  // ============ APRESENTAÇÕES MUSICAIS (FORA DO ROTEIRO) ============
  presentations: [
    {
      id: 'apres-9a',
      turma: '9° ANO A',
      items: [
        { id: '9a-2', name: 'Marília', type: 'Cantar e dançar', duration: '', file: '' },
      ]
    },
    {
      id: 'apres-1ano',
      turma: '1° ANO',
      items: [
        { id: '1a-1', name: 'Apresentações musicais do 1° Ano', type: 'Música / Dança', duration: '5–10 min', file: '' },
      ]
    },
    {
      id: 'apres-2ano',
      turma: '2° ANO',
      items: [
        { id: '2a-1', name: 'Apresentações musicais do 2° Ano', type: 'Música / Dança', duration: '5–10 min', file: '' },
      ]
    },
    {
      id: 'apres-3a',
      turma: '3° ANO A',
      items: [
        { id: '3a-1', name: 'Apresentações musicais do 3° Ano A', type: 'Música / Dança', duration: '5–10 min', file: '' },
      ]
    },
    {
      id: 'apres-3b',
      turma: '3° ANO B',
      items: [
        { id: '3b-1', name: 'Andrew, Rafael F. e Matheus', type: 'Música', duration: '4 min', file: '' },
        { id: '3b-3', name: 'Heloísa', type: 'Violão', duration: '', file: '' },
        { id: '3b-6', name: 'João Miguel', type: 'Dança', duration: '5 min', file: '' },
        { id: '3b-9', name: 'Sarah', type: 'Cantar', duration: '', file: '' },
      ]
    },
  ]
};

// ========== BUILD FLAT CUE LIST ==========
function buildFlatCueList() {
  const list = [];
  for (const scene of SHOW_DATA.scenes) {
    for (const cue of scene.cues) {
      list.push({ ...cue, sceneId: scene.id, sceneTitle: scene.title });
    }
  }
  return list;
}

// ========== APP STATE ==========
const state = {
  activeTab: 'roteiro',
  currentCueIndex: 0,
  isPlaying: false,
  isFading: false,
  fadeInterval: null,
  cues: buildFlatCueList(),
  audioElements: {},
  presAudioElements: {},
  activePresAudio: null,
  activePresId: null,
  volume: 0.8,
  activeAudio: null,
};

// ========== PRELOAD AUDIO ==========
function preloadAudio() {
  for (const cue of state.cues) {
    if (cue.missing) continue;
    const audio = new Audio(cue.file);
    audio.preload = 'auto';
    audio.volume = state.volume;
    audio.addEventListener('ended', () => {
      onAudioEnded(cue.id);
    });
    audio.addEventListener('timeupdate', () => {
      updateProgress(audio);
    });
    audio.addEventListener('error', (e) => {
      console.warn(`Erro ao carregar áudio: ${cue.file}`, e);
    });
    state.audioElements[cue.id] = audio;
  }
}

// ========== RENDER ROTEIRO ==========
function renderRoteiro() {
  const container = document.getElementById('roteiro-container');
  container.innerHTML = '';

  for (const scene of SHOW_DATA.scenes) {
    const block = document.createElement('div');
    block.className = 'scene-block';
    block.id = `scene-${scene.id}`;

    const header = document.createElement('div');
    header.className = 'scene-header';
    header.innerHTML = `
      <h2>
        <span class="scene-number">${scene.number}</span>
        CENA ${scene.number} – ${scene.title}
      </h2>
      <div style="display:flex;align-items:center;gap:12px;">
        <span class="scene-meta">${scene.meta || ''}</span>
        <span class="toggle-icon">▼</span>
      </div>
    `;
    header.addEventListener('click', () => {
      block.classList.toggle('collapsed');
    });

    const body = document.createElement('div');
    body.className = 'scene-body';

    if (scene.description) {
      const desc = document.createElement('div');
      desc.className = 'scene-description';
      desc.textContent = scene.description;
      body.appendChild(desc);
    }

    for (const line of scene.lines) {
      if (line.type === 'direction') {
        const div = document.createElement('div');
        div.className = 'script-line direction';
        div.textContent = `(${line.text})`;
        body.appendChild(div);
      } else if (line.type === 'dialogue') {
        const div = document.createElement('div');
        div.className = 'script-line dialogue';
        div.innerHTML = `<span class="character-name">${line.character}:</span> <span class="line-text">${line.text}</span>`;
        body.appendChild(div);
      } else if (line.type === 'cue') {
        const cue = scene.cues[line.cueIndex];
        if (cue) {
          const marker = document.createElement('div');
          marker.className = 'sound-cue-marker' + (cue.optional ? ' optional-cue' : '') + (cue.missing ? ' missing-cue' : '');
          marker.id = `marker-${cue.id}`;

          const optionalBadge = cue.optional
            ? `<span class="optional-badge">OPCIONAL</span>`
            : '';
          const fadeBadge = cue.fadeOut
            ? `<span class="fade-badge">🔉 FADE OUT</span>`
            : '';
          const missingBadge = cue.missing
            ? `<span class="missing-badge">⚠ ARQUIVO PENDENTE</span>`
            : '';
          const optionalHint = cue.optionalHint
            ? `<div class="cue-optional-hint">${cue.optionalHint}</div>`
            : '';

          marker.innerHTML = `
            <span class="cue-icon">🔊</span>
            <div class="cue-info">
              <div class="cue-label">${cue.label} ${optionalBadge} ${fadeBadge} ${missingBadge}</div>
              <div class="cue-filename">${cue.description || cue.file}</div>
              ${optionalHint}
            </div>
            <span class="cue-status-badge pending">Pendente</span>
          `;
          marker.addEventListener('click', () => {
            const globalIdx = state.cues.findIndex(c => c.id === cue.id);
            if (globalIdx !== -1) {
              jumpToCue(globalIdx);
            }
          });
          body.appendChild(marker);
        }
      }
    }

    block.appendChild(header);
    block.appendChild(body);
    container.appendChild(block);
  }
}

// ========== RENDER PRESENTATIONS (SEPARATED VIEW - MUSIC ONLY) ==========
function renderPresentations() {
  const container = document.getElementById('presentations-container');
  if (!container) return;

  container.innerHTML = `
    <div class="pres-section-header">
      <div>
        <h2>🎤 APRESENTAÇÕES COM MÚSICA (FORA DO ROTEIRO)</h2>
        <span class="pres-section-subtitle">Apenas apresentações que utilizam música — controle independente do roteiro teatral</span>
      </div>
      <button class="btn btn-primary" id="btn-stop-all-pres">⏹ Parar Som das Apresentações</button>
    </div>
    <div class="pres-grid" id="pres-grid"></div>
  `;

  const grid = document.getElementById('pres-grid');

  for (const pres of SHOW_DATA.presentations) {
    const card = document.createElement('div');
    card.className = 'pres-card';
    card.innerHTML = `
      <div class="pres-card-header">
        <span>${pres.turma}</span>
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:500;">${pres.items.length} apresentação(ões)</span>
      </div>
      <div class="pres-card-body"></div>
    `;

    const body = card.querySelector('.pres-card-body');

    for (const item of pres.items) {
      if (item.file && !state.presAudioElements[item.id]) {
        const audio = new Audio(item.file);
        audio.volume = state.volume;
        audio.addEventListener('ended', () => stopPresentationAudio());
        state.presAudioElements[item.id] = audio;
      }

      const row = document.createElement('div');
      row.className = 'pres-card-item' + (state.activePresId === item.id ? ' pres-playing' : '');
      row.id = `pres-item-${item.id}`;

      const hasAudio = Boolean(state.presAudioElements[item.id]);

      row.innerHTML = `
        <div class="pres-item-info">
          <span class="pres-item-name">${item.name}</span>
          <div class="pres-item-meta">
            ${item.type ? `<span class="pres-item-type">${item.type}</span>` : ''}
            ${item.duration ? `<span class="pres-item-duration">⏱ ${item.duration}</span>` : ''}
            <span class="pres-item-file" id="pres-file-${item.id}">${item.file ? `🎵 ${item.file}` : 'Sem áudio vinculado'}</span>
          </div>
        </div>
        <div class="pres-audio-actions">
          <button class="btn-pres-play" data-id="${item.id}" ${hasAudio ? '' : 'disabled style="opacity:0.4;cursor:not-allowed;"'} title="Tocar música desta apresentação">▶</button>
          <button class="btn-pres-stop" data-id="${item.id}" title="Parar música">⏹</button>
          <label class="btn-pres-upload" title="Carregar arquivo MP3/MP4 do computador">
            📂 Música
            <input type="file" accept="audio/*,video/mp4" data-id="${item.id}" style="display:none;">
          </label>
        </div>
      `;

      const playBtn = row.querySelector('.btn-pres-play');
      const stopBtn = row.querySelector('.btn-pres-stop');
      const fileInput = row.querySelector('input[type="file"]');

      playBtn.addEventListener('click', () => playPresentationAudio(item.id, item.name));
      stopBtn.addEventListener('click', () => stopPresentationAudio());
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        const audio = new Audio(url);
        audio.volume = state.volume;
        audio.addEventListener('ended', () => stopPresentationAudio());
        state.presAudioElements[item.id] = audio;
        item.file = file.name;
        renderPresentations();
        showToast(`🎵 Áudio carregado: ${file.name}`, 'success');
      });

      body.appendChild(row);
    }

    grid.appendChild(card);
  }

  document.getElementById('btn-stop-all-pres')?.addEventListener('click', stopPresentationAudio);
}

function playPresentationAudio(id, label) {
  const audio = state.presAudioElements[id];
  if (!audio) {
    showToast('Carregue um arquivo de áudio primeiro!', 'warning');
    return;
  }
  stopAllAudio();
  stopPresentationAudio();

  audio.currentTime = 0;
  audio.volume = state.volume;
  audio.play().then(() => {
    state.activePresAudio = audio;
    state.activePresId = id;
    renderPresentations();
    showToast(`🎤 Tocando: ${label}`, 'success');
  }).catch(err => {
    console.error('Erro ao tocar apresentação:', err);
    showToast('Erro ao reproduzir áudio da apresentação.', 'warning');
  });
}

function stopPresentationAudio() {
  if (state.activePresAudio) {
    state.activePresAudio.pause();
    state.activePresAudio.currentTime = 0;
  }
  state.activePresAudio = null;
  state.activePresId = null;
  renderPresentations();
}

function switchTab(tab) {
  state.activeTab = tab;
  const viewRoteiro = document.getElementById('view-roteiro');
  const viewPres = document.getElementById('view-apresentacoes');
  const tabRoteiro = document.getElementById('tab-roteiro');
  const tabPres = document.getElementById('tab-apresentacoes');
  const spacebarHint = document.getElementById('spacebar-hint');
  const toggleBtn = document.getElementById('toggle-panel');

  if (tab === 'apresentacoes') {
    viewRoteiro?.classList.add('hidden');
    viewPres?.classList.remove('hidden');
    tabRoteiro?.classList.remove('active');
    tabPres?.classList.add('active');
    spacebarHint?.classList.add('hidden');
    toggleBtn?.classList.add('hidden');
  } else {
    viewRoteiro?.classList.remove('hidden');
    viewPres?.classList.add('hidden');
    tabRoteiro?.classList.add('active');
    tabPres?.classList.remove('active');
    spacebarHint?.classList.remove('hidden');
    toggleBtn?.classList.remove('hidden');
  }
}

// ========== RENDER CUE LIST (SIDEBAR) ==========
function renderCueList() {
  const container = document.getElementById('cue-list-container');
  container.innerHTML = '';

  state.cues.forEach((cue, index) => {
    const item = document.createElement('div');
    item.className = 'cue-list-item';
    item.id = `cue-item-${index}`;

    if (cue.optional) item.classList.add('optional-item');
    if (cue.missing) item.classList.add('missing-item');

    let statusIcon = '';
    if (index < state.currentCueIndex) {
      item.classList.add('played');
      statusIcon = '✓';
    } else if (index === state.currentCueIndex) {
      if (state.isPlaying) {
        item.classList.add('playing-item');
        statusIcon = state.isFading ? '🔉' : '♪';
      } else {
        item.classList.add('current');
        statusIcon = '►';
      }
    }

    const optTag = cue.optional ? '<span class="optional-tag">OPC</span>' : '';
    const fadeTag = cue.fadeOut ? '<span class="fade-tag">FADE</span>' : '';
    const missingTag = cue.missing ? '<span class="missing-tag">⚠</span>' : '';

    item.innerHTML = `
      <span class="cue-number">${index + 1}</span>
      <div class="cue-list-info">
        <div class="cue-list-name">${cue.label} ${optTag} ${fadeTag} ${missingTag}</div>
        <div class="cue-list-scene">Cena: ${cue.sceneTitle}</div>
      </div>
      <span class="cue-list-status">${statusIcon}</span>
    `;

    item.addEventListener('click', () => jumpToCue(index));
    container.appendChild(item);
  });
}

// ========== UPDATE UI STATE ==========
function updateUI() {
  renderCueList();
  updateMarkers();
  updateNowPlaying();
  updateSpacebarHint();
  updateStatusBar();
  highlightActiveScene();
}

function updateMarkers() {
  state.cues.forEach((cue, index) => {
    const marker = document.getElementById(`marker-${cue.id}`);
    if (!marker) return;

    marker.className = 'sound-cue-marker'
      + (cue.optional ? ' optional-cue' : '')
      + (cue.missing ? ' missing-cue' : '');

    const badge = marker.querySelector('.cue-status-badge');
    const icon = marker.querySelector('.cue-icon');

    if (index < state.currentCueIndex) {
      marker.classList.add('cue-done');
      if (badge) { badge.className = 'cue-status-badge done'; badge.textContent = 'Tocado'; }
      if (icon) icon.textContent = '✅';
    } else if (index === state.currentCueIndex) {
      if (state.isPlaying) {
        marker.classList.add('cue-playing');
        if (badge) {
          badge.className = 'cue-status-badge playing';
          badge.textContent = state.isFading ? 'Abaixando...' : 'Tocando';
        }
        if (icon) icon.textContent = state.isFading ? '🔉' : '🎵';
      } else {
        marker.classList.add('cue-ready');
        if (badge) {
          badge.className = 'cue-status-badge ready';
          badge.textContent = cue.optional ? 'Opcional – Pronto' : 'Próximo';
        }
        if (icon) icon.textContent = '⏳';
      }
    } else {
      if (badge) { badge.className = 'cue-status-badge pending'; badge.textContent = 'Pendente'; }
      if (icon) icon.textContent = '🔊';
    }
  });
}

function updateNowPlaying() {
  const npTitle = document.getElementById('np-title');
  const npScene = document.getElementById('np-scene');
  const npContainer = document.getElementById('now-playing');

  if (state.isPlaying && state.currentCueIndex < state.cues.length) {
    const cue = state.cues[state.currentCueIndex];
    npTitle.textContent = (state.isFading ? '🔉 Abaixa: ' : '') + cue.label;
    npTitle.classList.remove('np-idle');
    npScene.textContent = cue.sceneTitle;
    npContainer.classList.add('is-playing');
  } else if (state.currentCueIndex < state.cues.length) {
    const cue = state.cues[state.currentCueIndex];
    const prefix = cue.optional ? '(Opcional) ' : '';
    npTitle.textContent = `Próximo: ${prefix}${cue.label}`;
    npTitle.classList.add('np-idle');
    npScene.textContent = cue.sceneTitle;
    npContainer.classList.remove('is-playing');
  } else {
    npTitle.textContent = 'Show finalizado!';
    npTitle.classList.add('np-idle');
    npScene.textContent = '';
    npContainer.classList.remove('is-playing');
  }
}

function updateSpacebarHint() {
  const hint = document.getElementById('spacebar-hint');
  const nextSound = hint.querySelector('.next-sound');
  const hintText = hint.querySelector('.hint-text');

  if (state.isPlaying) {
    const currentCue = state.cues[state.currentCueIndex];
    if (state.isFading) {
      hintText.innerHTML = '🔉 Abaixando volume gradualmente... <kbd class="hint-kbd">Esc</kbd> corte imediato';
      nextSound.textContent = '';
    } else if (currentCue && currentCue.fadeOut) {
      hintText.innerHTML = 'Tocando... <kbd class="hint-kbd">Espaço</kbd> abaixar gradual (Fade) · <kbd class="hint-kbd">Esc</kbd> corte seco';
      nextSound.textContent = '';
    } else {
      hintText.innerHTML = 'Tocando... <kbd class="hint-kbd">Esc</kbd> parar · <kbd class="hint-kbd">F</kbd> fade out · <kbd class="hint-kbd">Espaço</kbd> cortar e avançar';
      nextSound.textContent = '';
    }
    hint.style.borderColor = 'var(--success)';
    hint.style.boxShadow = '0 0 20px var(--success-glow)';
  } else if (state.currentCueIndex < state.cues.length) {
    const cue = state.cues[state.currentCueIndex];
    if (cue.optional) {
      hintText.innerHTML = '<kbd class="hint-kbd">Espaço</kbd> tocar (opcional) · <kbd class="hint-kbd">→</kbd> pular: ';
      nextSound.textContent = cue.label;
      hint.style.borderColor = 'var(--warning)';
      hint.style.boxShadow = '0 0 20px var(--warning-glow)';
    } else if (cue.missing) {
      hintText.innerHTML = '⚠ Arquivo pendente · <kbd class="hint-kbd">→</kbd> pular: ';
      nextSound.textContent = cue.label;
      hint.style.borderColor = '#ff6b6b';
      hint.style.boxShadow = '0 0 20px rgba(255,107,107,0.3)';
    } else {
      hintText.innerHTML = '<kbd class="hint-kbd">Espaço</kbd> para tocar: ';
      nextSound.textContent = cue.label;
      hint.style.borderColor = 'var(--accent)';
      hint.style.boxShadow = '0 0 20px var(--accent-glow)';
    }
  } else {
    hintText.innerHTML = 'Show finalizado! ';
    nextSound.textContent = 'Pressione para reiniciar';
    hint.style.borderColor = 'var(--text-muted)';
    hint.style.boxShadow = 'none';
  }
}

function updateStatusBar() {
  const cueCounter = document.getElementById('status-cue-counter');
  const statusState = document.getElementById('status-state');

  cueCounter.textContent = `${Math.min(state.currentCueIndex + 1, state.cues.length)} / ${state.cues.length}`;

  if (state.isPlaying) {
    statusState.textContent = state.isFading ? 'Fade Out...' : 'Tocando';
    statusState.className = 'status-value active';
  } else if (state.currentCueIndex < state.cues.length) {
    const cue = state.cues[state.currentCueIndex];
    statusState.textContent = cue.optional ? 'Opcional' : 'Aguardando';
    statusState.className = 'status-value waiting';
  } else {
    statusState.textContent = 'Finalizado';
    statusState.className = 'status-value';
  }
}

function highlightActiveScene() {
  document.querySelectorAll('.scene-block').forEach(b => b.classList.remove('active-scene'));

  if (state.currentCueIndex < state.cues.length) {
    const cue = state.cues[state.currentCueIndex];
    const sceneBlock = document.getElementById(`scene-${cue.sceneId}`);
    if (sceneBlock) {
      sceneBlock.classList.add('active-scene');
      sceneBlock.classList.remove('collapsed');
    }
  }
}

// ========== AUDIO PROGRESS ==========
function updateProgress(audio) {
  if (!audio || !audio.duration) return;
  const fill = document.getElementById('progress-fill');
  const timeCurrent = document.getElementById('time-current');
  const timeTotal = document.getElementById('time-total');

  const pct = (audio.currentTime / audio.duration) * 100;
  fill.style.width = `${pct}%`;
  timeCurrent.textContent = formatTime(audio.currentTime);
  timeTotal.textContent = formatTime(audio.duration);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ========== PLAY / STOP / FADE / NAVIGATE ==========
function clearFadeTimer() {
  if (state.fadeInterval) {
    clearInterval(state.fadeInterval);
    state.fadeInterval = null;
  }
  state.isFading = false;
}

function playCurrentCue() {
  if (state.currentCueIndex >= state.cues.length) {
    resetAll();
    return;
  }

  const cue = state.cues[state.currentCueIndex];

  if (cue.missing) {
    showToast(`⚠ Arquivo pendente: ${cue.file} — Pulando...`, 'warning');
    advanceCue();
    return;
  }

  const audio = state.audioElements[cue.id];

  if (!audio) {
    showToast(`Áudio não encontrado: ${cue.file}`, 'warning');
    advanceCue();
    return;
  }

  stopAllAudio();

  audio.currentTime = 0;
  audio.volume = state.volume;
  audio.play().then(() => {
    state.isPlaying = true;
    state.activeAudio = audio;
    updateUI();
    const tag = cue.optional ? '(Opcional) ' : '';
    showToast(`▶ ${tag}${cue.label}`, 'success');

    const marker = document.getElementById(`marker-${cue.id}`);
    if (marker) {
      marker.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }).catch(err => {
    console.error('Erro ao reproduzir:', err);
    showToast(`Erro ao tocar: ${cue.label}`, 'warning');
  });
}

function fadeOutAndAdvance(durationMs = 1800) {
  if (!state.activeAudio || !state.isPlaying) return;
  if (state.isFading) return;

  const audio = state.activeAudio;
  const startVolume = audio.volume;
  const steps = 30;
  const stepTime = durationMs / steps;
  let currentStep = 0;

  state.isFading = true;
  updateUI();
  showToast('🔉 Abaixando volume gradualmente...', 'info');

  state.fadeInterval = setInterval(() => {
    currentStep++;
    const nextVol = Math.max(0, startVolume * (1 - currentStep / steps));
    audio.volume = nextVol;

    if (currentStep >= steps || nextVol <= 0.01) {
      clearFadeTimer();
      audio.pause();
      audio.currentTime = 0;
      audio.volume = state.volume;
      state.isPlaying = false;
      state.activeAudio = null;
      advanceCue();
    }
  }, stepTime);
}

function stopAllAudio() {
  clearFadeTimer();
  for (const audio of Object.values(state.audioElements)) {
    audio.pause();
    audio.currentTime = 0;
    audio.volume = state.volume;
  }
  state.isPlaying = false;
  state.activeAudio = null;

  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = '0%';
}

function stopCurrentAudio() {
  clearFadeTimer();
  if (state.activeAudio) {
    state.activeAudio.pause();
    state.activeAudio.currentTime = 0;
    state.activeAudio.volume = state.volume;
    state.isPlaying = false;
    state.activeAudio = null;
    updateUI();
    showToast('⏹ Parado', 'info');
  }
}

function onAudioEnded(cueId) {
  clearFadeTimer();
  state.isPlaying = false;
  state.activeAudio = null;
  advanceCue();
}

function advanceCue() {
  if (state.currentCueIndex < state.cues.length) {
    state.currentCueIndex++;
  }
  updateUI();
}

function skipOptionalCue() {
  if (state.currentCueIndex < state.cues.length) {
    const cue = state.cues[state.currentCueIndex];
    if (cue.optional || cue.missing) {
      showToast(`⏭ Pulado: ${cue.label}`, 'info');
    }
    stopAllAudio();
    advanceCue();
  }
}

function jumpToCue(index) {
  stopAllAudio();
  state.currentCueIndex = index;
  state.isPlaying = false;
  updateUI();
  showToast(`Pulou para: ${state.cues[index].label}`, 'info');
}

function goToPrevCue() {
  stopAllAudio();
  if (state.currentCueIndex > 0) {
    state.currentCueIndex--;
  }
  updateUI();
}

function goToNextCue() {
  stopAllAudio();
  advanceCue();
}

function resetAll() {
  stopAllAudio();
  state.currentCueIndex = 0;
  state.isPlaying = false;
  updateUI();
  showToast('🔄 Resetado ao início', 'info');
}

// ========== VOLUME ==========
function setVolume(value) {
  state.volume = value;
  for (const audio of Object.values(state.audioElements)) {
    if (!state.isFading || audio !== state.activeAudio) {
      audio.volume = value;
    }
  }
  for (const audio of Object.values(state.presAudioElements)) {
    audio.volume = value;
  }
  document.getElementById('vol-value').textContent = `${Math.round(value * 100)}%`;
}

// ========== TOAST ==========
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ========== KEYBOARD HANDLER ==========
document.addEventListener('keydown', (e) => {
  // Escape = stop current audio immediately (roteiro or presentation)
  if (e.code === 'Escape') {
    e.preventDefault();
    stopCurrentAudio();
    stopPresentationAudio();
    return;
  }

  // Cue shortcuts only active in Roteiro tab
  if (state.activeTab !== 'roteiro') return;

  // Spacebar = play next cue / fade or cut+advance if playing
  if (e.code === 'Space') {
    e.preventDefault();
    if (!state.isPlaying) {
      playCurrentCue();
    } else {
      const currentCue = state.cues[state.currentCueIndex];
      if (currentCue && currentCue.fadeOut) {
        fadeOutAndAdvance();
      } else {
        stopCurrentAudio();
        advanceCue();
      }
    }
  }

  // F = force fade out gradual on any playing audio
  if (e.code === 'KeyF' && !e.ctrlKey && !e.metaKey) {
    if (document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      fadeOutAndAdvance();
    }
  }

  // Arrow Right = skip / advance without playing
  if (e.code === 'ArrowRight') {
    e.preventDefault();
    skipOptionalCue();
  }

  // Arrow Left = previous cue
  if (e.code === 'ArrowLeft') {
    e.preventDefault();
    goToPrevCue();
  }

  // R = reset (only if not in input)
  if (e.code === 'KeyR' && !e.ctrlKey && !e.metaKey) {
    if (document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      resetAll();
    }
  }
});

// ========== PROGRESS BAR SEEK ==========
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      if (state.activeAudio && state.activeAudio.duration) {
        const rect = progressBar.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        state.activeAudio.currentTime = pct * state.activeAudio.duration;
      }
    });
  }
});

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  preloadAudio();
  renderRoteiro();
  renderPresentations();
  renderCueList();
  updateUI();

  document.getElementById('tab-roteiro')?.addEventListener('click', () => switchTab('roteiro'));
  document.getElementById('tab-apresentacoes')?.addEventListener('click', () => switchTab('apresentacoes'));

  const volSlider = document.getElementById('vol-slider');
  if (volSlider) {
    volSlider.addEventListener('input', (e) => {
      setVolume(parseFloat(e.target.value));
    });
  }

  document.getElementById('btn-prev')?.addEventListener('click', goToPrevCue);
  document.getElementById('btn-fade')?.addEventListener('click', () => fadeOutAndAdvance());
  document.getElementById('btn-stop')?.addEventListener('click', stopCurrentAudio);
  document.getElementById('btn-next')?.addEventListener('click', goToNextCue);
  document.getElementById('btn-reset')?.addEventListener('click', resetAll);

  document.getElementById('toggle-panel')?.addEventListener('click', () => {
    document.querySelector('.sound-panel')?.classList.toggle('open');
  });

  const optionalCount = state.cues.filter(c => c.optional).length;
  const missingCount = state.cues.filter(c => c.missing).length;
  console.log(`🎭 SHOWRAU 2026 - Sound Cue Controller carregado!`);
  console.log(`📋 ${state.cues.length} cues (${optionalCount} opcionais, ${missingCount} com arquivo pendente)`);
  console.log(`⌨️ Teclas: ESPAÇO=tocar/cortar | F=fade out | ESC=parar | ←→=navegar/pular | R=reset`);
});
