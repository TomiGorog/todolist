import React from 'react'
import { EditContext } from './App'

function EditForm({ taskList, setTaskList }) {
    let editContext = React.useContext(EditContext)
    const [newTaskName, setNewTaskName] = React.useState('')
    const [newTaskTime, setNewTaskTime] = React.useState('')
    const [newTaskPriority, setNewTaskPriority] = React.useState('')
    const [newTaskDescription, setNewTaskDescription] = React.useState('')
    const [newTaskReady, setNewTaskReady] = React.useState(false)
    const [editID, setEditID] = React.useState('')
    const [emptyForm, setEmptyForm] = React.useState(false)
    console.log(editContext.taskUnderEdit)

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ clear all input values in the form
        setNewTaskName('')
        setNewTaskTime('')
        setNewTaskPriority('')
        setNewTaskDescription('')
        setNewTaskReady(false)
        setEditID('')
    };
    React.useEffect(() => {
        if (editContext.taskUnderEdit != false) {
            setNewTaskName(editContext.taskUnderEdit.taskName)
            setNewTaskTime(editContext.taskUnderEdit.time)
            setNewTaskPriority(editContext.taskUnderEdit.priority)
            setNewTaskDescription(editContext.taskUnderEdit.description)
            setNewTaskReady(editContext.taskUnderEdit.ready)
            setEditID(editContext.taskUnderEdit.id)
        }
        if (emptyForm) {
            setNewTaskName('')
            setNewTaskTime('')
            setNewTaskPriority('')
            setNewTaskDescription('')
            setNewTaskReady(false)
            setEditID('')
        }
    }, [editContext.taskUnderEdit, emptyForm])

    return (
        <form onSubmit={handleSubmit}>
            <label for="taskName">Task name</label>
            <input required name='taskName' onChange={(e) => {
                setNewTaskName(e.target.value)
            }} type="text" value={newTaskName} />

            <label for="taskTime">Required time in minutes?</label>
            <input required name='taskTime'
                onChange={(e) => {
                    setNewTaskTime(e.target.value)
                }} type="number" value={newTaskTime} />

            <label for="taskPriority">Priority</label>
            <select required onChange={(e) => {
                setNewTaskPriority(e.target.value)
            }} type="text" value={newTaskPriority}>
                <option value={undefined}>--Please choose an option--</option>
                <option value="high">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>

            </select>
            <label for="taskDescription">Description of the task</label>
            <input name='taskDescription'
                onChange={(e) => {
                    setNewTaskDescription(e.target.value)
                }} type="text" value={newTaskDescription} />
            <button onClick={() => {

                let index = taskList.findIndex(element => {
                    return element.id == editID
                })
                console.log(index)
                let copyArray = [...taskList]
                copyArray.splice(index, 1, {
                    "taskName": newTaskName,
                    "time": newTaskTime,
                    "priority": newTaskPriority,
                    "description": newTaskDescription,
                    "ready": newTaskReady,
                    "id": editID
                })
                const copyArrayInOrder = copyArray.sort((a, b) => {
                    if(a.priority == "low" && (b.priority == "normal" || b.priority == "high")) {
                        return 1
                    } else if (a.priority == "normal" && b.priority == "high") {
                        return 1
                    } else if (a.priority == "high" && (b.priority == "normal" || b.priority == "low")) {
                        return -1
                    } else if (a.priority == "normal" && b.priority == "low") {
                        return -1
                    } else {
                        if (a.time > b.time) {
                            return 1
                        } else if (a.time < b.time) {
                            return -1
                        } else {
                            return 0
                        }
                    }
                })
                setTaskList(copyArrayInOrder)

                editContext.setTaskUnderEdit(false)

            }} type="submit">Save changes</button>
        </form>
    )


}

export default EditForm