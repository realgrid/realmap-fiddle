const config = {
  title: false,
  credits: {
    visible: false
  },
  map: [{
    url: 'https://unpkg.com/realmap-collection/world-low.geo.json'
    // url: 'https://unpkg.com/realmap-collection/usa-state-low.geo.json',
    // exclude: ['ATA']
    // useOffset: true,
  }],
  body: {
    projection: 'equalearth',
    // projection: 'mercator',
    zoomable: true,
    scrollable: true,
    scroll: 150,
    mapBackground: {
      visible: true,
      style: {
        fill: '#0088ff10'
      }
    }
  },
  axis: {
    crosshair: true,
    grid: {
      visible: true,
      line: {
        step: 30
      }
    },
    tick: {
      visible: true,
      label: {
        style: {
          fill: 'red'
        }
      }
    }
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
    text: '좌우 방향 무한스크롤(wrap-around)',
    offsetX: 40,
    offsetY: 20,
    height: 28,
    style: {
      fontSize: '15pt',
      fontWeight: 700
    }
  }],
  series: [{
    pointLabel: {
      visible: true,
      effect: 'outline'
    },
    hoverStyle: {
      strokeWidth: 2,
      filter: 'brightness(1.07)'
    },
    style: {
      stroke: '#ccc'
    },
    data: [{
      id: 'KOR',
      value: 123
    }, {
      id: 'CHN',
      value: 532
    }, {
      id: 'BRA',
      value: 235
    }],
    nullHovering: true
  }, {
    type: 'point',
    data: [{
      coord: [1, 1],
      name: 'xxx'
    }, {
      coord: [127, 37],
      name: 'zzz'
    }],
    pointLabel: true
  }]
};
let chart;
async function init() {
  chart = await RealMap.createChartAsync(document, 'realmap', config, true);
}