import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseStudentAction, delStudentAction } from '../../../redux/action/sinhVienAction';

class studentTable extends Component {
    render() {
        let { studentArr, delStudentAction, chooseStudentAction } = this.props;
        return (
            <table className="table mt-5 text-left">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentArr.map((st, index) => (
                        <tr key={index}>
                            <td>{st.studentId}</td>
                            <td>{st.name}</td>
                            <td>{st.phone}</td>
                            <td>{st.email}</td>
                            <td>
                                <button
                                    className="btn btn-primary mr-2"
                                    onClick={() => chooseStudentAction(st)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => delStudentAction(st.studentId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        studentArr: state.sinhVienReducer.studentArr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        chooseStudentAction: (student) => dispatch(chooseStudentAction(student)),
        delStudentAction: (studentId) => dispatch(delStudentAction(studentId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(studentTable);
