import type { NextPage } from 'next';
import { Kanit } from 'next/font/google';
import RegisterForm from '@/components/RegisterForm';

const kanit = Kanit({
  weight: ['400', '500', '600'],
  subsets: ['thai', 'latin'],
  display: 'swap',
});

const RegisterPage: NextPage = () => {
  return (
    <div className={`min-h-screen bg-zinc-950 flex items-center justify-center p-4 ${kanit.className}`}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;