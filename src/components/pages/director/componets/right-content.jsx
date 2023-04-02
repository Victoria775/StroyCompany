import { NUMBER_PAGE } from '../../../../constants/constant'
import SickList from '../../general-components/sick-list'
import UserData from '../../general-components/user-data'
import Vacation from '../../general-components/vacation'
import WorkDays from '../../general-components/work-days'
import Message from '../../general-components/message'
import PersonalList from './personal-list'
import Notification from '../../general-components/notification'

const Content = ({ currentPage, setCurrentPage, setIsLoading }) => {
  switch (currentPage) {
    case NUMBER_PAGE.MY_DATA:
      return <UserData setIsLoading={setIsLoading} />

    case NUMBER_PAGE.WORK_DAYS:
      return <WorkDays setIsLoading={setIsLoading} />

    case NUMBER_PAGE.VACATION:
      return <Vacation setIsLoading={setIsLoading} />

    case NUMBER_PAGE.SICK_LIST:
      return <SickList setIsLoading={setIsLoading} />

    case NUMBER_PAGE.MESSAGE:
      return <Message setIsLoading={setIsLoading} />

    case NUMBER_PAGE.WORKER_LIST:
      return <PersonalList setIsLoading={setIsLoading} />

    case NUMBER_PAGE.NOTIFICATION:
      return (
        <Notification
          setCurrentPage={setCurrentPage}
          setIsLoading={setIsLoading}
        />
      )

    default:
      return <div>Ничего не найдено</div>
  }
}

export default Content
