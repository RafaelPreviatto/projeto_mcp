# Nexus ERP — Especificação de produto e design

**Versão:** 1.0  
**Data:** 18/11/2026  
**Objetivo:** protótipo funcional desktop-first de um ERP de gestão de vendas, desenvolvido com auxílio de IA, Figma, MCP e VS Code.

## 1. Visão geral

**Nome:** Nexus ERP  
**Finalidade:** centralizar o controle básico de produtos, vendas e estoque de pequenos negócios em uma interface simples. Resolve a dificuldade de acompanhar pedidos, faturamento e quantidades de produtos em controles dispersos.

**Público-alvo:** pequenos empreendedores, lojistas e vendedores de marketplaces, preferencialmente adultos de 18 a 60 anos com conhecimento básico de computadores.

**Dispositivo preferencial:** computador desktop ou notebook, com layout desktop-first. Referência de tela: 1440 × 900 px; largura mínima alvo: 1024 px. Em telas menores, tabelas podem ter rolagem horizontal.

**Escopo:** protótipo acadêmico, não um ERP de produção. Não há integração real com marketplaces, emissão fiscal, pagamento ou multiusuário real.

## 2. Requisitos do usuário

- RU01: visualizar rapidamente indicadores de vendas e faturamento.
- RU02: cadastrar, localizar, editar e excluir produtos.
- RU03: registrar vendas de produtos existentes.
- RU04: consultar o histórico e status das vendas.
- RU05: acompanhar quantidades disponíveis e alertas de estoque baixo.
- RU06: navegar facilmente entre as telas por um menu lateral.
- RU07: utilizar dados demonstrativos e manter alterações no navegador durante os testes.

## 3. Requisitos funcionais

- RF01: disponibilizar login demonstrativo e botão de sair.
- RF02: exibir dashboard com faturamento total, total de vendas, produtos cadastrados e produtos com estoque baixo.
- RF03: apresentar gráfico de faturamento por mês e lista de vendas recentes.
- RF04: listar produtos com busca por nome/SKU e filtros por categoria ou status.
- RF05: permitir criar, editar e excluir produtos com confirmação de exclusão.
- RF06: registrar vendas com um ou mais itens, quantidades e cálculo automático do total.
- RF07: impedir venda de quantidade superior ao estoque disponível.
- RF08: diminuir o estoque ao registrar uma venda concluída; não permitir quantidades negativas.
- RF09: listar vendas com data, itens, valor total e status.
- RF10: exibir estoque atual e sinalizar itens abaixo do estoque mínimo.
- RF11: apresentar mensagens de sucesso/erro e estados vazios.
- RF12: persistir produtos e vendas no localStorage e oferecer dados de exemplo na primeira execução.

**Regras de negócio:** valores em BRL; datas no formato brasileiro; produto com ID único, SKU único, nome, categoria, preço, estoque atual e estoque mínimo; preço não negativo; quantidades inteiras não negativas. O total da venda é a soma de preço unitário × quantidade, capturando o preço no momento da venda. Excluir produto não apaga vendas históricas; vendas guardam uma cópia do nome e preço dos itens. Para simplificar, vendas registradas são consideradas concluídas, sem edição posterior ou cancelamento com reposição de estoque.

## 4. Requisitos não funcionais

- RNF01: interface clara, consistente e fácil de navegar.
- RNF02: layout prioritário para desktop.
- RNF03: componentes reutilizáveis e organização modular.
- RNF04: acessibilidade básica: contraste legível, rótulos, foco visível e navegação por teclado.
- RNF05: validação dos formulários e confirmação antes de exclusões.
- RNF06: não utilizar informações pessoais reais nem senhas verdadeiras.
- RNF07: funcionar localmente sem servidor de API externo.

## 5. Telas e navegação

### 5.1 Login (`/login`)
- Logotipo e nome Nexus ERP.
- Campos e-mail e senha demonstrativos; botão Entrar.
- Texto informando que o acesso é somente de demonstração.
- A autenticação é simulada e não oferece segurança real.

### 5.2 Dashboard (`/`)
- Sidebar com logo, Dashboard, Produtos, Vendas, Estoque e Sair.
- Cabeçalho com título, subtítulo e avatar ilustrativo.
- Quatro cards: faturamento, vendas, produtos e estoque baixo.
- Gráfico de faturamento mensal.
- Tabela de vendas recentes.
- Botão de ação rápida para registrar venda.

### 5.3 Produtos (`/produtos`)
- Tabela com SKU, produto, categoria, preço, estoque e ações.
- Busca e filtro; botão Novo produto.
- Modal ou página para cadastro e edição com validação.
- Modal de confirmação de exclusão.

