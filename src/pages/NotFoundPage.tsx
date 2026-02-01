import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '100px 20px',
            minHeight: '60vh'
        }}>
            <h1 style={{
                fontSize: '72px',
                margin: '0 0 20px',
                color: '#333'
            }}>404</h1>
            
            <p style={{
                fontSize: '18px',
                color: '#666',
                marginBottom: '30px'
            }}>
                Упс! Такой страницы не существует.
            </p>
            
            <Link 
                to="/"
                style={{
                    color: '#0066cc',
                    textDecoration: 'none',
                    borderBottom: '1px solid #0066cc',
                    paddingBottom: '2px',
                    fontSize: '16px'
                }}
            >
                Вернуться на главную
            </Link>
        </div>
    );
};

export default NotFoundPage;