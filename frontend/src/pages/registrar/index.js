import React, { useState } from 'react';
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link , useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
export default function Registrar() {
    const [nome, setNomeOng] = useState('');
    const [email, setEmail] = useState('');
    const [whats, setWhatsApp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegistrar(e) {
        e.preventDefault();
        const data = {
            nome,
            email,
            whats,
            cidade,
            uf
        };
        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (error){
            alert('Não foi possível cadastrar sua ong');
        }

    }
    return (
        <div className="registrar-conteiner">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro baby </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Tela Inicial

                    </Link>
                </section>
                <form onSubmit={handleRegistrar} >
                    <input placeholder="Nome da ONG"
                        value={nome}
                        onChange={e => setNomeOng(e.target.value)}
                    />

                    <input type="Email" placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input placeholder="WhatsApp"
                        value={whats}
                        onChange={e => setWhatsApp(e.target.value)}
                    />

                    <div className="input-group" >
                        <input placeholder="Cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />

                        <input placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUF(e.target.value)}
                        />

                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}