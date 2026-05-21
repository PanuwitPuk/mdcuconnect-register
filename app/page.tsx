import type { NextPage } from 'next';
import { Kanit, Monomakh } from 'next/font/google';
import RegisterForm from '@/components/RegisterForm';

const kanit = Kanit({
  weight: ['400', '500', '600'],
  subsets: ['thai', 'latin'],
  display: 'swap',
});

const monomakh = Monomakh({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const RegisterPage: NextPage = () => {
  return (
    <div className={`min-h-screen bg-zinc-950 flex items-center justify-center p-4 ${kanit.className}`}>
      <RegisterForm monomakhClassName={monomakh.className} />
    </div>
  );
};

export default RegisterPage;