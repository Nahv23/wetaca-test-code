export const loadState = () => {
    try {
        const serializedData = localStorage.getItem('redux-state')
        if (serializedData === null) {
            return undefined
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.log(error);
        return undefined 
    }
}

export const saveState = (state) => {
    try {
        let serializedData = JSON.stringify(state)
        localStorage.setItem('redux-state', serializedData)
    } catch (error) {
        console.log(error);
    }
}