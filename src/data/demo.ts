import type { Product, Sale } from '../types';
export const demoProducts: Product[] = [
 {id:'1',sku:'PRD-001',nome:'Barra proteica 40g',categoria:'Alimentos',preco:9.90,estoque:120,estoqueMinimo:20},
 {id:'2',sku:'PRD-002',nome:'Puxador inox 20cm',categoria:'Casa',preco:24.90,estoque:48,estoqueMinimo:10},
 {id:'3',sku:'PRD-003',nome:'Varal 9 cordas',categoria:'Utilidades',preco:89,estoque:6,estoqueMinimo:10},
 {id:'4',sku:'PRD-004',nome:'Espelho redondo',categoria:'Decoração',preco:149.90,estoque:22,estoqueMinimo:5},
 {id:'5',sku:'PRD-005',nome:'Alicate de cutícula',categoria:'Beleza',preco:19.90,estoque:8,estoqueMinimo:15},
 {id:'6',sku:'PRD-006',nome:'Multímetro digital',categoria:'Ferramentas',preco:69.90,estoque:31,estoqueMinimo:8},
];
export const demoSales: Sale[] = [
 {id:'VD-1024',data:'2026-11-18T10:30:00',itens:[{produtoId:'2',nome:'Puxador inox 20cm',quantidade:2,precoUnitario:24.90},{produtoId:'4',nome:'Espelho redondo',quantidade:2,precoUnitario:149.90}],total:349.60,status:'Concluída'},
 {id:'VD-1023',data:'2026-11-17T14:00:00',itens:[{produtoId:'3',nome:'Varal 9 cordas',quantidade:2,precoUnitario:89}],total:178,status:'Concluída'},
 {id:'VD-1022',data:'2026-11-16T09:00:00',itens:[{produtoId:'6',nome:'Multímetro digital',quantidade:3,precoUnitario:69.90}],total:209.70,status:'Concluída'}
];
