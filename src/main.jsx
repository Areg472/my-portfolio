import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HelmetProvider} from "react-helmet-async";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '38ab387b-8ef8-456c-87a4-b317156d5f0d',
    clientToken: 'pubb1a6c3e0831dae0d548603bdaf943735',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'aregus',
    env: '<ENV_NAME>',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HelmetProvider>
            <App />
      </HelmetProvider>
  </StrictMode>,
)
