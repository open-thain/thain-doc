<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 用户管理

## 默认用的是数据库管理

## DB 用户管理

1. 配置数据库连接并设置验证方式为 DB

   通过[数据库配置](./2.数据库配置.md)正确配置数据库连接之后

   修改 thain-server/src/main/resources/application.properties 中

   ```properties
   #通过数据库进行用户验证
   thain.login.source=DBAuthentication
   ```

1. 添加用户

   管理员登录后，可以进入/admin/user页面添加用户

## Ldap 用户管理

1. 配置 Ldap 并启动服务[参考 openLdap](http://www.openldap.org/doc)

   LDIF 定义如下(定义了基本的用户 admin:admin)

   ```ldif
   dn: {your base DN}
   objectClass: dcObject
   objectClass: organization
   objectClass: top
   dc: {your DC}
   o: {your organization}

   dn: ou=people,{your base DN}
   objectClass: organizationalUnit
   objectClass: top
   ou: people

   dn: uid=admin,ou=people,{your base DN}
   objectClass: inetOrgPerson
   objectClass: organizationalPerson
   objectClass: person
   objectClass: top
   cn: admin
   sn: admin
   uid: admin
   userPassword:: e0NSWVBUfVo2VGdhNGVkQkFjekU=
   ```

1. 配置 Ldap 连接并设置验证方式为 Ldap

   thain-server/src/main/resources/application.properties 中添加

   ```properties
   spring.ldap.urls=ldap:{ldap-url}
   spring.ldap.username={ldap-username}
   spring.ldap.password={ldap-password}
   spring.ldap.base={ldap-baseDn}
   ```

   并修改

   ```properties
   #通过Ldap进行用户验证
   thain.login.source=LdapAuthentication
   ```

1. 添加用户

   添加用户可以通过此方法`com.xiaomi.thain.server.dao.LdapUserDao.save(LdapUser user)`

## 第三方授权登录

1. 申请需要登录的第三方应用的 client-id 和 client-secret 并添加两条基本配置：

   spring.security.oauth2.client.registration.{clientName}.client-id=${clientId}  
    spring.security.oauth2.client.registration.{clientName}.client-secret=${clientSecret}

   更具体配置可以参考 spring-security 文档

1. 如需手动注册 ClientRegistration,可以按照如下配置

   ```java
   @Configuration
   public class OAuth2LoginConfig {
       //添加客户端并注册bean
   	@Bean
    	public ClientRegistrationRepository clientRegistrationRepository() {
    		return new InMemoryClientRegistrationRepository(this.googleClientRegistration());
    	}

    	//添加google客户端的配置
     	private ClientRegistration googleClientRegistration() {
     		return ClientRegistration.withRegistrationId("google")
     			.clientId("google-client-id")
     			.clientSecret("google-client-secret")
     			//...
     			.clientName("Google")
     			.build();
    	}
   }
   ```

   并修改

   ```java
   @EnableWebSecurity
   @Log4j2
   public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

       @Autowired
       private final ClientRegistrationRepository clientRegistrationRepository;

       //...
              /**
        * 第三方登录配置
        *
        * @param http HttpSecurity
        */
       private void thirdConfig(HttpSecurity http) throws Exception {
           http.oauth2Login()
           .clientRegistrationRepository(clientRegistrationRepository);
           //...
       }
   }
   ```

1. 修改前端项目 thain-fe 的登录页面,添加相应第三方登录链接,系统默认提供了 google 的第三方登录

   ```html
   <a href="/api/oauth2/authorization/{clientName}"></a>
   ```

1. 如果不需要第三方登录，则删除配置

## 更多

项目用户权限验证采用 spring security 框架,更多内容参考[spring-security](https://docs.spring.io/spring-security/site/docs/old/5.2.0.BUILD-SNAPSHOT/reference/htmlsingle)
