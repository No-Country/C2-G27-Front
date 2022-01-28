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
  const [layouts, setLayouts] = useState(defaults.layouts);
  const widgets = {
    "BarsChart":BarsChart,
    "PiesChart":PiesChart,
    "LinesChart":LinesChart,
    "ComposedsChart":ComposedsChart
  } ;
  
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
            key={defaults.widgets.key[0]}
            className="widget"            
            >
              <Widget
                id={defaults.widgets.id[0]}
                title={defaults.widgets.title[0]}          
                component={widgets[defaults.widgets.component[0]]} />
            </div>
          
            <div
            key={defaults.widgets.key[1]}
            className="widget"            
            >
              <Widget
                id={defaults.widgets.id[1]}
                title={defaults.widgets.title[1]}          
                component={widgets[defaults.widgets.component[1]]} />
            </div>
            
            <div
            key={defaults.widgets.key[2]}
            className="widget"            
            >
              <Widget
                id={defaults.widgets.id[2]}
                title={defaults.widgets.title[2]}          
                component={widgets[defaults.widgets.component[2]]} />
            </div>
            
            <div
            key={defaults.widgets.key[3]}
            className="widget"            
            >
              <Widget
                id={defaults.widgets.id[3]}
                title={defaults.widgets.title[3]}          
                component={widgets[defaults.widgets.component[3]]} />
            </div>

        </ResponsiveReactGridLayout>
      </div>
    );
  };

  WidgetsBoard.propTypes = {
    defaults: PropTypes.element.isRequired
  }