function delLast (str, target) {
    if (typeof str !== "string") {
        alert("请确认要删除的对象为字符串！");
        return false;
    } else {
        const idx = str.lastIndexOf(target);
        return str.substr(0,idx) + str.substr(idx+1);
    }
}

function delLast (str, target) {
    let reg = new RegExp(`${target}(?=([^${target}]*)$)`);
    return str.replace(reg, '')
}