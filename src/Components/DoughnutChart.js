import React from 'react';
import {Doughnut} from 'react-chartjs-2';


const Doughnutc = ({ data: {confirmed, recovered, deaths}, country}) => {
	//console.log({confirmed});
	if(!confirmed){
		return 'Loading...'
	}

	if(country===""){
		country="Global"
	}
	
const data = {
	labels: [
		'Infected',
		'Recovered',
		'Deaths'
	],
	datasets: [{
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
        <h2 style={{textAlign:'center', margin:'70px 0px 30px 0px'}}>Chart Representation of {country} </h2>
        <Doughnut data={data} height={90} />
      </div>
    );
  

}
export default Doughnutc;