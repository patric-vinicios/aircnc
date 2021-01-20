import { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import camera from '../../assets/images/camera.svg';
import './styles.css';

export default function New() {

    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const history = useHistory();

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    },[thumbnail]);

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');
        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spot', data, {
            headers: { user_id }
        })

        history.push('/dashboard')

    }

    return (
        <form onSubmit={handleSubmit}>
            <label 
                id="thumbnail" 
                style={{backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" id="thumbnail" name="thumnail" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} id="thumbnail" alt="Choose a picture" />
            </label>
            <label htmlFor="company"> EMPRESA *  </label>
            <input
                id="company"
                type="text"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs"> TECNOLOGIAS * <span> (Separadas por vírgula) </span>  </label>
            <input
                id="techs"
                type="text"
                placeholder="Tecnologias usadas"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
            <label htmlFor="price"> Valor da diária * (Em branco para GRATUITO) </label>
            <input
                id="price"
                type="text"
                placeholder="Sua empresa incrível"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />
            <button className="btn"> Cadastrar </button>
        </form>
    )
}