### 5.4 Vendas (`/vendas`)
- Tabela com número, data, quantidade de itens, total e status.
- Botão Nova venda.
- Formulário para selecionar produtos e quantidades, com resumo do pedido e total automático.
- Aviso de estoque insuficiente e confirmação de registro.

### 5.5 Estoque (`/estoque`)
- Cards com produtos cadastrados, unidades totais e itens com estoque baixo.
- Tabela de produtos, estoque atual, mínimo e situação.
- Busca e filtro de produtos com estoque baixo.
- Ajuste manual de quantidade com validação (opcional, se houver tempo).

## 6. Design system

### 6.1 Cores (tokens obrigatórios)

| Token | Hex | Uso |
|---|---|---|
| `color/primary` | `#6D28D9` | Ações principais, seleção, destaques |
| `color/secondary` | `#2563EB` | Gráficos, links e apoio visual |
| `color/tertiary` | `#F3F4F6` | Fundo secundário |
| `color/background` | `#F9FAFB` | Fundo da aplicação |
| `color/surface` | `#FFFFFF` | Cards, tabelas e modais |
| `color/text-primary` | `#111827` | Títulos e textos principais |
| `color/text-secondary` | `#6B7280` | Textos auxiliares |
| `color/border` | `#E5E7EB` | Bordas e divisórias |
| `color/success` | `#15803D` | Confirmações |
| `color/warning` | `#B45309` | Estoque baixo |
| `color/danger` | `#B91C1C` | Erros e exclusão |

### 6.2 Tipografia

**Família:** Inter (fallback: Arial, sans-serif).

| Token | Tamanho | Peso | Altura de linha |
|---|---|---|---|
| `type/page-title` | 28 px | 700 | 36 px |
| `type/section-title` | 20 px | 600 | 28 px |
| `type/card-value` | 26 px | 700 | 34 px |
| `type/body` | 14 px | 400 | 22 px |
| `type/label` | 14 px | 500 | 20 px |
| `type/caption` | 12 px | 400 | 18 px |

### 6.3 Espaçamentos, dimensões e bordas

- Escala de espaçamento (tokens): `space/1=4`, `space/2=8`, `space/3=12`, `space/4=16`, `space/6=24`, `space/8=32` px.
- Sidebar desktop: 240 px de largura.
- Conteúdo: padding 32 px; gap entre cards 16–24 px.
- Cabeçalho de página: altura aproximada de 72 px.
- Inputs e botões: altura mínima de 40 px.
- Cards: padding 24 px; raio 12 px.
- Modais: largura aproximada de 520–640 px; raio 16 px.
- Bordas: 1 px; sombras discretas.
- Alvos interativos: preferencialmente 40 × 40 px ou maiores.

### 6.4 Componentes reutilizáveis

`AppShell`, `Sidebar`, `PageHeader`, `StatCard`, `PrimaryButton`, `SecondaryButton`, `TextInput`, `SelectInput`, `SearchField`, `DataTable`, `StatusBadge`, `ConfirmDialog`, `FormModal`, `Toast`, `EmptyState` e `ChartCard`.

### 6.5 Figma — estrutura obrigatória

- Criar páginas: `01 - Foundations`, `02 - Components`, `03 - Screens`, `04 - Flows`.
- Criar variáveis para cores e espaçamentos, com nomes correspondentes aos tokens.
- Criar estilos de texto para os seis níveis tipográficos.
- Aplicar **Auto Layout** nos frames principais, sidebar, cabeçalhos, cards, formulários, tabelas e modais.
- Configurar constraints e resizing (`Fill container`, `Hug contents`, dimensões fixas onde apropriado).
- Usar componentes e variantes para botões, inputs e badges (default, hover, disabled, error, conforme aplicável).
- Criar frames desktop 1440 × 900 para as cinco telas e para estados de modal.
- Nomear camadas e componentes de maneira semântica para facilitar a leitura via MCP.
- Conectar o fluxo de login → dashboard → produtos/vendas/estoque e os modais principais no protótipo.

## 7. Arquitetura técnica

- **Frontend:** React + TypeScript + Vite.
- **Estilos:** Tailwind CSS.
- **Rotas:** React Router.
- **Gráficos:** Recharts ou biblioteca equivalente.
- **Ícones:** Lucide React.
- **Persistência:** `localStorage` do navegador.
- **Backend:** não haverá nesta versão.
- **Banco de dados:** não haverá.
- **Hospedagem:** execução local via `npm run dev`.
- **Editor:** VS Code com agente de programação compatível com MCP.
- **Design:** Figma com integração MCP disponível no ambiente escolhido.

**Modelo de dados sugerido:**

