import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  
  const fetchData = async () => {
    try {
      let api = isEnabled ? `http://localhost:8080/api/table/${inputValue}` : `http://localhost:8080/api/hello/${inputValue}`;
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setApiResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleToggle = () => {
          setIsEnabled(!isEnabled);
          setInputValue('');
        };

        const handleChange = (e) => {
          if (isEnabled) {
            const value = e.target.value;
            if (!isNaN(value)) {
              setInputValue(value);
            }
          } else {
            setInputValue(e.target.value);
          }
        };

        return (
          <div className="App">
            <h1>My App</h1>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder={isEnabled ? "Enter number" : "Enter text"}
            />
            <button onClick={handleToggle}>
              {isEnabled ? "Disable Number Only" : "Enable Number Only"}
            </button>
            <button disabled={!inputValue} onClick={fetchData}>Fetch Data</button>
            {apiResponse && (
              <div className="response-container">
                <h3>API Response:</h3>
                <pre>{JSON.stringify(apiResponse.data, null, 2)}</pre>
              </div>
            )}
          </div>
        );
      }

export default App;
