import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function Widget({ id, title, onRemoveItem, component: Item }) {
  return (
    <Card className='widget-card'>
      <CardHeader className='widget-header'>
        <CardTitle className='widget-title'>{title}</CardTitle>
        <div className='spacer' />
        <Button close onClick={() => onRemoveItem(id)} />
      </CardHeader >
      <CardBody className='widget-body'>
        <Item />
      </CardBody>
    </Card>
  );
}
Widget.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onRemoveItem: PropTypes.func,
  component: PropTypes.element
}