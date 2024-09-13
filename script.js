function showModule(module) {
    // 隐藏所有模块
    document.getElementById('wind').style.display = 'none';
    document.getElementById('simulation').style.display = 'none';

    // 显示选中的模块
    document.getElementById(module).style.display = 'block';
}

function showField(field) {
    // 隐藏所有模块 windField  windSpeed
    document.getElementById('windField').style.display = 'none';
    document.getElementById('windSpeed').style.display = 'none';

    // 显示选中的模块
    document.getElementById(field).style.display = 'block';
}