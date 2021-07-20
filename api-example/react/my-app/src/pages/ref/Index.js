
import React from 'react'


class Ref extends React.Component {
	constructor(props) {
		super(props)
		this.myRef = React.createRef()
		this.clickDiv = this.clickDiv.bind(this)
	}

	clickDiv() {
		console.log('ref', this.myRef)
	}

	render() {
    return (
			<div ref={this.myRef} onClick={ this.clickDiv }>
				click me
			</div>
		)
  }
}

export default Ref