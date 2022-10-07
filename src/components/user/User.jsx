import './user.css'
import { FaTrashAlt } from 'react-icons/fa'
import { TiPencil } from 'react-icons/ti'

const User = ({ user, deleteUser, setUpdateValue, setModal, color }) => {

    const updateUserInfo = () => {
        setUpdateValue(user)
        setModal(true)
    }

  return (
    <div className='user__main__div'>
        <article style={{border: `3px solid ${color}`}}>
            <div className='header__div'>
                <h1>{`${user.first_name} ${user.last_name}`}</h1>
                <p>{user.email}</p>
            </div>
            <div className='birthday__div'>
                <h4>Date of Birth 🥳</h4>
                <p>{user.birthday}</p>
            </div>
            <div className='button__main__div'>
                <FaTrashAlt size={25} color={"red"} cursor={'pointer'} onClick={() => deleteUser(user.id)}/>
                <TiPencil size={25} color={"#182747"} cursor={'pointer'} onClick={updateUserInfo}/>
            </div>
        </article>
    </div>
  )
}

export default User