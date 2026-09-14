const continentData = [{
  id: 'africa',
  name: '아프리카',
  color: "#196b95"
}, {
  id: 'antarctica',
  name: '남극',
  color: ""
}, {
  id: 'asia',
  name: '아시아',
  color: "#c48f48"
}, {
  id: 'europe',
  name: '유럽',
  color: "#b9b24d"
}, {
  id: 'north-america',
  name: '북아메리카',
  color: "#267194"
}, {
  id: 'south-america',
  name: '남아메리카',
  color: "#5a1f3e"
}, {
  id: 'oceania',
  name: '오세아니아',
  color: "#b1382f"
}, {
  id: 'antarctica',
  name: '남극',
  color: ""
}];
const config = {
  title: false,
  credits: {
    visible: false
  },
  map: [{
    url: `https://unpkg.com/realmap-collection/continent-low.geo.json`
  }],
  body: {
    projection: 'mercator'
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
    type: 'text',
    text: '기본 지도들',
    offsetX: 40,
    offsetY: 20,
    height: 28,
    style: {
      fontSize: '15pt',
      fontWeight: 700
    }
  }],
  tooltip: {
    mode: 'header',
    minHeight: 40
  },
  series: [{
    style: {
      fill: 'var(--area-color-1)',
      stroke: '#fff',
      strokeWidth: 0.7
    },
    hoverStyle: {
      stroke: '#5d5d5d'
    },
    tooltipText: '<t style="font-weight: bold;">${name}(${rm-id})</t>',
    data: continentData
  }],
  exporting: {
    visible: true
  }
};
let chart;
async function init() {
  chart = await RealMap.createChartAsync(document, 'realmap', config, true);
}