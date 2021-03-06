<template>
  <div class="content">
      <button class="add-to-cart" v-on:click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
          <div class="robot-name">
              {{selectedRobot.head.title}}
              <span v-show="selectedRobot.head.onSale" class="sale">Sale!</span>
          </div>
        <img v-bind:src="selectedRobot.head.src" title="head">
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="selectedRobot.leftArm.src" title="Left arm">
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="selectedRobot.torsos.src" title="torsos">
        <button v-on:click="selectPreviousTorsos()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorsos()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="selectedRobot.rightArm.src" title="Right arm">
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="selectedRobot.bases.src" title="bases">
        <button v-on:click="selectPreviousBases()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBases()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
        <h1 class="cart">Cart</h1>
        <table>
            <thead>
                <tr>
                    <th>Robot</th>
                    <th class="price">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(robot, index) in cart" v-bind:key="index">
                    <td>{{robot.head.title}}</td>
                    <td class="price">{{robot.cost}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import robotParts from "../data/parts.js";
import parts from '../data/parts.js';


function getPreviousIndex(index, length) {
  const decreaseIndex = index - 1;
  //console.log(decreaseIndex); -   just for control flow
  return decreaseIndex < 0 ? length - 1 : decreaseIndex;
}
function getNextIndex(index, length) {
  const increaseIndex = index + 1;
  //console.log(increaseIndex); - -   just for control flow
  return increaseIndex > length - 1 ? 0 : increaseIndex;
}

export default {
  name: "RobotBuilder",
  data() {
    return {
      robotParts,
      cart:[],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsosIndex: 0,
      selectedRightArmIndex: 0,
      selectedBasesIndex: 0
    };
  },
  computed: {
        selectedRobot () {
            return {
                head: robotParts.heads[this.selectedHeadIndex],
                leftArm: robotParts.arms[this.selectedLeftArmIndex],
                torsos: robotParts.torsos[this.selectedTorsosIndex],
                rightArm: robotParts.arms[this.selectedRightArmIndex],
                bases: robotParts.bases[this.selectedBasesIndex]
            };
        },
    },
  methods: {
      addToCart() {
          const robot = this.selectedRobot;
          const cost = robot.head.cost + robot.leftArm.cost + robot.torsos.cost + robot.rightArm.cost + robot.bases.cost;
          this.cart.push(Object.assign({}, robot, {cost}));
      },
    selectNextHead() {
      this.selectedHeadIndex = getNextIndex(
        this.selectedHeadIndex,
        robotParts.heads.length
      );
    },
    selectPreviousHead() {
      this.selectedHeadIndex = getPreviousIndex(
        this.selectedHeadIndex,
        robotParts.heads.length
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextIndex(
        this.selectedLeftArmIndex,
        robotParts.arms.length
      );
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = getPreviousIndex(
        this.selectedLeftArmIndex,
        robotParts.arms.length
      );
    },
    selectNextTorsos() {
      this.selectedTorsosIndex = getNextIndex(
        this.selectedTorsosIndex,
        robotParts.torsos.length
      );
    },
    selectPreviousTorsos() {
      this.selectedTorsosIndex = getPreviousIndex(
        this.selectedTorsosIndex,
        robotParts.torsos.length
      );
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = getNextIndex(
        this.selectedRightArmIndex,
        robotParts.arms.length
      );
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = getPreviousIndex(
        this.selectedRightArmIndex,
        robotParts.arms.length
      );
    },
    selectNextBases() {
      this.selectedBasesIndex = getNextIndex(
        this.selectedBasesIndex,
        robotParts.bases.length
      );
    },
    selectPreviousBases() {
      this.selectedBasesIndex = getPreviousIndex(
        this.selectedBasesIndex,
        robotParts.bases.length
      );
    }
  }
};
</script>

<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
}
.sale {
    color: red;
}
.content {
    position: relative;
}
.add-to-cart {
    position: absolute;
    right: 30px;
    width: 220px;
    padding: 3px;
    font-size: 16px;
}
td, th {
    text-align: left;
    padding: 5px;
    padding-right: 20px;
}
.price {
    text-align: right;
}
.cart {
text-align:left;
}
</style>


