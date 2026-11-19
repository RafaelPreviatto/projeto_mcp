# Nexus ERP — projeto_mcp

Protótipo acadêmico de ERP desktop-first criado a partir do `design.md` e das telas do Figma. Desenvolvido com **React + TypeScript + Vite + CSS** (estilo próprio inspirado nos tokens do Figma). Não usa banco de dados nem backend.


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




