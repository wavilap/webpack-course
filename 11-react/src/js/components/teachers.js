import React, { Component } from 'react';
import { render } from 'react-dom';
import Teacher from './teacher.js';

class Teachers extends Component {
	render() {
		return (
			<ul className="Teachers">
			 {this.props.data.teachers.map((teacherData) => {
			 		return <Teacher {...teacherData}/>
			 })
			 }
			</ul>
		)
	}
}

export default Teachers;