var SortingExample = SortingExample || {};

SortingExample.UI = {
    BuildPersonTable: function(people)
    {
        var table = $("<table><thead><tr><th>First Name</th><th>Last Name</th><th>Occupation</th><th>Notes</th><th>Notes Edit</th></tr></thead></table>");
        var tableBody = $("<tbody></tbody>");
        var count = people.length;
        for(var x = 0; x < count; x++)
        {
            $(tableBody).append(people[x].HtmlString());
        }
        $(table).append(tableBody);
        return table;
    },

    SortAndDisplayTable: function()
    {
        SortingExample.Data.SortPeople();
        $("body").find("table").remove();
        $("body").append(SortingExample.UI.BuildPersonTable(SortingExample.Data.People));
        $(".person-notes-input").change(function () {
            var id = $(this).parents().filter("tr").data("id");
            SortingExample.Data.EditNotesForPerson(id, $(this).val());
        });
        $(".person-first-name-input").change(function () {
            var id = $(this).parents().filter("tr").data("id");
            SortingExample.Data.EditFirstNameForPerson(id, $(this).val());
        })
        $("input").change(SortingExample.UI.SortAndDisplayTable);
    }
}