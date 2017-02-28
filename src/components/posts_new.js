import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { Link, browserHistory } from "react-router";

class PostsNew extends Component {
	
	onSubmit(props) {
		this.props.createPost(props).then(() => {
			// blog post has been created, navigate user to the index
			// we navigate by calling this.context.router.push with the new path to navigate to.
			browserHistory.push("/");
		});
	}

	render() {

		const { fields: { title, categories, content }, handleSubmit } = this.props;
	// const title = this.props.fields.title

		return (
			<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
				<h3>Create a New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? "has-danger" : ""}`}>
					<label >Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{ title.touched ? title.error : "" }
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ""}`}>
					<label >Categories</label>
					<input type="text" className="form-control" {...categories} />
						<div className="text-help">
						{ categories.touched ? categories.error : "" }
					</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? "has-danger" : ""}`}>
					<label >Content</label>
					<textarea type="text" className="form-control" {...content} />
						<div className="text-help">
						{ content.touched ? content.error : "" }
					</div>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}


function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = "Enter a username";
	}
	if(!values.categories) {
		errors.categories = "Enter a category";
	}
	if(!values.content) {
		errors.content = "Enter some content";
	}

	return errors;
}
// connet: first argument is mapStateToProps , 2nd is mapDispatchToProps
//reduxForm: 1st is form cofig 2nd is mapStateToProps, 3rd is mapDispatchtoProps

export default reduxForm({
	form: "PostsNewForm",
	fields: [ "title","categories","content"],
	validate
}, null, { createPost })(PostsNew);


// user types in....record it on application state
// state === {
// 	form: {
// 		PostsNewForm: {
// 			title: "....",
// 			categories: "....",
// 			content: "...."
// 		}
// 	}
// };