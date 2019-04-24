import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default props => {

  return (
    <div>
      <Button animated='vertical'>
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>
          <Icon name='shop' />
        </Button.Content>
      </Button>
    </div>
  )
}
