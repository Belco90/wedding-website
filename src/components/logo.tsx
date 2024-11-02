import Image from 'next/image'
import { FC } from 'react'

import { Text } from '@/components/ui/styled/text'
import ampersandPic from '@/public/ampersand.png'

import { css } from 'styled-system/css'
import { VStack } from 'styled-system/jsx'

const Logo: FC = () => {
	return (
		<VStack
			justifyContent="space-between"
			height="full"
			width="full"
			borderWidth="6"
			borderColor="amber.7"
			position="relative"
		>
			<Text
				fontFamily="banner"
				fontSize="6xl"
				color="accent.a11"
				textTransform="uppercase"
			>
				Marta
			</Text>
			<Image
				src={ampersandPic}
				alt="y"
				priority
				fill
				className={css({
					objectFit: 'contain',
					objectPosition: 'center',
					opacity: 0.2,
				})}
			/>
			<Text
				fontFamily="banner"
				fontSize="6xl"
				color="accent.a11"
				textTransform="uppercase"
			>
				Mario
			</Text>
		</VStack>
	)
}

export { Logo }
