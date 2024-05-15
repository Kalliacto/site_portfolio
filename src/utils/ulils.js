export const toggleClass = (children) => {
    let childIndex = 0;

    return setInterval(() => {
        if (children.length > childIndex) {
            let current = children[childIndex];
            current.classList.add('animation__skill');

            let timeoutID = setTimeout(() => {
                current.classList.remove('animation__skill');
                clearTimeout(timeoutID);
            }, 3000);
            childIndex++;
        } else {
            childIndex = 0;
        }
    }, 3200);
};
