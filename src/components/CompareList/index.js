import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

export default function CompareList({ repositories }) {
    CompareList.propTypes = {
        repositories: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                owner: PropTypes.shape({
                    login: PropTypes.string,
                    avatar_url: PropTypes.string,
                }),
                stargazers_count: PropTypes.number,
                forks_count: PropTypes.number,
                open_issues_count: PropTypes.number,
                pushed_at: PropTypes.string,
            })
        ).isRequired,
    };
    return (
        <Container>
            {repositories.map((repo) => (
                <Repository key={repo.id}>
                    <header>
                        <img
                            src={repo.owner.avatar_url}
                            alt={repo.owner.login}
                        />
                        <strong>{repo.name}</strong>
                        <small>{repo.login}</small>
                    </header>
                    <ul>
                        <li>
                            {repo.stargazers_count}
                            <small>stars</small>
                        </li>
                        <li>
                            {repo.forks_count} <small>forks</small>
                        </li>
                        <li>
                            {repo.openopen_issues_count} <small>issues</small>
                        </li>
                        <li>
                            {repo.pushed_at} <small>last commit</small>
                        </li>
                    </ul>
                </Repository>
            ))}
        </Container>
    );
}
