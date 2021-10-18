import data from '../data/sample.json';

export const getG6Data = () => {
  const nodes = data.nodes.map(node => ({
    ...node,
    cluster: node.year,
    label: node.name,
  }));

  console.log(nodes)
  return {nodes, edges: data.edges }
}

export const getVisData = () => {
  return {
    nodes: data.nodes,
    edges: data.edges.map((edge) => ({
      ...edge,
      from: edge.source,
      to: edge.target,
    })),
  };
}

export const getCytoscapeData = () => {
  const nodes = data.nodes.map((node) => ({
    data: {
      ...node,
      id: node.id,
      label: node.name,
    }
  }));
  const edges = data.edges.map(edge => ({
    data: {
      ...edge,
    }
  }))
  return { nodes, edges };
}