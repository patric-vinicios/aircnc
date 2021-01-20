import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Login() {

    const [email, setEmail] = useState('');
    // const [error, setError] = useState([]);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post('/session', { email });
            const { _id } = response.data;
            // if (!_id){
            //     setError({idError: 'Email not found'});
            //     return false;
            // }
            localStorage.setItem('user', _id);
            history.push('/dashboard');
        }catch(err) {
            alert(`Erro no login. Tente novamente. - ${err.message}`)
        }
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong> talentos </strong> para sua empresa
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input
                    onChange={event => setEmail(event.target.value)}
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                />
                {/* {error.idError && <p>User not found</p>} */}
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}
