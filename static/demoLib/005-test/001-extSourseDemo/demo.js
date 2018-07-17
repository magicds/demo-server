var testFn = function (e) {
    console.log(e);
};
var testCalendar = epctrl.init('Calendar', {
    el: '#date',
    // date: '2017-9',
    events: {
        beforeSourceLoad: function (e) {
            console.log(e);
            e.cssUrl.push('./test.css');
        },
        afterLoadSource: testFn
    }
});

var ts = {};
// 日期部分渲染前
testCalendar.on('beforeDateRender', function (e) {
    var startDate = e.startDate,
        endDate = e.endDate;
    ts.startDate = startDate;
    ts.endDate = endDate;
    // 如果需要动态获取数据
    // 则将获取数据的ajax加到事件对象的ajax属性上即可
    // 日期渲染的cellRender事件将在ajax成功获取数据后执行
    e.ajax = $.ajax({
        // url: 'getDateInfo.xxx',
        url: '',
        data: {
            start: startDate,
            end: endDate
        }
    });
});

// testCalendar.on('beforeCellRender', testFn);
// testCalendar.on('cellRender',testFn);
// testCalendar.on('dateClick',testFn);

testCalendar.on('cellRender', function (e) {
    console.log(JSON.stringify(ts, 0, 4));

    // console.log(e);
    if (!e.isHeader) {
        // e.extraHtml = '<div style="background:#f2f2f2;">xx</div>';
    }
});
testCalendar.on('dayClick', function (e) {
    console.log(e);
});
testCalendar.on('dayHeaderClick', function (e) {
    console.log(e);
});