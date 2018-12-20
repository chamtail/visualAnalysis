/**
 * Created by Jeremy on 2018/11/21.
 */

// 拖动事件
function separator() {
    var s = {};
    var workspace = $("#workspace");
    var sidebar = $("#sidebar");
    $("#sidebar-separator").draggable({
        axis: "x",
        start: function (e, t) {
            s.closing = !1;
            s.opening = !1;
            var n = $(window).width();
            s.start = t.position.left;
            s.workSpaceWidth = workspace.width();
            console.log("s.workSpaceWidth", s.workSpaceWidth);
            s.workSpaceRight = n - workspace.width() - workspace.offset().left - 2;
            console.log("s.workSpaceRight", s.workSpaceRight);
            if (s.workSpaceRight < 150) {
                s.opening = !0;
                sidebar.addClass("closing");
                workspace.css("right", 7);
                sidebar.width(0);
            }
            s.width = sidebar.width();
            console.log("s.width", s.width);
        }, drag: function (e, t) {
            var n = t.position.left - s.start, o = s.width - n;
            s.opening && (o -= 3), 150 < o && s.workSpaceWidth + n < 200 && (t.position.left = 200 + s.start - s.workSpaceWidth, n = t.position.left - s.start, o = s.width - n), o < 150 ? (s.closing || (sidebar.addClass("closing"), s.closing = !0), s.opening || (o = 150, t.position.left = s.width - (150 - s.start), n = t.position.left - s.start)) : 150 < o && (s.closing || s.opening) && (s.closing = !1, sidebar.removeClass("closing"));
            var i = s.workSpaceRight - n;
            workspace.css("right", i);
            sidebar.width(o);
        }, stop: function (e, t) {
            s.width = sidebar.width();
            console.log("sidebar", s.width);
            s.closing && (sidebar.removeClass("closing"), sidebar.width() < 180 && (sidebar.width(180), workspace.css("right", 187))), $("#sidebar-separator").css("left", "auto"), $("#sidebar-separator").css("right", sidebar.width() + 2 + "px");
        }
    });

    var headerHeight = $('#header').height();
    var separatorHeight = $('#workflow-separator').height();
    var n = workspace.height();

    var w = {};
    var workflow = $('#workflow');
    var visual = $('#visual');
    var command = $('#command');
    $("#workflow-separator").draggable({
        axis: "y",
        start: function (e, t) {
            workflow.css('display', 'block');
            w.start = t.position.top;
        }, drag: function (e, t) {
            var vTop = $("#visual-separator").offset().top - headerHeight - separatorHeight;
            if(t.position.top > vTop){
                return;
            }
            workflow.css('height', t.position.top / workspace.height() * 100 + "%");
            var h = n - t.position.top - command.height();
            visual.css('top', t.position.top / workspace.height() * 100 + "%");
            visual.css('height', h / workspace.height() * 100 + "%");
        }, stop: function (e, t) {
            var vTop = $("#visual-separator").offset().top - headerHeight - separatorHeight;
            if(t.position.top > vTop){
                $("#workflow-separator").css('top', vTop / workspace.height() * 100 + "%");
                return;
            }
            if(t.position.top < headerHeight){
                workflow.css('height', '0');
                workflow.css('display', 'none');
                $("#workflow-separator").css("top", "0");
                visual.css("top", "0");
                visual.css('height', "90%");
            }
            if (t.position.top > n * 0.99){
                $("#workflow-separator").css('top', "98%");
            }
        }
    });

    var v = {};
    $("#visual-separator").draggable({
        axis: "y",
        start: function (e, t) {
            visual.css('display', 'block');
            v.start = t.position.top;
        }, drag: function (e, t) {
            var sTop = $("#workflow-separator").offset().top - headerHeight + separatorHeight;
            if(t.position.top < sTop){
                return;
            }
            var vTop = visual.offset().top;
            var vHeight = t.position.top - vTop + headerHeight;

            visual.css('height', vHeight / workspace.height() * 100 + "%");
            var h = n - t.position.top;
            command.css('top', t.position.top / workspace.height() * 100 + "%");
            command.css('height', h / workspace.height() * 100 + "%");
        }, stop: function (e, t) {
            var sTop = $("#workflow-separator").offset().top - headerHeight + separatorHeight;
            if(t.position.top < sTop){
                $("#visual-separator").css('top', sTop / workspace.height() * 100 + "%");
                return;
            }
            if(t.position.top < headerHeight + separatorHeight){
                visual.css('height', '0');
                visual.css('display', 'none');
                $("#workflow-separator").css("top", "0");
                $("#visual-separator").css("top", "7px");
                visual.css("top", "0");
                visual.css('height', "90%");
            }
            if (t.position.top > n * 0.99){
                $("#visual-separator").css('top', "99%");
            }
        }
    })
}

