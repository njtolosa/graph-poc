import React from "react";
import { useEffect } from "react";
import cytoscape from 'cytoscape';
import {getCytoscapeData} from '../../adapters/extended-sample';

const Cytoscape = () => {
  useEffect(() => {
    const container = document.getElementById('chart');
    cytoscape({
      container: container,
      elements: getCytoscapeData(), 
      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#665',
            'label': 'data(label)'
          }
        },
    
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        }
      ],
      layout: {
        name: 'cose',
        fit: true,
        padding: 30,
      }
    })
  }, []);

  return (
  <div id="chart">
  </div>
)}

export default Cytoscape;