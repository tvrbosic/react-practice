import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
   if (action.type === 'USER_INPUT') {
      return { value: action.payload, isValid: action.payload.includes('@') };
   } else if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
   }
   return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
   if (action.type === 'USER_INPUT') {
      return { value: action.payload, isValid: action.payload.trim().length > 6 };
   } else if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 6 };
   }
   return { value: '', isValid: false };
};

const Login = (props) => {
   const [formIsValid, setFormIsValid] = useState(false);

   const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
   const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: '',
      isValid: null,
   });

   const authCtx = useContext(AuthContext);
   const emailRef = useRef();
   const passwordRef = useRef();

   // Object destructuring with aliases, useful with useEffect depencency array
   const { isValid: emailIsValid } = emailState;
   const { isValid: passwordIsValid } = passwordState;

   useEffect(() => {
      const throttleInputAction = setTimeout(() => {
         setFormIsValid(emailIsValid && passwordIsValid);
      }, 500);

      return () => {
         clearTimeout(throttleInputAction);
      };
   }, [emailIsValid, passwordIsValid]);

   const emailChangeHandler = (event) => {
      dispatchEmail({ type: 'USER_INPUT', payload: event.target.value });
   };

   const passwordChangeHandler = (event) => {
      dispatchPassword({ type: 'USER_INPUT', payload: event.target.value });
   };

   const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
   };

   const validatePasswordHandler = () => {
      dispatchPassword({ type: 'INPUT_BLUR' });
   };

   const submitHandler = (event) => {
      event.preventDefault();
      if (formIsValid) {
         authCtx.onLogin(emailState.value, passwordState.value);
      } else if (!emailIsValid) {
         emailRef.current.focus();
      } else {
         passwordRef.current.focus();
      }
   };

   return (
      <Card className={classes.login}>
         <form onSubmit={submitHandler}>
            <Input
               ref={emailRef}
               isValid={emailIsValid}
               id='email'
               label='E-mail'
               type='email'
               value={emailState.value}
               onChange={emailChangeHandler}
               onBlur={validateEmailHandler}
            />
            <Input
               ref={passwordRef}
               isValid={passwordIsValid}
               id='password'
               label='Password'
               type='password'
               value={passwordState.value}
               onChange={passwordChangeHandler}
               onBlur={validatePasswordHandler}
            />
            <div className={classes.actions}>
               <Button type='submit' className={classes.btn} >
                  Login
               </Button>
            </div>
         </form>
      </Card>
   );
};

export default Login;
