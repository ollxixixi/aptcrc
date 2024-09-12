function showModule(module) {
    // 隐藏所有模块
    document.getElementById('wind').style.display = 'none';
    document.getElementById('simulation').style.display = 'none';

    // 显示选中的模块
    document.getElementById(module).style.display = 'block';
}
