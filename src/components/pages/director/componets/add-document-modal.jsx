import { useState } from 'react'
import { ClouseIcon, Modal } from '../../main/auth.styled'
import {
  ButtonBox,
  ContentBox,
  Head,
  InputBox,
} from './styled/add-document-modal'
import { useRef } from 'react'

const AddDocumentModal = ({
  handleCloseAddDoc,
  saveUserFile,
  selectPerson,
}) => {
  const [nameFile, setNameFile] = useState('')
  const refInputFile = useRef(null)

  const clouseWindow = () => {
    handleCloseAddDoc()
  }

  const handleChangeFile = (e) => {
    if (e.target.files) {
      setNameFile(e.target.files[0].name)
    }
  }

  const addFile = () => {
    const nameFiles = selectPerson?.name_files
      ? JSON.parse(selectPerson.name_files)
      : []

    if (nameFile) {
      nameFiles.push(nameFile)
    }
    saveUserFile({
      nameFiles: JSON.stringify(nameFiles),
      userId: selectPerson.id,
    })
    clouseWindow()
  }

  return (
    <Modal onClick={clouseWindow}>
      <ContentBox onClick={(e) => e.stopPropagation()}>
        <ClouseIcon onClick={clouseWindow}>X</ClouseIcon>
        <Head>
          <p>Добавить документ</p>
        </Head>
        <InputBox>
          <input
            name='inputFile'
            type='file'
            onChange={handleChangeFile}
            ref={refInputFile}
          />
        </InputBox>
        <ButtonBox>
          <button onClick={addFile}>Добавить</button>
        </ButtonBox>
      </ContentBox>
    </Modal>
  )
}

export default AddDocumentModal
