import { FC } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiXMark } from 'react-icons/hi2'

import { Drawer } from '@/components/ui/drawer'
import { IconButton } from '@/components/ui/icon-button'
import { Link } from '@/components/ui/link'
import type { RootProps as DrawerRootProps } from '@/components/ui/styled/drawer'

import type { ComponentProps } from '../../styled-system/types'

import { css } from 'styled-system/css'

const TriggerButton = ({
	action,
	...remainingProps
}: ComponentProps<typeof IconButton> & { action: 'open' | 'close' }) => (
	<IconButton
		variant="outline"
		borderRadius="full"
		shadow="lg"
		bgColor="accent.1"
		color="gray.10"
		aria-label={action === 'open' ? 'Abrir menú' : 'Cerrar menú'}
		size="xs"
		{...remainingProps}
	>
		{action === 'open' ? <GiHamburgerMenu /> : <HiXMark />}
	</IconButton>
)

const headingIds = {
	home: 'home',
	celebration: 'celebration',
	location: 'location',
	info: 'info',
}

const HomeDrawer: FC<DrawerRootProps> = (props) => {
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
			<Drawer.Backdrop />
			<Drawer.Positioner>
				<Drawer.Content>
					<Drawer.Body>
						<ul
							className={css({
								h: 'full',
								display: 'flex',
								flexDir: 'column',
								gap: '4',
								alignItems: 'center',
								justifyContent: 'center',
								fontWeight: 'bold',
							})}
						>
							<li>
								<Link href={`#${headingIds.home}`}>¡Nos casamos!</Link>
							</li>
							<li>
								<Link href={`#${headingIds.celebration}`}>
									Ceremonia y celebración
								</Link>
							</li>
							<li>
								<Link href={`#${headingIds.location}`}>Cómo llegar</Link>
							</li>
							<li>
								<Link href={`#${headingIds.info}`}>Otra información</Link>
							</li>
						</ul>
					</Drawer.Body>

					<Drawer.Footer>
						<Drawer.CloseTrigger asChild>
							<TriggerButton action="close" />
						</Drawer.CloseTrigger>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer.Positioner>
		</Drawer.Root>
	)
}

export { HomeDrawer, headingIds }
