import React, { useState, useEffect } from 'react';
import { AlertCircle, Moon, Sun, CheckCircle, XCircle, Info } from 'lucide-react';

// Import the actual Lucky Web SDK
// Uncomment this line and remove the mock below when using the real SDK
// import { showLuckyModal } from '../luckyWebSdk';

// Mock SDK for demonstration - REMOVE THIS when using the real SDK
const showLuckyModal = (apiKey: string, options: any) => {
  console.log('Opening Lucky Modal with API Key:', apiKey.substring(0, 10) + '...');
  console.log('Options:', options);
  
  // Simulate async modal operation
  setTimeout(() => {
    // Simulate 70% success rate for demo purposes
    const success = Math.random() > 0.3;
    console.log('Modal finished. Success:', success);
    options.onFinish?.(success);
  }, 2000);
};

/**
 * Enhanced Lucky Web SDK Example Component
 * 
 * Features:
 * - Reads API key from .env file (REACT_APP_API_KEY)
 * - API key validation with user feedback
 * - Error handling with try-catch
 * - Loading states during modal operations
 * - Success/failure feedback to users
 * - Auto-dismissing alerts
 * - Improved accessibility
 * - Clean, modern UI without external CSS dependencies
 * 
 * Setup:
 * 1. Create/update .env file: REACT_APP_API_KEY=your-actual-api-key
 * 2. Restart your development server (npm start or yarn start)
 * 3. Ensure a div with id="lucky" exists in your HTML
 * 4. Replace the mock showLuckyModal with the actual SDK import
 */
