export const emailValidator = email => {
  if(!email){
    return "*Email is required";
  }
  else if(!new RegExp(/\S+@\S+\.\S+/).test(email)){
    return "*Incorrect email format";
  }
  return "";
};
export const passwordValidator = password =>{
  if(!password){
    return "*password is requried";
  }
  else if(password.length<8){
    return "*password must have a minimum 8 characters";
  }
  return "";
};
export const confirmPasswordValidator = (confirmPassword, form)=>{
  if(!confirmPassword){
    return "*Confirm Password is requried";
  }
  else if(confirmPassword.length<8){
    return "*Confirm Password must have a minimum 8 characters";
  }
  else if(confirmPassword!==form.password){
    return "*Password do not match"
  }
  return "";
};