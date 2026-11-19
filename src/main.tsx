import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StoreProvider } from './context/Store';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Stock from './pages/Stock';
import './styles.css';
function Protected(){return localStorage.getItem('nexus_auth')==='demo'?<Layout/>:<Navigate to="/login" replace/>}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><StoreProvider><BrowserRouter><Routes><Route path="/login" element={<Login/>}/><Route element={<Protected/>}><Route path="/" element={<Dashboard/>}/><Route path="/produtos" element={<Products/>}/><Route path="/vendas" element={<Sales/>}/><Route path="/estoque" element={<Stock/>}/></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes></BrowserRouter></StoreProvider></React.StrictMode>);
