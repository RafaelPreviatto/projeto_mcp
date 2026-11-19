export type Product = { id: string; sku: string; nome: string; categoria: string; preco: number; estoque: number; estoqueMinimo: number };
export type SaleItem = { produtoId: string; nome: string; quantidade: number; precoUnitario: number };
export type Sale = { id: string; data: string; itens: SaleItem[]; total: number; status: 'Concluída' };
