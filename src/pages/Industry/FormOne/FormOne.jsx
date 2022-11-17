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
                    label="Diesel"
                    value={formData.oil}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            oil: e.target.value
                        })
                    }}
                    placeholder="Diesel consumption in liters"
                />

                <Input
                    type="text"
                    id="coal"
                    label="Coal"
                    value={formData.coal}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            coal: e.target.value
                        })
                    }}
                    placeholder="Coal consumption in metric tons"
                />
            </div>
            <SubmitButton
             onClick={ () => navigate('/industry/machines')} />
        </>
    )
}

export default FormOne