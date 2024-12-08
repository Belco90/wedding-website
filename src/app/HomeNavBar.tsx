'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { FC, ReactNode, ComponentProps } from 'react'
import { HiXMark, HiArrowUp, HiBars3, HiHome } from 'react-icons/hi2'

import { Drawer } from '@/components/ui/drawer'
import { IconButton } from '@/components/ui/icon-button'
import { Link } from '@/components/ui/link'
import type { RootProps as DrawerRootProps } from '@/components/ui/styled/drawer'
import { Text } from '@/components/ui/text'

import { headingIds } from './sections'

import { css } from 'styled-system/css'
import { Box, HStack } from 'styled-system/jsx'

type TriggerButtonProps = ComponentProps<typeof IconButton> & {
	action: 'open' | 'close' | 'home'
}

const actionProperties: Record<
	TriggerButtonProps['action'],
	{ label: string; icon: ReactNode }
> = {
	open: { label: 'Abrir menú', icon: <HiBars3 /> },
	close: { label: 'Cerrar menú', icon: <HiXMark /> },
	home: { label: 'Volver al inicio', icon: <HiHome /> },
}

const TriggerButton = ({ action, ...remainingProps }: TriggerButtonProps) => (
	<IconButton
		variant="outline"
		borderRadius="full"
		shadow="lg"
		bgColor="colorPalette.1"
		color="gray.11"
		aria-label={actionProperties[action].label}
		size="md"
		p={0}
		{...remainingProps}
	>
		{actionProperties[action].icon}
	</IconButton>
)

const headingListItems: Record<
	keyof typeof headingIds,
	{ text: string; icon?: ReactNode }
> = {
	home: { text: 'Volver arriba', icon: <HiArrowUp /> },
	celebration: { text: 'Ceremonia y celebración' },
	location: { text: 'Cómo llegar' },
	info: { text: 'Otra información' },
	city: { text: 'Sobre Málaga' },
}

const HomeNavBar: FC<DrawerRootProps> = (props) => {
	const router = useRouter()
	const pathname = usePathname()
	const isHomepage = pathname === '/'

	const handleTriggerClick = () => {
		if (!isHomepage) {
			router.push('/')
		}
	}

	return (
		<>
			{/* Mobile navbar */}
			<Drawer.Root {...props} open={isHomepage ? undefined : false}>
				<Drawer.Trigger asChild>
					<TriggerButton
						action={isHomepage ? 'open' : 'home'}
						position="fixed"
						bottom="4"
						right="4"
						zIndex="overlay"
						hideFrom="lg"
						onClick={handleTriggerClick}
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
									<TriggerButton action={isHomepage ? 'close' : 'home'} />
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
				pt={{ base: '4', xl: '10' }}
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

export { HomeNavBar }