export default function Example() {
  // Read API key from environment variable
  const API_KEY = process.env.REACT_APP_API_KEY || '';
  
  // Component state
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error' | 'warning' | 'info' | null;
    message: string;
  }>({ type: null, message: '' });
  const [apiKeyStatus, setApiKeyStatus] = useState<'valid' | 'missing' | 'placeholder'>('missing');

  // Validate API key on component mount
  useEffect(() => {
    if (!API_KEY) {
      setApiKeyStatus('missing');
      setFeedback({
        type: 'warning',
        message: 'API key not found. Please set REACT_APP_API_KEY in your .env file and restart the server.'
      });
    } else if (API_KEY === 'your-api-key-here') {
      setApiKeyStatus('placeholder');
      setFeedback({
        type: 'warning',
        message: 'Please replace the placeholder API key in your .env file with your actual Lucky Web SDK API key.'
      });
    } else {
      setApiKeyStatus('valid');
      setFeedback({
        type: 'info',
        message: 'API key loaded successfully! You can now use the Lucky Web SDK.'
      });
      
      // Auto-clear success message after 3 seconds
      setTimeout(() => {
        setFeedback({ type: null, message: '' });
      }, 3000);
    }
  }, [API_KEY]);

  /**
   * Handle opening the Lucky modal
   * @param darkMode - Whether to open in dark mode
   */
  const handleOpenModal = async (darkMode: boolean) => {
    // Clear previous feedback
    setFeedback({ type: null, message: '' });
    
    // Validate API key before attempting to open modal
    if (apiKeyStatus !== 'valid') {
      setFeedback({
        type: 'error',
        message: 'Cannot open modal: Please configure a valid API key first.'
      });
      return;
    }

    setIsLoading(true);

    try {
      // Call the Lucky Web SDK
      showLuckyModal(API_KEY, {
        darkMode,
        onFinish: (success: boolean) => {
          setIsLoading(false);
          
          if (success) {
            setFeedback({
              type: 'success',
              message: `✨ Modal completed successfully in ${darkMode ? 'dark' : 'light'} mode!`
            });
          } else {
            setFeedback({
              type: 'error',
              message: 'Modal operation was cancelled or failed. Please try again.'
            });
          }

          // Auto-clear feedback after 5 seconds
          setTimeout(() => {
            setFeedback({ type: null, message: '' });
          }, 5000);
        }
      });
      
      // Show immediate feedback that modal is opening
      setFeedback({
        type: 'info',
        message: `Opening Lucky modal in ${darkMode ? 'dark' : 'light'} mode...`
      });
      
    } catch (error) {
      setIsLoading(false);
      setFeedback({
        type: 'error',
        message: `Failed to open modal: ${error instanceof Error ? error.message : 'Unknown error occurred'}`
      });
      console.error('Lucky Modal Error:', error);
    }
  };

  /**
   * Get CSS classes for feedback alerts based on type
   */
  const getFeedbackStyles = () => {
    const baseStyles = 'p-4 rounded-lg mb-6 flex items-start gap-3 animate-fade-in';
    switch (feedback.type) {
      case 'success':
        return `${baseStyles} bg-green-50 text-green-900 border border-green-200`;
      case 'error':
        return `${baseStyles} bg-red-50 text-red-900 border border-red-200`;
      case 'warning':
        return `${baseStyles} bg-yellow-50 text-yellow-900 border border-yellow-200`;
      case 'info':
        return `${baseStyles} bg-blue-50 text-blue-900 border border-blue-200`;
      default:
        return '';
    }
  };

  /**
   * Get icon component based on feedback type
   */
  const getFeedbackIcon = () => {
    const iconClass = "w-5 h-5 flex-shrink-0 mt-0.5";
    switch (feedback.type) {
      case 'success':
        return <CheckCircle className={iconClass} />;
      case 'error':
        return <XCircle className={iconClass} />;
      case 'warning':
        return <AlertCircle className={iconClass} />;
      case 'info':
        return <Info className={iconClass} />;
      default:
        return null;
    }
  };

  /**
   * Dismiss feedback alert manually
   */
  const dismissFeedback = () => {
    setFeedback({ type: null, message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Lucky Web SDK
            </h1>
            <p className="text-lg text-gray-600">
              Integration Example & Demo
            </p>
          </div>

          {/* API Key Status Indicator */}
          <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                apiKeyStatus === 'valid' ? 'bg-green-500' : 
                apiKeyStatus === 'placeholder' ? 'bg-yellow-500' : 
                'bg-red-500'
              }`} />
              <span className="text-sm font-medium text-gray-700">
                API Key Status: {
                  apiKeyStatus === 'valid' ? 'Connected' :
                  apiKeyStatus === 'placeholder' ? 'Placeholder' :
                  'Not Configured'
                }
              </span>
            </div>
            {API_KEY && (
              <span className="text-xs text-gray-500 font-mono">
                {API_KEY.substring(0, 12)}...
              </span>
            )}
          </div>

          {/* Feedback Alert */}
          {feedback.type && (
            <div className={getFeedbackStyles()}>
              {getFeedbackIcon()}
              <p className="flex-1 text-sm font-medium">{feedback.message}</p>
              <button
                onClick={dismissFeedback}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Dismiss"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Click the buttons below to open the Lucky modal in light or dark mode. 
              The modal integrates seamlessly with your application and provides a 
              complete user experience with proper callbacks and state management.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <button
              onClick={() => handleOpenModal(false)}
              disabled={isLoading || apiKeyStatus !== 'valid'}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sun className="w-5 h-5" />
              <span>{isLoading ? 'Opening Modal...' : 'Open Modal (Light Mode)'}</span>
            </button>

            <button
              onClick={() => handleOpenModal(true)}
              disabled={isLoading || apiKeyStatus !== 'valid'}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Moon className="w-5 h-5" />
              <span>{isLoading ? 'Opening Modal...' : 'Open Modal (Dark Mode)'}</span>
            </button>
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="mb-8 flex items-center justify-center gap-3 py-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="w-5 h-5 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-blue-900 font-medium">Processing your request...</span>
            </div>
          )}

          {/* Setup Instructions */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Setup Instructions
            </h3>
            <ol className="space-y-3 text-sm text-blue-800">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <div>
                  <strong>Create/Update .env file</strong> in your project root directory
                  <pre className="mt-2 p-2 bg-white rounded border border-blue-200 text-xs font-mono overflow-x-auto">
REACT_APP_API_KEY=your-actual-api-key-here
                  </pre>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <strong>Restart your development server</strong> for changes to take effect
                  <pre className="mt-2 p-2 bg-white rounded border border-blue-200 text-xs font-mono">
npm start  <span className="text-gray-500"># or</span> yarn start
                  </pre>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <div>
                  <strong>Ensure a div with id="lucky"</strong> exists in your HTML (already included below)
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <div>
                  <strong>Replace the mock function</strong> with the actual SDK import at the top of this file
                </div>
              </li>
            </ol>
            
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-xs text-yellow-900 font-medium flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Important:</strong> Never commit your .env file to version control. 
                  Add it to your .gitignore file to keep your API key secure.
                </span>
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">✅ Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Environment variable integration</li>
                <li>• API key validation</li>
                <li>• Error handling</li>
                <li>• Loading states</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🎨 UI/UX</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Light & dark mode support</li>
                <li>• Success/error feedback</li>
                <li>• Auto-dismissing alerts</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Required: This div is where the modal will be rendered */}
        <div id="lucky" />
        
        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Lucky Web SDK Integration Example • Built with React & TypeScript</p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}