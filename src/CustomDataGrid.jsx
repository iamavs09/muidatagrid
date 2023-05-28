import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

//data with no windSpeed
// [
// {
//   id: '1',
//   city: 'Delhi',
//   weather: '42degreeC',
//   CurrentDt: '29/05/2023 11:11:00',
//   windSpeed: '32mph',
// },
// {
//   id: '2',
//   city: 'Chandigarh',
//   weather: '38degreeC',
//   CurrentDt: '29/05/2023 11:11:00',
//   windSpeed: '39mph',
// },
// ]
  


const WeatherGrid = () => {
  const [weatherData, setWeatherData] = useState([
    {
      id: '1',
      city: 'Delhi',
      weather: '42degreeC',
      CurrentDt: '29/05/2023 11:11:00',
      windSpeed: '32mph',
      
    },
    {
      id: '2',
      city: 'Chandigarh',
      weather: '38degreeC',
      CurrentDt: '29/05/2023 11:11:00',
      windSpeed: '39mph',
    },
  ]);
  const [columns, setColumns] = useState([]);
  
  useEffect(() => {
    if (weatherData.length > 0) {
      const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'weather', headerName: 'Weather', width: 150 },
        { field: 'CurrentDt', headerName: 'Current Date', width: 200 },
      ];

      const allKeys = weatherData.reduce(
        (keys, data) => [...keys, ...Object.keys(data)],
        []
      );

      const uniqueKeys = [...new Set(allKeys)].filter(
        (key) => !['city', 'weather', 'CurrentDt','id'].includes(key)
        );
        
      const additionalColumns = uniqueKeys.map((key) => ({
        field: key,
        headerName: key,
        width: 150,
      }));

      const updatedColumns = [...columns, ...additionalColumns];
      setColumns(updatedColumns);
    }
  }, [weatherData]);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={weatherData} columns={columns} />
    </div>
  );
};

export default WeatherGrid;

