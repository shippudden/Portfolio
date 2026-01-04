import React from "react";
import PropTypes from "prop-types";

/**
 * ErrorBoundary Component
 *
 * A class component that catches JavaScript errors anywhere in the component tree
 * and displays a fallback error UI instead of crashing the entire app.
 *
 * Why a Class Component?
 * - Error boundaries MUST be class components
 * - React Hooks don't have error boundary equivalents (as of React 18)
 * - Lifecycle methods getDerivedStateFromError and componentDidCatch only work in classes
 * - This is the only exception where a class component is preferred in modern React
 *
 * How It Works:
 * 1. Normal rendering: Returns child components unchanged
 * 2. Error occurs in child: Catches error via getDerivedStateFromError
 * 3. Sets hasError state to true, stores error object
 * 4. Renders fallback UI with error message and recovery button
 *
 * Lifecycle Methods Explained:
 *
 * static getDerivedStateFromError(error)
 * - Runs during rendering phase when error is caught
 * - Must return new state object
 * - Updates hasError: true and error: errorObject
 * - Synchronous, pure function (no side effects)
 * Why? Keeps UI consistent, prevents partial renders
 *
 * componentDidCatch(error, errorInfo)
 * - Runs after error has been caught (commit phase)
 * - Receives error and errorInfo with component stack trace
 * - Used for side effects: logging, error reporting, analytics
 * Why? Allows you to report errors to external services
 * Separated from getDerivedStateFromError to maintain purity
 *
 * State Management:
 * - hasError {boolean} - Tracks if error has occurred
 * - error {Error|null} - Stores error object for debugging
 *
 * Fallback UI:
 * - Centered, accessible error message
 * - "Refresh Page" button that calls window.location.reload()
 * Why? Complete page reload clears all state and rerenders from scratch
 * This is the most reliable recovery method for critical errors
 *
 * Dark Mode Support:
 * - Uses dark:text-white and dark:text-gray-300 for readability
 * - Works with existing theme system
 *
 * Props:
 * - children {ReactNode} - Components to be protected by this boundary
 *
 * What Gets Caught:
 * - Errors during rendering
 * - Errors in lifecycle methods
 * - Errors in constructor
 * - Errors in event handlers (if wrapped in try/catch)
 *
 * What Does NOT Get Caught:
 * - Async code (setTimeout, promises, async/await)
 * - Event handlers (unless wrapped in try/catch)
 * - Server-side rendering errors
 * - Errors in the error boundary itself
 *
 * Usage in App:
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 *
 * This wraps entire app so any render error gets caught.
 *
 * Best Practices:
 * 1. Place at app root (catches all errors)
 * 2. Can place multiple boundaries at different levels
 * 3. Log errors to error tracking service (Sentry, etc.)
 * 4. Avoid generic "something went wrong" for all errors
 * 5. Consider different error boundaries for different features
 *
 * Why This Approach?
 * - Prevents white screen of death
 * - Provides graceful degradation
 * - Users can recover by refreshing
 * - Better UX than broken application state
 * - Improves perceived reliability
 *
 * Future Enhancement:
 * - Could log to Sentry or similar error tracking
 * - Could show different error messages for different error types
 * - Could redirect to home page instead of showing inline error
 * - Could capture user context at time of error for debugging
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Oops!</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Something went wrong. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
