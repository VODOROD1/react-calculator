
export const firstNullDeleteValidate = (scoreboardValue, inputValue) => {
    if(scoreboardValue.length === 1 && scoreboardValue === '0' && inputValue !== '.') {
        return true
    } else {
        return false
    }
}


export const convertStrToNumber = () => {
    
}