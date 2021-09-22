import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"C:\\Users\\ABazarbayev\\Desktop\\studyCRM\\node_modules\\vue-toastification\\dist\\index.css","timeout":5000});
  inject('toast', toast);
}
