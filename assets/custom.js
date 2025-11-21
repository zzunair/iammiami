<!-- ============================================================================= -->
<!-- Ella Custom JS - Customize The Style For Layout -->
<!-- ============================================================================= -->

<!-- ============================================================================= -->
<!-- IMPORTANT DISCLAIMER -->
<!-- Please use only JS to style the layout. -->
<!-- ============================================================================= -->
   /*
const brandcolors = Array(
Array("#E5C049","#3d4243","#f0f0f1"),
Array("#EBB0B8","#f0f0f1","#7e868a"),
Array("#f0f0f1","#3F425D","#ca4286"),
Array("#ca4286","#3d4243","#00aec5"),
Array("#3d4243","#00aec5","#f0f0f1"),
Array("#c8ccca","#ea6f46","#f0f0f1"),
Array("#00aec5","#ca4286","#f0f0f1"),
Array("#3F425D","#ca4286","#f0f0f1")); */
const brandcolors = Array(
Array("#dfdad2","#1c1d1b","#3293c9"),
Array("#dfdad2","#1c1d1b","#ef9dba"),
Array("#dfdad2","#1c1d1b","#de5a1b"),
Array("#dfdad2","#1c1d1b","#e5bf23"),
Array("#dfdad2","#1c1d1b","#2f9e3d"));

var bodyStyles = document.body.style;
var colorSet = 100
setTimeout(function () {
  changeColor();
  }, 50);
function changeColor() {
var prevPrevPrevPrevColorSet = prevPrevPrevColorSet;
var prevPrevPrevColorSet = prevPrevColorSet;
var prevPrevColorSet = prevColorSet;
var prevColorSet = colorSet;
colorSet = (Math.floor(Math.random() * 5)) ;
if (prevColorSet != colorSet && prevPrevColorSet != colorSet && prevPrevPrevColorSet != colorSet) {
bodyStyles.setProperty('--logocolor', brandcolors[colorSet][1]);
bodyStyles.setProperty('--iamcolor', brandcolors[colorSet][2]);
bodyStyles.setProperty('--backcolor', brandcolors[colorSet][0]);

setTimeout(
  function () {
  changeColor();
  }, 14500);
} else {
  colorSet =  prevColorSet;
  prevColorSet = prevPrevColorSet  ;
  prevPrevColorSet =  prevPrevPrevColorSet ;
  prevPrevPrevColorSet =  prevPrevPrevPrevColorSet ;
  changeColor();
}
}
 