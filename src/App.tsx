import { TicketFormPage } from './components/ticket-form-page/ticket-form-page'
import { MainLayout } from './components/layouts/main-layout'
import { useShowTicket } from './hooks/use-show-ticket';
import { ConfirmationPage } from './components/confirmation-page/confirmation-page'
import { LoginPage } from './components/login-page/login-page';
import { useAuthStore } from './store/auth';


function App() {

  const context = useShowTicket();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const renderPage = () => {
    if (!isAuthenticated) return <LoginPage />;
    if (context.showTicket) return <ConfirmationPage />;
    return <TicketFormPage />;
  };

  return (
      <MainLayout>
        <main className='max-w-3xl mx-auto'>
          {renderPage()}
        </main>
      </MainLayout>
  )
}

export default App
