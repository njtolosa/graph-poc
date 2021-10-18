import React from "react";
import { useRef, useEffect } from "react";
import {getG6WithComboData} from '../../adapters/simple-sample';

import G6 from '@antv/g6';

const G6Chart = () => {
  const ref = useRef();

  const layout = {
    type: 'force',
    clustering: false,
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
      width: ref.current.scrollWidth,
      height: ref.current.scrollHeight,
      groupByTypes: false,
      layout,
      modes: {
        default: ['zoom-canvas', 'drag-canvas', 'drag-node', 'drag-combo', 'collapse-expand-combo'],
      },
    })
  
    graph.data(getG6WithComboData());
    graph.render();
  }, []);

  return (
    <div className="g6-chart" ref={ref}>
    </div>
  );
}

export default G6Chart;