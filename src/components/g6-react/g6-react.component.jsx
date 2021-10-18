import React from "react";
import {getG6Data} from '../../adapters/extended-sample';

import Graphin from '@antv/graphin';
import { MiniMap } from '@antv/graphin-components';

const G6React = () => {
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

  return (
    <div className="g6-chart">
      <Graphin data={getG6Data()} fitView fitCenter layout={layout}>
        <MiniMap />
      </Graphin>
    </div>
  );
}

export default G6React;