import React, { useState } from 'react';
import moment from 'moment';
import { FaSpinner, FaPlus } from 'react-icons/fa';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default function Main() {
    const [repositories, setRepositories] = useState([]);
    const [repoInput, setRepoInput] = useState('');
    const [repoError, setRepoError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleAddRepository(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const { data: repository } = await api.get(`/repos/${repoInput}`);
            repository.lastCommit = moment(repository.pushed_at).fromNow();

            setRepositories([...repositories, repository]);
            setRepoInput('');
            setRepoError(false);
        } catch (err) {
            setRepoError(true);
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <Container>
                <h1>GITHUB COMPARE</h1>
                <Form withError={repoError} onSubmit={handleAddRepository}>
                    <input
                        type="text"
                        placeholder="usuario/repositório"
                        value={repoInput}
                        onChange={(e) => setRepoInput(e.target.value)}
                    />
                    <button type="submit">
                        {loading ? (
                            <FaSpinner color="#FFF" size={16} />
                        ) : (
                            <FaPlus color="FFF" size={16} />
                        )}
                    </button>
                </Form>
            </Container>
            <CompareList repositories={repositories} />
        </>
    );
}
