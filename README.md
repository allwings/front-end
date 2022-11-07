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
3. 安装 **NRM**(非必要)  
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
    > [yarn 命令在power shell无法执行](https://www.jianshu.com/p/8963e6f80e67)  
---
## 创建第一个web应用  
> Vue-cli使用webpack => vite  
> Javascript是Typescript的子集 => TS   
### a. 使用vite构建项目  
> 使用 vite 不仅可以创建 vue 的项目，而且可以创建 react 等项目，只是需要手动安装第三方插件  
> 构建项目：建立项目的运行环境，需要手动安装插件  

    yarn create vite xxx  
    -（choose vue + ts）  
### b. 使用create-vue构建项目
> 脚手架：创建项目，选择性安装需要的插件，指定统一的风格，生成demo  

    yarn create vue
### **运行项目**
    1. cd xxx
    2. yarn install
    3. yarn dev
---
### 文件：package.json  
    记载依赖和指令   
          "scripts": {  
            "dev": "vite",  
            "build": "vite build",  
            "preview": "vite preview"  
           },

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
> [JS之DOM是什么](https://www.jianshu.com/p/18461e5f6407)

> [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/typings/migrating.html#%E5%87%8F%E5%B0%91%E9%94%99%E8%AF%AF)

- 根据数据显示在组件上：创建一个组件-export的props定义数据-在调用的vue里import-export的components里注册-在tamplate标签里使用  
- 删除按钮和双击切换reminder状态：子组件emit-上一层组件@xxx捕捉，注册emit-调用相关数据  
- 添加task：还是emit 用了form的submit  
- 点击右上角按钮切换显示：基于app.vue的属性->子组件 复习  

- 与后端交互在函数里运行-加上async和await  
- 在vue.config.ts里把请求路径的http头定义好，在函数里用代号  
- 网页路由在-router 下的index.ts里，routes数组就是网站的各个路由页面-在main.ts里import router-在app.vue里加入<router-view>-在footer页面里不用<a>, 用<router-link>//router-view会将props传递到各个view上？！  

---
    npm run build  //build for prodiction  -dist folder
    npm serve   //deploy dist folder  
