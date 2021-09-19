import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { invItemSelectors, fetchData } from './slice';
import InvItem from './InvItem';
import { Container, List, FlexboxGrid, IconButton, Icon } from 'rsuite'

const InvItems = () => {
    const dispatch = useDispatch()
    useEffect(()=> {dispatch(fetchData())}, [dispatch])

    const allInvItems = useSelector(invItemSelectors.selectEntities);
    const invItemList = [];
    
    for (const id in allInvItems){
        if(Object.hasOwnProperty.call(allInvItems, id)){
            const invItemItem = allInvItems[id];
            invItemList.push(
                <InvItem key={invItemItem.inv_item_id}
                inv_item_id={invItemItem.inv_item_id}
                inv_item_name={invItemItem.inv_item_name}
                />
            );
        }
    }
    return(
        <div>
            <h3>myInvItems</h3>
            <Container>
            <List>
            <FlexboxGrid>{invItemList}</FlexboxGrid>
            </List></Container>
        </div>
    );

}
export default InvItems;