import React from "react";
import '../Assets/ReactGridLayout/styles.css';
import '../Assets/ReactResizable/styles.css';
import { Responsive, WidthProvider } from 'react-grid-layout';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  CardImg
} from 'reactstrap';
import BarChart from './BarChart';
import Widget from './Widget';

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

/* function onRemoveItem() {} */

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
            key='4'
            className="widget"
            data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
          >
            <Widget
              /* id='4' */
              title='BarChart'
             /*  onRemoveItem={onRemoveItem} */
              component={BarChart}
            />
          </div>

          <Card key="1" data-grid={{ w: 2, h: 8, x: 0, y: 0, minW: 2, minH: 8 }} className='bg-info'>
            <CardHeader>
              <CardTitle>Widget #1</CardTitle>
            </CardHeader>
            <CardBody>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
                className="img-fluid"
              />
              <CardText>
                Texto descripción de la tarjeta.
              </CardText>
              <Button variant='secondary' type='submit'>
                Explore
              </Button>
            </CardBody>
          </Card>
          <Card key="2" data-grid={{ w: 2, h: 6, x: 2, y: 0, minW: 2, minH: 6 }} className='bg-info'>
            <CardHeader>
              <CardTitle>Widget #2</CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                <p>
                  Texto descripción de la tarjeta.
                </p>
                <p>
                  Más texto.
                </p>
                <p>
                  y más.
                </p>
              </CardText>
              <Button variant='secondary' type='submit'>
                Explore
              </Button>
            </CardBody>
          </Card>
          <Card key="3" data-grid={{ w: 2, h: 4, x: 4, y: 1, minW: 2, minH: 4 }} className='bg-info'>
            <CardHeader>
              <CardTitle>Widget #3</CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                Texto descripción de la tarjeta.
              </CardText>
              <Button variant='secondary' type='submit'>
                Explore
              </Button>
            </CardBody>
          </Card>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
