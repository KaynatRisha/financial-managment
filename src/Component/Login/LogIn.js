import './Login.css';
import { useState } from 'react';
import {useValidator} from "./useValidator";
import {Link} from 'react-router-dom';
const LogIn = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {errors, validateForm, onBlurField} = useValidator(form);
  const onUpdateField = e =>{
    const field = e.target.name;
    const nextFormState={
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if(errors[field].dirty)
    validateForm({
      form: nextFormState,
      errors,
      field,
    });
  };
  const onSubmitForm = e =>{
    e.preventDefault();
    const{isValid} = validateForm({form, errors, forceTouchErrors: true});
    if(!isValid)return;
    alert(JSON.stringify(form, null, 2));
  };
  return ( 
    <div className='log-container'>
      <div className='log'>
      <h3>Log in</h3>
      <form className='form' onSubmit={onSubmitForm}>
        <div className='formGroup'>
          <label className='formLable'>Email</label>
          <input className='formField errors.email.dirty errors.email.error  formFieldError' type="text" aria-label='Email field' name="email" value={form.email} onChange={onUpdateField} onBlur={onBlurField}/>
          {errors.email.dirty&& errors.email.error?(<p className='formFieldErrorMessage'>{errors.email.message}</p>):null}
        </div>
        <div className='formGroup'>
          <label className='formLable'>password</label>
          <input className='formField errors.password.dirty  errors.password.error formFieldError' type="password" aria-label='Password field' name="password" value={form.password} onChange={onUpdateField} onBlur={onBlurField}/>
           {errors.password.dirty && errors.password.error?(<p className='formFieldErrorMessage'>{errors.password.message}</p>):null}
        </div>
        <div className='formGroup'>
          <label className='formLable'>Confirm Password</label>
          <input className='formField errors.confirmPassword.dirty  errors.confirmPassword.error  formFieldError' type="password" aria-label='Confirm Password field' name="confirmPassword" value={form.confirmPassword} onChange={onUpdateField}/>
          {errors.confirmPassword.dirty && errors.confirmPassword.error?(<p className='formFieldErrorMessage'>{errors.confirmPassword.message}</p>):null}
        </div>
        <div className='formActions'>
          <button className='formSubmitBtn' type="submit">Login</button>
          <p className='sign-link'>Creat an account  <Link to="SignUp">SignUp</Link> </p>
        </div>
      </form>
    </div>
    </div>
   );
}
 
export default LogIn;