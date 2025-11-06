import { useState, useEffect } from 'react'
import './DebugPanel.css'

function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [logs, setLogs] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    // Intercept console.log
    const originalLog = console.log
    const originalError = console.error

    console.log = (...args) => {
      originalLog(...args)
      const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ')

      setLogs(prev => [...prev.slice(-50), { // Keep last 50 logs
        time: new Date().toLocaleTimeString(),
        message
      }])
    }

    console.error = (...args) => {
      originalError(...args)
      const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ')

      setErrors(prev => [...prev.slice(-20), { // Keep last 20 errors
        time: new Date().toLocaleTimeString(),
        message
      }])
    }

    // Cleanup
    return () => {
      console.log = originalLog
      console.error = originalError
    }
  }, [])

  const clearLogs = () => {
    setLogs([])
    setErrors([])
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        className="debug-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Toggle Debug Panel"
      >
        🐛 {errors.length > 0 && <span className="error-badge">{errors.length}</span>}
      </button>

      {/* Debug Panel */}
      {isOpen && (
        <div className="debug-panel">
          <div className="debug-header">
            <h3>🐛 Debug Panel</h3>
            <div className="debug-actions">
              <button onClick={clearLogs} className="clear-btn">Clear</button>
              <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
            </div>
          </div>

          <div className="debug-stats">
            <div className="stat">
              <span className="stat-label">Logs:</span>
              <span className="stat-value">{logs.length}</span>
            </div>
            <div className="stat error">
              <span className="stat-label">Errors:</span>
              <span className="stat-value">{errors.length}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Path:</span>
              <span className="stat-value">{window.location.pathname}</span>
            </div>
          </div>

          {/* Errors Section */}
          {errors.length > 0 && (
            <div className="debug-section errors">
              <h4>❌ Errors ({errors.length})</h4>
              <div className="log-list">
                {errors.map((error, idx) => (
                  <div key={idx} className="log-entry error">
                    <span className="log-time">{error.time}</span>
                    <span className="log-message">{error.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Logs Section */}
          <div className="debug-section logs">
            <h4>📝 Console Logs ({logs.length})</h4>
            <div className="log-list">
              {logs.length === 0 ? (
                <div className="log-entry empty">No logs yet...</div>
              ) : (
                logs.map((log, idx) => (
                  <div key={idx} className="log-entry">
                    <span className="log-time">{log.time}</span>
                    <span className="log-message">{log.message}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DebugPanel
