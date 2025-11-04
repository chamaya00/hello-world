import { useState } from 'react'

const themes = [
  { id: 'minimal-bold', name: 'Minimal Bold', description: 'Clean colors, bold style (default)' },
  { id: 'minimal', name: 'Minimal Medium', description: 'Clean, readable original' },
  { id: 'bold-modern', name: 'Bold Modern', description: 'Large type, purple gradient' },
  { id: 'dark-elegant', name: 'Dark Elegant', description: 'Sophisticated dark mode' },
  { id: 'brutalist', name: 'Brutalist', description: 'Raw, sharp, monospace' },
  { id: 'gradient-colorful', name: 'Gradient Colorful', description: 'Vibrant and playful' },
]

function ThemeSelector({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000,
    }}>
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          background: '#ffffff',
          border: '2px solid #e6e6e6',
          borderRadius: '12px',
          padding: '16px',
          minWidth: '300px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        }}>
          <h3 style={{
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#242424',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Choose Theme
          </h3>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                onThemeChange(theme.id)
                setIsOpen(false)
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                marginBottom: '8px',
                border: currentTheme === theme.id ? '2px solid #667eea' : '1px solid #e6e6e6',
                borderRadius: '8px',
                background: currentTheme === theme.id ? '#f0f0ff' : '#ffffff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (currentTheme !== theme.id) {
                  e.target.style.background = '#f9f9f9'
                }
              }}
              onMouseLeave={(e) => {
                if (currentTheme !== theme.id) {
                  e.target.style.background = '#ffffff'
                }
              }}
            >
              <div style={{
                fontWeight: '600',
                fontSize: '15px',
                color: '#242424',
                marginBottom: '2px',
              }}>
                {theme.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#6b6b6b',
              }}>
                {theme.description}
              </div>
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          color: '#ffffff',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)'
          e.target.style.boxShadow = '0 6px 30px rgba(102, 126, 234, 0.5)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.4)'
        }}
        title="Change Theme"
      >
        🎨
      </button>
    </div>
  )
}

export default ThemeSelector
