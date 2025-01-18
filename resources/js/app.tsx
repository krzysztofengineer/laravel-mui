import '../css/app.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createInertiaApp } from '@inertiajs/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const theme = createTheme({
    palette: {
        primary: {
            light: grey[900],
            main: grey[900],
            dark: grey[900],
            contrastText: grey[100],
        },
    }
})

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<ThemeProvider theme={theme}>
            <App {...props} />
        </ThemeProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
