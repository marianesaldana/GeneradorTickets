import { TicketFormPage } from './components/ticket-form-page/ticket-form-page'
import { MainLayout } from './components/layouts/main-layout'
// import { ConfirmationPage } from './components/confirmation-page/confirmation-page'


function App() {

  return (
    <MainLayout>
        {/* <ConfirmationPage /> */}
        <TicketFormPage />
    </MainLayout>
  )
}

export default App
