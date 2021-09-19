import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { invItemSelectors, deleteInvItem, updateInvItem } from './slice'
import { List, FlexboxGrid, IconButton, Icon } from 'rsuite'

export default function InvItem({inv_item_id, inv_item_name}) {
  return (
        <List.Item bordered>
            <p>ii_id: {inv_item_id}, ii_name: {inv_item_name}</p>            
          
        </List.Item>
      );
  
}
