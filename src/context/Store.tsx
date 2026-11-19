import { createContext, useContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { Product, Sale, SaleItem } from '../types';
import { demoProducts, demoSales } from '../data/demo';

type Store = { products: Product[]; sales: Sale[]; addProduct:(p:Omit<Product,'id'>)=>void; updateProduct:(p:Product)=>void; deleteProduct:(id:string)=>void; addSale:(items:{produtoId:string;quantidade:number}[])=>void; reset:()=>void };
const Context = createContext<Store | null>(null);
function read<T>(key:string,fallback:T):T {try {const value=localStorage.getItem(key);return value?JSON.parse(value) as T:fallback;}catch{return fallback;}}
export function StoreProvider({children}:PropsWithChildren){
 const [products,setProducts]=useState<Product[]>(()=>read('nexus_products',demoProducts));
 const [sales,setSales]=useState<Sale[]>(()=>read('nexus_sales',demoSales));
 useEffect(()=>localStorage.setItem('nexus_products',JSON.stringify(products)),[products]);
 useEffect(()=>localStorage.setItem('nexus_sales',JSON.stringify(sales)),[sales]);
 const addProduct=(p:Omit<Product,'id'>)=>setProducts(old=>[...old,{...p,id:crypto.randomUUID()}]);
 const updateProduct=(p:Product)=>setProducts(old=>old.map(item=>item.id===p.id?p:item));
 const deleteProduct=(id:string)=>setProducts(old=>old.filter(p=>p.id!==id));
 const addSale=(items:{produtoId:string;quantidade:number}[])=>{
   if(!items.length)throw new Error('Adicione ao menos um item.');
   const quantities=new Map<string,number>();
   for(const item of items){if(!Number.isInteger(item.quantidade)||item.quantidade<=0)throw new Error('Quantidade inválida.');quantities.set(item.produtoId,(quantities.get(item.produtoId)||0)+item.quantidade);}
   const saleItems:SaleItem[]=[];
   for(const [id,qty] of quantities){const p=products.find(p=>p.id===id);if(!p)throw new Error('Produto não encontrado.');if(p.estoque<qty)throw new Error('Estoque insuficiente para '+p.nome);saleItems.push({produtoId:id,nome:p.nome,quantidade:qty,precoUnitario:p.preco});}
   const total=Number(saleItems.reduce((sum,i)=>sum+i.quantidade*i.precoUnitario,0).toFixed(2));
   const sale:Sale={id:'VD-'+Date.now(),data:new Date().toISOString(),itens:saleItems,total,status:'Concluída'};
   setProducts(old=>old.map(p=>({...p,estoque:p.estoque-(quantities.get(p.id)||0)})));
   setSales(old=>[sale,...old]);
 };
 const reset=()=>{setProducts(demoProducts);setSales(demoSales);};
 return <Context.Provider value={{products,sales,addProduct,updateProduct,deleteProduct,addSale,reset}}>{children}</Context.Provider>;
}
export function useStore(){const context=useContext(Context);if(!context)throw new Error('StoreProvider ausente');return context;}
