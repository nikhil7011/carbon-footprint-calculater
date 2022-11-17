import React from 'react'
import { UserContext } from '../../../Context/Context'
import styles from './Results.module.css'
import { PieChart } from 'react-minimal-pie-chart';
import Header from '../../../components/Header/Header';

const Results = () => {

    const { formData, setFormData } = UserContext()

    // function to calculate the total carbon footprint of the user
    const calculateCarbonFootprint = () => {
        let total = 0
        // electricity consumption
        total += formData.electricity * 0.5
        // gas consumption
        total += formData.gas * 2.3
        // heating oil consumption
        total += formData.oil * 2.7
        // number of people in the household
        total += formData.coal * 0.5
        // distance travelled by each car
        for (let i = 1; i <= formData.machines; i++) {
            total += formData[`Machine${i}`] * 0.2
        }
        return total
    }

    // Create a pie chart to show the carbon footprint of each category
    const pieChart = () => {
        let electricity = formData.electricity * 0.5
        let gas = formData.gas * 2.3
        let oil = formData.oil * 2.7
        let machines = 0
        for (let i = 1; i <= formData.machines; i++) {
            machines += formData[`Machine${i}`] * 0.2
        }
        let total = electricity + gas + oil + machines
        let electricityPercent = (electricity / total) * 100
        let gasPercent = (gas / total) * 100
        let oilPercent = (oil / total) * 100
        let machinesPercent = (machines / total) * 100

        return (
            <div className={styles.piechart}>
                <PieChart
                    data={[
                        { title: 'Electricity', value: electricityPercent, color: 'green' },
                        { title: 'Gas', value: gasPercent, color: 'orange' },
                        { title: 'Heating Oil', value: oilPercent, color: 'red' },
                        { title: 'Machines', value: machinesPercent, color: '#1bbcf2' },
                    ]}
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={{ fontSize: '5px', fill: '#000000' }}
                    labelPosition={130}
                    radius={15}
                    segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                    viewBoxSize={[100, 65]}
                    center={[50, 25.5]}
                />
            </div>
        )
    }

    // function to calculate average carbon footprint per person
    const calculateAverageCarbonFootprint = () => {
        let total = 0
        // electricity consumption
        total += formData.electricity * 0.5
        // gas consumption
        total += formData.gas * 2.3
        // heating oil consumption
        total += formData.oil * 2.7
        // mileage of each car
        for (let i = 1; i <= formData.cars; i++) {
            total += formData[`car${i}`] * 0.2
        }
        return (total / formData.people).toFixed(2)
    }

    // function to render a table of the carbon footprint of each category
    const renderTable = () => {
        let electricity = formData.electricity * 0.5
        let gas = formData.gas * 2.3
        let oil = formData.oil * 2.7
        let cars = 0
        for (let i = 1; i <= formData.cars; i++) {
            cars += formData[`car${i}`] * 0.2
        }
        let total = electricity + gas + oil + cars

        return (
            <table>
                <tr>
                    <th>Category</th>
                    <th>Carbon Footprint (kg)</th>
                    <th>Percentage</th>
                </tr>
                <tr>
                    <td>Electricity</td>
                    <td>{electricity.toFixed(2)}</td>
                    <td>{((electricity / total) * 100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Gas</td>
                    <td>{gas.toFixed(2)}</td>
                    <td>{((gas / total) * 100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Heating Oil</td>
                    <td>{oil.toFixed(2)}</td>
                    <td>{((oil / total) * 100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Cars</td>
                    <td>{cars.toFixed(2)}</td>
                    <td>{((cars / total) * 100).toFixed(2)}%</td>
                </tr>
            </table>
        )
    }

// function to render message based on the carbon footprint. 
    const renderMessage = () => {
        let total = calculateCarbonFootprint()
        if (total < 10) {
            return (
                <div className={styles.message}>
                    <h3>Well done!</h3>
                    <p>Your carbon footprint is very low. You are doing a great job in reducing your carbon footprint. Keep it up!</p>
                </div>
            )
        } else if (total < 20) {
            return (
                <div className={styles.message}>
                    <h3>Good job!</h3>
                    <p>Your carbon footprint is low. You are doing a good job in reducing your carbon footprint. Keep it up!</p>
                </div>
            )
        } else if (total < 30) {
            return (
                <div className={styles.message}>
                    <h3>Not bad!</h3>
                    <p>Your carbon footprint is average. You can do better in reducing your carbon footprint. Keep it up!</p>
                </div>
            )
        } else {
            return (
                <div className={styles.message}>
                    <h3>Not good!</h3>
                    <p>Your carbon footprint is high. You can do better in reducing your carbon footprint. Keep it up!</p>
                </div>
            )
        }
    }

    const renderMessage2 = () => {
            // show message for individual components that can be improved
            let electricity = formData.electricity * 0.5
            let gas = formData.gas * 2.3
            let oil = formData.oil * 2.7
            let cars = 0
            for (let i = 1; i <= formData.cars; i++) {
                cars += formData[`car${i}`] * 0.2
            }
            let total = electricity + gas + oil + cars
            let electricityPercent = (electricity / total) * 100
            let gasPercent = (gas / total) * 100
            let oilPercent = (oil / total) * 100
            let carsPercent = (cars / total) * 100

            if (electricityPercent > 50) {
                return (
                    <div className={styles.message}>
                        <h3> Your electricity consumption is high. Here are some ways to reduce it:</h3>
                        <ul>
                            <li>Turn off lights when not in use</li>
                            <li>Turn off appliances when not in use</li>
                            <li>Use energy efficient appliances</li>
                            <li>Use energy efficient light bulbs</li>
                            <li>Use energy efficient heating and cooling systems</li>
                        </ul>
                    </div>
                )
            }
            if (gasPercent > 50) {
                return (
                    <div className={styles.message}>
                        <h3> Your gas consumption is high. Here are some ways to reduce it:</h3>
                        <ul>
                            <li>Use an induction stove instead of a gas stove</li>
                            <li>Avoid overcooking</li>
                            <li> Use pans with lids</li>
                        </ul>
                    </div>
                )
            }
            if (oilPercent > 50) {
                return (
                    <div className={styles.message}>
                        <h3> Your heating oil consumption is high. Here are some ways to reduce it:</h3>
                        <ul>
                            <li>Shallow fry instead of deep fry</li>
                            <li>Use a pressure cooker</li>
                            <li>Prefer boiled/roasted food over fried</li>
                        </ul>
                    </div>
                )
            }
            if (carsPercent > 50) {
                return (
                    <div className={styles.message}>
                        <h3> Your car's carbon emission is high. Here are some ways to reduce it:</h3>
                        <ul>
                            <li>Use public transport</li>
                            <li>Use a bicycle</li>
                            <li>Use a carpool</li>
                            <li>If possible, switch to an electric car</li>
                        </ul>
                    </div>
                )
        }
    }



    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.header__heading}>Results</h1>
            </header>
            <div className={styles.chart}>
                {pieChart()}
                {renderTable()}
                {renderMessage()}
                {renderMessage2()}
            </div>
        </>
    )
}

export default Results