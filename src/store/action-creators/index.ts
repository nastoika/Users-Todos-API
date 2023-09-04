import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';


export default {
    ...TodoActionCreators,
    ...UserActionCreators,
}

//all action in this file