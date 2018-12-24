export default {
  props: {
    startLeft: {
      type: Boolean,
      default: true
    },
  },

  data() {
    return {
      isLeft: this.startLeft,
    };
  },

  /**
   * sliderStyles: the transformation style
   *  and transition style for when the slider is moved
   *
   */
  computed: {
    sliderStyles() {
      let obj = {
        transition: 'all 600ms cubic-bezier(0.23, 1, 0.32, 1)'
      };

      if(! this.isLeft) {
        obj.transform = 'translateX(1.5rem)';
      }

      return obj;
    }

  },

  /**
   * toggle: emit a slide-left or slide-right event depending
   *  upon the current slider position
   * 
   */
  methods: {
    toggle() {
      let slide = 'slide-';

      this.$emit(slide += this.isLeft ? 'right' : 'left', {isLeft: !this.isLeft});

      this.isLeft = this.isLeft ? false : true;
    },

    toggleLeft() {
      this.isLeft = true;
    },

    toggleRight() {
      this.isLeft = false;
    }
  }
};