import { FC } from 'react'
import { HiXMark, HiArrowUp, HiBars3 } from 'react-icons/hi2'

import { Drawer } from '@/components/ui/drawer'
import { IconButton } from '@/components/ui/icon-button'
import { Link } from '@/components/ui/link'
import type { RootProps as DrawerRootProps } from '@/components/ui/styled/drawer'

import type { ComponentProps } from '../../styled-system/types'

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
		bgColor="accent.1"
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
}

const HomeNavBar: FC<DrawerRootProps> = (props) => {
	return (
		<Drawer.Root {...props}>
			<Drawer.Trigger asChild>
				<TriggerButton
					action="open"
					position="fixed"
					bottom="4"
					right="4"
					zIndex="sticky"
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
							<li>
								<Drawer.Trigger asChild>
									<Link href={`#${headingIds.home}`}>
										Volver arriba
										<HiArrowUp />
									</Link>
								</Drawer.Trigger>
							</li>
							<li>
								<Drawer.Trigger asChild>
									<Link href={`#${headingIds.celebration}`}>
										Ceremonia y celebración
									</Link>
								</Drawer.Trigger>
							</li>
							<li>
								<Drawer.Trigger asChild>
									<Link href={`#${headingIds.location}`}>Cómo llegar</Link>
								</Drawer.Trigger>
							</li>
							<li>
								<Drawer.Trigger asChild>
									<Link href={`#${headingIds.info}`}>Otra información</Link>
								</Drawer.Trigger>
							</li>
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
	)
}

export { HomeNavBar, headingIds }
