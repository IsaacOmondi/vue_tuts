<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Animations</h1>
        <hr>
        <br>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <br>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">Fade Transition</div>
        </transition>

        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">Slide Transition</div>
        </transition>

        <transition enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">Animated Transition</div>
        </transition>

        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Fade Transition</div>
          <div class="alert alert-warning" v-else key="warning">Warning Transition</div>
        </transition>

        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br>
        <br>
        <transition 
          @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled"
          :css="false">
          <div style="width:100px; height:100px; background-color:lightgreen" v-if="load"></div>
        </transition>

        <hr>
        
        <button class="btn btn-primary"
          @click="selectedComponent == 'success-alert' ? selectedComponent = 'danger-alert' : selectedComponent = 'success-alert'">
          Toggle component
        </button>
        <br>
        <br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from './components/DangerAlert';
import SuccessAlert from './components/SuccessAlert';

export default {
  data() {
    return {
      show: false,
      load: false,
      alertAnimation: 'fade',
      elementWidth: 100,
      selectedComponent: 'success-alert'
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      el.style.width = '300px';
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('leaveEnter')
    },
    leaveCancelled(el) {
      console.log('leaveCancelled')
    }
  },
  components: {
    dangerAlert: DangerAlert,
    successAlert: SuccessAlert
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
