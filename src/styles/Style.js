import { Fragment } from 'react';
import Global from './Global'
const Style = (css, css1) => {
	return () => (
		<style global jsx>{`
			${Global}
			${css}
			${css1}
		`}</style>
	)
}

export default Style