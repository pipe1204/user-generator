import "./form.css"
import { useForm } from "react-hook-form"
import { useState, useRef, useEffect } from "react"
import { RiCloseCircleLine } from 'react-icons/ri'
import { randomColor } from "../../utils/randomColor"

const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
}

const Form = ({createUser, updateValue, setUpdateValue, updateUser, setModal, setColor}) => {

    const [error, setError] = useState(null)
    
    const formRef = useRef()

    useEffect(() => {
      if(updateValue) {
        reset(updateValue)
      }
    },[updateValue])

    const {handleSubmit, register, required, reset} = useForm()

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const submitForm = (data, e) => {

      if(updateValue) {
        updateUser(updateValue.id, data)
        setModal(false)
      } else {

        if(!isValidEmail(e.target.email.value)) {
          setError('Please enter a correct email')
      } else {
          setError(null)
          createUser(data)
          setModal(false)
          setColor(randomColor())
        }
      }
      reset(defaultValues)
      setUpdateValue()  
    }

    const handleChange = (e) => {
        if(!isValidEmail(e.target.value)) {
            setError('Please enter a correct email')
        } else {
            setError(null)
        }
    }
    
    const handleCloseModal = () => {
      setModal(false)
      if(updateValue) {
        setUpdateValue() 
        reset(defaultValues)
      }
    }

  return (
    <div className='form__main__div scale-up-center'>
      <form ref={formRef} onSubmit={handleSubmit(submitForm)}>
          <div className="close__form__div">
            <RiCloseCircleLine size={25} color={"#182747"} cursor={'pointer'} onClick={handleCloseModal}/>
          </div>
          <div className="div__input">
          <label>Email</label>
          <input
            type="text"
            id="email"
            label="Email"
            autoComplete="off"
            {...register("email")}
            required
            onChange={handleChange}
          />
          {error && <p style={{color: 'red'}}>{error}</p>}
          </div>
          <div className="div__input">
          <label>Password</label>
          <input
            type="password"
            id="password"
            label="Password"
            autoComplete="off"
            {...register("password")}
            required
          />
          </div>
          <div className="div__input">
          <label>First Name</label>
          <input
            type="text"
            id="first_name"
            label="First Name"
            autoComplete="off"
            {...register("first_name")}
            required
          />
          </div>
          <div className="div__input">
          <label>Last Name</label>
          <input
            type="text"
            id="last_name"
            label="Last Name"
            autoComplete="off"
            {...register("last_name")}
            required
          />
          </div>
          <div className="div__input">
          <label>Birthday</label>
          <input
            type="date"
            id="birthday"
            label="Birthday"
            autoComplete="off"
            {...register("birthday")}
            required
          />
          </div>
          <div className="div__input">
              <button>{updateValue ? 'Update' : 'Create'}</button>
          </div>
      </form>
    </div>
  )
}

export default Form