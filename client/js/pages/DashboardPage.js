import React from 'react';
import ProviderAction from '../action/ProviderAction';
import {Table, Column, Cell} from 'fixed-data-table';
import { COUNTRIES } from '../tableConfig';
import TextCellComponent  from './TextCellComponent';


export default class DashboardPage extends React.Component {

	constructor() {
		super();
		this.state = {
			providers: []
		};

		this.applySearch = this.applySearch.bind(this);

	}

	applySearch(){
		let self = this;

		let queryParams = {};
		if(this.refs.isMaxDischarged.checked)
			queryParams["max_discharges"] = this.refs.maxDischarges.value;
		if(this.refs.isMinDischarged.checked)
			queryParams["min_discharges"] = this.refs.minDischarges.value;
		if(this.refs.isMaxAverageCoveredCharged.checked)
			queryParams["max_average_covered_charges"] = this.refs.maxAverageCoveredCharges.value;
		if(this.refs.isMinAverageCoveredCharged.checked)
			queryParams["min_average_covered_charges"] = this.refs.minAverageCoveredCharges.value;
		if(this.refs.isMaxAverageMedicarePayment.checked)
			queryParams["max_average_medicare_payments"] = this.refs.maxAverageMedicarePayments.value;
		if(this.refs.isMinAverageMedicarePayment.checked)
			queryParams["min_average_medicare_payments"] = this.refs.minAverageMedicarePayments.value;
		
		let query;
		
		if(!Object.keys(queryParams).length)
			query = null;
		else{
			query = Object.keys(queryParams)
				.filter(key => queryParams[key] !== '' && queryParams[key] !== null)
				.map(key => key + '=' + queryParams[key])
				.join('&');
			query = query.length > 0 ? '?' + query : null;
		}

		ProviderAction.getProviders(query).then((data) => {
			self.setState({
				providers: data
			});
		}).catch((error) => {
			console.log(error);
		})
	}

	render() {
		
				let self = this;
				return (
					<div className="container">
						<div className="row">
							<div class="col-md-12">
								<div className="row">
									<div className="col-xs-12">
										<h3>Providers Data
										</h3>
										<p>* Make sure you have checked the boxes and then passed the value in order to apply filters.</p>
										<hr />
									</div>
								</div>
								<div className="row">
		
									<div className="col-md-6 form-check">
										<label for="maxDischarges">
											Max Discharges
											<input className="form-check-input" type="checkbox" ref="isMaxDischarged" name="maxDischarges" value=""/>
										</label>
										<input type="text" className="form-control searchBox" ref="maxDischarges" placeholder="Enter Value"/>
									</div>
		
									<div className="col-md-6 form-check">
										<label for="maxDischarges">
											Min Discharges
											<input type="checkbox" className="form-check-input" ref="isMinDischarged" name="minDischarges" value=""/>
										</label>
										<input type="text" className="form-control searchBox" ref="minDischarges" placeholder="Enter Value"/>
									</div>
									<div className="col-md-6 form-check">
										<label for="maxAverageCoveredCharges">
											Max Avergage Covered Charges
											<input type="checkbox" className="form-check-input" ref="isMaxAverageCoveredCharged" name="maxAverageCoveredCharges" value=""/>
										</label>
										<input type="text" className="form-control searchBox" ref="maxAverageCoveredCharges" placeholder="Enter Value"/>
									</div>
									<div className="col-md-6 form-check">
										<label for="maxDischarges">
											Min Avergage Covered Charges
											<input type="checkbox" className="form-check-input" ref="isMinAverageCoveredCharged" name="minAverageCoveredCharges" value=""/>
										</label>
										<input type="text" className="form-control searchBox" onChange={this.searchAsset} ref="minAverageCoveredCharges" placeholder="Enter Value"/>
									</div>
									<div className="col-md-6 form-check">
										<label for="maxDischarges">
											Max Avergage Medicare Payments
											<input type="checkbox" className="form-check-input" ref="isMaxAverageMedicarePayment" name="maxAverageMedicarePayments" value=""/>
										</label>
										<input type="text" className="form-control searchBox" ref="maxAverageMedicarePayments" placeholder="Enter Value"/>
									</div>
									<div className="col-md-6 form-check">
										<label for="maxDischarges">
										Min Avergage Medicare Payments
											<input type="checkbox" className="form-check-input" ref="isMinAverageMedicarePayment" name="minAverageMedicarePayments" value=""/>
										</label>
										<input type="text" className="form-control searchBox" ref="minAverageMedicarePayments" placeholder="Enter Value"/>
									</div>
								</div>
								<br/>
								<button type="button" onClick={this.applySearch} className="btn btn-primary" value="Apply">Apply</button>
							</div>
						</div>
						<hr />
						<div className="card-container">	
						{this.state.providers.length == 0 ? <div className="text-center">No data to show. Please click <b>Apply</b> to have the results.</div> : null}
							<div className="col-md-4">
								
								{
									this.state.providers.map((provider) => {
										return <div className="row">
										
												<div className="card-block">
												<h4 className="card-title">Provider Name: {provider['Provider Name']}</h4>
												<h6 className="card-title">Provider Id: {provider['Provider Id']}</h6>
												<h6 className="card-title">DRG Definition: {provider['DRG Definition']}</h6>
												<h6 className="card-title">Provider Name: {provider['Provider Id']}</h6>
												<h6 className="card-title">Provider Street Address: {provider['Provider Street Address']}</h6>
												<h6 className="card-title">Provider City: {provider['Provider City']}</h6>
												<h6 className="card-title">Provider State: {provider['Provider State']}</h6>
												<h6 className="card-title">Hospital Referral Region Description: {provider['Hospital Referral Region Description']}</h6>
												<h6 className="card-title">Total Discharges: {provider['Total Discharges']}</h6>
												<h6 className="card-title">Average Covered Charges: {provider['Average Covered Charges']}</h6>
												<h6 className="card-title">Average Total Payments: {provider['Average Total Payments']}</h6>
												<h6 className="card-title">Average Medicare Payments: {provider['Average Medicare Payments']}</h6>
											</div>
										</div>

									})
							}
							</div>
						</div>
					</div>
				);
		}
}
