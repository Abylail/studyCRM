import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"\u002FUsers\u002Fabylay\u002FDesktop\u002FstudyCRM\u002Fnode_modules\u002Fvue-toastification\u002Fdist\u002Findex.css","timeout":5000});
  inject('toast', toast);
}
