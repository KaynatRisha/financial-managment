import { useState } from "react";
import{ 
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
}from './validators';
const touchErrors = errors =>{
  return Object.entries(errors).reduce((acc,[field, fieldError])=>{
    acc[field]={
      ...fieldError,
      dirty: true,
    };
    return acc;
  },{});
};
export const useValidator=form=>{
  const [errors, setError] =useState({
    email: {
      dirty:false,
      error:false,
      message:"",
    },
    password: {
      dirty: false,
      error:false,
      message:"",
    },
    confirmPassword:{
      dirty: false,
      error:false,
      message:"",
    },
  });
const validateForm=({form, field, errors, forceTouchErrors=false})=>{
  let isValid=true;
  const nextErrors=JSON.parse(JSON.stringify(errors));
  if(forceTouchErrors){
    nextErrors=touchErrors(errors);
  }
  const {email, password, confirmPassword} =form;
  if(nextErrors.email.dirty&&(field?field==="email":true)){
    const emailMessage = emailValidator(email, form);
    nextErrors.email.error=!!emailMessage;
    nextErrors.email.message=emailMessage;
    if(!!emailMessage) isValid = false;
  }
  if(nextErrors.password.dirty&&(field?field==="password":true)){
    const passwordMessage = passwordValidator(password, form);
    nextErrors.password.error=!!passwordMessage;
    nextErrors.password.message=passwordMessage;
    if(!!passwordMessage) isValid = false;
  }
  if(
    nextErrors.confirmPassword.dirty&&(field?field==="password":true)
  ){
    const confirmPasswordMessage = confirmPasswordValidator(
      confirmPassword, form );
      nextErrors.confiPassword.error=!!confirmPasswordMessage;
      nextErrors.confirmPassword.message=confirmPasswordMessage;
      if(!!confirmPasswordMessage) isValid=false;
  }
  setError(nextErrors);
  return {
    isValid,
    errors:nextErrors,
  };
};
const onBlurField = e =>{
  const field = e.target.name;
  const fieldError = errors[field];
  if(fieldError.dirty)return ;
  const updateErrors={
    ...errors, [field]:{
      ...errors[field],
      dirty: true,
    },
  };
  validateForm({form, field, errors: updateErrors});
};
return{
  validateForm,
  onBlurField,
  errors,
};
};