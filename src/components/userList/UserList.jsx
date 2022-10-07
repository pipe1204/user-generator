import "./userList.css"
import Form from '../form/Form'
import User from "../user/User"
import { useState } from "react"

const UserList = ({createUser, users, deleteUser, setUpdateValue, updateValue, updateUser}) => {

  const [modal, setModal] = useState(false)
  const [color, setColor] = useState()

  const handleModal = () => {
    setModal(true)
  }
    
  return (
      <div className="userList__main__div">
        <div className={modal ? "" : "form__userList__div"}>
          <Form 
            createUser={createUser}
            updateValue={updateValue}
            updateUser={updateUser}
            setModal={setModal}
            setUpdateValue={setUpdateValue}
            setColor={setColor}
          />
        </div>
        <div className="create__user__button__div">
          <button onClick={handleModal}>Create an user</button>
        </div>
        <div className="users__main__div">
        {
            users?.map((user) => (
                <User 
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                    setUpdateValue={setUpdateValue}
                    setModal={setModal}
                    updateValue={updateValue}
                    color={color}
                />
            ))
        }
        </div>
      </div>
    )
}

export default UserList