import React,{useState} from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { withSize } from 'react-sizeme';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const initialLayouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    { i: 'd', x: 0, y: 2, w: 2, h: 2 },
  ],
  md: [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    { i: 'd', x: 0, y: 2, w: 2, h: 2 },
  ],
  sm: [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    { i: 'd', x: 0, y: 2, w: 2, h: 2 },
  ],
  xs: [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    { i: 'd', x: 0, y: 2, w: 2, h: 2 },
  ],
  xxs: [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    { i: 'd', x: 0, y: 2, w: 2, h: 2 },
  ],
  
};

const originalItems = ['a', 'b', 'c', 'd'];

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {/* continue regardless of error */}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      }),
    );
  }
}

function Content({ size:{ width } }) {

  const [layouts, setLayouts] = useState(
    getFromLS('layouts') || initialLayouts,
  );
  const [items, setItems] = useState(originalItems);
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId) => {
    setItems([...items, itemId]);
  };
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };
  const onLayoutSave = () => {
    saveToLS('layouts', layouts);
  };


  return (
    <>
    {/* <TopBar
    onLayoutSave={onLayoutSave}
    items={items}
    onRemoveItem={onRemoveItem}
    onAddItem={onAddItem}
    originalItems={originalItems}
  /> */}
    
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={60}
      width={width}
      onLayoutChange={onLayoutChange}
    >
      <div key="a" data-grid={{ isDraggable: false, w: 2, h: 6, x: 2, y: 0, minW: 2, minH: 6}}>
        <Widget id="a" backgroundColor="#867ae9" />
      </div>
      <div key="b">
        <Widget id="b" backgroundColor="#fff5ab" />
      </div>
      <div key="c">
        <Widget id="c" backgroundColor="#ffcead" />
      </div>
      <div key="d">
        <Widget id="d" backgroundColor="#c449c2" />
      </div>
    </ResponsiveGridLayout><Button onClick={onLayoutSave}>Save Grid</Button>
    </>
  );
}


function Widget({ id, backgroundColor }) {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor }}>{id}</div>
  );
};

export default withSize({ refreshMode: 'debounce', refreshRate: 60 })(Content);

Widget.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired  
}
Content.propTypes = {
  size: PropTypes.any
}

