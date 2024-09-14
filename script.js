function showModule(module) {
    // 隐藏所有大模块
    document.getElementById('wind').style.display = 'none';
    document.getElementById('rain').style.display = 'none';
    document.getElementById('simulation').style.display = 'none';

    // 显示选中的大模块
    document.getElementById(module).style.display = 'block';

    // 如果是“风场情况”模块，默认显示 windField 子模块
    if (module === 'wind') {
        document.getElementById('windField').style.display = 'block';
        document.getElementById('windSpeed').style.display = 'none';
    }

    // 如果是“降水情况”模块，默认显示 oneHour 子模块
    if (module === 'rain') {
        document.getElementById('oneHour').style.display = 'block';
        document.getElementById('threeHour').style.display = 'none';
        document.getElementById('sixHour').style.display = 'none';
    }
}

function showField(field) {
    // 隐藏所有风场相关的内容 windField 和 windSpeed
    document.getElementById('windField').style.display = 'none';
    document.getElementById('windSpeed').style.display = 'none';

    // 隐藏所有降水相关的内容 oneHour, threeHour, sixHour
    document.getElementById('oneHour').style.display = 'none';
    document.getElementById('threeHour').style.display = 'none';
    document.getElementById('sixHour').style.display = 'none';

    // 显示选中的内容
    document.getElementById(field).style.display = 'block';
}
