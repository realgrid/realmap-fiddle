const config = {
  title: false,
  chart: {
    clickAction: 'drilldown'
  },
  drilldownPanel: {
    // type: 'button'
  },
  map: [{
    name: '시도',
    url: '/assets/map/wooritech/v1/maps/topojson/kr-sido-low.topo.json',
    dokdo: 0.1,
    showDummies: true,
    insets: [RealMap.preset('울릉도'), RealMap.preset('제주도')],
    padding: '0.8, 0.1, 0.1, 0.1'
  }, {
    name: '시군구',
    url: 'https://unpkg.com/realmap-collection/kr-sigun-low.geo.json',
    dokdo: 0,
    //0.1,
    showDummies: true,
    insets: [RealMap.preset('울릉도'), RealMap.preset('제주도')],
    padding: 0.1
  }],
  axis: {
    grid: {
      visible: true,
      line: {
        step: 1
      },
      fitTo: 'body'
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
    // scope: 'body',
    type: 'text',
    text: '시군구별 인구 밀도 - Drilldown',
    offsetX: 40,
    offsetY: 20,
    height: 28,
    style: {
      fontSize: '15pt',
      fontWeight: 700
    }
  }],
  body: {
    projection: 'mercator',
    style: {
      fill: '#0088ff04',
      padding: '0 0.1 0.1 0.1'
    }
  },
  colorScale: {
    maxColor: '#e27486',
    stepCount: 6,
    steps: [{
      from: 0,
      to: 50,
      color: '#D5DEEF'
    }, {
      from: 50,
      to: 250,
      color: '#B1C9EF'
    }, {
      from: 250,
      to: 500,
      color: '#8AAEE0'
    }, {
      from: 500,
      to: 1000,
      color: '#628ECB'
    }, {
      from: 1000,
      to: 5000,
      color: '#395886'
    }, {
      from: 5000,
      color: '#395886'
    }]
  },
  series: [{
    name: '시도',
    map: '시도',
    dataUrl: 'https://cdn.realmap.co.kr/v1/assets/data/kr-sido-population-density.json',
    tooltipText: ['<t style="font-size: 18px; font-weight: 700;">${name}</t>', '인구 밀도: <t style="font-weight: 700;">${value}</t>'].join('<br />'),
    hoverColor: '#FBDEB5',
    style: {
      stroke: '#fff',
      strokeWidth: 0.5
    },
    detail: {
      name: '시군구',
      map: '시군구',
      dataUrl: 'https://cdn.realmap.co.kr/v1/assets/data/kr-sigun-population-density.json',
      tooltipText: ['<t style="font-size: 18px; font-weight: 700;">${sido} ${name}</t>', '인구 밀도: <t style="font-weight: 700;">${value}</t>'].join('<br />'),
      hoverColor: '#fc0',
      style: {
        stroke: '#4f4f4f',
        strokeWidth: 0.5
      },
      onPointClick: args => {
        chart.drillup(chart.series);
      }
    }
  }]
};
function createButton(parentId, label, handler) {
  var parent = document.getElementById(parentId);
  if (parent) {
    var button = document.createElement("input");
    button.type = "button";
    button.value = label;
    button.onclick = handler;
    button.style.marginLeft = button.style.margin = "3px";
    parent.appendChild(button);
    return button;
  }
  return null;
}
let chart;
function setActions(container) {
  createButton(container, 'Drilldown', function (e) {
    chart.drilldown(chart.series);
  });
  createButton(container, 'Drillup', function (e) {
    chart.drillup(chart.series);
  });
}
async function init() {
  chart = await RealMap.createChartAsync(document, 'realmap', config, true);
  setActions('actions');
}