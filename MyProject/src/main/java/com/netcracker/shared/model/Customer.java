package com.netcracker.shared.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;
    @Column(name = "discount")
    private int discount;
    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    private Set<Adress> adresses;


    public Customer() {
    }

    public Customer(User user, int discount, Set<Adress> adresses) {
        this.user = user;
        this.discount = discount;
        this.adresses = adresses;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public Set<Adress> getAdresses() {
        return adresses;
    }

    public void setAdresses(Set<Adress> adresses) {
        this.adresses = adresses;
    }
}
