$(document).ready(
    function()
    {
        SortingExample.Data.Initialize();
        SortingExample.UI.SortAndDisplayTable();
        $("button").click(SortingExample.UI.SortAndDisplayTable);
        
    }
);

