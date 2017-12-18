import React from 'react';

export default class CardComponent extends React.Component {


	render() {
		let { provider } = this.props;
		return (
			<div className="col-md-4">
			<div className="card-block">
				<h4 className="card-title">Provider Name: {provider['Provider Name']}</h4>
				<div className="card-content">
					<p>Provider Id: {provider['Provider Id']}</p>
					<p>DRG Definition: {provider['DRG Definition']}</p>
					<p>Provider Name: {provider['Provider Id']}</p>
					<p>Provider Street Address: {provider['Provider Street Address']}</p>
					<p>Provider City: {provider['Provider City']}</p>
					<p>Provider State: {provider['Provider State']}</p>
					<p>Hospital Referral Region Description: {provider['Hospital Referral Region Description']}</p>
					<p>Total Discharges: {provider['Total Discharges']}</p>
					<p>Average Covered Charges: {provider['Average Covered Charges']}</p>
					<p>Average Total Payments: {provider['Average Total Payments']}</p>
					<p>Average Medicare Payments: {provider['Average Medicare Payments']}</p>
				</div>
			</div>
			</div>
		);
	}
}
