import '../Assets/ReactGridLayout/styles.css';
import '../Assets/ReactResizable/styles.css';
import ResponsiveGridLayout from "react-grid-layout";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
  CardSubtitle,
  } from 'reactstrap';



function WidgetBoard () {
  
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 4, h: 4, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 4, minW: 2, maxW: 4, minH:4 },
      { i: "c", x: 4, y: 0, w: 3, h: 11, minW:3, minH:11 }
    ];
    
    return (
      <ResponsiveGridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={800}
      >
        
          <Card key='a' className='bg-secondary'>
            <CardHeader>
              <CardTitle>Static Widget</CardTitle>
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
        
          
        
        <Card key='b' className='bg-info'>
            <CardHeader>
              <CardTitle>Limited Widget</CardTitle>
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
        <Card key='c'>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
        
      </ResponsiveGridLayout>
    );
  
    }
    export default WidgetBoard
/* function WidgedBoard() {
  return <div>
    lalala
  </div>;
}

export default WidgedBoard; */
