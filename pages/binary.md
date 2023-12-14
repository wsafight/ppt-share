---
layout: cover
background: https://sli.dev/demo-cover.png
download: true
---

# 有趣的 0 和 1

日期 23-12-14

---
layout: center
background: https://sli.dev/demo-cover.png
---

# 为什么计算机的世界只有 0 和 1 ？

---
layout: center
---

# 为什么计算机的世界只有 0 和 1 ？

## 高低电压

## 历史上的 3 进制（平衡三进制）

---
layout: center
---

# int 占用多少数据？


一个 0 是一个 bit。8 个 bit 是一个字节。

Java 中 int 是 4 个字节。

0000 0000 0000 0000 0000 0000 0000 0000

2 * 32

---
layout: center
---

# 负数和无符号怎么表示？

---
layout: center
---

# Linux 权限系统的设计方式？为什么？

---
layout: center
---

# 基于二进制 protobuf 为什么那么快

```JSON
{
    "name": "jump_jump",
    "id": 100,
    "scores": 100,
    "handed": "do something"
}
```

---
layout: center
---

# 基于二进制 protobuf 为什么那么快

```
// proto2 file
syntax = "proto2";

message Player {
  // in proto2, optional fields have explicit presence
  optional string name = 1;
  // proto2 still supports the problematic "required" field rule
  required int32 id = 2;
  // in proto2 this is not packed by default
  repeated int32 scores = 3;
  // in proto2 enums are closed
  optional Handed handed = 4;
}
```

---
layout: center
---

没有银弹，本质就是舍与得。时间换空间，空间换时间。性能换通用性。

---
layout: center
---

# 推荐阅读

<img src="/algo.png" style="height: 400px" />

---
layout: center
---

# 感谢🙏
