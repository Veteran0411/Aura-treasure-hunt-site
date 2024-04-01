console.log("js file")
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    const isCtrlOrMeta = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const isAlt = e.altKey;
    const isCapsLock = e.getModifierState('CapsLock');

    if (
        (isCtrlOrMeta && isShift && e.key === 'I') ||
        (isCtrlOrMeta && isShift && e.key === 'C') ||
        (isCtrlOrMeta && isAlt && e.key === 'C') ||
        (isCtrlOrMeta && isAlt && e.key === 'I') ||
        (isCtrlOrMeta && isShift && e.key === 'I' && isCapsLock) ||
        (isCtrlOrMeta && isShift && e.key === 'C' && isCapsLock) ||
        (isCtrlOrMeta && isAlt && e.key === 'C' && isCapsLock) ||
        (isCtrlOrMeta && isAlt && e.key === 'I' && isCapsLock)
    ) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function (e) {
    if ((e.key === 'F12')) {
        e.preventDefault();
    }
});
document.addEventListener('keydown', function (e) {
    if ((e.key === 'CapsLock')) {
        e.preventDefault();
    }
});