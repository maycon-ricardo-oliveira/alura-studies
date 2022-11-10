import React from "react";
import style from './Button.module.scss';


class Button extends React.Component<{
	title: string 
	type?: "button" | "submit" | "reset" | undefined
}> {
	render() {
		const {type = 'button', title } = this.props;
		return (
			<button className={style.button} type={type}>
				{this.props.title}
			</button>
		)
	}
}

export default Button;