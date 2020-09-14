//let unique id be the largest value in the task list (local storage)
export const getUniqueId = (tasks) => {
    let maxId = 0;
    tasks.forEach( t => {

        if (t.id > maxId) {
            maxId = t.id
        }
        
    });

    return maxId + 1
}