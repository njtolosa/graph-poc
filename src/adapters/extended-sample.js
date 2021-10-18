import data from '../data/sample2';

export const getG6Data = () => {
  const nodes = data.nodes.map((node) => ({
    ...node,
    id: node.id.toString(),
    cluster: node.group,
  }));

  let accum = 1;
  const edges = data.edges.map(edge => ({
    source: edge.from.toString(),
    target: edge.to.toString(),
    eid: (accum++).toString(),
  }));

  return { nodes, edges};
}

export const getVisData = () => {
  return data;
}

export const getCytoscapeData = () => {
  const nodes = data.nodes.map((node) => ({
    data: {
      ...node,
    }
  }));
  const edges = data.edges.map(edge => ({
    data: {
      ...edge,
      source: edge.from,
      target: edge.to,
    }
  }))
  return { nodes, edges };
}