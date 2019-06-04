// Author:  bskyrui@msn.cn 
// Created: 2019-05-23

'use strict';

var page = {
    init: function() {
        this.bindEvent();
    },

    bindEvent: function() {
        var _this = this;
        // tab
        $('.main-content .tab-item').on('click', function() {
            $('.main-content .tab-item').removeClass('active');
            $(this).addClass('active');
            $('.main-content .content > div').removeClass('active');
            $('.main-content .content > div').eq($(this).index()).addClass('active');
        });

        // show modal
        $('.main-content .data-list-item .add').on('click', function() {
            $('.main-content .add-resource-popup').remove();
            var container = $(this).parents('.detail');
            container.append($(_this.modal()));
        });

        // add resource
        $(document).on('click', '.main-content .data-list-item .add-btn', function() {
            var r = $.trim($(this).parent().prev().val()).split(',');
            var resources = '';
            for (var i = 0; i < r.length; i++) {
                if (r[i]) {
                    resources += '<span class="r-item">' + r[i] + '<em>X</em></span>';
                }
            }
            $(this).parents('.add-resource-popup').prev().find('.resource').append($(resources));
            $(this).parents('.add-resource-popup').remove();
        });

        // remove
        $(document).on('click', '.main-content .data-list-item .resource .r-item', function() {
            $(this).remove();
        });

        // hide modal
        $(document).on('click', '.main-content .data-list-item .close', function() {
            $('.main-content .add-resource-popup').remove();
        });
    },

    modal: function() {
        return '<div class="add-resource-popup">\
                    <div class="caption-text">(separate multiple resources name with commas)</div>\
                    <input type="text" class="ipt" /> \
                    <div class="btn-group"> \
                        <button class="add-btn">Add resources</button>\
                        <button class="close">Close</button>\
                    </div>\
                </div>';
    }
};

$(function() {
    page.init();
});