import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons'
import {Bar, Pie} from 'react-chartjs-2'

const statePie = {
  labels: ['Males', 'Females'],
  datasets: [
    {
      label: 'Gender Comparison',
      backgroundColor: [
        '#1f3030ff',
        '#0f4c5c'
      ],
      hoverBackgroundColor: [
      'lighten($charleston-green, 15%)',
      'lighten($comfy-blue, 15%)'
      ],
      data: [35, 65]
    }
  ]
}

const stateBar = {
  labels: ['Males', 'Females'],
  datasets: [
    {
      label: 'Gender Comparison',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [35, 65]
    }
  ]
}

const App = () => {
  return (
    <div className="appp">
      <section className="left">
        <div className="chart-container bar">
          <h1 className="head"><FontAwesomeIcon icon={faChartBar}/> Bar chart</h1>
          <div className="chart bar-chart">
            <Bar
              data={stateBar}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize: 30
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
              className="bar-charty"
            />
          </div>
        </div>
      </section>

      <section className="right">
        <div className="chart-container pie">
          <h1 className="head"><FontAwesomeIcon icon={faChartPie}/> Pie chart</h1>
          <div className="chart pie-chart">
            <Pie
              data={statePie}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize: 30
                },
                legend:{
                  display: true,
                  position: 'right'
                }
              }}
              className="pie-charty"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
