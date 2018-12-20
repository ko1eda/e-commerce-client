export default {
  props: {
    startLeft: {
      type: Boolean,
      default: true
    },
  },

  data() {
    return {
      isLeft: this.startLeft
    };
  },

  /**
   * slideStyles: if it is not set to left, then
   *  justify it to the right
   *
   * 
   */
  computed: {
    slideStyles() {
      return [
        'tw-border tw-w-12 tw-h-6 tw-rounded-full tw-flex tw-items-center tw-bg-grey-light',
        !this.isLeft && 'tw-justify-end'
      ];
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