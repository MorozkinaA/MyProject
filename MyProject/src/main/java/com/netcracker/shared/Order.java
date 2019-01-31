package com.netcracker.shared;


import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    @JoinColumn(name = "cart", referencedColumnName = "cart_id")
    private Cart cart;
    @Column(name = "order_date")
    private Date date;
    @Column(name = "order_status")
    private String status;

    public Order() {
    }

    public Order(Cart cart, Date date, String status) {
        this.cart = cart;
        this.date = date;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
