import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EditContext, ModalContext } from '../App';
import { Button, ButtonContainer } from '../Styles/Button.style';
import { FormContainer, MainInputDiv, SecondaryDivsForForms, TextAreaDiv, TwoInputDiv, NormalInputField, TextAreaInputField, SelectField } from '../Styles/Container.style';
import { DropDownOption, MainInput, MainLabel, SecondaryLabel } from '../Styles/Label.style';
import { ModalBackground, ModalBody, ModalContainer, ModalFooter, ModalTitle, XButton, XButtonDiv } from '../Styles/Modal.style'

function NewTaskCard({ setTaskList, taskList, setOpenAddingModal }) {
  const [newTaskName, setNewTaskName] = React.useState('')
  const [newTaskTime, setNewTaskTime] = React.useState('')
  const [newTaskPriority, setNewTaskPriority] = React.useState('')
  const [newTaskDescription, setNewTaskDescription] = React.useState('')
  const [newTaskReady, setNewTaskReady] = React.useState(false)
  let editContext = React.useContext(EditContext)
  let modalContext = React.useContext(ModalContext)
  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setNewTaskName('')
    setNewTaskTime('')
    setNewTaskPriority('')
    setNewTaskDescription('')
    setNewTaskReady(false)
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <XButtonDiv>
        <XButton
          onClick={() => {
            modalContext.setModalBackground(false)
            setOpenAddingModal(false)
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
          <SecondaryLabel for="taskTime">Required time in minutes?</SecondaryLabel>
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
          rows={6}
          cols={50}
          onChange={(e) => {
            setNewTaskDescription(e.target.value)
            console.log(newTaskDescription)
          }} type="text" value={newTaskDescription} />
      </TextAreaDiv>
      <ButtonContainer>
        <Button backgroundColor={"gray"}
          onClick={() => {
            setOpenAddingModal(false)
            modalContext.setModalBackground(false)

          }}
        >Cancel</Button>
        <Button backgroundColor={"orangered"}

          type="submit" onClick={() => {
            if (newTaskName != '' && newTaskTime != '' && newTaskPriority != '') {
              setTaskList([...taskList, { "taskName": newTaskName, "time": newTaskTime, "priority": newTaskPriority, "description": newTaskDescription, "ready": newTaskReady, "id": uuidv4() }])

              setOpenAddingModal(false)
              modalContext.setModalBackground(false)

            } else {
              window.alert("fill out empty fields")
            }
          }}>Add task</Button>
      </ButtonContainer>
    </FormContainer>
  )
}

export default NewTaskCard