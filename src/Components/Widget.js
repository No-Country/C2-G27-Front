import React from 'react';
import {
  
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from 'reactstrap';

export default function Widget({ /* id, */ title, /* onRemoveItem, */ component: Item }) {
  
      <Card className='widget-card'>
        <CardHeader className='widget-header'>
          <CardTitle className='widget-title'>{title}</CardTitle>
        {/* <Button aria-label="delete"  onClick={() => onRemoveItem(id)} >X</Button> */}          
        </CardHeader >
        <CardBody className='widget-body'>
          <Item />
        </CardBody>
      </Card>

}