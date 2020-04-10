console.log('This is Drag and Drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listner to draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    // console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    // console.log('DragEnd has been triggered');
    e.preventDefault();
    e.target.className = 'imgBox';
});

for (whiteBoxe of whiteBoxes) {
    whiteBoxe.addEventListener('dragover', (e) => {
        e.preventDefault();
        // console.log('DragOver has been triggered');

    })

    whiteBoxe.addEventListener('dragenter', (e) => {
        // console.log('DragEnter has been triggered');
        e.target.className += ' dashed';
    })

    whiteBoxe.addEventListener('dragleave', (e) => {
        // console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox';

    })

    whiteBoxe.addEventListener('drop', (e) => {
        // console.log('drop has been triggered');
        e.target.append(imgBox);
        e.target.className = 'whiteBox';

    })

}