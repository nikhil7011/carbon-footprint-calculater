import React from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import styles from './FormOne.module.css'
import { UserContext } from '../../../Context/Context'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom'

const FormOne = () => {

    const { formData, setFormData } = UserContext()

    const navigate = useNavigate()

    return (
        <>
            <Header heading="Household" subheading="Usage inside your home" />
            <div className={styles.household}>
                <Input
                    type="text"
                    id="electricity"
                    label="Electricity"
                    value={formData.electricity}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            electricity: e.target.value
                        })
                    }}
                    placeholder="Electricity consumption in kWh"
                />

                <Input
                    type="text"
                    id="gas"
                    label="Natural gas"
                    value={formData.gas}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            gas: e.target.value
                        })
                    }}
                    placeholder="Gas consumption in metric tons"
                />

                <Input
                    type="text"
                    id="oil"
                    label="Heating Oil"
                    value={formData.oil}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            oil: e.target.value
                        })
                    }}
                    placeholder="Heating oil consumption in liters"
                />

                <Input
                    type="text"
                    id="people"
                    label="Number of people in your house"
                    value={formData.people}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            people: e.target.value
                        })
                    }}
                    placeholder="Number of people in your house"
                />
            </div>
            <SubmitButton
             onClick={ () => navigate('/household/cars')} />
        </>
    )
}

export default FormOne