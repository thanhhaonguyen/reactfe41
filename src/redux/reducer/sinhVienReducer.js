import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, CHOOSE_STUDENT } from "../../constants/sinhVienConstants";

const studentArr = localStorage.getItem("studentInfo");

const initialState = {
    studentArr: studentArr ? JSON.parse(studentArr) : [],
    studentWasChosen: {},
};

const sinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT: {
            const studentArr = [...state.studentArr, action.student];
            localStorage.setItem("studentInfo", JSON.stringify(studentArr));
            return {
                ...state,
                studentArr: [...state.studentArr, action.student]
            };
        }
        case UPDATE_STUDENT: {
            const studentArrNew = state.studentArr.map(st => {
                if (st.studentId === action.student.studentId) {
                    return action.student;
                }
                return st;
            });
            localStorage.setItem("studentInfo", JSON.stringify(studentArrNew));
            return { ...state, studentArr: studentArrNew };
        }
        case DELETE_STUDENT: {
            const studentArrNew = state.studentArr.filter(st => {
                if (st.studentId === action.studentId) {
                    return false;
                }
                return true;
            });
            localStorage.setItem("studentInfo", JSON.stringify(studentArrNew));
            return { ...state, studentArr: studentArrNew };
        }
        case CHOOSE_STUDENT: {
            state.studentWasChosen.isUpdate = true;
            const studentWasChosenNew = {...state.studentWasChosen, ...action.student};
            return { ...state, studentWasChosen: studentWasChosenNew };
        }
        default:
            return state
    }
}

export default sinhVienReducer;