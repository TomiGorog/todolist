import { v4 as uuidv4 } from 'uuid';

//NumberOfTasks component
export const calculateTime = taskList => {
    let sum = 0;
    taskList.forEach(task => {
        if (!task.ready) {
            sum += Number(task.time)
        }
    });
    return sum
}

// NewTaskCard component
export const handleSubmit = (event, dataObj) => {
    event.preventDefault();
    dataObj.setNewTaskName('')
    dataObj.setNewTaskTime('')
    dataObj.setNewTaskPriority('')
    dataObj.setNewTaskDescription('')
    dataObj.setNewTaskReady(false)
};

export const modalDecider = (openEditModal, setOpenEditModal, setOpenAddingModal) => {
    if (openEditModal) {
        setOpenEditModal(false)
    } else {
        setOpenAddingModal(false)
    }
}

export const addNewTask = (dataObj, taskObj, setOpenAddingModal) => {
    if (dataObj.newTaskName != '' && dataObj.newTaskTime != '' && dataObj.newTaskPriority != '') {
        let copyArray = [...taskObj.taskList, 
            { 
            "taskName": dataObj.newTaskName, 
            "time": dataObj.newTaskTime, 
            "priority": dataObj.newTaskPriority, 
            "description": dataObj.newTaskDescription, 
            "ready": dataObj.newTaskReady, 
            "id": uuidv4() 
        }]
       taskObj.setTaskList(reUsableSorting(copyArray))
        setOpenAddingModal(false)
    } else {
        window.alert("fill out empty fields")
    }
}

export const editDataLoading = (task, dataObj, openEditModal) => {
    if (openEditModal) {
        dataObj.setNewTaskName(task.taskName)
        dataObj.setNewTaskTime(task.time)
        dataObj.setNewTaskPriority(task.priority)
        dataObj.setNewTaskDescription(task.description)
        dataObj.setNewTaskReady(task.ready)
        dataObj.setEditID(task.id)
    }
}


export const saveEditChanges = (taskObj, dataObj, editModalObj) => {
    let index = taskObj.taskList.findIndex(element => {
        return element.id === dataObj.editID
    })
    let copyArray = [...taskObj.taskList]
    copyArray.splice(index, 1, {
        "taskName": dataObj.newTaskName,
        "time": dataObj.newTaskTime,
        "priority": dataObj.newTaskPriority,
        "description": dataObj.newTaskDescription,
        "ready": dataObj.newTaskReady,
        "id": dataObj.editID
    })
    taskObj.setTaskList(reUsableSorting(copyArray))
    editModalObj.setOpenEditModal(false)
}

// CurrentTasks  component

export const reUsableSorting = (array) => {
    const arrayInOrder = array.sort((a, b) => {
    if (a.priority === "low" && b.priority === "normal") {
        return 1
    } else if (a.priority === "low" && b.priority === "high") {
        return 1
    }
    else if (a.priority === "normal" && b.priority === "high") {
        return 1
    } else if (a.priority === "high" && b.priority === "normal") {
        return -1
    } else if (a.priority === "high" && b.priority === "low") {
        return -1
    } else if (a.priority === "normal" && b.priority === "low") {
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
    return arrayInOrder
}

export const hintForLongerDescription = (description) => {
    let wordsArray = description.split(' ')
    console.log(wordsArray)
    if (wordsArray.length >= 4) {
        return description.split(' ').slice(0, 3).join(' ').concat("...")
    } else {
        return description
    }

}