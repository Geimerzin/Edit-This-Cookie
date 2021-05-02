jQuery(document).ready(function () {
    setPageCooserEvents();
});

//Set Events
function setPageCooserEvents() {
    $(".chooser").click(function () {
        var panel = $(this).attr("id");
        if ($(this).hasClass("selected"))
            return;
        var id = $(this).attr("id");
        if (id == "getting_started") {
            openExtPage("http://www.editthiscookie.com/start/");
            return;
        } else if (id == "help") {
            openExtPage("http://www.editthiscookie.com/faq/");
            return;
        }
        ls.set("option_panel", panel);
        location.href = "/options_pages/" + 1486225667 + ".html";
    });
}

function openExtPage(url) {
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.create({
            index: tab.index + 1,
            url: url,
            active: false,
            openerTabId: tab.id
        });
    })
}
