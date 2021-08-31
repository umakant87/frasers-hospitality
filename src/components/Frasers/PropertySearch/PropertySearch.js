import React from "react";
import Section from "../../Molecules/Section/Section";
import FormSelect from "../../Atoms/FormSelect/FormSelect";
import FormInput from "../../Atoms/FormInput/FormInput";
import "./PropertySearch.scss";
import Button from "../../Atoms/Button/Button";
import Text from "../../Atoms/Text/Text";

const PropertySearch = () => {
	return (
		<Section>
			<div className="c-propertySearch">
				{/* <Picture
					alt="Alternate"
					src="https://www.fraserspropertyindustrial.com/-/media/Estates/AU/Northern-Region/Vantage-Yatala/Background-Images/find-your-place-section-bg.png"
				/> */}
				<div className="c-propertySearch__container">
					<div className="c-propertySearch__text">
						<div>
							<p><img src="./assets/images/FPI-Property---Search.png" /> Property Search</p>
						</div>
						<Text type="h1" value="Make it or move it. We'll find your match." />
					</div>
					<div className="c-propertySearch__fields fields">
						<div className="c-propertySearch__country fields">
							<FormSelect
								onClick={() => { }}
								options={[
									{
										label: 'View All',
										value: 'View All'
									},
									{
										label: 'Australia',
										value: 'Australia'
									},
									{
										label: 'Germany',
										value: 'Germany'
									},
									{
										label: 'Netherlands',
										value: 'Netherlands'
									}
								]}
							/>
						</div>
						<div className="c-propertySearch__property fields">
							<FormSelect
								onClick={() => { }}
								options={[
									{
										label: 'View All',
										value: 'View All'
									},
									{
										label: 'Develop',
										value: 'Develop'
									},
									{
										label: 'Lease',
										value: 'Lease'
									}
								]}
							/>
						</div>
						<div className="c-propertySearch__keyword fields">
							<FormInput
								id="keyword"
								label="Search Keyword"
								modifiers=""
								name="keyword"
								onClick={() => { }}
								placeholder="Search Keyword"
								type="text"
							/>
						</div>
						<div className="c-propertySearch__submit fields">
							<Button
								className="primary"
								label="Button"
								size="medium"
								type="button"
							/>
						</div>
					</div>
				</div>
			</div>
		</Section >
	)
}

export default PropertySearch;