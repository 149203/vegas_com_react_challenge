function has_class(el, className) {
   if (el.classList)
      return el.classList.contains(className)
   else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

export function add_class(el, className) {
   if (el.classList)
      el.classList.add(className)
   else if (!has_class(el, className)) el.className += " " + className
}

export function remove_class(el, className) {
   if (el.classList)
      el.classList.remove(className)
   else if (has_class(el, className)) {
      const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
   }
}