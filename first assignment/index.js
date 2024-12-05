import  {computePosition} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12/+esm';
const container = document.querySelector('.middle-cont');
const rightNote = document.querySelector('.right-note')
const topNote = document.querySelector('.top-note')
const bottomNote = document.querySelector('.bottom-note')

computePosition(container, rightNote, {
    placement: 'right', 
}).then(({ x, y }) => {
    Object.assign(rightNote.style, {
        left: `${985}px`,
        top: `${0}px`,
    });
});

computePosition(container,topNote, {
    placement: 'top',
}).then(({x, y})  => {
    Object.assign(bottomNote.style, {
        left: `${0}px`,
        top: `${-10}px`,
    });
}
);

computePosition(container,bottomNote, {
    placement: 'bottom',
}).then(({x, y})  => {
    Object.assign(bottomNote.style, {
        left: `${0}px`,
        top: `${200}px`,
    });
}
);