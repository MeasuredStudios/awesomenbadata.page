import * as React from 'react';
import 'twin.macro';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import * as D3 from 'd3';

const ScatterPlotD3 = () => {
  const dimensions = {
    width: 600,
    height: 600,
    marginLeft: 100,
    marginBottom: 100,
    marginTop: 100,
    marginRight: 100,
    chartHeight: 500,
    chartWidth: 500,
  };

  const svgRef = React.useRef<null | SVGSVGElement>(null);
  const [selection, setSelection] = React.useState<null | D3.Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  return <h1>Hello</h1>;
};

const ScatterPlot: React.FC<PageProps> = ({ data }) => (
  <Layout>
    <div tw="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1 tw="font-bold text-5xl tracking-tight mb-4">
        2 & 3 Point Field Goals
      </h1>
      <ScatterPlotD3 />
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  </Layout>
);

export const query = graphql`
  {
    allBbrefNbaSeasonStats201819Csv {
      nodes {
        Player
        _2_Point_Field_Goals
        _3_Point_Field_Goals
      }
    }
  }
`;

export default ScatterPlot;
