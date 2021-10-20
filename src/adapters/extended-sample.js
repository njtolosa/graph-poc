import data from '../data/sample2';
import {uniqBy} from 'lodash';

export const getG6Data = () => {
  const nodes = data.nodes.map((node) => ({
    ...node,
    id: node.id.toString(),
    cluster: node.group,
  }));

  const edges = data.edges.map(edge => ({
    source: edge.from.toString(),
    target: edge.to.toString(),
  }));

  return { nodes, edges};
}

export const getG6WithComboData = () => {
  const nodes = data.nodes.map((node) => ({
    ...node,
    id: node.id.toString(),
    comboId: node.group,
  }));

  const combos = uniqBy(data.nodes, 'group').map(combo => ({
    id: combo.group.toString(),
    label: combo.group.toString(),
    type: 'circle',
  }));
  console.log(combos)

  const edges = data.edges.map(edge => ({
    source: edge.from.toString(),
    target: edge.to.toString(),
  }));

  return { nodes, edges, combos};
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