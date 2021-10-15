import NavButton from 'components/NavButton'
import RevenueTable from 'components/RevenueTable'
import StaticCard from 'components/StaticCard'
import TableSwipeableViews from 'components/TableSwipeableViews'
import React from 'react'
import { useState } from 'react'
import Layout from '../../layouts'

export default function Revenue() {
	const [tabNumber, setTabNumber] = useState(0)
	const handleChange = (param) => {
		setTabNumber(param)
	}
	const totalEarning = (
		<div>
			<span className=" text-main font-bold">Total Earning</span>
			<br />
			<span className="font-bold">2156584652465</span>
			<span className="font-bold text-sm">usdt</span>
		</div>
	)
	const totalRevenue = (
		<div>
			<span className="text-main font-bold">Total Revenue</span>
			<br />
			<span className="font-bold">100</span>
			<span className="font-bold text-sm">usdt</span>
		</div>
	)
	return (
		<Layout
			isLogin={true}
			title="Revenue statistics"
			before="home"
			menuIndex={1}
		>
			<div className="rounded-md h-20 self-center align-middle text-center">
				<StaticCard content1={totalEarning} content2={totalRevenue} />
			</div>
			<div className="pt-8">
				<NavButton
					tabLabelOne="Daily Revenue"
					tabLabelTwo="Monthly Revenue"
					tabNumber={tabNumber}
					onChange={handleChange}
				/>
			</div>
			<div className="pt-8 pb-20">
				<TableSwipeableViews contentOne={<RevenueTable />} contentTwo={<RevenueTable isdaily={false} />} contentNumber={tabNumber} />
			</div>
		</Layout>
	)
}
