package com.netcracker.server.config;

import org.hibernate.SessionFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;


@Configuration
@ComponentScan(basePackages = "com.netcracker")
@PropertySource(value = {"classpath:application.properties"} )
@EnableTransactionManagement
public class HibernateConfig {

    @Autowired
    private Environment environment;

    @Autowired
    public DataSource dataSource;

    private Properties hibernatePropertis() {
        Properties p = new Properties();
        p.put("hibernate.dialect", environment.getRequiredProperty("hibernate.dialect"));
        return p;
    }

    @Bean
    @Autowired
    public org.springframework.orm.hibernate5.HibernateTransactionManager transactionManager(SessionFactory sessionFactory){
        org.springframework.orm.hibernate5.HibernateTransactionManager txManager = new HibernateTransactionManager();
        txManager.setSessionFactory(sessionFactory);
        return txManager;
    }

    @Bean
    public org.springframework.orm.hibernate5.LocalSessionFactoryBean sessionFactoryBean(){
        org.springframework.orm.hibernate5.LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        sessionFactory.setPackagesToScan(new String[]{"com.netcracker.shared.model"});
        sessionFactory.setHibernateProperties(hibernatePropertis());
        return sessionFactory;
    }

}

