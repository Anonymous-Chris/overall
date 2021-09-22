import $ from "jquery";

export default function AutoScroll(value, datalength) {
  try {
    if (datalength !== null && datalength !== undefined) {
      var $el = $("." + value);
      var duration = datalength * 1000;
      anim();
      $el.hover(stop, anim);
    } else {
      console.log("The data is null or undefined");
    }
  } catch (e) {
    console.log("Error in autoscroll");
  }
  function anim() {
    var st = $el.scrollTop();
    var sb = $el.prop("scrollHeight") - $el.innerHeight();
    $el.stop();
    $el.animate({ scrollTop: st < sb / 2 ? sb : 0 }, duration, "linear", anim);
  }
  function stop() {
    $el.stop();
  }
}
