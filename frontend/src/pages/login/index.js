import React, { useState } from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api'
//import signImg from '../../assets/log-in.svg'
export default function Login() {

    const [id,setID] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessao', { id} );
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongNome',response.data.nome);
            alert('Login Realizado com Sucesso') ;
            
            history.push('/profile');
        } catch (error) {
            alert('Insira a ID para efetuar o Login!') ;
            
        }
    }
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />

                <form onSubmit = {handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Seu ID"
                    value ={id}
                    onChange = { e => setID(e.target.value)}
                    />
                    <button className = "button" type = "submit">Entrar</button>
                    <Link className ="back-link" to = "registrar">
                    <FiLogIn size = {16} color ="#E02041" />
                        Não tenho Cadastro
                        
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />


        </div>

    );
};