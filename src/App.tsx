import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ModulePage } from "./components/ModulePage";

type Page = 'home' | 'login' | 'module';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedModule, setSelectedModule] = useState<string>('');

  const handleModuleClick = (moduleId: string) => {
    setSelectedModule(moduleId);
    setCurrentPage('module');
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
    setSelectedModule('');
  };

  const handleNavigateToLogin = () => {
    setCurrentPage('login');
  };

  const handleLoginSuccess = () => {
    setCurrentPage('home');
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        {currentPage !== 'login' && currentPage !== 'module' && (
          <Header onNavigateToLogin={handleNavigateToLogin} />
        )}
        
        <main>
          {currentPage === 'home' && (
            <Home onModuleClick={handleModuleClick} />
          )}
          
          {currentPage === 'login' && (
            <Login 
              onLoginSuccess={handleLoginSuccess}
              onBack={handleNavigateHome}
            />
          )}
          
          {currentPage === 'module' && (
            <ModulePage 
              moduleId={selectedModule} 
              onNavigateHome={handleNavigateHome} 
            />
          )}
        </main>
      </div>
    </AuthProvider>
  );
}