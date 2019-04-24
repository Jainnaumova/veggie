import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default props => {
  const { total } = props;
  
  return (
    <div>
      <Button icon labelPosition='left' className={total === 0 ? 'button-add button-disable' : 'button-add'} disabled={total === 0}>
        <Icon name='shopping cart' />
        Checkout
      </Button>
    </div>
  )
}
