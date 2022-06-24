import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
    <div className="LoadingTodo-container">
        <div className="animated-background">
            
            <p className="LoadingTodo-text">Cargando TODOS...</p>
            
        </div>
    </div>
    );
}

export { TodosLoading };