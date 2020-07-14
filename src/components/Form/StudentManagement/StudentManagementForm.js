import React, { Component } from 'react'
import AddStudentForm from './AddStudentForm'
import StudentTable from './StudentTable'

export default class StudentManagementForm extends Component {
    render() {
        return (
            <div className="container">
                <AddStudentForm />
                <StudentTable />
            </div>
        )
    }
}
