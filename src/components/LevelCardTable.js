import React from 'react'
import UserLevelIcon from './UserLevelIcon'
import LevelCard from './LevelCard'

export default function LevelCardTable({ levelList = [], onClick }) {
	console.log( levelList )
	return (
		<div className="pb-28">
			{levelList.map((level = [], index) => {
				return (
					<LevelCard
						key={index}
						startIcon={
							<UserLevelIcon
								levelNum={index + 1}
								alt="Star"
								className="w-10 text-title"
								iconClass="user-level-icon-small"
							/>
						}
						levelUserNum = {level?.length ?? 0}
						level={index + 1}
						onClick={onClick}
					/>
				)
			})}
		</div>
	)
}
