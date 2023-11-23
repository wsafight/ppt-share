---
layout: cover
background: https://sli.dev/demo-cover.png
download: true
---

# 聊聊 DDD 设计（1）

日期 23-11-23

---
layout: center
background: https://sli.dev/demo-cover.png
---

# 通用的驱动设计有哪些？

---
layout: center
---

# 通用的驱动设计有哪些？

## TDD - 测试驱动开发

## BDD - 行为驱动开发

## DDD - 最后期限驱动开发

---

# DDD 是什么？

DDD 是领域驱动开发，它是一种设计思想，它可以指导业务建模和微服务设计。

<img src="/ddd.png" style="height: 380px" />

---
layout: center
---

# 本文主旨

## 提炼通用语言

## 复杂度问题

## 贫血模型与富血模型

---
layout: center
---

# 为什么要设计通用语言

> 我的语言之界限，即我的世界之界限 —— 路德维希·维特根斯坦

---
layout: center
---
# 通用语言的范围

## 范围 ——> 领域

## 用一句话体现你现在做的事？对方是谁？是否了解我的领域？能否让不是我这个领域的人听懂我在做的事？

---
layout: center
---

# 通用语言的认识

## 让天下没有难做的生意

## 订单，电商，短信，物流

## 抓手，赋能，机器学习，神经网络

---

# 通用语言的落地

## 变量名（领域体现）

## 方法名（我要做什么）

<img src="/common-lan.png" style="height: 380px" />

---
layout: center
---

# 复杂度的类型

## 本质复杂度

本质复杂度和待求解问题的本质有关，是无法避免的。如某些企业服务，数据库管理软件，编程语言的设计。

## 偶然复杂度

偶然复杂度一般是因为选用求解问题的方法时所引入的，和问题本质无关，和选用求解的工具或方法有关。（⚠️：随着软件的不断迭代，要不断降低偶然复杂度）

---
layout: center
---

# 贫血模型和富血模型

## 面向对象和函数式区别？

## 为什么面向对象更有利于“复杂”系统设计？

---
layout: center
---

# 面向对象和函数式关注点？

```ts
// 关注数据，数据的流动以及变化
let userInfo;

getUserInfo = () => {
    return userInfo
}

setUserInfo = (xxx) => {
    ...
}
```

```ts
class User {
  name: string;

  // 取名
  setName() {}

  // 行为（是不是这个类该处理）
}
```

---

# 贫富血模型的代码

```java
public IncreaseResponse increase(IncreaseRequest request) {

    final IncreaseResponseBuilder responseBuilder = new IncreaseResponseBuilder(request, IncreaseResponse.OK);

    //校验入参
    if (request.getAmount() <= 0) {
        return responseBuilder.error(IncreaseResponse.AMOUNT_LESS_THAN_ZERO).build();
    }

    Account account = accountDao.findByUserId(request.getUserId());

    //防重校验
    boolean exists = accountRecordDao.exists(account.getId(),
            AccountRecord.TYPE_INCREASE,
            request.getSourceType(),
            request.getSourceId());

    if (exists) {
        return responseBuilder.error(IncreaseResponse.VERSION_CONFLICT).build();
    }

    transactionTemplate.execute(new TransactionCallbackWithoutResult() {
        @Override
        protected void doInTransactionWithoutResult(TransactionStatus status) {
            try {
                //更新余额
                int result = accountDao.updateBalance(account.getId(),
                        account.getBalance() + request.getAmount(),
                        account.getVersion());

                //乐观锁冲突
                if (result == 0) {
                    responseBuilder.error(IncreaseResponse.VERSION_CONFLICT);
                    status.setRollbackOnly();
                    return;
                }

                AccountRecord record = new AccountRecord();
                record.setAccountId(account.getId());
                record.setType(AccountRecord.TYPE_INCREASE);
                record.setSourceId(request.getSourceId());
                record.setSourceType(request.getSourceType());
                record.setAmount(request.getAmount());
                record.setCreated(LocalDateTime.now());

                //插入子记录
                int r = accountRecordDao.insert(record);
                System.out.println(r);
            } catch (Exception e) {
                responseBuilder.error(IncreaseResponse.UNKNOWN).errorMsg(e.getMessage());
                status.setRollbackOnly();
            }
        }
    });

    return responseBuilder.build();
}

```

