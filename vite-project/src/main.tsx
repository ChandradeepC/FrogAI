import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div>
            <AppRouter />
        </div>
    </React.StrictMode>
);
