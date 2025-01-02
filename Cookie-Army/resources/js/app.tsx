import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './components/ThemeProvider';
import { ToastContainer } from "react-toastify";
import 'react-photo-view/dist/react-photo-view.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
                <ToastContainer
                    position="top-right"
                    autoClose={1500}
                    newestOnTop
                    closeOnClick
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                />
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: '#e96311',
        showSpinner: true
    },
});
