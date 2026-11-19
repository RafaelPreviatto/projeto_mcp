# Nexus ERP — projeto_mcp

Protótipo acadêmico de ERP desktop-first criado a partir do `design.md` e das telas do Figma. Desenvolvido com **React + TypeScript + Vite + CSS** (estilo próprio inspirado nos tokens do Figma). Não usa banco de dados nem backend.

## Como executar no Windows (VS Code / PowerShell)

1. Extraia `projeto_mcp.zip`.
2. Abra a pasta `projeto_mcp` no VS Code.
3. Abra o terminal integrado (`Ctrl + aspas` ou Terminal > Novo Terminal).
4. Execute:

```powershell
npm install
npm run dev
```

5. Acesse `http://localhost:5173` no navegador.

**Login demonstrativo**
- E-mail: `demo@nexuserp.com`
- Senha: `123456`

## Recursos funcionais

- Login simulado e botão de sair.
- Dashboard com métricas reais dos dados locais, gráfico ilustrativo e vendas recentes.
- Cadastro, edição, exclusão, busca e filtro de produtos.
- Nova venda com múltiplos produtos, validação de estoque e total calculado automaticamente.
- Baixa de estoque após venda concluída.
- Estoque com alertas e filtro de produtos abaixo do mínimo.
- Dados de exemplo e persistência em `localStorage`.

## Estrutura

```text
projeto_mcp/
├── src/
│   ├── components/   # Layout, cards e modais
│   ├── context/      # Estado compartilhado e localStorage
│   ├── data/         # Dados fictícios
│   ├── pages/        # Login, Dashboard, Produtos, Vendas e Estoque
│   ├── utils/        # Formatação BRL e datas
│   ├── main.tsx      # Rotas e inicialização
│   ├── styles.css    # Estilos da interface
│   └── types.ts      # Tipos TypeScript
├── design.md         # Especificação de design
├── index.html
├── package.json
└── vite.config.ts
```

## Figma e MCP

Arquivo: https://www.figma.com/design/hqFNMhhG6ymY4Xh6ldshgI/Untitled

As telas no Figma foram geradas com MCP. Este projeto de código segue a mesma estrutura funcional e paleta, mas não configura automaticamente um servidor MCP no VS Code. A conexão MCP do editor deve ser configurada separadamente, conforme o agente escolhido.

## Limitações

- Login **não é autenticação segura**. Não use dados reais.
- `localStorage` armazena dados apenas no navegador; não há sincronização entre computadores.
- O gráfico do Dashboard é ilustrativo; as métricas numéricas são derivadas das vendas cadastradas.
- Não há integração real com Mercado Livre, Shopee ou serviços de pagamento.
- Não há testes automatizados neste pacote.

## Teste rápido

1. Faça login.
2. Abra **Produtos** e cadastre um item.
3. Abra **Vendas** e registre uma venda desse item.
4. Confira a redução do estoque em **Estoque**.
5. Atualize a página: os dados devem permanecer no navegador.
