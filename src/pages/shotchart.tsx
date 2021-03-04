import * as React from 'react';
import 'twin.macro';
import '../styles/charts.css';
import Layout from '../components/Layout';
import * as D3 from 'd3';
//https://github.com/d3/d3-hexbin
//https://github.com/d3/d3-hexbin/issues/16
import { hexbin as Hexbin } from 'd3-hexbin';
//https://www.stackoverflow.com/questions/50384029/cannot-import-d3-tip-or-d3-hexbin-into-react-component
const d3 = {
  ...D3,
  hex: Hexbin,
};
import { PageProps } from 'gatsby';
// Rushed and did not use useStaticQuery REFACTOR
import data from '../data/data-processed/nba-stats-ja-morant-shot-chart-2019-20.json';

interface ShotDataConfig {
  x: number;
  y: number;
  fga: number;
  fgm: number;
  pct: number;
  zone: string;
  diff: number;
  efg: number;
  logefg: number;
}

export const shotData: Array<ShotDataConfig> = data;

const ShotChartD3 = (props) => {
  console.log(props.shotData);
  const [shotData, setShotData] = React.useState<any>(props.shotData);
  const svgRef = React.useRef<SVGSVGElement>(null);
  console.log(shotData);

  // will be called initially and on every data change
  React.useEffect(() => {
    const svg = D3.select(svgRef.current);

    const width = 954;
    const height = width / 1.422475106685633;
    const z = 20;
    const margin = 10;
    const x = D3.scaleLinear().domain([-250, 250]).range([0, width]);
    const y = D3.scaleLinear().domain([-47.5, 304]).range([height, 0]);
    const whratio =
      (x.domain()[1] - x.domain()[0]) / (y.domain()[1] - y.domain()[0]);
    const binRadius = 15;
    const size3 = D3.scaleSqrt().domain([1, 500]);
    const size2 = D3.scaleLog().domain([1, 1000]);
    const hexbin = d3
      .hex()
      .x(function (d: any) {
        return x(d.x);
      })
      .y(function (d: any) {
        return y(d.y);
      })
      .radius(binRadius);
    //const color = d3
    //  .scaleLinear()
    //  .domain([0.05, 0.8])
    //  .range(["steelblue", "brown"])
    //  .interpolate(d3.interpolateHcl)
    //  .clamp(true);

    svg.attr('class', 'court').attr('width', width).attr('height', height);

    svg
      .selectAll('path.hexbin')
      .data(shotData)
      .join((enter) =>
        enter
          .append('path')
          .attr('class', 'hexbin')
          .attr('d', (d: ShotDataConfig) =>
            hexbin.hexagon(
              d.zone == '3' ? size3(d.fga) * 11 : size2(d.fga) * 11
            )
          )
          .attr('transform', (d: ShotDataConfig) => `translate(${d.x},${d.y})`)
          .style('opacity', 0.4)
          .style('fill', (d: ShotDataConfig) =>
            d.zone == '3' ? '#db00ff' : '#0047ff'
          )
          .on('mouseenter', function (event, value) {
            const index = svg.selectAll('.hexbin').nodes().indexOf(this);
            console.log(event, index, Object.entries(value));
            d3.select(this)
              .style('pointer-events', 'none')
              .transition()
              .duration(1000)
              .attr('transform', 'translate(480,480)scale(23)rotate(180)')
              .call(() => {
                d3.select(this)
                  .append('text')
                  .text(index)
                  .attr('x', '477')
                  .attr('y', '200')
                  .attr('font-family', 'sans-serif')
                  .attr('font-size', '20px')
                  .attr('fill', 'black');
              })
              .transition()
              .delay(1500)
              .attr('transform', (d: any) => `translate(${d.x},${d.y})`)
              .style('fill-opacity', 0.4);
          })
      );

    function drawCourt(svgEL: any) {
      svgEL
        .append('line')
        .attr('class', 'court-outline baseline')
        .attr('x1', x(-250))
        .attr('y1', y(-15 / 2 - 40))
        .attr('x2', x(250))
        .attr('y2', y(-15 / 2 - 40));

      svgEL
        .append('circle')
        .attr('class', 'court-outline hoop')
        .attr('cx', x(0))
        .attr('cy', y(0))
        .attr('r', (x(15) - x(0)) / 2);

      svgEL
        .append('line')
        .attr('class', 'court-outline backboard')
        .attr('x1', x(30))
        .attr('x2', x(-30))
        .attr('y1', y(-8.5))
        .attr('y2', y(-8.5));

      svgEL
        .append('line')
        .attr('class', 'court-outline three corner')
        .attr('x1', x(218))
        .attr('x2', x(218))
        .attr('y1', y(-15 / 2 - 40 + 140))
        .attr('y2', y(-15 / 2 - 40));

      svgEL
        .append('line')
        .attr('class', 'court-outline three corner')
        .attr('x1', x(-218))
        .attr('x2', x(-218))
        .attr('y1', y(-15 / 2 - 40 + 140))
        .attr('y2', y(-15 / 2 - 40));

      const bSide = y(0) - y(-15 / 2 - 40 + 140);
      const aSide = x(0) - x(-218);
      const angle = Math.atan(bSide / aSide);
      const hypot = Math.sqrt(bSide * bSide + aSide * aSide);

      const tpArc = D3.arc()
        .innerRadius(hypot)
        .outerRadius(hypot)
        .startAngle(-Math.PI / 2 + angle)
        .endAngle(Math.PI / 2 - angle);

      svgEL
        .append('path')
        .attr('d', tpArc)
        .attr('class', 'court-outline three arc')
        .attr('transform', (d: any) => `translate(${x(0)},${y(0)})`);

      // optional

      //   svgEL.append("rect")
      //     .attr('class', 'court-outline key')
      //     .attr('x', x(-80))
      //     .attr('y', y(-15/2 - 40 + 190))
      //     .attr('width', x(160) - x(0))
      //     .attr('height', y(0) - y(190))

      //   var ftArcTop = D3.arc()
      //     .innerRadius(x(60) - x(0))
      //     .outerRadius(x(60) - x(0))
      //     .startAngle(-Math.PI/2)
      //     .endAngle(Math.PI/2)

      //   svgEL.append('path')
      //     .attr('class', 'court-outline ftcircle top')
      //     .attr('d', ftArcTop)
      //     .attr("transform", d => `translate(${x(0)},${y(0-15/2-40+190)})`)

      //   var ftArcBottom = D3.arc()
      //     .innerRadius(x(60) - x(0))
      //     .outerRadius(x(60) - x(0))
      //     .startAngle(Math.PI/2)
      //     .endAngle(3*Math.PI/2)

      //   svgEL.append('path')
      //     .attr('class', 'court-outline ftcircle bottom')
      //     .attr('d', ftArcBottom)
      //     .attr('stroke-dasharray', '20')
      //     .attr("transform", d => `translate(${x(0)},${y(0-15/2-40+190)})`)

      //   var raArc = D3.arc()
      //     .innerRadius(x(40) - x(0))
      //     .outerRadius(x(40) - x(0))
      //     .startAngle(-Math.PI/2)
      //     .endAngle(Math.PI/2)

      //   svgEL.append('path')
      //     .attr('class', 'court-outline rarea')
      //     .attr('d', raArc)
      //     .attr("transform", d => `translate(${x(0)},${y(0)})`)
    }

    drawCourt(svg);
  }, [setShotData]);

  return (
    <div tw="container">
      <svg ref={svgRef}></svg>
    </div>
  );
};

const ShotChart: React.FC<PageProps> = () => (
  <Layout>
    <div tw="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1 tw="font-bold text-5xl tracking-tight mb-4">Ja Morant Shot Chart</h1>
      <ShotChart shotData={shotData} />
      <h2 tw="font-bold text-4xl tracking-tight mb-4 mt-8">Table</h2>
      <div tw="my-2">
        <div tw="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
          <button
            tw="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 bg-white text-blue-400 rounded-full"
            id="grid"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              tw="fill-current w-4 h-4 mr-2"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Grid</span>
          </button>
          <button
            tw="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2"
            id="list"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              tw="fill-current w-4 h-4 mr-2"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span>List</span>
          </button>
        </div>
      </div>
      <h2 tw="font-bold text-4xl tracking-tight mb-4 mt-8">Title</h2>
    </div>
  </Layout>
);

export default ShotChart;
