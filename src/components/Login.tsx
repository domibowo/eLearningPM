import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, ArrowLeft, UserPlus } from 'lucide-react';
import { RadixLabel } from './commons/Label';
import { Button } from './commons/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './commons/Card';
import { Input } from './commons/Input';
import { Alert, AlertDescription } from './commons/Alert';

interface LoginProps {
  onLoginSuccess?: () => void;
  onBack?: () => void;
}

export function Login({ onLoginSuccess, onBack }: LoginProps) {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      if (!email || !password) {
        setError('Please enter both email and password');
        setIsLoading(false);
        return;
      }

      if (mode === 'signup' && !name) {
        setError('Please enter your name');
        setIsLoading(false);
        return;
      }

      if (mode === 'login') {
        await login(email, password);
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        await signup(email, password, name);
        setSuccess('Account created successfully! You can now sign in.');
        setMode('login');
        setPassword('');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setError('');
    setSuccess('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {onBack && (
          <Button
            variant="ghost" 
            onClick={onBack}
            className="mb-4 text-blue-700 hover:text-blue-800 hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        )}
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-700 p-3 rounded-full">
                {mode === 'login' ? (
                  <LogIn className="h-6 w-6 text-white" />
                ) : (
                  <UserPlus className="h-6 w-6 text-white" />
                )}
              </div>
            </div>
            <CardTitle className="text-2xl text-center">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </CardTitle>
            <CardDescription className="text-center">
              {mode === 'login' 
                ? 'Sign in to continue your learning journey' 
                : 'Sign up to start your learning journey'}
            </CardDescription>
          </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="space-y-2">
                <RadixLabel htmlFor="name">Full Name</RadixLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            )}
            
            <div className="space-y-2">
              <RadixLabel htmlFor="email">Email</RadixLabel>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <RadixLabel htmlFor="password">Password</RadixLabel>
              <Input
                id="password"
                type="password"
                placeholder={mode === 'login' ? 'Enter your password' : 'Create a password (min 6 characters)'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-200 bg-green-50">
                <AlertDescription className="text-green-800">{success}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full bg-blue-700 hover:bg-blue-800"
              disabled={isLoading}
            >
              {isLoading 
                ? (mode === 'login' ? 'Signing in...' : 'Creating account...') 
                : (mode === 'login' ? 'Sign In' : 'Sign Up')}
            </Button>

            <div className="text-sm text-center">
              <button
                type="button"
                onClick={toggleMode}
                className="text-blue-700 hover:text-blue-800 hover:underline"
                disabled={isLoading}
              >
                {mode === 'login' 
                  ? "Don't have an account? Sign up" 
                  : 'Already have an account? Sign in'}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
