import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudentAction, updateStudentAction } from '../../../redux/action/sinhVienAction';

class addStudentForm extends Component {

    state = {
        values: {
            studentId: "",
            phone: "",
            name: "",
            email: "",
        },
        errors: {
            studentId: "",
            phone: "",
            name: "",
            email: "",
        },
    }

    // when 'studentWasChosen' props changed 'componentDidUpdate'
    componentDidUpdate(prevProps) {
        if (prevProps.studentWasChosen.studentId !== this.props.studentWasChosen.studentId) {
            this.setState({
                values: this.props.studentWasChosen,
            });
        }
    }

    handleOnChange = evt => {
        const { name, value } = evt.target;
        // first way
        // this.setState((state) => {
        //     return {
        //         values: {
        //             ...state.values,
        //             [name]: value,
        //         },
        //     };
        // });
        // second way
        const values = { ...this.state.values };
        this.setState({
            values: {
                ...values,
                [name]: value,
            }
        }, () => console.log('moi -> ', this.state))
        console.log('cu -> ', this.state)
    }


    handleBlur = evt => {
        const { name, value } = evt.target;
        const error = this.validation(name, value);
        const state = this.state;
        this.setState({
            errors: {
                ...state.error,
                [name]: error,
            }
        })
    }

    validation = (name, value) => {
        if (name === "studentId") {
            return value ? "" : "Student ID does not allowed to be empty";
        }
        if (name === "phone") {
            return value ? "" : "Phone does not allowed to be empty";
        }
        if (name === "name") {
            return value ? "" : "Name does not allowed to be empty";
        }
        if (name === "email") {
            if (!value) {
                return "Email does not allowed to be empty"
            }
            if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
                return "Format does not allowed";
            }
        }
        return "";
    }

    handleSubmit = (studentWasChosen) => {
        let hasError = false;
        for (let key in this.state.values) {
            const error = this.validation(key, this.state.values[key]);
            if (error) {
                this.setState((state) => {
                    return {
                        errors: {
                            ...state.errors,
                            [key]: error,
                        }
                    }
                });
                hasError = true;
            }
        }
        if (hasError) return;

        if (studentWasChosen.isUpdate) {
            this.props.updateStudentAction(this.state.values);
        } else {
            this.props.addStudentAction(this.state.values);
        }
    }

    render() {
        let { studentWasChosen } = this.props;
        console.log(studentWasChosen);
        return (
            <div className="container">
                <div className="row mt-3 text-left">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor >Student ID</label>
                            <input
                                className="form-control"
                                type="text"
                                value={this.state.values.studentId}
                                name="studentId"
                                // onChange={(evt) => this.setState(
                                //     { studentId: evt.target.value }
                                // )}
                                // onChange={evt => this.handleOnChange(evt)}
                                onChange={this.handleOnChange}
                                onBlur={this.handleBlur}
                                disabled={studentWasChosen.isUpdate ? true : false}
                            />
                            {this.state.errors.studentId && (
                                <div className="alert alert-danger">
                                    <span>{this.state.errors.studentId}</span>
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor >Phone</label>
                            <input
                                className="form-control"
                                type="tel"
                                value={this.state.values.phone}
                                name="phone"
                                onChange={this.handleOnChange}
                                onBlur={this.handleBlur}
                            />
                            {this.state.errors.phone && (
                                <div className="alert alert-danger">
                                    <span>{this.state.errors.phone}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor >Name</label>
                            <input
                                className="form-control"
                                type="text"
                                value={this.state.values.name}
                                name="name"
                                onChange={this.handleOnChange}
                                onBlur={this.handleBlur}
                            />
                            {this.state.errors.name && (
                                <div className="alert alert-danger">
                                    <span>{this.state.errors.name}</span>
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor >Email</label>
                            <input
                                className="form-control"
                                type="email"
                                value={this.state.values.email}
                                name="email"
                                onChange={this.handleOnChange}
                                onBlur={this.handleBlur}
                            />
                            {this.state.errors.email && (
                                <div className="alert alert-danger">
                                    <span>{this.state.errors.email}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={() => this.handleSubmit(studentWasChosen)}
                    >
                        {studentWasChosen.isUpdate ? "Update" : "Submit"}
                    </button>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        studentWasChosen: state.sinhVienReducer.studentWasChosen,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addStudentAction: (student) => dispatch(addStudentAction(student)),
        updateStudentAction: (student) => dispatch(updateStudentAction(student)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addStudentForm);