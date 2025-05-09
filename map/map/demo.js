const config = {
  title: '세계지도',
  map: [{
    url: 'https://cdn.realmap.co.kr/v1/maps/geojson/world-low.geo.json'
  }],
  body: {
    projection: 'mercator'
  },
  series: [{
    useMapData: true,
    style: {
      fill: 'var(--area-color-1)',
      stroke: '#fff',
      strokeWidth: 0.7
    },
    hoverColor: '#83A8DC',
    tooltipText: '<t style="font-weight: bold;">${name}(${rm-id})</t>'
  }],
  exporting: {
    visible: true
  }
};
async function init() {
  await RealMap.createChartAsync(document, 'realmap', config, true);
}