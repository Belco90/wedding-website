import { FC } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiXMark, HiArrowUp } from 'react-icons/hi2'

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
		color="gray.11"
		aria-label={action === 'open' ? 'Abrir menú' : 'Cerrar menú'}
		size="xs"
		{...remainingProps}
	>
		{action === 'open' ? <GiHamburgerMenu /> : <HiXMark />}
	</IconButton>
)

const headingIds = {
	home: 'inicio',
	celebration: 'celebracion',
	location: 'ubicacion',
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
								px: '4',
								justifyContent: 'center',
								fontWeight: 'bold',
								'& a': {
									textDecoration: 'none',
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
