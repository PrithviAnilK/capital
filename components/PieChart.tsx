import React, { FC } from 'react'
import styled from 'styled-components';
import { ResponsivePie } from '@nivo/pie'
import { Spin } from 'antd';

interface Props {
	portfolio: {
		ticker: string,
		percent: number
	}[]
}

const PieContainer = styled.div`
	height: 400px;
	@media (max-width: 768px) {
		height: 350px;
	}

`;

const PieChart: FC<Props> = ({ portfolio }) => {
	return (
		<PieContainer>
			<ResponsivePie
				data={portfolio.map(asset => ({ id: asset.ticker, label: asset.ticker, value: asset.percent }))}
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				colors={{ scheme: 'nivo' }}
				borderWidth={1}
				borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
				radialLabelsSkipAngle={10}
				radialLabelsTextXOffset={6}
				radialLabelsTextColor="#333333"
				radialLabelsLinkOffset={0}
				radialLabelsLinkDiagonalLength={16}
				radialLabelsLinkHorizontalLength={24}
				radialLabelsLinkStrokeWidth={1}
				radialLabelsLinkColor={{ from: 'color' }}
				slicesLabelsSkipAngle={10}
				slicesLabelsTextColor="#333333"
				animate={true}
				motionStiffness={90}
				motionDamping={15}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						size: 4,
						padding: 1,
						stagger: true
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						rotation: -45,
						lineWidth: 6,
						spacing: 10
					}
				]}
				fill={[
					{
						match: {
							id: 'ruby'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'c'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'go'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'python'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'scala'
						},
						id: 'lines'
					},
					{
						match: {
							id: 'lisp'
						},
						id: 'lines'
					},
					{
						match: {
							id: 'elixir'
						},
						id: 'lines'
					},
					{
						match: {
							id: 'javascript'
						},
						id: 'lines'
					}
				]}
			/>
		</PieContainer>
	)
}

export default PieChart;