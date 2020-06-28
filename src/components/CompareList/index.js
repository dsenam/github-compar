import React, { useState } from 'react';
import { Container, Repository } from './styles';

// api.github.com/repos/

export default function CompareList() {
    const [arrRepositories, setArrRepositories] = useState([]);
    return (
        <Container>
            <Repository>
                <header>
                    <img src="" alt="" />
                    <strong>Teste</strong>
                    <small>Teste</small>
                </header>
                <ul>
                    <li>
                        95,019 <small>stars</small>
                    </li>
                    <li>
                        95,019 <small>forks</small>
                    </li>
                    <li>
                        95,019 <small>issues</small>
                    </li>
                    <li>
                        95,019 <small>last commit</small>
                    </li>
                </ul>
            </Repository>
        </Container>
    );
}
