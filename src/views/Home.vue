<template>
  <div id="home">
    <canvas ref="theCanvas"></canvas>
    <Nav></Nav>
    <main class="main-container">
      <transition name="slide-fade">
        <router-view v-if="show"></router-view>
      </transition>
    </main>
    <div id="footer">
      <div class="container">
        <a href="mailto:jj860528@gmail.com">
          <font-awesome-icon icon="envelope" />jj860528@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  data() {
    return {
      show: true
    };
  },
  mounted: function() {
    //canvas幾何背景
    let theCanvas = this.$refs["theCanvas"];
    const ctx = theCanvas.getContext("2d"),
      current_point = {
        x: null, //当前鼠标x
        y: null, //当前鼠标y
        max: 20000
      };

    let canvas_width = (theCanvas.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth),
      canvas_height = (theCanvas.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight),
      random_points = [],
      all_points = [];

    theCanvas.style = "position: fixed; top: 0px; left: 0px;";

    function draw() {
      //清屏
      ctx.clearRect(0, 0, canvas_width, canvas_height);
      let i, pi, x_dist, y_dist, dist, w;

      //遍历点集合绘制线条，类似于握手问题，两个点只绘制一条线
      random_points.forEach((p, index) => {
        (p.x += p.xa), //按指定速度移动
          (p.y += p.ya),
          //小球碰撞则速度取相反数
          (p.xa *= p.x > canvas_width || p.x < 0 ? -1 : 1),
          (p.ya *= p.y > canvas_height || p.y < 0 ? -1 : 1),
          ctx.fillRect(p.x - 0.5, p.y - 0.5, 1, 1); //绘制点

        for (i = index + 1; i < all_points.length; i++) {
          pi = all_points[i];
          if (pi.x !== null && pi.y !== null) {
            x_dist = p.x - pi.x;
            y_dist = p.y - pi.y;
            dist = x_dist * x_dist + y_dist * y_dist;
            //当两点距离小于极限距离时会产生连线，当第二个点是鼠标所产生点时，第一个点在范围内会产生向鼠标点的速度，产生吸附效果
            dist < pi.max &&
              pi === current_point &&
                dist >= pi.max / 2 &&
                ((p.x -= 0.03 * x_dist), (p.y -= 0.03 * y_dist));
            //根据距离计算连线的透明度，使过度效果流畅
            w = (pi.max - dist) / pi.max;
            ctx.beginPath();
            ctx.lineWidth = w / 2;
            ctx.strokeStyle = `rgba(110,110,110,${w + 0.2})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pi.x, pi.y);
            ctx.stroke();
          }
        }
      }),
        requestAnimationFrame(draw);
    }

    //绑定事件，判断是否添加鼠标这个点
    window.onmousemove = e => {
      e = e || window.event;
      current_point.x = e.clientX;
      current_point.y = e.clientY;
    };
    window.onmouseout = () => {
      current_point.x = null;
      current_point.y = null;
    };

    //随机生成100个点
    for (let i = 0; i < 50; i++) {
      let x = Math.random() * canvas_width, //初始坐标
        y = Math.random() * canvas_height,
        xa = 2 * Math.random() - 1, //x速度
        ya = 2 * Math.random() - 1, //y速度
        max = 6000; //会产生连线的距离的平方

      random_points[i] = { x, y, xa, ya, max };
    }
    //将鼠标的点添加至点集合中
    all_points = [...random_points, current_point];
    //只是背景特效-所以延迟执行
    setTimeout(draw, 1000);
  },
  components: {
    Nav
  }
};
</script>
<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
canvas {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.733);
}
#home {
  z-index: 1;
  position: absolute;
  width: 100%;
}
</style>