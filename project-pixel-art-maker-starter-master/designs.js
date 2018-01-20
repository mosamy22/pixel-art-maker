// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = $("#pixel_canvas"); // for table

function makeGrid(height, width) {
    var height = $("#input_height").val(); //for rows
    var width = $("#input_width").val(); // for columns

    table.html('');

    for (var h = 0; h < height; h++) {
        $("#pixel_canvas").append("<tr></tr>");
    } // create the rows


    $("tr").each(function() {
        for (var w = 0; w < width; w++) {
            $(this).append("<td></td>");
        }
    }); //create the columns
};

$('#clear').on('click',function()
{
  $("#pixel_canvas").html(''); // reset table
  $("#input_height").val(0);
  $("#input_width").val(0);
});

$('#reset').on('click',function()
{
  $("#pixel_canvas").html('');
});


$(document).ready(function() {
    $('#sizePicker').on('submit', function(buildGrid) {
        makeGrid();
        buildGrid.preventDefault();
    });
}); //initialize the grid - calling the function
// pick the color

table.on("click", "td",function(){
  var color=$("#colorPicker").val();
$(this).css("background-color",color);
});
table.on("dblclick", "td", function(){
$(this).css("background-color","#FFFFFF")
});
/*


// call makeGrid()
const color_default = '#1a53ff';
function setDefaultValues() {
   $('#colorPicker').val(color_default);
}

function makeGrid() {

  // Declare variables
var color = $("#colorPicker").val();
 //store height and width values
var height = $("#input_height").val();
var width = $("#input_width").val();
var submitButton=$(".submit");
var table= $("#pixel_canvas");
// Remove Grid
table.html('');
//Create rows
 for (let i=0; i<height; i++){
   table.append("<tr></tr>");
 //Create columns
 for (let j=0; j<width; j++){
  table.children().last().append("<td></td>");
  }

}

setDefaultValues();
table.on("click", "td",function(){
  var color=$("#colorPicker").val();
$(this).css("background-color",color);
});

table.on("dblclick", "td", function(){
$(this).css("background-color","#FFFFFF")
});
}

$(".submit").click (function(event){
  makeGrid();
 event.preventDefault();
});
*/
