// @flow
import {INSERT_FILE,DELETE_FILE} from '../actions/joint';
import type {Action} from './types';

export default function joint(state: {},action: Action){
    switch(action.type){
        case INSERT_FILE:
        return state;
        case DELETE_FILE:
        return state;
        default:
        return state;
    }
}
