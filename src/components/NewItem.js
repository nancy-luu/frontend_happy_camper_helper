import React, { useState } from 'react';


export default function NewItem({ postNewItem, formData, handleChange }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        postNewItem(formData)
        e.target.reset()
    }

    return (
        <div className="container" style={{ width: "40rem", height: "27rem" }}>
            <form className="newItemForm" onSubmit={handleSubmit}>
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
                    <div>Image URL:</div>
                    <input name="image_url" type="text" style={{width: "30rem"}} value={formData.image_url} onChange={handleChange}/>
                </label>
                <label>
                    <div>Shopping URL:</div>
                    <input name="shopping_url" type="text" style={{width: "30rem"}} value={formData.shopping_url} onChange={handleChange}/>
                </label>
                <button className="btn btn-success" type="submit" value="submit">Submit</button>
            </form>
        </div>
    )
}