import React, {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';

import ItemCard from './ItemCard'
import NewItem from './NewItem'


export default function MyList ( {addedItems, handleAddItem, handleBuyItem, updateSuccess, setAddedItems} ){
    const [createSuccess, setCreateSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        image_url:'',
        shopping_url: '',
        added: ''
    })

    function postNewItem(item) {
        setCreateSuccess(false)
        fetch("http://localhost:9292/items", {
          method: 'POST',
          headers:  {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        })
        .then(res => res.json())
        .then(newItem => {
          setCreateSuccess(true)
          setFormData({
                name:'',
                description:'',
                image_url:'',
                shopping_url: '',
                added: ''
            })
        })
    } 

    useEffect(() => {
        fetch("http://localhost:9292/my_list")
          .then((resp) => resp.json())
          .then((addedItems) => setAddedItems(addedItems));
    }, [updateSuccess, createSuccess]);


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    return (
        <>
            <Row>
                <div>
                    {addedItems.map((item) => <ItemCard key={item.id} item={item} handleAddItem={handleAddItem} handleBuyItem={handleBuyItem}/>)}
                </div>
            </Row>
            <Row>
                <NewItem postNewItem={postNewItem} formData={formData} handleChange={handleChange}/>
            </Row>
        </>
    )   
}