// import { createActions, handleActions } from "redux-action";
import { createActions, handleActions } from "redux-actions";

// 초기 state 값
const initialState = {};

// action type
const GET_FORMLIST = 'form/GET_FORMLIST';
const GET_FORM = 'form/GET_FORM';
const REGIST_FORM = 'form/REGIST_FORM';

// form 관련 action 함수
export const { form : { getFormlist, getform, registForm } } = createActions({
    [GET_FORMLIST]: (res) => ({ formlist : res }),
    [GET_FORM]: (res) => ({ form : res }),
    [REGIST_FORM]: (res) => ({ regist : res }),
});

// reducer 함수
const formReducer = handleActions(
    {
        [GET_FORMLIST]: (state, { payload }) => {
            return payload;
        },
        [GET_FORM]: (state, { payload }) => {
            return payload;
        },
        [REGIST_FORM]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default formReducer;