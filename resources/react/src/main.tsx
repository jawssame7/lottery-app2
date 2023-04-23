import React from 'react';
import ReactDOM from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import Layout from './Layout';
import './main.scss';
import 'react-datepicker/dist/react-datepicker.css';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    // resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
    let page = pages[`./pages/${name}.tsx`];
    page.default.layout = page.default.layout || ((page) => <Layout children={page} />);

    return page;
  },
  setup({ el, App, props }) {
    return ReactDOM.createRoot(el).render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>
    );
  },
});
