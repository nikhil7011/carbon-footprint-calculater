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
            <Header heading="Industry" subheading="Usage inside your industry" />
            <div className={styles.household}>
                <Input
                    type="number"
                    id="machines"
                    label="Number of heavy machines"
                    value={formData.machines}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            machines: e.target.value
                        }); createArray(e.target.value)
                    }}
                    placeholder="Number of cars you own"
                />
                {/* create an input field for each machine . The number of input fields is equal to the number of machines input by the user .*/}
                {createArray(formData.machines).map((item, index) => {
                    return (
                        <Input
                            type="number"
                            id={`Machine${index + 1}`}
                            label={`Machine ${index + 1}`}
                            value={formData[`Machine${index + 1}`]}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [`Machine${index + 1}`]: e.target.value
                                })
                            }}
                            placeholder="Energy consumption in kWh"
                        />
                    )
                })}
            </div>
            <SubmitButton 
            onClick={() => navigate('/industry/results')}/>
        </>
    )
}

export default FormTwo