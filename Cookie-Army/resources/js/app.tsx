import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./Components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { Toaster } from "./Components/ui/toaster";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <QueryClientProvider client={queryClient}>
                        <App {...props} />
                        <ReactQueryDevtools
                            initialIsOpen={false}
                            position="left"
                            buttonPosition="bottom-left"
                        />
                        <Toaster />
                    </QueryClientProvider>
                </ThemeProvider>
            </StrictMode>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
