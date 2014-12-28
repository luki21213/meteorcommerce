//Template.brandTree.helpers({
//    UL: function () {
//        var UL = HTML.UL, LI = HTML.LI, B = HTML.B;
//
//        return HTML.toHTML(
//            UL({id: 'mylist'},
//                LI({'class': 'item'}, "Hello ", B("world"), "!"),
//                LI({'class': 'item'}, "Goodbye, world")));
//
//        //return UL;
//    }
//});
//
Template.brandTree.rendered = function(){
    $('#brandTree').jstree();
}
