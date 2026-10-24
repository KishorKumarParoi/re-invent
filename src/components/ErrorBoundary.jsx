import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-8 text-center text-white bg-black/90 rounded-2xl border border-cyan-500/20 my-6 max-w-2xl mx-auto backdrop-blur-md">
            <h3 className="text-xl font-bold text-cyan-400 font-mono">System Isolation Shield Active</h3>
            <p className="text-gray-400 text-sm mt-2 font-mono">
              Gracefully isolated a component render fault. Core application runtime remains intact.
            </p>
          </div>
        )
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
