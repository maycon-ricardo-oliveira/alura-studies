import React from "react";
import style from './Button.module.scss';


class Button extends React.Component<{ title: string }> {
	render() {
		return (
			<button className={style.button}>
				{this.props.title}
			</button>
		)
	}
}

export default Button;