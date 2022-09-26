import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EditContext, ModalContext } from '../App';
import { Button, ButtonContainer } from '../Styles/Button.style';
import { FormContainer, MainInputDiv, SecondaryDivsForForms, TextAreaDiv, TwoInputDiv, NormalInputField, TextAreaInputField, SelectField } from '../Styles/Container.style';
import { DropDownOption, MainInput, MainLabel, SecondaryLabel } from '../Styles/Label.style';
import { ModalBackground, ModalBody, ModalContainer, ModalFooter, ModalTitle, XButton, XButtonDiv } from '../Styles/Modal.style'

function NewTaskCard({ task, setTaskList, taskList, setOpenAddingModal, openEditModal, setOpenEditModal }) {
  const [newTaskName, setNewTaskName] = React.useState('')
  const [newTaskTime, setNewTaskTime] = React.useState('')
  const [newTaskPriority, setNewTaskPriority] = React.useState('')
  const [newTaskDescription, setNewTaskDescription] = React.useState('')
  const [newTaskReady, setNewTaskReady] = React.useState(false)
  const [editID, setEditID] = React.useState('')

  // // let editContext = React.useContext(EditContext)
  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 
    setNewTaskName('')
    setNewTaskTime('')
    setNewTaskPriority('')
    setNewTaskDescription('')
    setNewTaskReady(false)
  };

  React.useEffect(() => {
    if (openEditModal) {
      setNewTaskName(task.taskName)
      setNewTaskTime(task.time)
      setNewTaskPriority(task.priority)
      setNewTaskDescription(task.description)
      setNewTaskReady(task.ready)
      setEditID(task.id)
    }

  }, [openEditModal])



  return (
    <ModalBackground>


      <FormContainer onSubmit={handleSubmit}>
        <XButtonDiv>
          <XButton
            onClick={() => {
              if (openEditModal) {
                setOpenEditModal(false)
              } else {
                setOpenAddingModal(false)
              }
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
            }} type="text" value={newTaskDescription} />
        </TextAreaDiv>
        <ButtonContainer>
          <Button backgroundColor={"gray"}
            onClick={() => {
              if (openEditModal) {
                setOpenEditModal(false)
              } else {
                setOpenAddingModal(false)
              }

            }}
          >Cancel</Button>
          {!openEditModal? <Button backgroundColor={"orangered"}

            type="submit" onClick={() => {
              if (newTaskName != '' && newTaskTime != '' && newTaskPriority != '') {
                setTaskList([...taskList, { "taskName": newTaskName, "time": newTaskTime, "priority": newTaskPriority, "description": newTaskDescription, "ready": newTaskReady, "id": uuidv4() }])

                setOpenAddingModal(false)

              } else {
                window.alert("fill out empty fields")
              }
            }}>Add task</Button>
              :
          <Button
          backgroundColor={"green"}
          onClick={() => {
            console.log(editID)
            console.log(taskList)
            let index = taskList.findIndex(element => {
              return element.id == editID
            })
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
              if (a.priority == "low" && (b.priority == "normal" || b.priority == "high")) {
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
            console.log(copyArrayInOrder)
            setTaskList(copyArrayInOrder)
            setOpenEditModal(false)
            // editContext.setTaskUnderEdit(false)

          }} type="submit">Save changes</Button>
        }
        </ButtonContainer>
      </FormContainer>
    </ModalBackground>
  )
}

export default NewTaskCard