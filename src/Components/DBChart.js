import React from 'react';
import {Doughnut, Bar} from 'react-chartjs-2';




const Charts = ({ data: {confirmed, recovered, deaths}, country}) => {

	
	if(!confirmed){
		return 'Loading...'
	}

	if(country===""){
		country="Global"
	}
	//console.log({confirmed});

const data = {
	labels: [
		'Infected',
		'Recovered',
		'Deaths'
	],

	datasets: [{
		label: 'People',
		data: [confirmed.value, recovered.value, deaths.value],
		backgroundColor: [
		'Blue',
		'Green',
		'Red'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};




    return (
      <div>
        <h3 style={{textAlign:'center', margin:'70px 0px 30px 0px'}}>Chart Representation of {country} </h3>
        <Doughnut data={data} height={90} />
		<br/>
		<Bar data={data} />
      </div>
    );
  

}
export default Charts;