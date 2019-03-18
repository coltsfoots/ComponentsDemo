<template>
	<div>
		<h1>自用 VueComponents 使用API文档</h1>
		<p class="caption">本篇文档仅仅适用基于element-ui组件二次封装的vue-components。组件封装度并不非常高，日后使用有不同需求可自行修改或者通知我新增更多功能。</p>
		<h3>快速开始</h3>
		<p>组件代码请自行前往 <a href="https://github.com/coltsfoots/ComponentsDemo" target="_blank">GitHub</a>下载</p>
		<br/>
		<br/>
		<p>文档 + Demo 运行需要本地安装 Node.js 环境</p>
		<h4>一、安装本地环境</h4>
		<ol>
			<li>
				<a href="http://nodejs.cn/download/" target="_blank">下载</a>最新版 Node.js 安装至本地，直接默认安装即可
			</li>
			<li>
				安装完毕检测是否安装成功，可以打开 cmd 输入 node -v 命令查看版本<br/>
				<img src="@/assets/node-v.png" alt=""><br>
				继续输入 npm -v 如图所示 <br>
				<img src="@/assets/npm-v.png" alt="">

			</li>
			<li>
				因为 npm 服务器在国外，如果在使用过程觉得非常缓慢，可以安装国内淘宝镜像。<br>
				打开 cmd 界面输入以下命令：<br>
				<p>npm install -g cnpm --registry=https://registry.npm.taobao.org</p>
				安装完成之后可以使用 cnpm 命令代替 npm 命令，不过依然推荐使用 npm
			</li>
			<li>
				上面的步骤都完成之后，接着继续安装脚手架 vue-cli。<br>
				在 cmd 界面输入以下命令：<br>
				<p>npm install -g vue-cli</p>
				等待安装完成
			</li>
			<li>
				同样检查安装是否成功，需要输入命令： vue -V (尤其注意 V 是大写的)，如图：<br>
				<img src="@/assets/vue-v.png" alt="">
			</li>
		</ol>
		<h4>二、新建项目</h4>
		<ol>
			<li>
				打开你需要创建项目的文件夹，按住 shift 不要松开，同时鼠标右键点击文件夹空白处<br>
				选择打开 命令窗口 / 终端 / Powershell (不同系统提示不同)，输入以下命令：<br>
				<p>vue init webpack 项目名称</p>
				例如： vue init webpack my_project 。如图所示：<br>
				<img src="@/assets/vue-init.png" alt="">
			</li>
			<li>
				按照提示依次输入相关参数，如图：<br>
				<img src="@/assets/vue-init-install.png" alt="">
			</li>
			<li>
				初始化项目完成，看到如下命令则表示成功：<br>
				<img src="@/assets/started.png" alt="">
				按照提示依次执行两条命令即可
			</li>
			<li>
				看到如图所示表示已经成功运行项目：<br>
				<img src="@/assets/success.png" alt=""> <br>
				打开浏览器，在地址栏输入 localhost:8080 即可访问 <br>
				<img src="@/assets/page.png" alt="">
			</li>
		</ol>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
	text-align: center;
}
.caption{
	font-size: 20px;
	text-align: center;
}
a {
	color: #409EFF
}
ol li{
	line-height: 30px;
}
</style>
