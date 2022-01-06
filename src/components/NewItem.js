import React from "react";

export default function NewItem({ handleSubmit }) {

    return (
        <div className="container" style={{ width: "27rem", height: "27rem" }}>
            <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "25px" }}>Create New Item</h3>
                <label>
                    <div>Name:</div>
                    <input name="name" type="text"/>
                </label>
                <label>
                    <div>Description:</div>
                    <input description="description" type="text" />
                </label>
                <label>
                    <div>Image:</div>
                    <input image="image" type="text"/>
                </label>
                <label>
                    <div>Shop URL:</div>
                    <input shop="shop" type="text"/>
                </label>
                <button className="btn btn-success" type="submit">Submit</button>
            </form>
        </div>
    )
}