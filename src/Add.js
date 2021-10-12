import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import toastr from 'toastr';
export default function Add(props) {
    const [state, changeState] = useState(
        {
            id: 0,
            description: "",
            completed: false,
        }
    )

    const handleChange = (event) => {
        console.log(event);
        const newState = { ...state };
        if(event.target.name === "completed")
            newState[event.target.name] = !state.completed;
        else
            newState[event.target.name] = event.target.value;
        changeState(newState);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        props.submitHandler(state);
        toastr.success("Item added");
        changeState({id:0, description: "",completed: false})
    }

    return (
        <>
            <Form onSubmit={(e) => formSubmit(e)}>
                <Form.Group controlId="taskId">
                    <Form.Label>Task ID</Form.Label>
                    <Form.Control
                        name="id"
                        type="number"
                        value={state.id}
                        onChange={(e) => { handleChange(e); }}
                    />
                </Form.Group>
                <Form.Group controlId="taskDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={state.description}
                        onChange={(e) => { handleChange(e); }}
                    />
                </Form.Group>
                <Form.Group controlId="complete">
                    <Form.Check
                        name="completed"
                        type="checkbox"
                        label="complete"
                        value={state.completed}
                        onChange={(e) => { handleChange(e); }}
                    />
                </Form.Group>
                <Button type="submit">
                    Add ToDo
                </Button>

            </Form>

        </>
    );
}