# 贫血模型的代码

```java
public IncreaseResponse increase(IncreaseRequest request) {

    final IncreaseResponseBuilder responseBuilder = new IncreaseResponseBuilder(request, IncreaseResponse.OK);

    //校验入参
    if (request.getAmount() <= 0) {
        return responseBuilder.error(IncreaseResponse.AMOUNT_LESS_THAN_ZERO).build();
    }

    Account account = accountDao.findByUserId(request.getUserId());

    //防重校验
    boolean exists = accountRecordDao.exists(account.getId(),
            AccountRecord.TYPE_INCREASE,
            request.getSourceType(),
            request.getSourceId());

    if (exists) {
        return responseBuilder.error(IncreaseResponse.VERSION_CONFLICT).build();
    }

    transactionTemplate.execute(new TransactionCallbackWithoutResult() {
        @Override
        protected void doInTransactionWithoutResult(TransactionStatus status) {
            try {
                //更新余额
                int result = accountDao.updateBalance(account.getId(),
                        account.getBalance() + request.getAmount(),
                        account.getVersion());

                //乐观锁冲突
                if (result == 0) {
                    responseBuilder.error(IncreaseResponse.VERSION_CONFLICT);
                    status.setRollbackOnly();
                    return;
                }

                AccountRecord record = new AccountRecord();
                record.setAccountId(account.getId());
                record.setType(AccountRecord.TYPE_INCREASE);
                record.setSourceId(request.getSourceId());
                record.setSourceType(request.getSourceType());
                record.setAmount(request.getAmount());
                record.setCreated(LocalDateTime.now());

                //插入子记录
                int r = accountRecordDao.insert(record);
                System.out.println(r);
            } catch (Exception e) {
                responseBuilder.error(IncreaseResponse.UNKNOWN).errorMsg(e.getMessage());
                status.setRollbackOnly();
            }
        }
    });

    return responseBuilder.build();
}

```

---

# 富血模型的代码

```java
public RechargeResponse recharge(RechargeRequest request) {
    final RechargeResponse.Builder respBuilder = new RechargeResponse.Builder(request);

    //校验入参
    if (request.getAmount() <= 0) {
        return respBuilder.error(RechargeResponse.AMOUNT_LESS_THAN_ZERO).build();
    }

    transactionTemplate.execute(new TransactionCallbackWithoutResult() {
        @Override
        protected void doInTransactionWithoutResult(TransactionStatus status) {
            try {
                Account account = accountRepository.findByOwner(new Owner(request.getUserId()));
                Source source = new Source(request.getSourceId(), request.getSourceType());
                account.recharge(new Amount(request.getAmount()), source);
                accountRepository.save(account);
            } catch (RechargeDuplicateException e) {
                respBuilder.error(RechargeResponse.DUPLICATE_RECHARGE).errorMsg(e.getMessage());
                status.setRollbackOnly();
            }
            catch (OptimisticLockException e) {
                respBuilder.error(RechargeResponse.VERSION_CONFLICT).errorMsg(e.getMessage());
                status.setRollbackOnly();
            } catch (Exception e) {
                respBuilder.error(RechargeResponse.UNKNOWN).errorMsg(e.getMessage());
                status.setRollbackOnly();
            }
        }
    });

    return respBuilder.build();
}
```

---
layout: center
---

# 富血模型区别

## 主要的逻辑都在service里，处理业务逻辑和技术问题的代码混在一起，这种service被称为事务脚本

## Service作为一个用例的入口，对外提供服务，把业务逻辑委托给领域对象，它自己负责把领域对象的行为串联起来，并一些处理技术相关的问题，从而完成一个完整的用例

## 分开对待本质复杂度和偶然复杂度，核心业务逻辑被封装在领域对象里，内聚，容易保持一致性，且容易维护和扩展。此外，容易测试，且代码和测试都可以作为文档。

---
layout: center
---

# 富血模型问题

## 富领域对象需要：
- 足够大的内存
- 并发访问不多

## 这在单机软件里很多场景是可行的，但在企业应用软件里，尤其是互联网软件里，是不太可能的。

---
layout: center
---

# 感谢🙏
