export function quickSortChatItems(List) {
    if (List.length <= 1) {
        return List;
    }
 
    const pivot = List[List.length-1].last_message.time;
    const leftList = [];
    const rightList = [];
 
    for (let i = 0; i < List.length-1; i++) {
        //if (new Date(List[i].sortProperty) < pivot) {
        if (List[i].sortProperty < pivot) {    
            leftList.push(List[i]);
        }
        else {
            rightList.push(List[i])
        }
    }
    return [...quickSortChatItems(leftList), pivot, ...quickSortChatItems(rightList)];
 }