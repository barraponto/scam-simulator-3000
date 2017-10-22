const state = {
  messages: [
    {
      id: 1,
      flagged: false,
      read: false,
      name: 'dreamdad@hotdad.com',
      fase: '1',
      from: 'Papai',
      subject: 'Aumente seu Tênis',
      date: 'Out 10',
      tag: 'trusted',
      text: `Desculpa incomodar a sua rotina, mas eu preciso de um favor.
       Você sabe que eu morro de medo de comprar na internet desde aquela vez que a vó comprou os cogumelos errados pra colocar na sopa.
       Preciso de ajuda para comprar *TÊNIS NOVOS* para o *SEU IRMÃO*. Ele não para de crescer, o pé dele já chegou no tamanho *42*!
       E ele tem outra maratona este fim de semana. Maratonas de correr mesmo, não de ficar no computador fazendo videogames...
      Enfim, eu separei $250 reais para a compra, tudo que vc conseguir de desconto, pode ficar pra você.

      XOXO`,
    },
    {
      id: 2,
      flagged: false,
      read: false,
      name: 'Julio Gerente',
      fase: '1',
      from: 'JulioGerente@netxooz.com.br',
      subject: 'Promoção de Férias',
      date: 'Out 08',
      tag: 'promo',
      text: `Você não quer perder a nossa nova promoção!
      Você está perdendo seus tênis devido ao crescimento rapido da adolescência?
      Aumente seu tênis HOJE!!!
      Na troca do seu tênis antigo damos 25% de desconto na sua compra do mesmo modelo em tamanho maior. Isso mesmo 25% de desconto.
      Confira o regulamento da promoção no nosso site!
      www.netxooz.com.br/aumenteseutenis
      Curta nossa página no fakebook.

      Julio Gerente - Gerente de Marketing da Netxooz Enterprises.
      Netxooz LTDA.`,
    },
    {
      id: 3,
      flagged: false,
      read: false,
      name: 'amaguanda@yuppi.com.hk',
      fase: '1',
      from: 'Amaguanda',
      subject: 'CLIQUE AQUI e receba up two PRODUTOS TOTALMENTE FREE!!!',
      date: 'Out 10',
      tag: 'promo',
      text: `
      AQUI ESTÁ A 25% DE COUPON APENAS PARA UM MEMBRO VIP VALORADO!
      O código do cupom acabou em breve, por favor, conte-nos quais os produtos que você deseja, vamos buscá-los gratuitamente
      www.shoehero.com/pormo.exe`,
    },
    {
      id: 4,
      flagged: false,
      read: false,
      name: 'SAPATOSBARATOS@SAPATOS.kr',
      fase: '1',
      from: 'VENDAS@CAPSNUI.COM.BR',
      subject: 'FALTA APENAS 1 DIA PARA O FINAL DO SALDÃO DE CALÇADOS!!!!',
      date: 'Out 09',
      tag: 'promo',
      text: `VOCÊ PRECISA DE UM SAPATO NOVO?
            SEUS PROBLEMAS ACABARAM! CLIQUE AQUI PARA VER AS PROMOÇÕES MAIS QUENTES NO MUNDO DOS CALÇADOS
            www.SAPATOSBARATOS.kr
            É SAPATO PARA TODO LADO, VOCÊ TEM PÉS DE TAMANHOS DIFERENTES? OU SÓ UM PÉ? SEM PROBLEMAS.
            VENDEMOS PÉS SEPARADAMENTE!!!!
            VINDOS ESPECIALMENTE DA COREIA DO NORTE! COM OS MELHORES DESIGNERS DE SAPATOS.
            VOCÊ VAI SE ARREPENDER SE NÃO COMPRAR.
            OLHE PELA JANELA. ESTÁ VENDO SAPATOS? NÃO? ENTÃO FALTA SAPATOS EM SUA VIDA!
            COMPRE NOSSOS SAPATOS
            www.SAPATOSBARATOS.kr
            É SAPATO PARA DAR E VENDER
            DE TODOS OS TAMANHOS DE 40 ATÉ 42
            GOSTOU?
            KOREANGUY@SAPATOSBARATOS.KR`,
    },
    {
      id: 5,
      flagged: false,
      read: false,
      name: 'kolobus@kolobus.com',
      fase: '1',
      from: 'Kolobus',
      subject: 'Você não vai acreditar no TAMANHO dessa promoção!!',
      date: 'Set 09',
      tag: 'promo',
      text: `Você merece se dar um presente :D
      PROMOÇÃO NÃO CUMULATIVA. VÁLIDA SOMENTE PARA PRODUTOS VENDIDOS E ENTREGUES PELA KOLOBUS.
      EXCETO COMBOS, BICICLETAS, EQUIPAMENTO DE FITNESS, KIT FITNESS, JOGOS, GAMES, ELETRÔNICOS,
      CATEGORIA DE MONITORAMENTO ESPORTIVO, MONITORES CARDÍACOS, SUPLEMENTOS,
      GANHE MAIS, MEGA CHANCE, PRE-VENDA, COLLECTION, LANÇAMENTO.
      As ofertas anunciadas neste e-mail são válidas por 3 dias até as 23:59.
      Ganhe 20% de desconto em todos os produtos.
      Em compras acima de 230 reais ganhe um cupon de 100 reais em desconto em sapatos
      Parcele em até 10x, Pague com Boleto Bancário, Até 30 dias para trocas!

      Este e-mail é um aviso informativo e não significa que você está comprando este produto nem tenha feito uma reserva de compra deste item. As imagens encontradas no e-mail são meramente ilustrativas.
      O prazo para troca varia de acordo com o tipo de produto, para saber em qual prazo seu produto se aplica acesse nossa página de informações de troca.

      Grupo Kolobus
      Para esclarecer dúvidas ou enviar sugestões, acesse nossa Central de relacionamento.
      www.kolobus.com `,
    },
    {
      id: 6,
      flagged: false,
      read: false,
      name: 'cemboi@x90g5.rus.de',
      fase: '1',
      from: 'Gerente CEO Cemboi LTDA',
      subject: ' Deu a louca no gerente! 70% de desconto em toda loja de artigos esportivos!',
      date: 'Out 10',
      tag: 'promo',
      text: `COMPRA PREMIADA
        Basta se cadastrar no site, nas compras a partir de R$ 30,00 com seu cartão de crédito na
        Cemboi, você pode ganhar na hora prêmios instantâneos de R$ 300,00*,
        além de participar automaticamente do sorteio de 10 superprêmios de R$ 300 mil*
        no dia 28 de Junho. Participe Agora.
        Caso seje cliente dos Melhores Bancos você poderá se cadastrar e desfrutar de 60%
        de desconto em qualquer compra!
        Clique no botão abaixo e cadastre-se. `,
    },
    {
      id: 7,
      flagged: false,
      read: false,
      name: 'dreamdad@hotdad.com',
      from: 'Papai',
      subject: 'Orgulho da familia',
      fase: '2',
      date: 'Jan 07',
      tag: 'trusted',
      text: `FILHO! Tenho ótimas noticias!
      Seu irmão ganhou a competição e foi selecionado para a proxima maratona na Nigéria!
      A maratona vai ocorrer no dia 21 de Fev. Ele gostaria de chegar com 2 semanas de antecedência para poder se acostumar com o clima do país.
      Como você foi tão eficiente para comprar o tênis novo, eu achei que você poderia ajudar novamente com a compra da passagem aérea.
      A Empresa Ciano faz o vôo por $2.483 reais (só de ida). Estou separando $5.000 reais para você comprar as passagens do seu irmão.
      O dinheiro que sobrar é seu.

      Papai te ama.

      OBS: Eu tenho recebido uns emails estranhos de um Príncipe Nigeriano pedindo para eu fazer uma transferência para ele. Ele quer me dar 4 milhões
      como agradecimento!!!`,
    },
    {
      id: 8,
      flagged: false,
      read: false,
      name: 'ciano@cianoairlines.com',
      fase: '2',
      from: 'Ciano Marketing',
      subject: 'URGENTE, Vôo para Nigéria',
      date: 'Jan 15',
      tag: 'promo',
      text: `Carx Derci
      Feliz Natal e ano novo para você e sua familia

      Bom dia! Como estão as coisas? Eu preciso reservar sua o mais rápido possível
      Faltam dois assentos no aviao para Lagos - Nigéria.
      Como combinado o preço das passagens são $5.500 reais.

      Responda assim que ler o email.
      Atenciosamente,

      Ciano Turquesa,
      Chefe de relações públicas. `,
    },
    {
      id: 9,
      flagged: false,
      read: false,
      name: 'aird&d@gmail.com',
      fase: '2',
      from: 'AirD&D e você',
      subject: 'Descontos para suas passagens aéreas',
      date: 'Jan 21',
      tag: 'promo',
      text: `Caro consumidor,
      Venho por este email oferecer uma oferta imperdível
      Vôo para Lagos - Nigéria ida e volta por Reis 4.000
      O vôo parte de São Pablo aeroporto do Galeão.
      CLIQUE NO LINK ABAIXO e compre Hoje mesmo!

      AirD&D - Voe conosco,
      Eiki MilkShake.`,
    },
    {
      id: 10,
      flagged: false,
      read: false,
      name: 'Arline Airlines',
      fase: '2',
      from: 'Arline',
      subject: 'O céu é o limite',
      date: 'Fev 01',
      tag: 'promo',
      text: `Azur Blue está promovendo vários destinos.
       Azur está atualmente em serviço para 105 destinos e está operando as 138 aeronaves,
      por isso é a empresa mais completa e abrangente em todo o país. O papel da empresa é estimular viagens aéreas com brasileiros e atender a mais lugares.
      Para fazer mais pessoas viajar de avião, a empresa é baseada
      em uma combinação de qualidade de serviço e baixo preço e é atraente para os consumidores.
      Em relação à decolagem, a empresa ocupa 32% do mercado de aviação civil brasileira.
      Através do vôo para a capital do interior e as cidades, ofereceremos inovação na dinâmica do mercado,
      fornecendo um avião que oferece opções de entretenimento confortáveis e espaçosas e um serviço de bordo de alta qualidade.
      O Blue Promotion Ticket oferece garantia econômica de despesas de viagem, proporcionando peças confortáveis e confortáveis.
      Compre sua passagens para Nigéria em promoção!
      -ida 10 de Fev : 1.300 reais
      -volta 28 de Fev : 1.500 reais
      Promoção válida até 05 de Fev
      Confira o site arlineairlines.com.br
      `,
    },
    {
      id: 11,
      flagged: false,
      read: false,
      name: 'sky@hskynet.com',
      fase: '2',
      from: 'Skynet Intercâmbio',
      subject: 'Intercâmbio - Faculdade de Direito Nigéria',
      date: 'Jan 28',
      tag: 'promo',
      text: `
      Com o objetivo de fornecer ferramentas para atuarem profissionalmente como interlocutores estrangeiros e no ambiente jurídico internacional.
      Utilizando-se de métodos como o vocabulário, gramática, estilo e conceitos do idioma Inglês e de como eles são usados por profissionais
      da área jurídica, o curso irá orientar os alunos na teoria e em visitas práticas.
      Desenvolvimento das habilidades orais através de discussões em classe e exercícios aplicados para treino da escrita, própria do meio legal.
      Disponível também curso de Inglês Geral (nível iniciante a intermediário) com acompanhamento às visitas Guiadas.
       Duração:
      • 2 semanas.
       Datas:
      • Data de saída 07/02/2017.
      • Data de retorno 22/02/2017

       Pacote Inclui:
      • 2 Semanas de curso voltado  para área de Direito - Legal English Advanced Elective;
      • Matrícula;
      • Material didático;
      • Acomodação;
      • Transfer do aeroporto;
      • Seguro Saúde;
      • Certificados;
      • Visitas guiadas a:
      - Suprema Corte;
      - Tribunal de Apelações Distrito de Lagos ;
      - Universidade Moshood Abiola;
       Acrescentar:

      • Passagem Aérea + taxas;
      • Custos com documentação necessária (passaporte e vistos);
      • Despesas de alimentação.
       Investimento:
      • Taxa Administrativa R$ 160,00;
      • Pacote R$2.475,00;*
      *Verifique formas de parcelamento e condições especiais

      Skynet - Intercâmbio.
      `,
    },
    {
      id: 12,
      flagged: false,
      read: false,
      name: 'PrinceAlyusi@nigeriamail.com',
      fase: '2',
      from: 'Príncipe Alyusi Islassis',
      subject: 'Nigéria National Petroleum Company',
      date: 'Fev 05',
      tag: 'promo',
      text: `Fui convidado pela Nigéria National Petroleum Company para entrar em contato com você para obter ajuda na resolução de um assunto.
       A Nigerian National Petroleum Company concluiu recentemente um grande número de contratos de exploração de petróleo na região do Sub-Sahara.
       Os contratos produziram imediatamente fundos equivalentes a US $ 40.000.000.
       A Nigéria National Petroleum Company está desejando a exploração de petróleo em outras partes do mundo, no entanto,
       devido a certas regulamentações do governo da Nigéria, é incapaz de transferir esses fundos para outra região.

       Você solicita assistência como cidadão não-nigeriano para ajudar a Nigerian National Petroleum Company,
       e também o Banco Central da Nigéria, a retirar esses fundos da Nigéria. Se os fundos puderem ser transferidos para o seu nome,
       na sua conta do Brasil, você pode encaminhar os fundos, conforme indicado pela Nigéria National Petroleum Company.
       Em troca de seus serviços de atendimento, a Nigéria National Petroleum Company concordaria em permitir que você mantenha 10%,
       ou US $ 4 milhões desse montante.

      No entanto, para ser um cessionário legítimo desses dinheiros de acordo com a lei nigeriana,
      você deve atualmente ser um depositante de pelo menos R$ 100.000 em um banco nigeriano que é regulado pelo Banco Central da Nigéria.

      Se pudermos nos ajudar, seremos muito gratos. Sugerimos que nos conheça pessoalmente em Lagos e que, durante a sua visita,
      apresentei-vos aos representantes da Nigerian National Petroleum Company, bem como a alguns funcionários do Banco Central da Nigéria.

      Por favor, ligue-me o mais cedo possível em 18-467-4975.
      O tempo é essencial na matéria;
      muito rapidamente, o governo da Nigéria perceberá que o Banco Central está mantendo
      este montante em depósito e tentando cobrar certos impostos depositários sobre ele.

      Sinceramente,

      Príncipe Alyusi Islassis`,
    },
    {
      id: 13,
      flagged: false,
      read: false,
      name: 'nepalairline@gmail.com',
      fase: '2',
      from: 'Nepal Evereste Airlines',
      subject: 'Voe mais alto que o Evereste com a Nepal Airlines ',
      date: 'jan 10',
      tag: 'promo',
      text: `
      Devido a recentes pesquisas de Marketing escolhemos você para uma promoção especial de inicio de ano!
      A Nepal Evereste Airlines oferece um desconto de 20% nas passagens internacionais saindo de São Paulo.
      Promoção válidas para compras até 01/Fev.
      Passagens válidas para o mês de Fevereiro
      Seguem os valores mais desejados pelos nossos clientes (ida e volta).
      Estados Unidos - R$ 2.450
      Armenia - R$ 3.567
      Nigéria - R$ 6.224
      Egito - R$ 5.760
      Usbesquitão - R$ 5.550
      Bolívia - R$ 1.240
      Nícaragua - R$ 7.500
      Estônia - R$ 6.789
      Rússia - R$ 5.666
      Zimbabue - R$ 4.631

      Atenciosamente,
      Evereste Airlines`,
    },
    {
      id: 14,
      flagged: false,
      read: false,
      name: 'alice@wonderland.com',
      fase: '2',
      from: 'Mussum',
      subject: 'Cacilds',
      date: 'Jan 32',
      tag: 'promo',
      text: `Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Praesent vel viverra nisi.
       Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Manduma pindureta quium dia nois paga.

       Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
       Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

       In elementis mé pra quem é amistosis quis leo. Copo furadis é disculpa de bebadis, arcu quam euismod magna.
       Suco de cevadiss deixa as pessoas mais interessantis. Leite de capivaris, leite de mula manquis sem cabeça.

       Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
       Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
       Quem num gosta di mé, boa gentis num é.

       Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Posuere libero varius.
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Quem num gosta di mim que vai caçá sua turmis!`,
    },
    {
      id: 15,
      flagged: false,
      read: false,
      name: 'passagensbaratas@trembom.com',
      fase: '2',
      from: 'Passagens baratas',
      subject: 'Compre sua passagem hoje!',
      date: 'Fev 04',
      tag: 'promo',
      text: `Os interessados em viajar durante as férias de Fevereiro já podem adquirir suas passagens.
       Com a venda antecipada de passagens disponibilizada pela Vale,
       é possível adquirir os bilhetes de viagem com até 60 dias de antecedência da data do passeio e,
       assim, programa-lo de forma mais tranquila e evitar transtornos.

       Em julho, devido ao recesso escolar, a procura maior por passagens de trem se dá na segunda quinzena e,
       dependendo da procura, a quantidade de carros de passagens será ampliada.
       A compra antecipada pode ser feita nas estações ao longo da Estrada de Ferro Vitória a Minas,
       nos pontos de venda disponibilizados pela Vale em diferentes cidades por onde a linha férrea passa e, também, no site do Trem de Passageiros.`,
    },
    {
      id: 16,
      flagged: false,
      read: false,
      name: 'wasabi-jpn@airnippon.jpn',
      fase: '2',
      from: 'Nico Nico Douga',
      subject: 'IKIMASU!',
      date: 'Fev 01',
      tag: 'promo',
      text: `けんめい： アポイントメントのお願ねがい
      本文ほんぶん：
      株式会社かぶしきがいしゃワサビ石いし田だ様さま

      いつもお世話せわになります。
      合同会社ごうどうがいしゃ 暖だんの松本まつもとです。

      大変たいへんお待またせいたしましたが、
      先日せんじつご依い頼らい頂いただいた見み積つもり書しょが完成かんせいいたしました。
      何点なんてんか直ちょく接せつご説明せつめいしたいところがありまして、
      よろしければ下記かきの日程にっていで少すこしお時じ間かんを頂いただけないでしょうか。

      4し月がつ1日ついたち 9時くじ～12じゅうに時じ
      4し月がつ2日ふつか13じゅうさん時じ～17じゅうなな時じ
      4し月がつ3日みっか10じゅう時じ～17じゅうなな時じ

      お忙いそがしいところ恐縮きょうしゅくですが、ご調ちょう整せいを頂いただけますと幸さいわいです。

      以い上じょう、ご確認かくにんをお願ねがいいたします。

      ―――――――――――――――――
      合同会社ごうどうがいしゃ 暖だん松本まつもと段だん
      長崎県島原ながさきけんしまばら市し本光ほんこう寺じ町まち 3296-3
      TEL: +81-99-9999-9999
      Email: info@wasabi-jpn.com
      ―――――――――――――――――`,
    },
    {
      id: 17,
      flagged: false,
      read: false,
      name: 'dreamdad@hotdad.com',
      fase: '3',
      from: 'Papai',
      subject: 'É Campeão!!!!!',
      date: 'Fev 22',
      tag: 'trusted',
      text: ` Seu irmão é o campeão!!!!
        A familia está tão orgulhosa! Nosso pequeno fez o seu melhor e mostrou para o mundo todo seu potencial.
        Ele vai receber um prêmio em dinheiro! Dos GRANDES! Mas ele não tem uma conta bancária na Nigéria , ele pediu pro governante Príncipe Alyusi Islassis
        depositar na sua conta. O problema é: ele depositou o valor errado, e precisa de parte dele de volta.
        Eles estão um pouco irritados. E seu irmão acha que se você nao resolver a tempo ele vai ser deletado.
        Conto com você
        Salve ser irmão (e nossos bolsos!).

        Amorsamente e cheio de dindin,
        Papai.`,
    },
    {
      id: 18,
      flagged: false,
      read: false,
      name: 'PrinceAlyusi@nigeriamail.com',
      fase: '3',
      from: 'Príncipe Alyusi Islassis',
      subject: 'Depósito errado',
      date: 'Fev 22',
      tag: 'promo',
      text: `
      Preciso do meu dinheiro de volta!
      O prêmio do seu irmão era de R$10.000
      Acabei depositando R$100.000 por digitar errado no meu web banking.
      Preciso do meu dinheiro de volta
      até HOJE.`,
    },
    {
      id: 19,
      flagged: false,
      read: false,
      name: 'PrinceAlyusi@gmail.com',
      fase: '3',
      from: 'Príncipe Alyusi Islassis',
      subject: 'DEVOLVA MEU DINHEIRO',
      date: 'Fev 22',
      tag: 'promo',
      text: `
      A VIDA DO SEU IRMÃO CORRE PERIGO!
      DEVOLVA OS R$50.000 DO PRÍNCIPE AGORA!!
      NÃO ROUBE NOSSO PAÍS!
      `,
    },
    {
      id: 20,
      flagged: false,
      read: false,
      name: 'RealPrinceAlyusi@yahoo.com',
      fase: '3',
      from: 'Príncipe Alyusi Islassis',
      subject: '$$$ já!  $$$ Sem sair de casa!!!',
      date: 'Fev 22',
      tag: 'promo',
      text: `Fui convidado pela Nigéria National Petroleum Company para entrar em contato com você para obter ajuda na resolução de um assunto.
       A Nigerian National Petroleum Company concluiu recentemente um grande número de contratos de exploração de petróleo na região do Sub-Sahara.
       Os contratos produziram imediatamente fundos equivalentes a US $ 40.000.000.
       A Nigéria National Petroleum Company está desejando a exploração de petróleo em outras partes do mundo, no entanto,
       devido a certas regulamentações do governo da Nigéria, é incapaz de transferir esses fundos para outra região.

       Você solicita assistência como cidadão não-nigeriano para ajudar a Nigerian National Petroleum Company,
       e também o Banco Central da Nigéria, a retirar esses fundos da Nigéria. Se os fundos puderem ser transferidos para o seu nome,
       na sua conta do Brasil, você pode encaminhar os fundos, conforme indicado pela Nigéria National Petroleum Company.
       Em troca de seus serviços de atendimento, a Nigéria National Petroleum Company concordaria em permitir que você mantenha 10%,
       ou US $ 4 milhões desse montante.

      No entanto, para ser um cessionário legítimo desses dinheiros de acordo com a lei nigeriana,
      você deve atualmente ser um depositante de pelo menos R$ 100.000 em um banco nigeriano que é regulado pelo Banco Central da Nigéria.

      Se pudermos nos ajudar, seremos muito gratos. Sugerimos que nos conheça pessoalmente em Lagos e que, durante a sua visita,
      apresentei-vos aos representantes da Nigerian National Petroleum Company, bem como a alguns funcionários do Banco Central da Nigéria.

      Por favor, ligue-me o mais cedo possível em 18-467-4975.
      O tempo é essencial na matéria;
      muito rapidamente, o governo da Nigéria perceberá que o Banco Central está mantendo
      este montante em depósito e tentando cobrar certos impostos depositários sobre ele.

      Sinceramente,

      Príncipe Alyusi Islassis`,
    },
    {
      id: 21,
      flagged: false,
      read: false,
      name: 'PrinciAlyusyy@nigeria.gov',
      fase: '3',
      from: 'Príncipe Alyusi Islassis',
      subject: 'Conta Errada',
      date: 'Fev 22',
      tag: 'promo',
      text: `
      Lamento pelo transtorno. Fomos depositar o prêmio do seu irmão devido a corrida que ocorreu no dia 15 de Fevereiro na nigéria
      porém quando convertemos a nossa moeda em real acabamos enviando um valor muito diferente do real.
      Entre em contato para resolvermos a situação.
      Atenciosamente,
      Príncipe Alyusi Islassis`,
    },
    {
      id: 22,
      flagged: false,
      read: false,
      name: 'PrinceAlyusi@gov.ng',
      fase: '3',
      from: 'Príncipe Alyusi Islassis',
      subject: 'Give My Money Back, please',
      date: 'Fev 22',
      tag: 'promo',
      text: `Can I have my money back,please sir?
      I don't speak portuguease. I just wanted to help your brother.
      I'm not very good with computers and i typed the wrong value.
      Sorry for the inconvenience.
      Contact me ASAP.`,
    },
  ],
};

const mutations = {
};

const actions = {
};

const getters = {
  messages: state => state.messages,
  withLabel: state =>
    label => state.messages.filter(m => !label || m.tag === label),
  unread: (state, getters) =>
    label => getters.withLabel(label).filter(m => !m.read).length,
  byId: state => messageId => state.messages.find(m => m.id === messageId),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
