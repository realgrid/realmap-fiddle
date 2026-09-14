const config = {
  title: false,
  credits: {
    visible: false
  },
  map: [{
    url: 'https://unpkg.com/realmap-collection/world-low.geo.json'
  }],
  body: {
    projection: 'orthographic',
    zoomable: true
  },
  axis: {
    grid: true
  },
  annotations: [{
    front: true,
    type: 'shape',
    shape: 'rectangle',
    offsetX: 20,
    offsetY: 20,
    width: 10,
    height: 28,
    style: {
      fill: '#83A8DC'
    }
  }, {
    front: true,
    // scope: 'body',
    type: 'text',
    text: '구 형태의 지도 회전',
    offsetX: 40,
    offsetY: 20,
    height: 28,
    style: {
      fontSize: '15pt',
      fontWeight: 700
    }
  }],
  series: [{
    useMapData: true,
    style: {
      stroke: '#fff',
      fill: '#B4CBEF',
      strokeWidth: 0.7
    },
    hoverColor: '#83A8DC',
    pointLabel: false
  }]
};
let chart;
async function init() {
  chart = await RealMap.createChartAsync(document, 'realmap', config, true);
}