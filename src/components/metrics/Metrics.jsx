import React, { useState, useEffect } from 'react';
import Graph from "../graph/Graph";
import { MimicMetrics } from '../api-mimic';

const Metrics = () => {
  const [dataval, setDataval] = useState([]);



  useEffect(() => {
    const fetchMetricsData = async () => {
      try {
        const currentTimestamp = Date.now();
        const startTs = currentTimestamp - (5 * 60 * 1000);
        const endTs = currentTimestamp;
        const temp_data = await MimicMetrics.fetchMetrics({ startTs, endTs });
        setDataval(temp_data);
      } catch (error) {
        console.error('Error fetching metrics data:', error);
      }
    };

    fetchMetricsData();
  }, []);

  console.log(dataval);
 
  const dataset1 = dataval.map((object) =>
    object.graphLines.map((line) => line.values.map((data) => data.timestamp))
  );

  console.log(dataset1);
 // dataset1.map((arr)=>arr.map((arr2)=>arr2))

  const [userData, setUserdata] = useState({
    labels: dataset1.map((temp)=>temp.map((temp1)=>temp1)),
    datasets: [{
      label: "cpu usage",
      data: dataval.map((data) => data.graphLines.values.value),

    }]
  });





  return (
    <div>
      <Graph chartdata={userData} />
    </div>
  );
}

export default Metrics;
