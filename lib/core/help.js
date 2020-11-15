const program = require('commander');

const helpOptions = () => {
  // 增加自己的options
  program.option('-d --directory [dir]', '请指定生成结构树的文件夹, 例如: -d /src', process.cwd())
  program.option('-i, --ignore [ig]', '可以指定忽略文件，例如: -i /node_modules', '/node_modules');
  program.option('-e, --exp [epath]', '指定输入的文件，例如: -e /result.md，TXT文件中无法保存图标', '/tree.md')

  program.on('--help', function () {
    console.log("");
    console.log("Other:")
    console.log("  other options~");
  })
}

module.exports = helpOptions;
