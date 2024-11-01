import { FC } from 'react'

import { css } from 'styled-system/css'

const LocationMap: FC = () => {
	return (
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.2430419196426!2d-4.424098422950671!3d36.76473656969588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7765bd1b33f%3A0x7e35f7a85bdef73d!2sJardines%20de%20San%20Telmo%20%7C%20Espacio%20para%20Eventos%20y%20celebraciones%20en%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1730499089300!5m2!1ses!2ses"
			className={css({
				border: 0,
				width: 'full',
				height: { base: 300, lg: 450 },
			})}
			allowFullScreen
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		/>
	)
}

export { LocationMap }
