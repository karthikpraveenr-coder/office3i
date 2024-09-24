import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import admindashboard from './Features/admindashboard_state'
import forget from './Features/forgotpassword_state'
import dateReducer from './Features/salarycalculationcurrentdate_state'
import { FormProvider } from './Banner_Pages/context/FormContext';
import { ContactFormProvider } from './Banner_Pages/context/ContactFormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    admin: admindashboard,
    forgotpassword: forget,
    date: dateReducer,

  }
})



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FormProvider>
        <ContactFormProvider>
          <App />
        </ContactFormProvider>
      </FormProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
