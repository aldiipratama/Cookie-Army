import { createContext, useContext } from 'react';
import { Head } from '@inertiajs/react';
import PostCard from '@/components/PostCard';
import Stories from '@/components/Stories';
import AppLayout from '@/layouts/AppLayout';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
}

export const HomeContext = createContext<Props>({ canLogin: false, canRegister: false })

export default function Home({
  canLogin,
  canRegister,
}: Props) {
  return (
    <HomeContext.Provider value={{ canLogin, canRegister }}>
      <Head title="Home" />
      <AppLayout>
        <Stories />
        <PostCard />
      </AppLayout>
    </HomeContext.Provider>
  );
}

export const useHomeContext = () => useContext(HomeContext)