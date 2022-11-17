import React from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import styles from './FormTwo.module.css'
import { UserContext } from '../../../Context/Context'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom'

const FormTwo = () => {

    const { formData, setFormData } = UserContext()

    const navigate = useNavigate()

    // function to create an array of size n where n is the number of cars input by the user
    const createArray = (n) => {
        let arr = []
        for (let i = 0; i < n; i++) {
            arr.push(i)
        }
        return arr
    }

    return (
        <>
            <Header heading="Household" subheading="Usage inside your home" />
            <div className={styles.household}>
                <Input
                    type="number"
                    id="cars"
                    label="Number of cars"
                    value={formData.cars}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            cars: e.target.value
                        }); createArray(e.target.value)
                    }}
                    placeholder="Number of cars you own"
                />
                {/* create an input field for each car . The number of input fields is equal to the number of cars input by the user . The input takes the distance travelled by each car */}
                {createArray(formData.cars).map((item, index) => {
                    return (
                        <Input
                            type="number"
                            id={`car${index + 1}`}
                            label={`Car ${index + 1}`}
                            value={formData[`car${index + 1}`]}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [`car${index + 1}`]: e.target.value
                                })
                            }}
                            placeholder="Mileage of Car"
                        />
                    )
                })}
            </div>
            <SubmitButton 
            onClick={() => navigate('/household/results')}/>
        </>
    )
}

export default FormTwo