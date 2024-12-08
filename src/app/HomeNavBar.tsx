import type { FC, ReactNode, ComponentProps } from 'react'
import { HiXMark, HiArrowUp, HiBars3 } from 'react-icons/hi2'

import { Drawer } from '@/components/ui/drawer'
import { IconButton } from '@/components/ui/icon-button'
import { Link } from '@/components/ui/link'
import type { RootProps as DrawerRootProps } from '@/components/ui/styled/drawer'
import { Text } from '@/components/ui/text'

import { css } from 'styled-system/css'
import { Box, HStack } from 'styled-system/jsx'

const TriggerButton = ({
	action,
	...remainingProps
}: ComponentProps<typeof IconButton> & { action: 'open' | 'close' }) => (
	<IconButton
		variant="outline"
		borderRadius="full"
		shadow="lg"
		bgColor="colorPalette.1"
		color="gray.11"
		aria-label={action === 'open' ? 'Abrir menú' : 'Cerrar menú'}
		size="md"
		p={0}
		{...remainingProps}
	>
		{action === 'open' ? <HiBars3 /> : <HiXMark />}
	</IconButton>
)

const headingIds = {
	home: 'inicio',
	celebration: 'celebracion',
	location: 'ubicacion',
	info: 'info',
	guide: 'guia',
}

const headingListItems: Record<
	keyof typeof headingIds,
	{ text: string; icon?: ReactNode }
> = {
	home: { text: 'Volver arriba', icon: <HiArrowUp /> },
	celebration: { text: 'Ceremonia y celebración' },
	location: { text: 'Cómo llegar' },
	info: { text: 'Otra información' },
	guide: { text: 'Guía de Málaga' },
}

const HomeNavBar: FC<DrawerRootProps> = (props) => {
	return (
		<>
			{/* Mobile navbar */}
			<Drawer.Root {...props}>
				<Drawer.Trigger asChild>
					<TriggerButton
						action="open"
						position="fixed"
						bottom="4"
						right="4"
						zIndex="sticky"
						hideFrom="lg"
					/>
				</Drawer.Trigger>
				<Drawer.Backdrop animationDuration="0.2" />
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.Body>
							<ul
								className={css({
									h: 'full',
									display: 'flex',
									flexDir: 'column',
									gap: '4',
									px: '4',
									justifyContent: 'flex-end',
									fontWeight: 'bold',
									'& a': {
										textDecoration: 'none',
										fontSize: 'xl',
									},
								})}
							>
								{Object.entries(headingIds).map(([key, value]) => {
									const headingKey = key as keyof typeof headingIds
									return (
										<li key={headingKey}>
											<Drawer.Trigger asChild>
												<Link href={`#${value}`}>
													<Text>{headingListItems[headingKey].text}</Text>{' '}
													{headingListItems[headingKey].icon}
												</Link>
											</Drawer.Trigger>
										</li>
									)
								})}
							</ul>
						</Drawer.Body>

						<Drawer.Footer>
							<HStack justifyContent="space-between" w="full">
								<Box fontWeight="bold">Menú</Box>
								<Drawer.CloseTrigger asChild>
									<TriggerButton action="close" />
								</Drawer.CloseTrigger>
							</HStack>
						</Drawer.Footer>
					</Drawer.Content>
				</Drawer.Positioner>
			</Drawer.Root>

			{/* Desktop navbar */}
			<Box
				hideBelow="lg"
				position="fixed"
				right="0"
				bgColor="colorPalette.a2"
				h="full"
			>
				<ul
					className={css({
						h: 'full',
						display: 'flex',
						flexDir: 'column',
						gap: '4',
						px: { base: '2', xl: '8' },
						py: '8',
						justifyContent: 'start',
						fontWeight: 'bold',
						fontSize: { base: 'md', xl: 'xl' },
						'& a': {
							textDecoration: 'none',
						},
					})}
				>
					{Object.entries(headingIds).map(([key, value]) => {
						const headingKey = key as keyof typeof headingIds
						return (
							<li key={headingKey}>
								<Link href={`#${value}`}>
									<Text>{headingListItems[headingKey].text}</Text>{' '}
									{headingListItems[headingKey].icon}
								</Link>
							</li>
						)
					})}
				</ul>
			</Box>
		</>
	)
}

export { HomeNavBar, headingIds }
