import { useState } from 'react';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

export const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <section className='mx-auto pb-[76px]'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl md:text-4xl font-bold text-Neutral-0 mb-3'>
          {isRegistering ? 'Crea tu cuenta' : 'Bienvenido de vuelta'}
        </h1>
        <p className='text-Neutral-500 text-xl'>
          {isRegistering ? 'Regístrate para generar tu ticket' : 'Inicia sesión para continuar'}
        </p>
      </div>

      <div className='bg-Neutral-900/40 border border-Neutral-700 rounded-2xl p-8 backdrop-blur-sm'>
        {isRegistering ? <RegisterForm /> : <LoginForm />}

        <p className='text-center text-Neutral-500 mt-6'>
          {isRegistering ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
          <button
            type='button'
            onClick={() => setIsRegistering(!isRegistering)}
            className='text-Orange-500 hover:text-Orange-700 font-bold cursor-pointer'
          >
            {isRegistering ? 'Inicia sesión' : 'Regístrate'}
          </button>
        </p>
      </div>
    </section>
  );
};
