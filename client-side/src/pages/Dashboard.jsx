import React, { useState, useEffect } from 'react';
import calendar from '../assets/img/calender.png';
import '../assets/styles/css/Dashboard.css';
import Header from '../components/DashHeader';

const formatDate = (isoString) => {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        // second: '2-digit',
        // timeZoneName: 'short'
    };
    return new Date(isoString).toLocaleDateString(undefined, options);
};

function Dashboard() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [fields, setFields] = useState([]);
    const [selectedField, setSelectedField] = useState(null);
    const [setMarketInsights] = useState(null);
    const [errors, setErrors] = useState({});
    const [weatherData, setWeatherData] = useState(null);
    const [showFieldForm, setShowFieldForm] = useState(false);
    const [newField, setNewField] = useState({
        fieldName: '',
        fieldSize: '',
        fieldLocation: '',
        crop: '',
        fieldLog: []
    });
    const [showLogForm, setShowLogForm] = useState(false);
    const [newLog, setNewLog] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        fetchFields();
    }, []);

    useEffect(() => {
        if (selectedField) {
            getWeatherData(selectedField.fieldLocation);
        }
    }, [selectedField]);

    const fetchFields = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/fields/list_fields', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setFields(data);
            if (data.length > 0) {
                setSelectedField(data[0]);
            }
        } catch (error) {
            console.error('Error fetching fields:', error);
        }
    };

    const getWeatherData = async (location) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/weather?location=${location}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setNewField({
            ...newField,
            [name]: value
        });
    };

    const handleAddField = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/fields/add_field', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(newField)
            });
            console.log('response:', response.status);
            if (response.ok) {
                fetchFields();
                setNewField({
                    fieldName: '',
                    fieldSize: '',
                    fieldLocation: '',
                    crop: '',
                    fieldLog: []
                });
                setShowFieldForm(false);
                window.location.reload();
            } else {
                console.error('Error adding field');
            }
        } catch (error) {
            console.error('Error adding field:', error);
        }
    };

    const handleFieldSelection = (e) => {
        const selectedFieldName = e.target.value;
        const selectedField = fields.find(field => field.fieldName === selectedFieldName);
        setSelectedField(selectedField);
    };

    const formatDateTime = (date) => {
        const day = date.toLocaleString('en-US', { weekday: 'long' });
        const month = date.toLocaleString('en-US', { month: 'long' });
        const dayOfMonth = date.getDate();
        const year = date.getFullYear();
        return `${day}, ${month} ${dayOfMonth}, ${year}`;
    };

    const handleGetInsights = async () => {
        if (!selectedField) {
            setErrors({ apiError: 'No field selected' });
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/api/v1/fields/${selectedField._id}/market_insights`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                setMarketInsights(data);
                setSelectedField(prevField => ({
                    ...prevField,
                    marketInsights: data
                }));
                window.location.reload();
            } else {
                setErrors({ apiError: data.message });
            }
        } catch (error) {
            console.error('Error:', error);
            setErrors({ apiError: 'An error occurred. Please try again.' });
        }
    };

    const handleLogChange = (e) => {
        const { name, value } = e.target;
        setNewLog({
            ...newLog,
            [name]: value
        });
    };

    const handleAddLog = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/api/v1/fields/${selectedField._id}/add_log`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(newLog)
            });
            const data = await response.json();

            if (response.ok) {
                setSelectedField(prevField => ({
                    ...prevField,
                    fieldLog: [...prevField.fieldLog, data]
                }));
                setNewLog({
                    title: '',
                    description: ''
                });
                setShowLogForm(false);
            } else {
                console.error('Error adding log');
            }
        } catch (error) {
            console.error('Error adding log:', error);
        }
    };

    const getDemandClass = (demand) => {
        switch (demand.toLowerCase()) {
            case 'low':
                return 'demand-low';
            case 'medium':
                return 'demand-medium';
            case 'high':
                return 'demand-high';
            default:
                return '';
        }
    };

    const getSupplyClass = (supply) => {
        switch (supply.toLowerCase()) {
            case 'low':
                return 'supply-low';
            case 'medium':
                return 'supply-medium';
            case 'high':
                return 'supply-high';
            default:
                return '';
        }
    };

    return (
        <div>
            <Header />
            <div className='flex-row-container'>
                <div className='main-container'>
                    <div className='container' id='date-time'>
                        <h1>Daily Overview</h1>
                        <span><img src={calendar} alt='calendar-icon' /> {formatDateTime(currentDateTime)}</span>
                    </div>
                    <div className='container' id='weather-box'>
                        {selectedField ? (
                            weatherData ? (
                                <div className='w-info'>
                                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='weather-icon' id='w-icon'/>
                                    <div><span id='temp'>{weatherData.main.temp}</span><sup id='deg'>°C</sup>
                                    <h4 id='city'>City: {selectedField.fieldLocation}</h4></div><br/>
                                </div>
                            ) : (
                                <p>Loading weather data...</p>
                            )
                        ) : (
                            <p>No field selected</p>
                        )}
                    </div>
                    <div className='container' id='weather-box-two'>
                        {selectedField ? (
                            weatherData ? (
                                <>
                                <div className='w-info2'>
                                    <p>H: {weatherData.main.humidity}%</p>
                                    <p style={{ color: '#6cdda8' }}>&nbsp;|&nbsp;</p>
                                    <p>P: {weatherData.main.pressure}hPa</p>
                                    <p style={{ color: '#6cdda8' }}>&nbsp;|&nbsp;</p>
                                    <p>WS: {weatherData.wind.speed}m/s</p>
                                </div>
                                <span id='w-keys'>H - Humidity, P - Pressure, WS - Wind Speed</span>
                                </>
                            ) : (
                                <p>Loading weather data...</p>
                            )
                        ) : (
                            <p>No field selected</p>
                        )}
                    </div>
                </div>
                <div className='main-container'>
                    <div className='container' id='select-field'>
                        <h2>Select a Field</h2>
                            <select onChange={handleFieldSelection} value={selectedField ? selectedField.fieldName : ''}>
                                {fields.map((field) => (
                                    <option key={field._id} value={field.fieldName} id='options'>
                                        {field.fieldName}
                                    </option>
                                ))}
                            </select>
                            <button id="add-field" onClick={() => setShowFieldForm(!showFieldForm)}>
                                {showFieldForm ? 'Cancel' : 'Add New Field'}
                            </button>
                            {showFieldForm && (
                                <div className='field-form'>
                                    <h2>Add a New Field</h2>
                                    <form onSubmit={handleAddField}>
                                        <input
                                            type="text"
                                            name="fieldName"
                                            placeholder="Field Name"
                                            value={newField.fieldName}
                                            onChange={handleFieldChange}
                                            required
                                        />
                                        <input
                                            type="number"
                                            name="fieldSize"
                                            placeholder="Field Size in acres"
                                            value={newField.fieldSize}
                                            onChange={handleFieldChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="fieldLocation"
                                            placeholder="Field Location"
                                            value={newField.fieldLocation}
                                            onChange={handleFieldChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="crop"
                                            placeholder="Crop"
                                            value={newField.crop}
                                            onChange={handleFieldChange}
                                            required
                                        />
                                        <button type="submit">Add Field</button>
                                    </form>
                                </div>
                            )}
                    </div>
                    <div className='container' id='field-details'>
                        {selectedField ? (
                            <>
                            <h2>{selectedField.fieldName}</h2>
                            <div className='f-propty'>
                                <div><p><span>Location:</span> {selectedField.fieldLocation}</p>
                                <p><span>Size:</span> {selectedField.fieldSize} acres</p></div>
                                <div><p><span>Crop Planted:</span> {selectedField.crop}</p></div>
                            </div>
                            </>
                        ) : (
                            <p>No field selected</p>
                        )}
                    </div>
                </div>
                <div className='main-container'>
                    <div className='container' id='market'>
                        <h2>Market Insights</h2>
                        <div className='market-insights'>
                            {selectedField ? (
                                selectedField.marketInsights ? (
                                    <div className='insight-item'>
                                        <p>Current Price: ${selectedField.marketInsights.currentPrice}/kg</p>
                                        <p>Price Trend: {selectedField.marketInsights.priceTrend}</p>
                                        <span><p className={getDemandClass(selectedField.marketInsights.demand)}>Demand: {selectedField.marketInsights.demand}</p>
                                        <p className={getSupplyClass(selectedField.marketInsights.supply)}>Supply: {selectedField.marketInsights.supply}</p></span>
                                    </div>
                                ) : (
                                    <>
                                        <p>No market insights available</p>
                                        <button onClick={handleGetInsights}>Get Insights</button>
                                    </>
                                )
                            ) : (
                                <p>No field selected</p>
                            )}
                        </div>
                        {errors.apiError && <div className="error">{errors.apiError}</div>}
                    </div>
                    <div className='container' id='field-log'>
                        <h2>Field Log</h2>
                        <div>
                            {selectedField ? (
                                selectedField.fieldLog.length > 0 ? (
                                    selectedField.fieldLog.map((log, index) => (
                                        <div key={index} className='log-item'>
                                            <h3>{log.title} <span id='logDate'>[ {formatDate(log.createdAt)} ]</span></h3>
                                            <p>{log.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p id='stud'>No log entries</p>
                                )
                            ) : (
                                <p id='stud'>No field selected</p>
                            )}
                        </div>
                        <button onClick={() => setShowLogForm(!showLogForm)} id='add-log'>
                        {showLogForm ? '-' : '+'}
                        </button>
                        {showLogForm && (
                            <div className='log-form'>
                                <h2>Add a New Log Entry</h2>
                                <form onSubmit={handleAddLog}>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Log Title"
                                        value={newLog.title}
                                        onChange={handleLogChange}
                                        required
                                    />
                                    <textarea
                                        name="description"
                                        placeholder="Log Description"
                                        value={newLog.description}
                                        onChange={handleLogChange}
                                        required
                                    />
                                    <button type="submit">Add Log</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
