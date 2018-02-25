function makeArrayConsecutive2(statues) {
    return ((Math.max(...statues)+1) - Math.min(...statues)) - statues.length;
}
