import { importShared } from './__federation_fn_import.js';
import App, { j as jsxRuntimeExports } from './__federation_expose_App-b7483e35.js';
import { r as reactDomExports } from './__federation_shared_react-dom.js';
import { _ as __vitePreload } from './preload-helper-1e3b7978.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const index = '';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __vitePreload(() => import('./web-vitals-d7de8b6a.js'),true?[]:void 0).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const React = await importShared('react');
const root = client.createRoot(
  document.getElementById("root")
);
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
reportWebVitals();