```ts
type Produto = {
  id: string;
  sku: string;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
  estoqueMinimo: number;
};

type ItemVenda = {
  produtoId: string;
  nome: string;
  precoUnitario: number;
  quantidade: number;
};

type Venda = {
  id: string;
  data: string;
  itens: ItemVenda[];
  total: number;
  status: 'Concluída';
};
```

**Chaves locais sugeridas:** `nexus-produtos-v1`, `nexus-vendas-v1`, `nexus-demo-session-v1`. Dados iniciais fictícios, consistentes entre vendas e estoque. Nunca armazenar senha real ou informações sensíveis.

**Limitações conhecidas:** dados restritos ao navegador e origem utilizados; podem ser apagados pelo usuário; não há sincronização, controle multiusuário, autenticação segura nem garantias de transações. É uma demonstração acadêmica.

## 8. Critérios de aceite e validação

- As cinco telas estão presentes e navegam corretamente.
- Login demonstrativo permite entrar e sair.
- O dashboard mostra números derivados dos dados cadastrados.
- Produto pode ser criado, editado, encontrado e excluído.
- Venda é registrada com cálculo correto, impedindo estoque insuficiente.
- Estoque é atualizado após venda e alertas funcionam.
- Atualizar a página mantém produtos e vendas no mesmo navegador.
- O Figma contém Auto Layout, variáveis e componentes reutilizáveis.
- A implementação utiliza o layout consultado pelo agente via MCP, sem copiar apenas uma captura de tela.
- Há evidências para apresentação: prompts usados, estrutura do Figma, conexão MCP, código e demonstração final.

## 9. Estratégia de IA e MCP

1. Fornecer este documento integral à IA de design; pedir confirmação da compreensão e geração de componentes/tokens antes das telas.
2. Gerar primeiro Dashboard e Login; validar aparência, Auto Layout e variáveis.
3. Reutilizar os mesmos componentes nas demais telas para evitar retrabalho.
4. Disponibilizar o arquivo Figma ao agente de código por um servidor MCP compatível e autorizado.
5. Solicitar ao agente que inspecione os frames e implemente uma tela por vez, seguindo os tokens e componentes.
6. Validar visualmente cada tela e testar fluxos funcionais; corrigir diferenças em lotes objetivos.
7. Registrar ferramentas, prompts, decisões e limitações para a apresentação.

**Nota:** a geração automática de arquivos Figma editáveis, variáveis e Auto Layout depende dos recursos efetivamente disponíveis na ferramenta de IA/MCP escolhida. Caso um recurso não seja gerado, completar ou corrigir no Figma e documentar a intervenção.

## 10. Prompt mestre para geração do layout

> Você é um designer sênior de produtos SaaS. Crie no Figma um protótipo desktop-first do Nexus ERP seguindo integralmente esta especificação. Priorize consistência, clareza, hierarquia visual e reutilização. Crie primeiro as variáveis de cor e espaçamento, os estilos tipográficos e os componentes com variantes. Use Auto Layout nos frames e componentes. Depois gere os frames de Login, Dashboard, Produtos, Vendas e Estoque em 1440 × 900 px, incluindo os modais de cadastro/edição de produto, confirmação de exclusão e nova venda. Use nomes semânticos nas camadas e conecte a navegação no protótipo. Não crie telas ou recursos fora do escopo. Ao concluir, descreva o que foi criado e indique explicitamente qualquer item que não tenha sido implementado, especialmente variáveis, Auto Layout e componentes editáveis. Solicite validação antes de mudanças estruturais grandes.

## 11. Prompt mestre para implementação

> Você é um desenvolvedor React/TypeScript trabalhando localmente no VS Code. Leia `design.md` e consulte o arquivo Figma através do MCP configurado. Inspecione os frames, componentes, tokens e medidas antes de codificar. Implemente o Nexus ERP com Vite, React, TypeScript, Tailwind CSS, React Router, ícones Lucide e persistência em localStorage. Não use banco de dados nem backend. Preserve o layout e os fluxos definidos; organize componentes reutilizáveis. Implemente primeiro o AppShell e o Dashboard, depois Produtos, Vendas e Estoque. Use dados demonstrativos coerentes e lógica real para CRUD, cálculo de vendas e baixa de estoque. Execute e valide cada etapa, informando arquivos alterados e resultados dos testes. Evite bibliotecas e mudanças fora do escopo sem justificativa.

## 12. Roteiro de apresentação

1. Problema e público-alvo.
2. Escopo e decisões técnicas, incluindo ausência de banco de dados.
3. Documento `design.md` como contexto da IA.
4. Criação de tokens, componentes e Auto Layout no Figma.
5. Configuração e demonstração da conexão MCP.
6. Implementação assistida no VS Code.
7. Demonstração: login → dashboard → cadastrar produto → registrar venda → conferir estoque.
8. Validação, limitações e ganhos de tempo estimados.
