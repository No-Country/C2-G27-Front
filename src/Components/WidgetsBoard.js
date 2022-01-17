import React from "react";
import '../Assets/ReactGridLayout/styles.css';
import '../Assets/ReactResizable/styles.css';
import { Responsive, WidthProvider } from 'react-grid-layout';
import {
  Button,
} from 'reactstrap';
import BarsChart from "./BarsChart";
import LinesChart from './LinesChart';
import PiesChart from './PiesChart'
import Widget from './Widget';
import ComposedsChart from './ComposedsChart'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /* Ignore */
    }
  }
  return ls[key];
}
const originalLayouts = getFromLS("layouts") || {};

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

const onRemoveItem = (itemId) => {
console.log(itemId);
};
export default class WidgetsBoard extends React.PureComponent {
  static defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    };
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  render() {
    const { layouts } = this.state;
    return (
      <div>
        <Button onClick={() => this.resetLayout()}>Reset Layout</Button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={layouts}
          onLayoutChange={(layout, layoutss) =>
            this.onLayoutChange(layout, layoutss)
          }
        >

          <div
            key='1'
            className="widget"
            data-grid={{ w: 3, h: 8, x: 0, y: 0, minW: 2, minH: 6 }}
          >
            <Widget
              id='1'
              title='Widget #1'
              onRemoveItem={onRemoveItem}
              component={LinesChart} />
          </div>

          <div
            key='2'
            className="widget"
            data-grid={{ w: 3, h: 8, x: 3, y: 0, minW: 2, minH: 6 }}
          >
            <Widget
              id='2'
              title='Widget #2'
              onRemoveItem={onRemoveItem}
              component={PiesChart} />
          </div>

          <div
            key='3'
            className="widget"
            /* data-grid={{
              w: { lg: 6, md: 5, sm: 3, xs: 4, xxs: 2 }, */
              /* h: { lg: 4, xxs: 3 }, */
              /* x: { lg: 6, md: 5, sm: 3, xs: 4, xxs: 2 },
              y: { lg: 4, xxs: 3 },
              minW: { lg: 6, md: 5, sm: 3, xs: 4, xxs: 2 },
              minH: { lg: 4, xxs: 3 }, */
           /*  }} */
            data-grid={{ w: 3, h: 8, x: 0, y: 1, minW: 3, minH: 8 }}
          >
            <Widget
              id='3'
              title='Widget #3'
              onRemoveItem={onRemoveItem}
              component={ComposedsChart} />
          </div>

          <div
            key='4'
            className="widget"
            data-grid={{ w: 3, h: 8, x: 3, y: 1, minW: 3, minH: 8 }}
          >
            <Widget
              id='4'
              title='Widget #4'
              onRemoveItem={onRemoveItem}
              component={BarsChart} />
          </div>

        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
