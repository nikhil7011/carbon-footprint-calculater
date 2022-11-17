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
        total += formData.people * 0.5
        // distance travelled by each car
        for (let i = 1; i <= formData.cars; i++) {
            total += formData[`car${i}`] * 0.2
        }
        return total
    }

    // Create a pie chart to show the carbon footprint of each category
    const pieChart = () => {
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

        return (
            <div className={styles.piechart}>
                <PieChart
                    data={[
                        { title: 'Electricity', value: electricityPercent, color: '#E38627' },
                        { title: 'Gas', value: gasPercent, color: '#C13C37' },
                        { title: 'Heating Oil', value: oilPercent, color: '#6A2135' },
                        { title: 'Cars', value: carsPercent, color: '#F5A623' },
                    ]}
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={{ fontSize: '5px', fill: '#000000' }}
                    labelPosition={130}
                    radius={20}
                    segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                    viewBoxSize={[100, 75]}
                    center={[50, 37.5]}
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

    return (
        <>
            <Header heading="Household" subheading="Usage inside your home" />
            <div className={styles.chart}>
                {pieChart()}
                {renderTable()}
            </div>
        </>
    )
}

export default Results