export const money = (value:number) => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(value);
export const dateBR = (value:string) => new Date(value).toLocaleDateString('pt-BR');
