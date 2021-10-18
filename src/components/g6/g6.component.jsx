import React from "react";
import { useRef, useEffect } from "react";
import data from '../../data/sample.json';

import G6 from '@antv/g6';

const G6Chart = () => {
  const ref = useRef();
  const nodes = data.nodes.map((node) => ({
    ...node,
    cluster: node.year,
    label: node.name
  }));

  const computedData = {
    nodes,
    edges: data.edges
  };

  const layout = {
    type: 'force',
    clustering: true,
    clusterNodeStrength: -5,
    clusterEdgeDistance: 200,
    clusterNodeSize: 20,
    clusterFociStrength: 1.2,
    nodeSpacing: 5,
    preventOverlap: true,
  };

  useEffect(() => {
    const graph = new G6.Graph({
      container: ref.current,
      layout,
      modes: {
        default: ['zoom-canvas', 'drag-canvas', 'drag-node'],
      },
    })
  
    graph.data(computedData);
    graph.render();
  });

  return (
    <div className="g6-chart">
      <div ref={ref}></div>
    </div>
  );
}

export default G6Chart;