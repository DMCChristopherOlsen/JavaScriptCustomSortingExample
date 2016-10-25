var SortingExample = SortingExample || {};

SortingExample.Data = {
    People: [],
    Initialize: function()
    {
        this.People.push(new SortingExample.Classes.Person(1, "James", "Madison", "President"));
        this.People.push(new SortingExample.Classes.Person(2, "George", "Washington", "President"));
        this.People.push(new SortingExample.Classes.Person(3, "James", "Bond", "Super Spy"));
        this.People.push(new SortingExample.Classes.Person(4, "Alec", "Baldwin", "Actor"));
        this.People.push(new SortingExample.Classes.Person(5, "James", "Caan", "Actor"));
        this.People.push(new SortingExample.Classes.Person(6, "James", "Franco", "Actor"));
        this.People.push(new SortingExample.Classes.Person(7, "James", "Stewart", "Deceased Actor"));
        this.People.push(new SortingExample.Classes.Person(8, "James", "Brown", "Actor"));
        this.People.push(new SortingExample.Classes.Person(9, "James", "Harden", "Basketball Player"));
        this.People.push(new SortingExample.Classes.Person(10, "James", "Taylor", "Singer"));
        this.People.push(new SortingExample.Classes.Person(11, "James", "Buchanan", "President"));
    },
    SortPeople: function()
    {
        this.People = SortingExample.Utility.Sorter.sort(this.People, function (a, b) {
            if (a.FirstName > b.FirstName)
                return 1;
            else if (a.FirstName < b.FirstName)
                return -1;
            else return 0;
        });
        //this.People.sort(function (a, b) {
        //    if (a.FirstName > b.FirstName)
        //        return 1;
        //    else if (a.FirstName < b.FirstName)
        //        return -1;
        //    else return 0;
        //});
    },
    EditNotesForPerson: function(id, newNotes)
    {
        var count = this.People.length;
        for(var x = 0; x < count; x++)
        {
            if (this.People[x].ID == id)
                this.People[x].Notes = newNotes;
        }
    },
    EditFirstNameForPerson: function(id, newName)
    {
        var count = this.People.length;
        for(var x = 0; x < count; x++)
        {
            if (this.People[x].ID == id)
                this.People[x].FirstName = newName;
        }
    }
};