import React from 'react'
import UserLevelIcon from './UserLevelIcon'
import LevelCard from './LevelCard'

export default function LevelCardTable({ levelList = [], onClick }) {
	return (
		<div className="pb-28">
			{levelList.map((level, index) => {
				return (
					<LevelCard
						key={index}
						startIcon={
							<UserLevelIcon
								levelNum={level?.level_degree ?? index}
								alt="Star"
								className="w-10 text-title"
								iconClass="user-level-icon-small"
							/>
						}
						levelUserNum = {level?.level_user_num ?? 0}
						level={level?.level_degree ?? index}
						onClick={onClick}
					/>
				)
			})}
		</div>
	)
}
