$(function() {
    var EDIT_CLASS_NAME = 'edit',

        $edit = $('.tool-item[data-action="edit"]'),
        $back = $('.tool-item[data-action="back"]'),
        $main = $('main');



    function switchToEditMode() {
        $edit.hide();
        $back.show();
    }

    function switchToNormalMode() {
        $edit.show();
        $back.hide();
    }

    function onClickEdit(event) {
        $main.addClass(EDIT_CLASS_NAME);
        switchToEditMode();
    }

    function onClickBack(event) {
        $main.removeClass(EDIT_CLASS_NAME);
        switchToNormalMode()
    }

    $edit.on('click', onClickEdit);
    $back.on('click', onClickBack);



    switchToNormalMode();
});