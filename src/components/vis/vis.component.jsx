import React from "react";
import { useRef, useEffect } from "react";
import {getVisData} from '../../adapters/simple-sample';

import {Network} from 'vis-network';

const Vis = () => {
  const chartRef = useRef();
  
  useEffect(() => {
    // create a network
    const container = chartRef.current;
    const options = {
      autoResize: true,
      height: '600px',
      layout: {
        improvedLayout: false,
      },
      physics: {
        stabilization: false,
      },
    };
    new Network(container, getVisData(), options);
  }, [chartRef]);

  return <div className="vis-chart">
    <div ref={chartRef}></div>
  </div>
}

export default Vis;