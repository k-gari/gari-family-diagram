import * as d3 from 'd3';  // npm install d3 or yarn add d3
import * as f3 from 'family-chart';  // npm install family-chart@0.9.0 or yarn add family-chart@0.9.0
import 'family-chart/styles/family-chart.css';

fetch('https://donatso.github.io/family-chart-doc/data/data-aristotle.json')
  .then(res => res.json())
  .then(data => create(data))
  .catch(err => console.error(err))

function create(data) {
  const f3Chart = f3.createChart('#FamilyChart', data)
    .setTransitionTime(1000)
    .setCardXSpacing(250)
    .setCardYSpacing(150)
    .setSingleParentEmptyCard(true, {label: 'Unknown'})

  f3Chart.setCardHtml()
    .setCardDisplay([d => d.data.label || '', d => d.data.desc || ''])

  f3Chart.updateTree({initial: true})
}
