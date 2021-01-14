import React from 'react'
import Header from './Components/Header'
import { fetchData } from './Components/FetchApi';
import Countries from './Components/Countries'
import Papers from './Components/Papers'
import Doughnutc from './Components/DoughnutChart'




class App extends React.Component {
  state = {
    fdata: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ fdata:data });
  }

  handleCountryChange = async (pcountry) => {
    const data = await fetchData(pcountry);

    this.setState({ fdata:data, country: pcountry });
  }

  render() {
    const { fdata, country } = this.state;

  return (
    <div >

       <Header />
       <Papers data={fdata} />
       <Countries handleCountryChange={this.handleCountryChange} />
       <Doughnutc data={fdata} country={country} />
        
    </div>
  );
  }
}

export default App;
