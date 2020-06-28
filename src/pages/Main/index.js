import React, { useState } from 'react';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default function Main() {
    const [arrRepositories, setArrRepositories] = useState([]);
    const [repoInput, setRepoInput] = useState('');

    async function handleAddRepository(e) {
        e.preventDefault();
        try {
            const response = await api.get(`/repos/${repoInput}`);

            setArrRepositories([...arrRepositories, response.data]);
            setRepoInput('');
        } catch (err) {}
    }
    return (
        <>
            <Container>
                <h1>GITHUB COMPARE</h1>
                <Form onSubmit={handleAddRepository}>
                    <input
                        type="text"
                        placeholder="usuario/repositório"
                        value={repoInput}
                        onChange={(e) => setRepoInput(e.target.value)}
                    />
                    <button type="submit">OK</button>
                </Form>
            </Container>
            <CompareList repositories={arrRepositories} />
        </>
    );
}
