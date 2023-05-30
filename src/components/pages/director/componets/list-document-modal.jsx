import { useEffect, useState } from 'react'
import { ClouseIcon, Modal } from '../../main/auth.styled'
import {
  ContentBox,
  EmptyList,
  Head,
  ListDoc,
} from './styled/list-document-modal.styled'

const ListDocumentModal = ({ handleCloseListDoc, selectPerson }) => {
  const [person, setPerson] = useState([])

  const clouseWindow = () => {
    handleCloseListDoc()
  }

  useEffect(() => {
    if (selectPerson) {
      const upPerson = selectPerson?.name_files
        ? JSON.parse(selectPerson.name_files)
        : []
      setPerson(upPerson)
    }
  }, [selectPerson])

  return (
    <Modal onClick={clouseWindow}>
      <ContentBox onClick={(e) => e.stopPropagation()}>
        <ClouseIcon onClick={clouseWindow}>X</ClouseIcon>
        <Head>
          <p>Документы сотрудника</p>
        </Head>
        {person.length === 0 && <EmptyList>Документов нет</EmptyList>}
        {person.length > 0 && (
          <ListDoc>
            {person.map((title, index) => (
              <p key={index}>{title}</p>
            ))}
          </ListDoc>
        )}
      </ContentBox>
    </Modal>
  )
}

export default ListDocumentModal
