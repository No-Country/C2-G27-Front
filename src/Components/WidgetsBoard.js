import { React, useState } from "react";
import '../Assets/ReactGridLayout/styles.css';
import '../Assets/ReactResizable/styles.css';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import {
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import Widget from './Widget';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default function WidgetsBoard(props) {
  const getFromLS = (key) => {
    let ls = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem(key)) || {};
      } catch (e) { /* blabla */ }
    }
    return ls[key];
  };

  const saveToLS = (key, value) => {
    if (global.localStorage) {
      global.localStorage.setItem(
        key,
        JSON.stringify({
          [key]: value
        })
      );
    };
  }
  const { defaults, widgets } = props;
  const [layouts, setLayouts] = useState(
    getFromLS("layouts") || defaults.layouts
  );
  const [items, setItems] = useState( getFromLS("items") || defaults.widgets );
  const onLayoutSave = () => {
    saveToLS("layouts", layouts);
  };
  const onLayoutChange = (layout, allLayouts) => {    
    saveToLS("layouts", allLayouts);
    saveToLS("items", items);
    setItems(items);    
    setLayouts(allLayouts);
    };
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));    
  };
  const onAddItem = (itemId) => {
    if (!items.includes(itemId))
      setItems([...items, itemId]);      
  };
  const handleChange = (e) => {
    if (e.target.checked) {
      onAddItem(e.target.name);
          } else {
      onRemoveItem(e.target.name);
          }
  };
  return (
    <div>
      <Button onClick={() => {
        setItems(defaults.widgets);
        setLayouts(defaults.layouts)
      }}>Reset Layout</Button>
      <Button onClick={() => onLayoutSave()}>Save Layout</Button>

      {
        defaults.widgets.map((i) => (
          <FormGroup check>
            <Input name={i} type="checkbox" onChange={handleChange} checked={items.includes(i)} />    
            <Label check>
              {i}
            </Label>
          </FormGroup>
        ))
      }
      
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
      >
        {
          items.map((key) => (
            <div
              key={defaults.all_widgets[key].key}
              className="widget"
              data-grid={defaults.all_widgets[key].data_grid}
            >
              <Widget
                id={defaults.all_widgets[key].id}
                title={defaults.all_widgets[key].title}
                onRemoveItem={onRemoveItem}
                component={widgets[defaults.all_widgets[key].component]}
              />
            </div>
          ))
        }
      </ResponsiveReactGridLayout>
    </div>
  );
};

WidgetsBoard.propTypes = {
  defaults: PropTypes.object.isRequired ,
  widgets: PropTypes.object.isRequired
}