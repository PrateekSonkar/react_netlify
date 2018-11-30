//ADD_NEW_BIN
export const addNewBin = ({binname='',binsize=''} = {}) =>({
    type : 'ADD_NEW_BIN',
    inventory : {
        binname,
        binsize
    }
})