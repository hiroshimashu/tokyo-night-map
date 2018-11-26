import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupHover = () => (
  <Popup
    trigger={<Button icon='add' content='Add a friend' />}
    content='Sends an email invite to a friend.'
    on='hover'
  />
)

export default PopupHover;