import React, { useState, useEffect } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api'
export default function Profile() {
    const [casos,  setCasos] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');

    useEffect(() => {
        api.get('perfil', {
            headers: {
                autorizacao: ongId,
            }
        }).then(response => {
            setCasos(response.data);
        })
    }, [ongId]);

    async function handleLogOut(id){
        try {
            localStorage.clear();
            alert("Logout Efetuado com sucesso!");
            history.push('/')
        } catch (error) {
            alert("Erro ao efetuar LogOut")
        }
    }
    async function handleDeletaCaso (id) {
        try {
          await api.delete(`casos/${id}`,{
              headers :{
                  autorizacao: ongId,
              }
          });
          setCasos(casos.filter(caso => caso.id !== id));
        } catch (error) {
            alert("Erro ao deletar")
        }
    }
    return (
        <div className="profile-conteiner">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda {ongNome}</span>
                <Link className='button' to='/novoCaso/novo' >Cadastrar Novo Caso </Link>
                <button onClick ={handleLogOut} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                {casos.map(caso => (
                    <li key = {caso.id} >
                        <strong>CASO:</strong>
                        <p>{caso.titulo}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{caso.descricao}</p>

                        <strong>VALOR:</strong>
                        <p> {Intl.NumberFormat('pt-BR',{style:'currency',currency: 'BRL'}).format( caso.value)}</p>

                        <button onClick = {() => handleDeletaCaso(caso.id)} type="button">
                            <FiTrash2 size={20} color="gray"/>
                            
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}