// 最小化
function minScreen(workspace) {
    exitFullscreen('#'+workspace);
    $('#'+workspace+' .min').hide();
    $('#'+workspace+' .max').show();
}

// 最大化
function maxScreen(workspace) {
    requestFullScreen('#'+workspace);
    $('#'+workspace+' .max').hide();
    $('#'+workspace+' .min').show();
}

//进入全屏
function requestFullScreen(element) {
    var de = document.querySelector(element) || document.documentElement;
    if (de.requestFullScreen) {
        de.requestFullScreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    } else if (de.msRequestFullscreen) {
        de.msRequestFullscreen();
    }
}

//退出全屏
function exitFullscreen(element) {
    var de = document.querySelector(element) || document.documentElement;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.webkitExitFullscreen) {
        de.webkitExitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.msExitFullscreen) {
        de.msExitFullscreen();
    }
}

//切换全屏
function toggleFullScreen(document) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function button_op() {
    $('#new_wf').click(function () {
        var wf_order = parseInt($('#nav-tab a:last').text().slice(8)) + 1;
        var text1 = '<a class="nav-item nav-link" id="nav-wf-' + wf_order + '" data-toggle="tab" href="#nav-' + wf_order + '" role="tab" aria-controls="nav-' + wf_order + '" aria-selected="false">Workflow' + wf_order + '</a>';
        var text2 = '<div class="tab-pane fade" id="nav-' + wf_order + '" role="tabpanel" aria-labelledby="nav-wf-' + wf_order + '">' + wf_order + '</div>';
        $('#nav-tab').append(text1);
        $('#nav-tabContent').append(text2);
    });

    $('#del_wf').click(function () {
        var currentNode = $('div[id="nav-tab"]');

        if (currentNode.children().length == 1)
            return;

        var active_wf = $('#nav-tab a[aria-expanded="true"]');
        var active_order = parseInt(active_wf.text().slice(8));
        active_wf.remove();
        $('div[id="nav-' + active_order + '"]').remove();

        var node1 = currentNode.children('a:first-child');
        node1.attr('aria-expanded', 'true');
        node1.addClass('active');
        var node2 = $('#nav-tabContent div:first');
        node2.attr('aria-expanded', 'true');
        node2.addClass('active');
        node2.addClass('show');
        //currentNode.children('a:first-child').attr('aria-expanded', 'true');
    });
}

// 说明：获取鼠标位置
// 整理：http://www.codebit.cn
// 来源：http://www.webreference.com
function mousePosition(ev){
    if(ev.pageX || ev.pageY){
        return {x:ev.pageX, y:ev.pageY};
    }
    return {
        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}
document.onmousemove = mouseMove;

function mouseMove(ev){
    ev = ev || window.event;
    var mousePos = mousePosition(ev);
    // console.log("x: "+mousePos.x+"   y: " + mousePos.y);
    $('#xPos1').text(mousePos.x);
    $('#yPos1').text(mousePos.y);
}