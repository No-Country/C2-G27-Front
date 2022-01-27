import {React,useState} from "react";
import '../Assets/ReactGridLayout/styles.css';
import '../Assets/ReactResizable/styles.css';
import PropTypes from 'prop-types';
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
export default function WidgetsBoard (props) { 
  const {defaults} = props;
  const [layouts, setLayouts] = useState(defaults);
  
    return (
      <div>
        <Button onClick={()=>setLayouts(defaults.layouts)}>Reset Layout</Button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={layouts}
          onLayoutChange={(layout, layoutss) =>
            setLayouts(layoutss)            
          }
        >
          <div
            key='1'
            className="widget"            
          >
            <Widget
              id='1'
              title='Widget #1'
             /*  onRemoveItem={onRemoveItem} */
              component={LinesChart} />
          </div>

          <div
            key='2'
            className="widget"            
          >
            <Widget
              id='2'
              title='Widget #2'
             /*  onRemoveItem={onRemoveItem} */
              component={PiesChart} />
          </div>

          <div
            key='3'
            className="widget"          
          >
            <Widget
              id='3'
              title='Widget #3'
              /* onRemoveItem={onRemoveItem} */
              component={ComposedsChart} />
          </div>

          <div
            key='4'
            className="widget"            
          >
            <Widget
              id='4'
              title='Widget #4'
             /*  onRemoveItem={onRemoveItem} */
              component={BarsChart} />
          </div>

        </ResponsiveReactGridLayout>
      </div>
    );
  };

  WidgetsBoard.propTypes = {
    defaults: PropTypes.element.isRequired
  }