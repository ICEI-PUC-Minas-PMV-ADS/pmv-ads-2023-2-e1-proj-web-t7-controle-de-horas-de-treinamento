# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Funcionários </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Funcionários ativos da Empresa </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Utilizarão a aplicação para inserir os dados referentes aos treinamentos realizados, identificando o setor a qual pertencem.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Analista de Recursos Humanos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Analista de Recursos Humanos responsável pela equipe de treinamentos </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Utilizará a aplicação para mensurar, a partir dos dados disponibilizados dos funcionários, a carga horária dedicada por setor, além de possibilitar traçar metas e identificar setores cujo acompanhamento deve ser mais próximo.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Funcionário        | Inserir informações de treinamentos e cursos realizados 	|Proporcionar novas oportunidades dentro da empresa. |
| Analista de Recursos Humanos|Mensurar as horas de treinamento realizadas por setor	|Elaborar metas de desenvolvimento dos funcionários.|
|Analista de Recursos Humanos| Atualizar dados cadastrais dos funcionários |Manter a base de registros da empresa atualizada, possibilitando maior monitoramento.|

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF- 01 |	Permitir a inserção de dados sobre os treinamentos e cursos realizados	|Alta |
RF- 02 |	Gerar relatório com o histórico dos registros realizados	|Alta |
RF- 03 	|Gerar um relatório específico extraindo o número de horas categorizadas por setor|	Alta |
RF- 04 |	Gerar visualização com o comparativo de horas de treinamento por setor|	Alta |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|-----------|-------------------------|----|
|RNF-01|	A aplicação web deve ser capaz de lidar com o número necessário de usuários sem qualquer degradação no desempenho. |	Baixa |
|RNF-02|	A aplicação web deve ser responsível e capaz de rodar em diferentes plataformas.	|Alta |
|RNF-03|A aplicação web deve ser fácil de usar e entender.| 	Alta |
|RNF-04|	Atender aos requisitos da LGPD.	|Alta|

**Prioridade: Alta / Média / Baixa. 

