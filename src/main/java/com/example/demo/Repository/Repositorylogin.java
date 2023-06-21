package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Modelslogin;
import com.example.demo.Models.modeltext;

public interface Repositorylogin extends JpaRepository<Modelslogin,Integer>{

	Modelslogin findByUsername(String user);

	modeltext save(modeltext data);

	

}
