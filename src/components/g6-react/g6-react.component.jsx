import React from "react";
import { useState, useEffect } from "react";
import {getG6Data, getG6WithComboData} from '../../adapters/simple-sample';

import Graphin from '@antv/graphin';
import { MiniMap } from '@antv/graphin-components';

const G6React = () => {
  const [mode, setMode] = useState('cluster');
  const [data, setData] = useState(getG6Data());
  const [layout, setLayout] = useState();
  const comboLayout = {
    type: 'force',
    clustering: false,
    nodeSpacing: 5,
    preventOverlap: true,
  };
  const clusterLayout = {
    type: 'force',
    clustering: true,
    clusterNodeStrength: -5,
    clusterEdgeDistance: 200,
    clusterNodeSize: 20,
    clusterFociStrength: 1.2,
    nodeSpacing: 5,
    preventOverlap: true,
  };
  const modes = {
    default: ['zoom-canvas', 'drag-canvas', 'drag-node', 'drag-combo', {type: 'collapse-expand-combo', relayout: false }],
  };

  useEffect(() => {
    setData(mode === 'cluster' ? getG6Data() : getG6WithComboData());
    setLayout(mode === 'cluster' ? clusterLayout : comboLayout);
  }, [mode]);

  return (
    <div className="container">
      <div className="chart">
        <Graphin data={data} fitView fitCenter layout={layout} modes={modes}>
          <MiniMap />
        </Graphin>
      </div>
      <div className="chart-options">
        <button onClick={() => setMode('cluster')}>Cluster</button>
        <button onClick={() => setMode('combo')}>Combo</button>
      </div>
    </div>
  );
}

export default G6React;