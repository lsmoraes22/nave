<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<style>body{
margin:0;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
hight: 100vh;
touch-action: none;
}
#turn_device{
position: fixed;
top: 0px;
left: 0px;
display: none;
}
</style>
</head>
<body>
<canvas id=canvas >Your browser don't suport canvas tag!</canvas>
<div id=turn_device ><img src='images/background7.png'></div>
<script type="text/javascript" src="images.js?<?php echo date('his'); ?>" ></script>
<script type="text/javascript" src="audios.js?<?php echo date('his'); ?>" ></script>
<script type="text/javascript" src="canvas.js?<?php echo date('his'); ?>" ></script>
<script type="text/javascript" src="class.js?<?php echo date('his'); ?>" ></script>
<script type="text/javascript" src="levels.js?<?php echo date('his'); ?>" ></script>
<script type="text/javascript" src="engine.js?<?php echo date('his'); ?>" ></script>
<script type="text/javascript" src="controls.js?<?php echo date('his'); ?>" ></script>
</body>
</html>
