const initialstate = {
    taskList: [],
    title: '',
    hasTitle: false,
    listsOfLists: [],
    count: 1,
    impTaskList: []
}


const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'DELETE_TASK':
            {
                const newtaskList = state.taskList.filter(task => task.taskName !== action.completedTask)
                return {
                    ...state,
                    taskList: newtaskList
                }
            }
        case 'CHECK_HANDLE':
            {
                const updatedTaskList = state.taskList.map(task => {
                    if (task.taskName === action.chkdtsk) {
                        task.isDone = !task.isDone
                    }
                    return task
                })

                return {
                    ...state,
                    taskList: updatedTaskList
                }
            }

        case 'UPDATE_LIST':
            {
                const updatedTaskList = state.taskList.concat({
                    taskName: action.taskName,
                    isDone: false,
                    isImp: false
                })
                return {
                    ...state,
                    taskList: updatedTaskList
                }
            }

        case 'UPDATE_TITLE':
            {
                return {
                    ...state,
                    title: action.title,
                    hasTitle: true
                }
            }
        case 'IMP_TASK':
            {
                const updatedTaskList = state.taskList.map(task => {
                    if (task.taskName === action.impTask) {
                        task.isImp = !task.isImp
                    }
                    return task
                })

                return {
                    ...state,
                    taskList: updatedTaskList
                }
            }
        case 'UPDATE LIST OF LISTS': {
            let titleTemp = state.title
            if (titleTemp === '') {
                titleTemp = `UntitledList${state.count}`;
                state.count = state.count + 1
            }
            const updatedList = state.listsOfLists.concat({
                //check if its not previously added
                listTitle: titleTemp,
                taskDetails: state.taskList,

            })
            return {
                ...state,
                listsOfLists: updatedList
            }
        }
        case 'RESET': {
            return {
                ...state,
                taskList: [],
                title: '',
                hasTitle: false,

            }
        }
        case 'UPDATE IMP TASK LIST' : {
            
            return{
                ...state,
                impTaskList : [...state.impTaskList, ...action.imptsklist]
            }
        }
        default: return state;
    }


};

export default reducer;