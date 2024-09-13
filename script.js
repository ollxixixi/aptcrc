function showModule(module) {
    // 隐藏所有模块
    document.getElementById('wind').style.display = 'none';
    document.getElementById('simulation').style.display = 'none';

    // 显示选中的模块
    document.getElementById(module).style.display = 'block';

    // 如果是“风场情况”模块，默认显示 windField
    if (module === 'wind') {
        document.getElementById('windField').style.display = 'block';
        document.getElementById('windSpeed').style.display = 'none';
    }
}

function showField(field) {
    // 隐藏所有风场相关的内容 windField windSpeed
    document.getElementById('windField').style.display = 'none';
    document.getElementById('windSpeed').style.display = 'none';

    // 显示选中的内容
    document.getElementById(field).style.display = 'block';
}
