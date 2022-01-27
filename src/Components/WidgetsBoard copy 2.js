import {React,useState} from "react";
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
import ComposedsChart from './ComposedsChart';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const [layouts, setLayouts] = useState(originalLayouts);

/* const originalLayouts = {lg:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
],
md:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
],
sm:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
],
xs:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
],
xxs:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
]}; */

 
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
};
/* const originalLayouts = getFromLS("layouts") || {}; */
 
const originalLayouts =  getFromLS("layouts") ||  {lg:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
],
md:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
],
sm:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
],
xs:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
],
xxs:[
  { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
  { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
  { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
  { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
]};

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
};
 
const onRemoveItem = (itemId) => {
  // eslint-disable-next-line no-console
  console.log(itemId);
};
 function onLayoutChange(layout, layoutss) {
  saveToLS("layouts", layoutss);  
}; 

function resetLayout() {
  setLayouts(originalLayouts)
};

export default function WidgetsBoard () {  
    return (
      <div>
        <Button onClick={resetLayout()}>Reset Layout</Button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={layouts}
          onLayoutChange={(layout, layoutss) =>
            onLayoutChange(layout, layoutss)
            
          } 
        >

          <div
            key='1'
            className="widget"            
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
  };

