package com.example.cardapio_digital.controller;

import com.example.cardapio_digital.food.Food;
import com.example.cardapio_digital.food.FoodRepository;
import com.example.cardapio_digital.food.FoodRequestDTO;
import com.example.cardapio_digital.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void create(@RequestBody FoodRequestDTO food) {
        Food entity = new Food(food);
        repository.save(entity);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foods = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foods;
    }
}
