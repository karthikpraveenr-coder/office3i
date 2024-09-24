// context/FormContext.js
import React, { createContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [referenceName, setReferenceName] = useState("");
  const [referenceEmployeeCode, setReferenceEmployeeCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [companyName, setCompanyName] = useState("");

  return (
    <FormContext.Provider value={{ firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, referenceName , setReferenceName, referenceEmployeeCode, setReferenceEmployeeCode,mobile, setMobile,companyName, setCompanyName}}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
