'use client'

import Script from 'next/script'

import { Box, Center } from 'styled-system/jsx'

function Weather() {
	return (
		<Center w="full">
			<Box hideBelow="md">
				<div id="c_ac723400b48ac36a5047c3a80a01d1d2" className="completo" />
				<Script
					src="https://www.eltiempo.es/widget/widget_loader/ac723400b48ac36a5047c3a80a01d1d2"
					strategy="lazyOnload"
				/>
			</Box>
			<Box hideFrom="md">
				<div id="c_dd52a1378bc5f8bd991db430faebd929" className="alto" />
				<Script
					src="https://www.eltiempo.es/widget/widget_loader/dd52a1378bc5f8bd991db430faebd929"
					strategy="lazyOnload"
				/>
			</Box>
		</Center>
	)
}

export { Weather }
