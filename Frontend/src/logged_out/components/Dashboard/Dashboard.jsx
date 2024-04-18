import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import Chart from 'chart.js/auto';
// import './SensorReading.css';

import chart from  '../../../assets/images/chartaverage_1.png';
import styles from './Dashboard.css'
import AppLayout from '../../../layout/AppLayout';


export default function Dashboard() {

  const [temperatureData, setTemperatureData] = useState([]); 
  const [humidityData, setHumidityData] = useState([]);
  const [co2Data, setCO2Data] = useState([]);
  const [timestamps, setTimestamps] = useState([]); 
  const chartRef = useRef(null);
  const chartRefs = useRef([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyChrRYhNgnGh0C8a5rnkSYcr1hFCKX9eS8",
      authDomain: "objectdetect-9b57f.firebaseapp.com",
      databaseURL: "https://objectdetect-9b57f-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "objectdetect-9b57f",
      storageBucket: "objectdetect-9b57f.appspot.com",
      messagingSenderId: "929994843586",
      appId: "1:929994843586:web:5983853990f4ca0451e25b",
      measurementId: "G-6XL0N5YM85"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const database = firebase.database();
    const temperatureRef = database.ref('Temperature');
    const humidityRef = database.ref('Humidity');
    const co2Ref = database.ref('COO');

    // Fetch data from Firebase and update state
    temperatureRef.on('value', (snapshot) => {
      const temperatureValue = snapshot.val();
      setTemperatureData(prevData => [...prevData, temperatureValue]);
      updateTimestamps();
    });

    humidityRef.on('value', (snapshot) => {
      const humidityValue = snapshot.val();
      setHumidityData(prevData => [...prevData, humidityValue]);
      updateTimestamps();
    });

    co2Ref.on('value', (snapshot) => {
      const co2Value = snapshot.val();
      setCO2Data(prevData => [...prevData, co2Value]);
      updateTimestamps();
    });

    return () => {
      temperatureRef.off();
      humidityRef.off();
      co2Ref.off();
    };
  }, []);

  const updateTimestamps = () => {
    setTimestamps(prevTimestamps => [...prevTimestamps, new Date().toLocaleTimeString()]);
  };


    const createChart = (canvasId, data, label, backgroundColor, borderColor) => {
      const ctx = document.getElementById(canvasId).getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [
          {
            label: label,
            backgroundColor: backgroundColor,//'rgba(255, 99, 132, 0.2)',
            borderColor: borderColor,//'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            data: data,
          }
          //},
          // {
            
          //   backgroundColor: 'rgba(54, 162, 235, 0.2)',
          //   borderColor: 'rgba(54, 162, 235, 1)',
          //   borderWidth: 2,
          //   pointRadius: 3,
          //   pointHoverRadius: 5,
          //   data: humidityData,
          // },
          // {
          //   label: '',
          //   backgroundColor: 'rgba(235, 162, 54, 0.2)',
          //   borderColor: 'rgba(235, 162, 54, 1)',
          //   borderWidth: 2,
          //   pointRadius: 3,
          //   pointHoverRadius: 5,
          //   data: co2Data,
          // },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1.5,
        scales: {
          x: {
            ticks: {
              color: '#999',
              font: {
                size: 12,
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: '#999',
              font: {
                size: 12,
              },
            },
            grid: {
              display: '#999',
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: '#aaa',
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
    chartRefs.current.push(chartInstance);};
    useEffect(() => {
      createChart('tempHumidityChart1', temperatureData, 'Meat (KG)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)');
      createChart('tempHumidityChart2', humidityData, 'Water (%L)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)');
      createChart('tempHumidityChart3', co2Data, 'IMMUNITY (units)', 'rgba(235, 162, 54, 0.2)', 'rgba(235, 162, 54, 1)');
      createChart('tempHumidityChart4', co2Data, 'Climate', 'rgba(235, 162, 54, 0.2)', 'rgba(235, 162, 54, 1)');
  
      // Additional charts can be created dynamically here if needed
  
      // Cleanup function to destroy charts
      return () => {
        chartRefs.current.forEach(chart => chart.destroy());
      };
  }, [temperatureData, humidityData, co2Data, timestamps]);

  const popupImages = [chart, chart, chart, chart, chart]; 
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AppLayout isSidebar={true}>
    <main className="cd__main">
    <div className="container-fluid">
      <div className="row mt-1">
        <div className="col-2">
          {/* <header style={{ position: 'fixed' }}>
            <div className="d-flex flex-column flex-shrink-0 sidebar-wrap">
              <a href="/" className="text-decoration-none logo-wrap">
                <div className="icon-wrap">
                <i className="fab fa-slack"></i>
                  </div> <span className="ps-1 fs-4 text-warning">LOGO</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                  <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                      <div class="icon-wrap">
                        <i class="fas fa-home"></i>
                      </div>
                      <span> Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link">
                      <div class="icon-wrap"> 
                        <i class="fas fa-tachometer-alt"></i>
                      </div>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link">
                      <div class="icon-wrap">
                        <i class="fab fa-first-order"></i>
                      </div>
                      <span>Register Farmers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link">
                      <div class="icon-wrap">
                        <i class="fab fa-product-hunt"></i>
                      </div>
                      <span>Add Weekly Reports</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link">
                      <div class="icon-wrap">
                        <i class="fab fa-intercom"></i>
                      </div>

                      <span>Customers</span>
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
            </header> */}
          </div>
          <div class="col-9 mt-2">
            <button type="button" class="btn btn-primary ms-3">
              SHAAB 01 / F.A
            </button>
            <h1 class="text-center mb-5">Reports</h1>
            <div class="row">
            <div className="col-6 text-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="mb-5 text-center">
                  <h3>Meat Yield</h3>
                </div>
                <div className="bg-white mt-2 border tempHumidityChart">
                  <canvas id="tempHumidityChart1"></canvas>
                </div>
              </div>
              <div class="col-6 text-center">
                <div class="mb-5 text-center">
                  <h3>Water & Feeds Input</h3>
                </div>
                <div className="bg-white mt-2 border tempHumidityChart">
                  <canvas id="tempHumidityChart2"></canvas>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-6 text-center">
                <div class="mb-5 text-center">
                  <h3>Health</h3>
                </div>
                <div className="bg-white mt-2 border tempHumidityChart">
                  <canvas id="tempHumidityChart3"></canvas>
                </div>  
              </div>
              <div class="col-6 text-center">
                <div class="mb-5 text-center">
                  <h3>Climate Date</h3>
                </div>
                <div className="bg-white mt-2 border tempHumidityChart">
                  <canvas id="tempHumidityChart4"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </AppLayout>
  );
}
