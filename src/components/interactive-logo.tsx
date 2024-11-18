'use client'

import Image from 'next/image'
import { FC, useRef, useState } from 'react'

import { Logo } from '@/components/logo'
import couplePic from '@/public/couple.jpeg'

import { css } from 'styled-system/css'
import { Box, Square } from 'styled-system/jsx'

const InteractiveLogo: FC = () => {
	const [shouldShowLogo, setShouldShowLogo] = useState(true)
	const hasBeenToggled = useRef(false)

	const toggleLogo = () => {
		setShouldShowLogo((prevState) => !prevState)
		hasBeenToggled.current = true
	}

	return (
		<button
			className={css({ _hover: { cursor: 'pointer' } })}
			onClick={toggleLogo}
		>
			<Box perspective="1000px" width="300px" height="300px">
				<Box
					position="relative"
					width="full"
					height="full"
					transition="transform 0.6s"
					transformStyle="preserve-3d"
					transform={shouldShowLogo ? 'none' : 'rotateY(180deg)'}
				>
					<Box
						position="absolute"
						width="full"
						height="full"
						backfaceVisibility="hidden"
						animation={
							hasBeenToggled.current ? 'none' : 'shake-pause 5s infinite'
						}
					>
						<Logo />
					</Box>
					<Square
						position="absolute"
						width="full"
						height="full"
						backfaceVisibility="hidden"
						transform="rotateY(180deg)"
						bgColor="colorPalette.default"
					>
						<Image
							src={couplePic}
							alt="Marta y Mario en la Alcazaba de Málaga"
							fill
							quality={100}
							className={css({
								objectFit: 'cover',
								objectPosition: 'center',
								borderWidth: '6',
								borderColor: 'amber.7',
							})}
						/>
					</Square>
				</Box>
			</Box>
		</button>
	)
}

export { InteractiveLogo }
