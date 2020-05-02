import React, { useState } from 'react';
import './styles.css';
import {Link , useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NovoCaso() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNovoCaso(e){
        e.preventDefault();
        const data = {
            titulo,
            descricao,
            value,
        };
        try {
            await api.post('casos', data, {
                headers: {
                    autorizacao: ongId,
                }
            });
            alert(`Caso Cadastrado com Sucesso!: `);
            history.push('/profile');
        } catch (error){
            alert('Não foi possível cadastrar seu caso, tente novamente');
        }

    }
    
    return (

        <div className="novoCaso-conteiner">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo Caso </h1>
                    <p>Descreva seu caso detalhadamente para ser adicionado</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                Voltar para Tela Inicial

            </Link>
                </section>
                <form onSubmit ={handleNovoCaso}>
                    <input placeholder="Título do Caso"
                    value = {titulo}
                    onChange = {e => setTitulo(e.target.value)}
                    />

                    <textarea placeholder ="Descrição"
                    value = {descricao}
                    onChange = {e => setDescricao(e.target.value)}
                    /> 

                    <input placeholder="Valor em Reais"
                    value = {value}
                    onChange = {e => setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                    <button className="button" type="cancel">Cancelar</button>
                </form>
            </div>
        </div>
    )
}