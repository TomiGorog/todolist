import React from 'react'
import { addNewTask, editDataLoading, handleSubmit, modalDecider, saveEditChanges } from '../service/functions';
import { Button, ButtonContainer } from '../Styles/Button.style';
import { FormContainer, MainInputDiv, SecondaryDivsForForms, TextAreaDiv, TwoInputDiv, NormalInputField, TextAreaInputField, SelectField } from '../Styles/Container.style';
import { H3 } from '../Styles/Fonts.style';
import { DropDownOption, MainInput, MainLabel, SecondaryLabel } from '../Styles/Label.style';
import { ModalBackground, XButton, XButtonDiv } from '../Styles/Modal.style'

function NewTaskCard({ task, setTaskList, taskList, setOpenAddingModal, openEditModal, setOpenEditModal }) {
  const [newTaskName, setNewTaskName] = React.useState('')
  const [newTaskTime, setNewTaskTime] = React.useState('')
  const [newTaskPriority, setNewTaskPriority] = React.useState('')
  const [newTaskDescription, setNewTaskDescription] = React.useState('')
  const [newTaskReady, setNewTaskReady] = React.useState(false)
  const [editID, setEditID] = React.useState('')

  const dataObj = {
    newTaskName, setNewTaskName, newTaskTime, setNewTaskTime, newTaskPriority, setNewTaskPriority,
    newTaskDescription, setNewTaskDescription, newTaskReady, setNewTaskReady, editID, setEditID
  };
  const taskObj = { task, taskList, setTaskList }
  const editModalObj = { openEditModal, setOpenEditModal }
  let menuRef = React.useRef()

  React.useEffect(() => {

    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        if (openEditModal) {
          setOpenEditModal(false)

        } else {
          setOpenAddingModal(false)

        }
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }

  }, [])
  React.useEffect(() => {
    editDataLoading(task, dataObj, openEditModal)
  }, [openEditModal])

  React.useEffect(() => {
    const taskName = sessionStorage.getItem('taskName');
    const taskTime = sessionStorage.getItem('taskTime');
    const taskPriority = sessionStorage.getItem('taskPriority');
    const taskDescription = sessionStorage.getItem('taskDescription');
    taskName && setNewTaskName(taskName)
    taskTime && setNewTaskTime(taskTime)
    taskPriority && setNewTaskPriority(taskPriority)
    taskDescription && setNewTaskDescription(taskDescription)
  }, [])

  return (
    <ModalBackground
    >
      <FormContainer ref={menuRef} onSubmit={() => {
        handleSubmit(window.event, dataObj)
      }}
      >
        <XButtonDiv>
          <XButton
            onClick={() => {
              modalDecider(openEditModal, setOpenEditModal, setOpenAddingModal)
            }}
          >&times;</XButton>
        </XButtonDiv>
        <MainInputDiv>
          <MainLabel for="taskName">Task name</MainLabel>
          <MainInput required name='taskName' onChange={(e) => {
            setNewTaskName(e.target.value)
            sessionStorage.setItem('taskName', e.target.value)
          }} type="text" value={newTaskName} />
        </MainInputDiv>
        <TwoInputDiv>
          <SecondaryDivsForForms>
            <SecondaryLabel for="taskTime">Required time in minutes</SecondaryLabel>
            <NormalInputField required name='taskTime'
              onChange={(e) => {
                setNewTaskTime(e.target.value)
                sessionStorage.setItem('taskTime', e.target.value)
              }} type="number" value={newTaskTime} />
          </SecondaryDivsForForms>
          <SecondaryDivsForForms>
            <SecondaryLabel for="taskPriority">Priority</SecondaryLabel>
            <SelectField
              backgroundColor={newTaskPriority == "high" ? "#f44336" : newTaskPriority == "normal" ? "#ffbd03" : "#ADD8E6"}
              required onChange={(e) => {
                setNewTaskPriority(e.target.value)
                sessionStorage.setItem('taskPriority', e.target.value)
              }} type="text" value={newTaskPriority}>
              <DropDownOption backgroundColor={"none"} value={undefined}>--Please choose an option--</DropDownOption>
              <DropDownOption backgroundColor={"#ADD8E6"} value="low">Low</DropDownOption>
              <DropDownOption backgroundColor={"#ffbd03"} value="normal">Normal</DropDownOption>
              <DropDownOption backgroundColor={"#f44336"} value="high">High</DropDownOption>
            </SelectField>
          </SecondaryDivsForForms>
        </TwoInputDiv>
        <TextAreaDiv>
          <SecondaryLabel for="taskDescription">Description of the task</SecondaryLabel>
          <TextAreaInputField name='taskDescription'
            onChange={(e) => {
              setNewTaskDescription(e.target.value)
              sessionStorage.setItem('taskDescription', e.target.value)
            }} type="text" value={newTaskDescription} />
        </TextAreaDiv>
        <ButtonContainer>
          <Button backgroundColor={"gray"}
            onClick={() => {
              modalDecider(openEditModal, setOpenEditModal, setOpenAddingModal)
              sessionStorage.removeItem('taskName');
              sessionStorage.removeItem('taskTime');
              sessionStorage.removeItem('taskPriority');
              sessionStorage.removeItem('taskDescription');
            }}
          ><H3>Cancel</H3></Button>
          {!openEditModal ? <Button backgroundColor={"#33b249"}
            type="submit" onClick={() => {
              addNewTask(dataObj, taskObj, setOpenAddingModal)
              sessionStorage.removeItem('taskName');
              sessionStorage.removeItem('taskTime');
              sessionStorage.removeItem('taskPriority');
              sessionStorage.removeItem('taskDescription');

            }}><H3>Add task</H3></Button>
            :
            <Button
              backgroundColor={"#33b249"}
              onClick={() => {
                saveEditChanges(taskObj, dataObj, editModalObj)
              }} type="submit"><H3>Save changes</H3></Button>
          }
        </ButtonContainer>
      </FormContainer>
    </ModalBackground>
  )
}

export default NewTaskCard