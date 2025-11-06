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

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('✓ Copied to clipboard!')
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        alert('✓ Copied to clipboard!')
      } catch (e) {
        alert('❌ Failed to copy. Please select and copy manually.')
      }
      document.body.removeChild(textArea)
    }
  }

  const copyAllErrors = () => {
    const errorText = errors.map((error, idx) =>
      `[${idx + 1}] ${error.time} - ${error.message}`
    ).join('\n\n')
    copyToClipboard(errorText)
  }

  const copyAllLogs = () => {
    const allLogs = [
      '=== ERRORS ===',
      ...errors.map((error, idx) => `[${idx + 1}] ${error.time} - ${error.message}`),
      '',
      '=== LOGS ===',
      ...logs.map((log, idx) => `[${idx + 1}] ${log.time} - ${log.message}`)
    ].join('\n')
    copyToClipboard(allLogs)
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
              <button onClick={copyAllLogs} className="copy-btn" title="Copy all logs">📋</button>
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
              <div className="section-header">
                <h4>❌ Errors ({errors.length})</h4>
                <button onClick={copyAllErrors} className="copy-section-btn">
                  📋 Copy All Errors
                </button>
              </div>
              <div className="log-list errors-list">
                {errors.map((error, idx) => (
                  <div key={idx} className="log-entry error">
                    <div className="log-header">
                      <span className="log-time">{error.time}</span>
                      <button
                        onClick={() => copyToClipboard(error.message)}
                        className="copy-log-btn"
                        title="Copy this error"
                      >
                        📋
                      </button>
                    </div>
                    <div className="log-message selectable">{error.message}</div>
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
                    <span className="log-message selectable">{log.message}</span>
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
