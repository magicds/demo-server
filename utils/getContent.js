const fs = require('fs');
const path = require('path');

const PATH_PREFIX = path.join(__dirname, '../static/demoLib');
const EXT2NAME = {
    'css': 'style',
    'html': 'html',
    'js': 'script',
    'md': 'description',
    'plugin': 'plugin'
};

const demoMap = require("../static/demoLib/demomap");

function getContent(key) {
    let floder = path.join(PATH_PREFIX, demoMap[key]);
    console.log(floder, demoMap[key], fs.existsSync(floder));
    let filesData = fs.existsSync(floder) ? getFiles(floder) : {};

    filesData.title = key;
    return filesData;
}

function getFiles(floder) {
    var filesData = {
        title: '',
        // 额外引入的css文件
        links: [],
        // style 样式
        style: '',
        // html
        html: '',
        // 额外引入的 js
        jss: [],
        // script 
        script: ''
    };

    fs.readdirSync(floder).forEach(function (file) {
        let filePath = path.join(floder, file);
        filesData[EXT2NAME[path.extname(filePath).substr(1)]] = fs.readFileSync(filePath, 'utf-8');
    });
    // 将额外资源补充加入描述说明
    if (filesData.plugin) {
        var extSourse = JSON.parse(filesData.plugin);
        delete filesData.plugin;

        filesData.links = extSourse.css;
        filesData.jss = extSourse.js;
        if (!filesData.description) {
            filesData.description = '';
        }
        filesData.description += addToDescription(extSourse);
    }
    console.log(filesData);
    return filesData;
}

function addToDescription(extSourse) {
    let css = extSourse.css;
    js = extSourse.js;
    let cssStr = '';
    let jsStr = '';
    if (css && css.length) {
        css.forEach(item => {
            cssStr += `- \`${item}\`\n`;
        });
    }
    if (js && js.length) {
        js.forEach(item => {
            jsStr += `- \`${item}\`\n`;
        });
    }

    return `\n\n## 资源依赖\n\n${cssStr}\n\n${jsStr}`;
}

// getContent('leftright');
// getContent('extSourseDemo');

module.exports = getContent;