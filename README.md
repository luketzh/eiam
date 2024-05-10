<div align="center">

<img src="images/logo-banner.jpg" alt="logo" width="60%"/>

[![](https://img.shields.io/badge/JDK-17+-orange)](https://www.oracle.com/au/java/technologies/javase/jdk17-archive-downloads.html)
[![](https://img.shields.io/badge/MySQL-8.0%2B-brightgreen)](https://www.mysql.com/downloads/)
[![](https://img.shields.io/badge/License-AGPL%203.0-orange)](https://github.com/topaim/eiam/blob/master/LICENSE)
[![](https://img.shields.io/badge/Maven-3.5.0+-brightgreen.svg)](https://maven.apache.org)

[官方网站](https://eiam.topiam.cn) | [需求收集](https://github.com/topiam/eiam/issues/new) | [问题反馈](https://github.com/topiam/eiam/issues/new)

</div>

--------------------------

<div align="center">⭐️ 如果你喜欢 TOPIAM，请给它一个 Star，您的支持将是我们前行的动力。</div>

--------------------------

## 项目介绍

**TOPIAM** 数字身份管控平台，简称：EIAM（Employee Identity and Access Management），
用于管理企业内员工账号、权限、身份认证、应用访问，帮助整合部署在本地或云端的内部办公系统、业务系统及三方 SaaS
系统的所有身份，实现一个账号打通所有应用的服务。

## 核心特性

+ 提供统一组织信息管理，多维度建立对应关系，实现在一个平台对企业人员、组织架构、应用信息的高效统一管理。
+ 支持钉钉、飞书、企业微信等身份源集成能力，实现系统和企业OA平台数据联动，以用户为管理基点，结合入职、离职、调岗、兼职等人事事件，关联其相关应用权限变化而变化，保证应用访问权限的安全控制。
+ 支持多因素认证，行为验证码、社交认证，融合认证等机制，保证用户认证安全可靠。
+ 支持微信、钉钉、飞书QQ等社交认证集成，使企业具有快速纳入互联网化认证能力。
+ 支持 `SAML2`，`OAuth2`，`OIDC`，`CAS`，`JWT`,`表单代填`等认证协议及机制，实现单点登录功能，预配置大量 SaaS 应用及传统应用模板，开箱即用。
+ 完善的安全审计，详尽记录每一次用户行为，使每一步操作有据可循，实时记录企业信息安全状况，精准识别企业异常访问和潜在威胁的源头。
+ 提供标准`RESTAPI`、`SCIM2.0`接口轻松完成机构用户同步，提供`HTTP`、`MQ`事件通知，实现企业对于账号生命周期的精细化管理。

## 在线演示

+ 管理端：https://eiam-console.topiam.cn
+ 用户端：https://eiam-portal.topiam.cn

## 系统架构

![](https://github.com/topiam/eiam/assets/30397655/dc2c2749-e873-4d4d-ba20-43d5db81c6b8)

## 功能描述

| 功能模块 | 功能项      | 功能描述                                                                                                                                                       |
|------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 账户管理 | 组织与用户    | 组织与用户用于解决企业组织、用户等实体的管理问题。这些实体您可以直接在TOPIAM中进行维护，也可以通过配置身份源后，同步身份源的数据。                                                                                       |
|      | 用户组管理    | 用户组是用户的集合，将具有相同职能的用户添加到一起，即形成用户组。将权限授权到用户组后，用户组内的用户都将继承该权限，因此，用户组十分适合用于批量授权。                                                                               |
|      | 身份源管理    | 支持企业以多种身份源途径同步用户和组织信息到系统，在高级配置中可以对导入的处理逻辑进行灵活配置 ，实现从多个数据源的汇聚为一个完整的用户目录，部分身份源还可以通过回调的方式支持实时同步。                                                              |
| 认证管理 | 认证提供商    | 支持设置多种身份提供商，企业用户即可通过不同方式登录门户。系统默认的认证源为用户密码和短信快捷认证，您还可添加钉钉、微信、企业微信、QQ等作为认证源。                                                                                |
| 应用管理 | OIDC协议应用 | OIDC是OpenID Connect的简称，OIDC=(Identity, Authentication) + OAuth 2.0。它在OAuth2上构建了一个身份层，是一个基于OAuth2协议的身份认证标准协议。OIDC是一个协议族，提供很多的标准协议，包括Core核心协议和一些扩展协议。        |
|      | JWT协议应用  | JWT（JSON Web Token）是在网络应用环境声明的一种基于 JSON 的开放标准。TOPIAM 使用 JWT 进行分布式站点的单点登录 （SSO）。JWT 单点登录基于非对称加密，由 TOPIAM 将用户状态和信息使用私钥加密，传递给应用后，应用使用公钥解密并进行验证。使用场景非常广泛，集成简单。 |
|      | 表单代填应用   | 表单代填可以模拟用户在登录页输入用户名和密码，再通过表单提交的一种登录方式。应用的账号密码在 TOPIAM 中使用 AES256 加密算法本地加密存储。很多旧系统、不支持标准认证协议的系统或不支持改造的系统可以使用表单代填实现统一身份管理。表单中有图片验证码、CSRF token、动态参数的场景不适用。   |
|      | 应用分组     | 应用分组管理是一种将多个应用程序或功能按照一定的逻辑或相关性进行组织和管理的方法。通过应用分组，可以更有效地管理大量应用程序，提供更好的用户体验。                                                                                  |
| 行为审计 | 用户行为     | 审计日志记录了所有平台用户进行的关键操作，以对某次改变提供充分的溯源数据。                                                                                                                      |
|      | 管理员行为    | 审计日志记录了所有平台管理员进行的关键操作，以对某次改变提供充分的溯源数据。                                                                                                                     |
| 安全设置 | 通用安全     | 支持通用安全配置，及安全防御策略。                                                                                                                                          |
|      | 密码策略     | 系统全局安全配置、如密码策略、会话策略。 在密码策略中可以设置相应的密码复杂度、相应的锁定解锁策略，还可以设置是否允许与历史密码重复等高级策略。同时，可以通过开启弱密码字典库来检查密码的安全强度。                                                         |
|      | 系统管理员    | 系统管理员负责保证系统的安全性、稳定性和合规性。                                                                                                                                   |
| 系统设置 | 消息设置     | 消息服务设置包括邮件服务配置和短信服务配置。邮件服务配置是指将消息发送到指定的电子邮件地址，需要配置SMTP服务器地址、端口号、用户名、密码等信息。短信服务配置是指将消息以短信的形式发送到指定的手机号码，需要配置短信服务提供商的API接口地址、账号、密码等信息。                        |
|      | IP地理库    | 配置IP地理库根据访问者的IP地址迅速识别出其所在的地理位置。                                                                                                                            |
|      | 存储配置     | 支持配置云存储服务，如阿里云、腾讯云、MinIO等。                                                                                                                                 |
| 系统监控 | 会话管理     | 会话管理可以查看所有当前仍然有效的会话列表，并且可以强制注销某个用户的会话。注销后，该用户凭证即刻失效，之后的所有操作都需要重新认证。                                                                                        |

## 技术架构

- **后端**：[Spring Boot](https://spring.io/projects/spring-boot/) 、[Spring Security](https://spring.io/projects/spring-security/)
- **前端**：[React.js](https://react.dev/) 、[Ant Design](https://ant.design)
- **中间件**：[MySQL](https://www.mysql.com/) 、[Redis](https://redis.io/)
- **基础设施**：[Docker](https://www.docker.com/)

## 安装部署

+ [本地部署](https://eiam.topiam.cn/docs/deployment/deployment-local/)
+ [Docker部署](https://eiam.topiam.cn/docs/deployment/deployment-local/)
+ [K8S部署](https://eiam.topiam.cn/docs/deployment/deployment-k8s/)
+ [更多方式](https://eiam.topiam.cn/docs/deployment/)

## 微信公众号

欢迎关注 TOPIAM 微信公众号，接收产品最新动态。

![](/images/wxmp-qr.png)

## 社区交流群

![](images/group-qr-code.png)

## 用户登记

如果您和您的公司或组织使用了 TOPIAM 企业身份管控平台 ，非常感谢您的支持与信任，请在此进行登记，您的回复将成为维护者、社区用户和观望者的信心来源。感谢支持
💖

**我们会优先支持登记用户的需求及问题反馈。**

> 登记信息仅用于推广本产品～

[点击进行接入登记](https://gitee.com/topiam/eiam/issues/I7SAJK)

+ 浙江智慧江能技术服务股份有限公司
+ 广东省印象华云数据有限公司
+ 宁波甬承电子科技有限公司
+ 山东爱特云翔信息技术有限公司
+ 北京中科生活服务有限公司
+ 四维世景北京(科技)有限公司
+ 抹香鲸跨境电子商务有限公司
+ 杭州天象聚合信息技术有限公司
+ 烟台派创软件有限公司
+ 四川小仙信息技术有限公司
+ 成都益新臣辉科技有限公司
+ 贵州南智云数字产业发展有限公司
+ 青岛南邮信息技术有限公司
+ 福州创汇科技有限公司
+ 杭州群核信息技术有限公司
+ 深圳市佳信捷智慧物联有限公司
+ 南京优达创信息技术有限公司
+ 西安恒德天云信息技术有限公司
+ 北京盛云致臻智能科技有限公司
+ 大连车联信息技术有限公司
+ 杭州叽咪文化传媒有限公司

## 版权声明

开源不代表免费，`TOPIAM` 遵循 AGPL-3.0 开源协议发布，并提供技术交流学习，但绝不允许修改后和衍生的代码做为闭源的商业软件发布和销售！ 如果需要将本产品在本地进行任何附带商业化性质行为使用，请联系项目负责人进行商业授权，以遵守 AGPL 协议保证您的正常使用。

如果您**需要将本产品进行二次开发、更改并进行任何附带商业化性质行为使用**，请联系我们进行商业授权，以遵守 `AGPL-3.0` 协议保证您的正常使用。

目前在国内 `GPL` 协议**具备合同特征，是一种民事法律行为** ，属于我国《合同法》调整的范围。 `TOPIAM` 项目团队保留诉讼权利。

[相关案例：违反 `GPL` 协议赔偿 50 万，国内首例！](https://mp.weixin.qq.com/s/YQ6sNjbDS-P7BViLZIsaoA)

> 本项目采用 `AGPL` 开源协议（抄袭牟利索赔100万）。

> 使用必须遵守国家法律法规，不允许非法项目使用，后果自负。

## 参与贡献

我们强烈欢迎有兴趣的开发者参与到项目建设中来，同时欢迎大家对项目提出宝贵意见建议和功能需求，项目正在积极开发，欢迎 PR 👏。

强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545)
和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)
，更好的问题更容易获得帮助。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=topiam/eiam&type=Date)](https://star-history.com/#topiam/eiam&Date)

## FOSSA Status

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftopiam%2Feiam.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftopiam%2Feiam?ref=badge_large)

## License

<img src='https://www.gnu.org/graphics/agplv3-with-text-162x68.png' alt="license">
