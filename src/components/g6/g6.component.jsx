import React from "react";
import { useRef, useEffect } from "react";
import {getG6WithComboData} from '../../adapters/simple-sample';

import G6 from '@antv/g6';

const extraNode = {
  id: "10001",
  label: "Extra node",
  year: 2021,
  value: 57.847,
  weight: 73.355,
  comboId: "2021",
};

const extraEdge = {
  "source": "10001",
  "target": "732",
};

const extraCombo = {
  id: "2021",
  label: "2021",
};

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
    const minimap = new G6.Minimap();
    const graph = new G6.Graph({
      container: ref.current,
      width: ref.current.scrollWidth,
      height: ref.current.scrollHeight - 150,
      groupByTypes: false,
      layout,
      plugins: [minimap],
      modes: {
        default: ['zoom-canvas', 'drag-canvas', 'drag-node', 'drag-combo', {type: 'collapse-expand-combo', relayout: false }],
      },
    })

    graph.setAutoPaint(true);
    graph.on('click', event => {
      if (event && event.item && event.item.getType() === 'node') {
        graph.addItem('combo', extraCombo);
        graph.addItem('node', extraNode, false, true);
        graph.addItem('edge', extraEdge, false, true);
        graph.updateCombos();
        graph.updateLayout();
      }
    })
  
    graph.data(getG6WithComboData());
    graph.render();
    return () => graph.destroy();
  }, []);

  return (
    <div className="g6-chart" ref={ref}>
    </div>
  );
}

export default G6Chart;