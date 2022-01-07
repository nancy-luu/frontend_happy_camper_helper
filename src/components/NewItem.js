import React, { useState } from 'react';


export default function NewItem({ postNewItem }) {
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        image_url:'',
        shopping_url: '',
        added: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postNewItem(formData)
        e.target.reset()
    } 

    return (
        <div className="container" style={{ width: "40rem", height: "27rem" }}>
            <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "25px" }}>Create New Item</h3>
                <label>
                    <div>Name:</div>
                    <input name="name" type="text" style={{width: "30rem"}} value={formData.name} onChange={handleChange}/>
                </label>
                <label>
                    <div>Description:</div>
                    <input name="description" type="text" style={{width: "30rem"}} value={formData.description} onChange={handleChange} />
                </label>
                <label>
                    <div>Image:</div>
                    <input name="image_url" type="text" style={{width: "30rem"}} value={formData.image_url} onChange={handleChange}/>
                </label>
                <label>
                    <div>Shop URL:</div>
                    <input name="shopping_url" type="text" style={{width: "30rem"}} value={formData.shopping_url} onChange={handleChange}/>
                </label>
                <button className="btn btn-success" type="submit" value="submit">Submit</button>
            </form>
        </div>
    )
}