package com.netcracker.shared.model;


import javax.annotation.Tainted;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @Column(name = "cart_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customer;
    @Column(name = "price")
    private float price;
    @OneToMany(mappedBy = "cart", fetch = FetchType.LAZY)
    private Set<Book> books;


    public Cart() {
    }

    public Cart(Customer customer, float price) {
        this.customer = customer;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
