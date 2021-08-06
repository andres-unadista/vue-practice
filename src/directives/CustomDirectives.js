import Vue from 'vue';

export default Vue.directive('pending', {
  bind(el, binding) {
    el.style.color = '#8ecae6';
    // el.style.fontSize = binding.value + 'px';
    el.style.padding = binding.value + 'px';
    if (binding.expresion) {
      el.style.fontSize = binding.expresion + 'px';
    }

    if (binding.arg) {
      let color = 'blue';
      let modifiers = Object.keys(binding.modifiers);
      if (modifiers.length > 0) {
        color = el.style.backgroundColor = modifiers[0];
      }
      el.style.backgroundColor = color;
    }
  },
});
