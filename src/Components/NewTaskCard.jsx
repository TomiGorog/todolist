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
  React.useEffect(() => {
    editDataLoading(task, dataObj, openEditModal)
  }, [openEditModal])

  return (
    <ModalBackground 
    >
      <FormContainer onSubmit={() => {
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
          }} type="text" value={newTaskName} />
        </MainInputDiv>
        <TwoInputDiv>
          <SecondaryDivsForForms>
            <SecondaryLabel for="taskTime">Required time in minutes</SecondaryLabel>
            <NormalInputField required name='taskTime'
              onChange={(e) => {
                setNewTaskTime(e.target.value)
              }} type="number" value={newTaskTime} />
          </SecondaryDivsForForms>
          <SecondaryDivsForForms>
            <SecondaryLabel for="taskPriority">Priority</SecondaryLabel>
            <SelectField
              backgroundColor={newTaskPriority == "high" ? "red" : newTaskPriority == "normal" ? "yellow" : "lightblue"}
              required onChange={(e) => {
                setNewTaskPriority(e.target.value)
              }} type="text" value={newTaskPriority}>
              <DropDownOption backgroundColor={"none"} value={undefined}>--Please choose an option--</DropDownOption>
              <DropDownOption backgroundColor={"lightblue"} value="low">Low</DropDownOption>
              <DropDownOption backgroundColor={"yellow"} value="normal">Normal</DropDownOption>
              <DropDownOption backgroundColor={"red"} value="high">High</DropDownOption>
            </SelectField>
          </SecondaryDivsForForms>
        </TwoInputDiv>
        <TextAreaDiv>
          <SecondaryLabel for="taskDescription">Description of the task</SecondaryLabel>
          <TextAreaInputField name='taskDescription'
            onChange={(e) => {
              setNewTaskDescription(e.target.value)
            }} type="text" value={newTaskDescription} />
        </TextAreaDiv>
        <ButtonContainer>
          <Button backgroundColor={"gray"}
            onClick={() => {
              modalDecider(openEditModal, setOpenEditModal, setOpenAddingModal)
            }}
          ><H3>Cancel</H3></Button>
          {!openEditModal ? <Button backgroundColor={"green"}
            type="submit" onClick={() => {
              addNewTask(dataObj, taskObj, setOpenAddingModal)
            }}><H3>Add task</H3></Button>
            :
            <Button
              backgroundColor={"green"}
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