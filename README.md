# front-end
    learning Vue3 from the beginning
---
1. 安装 **VS Code**  
2. 安装 **nvm-windows** (for Windows10)  
    > https://zhuanlan.zhihu.com/p/546506752  
    ```
    nvm version: 检测安装
    nvm list：列出已经安装的 Node.js 的版本号，正在使用的版本前标有星号;  
    nvm install <version>：安装指定版本的 Node.js;  
    nvm uninstall <version>: 卸载指定版本的 Node.js;  
    nvm use <version>：使用指定版本的 Node.js;  
    nvm current：列出当前使用的 Node.js 的版本(也可以使用 nvm list)  
    ---
    node -v: 检查安装
    ```
3. 安装 **NRM**  
    NRM 是一个 NPM 源管理库  
    ```
    npm i nrm -g
    ```
4. 安装 **Yarn**  
    推荐使用 Yarn 替换 NPM  
    ```
    npm i yarn -g  
    yarn -v: 检查安装
    ```    
---
## 创建第一个web应用  
> Vue-cli使用webpack => vite  
> Javascript是Typescript的子集 => TS   
### a. 使用vite构建过程  
    yarn create vite xxx  
    ---
    -choose vue + ts  
### a. 运行项目
    yarn / yarn dev   
### b. 使用create-vue构建项目
    yarn create vue
### b. 运行项目
    yarn install
    yarn dev
### 文件：package.json  
    记载依赖和指令   
          "scripts": {  
            "dev": "vite",  
            "build": "vite build",  
            "preview": "vite preview"  
           },
---
### 指令的选择：dev build serve?
    npm run dev     是vue-cli2.0版本使用的
    npm run serve  是vue-cli3.0版本使用的
    在我们运行一些 vue 项目的时候，输入npm run serve或者 npm run dev的其中一个时，系统会报错，然后我们就特别好奇，npm run serve 和 npm run dev 到底有什么区别  
    其实 npm run dev 或者是 npm run serve 等 npm run xxx 并不是一定要这么写  
    npm run XXX是执行配置在 package.json 中的脚本  
    npm run xxx 中的 xxx 可以理解为键值对的 key，实际上 run 的是在 package.json 里面 scripts 配置的 value  
    npm run xxx，并不是你想运行就运行的，只有在 package.json scripts 配置了，你才能 run 的，所以不是所有的项目都能 npm run dev/build  
    要了解这些命令做了什么，就要去scripts中看具体执行的是什么代码  
---
### 安装...
    yarn add axios --save
    yarn add vue-router --save
---
> [export import 语法](https://www.jianshu.com/p/541256d8abb3)  

....
