var SortingExample = SortingExample || {};

SortingExample.Classes = {
    Person: function (id, firstName, lastName, occupation) {
        this.ID = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Occupation = occupation;
        this.Notes = "";

        this.NotesInput = $("<input class='person-notes-input'>");
        this.HtmlString = function()
        {
            var htmlString = $("<tr data-id='" + this.ID + "'><td>" + this.FirstName + "<input class='person-first-name-input'/></td><td>" + this.LastName + "</td><td>" + this.Occupation + "</td><td>" + this.Notes + "</td></tr>");
            var notesInputCell = $("<td></td>");
            
            $(notesInputCell).append(this.NotesInput);
            $(htmlString).append(notesInputCell);
            return htmlString;
        }
    }
}