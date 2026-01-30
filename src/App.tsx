import { useState, useEffect } from 'react'
import './App.css'
import type { paths } from './types/grocy'

type SystemInfoResponse = paths['/system/info']['get']['responses']['200']['content']['application/json']

function App() {
  const [systemInfo, setSystemInfo] = useState<SystemInfoResponse | null>(null)

  useEffect(() => {
    fetch('/api/grocy/system/info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setSystemInfo(data))
    .catch(error => console.error(`Error: ${error}`));
  }, [])

  return (
    <>
      <div style={{ padding: '20px' }}>
      <h1>Mój interfejs Grocy</h1>
      {systemInfo ? (
        <div>
          <p>Wersja Grocy: <strong>{systemInfo?.grocy_version?.Version}</strong></p>
          <p>Wersja PHP: <strong>{systemInfo.php_version}</strong></p>
          <p style={{ color: 'green' }}>Połączenie udane!</p>
        </div>
      ) : (
        <p>Ładowanie danych...</p>
      )}
    </div>
    </>
  )
}

export default App
