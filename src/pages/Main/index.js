import React from 'react';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

export default function Main() {
    return (
        <>
            <Container>
                <h1>GITHUB COMPARE</h1>
                <Form>
                    <input type="text" placeholder="usuario/repositório" />
                    <button type="submit">OK</button>
                </Form>
            </Container>
            <CompareList />
        </>
    );
}
