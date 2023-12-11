# Plano de Testes de Software

Foram programados 03 casos de testes da aplicação, o primeiro caso inclui a simulação da utilização do usuário colaborador de todos os recursos da aplicação desde o cadastro, validando os requisitos funcionais RF-01, RF-02, o segundo estudo de caso avalia o requisito não funcional RNF-02 relativo a responsividade da aplicação, o terceiro simula a utilização do usuário Gestor, representado pela equipe de treinamento da empresa em estudo, validando os requisitos funcionais RF-03 e RF-04. 
Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-01 - Cadastro e lançamento dos cursos realizados |
|:---|:---| 
| Requisitos Associados | RF-01 RF-02 |
| Objetivo do Teste | Simular a utilização do usuário na aplicação Web através do cadastramento e lançamento das horas de treinamento |
| Passos | <p>01. Acessar a página inicial da aplicação, tela de [Login](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t7-controle-de-horas-de-treinamento/codigo-fonte/area-nao-logada/login/login.html);</p> <p>02. Clicar em "Clique aqui para criar novo cadastro";</p> <p>03. Preencher os dados na tela de Cadastro e confirmar;</p> <p>04. Preencher na tela de Login o email e senha cadastrados;</p> <p>05. Na página Home Colaborador, clicar em Registros no menu superior direito;</p> <p>06.Clicar no símbolo de + (adicionar novo registro);</p> <p>06. Lançar no formulário os dados solicitados;</p>  
| Critérios de êxito | Os registros realizados no formulário, devem ser visualizados na tela registros e impressos em excel |
| Responsável pela elaborar do caso de Teste | Daniella Santos Costa |
---------------------------------------------------------------------------------------------------------------------
|Caso de Teste    | CT-02 - Teste de responsividade |
|:---|:---|
| Requisitos Associados | RNF-02 |
| Objetivo do Teste | Testar a responsividade das telas |
| Passos | Para o teste foi utilizado o celular Poco x3 GT, recurso utilizado para validar a responsividade de todas as telas da aplicação. Para cada tela da aplicação foi retirado um print.
| Critérios de êxito | Adaptação de todas as telas da aplicação em uma escala reduzida  |
| Responsável pela elaborar do caso de Teste | Matheus Vinicio Santos Costa |
---------------------------------------------------------------------------------------------------------------------
|Caso de Teste    | CT-03 - Teste de utilização da equipe de treinamento |
|:---|:---|
| Requisitos Associados | RF-04 RF-04 |
| Objetivo do Teste | Simular a utilização por parte da equipe de Treinamentos utilização da aplicação Web através da extração de dados para análise das horas de trinamentos lançadas pelos colaboradores da organização |
| Passos | <p>01. Acessar a página inicial da aplicação, tela de [Login](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t7-controle-de-horas-de-treinamento/codigo-fonte/area-nao-logada/login/login.html);</p> <p>02. Inserir o email e senha do usuário gestor;</p> <p>03. Visualizar os lançamentos realizados;</p> <p>04. Clicar na impressora no canto superior direito da tela, imprimindo o excel com os dados lançados pelos usuários;</p>
| Critérios de êxito | Possibilidade de filtrar a visualização dos dados lançados por setor e impressão dos dados em excel  |
| Responsável pela elaborar do caso de Teste | Daniella Santos Costa |
