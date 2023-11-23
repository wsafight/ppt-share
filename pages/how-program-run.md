---
layout: cover
download: true
---

# 三个库帮你认识程序是如何运行的


您是否曾经想知道计算机是如何工作的？

---

# 极简计算机组件

- CPU
- 内存
- 编译器



---

# 计算机的组成

- CPU
- 内存
- 


随机渲染
```
define videoStartAddr 2100
define videoEndAddr 3000
define randomNumberAddr 2050
define numColors 16
FillScreen:
define fillScreenPtr 0 ; address at which store address of current screen pixel in loop
copy_to_from_constant fillScreenPtr videoStartAddr ; initialize to point to first pixel
jump_to FillScreenLoop
FillScreenLoop:
define tempAddr 1 ; address to use for temporary storage
; modulo random value by number of colors in palette to get a random color...
modulo_constant randomNumberAddr numColors tempAddr
; ...and write it to current screen pixel, eg. the address pointed to by fillScreenPtr
copy_into_ptr_from fillScreenPtr tempAddr
; increment pointer to point to next screen pixel address
add_constant fillScreenPtr 1 fillScreenPtr
branch_if_not_equal_constant fillScreenPtr videoEndAddr FillScreenLoop ; if not finished, repeat
jump_to FillScreen ; filled screen, now start again from the top
```

https://github.com/bramblex/jsjs

https://github.com/bramblex/jsjs-vm-demo