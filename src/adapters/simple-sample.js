import data from '../data/sample.json';
import {uniqBy} from 'lodash';

export const getG6Data = () => {
  const nodes = data.nodes.map(node => ({
    ...node,
    cluster: node.year,
    label: node.name,
  }));

  return {nodes, edges: data.edges }
}

export const getG6WithComboData = () => {
  const nodes = data.nodes.map(node => ({
    id: node.id,
    label: node.name,
    comboId: node.year,
  }));
  const combos = uniqBy(data.nodes, 'year').map(combo => ({
    id: combo.year.toString(),
    label: combo.year.toString(),
  }));

  return {nodes, edges: data.edges, combos }
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