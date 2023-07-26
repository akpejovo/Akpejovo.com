// Define the groups and items. Groups are only shown in group mode.
const entries = [
    {
        group: "Social media",
        items: [
            { name: "CHECK CATALOG!", url: "https://www.paystack.com/commerce", icon: "fa fa-mobile fa-beat" },
            { name: "Email Us", url: "mailto:support@akpejovo.com", icon: "fa fa-envelope" },
            { name: "ON ROUTE!", url: "https://www.dhl.com/ng-en/home/tracking.html", icon: "fa fa-truck" },
            { name: "REVIEWS", url: "https://www.trustpilot.com/review/akpejovo.com", icon: "fa fa-star" },
        ]
    }, {
        group: "Utilities",
        items: [
            { name: "Instagram", url: "hhttps://www.instagram.com/akpejovos_magic", icon: "fab fa-instagram" },
            { name: "TikTok", url: "https://www.tiktok.com/@akpejovosmagic", icon: "fab fa-tiktok" },
            { name: "ORDER NOW!", url: "https://www.paystack.com/commerce", icon: "fa fa-handshake" },
            { name: "Whatsapp", url: "https://wa.me/2348028177365", icon: "fab fa-whatsapp" },
            { name: "DELIVERED!", url: "https://www.paystack.com/commerce", icon: "fa fa-check" },
        ]
    },
];

// Switch between group mode (true) and icon only mode (false)
const groupMode = false;

// Text above the search box
const welcomeText = "Scroll Down!";


//#############################################################################
//# Do not change anything below this line
//#############################################################################

createIconList = () => {
    let iconList = $("#iconList");
    let iconListEntry = $("#iconListEntry");

    for (const groupEntry of entries) {
        for (const item of groupEntry.items) {
            const ileClone = iconListEntry.clone();
            const idName = (groupEntry.group + item.name).replace(/[^A-Za-z0-9]/g, 'x');
            ileClone.find(".iconLink").each(function () { (this).href = item.url });
            ileClone.find(".iconIcon").addClass(item.icon);
            ileClone.find(".iconLink")[1].innerText = item.name;
            ileClone.click(function () { window.location.href = item.url; });
            ileClone.prop("id", "iconListEntry" + idName).appendTo(iconList);
        }
    }

    // Orginal entry is only for cloning. Remove it.
    iconListEntry.remove();
}

createGroupList = () => {
    let groupList = $("#groupList");
    let groupListEntry = $("#groupListEntry");

    for (const groupEntry of entries) {
        const gleClone = groupListEntry.clone();
        const idName = groupEntry.group.replace(/[^A-Za-z0-9]/g, 'x');
        gleClone.find(".groupTitle")[0].innerText = groupEntry.group;

        const groupListList = gleClone.find(".groupListList");
        const groupListListItem = groupListList.find(".groupListListItem");
        for (const item of groupEntry.items) {
            const newListItem = groupListListItem.clone().appendTo(groupListList);
            newListItem.find(".groupLink").each(function () { (this).href = item.url });
            newListItem.find(".groupIcon").addClass(item.icon);
            newListItem.find(".groupText")[0].innerText = item.name;
        }
        // Orginal entry is only for cloning. Remove it.
        groupListListItem.remove();

        gleClone.prop("id", "groupListEntry" + idName).appendTo(groupList);
    }

    // Orginal entry is only for cloning. Remove it.
    groupListEntry.remove();
}

$(function () {
    if (groupMode) {
        createGroupList();
        $("#iconList").remove();
    } else {
        createIconList();
        $("#groupList").remove();
    }

    $(".welcomeText")[0].innerText = welcomeText;
});
