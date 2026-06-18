package com.example.cardapio_digital.food;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "foods")
@Entity(name = "foods")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String image;

    private Integer price;

    public Food(FoodRequestDTO food) {
        this.image = food.image();
        this.title = food.title();
        this.price = food.price();
    }
}
