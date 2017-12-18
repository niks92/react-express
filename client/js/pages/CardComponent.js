import React from 'react';

export default class CardComponent extends React.Component {


	render() {
		let { provider } = this.props;
		return (
			<div className="row">
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
		);
	}
}
