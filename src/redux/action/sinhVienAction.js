import {
    ADD_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT,
    CHOOSE_STUDENT,
} from "../../constants/sinhVienConstants";

export const addStudentAction = (student) => {
    return {
        type: ADD_STUDENT,
        student,
    }
}

export const updateStudentAction = (student) => {
    return {
        type: UPDATE_STUDENT,
        student,
    }
}

export const delStudentAction = (studentId) => {
    return {
        type: DELETE_STUDENT,
        studentId,
    }
}

export const chooseStudentAction = (student) => {
    return {
        type: CHOOSE_STUDENT,
        student,
    }
}