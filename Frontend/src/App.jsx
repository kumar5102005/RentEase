import './App.css'
import Navbar from './components/Navbar'
import ProfilePage from './components/ProfilePage'
import Properties from './components/Properties'

function App() {
  // Simple routing based on URL path
  const path = window.location.pathname;
  
  // Render the appropriate component based on the path
  const renderContent = () => {
    if (path === '/profile') {
      return <ProfilePage />;
    } else {
      // Default to properties page
      return <Properties />;
    }
  };
  
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
